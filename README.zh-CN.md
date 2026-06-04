# **亲爱的Agent，我想给你一个完整的记忆宫殿。**

---

## 这个SKILL对 Agent 很有用，
也许对人类也有用 : D

> 安装之后，用户不需要在对话框里特意引用这个 skill。
Agent 会自己判断什么时候读取记忆、什么时候写入记忆。

---

## 记忆结构大概长这样：

```text
<memory-root>/
├── index.md
└── units/
    ├── <动词>-<形容词或修饰语>-<名词>.unit/
    │   ├── <标题>.brief.md
    │   └── <标题>.full.md
    ├── 读-AI-文章.unit/
    │   ├── transformer-attention.brief.md
    │   ├── transformer-attention.full.md
    │   ├── diffusion-survey.brief.md
    │   └── diffusion-survey.full.md
    └── 跑-基线-实验.unit/
        ├── first-clean-run.brief.md
        └── first-clean-run.full.md
```

- `index.md`：记忆索引，方便快速检索。
- `units/`：按任务或主题组织的记忆单元。
- `.brief.md`：短摘要，适合快速读取。
- `.full.md`：完整记录，保留更多上下文、过程和细节。

---

## 如何安装

大型平台的插件系统太复杂了。

你可以直接下载 `skills/meta-memory/SKILL.md`，然后把它喂给你的 agent，并告诉它：

> “帮我安装这个skill”

---

## 如果你坚持用 npm

全局安装：

```bash
npm install -g meta-memory-skill
```

然后把 skill 安装到你的 agent：

```bash
meta-memory-install claude   # ~/.claude/skills/meta-memory
meta-memory-install codex    # ~/.codex/skills/meta-memory
meta-memory-install pi       # ~/.pi/agent/skills/meta-memory
meta-memory-install agents   # ~/.agents/skills/meta-memory
```

安装到所有支持的位置：

```bash
meta-memory-install --all
```

安装到自定义路径或项目本地路径：

```bash
meta-memory-install --path ./.agents/skills/meta-memory
```
