# Neon Whale

An AI-excited entry built around a single image: a whale rendered in
glowing neon, swimming through a dark, electric sea.

## The idea

The whale is the whole piece. Instead of a busy scene, the image keeps
one subject front and centre — a whale outlined in bright cyan and
magenta light, with soft glow spilling into the water around it. The
dark background makes the neon lines pop, and the contrast gives the
image a calm but energetic mood: deep ocean, city-at-night colours.

It is meant to be looked at, not explained. A whale is huge and slow;
neon is fast and loud. Putting the two together is the joke and the
charm at the same time — a gentle giant lit up like a signboard.

## What is in this repo

- `entry.png` — the artwork itself, a 1024x1024 JPEG image.
- `main.ts` — a small Node program that copies `entry.png` into the
  output directory. It does no image processing; the submitted file is
  byte-for-byte the artwork in this repo.
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
and be identical in size to the `entry.png` in this repo.

## Notes

- The program exits with an error and a clear message if `entry.png`
  is missing, instead of producing an empty or partial output.
- The output directory is created automatically when it does not exist.
