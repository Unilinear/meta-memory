#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(__dirname, '..');
const source = join(packageRoot, 'skills', 'meta-memory');

const targets = {
  pi: join(homedir(), '.pi', 'agent', 'skills', 'meta-memory'),
  claude: join(homedir(), '.claude', 'skills', 'meta-memory'),
  codex: join(homedir(), '.codex', 'skills', 'meta-memory'),
  agents: join(homedir(), '.agents', 'skills', 'meta-memory')
};

function usage() {
  console.log(`Install meta-memory skill into an agent skill directory.

Usage:
  meta-memory-install <target>
  meta-memory-install --all
  meta-memory-install --path <directory>

Targets:
  pi       ${targets.pi}
  claude   ${targets.claude}
  codex    ${targets.codex}
  agents   ${targets.agents}

Examples:
  meta-memory-install claude
  meta-memory-install codex
  meta-memory-install --all
  meta-memory-install --path ./.agents/skills/meta-memory`);
}

function install(dest) {
  const finalDest = resolve(dest.replace(/^~/, homedir()));
  mkdirSync(dirname(finalDest), { recursive: true });
  if (existsSync(finalDest)) rmSync(finalDest, { recursive: true, force: true });
  cpSync(source, finalDest, { recursive: true });
  console.log(`Installed meta-memory skill to ${finalDest}`);
}

const args = process.argv.slice(2);

if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
  usage();
  process.exit(args.length === 0 ? 1 : 0);
}

if (args[0] === '--all') {
  for (const dest of Object.values(targets)) install(dest);
} else if (args[0] === '--path') {
  if (!args[1]) {
    console.error('Missing directory after --path');
    process.exit(1);
  }
  install(args[1]);
} else if (targets[args[0]]) {
  install(targets[args[0]]);
} else {
  console.error(`Unknown target: ${args[0]}`);
  usage();
  process.exit(1);
}
