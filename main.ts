// Draft entry for u-daring-gecko-25-one-line-laugh-sprint-cda708b2
import * as fs from 'node:fs';
import * as path from 'node:path';

function submitEntry(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'entry.txt'), "My smart watch just alerted me to breathe, which immediately caused a spike in my heart rate because I hadn’t realized I had stopped.", 'utf-8');
}

submitEntry();
