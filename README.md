# AxiomFlow — Next.js

Faithful conversion of the single-file light build. The design, copy, markup,
animations and responsive behaviour are unchanged; only the implementation moved.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Architecture

**Every section is a Server Component.** The markup ships as HTML with no client
bundle attached to it. The six Client Components in `components/interactions/`
are the only JavaScript sent to the browser, and they attach behaviour to that
server-rendered markup after hydration.

| File | Owns |
|---|---|
| `PageChrome` | nav scroll state, progress bar, scroll-driven word fill, thinking-track spine, `.rv` reveal observer + failsafe |
| `NavMenu` | mobile sheet: scroll lock, Escape, outside tap, desktop-resize recovery |
| `SectionBehaviours` | bento reveals, content-system phases, archive folders, work cards, insights row, stat counters, industry tabs, FAQ, spin badge |
| `Carousel` | testimonial rail: scroll-snap, adaptive page dots, arrow state |
| `ReelEngine` | 3D arc marquee + lightbox |
| `ContactForm` | inline validation and error states |

This is deliberately less idiomatic than lifting state into React. It was chosen
because preserving the original behaviour exactly was the hard constraint, and
because it keeps the client bundle to ~5.7 kB of route JS.

## Editing content

Content lives in `data/`, separate from presentation:

- `data/work.ts` — projects. Add an object, the grid renders it. `outcomeVerified: false`
  renders the outcome as a dashed placeholder so an unmeasured result can never
  read as a claim.
- `data/wall.ts` — the scrolling wall. Each column is rendered twice; the
  duplicate is the loop's tail, so the halves must stay identical.
- `data/reel.ts` — reel items. Add `src` for a real mp4 (silent hover preview +
  lightbox playback); without it the still is used.

Images are declared once in `globals.css` as `.px-<name>` and reused by class,
so the same file is never inlined twice.

## Before launch

- **Fonts.** Loaded via `<link>` in `app/layout.tsx`, matching the source. Swap to
  `next/font/google` when building with network access to self-host them.
- **`public/og.jpg`** is referenced by the metadata but not present yet (1200×630).
- **Contact form** validates but does not submit. Point it at a route handler or
  Formspree.
- **Placeholders.** Testimonial quotes, five of six project outcomes, industry
  case-proof lines and FAQ pricing are marked with `.ph` and dashed underlines.
- **`href="#"`** on privacy and terms links.
- **Domain** is `https://axiomflow.com` in metadata and JSON-LD; update if wrong.
