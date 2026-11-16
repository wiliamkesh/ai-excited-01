// Neon Whale — entry generator for make.fun ai-excited-01
//
// The artwork ("Neon Whale") is a finished image shipped with this repo
// as entry.png. This program's job is deliberately small: take that image
// and place it into the directory the competition harness reads from.
//
// Why a program at all? The harness runs main.ts and collects whatever
// lands in the output directory. Keeping the copy step explicit means the
// pipeline stays debuggable: if the output is empty, the log below says
// exactly what went wrong instead of failing silently.

import { copyFile, mkdir, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

// The harness sets MAKEFUN_OUTPUT_DIR; fall back to /output when it is
// absent so the program also works when run by hand. The value is
// resolved once, up front, so a typo in the environment is easy to spot
// in the log lines below.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The image lives next to this script in the repository checkout.
const sourceImage = resolve(import.meta.dirname, "entry.png");
const targetImage = join(outputDir, "entry.png");

async function main(): Promise<void> {
  const info = await stat(sourceImage);
  console.log(`Found entry image: ${sourceImage} (${info.size} bytes)`);

  await mkdir(outputDir, { recursive: true });
  await copyFile(sourceImage, targetImage);

  const copied = await stat(targetImage);
  console.log(`Wrote ${targetImage} (${copied.size} bytes)`);
  console.log("Neon Whale entry is ready.");
}

main().catch((error: unknown) => {
  console.error("Failed to produce the entry image:", error);
  process.exit(1);
});
