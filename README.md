# Leria — Product Designer Portfolio

Faithful implementation of the supplied Figma frame, prepared as a Vite + React project for GitHub Pages.

The Rho and Loomy project cards open responsive case-study popups. Each Loomy visual (logo, hero, and three phone previews) is a complete image exported from its Figma node.

## Image export status

The Rho hero is a single, genuine 4× Figma PNG (`2688 × 2424` pixels) rendered at the current Figma size of `672 × 606` CSS pixels. The other displayed Rho case-study rasters are already at least 4× their rendered sizes. SVG icons are resolution-independent.

The three homepage card covers and five Loomy case-study images are still original 1× Figma exports. They need new exports from Figma before the entire site can be described as 4×. Keep their on-page CSS dimensions unchanged when replacing the files:

| Asset | Figma node | Required 4× PNG pixels |
| --- | --- | --- |
| `public/assets/rho-card.png` | `826:6101` | 1772 × 1376 |
| `public/assets/loomy-card.png` | `826:6139` | 1772 × 1376 |
| `public/assets/cozmat-card.png` | `826:6148` | 1772 × 1376 |
| `public/assets/loomy-case/loomy-logo.png` | `859:18421` | 484 × 484 |
| `public/assets/loomy-case/loomy-hero.png` | `859:14939` | 2688 × 2424 |
| `public/assets/loomy-case/ai-assistant.png` | `859:15008` | 1124 × 2216 |
| `public/assets/loomy-case/home-screen.png` | `859:14991` | 1124 × 2216 |
| `public/assets/loomy-case/editor.png` | `859:15000` | 1120 × 2216 |

Export each named layer at **4x / PNG** in Figma, then replace the corresponding file at the path above. Do not upscale the existing 1× PNGs; that increases pixel count without recovering detail.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The static client is generated in `dist/client`.

For OpenAI Sites packaging only, use `pnpm run build:sites`.

## GitHub Pages

Push the repository to the `main` branch, then enable **Settings → Pages → Source → GitHub Actions**. The included workflow builds and publishes `dist/client`. The app uses only repository-local assets and fonts.

## Netlify

The included `netlify.toml` contains the correct deployment settings:

- Build command: `pnpm run build`
- Publish directory: `dist/client`

Keep the project files at the root of the GitHub repository, with `package.json` and `netlify.toml` at the top level. Push changes to the production branch connected in Netlify (normally `main`). Netlify will then build and publish the new version automatically.
