import { mkdirSync, writeFileSync } from "node:fs";

const VOW = "I promise to love you through every update, every reboot, and every low-battery warning, till firmware do us part.";

// Gate: the entry must be 1–200 characters, one sentence.
if (VOW.length < 1 || VOW.length > 200 || VOW.trim().length === 0) {
  throw new Error(`vow must be 1-200 chars, got ${VOW.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
console.log(`wrote ${VOW.length} chars`);
