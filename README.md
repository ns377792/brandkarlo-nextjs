# BrandKarlo — Next.js Conversion

This is the BrandKarlo static HTML/Bootstrap site converted to **Next.js 16 (App Router, JavaScript)**.

## What changed vs. the original static site

- **Routing**: every `.html` page became an App Router route:
  - `index.html` → `/`
  - `about.html` → `/about`
  - `service.html` → `/service`
  - `project.html` → `/project`
  - `blog.html` → `/blog`
  - `contact.html` → `/contact`
  - `faq.html` → `/faq`
  - `careers.html` → `/careers`
  - `Get-Free-Consultation.html` → `/get-free-consultation`
  - `privacy-policy.html` → `/privacy-policy`
  - `terms-and-conditions.html` → `/terms-and-conditions`
- **Layout**: `app/layout.js` renders the shared `<Header>`/`<Footer>` and loads global CSS (Bootstrap, the template's `style.css`/`blog.css`, and `animate.css`), fonts, Font Awesome/Bootstrap Icons, and the JSON-LD schema — once, instead of duplicated in every HTML `<head>`.
- **Interactivity ported from jQuery/vanilla JS to React**:
  - `components/Header.js` — mobile nav toggle + sticky-on-scroll navbar (was jQuery scroll handler + Bootstrap collapse).
  - `components/SiteChrome.js` — the loading spinner, "back to top" button, WOW.js scroll animations, and the generic "fake" contact-form submit handler.
  - `components/FilterGrid.js` — the portfolio/project category filter buttons (used on the homepage and `/project`).
  - `components/TestimonialCarousel.js` — the homepage testimonial slider.
  - `components/BlogFilterPagination.js` — the blog's category filter + client-side pagination.
  - Bootstrap's JS bundle is still loaded (for the FAQ accordion, etc.) via `next/script`.
- **Metadata**: each page exports Next's `metadata` object (title/description) instead of a hand-written `<head>`.
- **Assets**: `img/`, `lib/` (wow.js, easing.js, waypoints.js), `robots.txt`, and `sitemap.xml` moved into `public/` and are served as-is. `sitemap.xml` URLs were updated to drop `.html`.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Notes / possible follow-ups

- Images use plain `<img>` tags (not `next/image`) to keep the conversion 1:1 with the original markup. Swapping to `next/image` would improve performance (automatic sizing/lazy-loading) but is a bigger structural change.
- Bootstrap's JS bundle is loaded from a CDN, matching the original site; you could swap this for the `bootstrap` npm package if you prefer bundling it yourself.
- Blog posts and project cards are still hard-coded JSX (mirroring the original static markup). If you want to manage them from a CMS or a JSON/MDX data file, that's the next natural step.  