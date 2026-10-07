# Implementation decisions

- The repository was empty, so the prototype uses Next.js App Router, strict TypeScript, Zustand persistence, Vitest and ESLint. A single client-side route surface keeps the demo navigation and state available across its paths.
- The provided S07 timestamp intervals are authoritative. The brief's expected S07 totals match those timestamps. Brief switches shorter than 30 seconds are not treated as interruptions; a later departure within two minutes merges only when it is itself 30 seconds or longer. The analysis tests assert the target focus/off-task totals, interruption/recovery values, deep-work block and alert link.
- The complete brief describes a much larger build than an empty starter can support in one pass. This prototype prioritizes the P0 demo path and the supporting trust pages. Several multi-session views show clearly tagged illustrative demo values; they are not presented as computed findings.
- The optional LLM endpoint, live capture mode, full S01–S12 dataset, bootstrap/Markov implementation, accessible chart tables, focus-window uncertainty, full reflection persistence and Playwright walkthrough remain future work. No external requests are made by the demo.
- No git repository was present, so phase commits were not possible.

## Current audit

| Dimension | Current state |
|---|---|
| Product clarity | Clear on welcome and overview |
| UX quality | Primary journey is connected; secondary views are intentionally light |
| Visual quality | Editorial paper theme, responsive cards and dark theme tokens |
| Interaction quality | Timeline selection, drawer, presenter panel and keyboard reset/replay shortcuts |
| Technical credibility | S07 totals derive from the interval fixture and are unit tested |
| AI credibility | Offline template plus fixed validator demonstration; no live LLM |
| Behavioural-science credibility | S07 interruption grouping and uncertainty boundaries are described; dataset-wide inference is illustrative |
| Privacy | Browser-local state, fixed demo log and functioning reset |
| Demo reliability | Fixed log and replay clock; production build and direct route smoke checks pass |
| Hackathon impact | Alert-to-detour story, experiment choice and evidence boundary are present |
| Memorability | Welcome sentence and closing line are included |
