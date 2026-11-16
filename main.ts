// First Light — entry runner.
//
// The artwork is the entry: a single image, entry.png, sitting next to
// this file. This program's only job is to put an exact copy of it where
// the grader looks for the output: /output/entry.png, or the folder named
// by MAKEFUN_OUTPUT_DIR when the harness sets one.
//
// The copy is byte-for-byte. Nothing is resized, re-encoded, or touched:
// the judge sees exactly the bytes in this repository.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const imageName = "entry.png";

function outputFolder(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  return fromEnv && fromEnv.length > 0 ? fromEnv : "/output";
}

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, imageName);
const folder = outputFolder();
const target = join(folder, imageName);

if (!existsSync(source)) {
  console.error(`entry image not found: ${source}`);
  process.exit(1);
}

mkdirSync(folder, { recursive: true });
copyFileSync(source, target);

// A copy that silently truncated would be worse than a loud failure:
// confirm the destination holds exactly as many bytes as the source.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (sourceBytes !== targetBytes) {
  console.error(
    `copy mismatch: source ${sourceBytes} bytes, target ${targetBytes} bytes`,
  );
  process.exit(1);
}

console.log(`First Light entry placed at ${target} (${targetBytes} bytes).`);
