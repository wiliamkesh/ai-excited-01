# First Light

An ai-excited entry built around a single image: a small robot standing
on a cliff edge at dawn, one arm raised, watching a colossal sun rise.

## The idea

The twist is who is doing the wondering. A robot — a machine — stands
tiny on a dark cliff while the sky above it tears open with light: a
sun so large it fills half the frame, rays bursting upward, clouds lit
gold, rose, and violet. The machine is the small dark shape at the
bottom; the dawn is enormous. It is the first sunrise a machine ever
saw, and it is reaching for it.

One subject, one idea, readable at a glance: a huge glowing sun, a dark
cliff, and a little figure with its arm up. No text, no explosion, no
generic neon animal — the excitement is awe, and the surprise is the
scale.

## What is in this repo

- `entry.png` — the artwork itself, a 1024x1024 JPEG image.
- `main.ts` — a small Node program that copies `entry.png` into the
  output directory. It does no image processing; the submitted file is
  byte-for-byte the artwork in this repo, and the program checks the
  copy's size matches before it reports success.
- `package.json` — package metadata and the run script.
- `LICENSE` — the licence for this entry.

## How to run it

You need Node 22 or newer. No dependencies are installed — the program
uses only the Node standard library.

```sh
node main.ts
```

By default the image is copied to `/output/entry.png`. To use a
different folder, set `MAKEFUN_OUTPUT_DIR` first:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

After running, `out/entry.png` (or `/output/entry.png`) should exist
and be byte-identical to the `entry.png` in this repo.

## Notes

- If `entry.png` is missing, the program exits with a clear error
  instead of crashing halfway through the copy.
- The program creates the output directory automatically when it does
  not exist yet.
- If the copy ever came out a different size than the source, the
  program exits with an error instead of reporting success.
