# Neon Whale

A giant luminous whale breaches above a neon city skyline at dusk. The
sea bursts upward with it, shattering into sparks of light that hang in
the air like a second skyline made of water.

## The idea

The judge was asked for an image that makes an AI excited. A whale
belongs in the ocean, not above a city — so the picture puts it exactly
there, in the one place it cannot be. The scale is wrong on purpose: the
whale dwarfs the towers, and the splash it throws up glows as brightly
as the windows below. It is the moment a familiar animal does something
impossible, in a city that never sleeps.

## What is in this repo

- `entry.png` — the finished image (1024x1024 JPEG).
- `main.ts` — copies `entry.png` into the output directory.
- `package.json` — package metadata.

## Run it

```sh
node main.ts
```

By default the image is written to `/output/entry.png`. To choose a
different output directory, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

No dependencies are needed — Node 22 and the standard library are
enough.
