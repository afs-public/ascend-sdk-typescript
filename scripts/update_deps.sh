#!/bin/bash
#
# Re-applies the dependency specifiers the root pnpm-lock.yaml records for this
# package after Speakeasy regenerates package.json.
#
# Speakeasy's TypeScript template rewrites package.json on every generation and
# puts its own specifiers on some devDependencies (typescript "~5.8.3", vitest
# "^3.0.2", ...). The workspace's pnpm-lock.yaml records what this package must
# declare (typescript "catalog:", vitest pinned, ...), and pnpm-lockfile-check
# and go-tidy fail whenever package.json disagrees with it. So the lockfile is
# the source of truth: for every dependency package.json declares that the
# lockfile's importer entry for this package also lists, the lockfile's
# specifier wins. Dependencies the lockfile does not know (a new one from a
# template update) are left alone so the lockfile check still reports them.
#
# The Stage 2 workflow (sdk-source-gen-v1.yaml, "Update Dependencies") runs this
# script from the SDK directory after generation when it exists, the same hook
# the Python SDK uses. To change a pin, change it where the rest of the
# workspace does (pnpm-workspace.yaml catalog / hack/pnpm-install), not here.
#
# PNPM_LOCKFILE overrides the lockfile path (tests).

set -euo pipefail

if [ ! -f "package.json" ]; then
    echo "Error: package.json not found in $PWD" >&2
    exit 1
fi

root="$(git rev-parse --show-toplevel 2>/dev/null || true)"
if [ -z "$root" ]; then
    root="$(cd ../../.. && pwd)"
fi
lockfile="${PNPM_LOCKFILE:-$root/pnpm-lock.yaml}"
importer="$(realpath --relative-to="$root" "$PWD")"

if [ ! -f "$lockfile" ]; then
    echo "Error: lockfile $lockfile not found" >&2
    exit 1
fi

# name<space>specifier per line, dependencies + devDependencies + peerDependencies.
specifiers="$(yq -r ".importers[\"$importer\"] | ((.dependencies // {}) * (.devDependencies // {}) * (.peerDependencies // {})) | to_entries | .[] | .key + \" \" + .value.specifier" "$lockfile")"

if [ -z "$specifiers" ]; then
    echo "Error: no importer entry for $importer in $lockfile" >&2
    exit 1
fi

changed=0
while read -r name spec; do
    [ -n "$name" ] || continue
    # Regex-escape the package name; the key is matched exactly, with its quotes
    # and colon, so "typescript" never touches "typescript-eslint".
    pattern="$(printf '%s' "$name" | sed 's/[.[\*^$]/\\&/g')"
    current="$(sed -nE "s|^[[:space:]]*\"${pattern}\": \"([^\"]*)\".*|\1|p" package.json | head -n 1)"
    [ -n "$current" ] || continue
    if [ "$current" != "$spec" ]; then
        # Escape the sed replacement too: "||" ranges and "&" are valid specifiers.
        replacement="$(printf '%s' "$spec" | sed 's/[|&\\]/\\&/g')"
        sed -i.bak -E "s|^([[:space:]]*\"${pattern}\": )\"[^\"]*\"|\1\"${replacement}\"|" package.json
        echo "Updated $name: $current -> $spec"
        changed=$((changed + 1))
    fi
done <<< "$specifiers"

rm -f package.json.bak

echo "Dependency update complete: $changed specifier(s) changed to match $importer in $(basename "$lockfile")"
