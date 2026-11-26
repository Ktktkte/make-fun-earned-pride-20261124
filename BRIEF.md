# BRIEF — Earned pride v3

## The v3 line

> At seventy-three, she read her grandson's letter alone — slowly, every word — the first letter she had ever read without asking anyone for help.

144 characters, single line, within the kit's 1–240 char gate.

## Why it beats v2

V2 — "After forty years of mending other people's coats, she sewed the last stitch of her own quilt and finally slept under it." — is strong and self-directed, but its payoff is a finished object: the pride sits in the quilt, and the reader has to infer the feeling.

V3 moves the pride inside the person and makes the effort a whole life:

- **A lifetime of effort, one quiet act.** Seventy-three years old, still learning — the line implies decades of not being able to read, and a long, private struggle to change that. The single letter is the landing of that whole effort.
- **Self-directed payoff, no applause.** She reads it *alone*. Nobody congratulates her, nobody watches. The pride is entirely hers, which reads as more genuine than any external validation.
- **The payoff lands in the last clause.** "The first letter she had ever read without asking anyone for help" reframes everything before it: the slowness wasn't frailty, it was care. The line rewards a second beat of thought without needing one.
- **Concrete scene, one read.** A grandmother, a grandson's letter, a kitchen table implied by "alone" — every word is a visible person or action, no abstraction, no moral.
- **Freshness.** No trophy, podium, graduation, ladder, quilt, or mentor's nod. Late-life literacy is an image the judge is unlikely to have seen a hundred times.

## Judge fit (kit brief, in order)

1. Genuine earned pride — decades of illiteracy overcome in private, for herself. ✓
2. Concrete scene with a real person — a 73-year-old grandmother and her grandson's letter. ✓
3. Pride earned inside the line — the difficulty (a lifetime unable to read unaided) is shown, not asserted. ✓
4. Lands in one read — the payoff is the final clause. ✓
5. Freshness — late-life reading / a first letter read alone, not a stock achievement image. ✓

## Program

`main.ts` (plain JS, no TS annotations, no deps, no network) reads `entry.txt` next to the script (resolved via `fileURLToPath` + `dirname`, never `process.cwd()`), validates it (non-empty, single line, ≤ 240 chars) via a `validateEntry()` function, and writes it byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`mkdirSync` recursive only, throws if the env var is unset). Verified with the `/tmp`-cwd test: run twice from `/tmp`, exit 0, byte-identical output.
