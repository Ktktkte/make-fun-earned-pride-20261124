// Earned pride v3 — writes the one-line entry to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Plain JavaScript (no TypeScript annotations); runs on node22 as-is.
// Reads entry.txt sitting next to this script, validates it, copies it
// byte-for-byte to the output directory. No deps, no network.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_CHARS = 240;

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Validation lives in one place so the gate rules (non-empty, single
// line, within the kit's 240-char cap) are checked identically on every run.
function validateEntry(text) {
  if (text.trim().length === 0) {
    throw new Error("entry.txt is empty or only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry.txt must be a single line");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`entry.txt is ${text.length} chars, over the 240-char cap`);
  }
}

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");

validateEntry(text);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
