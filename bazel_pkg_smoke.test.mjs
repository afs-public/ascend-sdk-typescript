// Regression guard for the Bazel npm_package: a plain-Node consumer must be
// able to resolve the SDK through its exports map. Before the exports fix,
// every runtime entry pointed at a dist/ tree the Bazel build never
// produces, so these imports failed at resolution.
import assert from "node:assert";

const core = await import("@apexfintechsolutions/ascend-sdk/core.js");
assert.strictEqual(typeof core.ApexascendCore, "function", "core.js must export ApexascendCore");

const fn = await import(
  "@apexfintechsolutions/ascend-sdk/funcs/accountManagementListAccounts.js"
);
assert.strictEqual(
  typeof fn.accountManagementListAccounts,
  "function",
  "funcs modules must be importable",
);

console.log("bazel npm_package smoke: OK");
