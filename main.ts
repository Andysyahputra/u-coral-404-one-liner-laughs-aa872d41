// One-Liner Laughs — writes a single funny line to /output/entry.txt.
// Deterministic: the same entry, byte-for-byte, on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I finally cleaned my inbox. It took 4 hours, 2 coffees, and one email from 2019 that simply said 'per my last email'.";

// Gate guard: the entry must be 1-200 characters and not only whitespace.
// Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(
    `entry length ${ENTRY.length} is outside the 1-200 character gate`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace, which fails the gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
