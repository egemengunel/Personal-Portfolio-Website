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

Before writing or editing the copy of any case study, read
`docs/writing-a-case-study.md`. It covers the order of work (source material,
then questions, then a voice note, then prose, then screens), what a section has
to contain, the voice rules, and what never goes on the page.

### Case study page layout

`CaseStudyDetail` is gallery-first: screens before prose, decision sections
alternating sides, stack demoted to a closing "Built with" line. The pieces are
in `src/components/caseStudy/`. Two decisions there are load-bearing:

- **The gallery sizes images by height, never width.** App Store sheets come as
  one-panel (height/width ~2.2) and two-panel (~1.1) exports; a fixed-width card
  renders the one-panel screens at double everything else's height. A fixed
  height puts them on a shared baseline and lets width vary.
- **`scroll-pl-*` must mirror the scroller's `px-*`.** With
  `scroll-snap-type: x mandatory`, snapping aligns the first item to the
  scrollport edge and scrolls the leading padding away, so the gutter silently
  disappears and images touch the screen edge on mobile. `scroll-padding` moves
  the snap origin inward — the CSS counterpart of a SwiftUI ScrollView's
  horizontal safe-area inset. Change one value and you must change the other.

The case study header carries no icon, eyebrow or date — title, tagline, and one
quiet line of role plus links. App icons appear on the index cards only.

Layout alternatives are prototyped at `/lab` (`src/pages/LayoutLab.tsx` plus
`src/pages/lab/`), which is not linked from the nav and keeps its own mock copies
on purpose, so experimenting there cannot break the real page.

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

### Every image must be compressed before it is committed

No exceptions, for any image added from any source — a Sketch export, an App
Store screenshot, a hand-export off the Desktop. `cwebp` and `pngquant` are
installed (`brew install webp pngquant` if a machine lacks them); `sips` on
macOS cannot write WebP, so do not reach for it.

```bash
pngquant --quality 65-90 --speed 1 --strip --force --output out.png in.png
cwebp -q 80 in.png -o out.webp
```

Typical saving is 70-85% (the Lucid intro screenshot went 386K to 72K) with no
visible quality loss. Check the result by reading the file back before
committing. Keep new images in line with the ones already there: roughly
80-250K each, and match the pixel scale of the set a file is joining rather
than committing a raw 1290x2796 export.

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
