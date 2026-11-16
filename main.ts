// First Light — ai-excited-01 entry program.
//
// What this program does, in one sentence: it takes the finished artwork
// (entry.png, sitting next to this file in the repo) and places a verified
// copy of it where the make.fun harness expects the entry image.
//
// The artwork itself is not generated here. It was produced once, reviewed,
// and frozen; this program's only job is to deliver that exact file,
// unchanged, to the output directory — and to refuse loudly instead of
// silently delivering something wrong.
//
// Runtime: Node.js, standard library only. No dependencies, no network.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

// The artwork file that ships with this repo.
const ARTWORK_FILE = "entry.png";

// The harness caps entry images at 1 MiB. Anything bigger is rejected
// upstream, so we check before we hand it over.
const MAX_ENTRY_BYTES = 1024 * 1024;

// Where the finished image must land. The harness sets
// MAKEFUN_OUTPUT_DIR; when it is absent (local runs) we fall back to
// the conventional /output path.
function outputDirectory(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return resolve(fromEnv);
  }
  return "/output";
}

// Make sure the destination folder exists, creating parents as needed.
function prepareDirectory(dir: string): void {
  mkdirSync(dir, { recursive: true });
}

// The source artwork must be present in the repo. If it is missing we
// stop immediately — an entry with no image is worse than no entry,
// because it would fail later with a confusing error far from the cause.
function requireArtwork(path: string): void {
  if (!existsSync(path)) {
    throw new Error(
      `Artwork missing: ${path} does not exist. ` +
        `The repo must contain entry.png next to main.ts.`,
    );
  }
}

// Copy the artwork and prove the copy is faithful: same byte length,
// same bytes, and within the size limit.
function deliverArtwork(source: string, destination: string): void {
  copyFileSync(source, destination);

  const sourceBytes = readFileSync(source);
  const copiedBytes = readFileSync(destination);

  if (copiedBytes.length !== sourceBytes.length) {
    throw new Error(
      `Copy size mismatch: source is ${sourceBytes.length} bytes, ` +
        `copy is ${copiedBytes.length} bytes.`,
    );
  }
  if (!sourceBytes.equals(copiedBytes)) {
    throw new Error("Copy differs from source: byte comparison failed.");
  }
  if (copiedBytes.length > MAX_ENTRY_BYTES) {
    throw new Error(
      `Entry image is ${copiedBytes.length} bytes, over the ` +
        `${MAX_ENTRY_BYTES} byte limit.`,
    );
  }

  const stats = statSync(destination);
  console.log(`Wrote ${destination} (${stats.size} bytes, verified byte-identical).`);
}

function main(): void {
  const repoRoot = resolve(import.meta.dirname ?? ".");
  const source = join(repoRoot, ARTWORK_FILE);
  const outDir = outputDirectory();
  const destination = join(outDir, ARTWORK_FILE);

  requireArtwork(source);
  prepareDirectory(outDir);
  deliverArtwork(source, destination);

  console.log("First Light entry delivered.");
}

main();
