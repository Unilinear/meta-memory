---
name: meta-memory
description: Build agent memory system. Every time you decide to show your valuable finished outcome, USE THIS SKILL to make a memory (can be done by subagent if possible). Every time you decide to do a task, USE THIS SKILL to read memory.
---
# Meta-Memory Skill for Agent

Use this skill to keep agent context clean by storing durable memory as files:

- **Index layer:** a compact, self-improving storyline across all flat units.
- **Unit-name layer:** context-cheap folder names that reveal the rough work map before opening files.
- **Brief layer:** small, attention-ready memory handle for one memory record inside a unit.
- **Full layer:** detailed evidence, notes, excerpts, code references, and open questions for that record.

## Trigger

Use meta-memory when current work becomes **memorably disentangled**.

A task is memorably disentangled when it is completed or stable enough that the agent can describe its minimum useful work area with one strict unit name:

```text
<1verb>-<1adjective-or-1modifier>-<1noun>.unit
```

This is the core availability test: if the work cannot yet be named as a clear `do-specific-thing.unit`, it is probably still entangled. Keep working or update `index.md` only.

Good memorization moments:

- completed experiment run -> `run-baseline-experiment.unit`
- paper or literature-reading block -> `read-deeplearning-paper.unit`
- independent coding task/module investigation -> `debug-auth-module.unit`
- bounded design decision -> `design-semantic-workflow.unit`
- future plan that can stand alone -> `plan-incremental-migration.unit`
- reusable conversation concept -> `clarify-memory-concept.unit`

Do not memorize yet when:

- the work is still a live chain of reasoning with no stable boundary
- the agent cannot produce a valid three-token unit name
- the memory would be only a vague transcript or mood
- the useful next action is still changing every few messages

A unit is not necessarily one memory record. A unit is a flat workspace/category of work. For example, `read-deeplearning-paper.unit/` may contain many reading experiences, each with its own indexed `<record-index>.<record-name>.brief.md` and `<record-index>.<record-name>.full.md` pair.

Do not force highly nonlinear or still-entangled reasoning into a new hierarchy. Keep units flat and let `index.md` carry the evolving nonlinear storyline.

## Storage

Prefer project-local agent memory. Use the host agent's established project memory directory when one exists; otherwise use a neutral `memory/` directory.

Memory is organized like a skill system: each unit gets a folder under `units/`, and each folder may contain many named brief/full pairs.

```text
<memory-root>/
├── index.md
└── units/
    ├── read-deeplearning-paper.unit/
    │   ├── 0.transformer-attention.brief.md
    │   ├── 0.transformer-attention.full.md
    │   ├── 1.diffusion-survey.brief.md
    │   └── 1.diffusion-survey.full.md
    └── run-baseline-experiment.unit/
        ├── 0.first-clean-run.brief.md
        └── 0.first-clean-run.full.md
```

No `syntheses/` directory is part of the core design. Cross-unit and nonlinear synthesis belongs in `index.md`.

## Strict unit folder naming rules

Every unit folder name must follow this exact shape:

```text
<verb>-<adjective-or-modifier>-<noun>.unit
```

Rules:

- exactly three semantic tokens before `.unit`
- lowercase kebab-case ASCII
- token 1: an action verb, preferably imperative/base form: `read`, `run`, `test`, `build`, `debug`, `compare`, `refactor`, `design`, `plan`, `review`
- token 2: one adjective or compact modifier describing the object/domain: `deeplearning`, `baseline`, `rag`, `auth`, `parallel`, `semantic`
- token 3: one concrete noun naming the object/work area: `paper`, `experiment`, `module`, `method`, `workflow`, `decision`, `concept`
- if a modifier has multiple words, compress it into one token when possible, e.g. `deep learning` -> `deeplearning`

Good unit names:

- `read-deeplearning-paper.unit`
- `run-baseline-experiment.unit`
- `debug-auth-module.unit`
- `compare-rag-method.unit`
- `design-semantic-workflow.unit`

Bad unit names:

- `paper-reading.unit` — only two tokens and noun-first
- `read-deep-learning-paper.unit` — four tokens
- `read-paper.unit` — missing modifier
- `misc.unit` — not semantic
- `conversation.unit` — not three tokens
- `2026-06-04.unit` — timestamp, not semantic

If the current work does not fit an existing unit, create a new strictly named unit. If a unit name is wrong or too broad, rename it and update all links in `index.md` and memory records.

## Memory record naming rules

Inside a unit, create one indexed named brief/full pair per disentangled memory record:

```text
units/<unit-name>.unit/<record-index>.<record-name>.brief.md
units/<unit-name>.unit/<record-index>.<record-name>.full.md
```

`<record-index>` is a zero-based integer local to the unit (`0`, `1`, `2`, ...). Use the next unused index in that unit so files sort in creation/order-of-work sequence. Keep the same index on the `.brief.md` and `.full.md` pair.

`<record-name>` should be short, semantic, lowercase kebab-case. It does not need to follow the strict three-token unit rule. It should distinguish multiple memories inside the same unit, such as `transformer-attention`, `failed-batchnorm-run`, or `api-routing-decision`.

## Index behavior

`index.md` is not a dump and not a pyramid. It is the agent-maintained, self-improving flat map and storyline across units.

Use it to record:

- the current flat map of unit folders
- what each unit roughly contains
- why units exist and how they relate
- chronological, causal, or nonlinear storyline between units
- important tensions, decisions, stale areas, and next retrieval hints
- links to important brief files when useful

Always updating `index.md` when new memory was maded.  Trust future agents to use `index.md` plus unit/file names to decide what to open.

### Context-saving recall protocol

When recalling memory, use the cheapest layer first:

1. Read `index.md` if it exists.
2. Inspect only folder names under `units/*.unit/` to understand the flat unit map.
3. Inspect filenames inside likely unit folders to see available memory records.
4. Open relevant `*.brief.md` files only when index + names are insufficient.
5. Open matching `*.full.md` only when expansion decision rules say depth is needed.

After learning something that changes the memory map or storyline, update `index.md` so future agents can recover the shape of the work without opening every record.

## Brief file format

Use this format for `units/<unit-name>.unit/<record-index>.<record-name>.brief.md`:

```markdown
---
id: <record-index>.<record-name>
unit: <unit-name>
title: <title>
type: paper | code | experiment | conversation | concept | decision | other
status: seed | active | mature | stale
full: <record-index>.<record-name>.full.md
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

## Relations
- Index storyline: <index heading or short description>
- Related records: [<other-record>](<other-index>.<other-record>.brief.md) or [<other-unit>/<record>](../<other-unit>.unit/<other-index>.<record>.brief.md)
- Depends on / supersedes / conflicts with: <links if any>

## When to expand
<Concrete triggers for reading the full note.>

## Links
- Full: [<record-index>.<record-name>.full.md](<record-index>.<record-name>.full.md)
- Source: <path/session/paper/url>
```

## Full file format

Use this format for `units/<unit-name>.unit/<record-index>.<record-name>.full.md`:

```markdown
---
id: <record-index>.<record-name>
unit: <unit-name>
title: <title>
brief: <record-index>.<record-name>.brief.md
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

- ask user permission to use subagents, workers, or any parallel methods for *offloaded* memory writing, when possible;
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
