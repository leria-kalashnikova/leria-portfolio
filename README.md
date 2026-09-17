# Leria — Product Designer Portfolio

Faithful implementation of the supplied Figma frame, prepared as a Vite + React project for GitHub Pages.

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

## GitHub Pages

Push the repository to the `main` branch, then enable **Settings → Pages → Source → GitHub Actions**. The included workflow builds and publishes `dist/client`. The app uses only repository-local assets and fonts.

## Netlify

The included `netlify.toml` contains the correct deployment settings:

- Build command: `pnpm run build`
- Publish directory: `dist/client`

Keep the project files at the root of the GitHub repository, with `package.json` and `netlify.toml` at the top level. Push changes to the production branch connected in Netlify (normally `main`). Netlify will then build and publish the new version automatically.
