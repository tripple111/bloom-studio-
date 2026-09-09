@AGENTS.md

# Bloom Studio — Project Context

Boutique Pilates & Yoga studio website. Next.js (App Router), TypeScript, Tailwind CSS v4.

## Design tokens (app/globals.css, @theme block)

Use these classes — never hardcode hex colors or raw Tailwind text sizes for headings.

- `bg-cream` / `text-cream` / `border-cream` — #EDE1D4 (background)
- `bg-tea` / `text-tea` / `border-tea` — #CBEAA6 (accent/borders)
- `bg-coffee` / `text-coffee` / `border-coffee` — #352208 (primary text/CTA)
- `rounded-card` — 1rem border radius, used on photo cards
- `text-hero` (3rem), `text-title` (2.25rem), `text-subtitle` (1.5rem), `text-label` (1.125rem) — typography scale

Fonts: `font-heading` (Fraunces, for headings) and `font-body` (Inter, default body text) — defined in app/layout.tsx via next/font.

## File structure

- `app/layout.tsx` — shared header + footer. Header currently uses transparent gradient (homepage) — being converted to page-aware styling (frosted cream on non-homepage pages).
- `app/page.tsx` — Homepage
- `app/schedule/page.tsx` — Class schedule + booking flow (classes array + slot-based booking)
- `app/about/page.tsx` — Team page (team array)
- `app/contact/page.tsx` — Location & Hours (no form — moved to Quick Inquiry dialog)
- `components/quick-inquiry.tsx` — Contact dialog (shadcn Dialog), triggered from header nav
- `components/ui/` — shadcn-generated components, don't hand-edit these directly

## Conventions

- Repeated content (classes, team members) lives in a data array at the top of the file, rendered via `.map()` — not hardcoded per item.
- Interactive elements (buttons, links styled as buttons) should have: `transition-all duration-200`, `hover:scale-[1.02]`, `active:scale-[0.98]`, and a `focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2` for accessibility.
- Disabled states use `disabled:opacity-40 disabled:pointer-events-none` (or `disabled:cursor-not-allowed`).
- No real backend — forms show a local success state only (no email sending, no database, no payment processing).

## Known gotchas

- `app/globals.css` and `app/layout.tsx` have drifted/reverted unexpectedly multiple times this session — if styling breaks across multiple pages at once, check these shared files first before debugging an individual page.
- Prefer full-file rewrites over partial edits when fixing JSX — safer than hunting for a single dropped character.
- Always show proposed changes before applying anything that touches more than one file or a shared/config file.
