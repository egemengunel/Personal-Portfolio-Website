# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Vite dev server on :5173
npm run build        # tsc && vite build  — this is also the typecheck
npm run preview      # serve dist/ locally
npm run analyze      # build + rollup-plugin-visualizer bundle treemap
npm run dev:clean    # clear Vite's cache, then dev
```

There is **no test runner and no linter** in this project. `npm run build` is the
only verification gate — it runs `tsc` before Vite, so a type error fails the
build. Run it after any change.

## Architecture

A React 18 + TypeScript + Vite SPA, styled with Tailwind, deployed as static
files to Cloudflare Pages. No backend, no data fetching — every piece of content
is a typed literal in `src/data/`.

### Two parallel content models

This is the single most important thing to understand before editing content.

**`src/types/project.ts` → `Project`** backs *both* `projectsData.ts` and
`workExperienceData.ts`. They are the same shape and render through the same
`Card` → `DetailModal` pair; the only difference is which array a given entry
lives in and which section heading renders above it. Moving an item between
"Projects" and "Work Experience" is a pure data move, no component changes.
`DetailModal` is a modal, so **nothing in either array has its own URL.**

**`src/types/caseStudy.ts` → `CaseStudy`** backs `caseStudiesData.ts` and is a
richer, long-form model (`sections`, `summary`, `metrics`, before/after media via
`compareWith`). These *do* get their own routes. A `status` field drives the UI:

- `writing` — card links through; the detail page renders a "still being written" state when `sections` is empty
- `planned` — card renders dashed, dimmed, and is deliberately **not** a link
- `published` — no status pill

Case studies are intentionally a separate model from `Project`, not an extension
of it. Do not merge them.

### Routing

`BrowserRouter` in `main.tsx`; routes declared in `App.tsx` under a single
`RootLayout` (`SiteHeader` + `<Outlet/>` + `Footer`). Page components live in
`src/pages/` and are lazy-loaded except `Home`.

`SiteHeader` is global (identity, nav, resume, socials). Homepage-only intro
content lives in `HomeIntro` — keep that split; putting homepage copy back into
the header will leak it onto every route.

Router does not reset scroll on navigation, so `ScrollToTop` does it.

### Cloudflare Pages constraints

- **Never emit a top-level `404.html`.** Cloudflare enables SPA fallback only in
  its absence; adding one silently breaks every deep link on hard refresh.
- `public/_redirects` and `public/_headers` are copied verbatim into `dist/` by
  Vite and configure the fallback and asset caching. Verify they survive in
  `dist/` after build changes.

### Per-route metadata

`useDocumentMeta` sets title / description / OG / canonical on route change.
**Social crawlers do not run JS**, so this only fixes the browser tab and the
live DOM — every route still shares the tags baked into `index.html`. Real
per-route share cards require prerendering, which is not set up.

### Assets

App icons live in `public/icons/` at 256x256 — all of them, including for apps
that only appear as case studies. Case study imagery (screens, before/after
pairs) goes in `public/case-studies/<slug>/<YYYY-MM>/`, dated because
in-progress apps keep changing.

Assets come out of the Sketch source files via the Sketch MCP server: use
`run_code` with `sketch.export` (absolute `output` + explicit `filename`). Note
that `get_design_assets` is for design *system* assets (swatches, symbols, text
styles), not frame images. Check with the user before exporting anything beyond
what was asked for — final assets are often exported by hand and may differ from
what is in the Sketch file.

`sips` on macOS cannot write WebP here; `brew install webp` for `cwebp` before
committing large exports. Everything else in `public/` has already been
compressed — match that.

## Known dead code and stale claims

Do not treat these as load-bearing:

- `src/hooks/useIntersectionObserver.ts`, `src/hooks/usePerformanceMonitor.ts`,
  and `src/components/CVDownload.tsx` are referenced by nothing.
- `@vimeo/player` is a dependency with zero imports, and `index.html` still
  preconnects to Vimeo domains.
- `tailwind.config.js` sets `darkMode: 'class'` and safelists `dark:` classes,
  but **there is no theme toggle and nothing sets the `dark` class**.
  `index.css` pins `color-scheme: light`. The `dark:` variants left in
  `ErrorBoundary` are inert. README's "Dark/Light theme toggle" feature claim is
  false.
- The Resume link in `SiteHeader` points at a Google Drive URL while
  `public/EgemenGunel_CV.pdf` sits unused in the repo.
- `.gitignore` literally contains the heredoc wrapper lines
  (`cat > .gitignore << 'EOF'` and a trailing `EOF`) from a mispasted command.
  The real patterns below them still work.
