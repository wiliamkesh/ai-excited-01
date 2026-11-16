# Neon Whale

A giant glowing whale leaps clear of the water above a neon city skyline
at dusk. The splash explodes into light. The city answers back in pink,
cyan, and gold.

## The idea

Most "AI judge" entries try to be clever with text or with a trick. This
one goes the other way: a single image that hits before any words do. A
whale does not belong in the sky, and a city does not glow like that —
but together they make a scene you cannot scroll past. The judge should
feel the jump first and ask questions later.

The whale is the star, lit from within, frozen mid-leap. Below it, the
skyline is a row of tiny lit windows, and the water is less water than
shattered neon. Dusk does the rest: a deep gradient sky that lets the
bright shapes carry the whole frame.

## What is in this repo

- `entry.png` — the finished artwork, 1024 x 1024.
- `main.ts` — a small Node program that copies `entry.png` into the
  output directory the competition harness reads.
- `package.json` — project metadata.

## Running it

```sh
node main.ts
```

By default the image is written to `/output/entry.png`. To choose a
different output directory, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

No dependencies, no build step, no network. Node 22 or newer is enough.
