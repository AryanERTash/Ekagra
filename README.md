# EKAGRA

EKAGRA is a local-first prototype for exploring how a study session unfolds. The demo uses a fixed activity log for Aarav's DSA evening; its session metrics are derived from that log in pure TypeScript.

## Run

```sh
npm install
npm run dev
```

For the production demo run `npm run demo` and open http://localhost:3000. The demo has no network calls and uses a fixed fixture. Use `Shift+D` for presenter controls, `Shift+R` to replay, and `Shift+E` to load the experiment result.

## Deploy

This is a standard Next.js App Router project and is ready for Vercel's Next.js deployment flow: import the repository, keep the default build command (`npm run build`) and output settings, then deploy. No environment variables are required. `npm run start` serves a previously built production bundle. Use Node.js 20.9 or newer. The chatbot opens as an external link and does not require an API key in this app.

## Included

- The onboarding, goal setup, focus replay, timeline and evidence drawer, session summary, insight, pattern, baseline, experiment proposal/tracking/result, AI boundary, privacy, methods, history and settings views.
- S07 demo activity, alert and milestone fixture plus deterministic analysis for session totals, interruption grouping, recovery, focus blocks, deep-work ratio and alert links.
- A local-storage Zustand state store, reset controls, responsive layout and paper/dark themes.
- An offline template explanation and a visible grounding-validator demonstration.
- Client-side internal navigation that preserves in-session state, a working mobile navigation drawer, persistent theme choice, and selectable experiment alternatives.
- A direct link to the EKAGRA chatbot at https://vivekananda-hack.vercel.app/.

## Simulated and future work

The session activity is demo data, not device capture. Cross-session pattern counts, baseline dots and experiment comparison values are illustrative demo views. They are not generated from the complete S01–S12 fixture set. Live capture and a live LLM endpoint are not implemented. The template explainer runs offline; the validator demo uses a fixed example. See [DECISIONS.md](./DECISIONS.md) for the scope choices.

The analysis test covers the S07 computed metrics and the alert-linked longest detour. `npm run typecheck`, `npm test`, `npm run lint`, `npm run build` validate the code.
# Ekagra
# Ekagra
