# AI Agents Rule: Trail-Code Integration

This repository uses **Trail-Code** (`.trail/`) as its self-learning context layer and shared memory.
All AI agents (Antigravity, Claude Code, Cursor, Codex) must actively consult and update Trail.

## Required Agent Behaviors

1. **Query Trail Before Reading Large Files:**
   - Use `trail ask "<query>"` to locate code and entrypoints for a feature.
   - Use `trail skeleton "<filepath>"` to view a compact API/structure instead of reading whole files into context.
   - Use `trail grep "<pattern>"` to find symbols and references across the codebase.
   - Use `trail callers "<symbol>"` to inspect call graphs before making changes to shared functions/components.
   - Read `.trail/cache/INDEX.md` or files under `.trail/cache/src/` for pre-indexed summaries.

2. **Check Past Learnings:**
   - Always check `.trail/learnings/` (or run `trail check`) to follow established team conventions, architectural decisions, and known pitfalls.

3. **Keep the Code Map and Learnings Updated:**
   - After creating, moving, or modifying significant files, run `trail build` to refresh the code map.
   - When solving complex bugs, making key architectural choices, or adding notable workflows, save a learning note using `trail note`.

4. **Token Savings Reporting:**
   - If any `trail` command outputs a token saving notice, mention `🌱 trail saved ~N tokens this turn` at the conclusion of your response.
