const fs = require("fs");
const readline = require("readline");
const path = require("path");

function createDirStructure(input) {
  const lines = input.split("\n").map((line) => line.trim());
  let currentPath = "./";

  for (const line of lines) {
    if (line.toLowerCase() === ":q") {
      break; // Exit the loop if ':q' is entered
    }

    const parts = line.split("/").map((part) => part.trim());
    let tempPath = currentPath;

    for (let i = 0; i < parts.length; i++) {
      tempPath = path.join(tempPath, parts[i]);

      if (!fs.existsSync(tempPath)) {
        if (i === parts.length - 1 && parts[i].includes(".")) {
          // Ensure the parent directory exists before creating the file
          const parentDir = path.dirname(tempPath);
          if (!fs.existsSync(parentDir)) {
            fs.mkdirSync(parentDir, { recursive: true });
          }

          // Create file
          fs.writeFileSync(tempPath, `// ${parts[i]}`, "utf8");
        } else {
          // Create directory
          fs.mkdirSync(tempPath, { recursive: true });
        }
      }
    }

    currentPath = tempPath;
  }
}

if (process.argv.includes("-t")) {
  // Read from stdin
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = "";
  rl.on("line", (line) => {
    input += line + "\n";
  }).on("close", () => {
    createDirStructure(input);
  });
} else if (process.argv.length > 2) {
  // Read from file
  const filename = process.argv[2];
  const data = fs.readFileSync(filename, "utf8");
  createDirStructure(data);
}
