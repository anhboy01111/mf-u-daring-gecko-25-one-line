import { mkdirSync, mkdtempSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

function run(): void {
  const directory = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
  mkdirSync(directory, { recursive: true });

  const temporaryDirectory = mkdtempSync(join(directory, '.laugh-'));

  try {
    const temporaryFile = join(temporaryDirectory, 'entry.txt');

    writeFileSync(
      temporaryFile,
      "I finally conquered procrastination; I'll tell you how tomorrow.\n",
      { encoding: 'utf8', flag: 'wx' }
    );

    renameSync(temporaryFile, join(directory, 'entry.txt'));
  } finally {
    rmSync(temporaryDirectory, { recursive: true, force: true });
  }

  process.stderr.write(
    'entry.txt generated. The reported make.fun rejection is a server-side competition-status issue, not a code error. Submission requires an open entry window; this program cannot reopen the competition and has not submitted anything.\n'
  );
}

try {
  run();
} catch (error: unknown) {
  process.stderr.write(
    `Output generation failed: ${error instanceof Error ? error.message : String(error)}\n`
  );
  process.exitCode = 1;
}
