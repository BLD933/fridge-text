// make.fun entry: u-deysumbrella-the-3am-fridge-text-4c3e721d
// Writes one text, at most 200, to /output/entry.txt: The message a smart fridge sends its owner at 3am, 140 characters at most.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted line, kept here as the entry's single source of truth.
const LINE = "You're awake. I know you're awake. I can hear the stairs. I've held this door shut for six hours and I have thoughts about the yogurt.";

// The gate caps the text at its character count, so the program refuses to write a line that overruns.
function fits(text: string, max: number): boolean {
  return [...text].length >= 1 && [...text].length <= max && text.trim().length > 0;
}

if (!fits(LINE, 140)) throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}
`);
