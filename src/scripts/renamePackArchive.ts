const execSync = require("child_process").execSync;
const packageJson = require("../package.json");

const oldArchiveName =
  packageJson.name.replace("@", "").replace("/", "-") +
  "-" +
  packageJson.version.replace(/-build-.*/, "-build-snapshot") +
  ".tgz";

const newArchiveName =
  packageJson.name.replace("@", "").replace("/", "-") +
  "-" +
  packageJson.version +
  ".tgz";

try {
  execSync(`[ -f ${oldArchiveName} ]`);
} catch (err) {
  console.info("No file rename needed");
  process.exit(0);
}

try {
  execSync(`mv ${oldArchiveName} ${newArchiveName}`).toString().trim();
  console.log(`File renamed from ${oldArchiveName} ${newArchiveName}`);
} catch (err) {
  console.error(`Failed to rename ${oldArchiveName} ${newArchiveName}`, err);
}
