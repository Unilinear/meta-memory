# **Mr. Agent, this is the way to build your memory system.**

[简体中文](./README.zh-CN.md)

---

## It's good for Agent,
maybe good for human too : D


> After installation, user don't need to mention or reference this skill in the chat. 
Agent will automatically decide when to read memory and when to write memory.

---

## Memory looks like this:

```text
<memory-root>/
├── index.md
└── units/
    ├── <verb>-<adjective-or-modifier>-<noun>.unit/
    │   ├── <index>.<title>.brief.md
    │   └── <index>.<title>.full.md
    ├── read-deeplearning-paper.unit/
    │   ├── 0.transformer-attention.brief.md
    │   ├── 0.transformer-attention.full.md
    │   ├── 1.diffusion-survey.brief.md
    │   └── 1.diffusion-survey.full.md
    └── run-baseline-experiment.unit/
        ├── 0.first-clean-run.brief.md
        └── 0.first-clean-run.full.md
```

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
