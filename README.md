# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Visit the live site at [egemengunel.dev](https://egemengunel.dev)

## 🚀 Features

- Responsive design for all devices
- Dark/Light theme toggle
- Project showcase with modal views
- Interactive technology stack display
- Social media links
- Resume download
- Smooth animations with Framer Motion

## 🛠 Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build and dev server settings
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS plugins configuration

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: 320px - 480px
  - Tablet: 481px - 768px
  - Laptop: 769px - 1024px
  - Desktop: 1025px and above

## 🎨 Color Scheme

- Primary: Blue gradient
- Background (Light): `#FFFFFF`
- Background (Dark): `#1A1A1A`
- Text (Light): `#1F2937`
- Text (Dark): `#F3F4F6`

## 👤 Author

Egemen Günel
- Website: [egemengunel.dev](https://egemengunel.dev)
- GitHub: [@egemengunel](https://github.com/egemengunel)
- LinkedIn: [egemengunel](https://linkedin.com/in/egemengunel/)

## 📜 License

MIT License - see the [LICENSE.md](LICENSE.md) file for details

---

© 2024 Egemen Günel. All rights reserved.
## 🧭 Routing & Deployment

The site is a React SPA (`react-router-dom`) deployed to Cloudflare Pages.

Routes:

| Path | Page |
|---|---|
| `/` | Home — intro, work experience, projects |
| `/case-studies` | Case study index |
| `/case-studies/:slug` | Individual case study |

### Cloudflare Pages notes

- `public/_redirects` contains `/* /index.html 200` so deep links like
  `/case-studies/lucid` resolve on a hard refresh. Cloudflare also falls back to
  SPA behaviour automatically **as long as the build output has no top-level
  `404.html`** — do not add one.
- `public/_headers` caches the fingerprinted `/assets/*` bundle forever and
  forces revalidation of `index.html`.

### Known limitation — social share cards

`useDocumentMeta` updates the title, description, and Open Graph tags on route
change, which fixes the browser tab and anything that reads the live DOM. Social
crawlers (Slack, LinkedIn, X) do **not** run JavaScript, so every route currently
shares the tags baked into `index.html`. Per-case-study share cards require
prerendering the routes to static HTML at build time.

### Exporting design assets from Sketch

Case study imagery lives in `public/case-studies/<slug>/<YYYY-MM>/` — dated,
because in-progress apps keep changing. Assets are exported straight from the
Sketch source file via the Sketch MCP server (`sketch.export`).

Exported PNGs should be compressed before committing. `sips` on this machine
cannot write WebP, so install the encoder first:

```bash
brew install webp
```
