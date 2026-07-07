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

## The centre logos

The three centre cards show brand logos (VIP, React, Sonoff Egypt) from
[`public/images`](public/images), driven by the `LOGOS` array in
[`src/App.jsx`](src/App.jsx). Each is a clean white card with the logo centred
(`object-fit: contain`) so mixed backgrounds (like VIP's white JPEG) blend in.
To change a logo, drop a new file into `public/images` and update its path in
the `LOGOS` array. The logos are display-only (not links).

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
