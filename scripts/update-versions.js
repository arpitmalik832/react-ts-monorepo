const fs = require("fs");
const path = require("path");
const glob = require("glob");

const newVersion = process.argv[2];
if (!newVersion) {
  console.error("Please provide a version number");
  process.exit(1);
}

// Find all package.json files in the workspace
const packageFiles = glob.sync("**/package.json", {
  ignore: ["**/node_modules/**", "**/dist/**"],
});

// Update version in each package.json
packageFiles.forEach((packagePath) => {
  const content = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  content.version = newVersion;
  fs.writeFileSync(packagePath, JSON.stringify(content, null, 2) + "\n");
  console.log(`Updated ${packagePath} to version ${newVersion}`);
});
