# **Make memory work like skills.**

Meta-Memory turns project memory into portable skill-like files:

- **Skill-shaped memory** — brief notes load first; full notes load only when needed.
- **More attention space** — trade cheap file space for precious context length.
- **Portable by default** — when you leave any harness, good or bad, take your memory with you.

Use it for completed work, research notes, experiments, plans, design decisions, and reusable conversation context.

## Install from npm

```bash
npm install -g meta-memory-skill
```

Then install the skill into your agent:

```bash
meta-memory-install claude   # ~/.claude/skills/meta-memory
meta-memory-install codex    # ~/.codex/skills/meta-memory
meta-memory-install pi       # ~/.pi/agent/skills/meta-memory
meta-memory-install agents   # ~/.agents/skills/meta-memory
```

Install everywhere:

```bash
meta-memory-install --all
```

Install to a custom or project-local path:

```bash
meta-memory-install --path ./.agents/skills/meta-memory
```

## Pi Agent

Install directly as a Pi package:

```bash
pi install npm:meta-memory-skill
```

Project-local:

```bash
pi install -l npm:meta-memory-skill
```

Use it with:

```text
/skill:meta-memory
```

## Claude Code

```bash
npm install -g meta-memory-skill
meta-memory-install claude
```

Manual install:

```bash
mkdir -p ~/.claude/skills/meta-memory
cp -R skills/meta-memory/* ~/.claude/skills/meta-memory/
```

Restart Claude Code after installing.

## Codex

```bash
npm install -g meta-memory-skill
meta-memory-install codex
```

Manual install:

```bash
mkdir -p ~/.codex/skills/meta-memory
cp -R skills/meta-memory/* ~/.codex/skills/meta-memory/
```

If your Codex setup uses another skills directory:

```bash
meta-memory-install --path /path/to/skills/meta-memory
```

## Skill file

The skill lives at:

```text
skills/meta-memory/SKILL.md
```

## License

MIT
