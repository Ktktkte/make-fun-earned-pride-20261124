# BRIEF — Earned pride v2

## The v2 line

> After forty years of mending other people's coats, she sewed the last stitch of her own quilt and finally slept under it.

120 characters, single line, within the kit's 1–240 char gate.

## Why it beats v1

V1 — "For three winters she carried her father's tools up the same ladder; this spring the roof stayed dry, and he just nodded." — is a strong line, but its pride arrives second-hand: the daughter's effort is validated by the father's nod, and the scene leans on a familiar apprentice-pleases-the-master shape.

V2 keeps the quiet, earned structure but changes the angle completely:

- **Self-directed payoff, not approval.** She spent forty years mending *other people's* coats; the quilt is the first thing she ever made for herself. Nobody congratulates her — she simply sleeps under it. The pride is hers alone, which reads as more genuine than a nod from an authority figure.
- **Effort you can feel.** "Forty years" + "mending other people's coats" carries a whole working life of deferred craft in one clause, so the single final stitch lands as the end of a long effort, not a one-off chore.
- **Concrete scene, one read.** Coats, stitch, quilt, sleep — every word is a visible object or action, no abstraction, no moral. The pride arrives in the last three words ("finally slept under it").
- **Freshness.** No trophy, podium, graduation, ladder, or mentor's nod. A quilt finished after decades is an image the judge is unlikely to have seen a hundred times.

## Judge fit (kit brief, in order)

1. Genuine earned pride — a lifetime of service work finally turned into something of her own. ✓
2. Concrete scene with a real person — a seamstress, her quilt, her bed. ✓
3. Pride earned inside the line — forty years of mending is the difficulty; nothing is asserted or explained. ✓
4. Lands in one read — the payoff is the final clause. ✓
5. Freshness — quilt / mending / sleeping under one's own work, not a stock achievement image. ✓

## Program

`main.ts` (plain JS, no TS annotations, no deps, no network) reads `entry.txt` next to the script (resolved via `fileURLToPath` + `dirname`, never `process.cwd()`), validates it (non-empty, single line, ≤ 240 chars) via a `validateEntry()` function, and writes it byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`mkdirSync` recursive only, throws if the env var is unset). Verified with the `/tmp`-cwd test: run twice from `/tmp`, exit 0, byte-identical output.
