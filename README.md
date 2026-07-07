# REACTEG · Coming Soon

A single-page, minimal **Coming Soon** site built with **React + Vite** (plain
JS/JSX and CSS, no TypeScript, no UI framework).

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

## Swap in the real images and links

- **Images:** the three centre images are placeholders. Replace the files in
  [`public/images`](public/images) (or add your own and update the `PREVIEWS`
  array in [`src/App.jsx`](src/App.jsx)). A 4:5 portrait ratio keeps the triptych
  balanced.
- **Clicks:** each preview image and each of the seven small badges is a link.
  Set the `href` values in the `PREVIEWS` and `LINKS` arrays in
  [`src/App.jsx`](src/App.jsx) once the destinations are ready.

## Email capture

The "Notify me" form is **front-end only**. On submit it just shows a local
thank-you message. Nothing is stored, and no email is sent anywhere. To actually
collect addresses, wire the form to a service (for example Formspree, a Vercel
serverless function writing to a database or KV store, Resend, or a newsletter
provider such as Mailchimp / ConvertKit).

## Notes

- Fonts load from Google Fonts. All motion respects `prefers-reduced-motion`.

## Deploy

Hosted on **Vercel** (the production domain is configured in the Vercel project).
Vercel auto-detects the Vite framework (build: `vite build`, output: `dist`).
Redeploy with `vercel deploy --prod`.
