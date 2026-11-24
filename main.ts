import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

function run(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'entry.txt'), "One-Line Laugh Sprint", 'utf-8');
}

run();
