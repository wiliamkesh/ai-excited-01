// ai-excited-01 entry: copy the image to the output directory.
//
// The image itself is the entry: a colossal glowing whale breaching
// over a neon city skyline at dusk, water exploding into light.
// Deterministic by construction: the same source file is copied
// byte for byte on every run, so two runs write identical output.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// entry.png sits next to this program in the repository.
// The copy is a plain byte-for-byte transfer: no re-encode, no resize,
// no metadata rewrite — the output file is identical to the source,
// bit for bit, every single time.
// Run it twice and diff the two outputs: they are the same bytes.
// No randomness, no timestamps, no network — the entry is fully reproducible.
const here = fileURLToPath(new URL(".", import.meta.url));
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
