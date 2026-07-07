# Pista's Spot — Coming Soon

A single-page, minimal **Coming Soon** site built with **React + Vite** (plain
JS/JSX and CSS — no TypeScript, no UI framework).

Warm paper canvas, bold **Space Grotesk** display type, **Space Mono** detailing,
a single deep-cobalt accent, and a centred triptych of three preview images with
subtle motion.

## Develop

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

## Build

```bash
npm run build      # outputs to /dist
npm run preview    # serve the production build locally
```

## Swap in the real images

The three centre images are placeholders. Replace the files in
[`public/images`](public/images) (or add your own and update the paths in
[`src/App.jsx`](src/App.jsx), the `PREVIEWS` array). A 4:5 portrait ratio keeps
the triptych balanced.

## Notes

- The "Notify me" form is front-end only — it acknowledges the submission
  locally. Wire it to an email service / API when you're ready to collect
  addresses.
- Fonts load from Google Fonts. All motion respects `prefers-reduced-motion`.

## Deploy

Hosted on **Vercel** at `comingsoon.pistasspot.com`. Vercel auto-detects the Vite
framework (build: `vite build`, output: `dist`). Pushing to `main` triggers a
new production deployment.
