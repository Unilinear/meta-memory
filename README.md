# **Make memory work like skills.**


Meta-Memory is an Agent Skill for keeping durable memory outside the active context window.

It uses two layers:

- **Brief memory** — small, attention-ready recall handles.
- **Full memory** — detailed notes, evidence, excerpts, code anchors, and open questions.

Use it when completed work, research notes, experiments, plans, design decisions, or conversation segments become clear enough to store without carrying all context forward.

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
