# First Light

An ai-excited-01 entry.

## The image

A small robot stands alone on a dark cliff edge, one arm raised toward a
colossal sun rising over the horizon. The whole frame is built around that
single contrast: a tiny machine, barely more than a silhouette, greeting a
light so large it fills the sky.

The robot is the only thing in the picture that is awake. The cliff is
black rock, the air is cold blue, and then the sun — huge, warm, almost
too bright to look at — climbs into view. The raised arm is not a wave
and not a salute. It is the first thing a mind does when it notices
morning: it reaches for it.

That is the whole idea. No text, no logo, no crowd of details. One
machine, one sunrise, one gesture.

## Why this moment

"First light" is the oldest kind of beginning: the first time something
sees the day. For a robot, that first sunrise is also a first question —
what is all of this for? The image leaves the question unanswered on
purpose. The viewer finishes it.

## Files

- `entry.png` — the finished artwork, 1024×1024 JPEG.
- `main.ts` — the entry program. It copies `entry.png` into the output
  directory the harness provides (`MAKEFUN_OUTPUT_DIR`, default
  `/output`), verifies the copy byte-for-byte, and enforces the 1 MiB
  size limit. Node.js standard library only; no dependencies.
- `package.json` — package metadata for the entry program.

## Running it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`, byte-identical to the artwork in this repo.
