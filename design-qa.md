# Design QA

- Source visual truth: `docs/figma-reference.png` — Figma file `Portfolio-WebFlow`, node `826:6063`.
- Implementation: production preview at `http://localhost:4173/`.
- Implementation screenshot evidence: Codex in-app browser capture at the URL above; the browser capture is reproduced side-by-side with the source by `qa-comparison.html` during local development.
- Viewport: 1440 × 1633 CSS px.
- Source pixels: 1440 × 1633.
- Implementation pixels: 1440 × 1633 at device pixel ratio 1.
- Density normalization: none required; source pixels, CSS viewport, and browser capture are 1:1.
- State: default desktop page, fonts and all four visible image assets fully loaded.

## Full-view comparison evidence

`qa-comparison.html` displayed the Figma export and the live browser implementation side by side at the same scale (`0.4833333333`). The overall composition, 40 px page margins, 1360 px work grid, section positions, project-card dimensions, typography hierarchy, copy, colors, and 24 px card radii aligned without an actionable P0/P1/P2 difference.

## Focused comparison evidence

A second browser capture compared the lower half of the same side-by-side view (project captions, collaboration statement, bio, and footer). The line breaks, baseline positions, opacity, horizontal alignment, and footer spacing matched. The project artwork itself uses direct 443 × 344 exports of the three Figma thumbnail nodes, so masks, blur, glass effects, image crops, and the Loomy wordmark are source-faithful rather than recreated approximations.

## Required fidelity surfaces

- Fonts and typography: Instrument Sans Variable and Inter are bundled locally. Family, weights, sizes, line heights, letter spacing, hierarchy, and wrapping match the Figma properties at the target viewport.
- Spacing and layout rhythm: 1440 px frame, 1360 px content width, 40 px margins, 16 px project gaps, exact section coordinates, card sizes, and radii match the source.
- Colors and visual tokens: `#fcfcfb`, `#1d1f27`, `#74767d`, and specified opacities match the Figma context.
- Image quality and asset fidelity: all three thumbnails and the arrow icon are direct Figma exports committed to the project. No placeholders or hand-drawn substitutes remain.
- Copy and content: all visible copy matches the selected Figma node.

## Comparison history

### Iteration 1

- [P2] CSS-recreated glass and blur treatments introduced visible softness and an inaccurate Loomy wordmark.
  - Fix: replaced all three thumbnail constructions with direct per-node Figma exports at 443 × 344.
- [P2] Header role and “Let’s talk” coordinates did not initially include Figma’s translation offsets.
  - Fix: applied the exact resulting browser coordinates from the Figma context (`role y=24`, CTA `x=1187`, `y=321`).
- [P1] The absolutely positioned About section intercepted header navigation.
  - Fix: removed pointer interception and moved the About anchor target to the visible heading.

### Iteration 2

- Post-fix side-by-side comparison found no actionable P0/P1/P2 visual differences.
- About and Contact navigation update the URL to `#about` and `#contact`.
- Browser console check: no warnings or errors.
- Production build check: all fonts, thumbnails, and the arrow load from repository-local files.

## Findings

No actionable P0/P1/P2 findings remain.

## Open questions

None for the selected desktop frame. Mobile behavior is responsive by implementation because no separate mobile Figma node was supplied.

## Implementation checklist

- [x] Exact Figma source captured.
- [x] Original assets committed locally.
- [x] Desktop comparison completed at 1440 × 1633.
- [x] Navigation and console checked in the browser.
- [x] Production build and static-worker tests passed.
- [x] GitHub Pages workflow included.

## Follow-up polish

No P3 changes were applied because the user requested no visual changes.

## Rho case-study popup QA

- Source visual truth: `docs/qa/rho-figma-reference.png` — Figma file `Portfolio-WebFlow`, node `851:14271` (`Rho Main`).
- Implementation: `http://localhost:4173/?rho=1`, opened as the Rho full-screen modal from the main-page card.
- Comparison evidence: `qa-rho-comparison.html` renders the 1440 × 2680 Figma export and a live 1440 × 2680 implementation iframe side by side.
- Comparison viewport: 1280 × 720 CSS px at device pixel ratio 2; both 1440 × 2680 surfaces are normalized to the same `0.42` scale.
- State: Rho popup open at scroll top, plus focused checks of the hero, TLDR, application screens, and close interactions.

### Full-view comparison evidence

The side-by-side comparison aligned the 84 px header start, centered 121 px logo, title/subtitle group, 469 px metadata row, 583 px hero start, 1301 px TLDR start, and 2046 px application-screen row. The centered 596 px copy column and three 281 px phone compositions preserve the source proportions and wrapping.

### Focused comparison evidence

- Hero: node `851:14632` is used as one direct 902 × 606 Figma PNG export. The portrait, glass frame, scan label, insight chips, connectors, blur, and bottom fade are all contained in that single image rather than reconstructed as separate HTML layers.
- TLDR: Inter Regular, 28 px heading, 22 px body, 1.4 paragraph leading, 1.3 list leading, 16/21/25 px internal gaps, and bullet wrapping match the source.
- Application screens: direct Figma screen and device-frame assets are layered at 242 × 526 and 270 × 552 inside 281 × 554 wrappers. Captions use 17/22 Inter and align at the source baselines.

### Required fidelity surfaces

- Fonts and typography: Inter is bundled locally. The 64/68 title with -2 px tracking, 19/24 subtitle and metadata values, 17/22 labels, and TLDR hierarchy match the Figma properties. The small scan chips use the system SF Pro stack with Inter fallback, matching the source UI language without adding an unlicensed webfont.
- Spacing and layout rhythm: desktop positions, 40 px outer margins, central widths, vertical section coordinates, phone spacing, and rounded corners match the 1440 px Figma frame. Responsive rules preserve the hierarchy below 1000 px.
- Colors and visual tokens: `#fcfcfb`, `#1d1f27`, `#74767d`, blue UI accents, translucency, shadows, and glass treatments match the source.
- Image quality and asset fidelity: the logo, complete hero composition, three app screens, and two device frames are direct Figma exports committed under `public/assets/rho-case/`. No placeholders or handcrafted image substitutes remain.
- Copy and content: title, metadata, TLDR, bullet list, and screen captions match node `851:14271`.

### Interaction and accessibility checks

- Rho card opens the full-screen modal.
- Background scrolling is locked while open.
- Close button and Escape both close the modal after scrolling or clicking content.
- Focus moves to Close on open and returns to the Rho card on close.
- Dialog name and modal semantics are exposed to the accessibility tree.
- Browser console: no errors or warnings; only Vite connection and React development information.

### Rho comparison history

#### Iteration 1

- [P2] The transparent portrait asset produced a visible filtered edge at the bottom of the hero crop.
  - Fix: strengthened the source fade, clipped the outer portrait, and added a solid bottom mask outside the glass frame.
- [P2] Escape relied on focus remaining inside the overlay.
  - Fix: moved Escape handling to a document-level listener and verified focus restoration.

#### Iteration 2

- Post-fix side-by-side comparison found no actionable P0/P1/P2 differences.
- The fixed `Close` control is an intentional P3 deviation from the static Figma frame because a full-screen modal needs an explicit exit; it stays visually quiet and outside the core composition.

#### Iteration 3

- Replaced the decomposed hero implementation with one direct 902 × 606 export of Figma node `851:14632`, as requested.
- Verified that the composite image keeps the original 902:606 ratio, 46 px desktop radius, source crop, and responsive scaling without splitting any visual element into HTML layers.

final result: passed
