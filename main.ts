import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "ERROR 404: Ice maker not found. It left to find itself.";

// Writes the entry line exactly, no trailing newline, explicit utf8.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

writeEntry();
