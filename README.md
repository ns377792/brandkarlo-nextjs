# BrandKarlo — Next.js Website

This is the BrandKarlo website, built with **Next.js 16 (App Router, JavaScript)**. This README is a map of the whole site — every page, where its content lives, and where to go when you need to change something.

---

## Getting started

```bash
npm install
npm run dev       # runs at http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

---

## Site map — every page and where to edit it

| Page (URL) | File | What it is |
|---|---|---|
| `/` | `app/page.js` | Homepage — hero, services preview, featured projects, testimonials, CTA sections. |
| `/about` | `app/about/page.js` | About Us page. |
| `/service` | `app/service/page.js` | Services listing — 12 cards (icon, title, short description, Read More). Cards are generated automatically from `lib/servicesData.js`. |
| `/service/[slug]` | `app/service/<slug>/page.js` (12 folders) | One detail page per service. See **Services** section below. |
| `/project` | `app/project/page.js` | Projects/portfolio listing — cards with image, title, short description, Read More. Filter tabs (All, Website, SEO, Ads, Branding, Social). Cards are generated automatically from `lib/projectsData.js`. |
| `/project/[slug]` | `app/project/<slug>/page.js` (6 folders) | One case-study page per project. See **Projects** section below. |
| `/blog` | `app/blog/page.js` | Blog listing with category filter + pagination (logic in `components/BlogFilterPagination.js`). |
| `/contact` | `app/contact/page.js` | Contact page and form. |
| `/faq` | `app/faq/page.js` | FAQ accordion. |
| `/careers` | `app/careers/page.js` | Careers page. |
| `/get-free-consultation` | `app/get-free-consultation/page.js` | Consultation request page — this is the main CTA link used across the whole site. |
| `/privacy-policy` | `app/privacy-policy/page.js` | Privacy policy. |
| `/terms-and-conditions` | `app/terms-and-conditions/page.js` | Terms and conditions. |

Every page is a plain `.js` file with JSX — open the file for the page you want to change and edit the text/markup directly. There's no CMS; content is written straight into the page files (except Services and Projects, which use data files — see below).

---

## Full link directory — every URL on the site

Base URL in production: `https://www.brandkarlo.in`

### Main pages (11)

| Page | URL |
|---|---|
| Home | `/` |
| About | `/about` |
| Services (listing) | `/service` |
| Projects (listing) | `/project` |
| Blog (listing) | `/blog` |
| Contact | `/contact` |
| FAQ | `/faq` |
| Careers | `/careers` |
| Get a Free Consultation | `/get-free-consultation` |
| Privacy Policy | `/privacy-policy` |
| Terms and Conditions | `/terms-and-conditions` |

### Service pages (12)

| Service | URL |
|---|---|
| Search Engine Optimization (SEO) | `/service/seo` |
| Social Media Marketing | `/service/social-media-marketing` |
| Content Marketing | `/service/content-marketing` |
| Email Marketing | `/service/email-marketing` |
| Google Ads & Meta Ads | `/service/google-ads-meta-ads` |
| Website Design & Development | `/service/website-development` |
| Website Optimization | `/service/website-optimization` |
| Google Analytics Setup & Management | `/service/google-analytics` |
| Google Business Profile Optimization | `/service/google-business-profile` |
| Funnel Marketing | `/service/funnel-marketing` |
| Google Shopping Ads | `/service/shopping-ads` |
| Display Advertising | `/service/display-ads` |

### Project / case-study pages (6)

| Project | URL |
|---|---|
| Iamnitinsingh.in (portfolio website) | `/project/iamnitinsingh-portfolio` |
| Activechamp.in (Shopify store) | `/project/activechamp-shopify` |
| Business Growth SEO | `/project/business-growth-seo` |
| Lead Generation Google Ads | `/project/lead-generation-ads` |
| Kitabiduniya.com (branding) | `/project/kitabiduniya-branding` |
| Engaging Social Campaigns | `/project/engaging-social-campaigns` |

### Blog posts (11), newest first

| Post | URL | Date |
|---|---|---|
| SEO Case Study: How We Grew a Website from 0 to 10,000 Organic Visitors | `/blog/seo-case-study-0-to-10000-organic-visitors` | Jul 26, 2026 |
| How We Ranked a Local Business on Google's First Page in 90 Days | `/blog/how-we-ranked-a-local-business-on-googles-first-page-in-90-days` | Jul 25, 2026 |
| 10 Powerful SEO Strategies to Rank Higher in 2026 | `/blog/10-powerful-seo-strategies-to-rank-higher-in-2026` | Jul 22, 2026 |
| Social Media Trends to Watch in 2026 for Businesses | `/blog/social-media-trends-to-watch-in-2026-for-businesses` | Jul 20, 2026 |
| How Data-Driven Marketing Can Transform Your Business | `/blog/how-data-driven-marketing-can-transform-your-business` | Jul 17, 2026 |
| Ecommerce SEO Best Practices to Increase Sales | `/blog/ecommerce-seo-best-practices-to-increase-sales` | Jul 14, 2026 |
| 7 Must-Have Features for a High-Converting Website | `/blog/7-must-have-features-for-a-high-converting-website` | Jul 11, 2026 |
| PPC Advertising Tips to Get More Leads for Less Cost | `/blog/ppc-advertising-tips-to-get-more-leads-for-less-cost` | Jul 8, 2026 |
| How Strong Branding Builds Trust and Drives Sales | `/blog/how-strong-branding-builds-trust-and-drives-sales` | Jul 5, 2026 |
| Content Marketing Strategies That Actually Work in 2026 | `/blog/content-marketing-strategies-that-actually-work-in-2026` | Jul 2, 2026 |
| Email Marketing Best Practices to Boost Open Rates | `/blog/email-marketing-best-practices-to-boost-open-rates` | Jun 29, 2026 |

> Blog posts are listed newest-first automatically (`getAllPosts()` in `lib/blogData.js` sorts by `date`), so this table's order will only go stale if a post's `date` field is edited without checking it renders in the expected order.

### Other / system routes

| Route | Purpose |
|---|---|
| `/sitemap.xml` | Auto-generated by `app/sitemap.js` from `lib/blogData.js`, `lib/projectsData.js`, `lib/servicesData.js`. Regenerates automatically whenever a post/service/project is added, no manual editing needed. |
| `/robots.txt` | Static file at `public/robots.txt`. |
| `/llms.txt` | Static file at `public/llms.txt`, an AI/LLM discovery file referenced from `robots.txt`. |
| `/api/send-email` | POST-only API route (`app/api/send-email/route.js`) that all three forms (Contact, Consultation, Blog Comment) submit to via `fetch`. Not a browsable page. |

**Total indexable pages: 40** (11 main + 12 services + 6 projects + 11 blog posts).

---

## Services — how to add / edit / remove a service

All 12 service cards and their detail pages are driven by **one file**:

```
lib/servicesData.js
```

Each entry in the array looks like this:

```js
{
  slug: "seo",                    // used in the URL: /service/seo
  icon: "fa-chart-line",          // Font Awesome icon class
  title: "SEO",                   // short name, used on cards
  fullTitle: "Search Engine Optimization (SEO)",  // detail page <h1>
  subtitle: "Rank Higher. Get Found. Grow Organically.",
  metaTitle: "...",               // browser tab title / SEO title
  metaDescription: "...",         // SEO meta description
  intro: "...",                   // first paragraph on the detail page
  intro2: "...",                  // second paragraph
  whatWeDo: [ "Label: description", ... ],   // bullet list
  whyChoose: [ "Label: description", ... ],  // bullet list
}
```

- **To edit a service's text** (card description, detail page copy, bullet points): edit its object in `lib/servicesData.js`. It updates everywhere automatically.
- **To add a new service**: add a new object to the array in `lib/servicesData.js`, then create a new folder `app/service/<your-slug>/page.js` — copy an existing one (e.g. `app/service/seo/page.js`) and change the slug used in `getServiceBySlug("...")`.
- **To remove a service**: delete its object from `lib/servicesData.js` and delete its folder under `app/service/`.
- The shared visual layout (icon circle, title, bullet lists, CTA button) lives in `components/ServiceDetail.js` — edit this once to change the design of **all** service detail pages at the same time.
- The card layout on `/service` (the listing page) is in `app/service/page.js`.

---

## Projects — how to add / edit / remove a project

Same pattern as Services, driven by:

```
lib/projectsData.js
```

Each entry looks like this:

```js
{
  slug: "business-growth-seo",       // used in the URL: /project/business-growth-seo
  category: "seo",                   // used by the filter tabs (website | seo | ads | branding | social)
  categoryLabel: "SEO Campaign",
  tag: "SEO",                        // small badge on the detail page
  metaColor: "purple",               // badge color: blue | green | purple | yellow | emerald | orange
  image: "/img/projects/bookishsanta.jpg",
  imageAlt: "...",
  title: "Business Growth SEO",
  shortDesc: "...",                  // card description + detail page intro
  externalLink: null,                // set to a URL to show a "Visit Live Website" button
  challenge: "...",
  solution: "...",
  result: "...",
  ctaText: "Get an SEO Audit",       // CTA button text on the detail page
}
```

- **To edit a project**: edit its object in `lib/projectsData.js`.
- **To add a new project**: add an object to `lib/projectsData.js`, drop its image into `public/img/projects/`, then create `app/project/<your-slug>/page.js` — copy an existing one (e.g. `app/project/business-growth-seo/page.js`) and update the slug used in `getProjectBySlug("...")`.
- **To remove a project**: delete its object from `lib/projectsData.js` and delete its folder under `app/project/`.
- The shared detail page layout lives in `components/ProjectDetail.js`.
- The card layout on `/project` lives in `app/project/page.js`.
- `/sitemap.xml` is generated automatically by `app/sitemap.js` from these same data files, so a new service/project/blog post appears there with no manual step needed.

---

## Site-wide content — where to find it

| What | File |
|---|---|
| Top navigation menu | `components/Header.js` (the `navLinks` array near the top) |
| Footer links, phone, email, social icons | `components/Footer.js` |
| Social media links (Instagram, Facebook, X, YouTube, LinkedIn) | Appear in **three** places — `components/Footer.js`, `app/page.js` (homepage), and `app/layout.js` (SEO schema `sameAs` list). Update all three when a link changes. |
| Site-wide `<head>` tags, fonts, global SEO schema, favicon | `app/layout.js` |
| Global styles / colors / fonts | `app/style.css` |
| Logo, icons, project photos | `public/img/` |
| `robots.txt` | `public/robots.txt` |
| `sitemap.xml` | Auto-generated by `app/sitemap.js` — do not recreate `public/sitemap.xml`, it will conflict with the dynamic route. |
| Blog posts (add/edit) | `lib/blogData.js` — one object per post (`slug`, `title`, `date`, `content` blocks, `faqs`). Add a new object, then create `app/blog/<slug>/page.js` (copy an existing one) for its metadata. Posts are sorted newest-first automatically by `getAllPosts()`. |
| FAQ accordions (service & blog pages) | Each service/post object has a `faqs: [{ question, answer }]` array in `lib/servicesData.js` / `lib/blogData.js`. The accordion UI + matching schema render automatically via `components/ServiceDetail.js` / `components/BlogDetail.js`. |
| Contact/consultation email delivery | `app/api/send-email/route.js` (Nodemailer via Gmail). Needs `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `ADMIN_EMAIL` in `.env.local` locally — see `.env.local.example`. |

---

## Components (shared, reusable pieces)

| Component | Used for |
|---|---|
| `components/Header.js` | Top navbar, mobile menu toggle, sticky-on-scroll behavior |
| `components/Footer.js` | Footer — links, contact info, social icons |
| `components/SiteChrome.js` | Loading spinner, "back to top" button, scroll animations |
| `components/FilterGrid.js` | Category filter buttons (used on `/project`) |
| `components/TestimonialCarousel.js` | Homepage testimonial slider |
| `components/BlogFilterPagination.js` | Blog category filter + pagination |
| `components/ServiceDetail.js` | Shared layout for all `/service/[slug]` pages |
| `components/ProjectDetail.js` | Shared layout for all `/project/[slug]` pages |

---

## Notes

- Most images use `next/image` for automatic optimization; small decorative icon SVGs are left as plain `<img>` tags since they gain nothing from the optimizer.
- Bootstrap's JS bundle is loaded from a CDN for things like the FAQ accordion.
- There is no database or CMS — all content lives directly in the `.js` files listed above. If you later want non-developers to edit content without touching code, the natural next step is to move `lib/servicesData.js` and `lib/projectsData.js` (and eventually blog posts) into a CMS or a JSON file fetched at build time.
