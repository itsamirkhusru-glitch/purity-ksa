# PMC Website — Agent Guide

Corporate marketing website for Purity for Maintenance and Cleaning Co. (PMC), built with TanStack Start (React + SSR) and deployed on Netlify.

## Architecture

### Framework & Routing
- **TanStack Start** with file-based routing via `@tanstack/react-router`
- Route files live in `src/routes/` — each file maps to a URL path
- `__root.tsx` defines the HTML shell (Navbar, Footer, WhatsApp FAB)
- Route tree is auto-generated at build time into `src/routeTree.gen.ts`

### Styling
- **Tailwind CSS v4** with `@theme` custom properties in `src/styles.css`
- Custom colors: `pmc-blue` (#1e40af), `pmc-green` (#16a34a), `pmc-green-light` (#22c55e)
- Utility classes `hero-gradient`, `section-pattern`, `card-hover` in `src/styles.css`

### Forms (Netlify Forms)
- Static HTML skeletons in `public/` register forms with Netlify at build time
  - `public/contact-form.html` → form name `"contact"`
  - `public/quote-form.html` → form name `"quote"`
- React components POST to these static files using `fetch` with `application/x-www-form-urlencoded`
- The hidden `<input name="form-name">` field links submissions to the registered form

## Key Files

```
src/
  routes/
    __root.tsx       # Shell: Navbar, Footer, WhatsApp FAB, global SEO meta
    index.tsx        # Home page — hero, stats, services, why us, CTA
    about.tsx        # About Us — company profile, vision/mission, values
    services.tsx     # Services — 13 detailed service sections
    industries.tsx   # Industries We Serve — 8 industry sectors
    projects.tsx     # Projects & Clients portfolio
    quote.tsx        # Request a Quote form (Netlify Forms)
    contact.tsx      # Contact Us — form, contact details, map embed
  styles.css         # Tailwind v4 + custom theme variables
  router.tsx         # Router factory (uses auto-generated routeTree)
public/
  contact-form.html  # Netlify Forms build-time registration (contact form)
  quote-form.html    # Netlify Forms build-time registration (quote form)
```

## Coding Conventions

- Each page exports `Route = createFileRoute(path)({ head, component })`
- `head()` on each route returns page-specific `<meta>` for SEO
- Inline SVG icons — no icon library dependency
- Page components and their sub-components co-located in the route file

## Contact Details (Placeholder)
Phone numbers, emails, and address are placeholders (`+966 50 000 0000`, `info@purity-ksa.com`). Replace before going live:
- `src/routes/__root.tsx` — topbar and footer
- `src/routes/contact.tsx` — contact info section and WhatsApp link
- `src/routes/quote.tsx` — sidebar phone/WhatsApp

## Before Going Live
- Replace placeholder phone/email/address with real PMC contact details
- Update the Google Maps embed in `contact.tsx` with the exact office coordinates
- Add real client logos to `public/` and reference them in `projects.tsx`
- Add real project photos to `public/` and update the gallery in `projects.tsx`
- Update WhatsApp links (`wa.me/966500000000`) with the real WhatsApp number
