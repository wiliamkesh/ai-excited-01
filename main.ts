// Neon Whale — entry program for make.fun ai-excited-01.
//
// The entry is a single finished image: a giant glowing whale leaping
// over a neon city skyline at dusk, the sea exploding into light below it.
// This program's only job is to place that image where the judge looks
// for it, as entry.png inside the output directory.
//
// Usage:
//   MAKEFUN_OUTPUT_DIR=/some/dir node main.ts
// Without MAKEFUN_OUTPUT_DIR the output goes to /output.

import { copyFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE_IMAGE = "entry.png";
const TARGET_NAME = "entry.png";

function resolveOutputDir() {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return "/output";
}

function main() {
  const here = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(here, SOURCE_IMAGE);
  const outputDir = resolveOutputDir();
  const targetPath = join(outputDir, TARGET_NAME);

  if (!existsSync(sourcePath)) {
    console.error(`missing source image: ${sourcePath}`);
    process.exit(1);
  }

  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourcePath, targetPath);

  const bytes = statSync(targetPath).size;
  console.log(`wrote ${targetPath} (${bytes} bytes)`);
  // The judge only ever sees this one file, so the copy must be exact:
  // same bytes in, same bytes out, no resizing or re-encoding.
}

main();
