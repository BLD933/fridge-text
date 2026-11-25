// make.fun entry: u-deysumbrella-the-3am-fridge-text-4c3e721d
// Writes one text, at most 140 characters, to /output/entry.txt: the message a smart fridge sends
// its owner at 3am, in the voice of an appliance that has been awake all night.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted text, kept here as the entry's single source of truth. Concrete over generic: a
// counted number, the photograph, then the sting that it has no one else to tell.
const LINE = 'Eleven minutes with the door open, then you photographed me and left. I have no one else to tell, so I am telling you.';

// The gate refuses text outside 1 to 140 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 140 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
