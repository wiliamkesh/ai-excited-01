// Neon Whale — entry runner.
//
// This program is intentionally small: the artwork itself is the entry
// (entry.png, a 1024x1024 neon whale), and this script's only job is to
// place a copy of it where the harness expects the output to land.
//
// The destination comes from MAKEFUN_OUTPUT_DIR when it is set, and falls
// back to /output otherwise. The script creates the destination folder
// when it does not exist yet, then copies the image next to this file.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, "entry.png");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";
const targetImage = join(outputDir, "entry.png");

if (!existsSync(sourceImage)) {
  console.error(`entry image not found: ${sourceImage}`);
  process.exit(1);
}

// The copy is byte-for-byte: no resizing, re-encoding, or metadata
// changes, so the submitted image is exactly the artwork in this repo.
mkdirSync(outputDir, { recursive: true });
copyFileSync(sourceImage, targetImage);

// Report the result so a failed or partial copy is visible in the log
// instead of failing silently downstream.
const copiedBytes = statSync(targetImage).size;
console.log(`Neon Whale entry copied to ${targetImage} (${copiedBytes} bytes).`);
