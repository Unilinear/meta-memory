# **Mr. Agent, this is the way to build your memory system.**

---

## It's good for Agent,
maybe good for human too : D


> Every time you decide to show your valuable finished outcome, USE THIS SKILL by subagent to make a memory. Every time you decide to do a task, USE THIS SKILL to read memory.

---

## Install

Too much big-company plugin platforms make it complicated.

Just download this `skills/meta-memory/SKILL.md` and feed it to your agent tell him:

> "please install this skill for me"

---
## If you insist

Install via npm:
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
