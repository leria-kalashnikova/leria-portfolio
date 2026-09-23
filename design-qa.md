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

- Source visual truth: Figma file `Portfolio-WebFlow`, node `851:14271` (`Rho Main`). The saved `docs/qa/rho-figma-reference.png` predates the latest hero resize, so it is retained only as historical comparison evidence.
- Implementation: `http://localhost:4173/?rho=1`, opened as the Rho full-screen modal from the main-page card.
- Comparison evidence: `qa-rho-comparison.html` renders the 1440 × 2680 Figma export and a live 1440 × 2680 implementation iframe side by side.
- Comparison viewport: 1280 × 720 CSS px at device pixel ratio 2; both 1440 × 2680 surfaces are normalized to the same `0.42` scale.
- State: Rho popup open at scroll top, plus focused checks of the hero, TLDR, application screens, and close interactions.

### Full-view comparison evidence

The side-by-side comparison aligned the 84 px header start, centered 121 px logo, title/subtitle group, 469 px metadata row, 583 px hero start, 1301 px TLDR start, and 2046 px application-screen row. The centered 596 px copy column and three 281 px phone compositions preserve the source proportions and wrapping.

### Focused comparison evidence

- Hero: node `851:14632` is now rendered at its current Figma size of 672 × 606 CSS px from one direct 4× (2688 × 2424 px) Figma PNG export. The portrait, glass frame, scan label, insight chips, connectors, blur, and bottom fade are all contained in that single image rather than reconstructed as separate HTML layers.
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

#### Iteration 4

- Rechecked the live Figma hero node: its current dimensions are 672 × 606 CSS px at x 384, y 583. Updated the site to that width and ratio.
- Replaced the 1× hero with the genuine existing 4× Figma export (`2688 × 2424` pixels). The old full-page reference image and earlier comparison notes reflect the previous Figma state and should not be treated as verification of this newer hero width.
- Other active Rho case-study rasters are already at or above 4× their rendered size. Homepage cards and the Loomy case-study raster exports remain 1× because Figma's export tool reached the account's call limit before those source nodes could be re-exported. No upscaled 1× files have been relabelled as source 4× exports.

## Loomy case-study popup QA

- Source visual truth: `docs/qa/loomy-figma-reference.png`, exported from Figma node `859:14918` (`Loomy Main`). Source: 1440 × 2716 px at 1×.
- Implementation: `http://localhost:4173/?loomy=1`. The in-app browser rendered the page and `qa-loomy-comparison.html` displayed the live 1440 × 2716 implementation beside the source at the same 0.42 scale. That side-by-side browser capture is the implementation screenshot evidence; it was not saved as a separate PNG.
- Comparison viewport/state: 1440 × 2716 CSS px in the embedded implementation, Loomy popup open at scroll top. Source and implementation have matching CSS/pixel dimensions at 1× before equal scaling. Mobile was checked in `qa-loomy-mobile.html` at a 390 × 844 CSS px iframe viewport.

### Findings

No actionable P0/P1/P2 visual or interaction differences remain. The fixed Close control is an intentional minor addition to the static Figma design so the popup has a visible exit.

### Full-view and focused comparison evidence

- Full-view: centered icon/title, 469 px metadata row, 583 px hero start, centered 596 px TLDR column at 1301 px, and the three 281 px phone compositions at 2082/2094 px align with the source.
- Focused hero: a single direct 672 × 606 PNG export of node `859:14939` preserves the phone, figure, stickers, text artwork, crop, and 46 px frame radius without HTML reconstruction.
- Focused screens: AI Assistant, Home Screen, and Editor are direct whole-node Figma exports at 281 × 554, 281 × 554, and 280 × 554. Their captions align beneath the source compositions.
- Mobile: the hero scales without cropping, the metadata and TLDR remain readable, and the screen gallery can be browsed horizontally.

### Required fidelity surfaces

- Fonts and typography: bundled Inter preserves the 64/68 title, 19/24 subtitle and metadata, 28 px TLDR heading, 22 px body copy, and 17/22 captions. The source uses Poppins for the small Rate value; the implementation uses Inter as a visually close fallback (P3).
- Spacing and layout rhythm: 40 px desktop margins, 32 px header gap, 672 × 606 hero, 596 px TLDR width, 16/21/25 px TLDR gaps, and 76 px phone gaps follow Figma.
- Colors and visual tokens: `#fcfcfb` background, `#1d1f27` primary text, and `#74767d` secondary text match the shared case-study palette.
- Image quality and asset fidelity: logo, hero, and three phone compositions are exact Figma PNG exports stored locally in `public/assets/loomy-case/`; no remote or placeholder assets are used.
- Copy and content: title, subtitle, metadata, TLDR, all five bullets, and screen captions match node `859:14918`.

### Interaction and accessibility checks

- Loomy card opens a named full-screen dialog; Close and Escape close it, and focus returns to the Loomy card.
- Background scrolling locks while the popup is open. Rho still opens and closes normally.
- All five Loomy image assets loaded at their intended intrinsic sizes. Browser console had no warnings or errors. Production build passed.

### Comparison history

- Initial side-by-side comparison found no actionable P0/P1/P2 differences; no corrective visual iteration was needed.
- Follow-up polish (P3): add a locally bundled Poppins font only if exact Rate-label typography becomes important to the final design review.

## Current 4× image and Rho hero QA (2026-09-19)

**Findings**

- [P2] Eight displayed raster assets remain 1×. Location: the three homepage project cards and all five Loomy case-study images. Evidence: their actual pixel dimensions equal their CSS dimensions; the required 4× dimensions and Figma node IDs are listed in `README.md`. Impact: they will look softer on high-density screens and do not satisfy the requested 4× export. Fix: export those exact nodes at 4× PNG in Figma and replace the files without changing CSS sizes. Figma's MCP export access hit the account's Starter-plan call limit; the desktop export UI was unavailable for the remaining nodes.

**Rho correction and verification**

- Source visual truth: live Figma node `851:14632` is `672 × 606` CSS px at x `384`, y `583`; the local genuine 4× Figma source export is `public/assets/rho-case/rho-hero.png`, `2688 × 2424` pixels. The older full-frame `docs/qa/rho-figma-reference.png` is not a current source for the hero size.
- Implementation: `http://127.0.0.1:4174/?rho=1`, viewed in the Codex in-app browser at `1280 × 720` CSS px. Browser screenshot evidence was captured in the live browser session but not persisted as a local file. The asset was opened separately at native dimensions for focused inspection; an equal-scale combined comparison capture was unavailable, so this check does not claim a fully passing visual comparison.
- State: Rho popup open, scroll top and scrolled hero view. At desktop width, CSS renders the complete image at `672 × 606` with no reconstructed visual layers. The browser view showed the expected centered width, composition, and start coordinate; no stretching or new crop was visible.
- Fonts/typography, colors/tokens, and copy/content are unchanged from the prior comparisons. Spacing/layout changed only at the hero width and aspect ratio; the 583 px vertical start and 46 px radius are preserved. Image quality improved from 1× to a true 4× original export.
- Build verification: production Vite build passed; Sites packaging and all four static-worker tests passed.

**Implementation checklist**

- [x] Set Rho hero to its current Figma size and replace it with a genuine 4× whole-image export.
- [x] Verify the updated page in a browser and confirm production builds.
- [ ] Export and replace the eight remaining 1× assets listed in `README.md`.
- [ ] Re-run a normalized visual comparison after those replacements.

## User-requested refinement QA (2026-09-20)

- Source visual truth: saved Figma Loomy full-frame export `docs/qa/loomy-figma-reference.png` (1440 × 2716 px), plus the user's explicit overrides for homepage card radius, Coming soon label, LinkedIn link, and layered Home Screen phone image. The live Figma MCP context could not be refreshed because the account's Starter-plan tool limit is reached.
- Implementation evidence: live preview `http://127.0.0.1:4176/`, `http://127.0.0.1:4176/?loomy=1`, and combined source/implementation view `http://127.0.0.1:4176/qa-loomy-comparison.html`. Browser screenshots were inspected inline but are not persisted as local files. The combined comparison uses a 1440 × 2716 CSS px implementation iframe against the 1440 × 2716 source, both scaled to 0.42 within a 1280 × 720 browser viewport.
- State: homepage default and Cozmat hovered; Loomy popup top and phone-row scroll position.
- Full-view comparison: Loomy logo/title, metadata, hero, TLDR start, background, and copy remain aligned. The extra Home Screen frame does not change the row's 281 × 554 slot or captions.
- Focused phone-row comparison: the orange Home Screen frame, position, and relative size visually match the saved source at equal scale. The added image is a repository-local Figma-exported orange phone frame, not a CSS reconstruction.
- Required fidelity surfaces: typography remains the same except the intentional smaller regular Inter Coming soon label; card radii intentionally change from the older 24 px reference to 42 px; colors and copy are otherwise unchanged; the Home Screen gains a real overlay image without new crop or visible double border.
- Functional checks: the footer LinkedIn element is now an accessible link to the requested URL. Production and Sites builds passed; all four Sites static-worker tests passed.
- Open gap: the eight previously documented 1× homepage/Loomy PNGs still need genuine 4× Figma re-exports. This remains an actionable image-quality limitation from the preceding QA pass; no interpolated files were substituted. A current live Figma source capture and persistent browser screenshot file are also unavailable.

Historical result for the 2026-09-20 scope: blocked.

## Loomy and Rho metadata update QA (2026-09-23)

- Source visual truth: live Figma nodes `859:14918` (Loomy Main, 1440 × 2716) and `851:14271` (Rho Main). The current Loomy source shows the Motion tag, Role, Time, and a 119.664 × 40 App Store badge; the prior Rate field is absent. The current Rho source orders metadata as Role → Time → Scope.
- Implementation evidence: local browser previews at `http://127.0.0.1:4176/?loomy=1` and `http://127.0.0.1:4176/?rho=1`. Loomy was rendered at a 1440 px desktop viewport and at 390 × 844 mobile. Browser accessibility output confirmed the exact current labels, order, and requested App Store URL. The browser console reported no warnings or errors.
- Full-view evidence: the current live Figma frames and rendered case pages were both opened and inspected. The Loomy badge occupies the right-hand metadata slot without changing the hero start or case-page rhythm; the Rho metadata reordering also leaves the hero and surrounding spacing unchanged.
- Focused evidence: the Loomy badge uses the four exact source SVG layers supplied by Figma at the source dimensions. Keyboard focus moves between Close and the App Store link; the link opens in a new tab and carries an accessible label. At mobile width, the badge remains visible below Role and Time without overlap.
- Required fidelity surfaces: Inter typography, existing sizes and line heights, 40 px desktop margins, `#fcfcfb` background, imagery, hero dimensions, TLDR copy, and screen captions are unchanged. Copy/content and metadata order match the current Figma context. No new raster assets or image-quality regressions were introduced.
- Functional verification: production build passed. Sites packaging passed and all four static-worker tests passed.
- Formal comparison limitation: Figma MCP screenshot/export calls reached the account's Starter-plan limit. A live Figma browser view and implementation captures were inspected, but the browser security policy prevented assembling them into one normalized combined comparison artifact. Under the strict design-QA gate, this prevents a formal pass even though no scoped mismatch was found.

**Implementation checklist**

- [x] Add Motion to Loomy tags and remove Rate.
- [x] Add the exact App Store badge and requested destination URL.
- [x] Change Loomy metadata order to Role → Time → App Store.
- [x] Change Rho metadata order to Role → Time → Scope.
- [x] Verify desktop, mobile, focus order, and console state.
- [ ] Re-run a normalized combined source/implementation capture when Figma MCP access is available.

final result: blocked
