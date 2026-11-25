// make.fun entry: u-deysumbrella-the-3am-fridge-text-4c3e721d
// Writes one text, at most 140 characters, to /output/entry.txt: the message a smart fridge sends
// its owner at 3am, in the voice of an appliance that has been awake all night.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted text, kept here as the entry's single source of truth. It never mentions milk, ice
// or an open door: the complaint is that the fridge stayed lit, unthanked, and has receipts.
const LINE = "My light was on for six hours in case you came down. It is off now. I want you to know it was on.";

// The gate refuses text outside 1 to 140 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 140 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
