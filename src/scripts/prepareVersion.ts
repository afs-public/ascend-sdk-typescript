const fs = require("fs");
const execSync = require("child_process").execSync;
const packageJson = require("../package.json");

const mode = process.argv[2]; // 'snapshot' or 'release'

/*
function getApiSpecSha() {
  try {
    return execSync('git log -n 1 --pretty=format:%h -- ../ascend.yaml').toString().trim();
  } catch (error) {
    console.error('Error fetching API Spec commit SHA:', error);
    return 'unknown';
  }
}
*/

function getSdkBuildSha() {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch (error) {
    console.error("Error fetching SDK Build commit SHA:", error);
    return "unknown";
  }
}

let version = packageJson.version;
if (mode === "snapshot") {
  version = packageJson.version.replace(
    "build-snapshot",
    `build-${getSdkBuildSha()}`
  );
} else if (mode === "release") {
  version = packageJson.version.split("-")[0];
}

if (packageJson.version != version) {
  console.log(`Replacing ${packageJson.version} with ${version}`);
  packageJson.version = version;
  fs.writeFileSync("../../package.json", JSON.stringify(packageJson, null, 2));
}
console.log(`Using package.version: ${packageJson.version}`);
