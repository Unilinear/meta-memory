---
name: meta-memory
description: Builds and uses a two-stage brief/full meta-memory system for agentic research and coding workflows. Use and store when completed work, paper reading, experiments, plans, or conversation segments become disentangled enough to capture as durable memory without carrying full context. With automation hooks for *offloaded* memory work and rules for deciding when to expand from brief to full memory.
license: MIT
---

# Meta-Memory Skill for Agent

Use this skill to keep agent context clean by storing durable memory as files:

- **Brief layer:** small, attention-ready memory handle.
- **Full layer:** detailed evidence, notes, excerpts, code references, and open questions.

## Trigger

Use meta-memory when a task is **disentangled**:

- completed experiment run
- paper or literature-reading block
- independent coding task/module investigation
- bounded design decision
- future plan that can stand alone
- reusable conversation concept

Do not force highly nonlinear or still-entangled reasoning into a standalone memory. Use an index or synthesis instead.

## Storage

Prefer project-local agent memory. Use the host agent's established project memory directory when one exists; otherwise use a neutral `memory/` directory:

```text
<memory-root>/
├── index.md
├── units/
│   ├── <slug>.brief.md
│   └── <slug>.full.md
└── syntheses/
```


## Brief file format

Use this format for `<slug>.brief.md`:

```markdown
---
id: <slug>
title: <title>
type: paper | code | experiment | conversation | concept | decision | other
status: seed | active | mature | stale
full: units/<slug>.full.md
tags: [tag-one, tag-two]
updated: YYYY-MM-DD
---

# <Title>

## One-line memory
<Shortest useful recall cue.>

## Why it matters
<Why this is worth future retrieval.>

## Core idea
<3-7 bullets max.>

## When to expand
<Concrete triggers for reading the full note.>

## Links
- Full: [<slug>.full.md](<slug>.full.md)
- Source: <path/session/paper/url>
```

## Full file format

Use this format for `<slug>.full.md`:

```markdown
---
id: <slug>
title: <title>
brief: <slug>.brief.md
source: <path/session/paper/url>
updated: YYYY-MM-DD
---

# <Title> — Full Memory

## Context
<Where this came from and what problem it answers.>

## Detailed notes
<Full explanation, quotes, evidence, implementation details, or observations.>

## Key excerpts / anchors
<Link to exact files, paper sections, logs, commits, or messages when possible.>

## Implications
<What this changes for future research/coding/thinking.>

## Open questions
<What remains uncertain.>
```

## Agent automation idea

Port the workflow through whatever the host agent supports:

- ask user permission to use subagents, workers, or any parallel methods for *offloaded* memory writing, when possible,
- skills, rules, slash commands, project instructions, or prompts for the semantic workflow;
- lifecycle hooks or events for capture/recall triggers, especially prompt submit, pre-compaction, post-compaction, stop, and subagent stop equivalents;
- optional MCP/shared scripts for cross-agent memory tools.



## Expansion decision rules

Expand from brief to full when at least one is true:

- The current answer depends on exact evidence, quotes, code, or chronology.
- The brief says there is an unresolved uncertainty relevant to the task.
- The user asks for depth, proof, implementation details, or comparison.
- Multiple briefs conflict and the full notes are needed to resolve the conflict.
- The task is high-impact and a shallow summary would be risky.

Stay at brief level when:

- The user only needs orientation.
- The brief already contains enough information for the next step.
- Loading full material would crowd out more relevant context.
