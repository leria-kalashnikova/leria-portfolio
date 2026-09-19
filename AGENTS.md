# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build:sites` and `npm run test:sites`; the Sites build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`. Use `npm run build` for Netlify and GitHub Pages.

## Visual source

- Source of truth: Figma file `Portfolio-WebFlow`, node `826:6063` (`Desktop Main`).
- Rho case-study popup source of truth: Figma node `851:14271` (`Rho Main`). Open it from the Rho project card as a full-screen modal and preserve its Inter typography, 40px desktop margins, centered 596px TLDR column, and original Figma imagery. The current hero node `851:14632` is 672 × 606 CSS px and should use a whole-image 4× export at 2688 × 2424 px.
- Loomy case-study popup source of truth: Figma node `859:14918` (`Loomy Main`). Open it from the Loomy project card as a full-screen modal. Its logo, 672 × 606 hero, and three phone compositions are direct, whole-node Figma image exports rather than reconstructed layers.
- Preserve the visual design exactly. Do not introduce new accent fonts, colors, sections, or decorative treatments unless the user explicitly changes the brief.
