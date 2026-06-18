# Houston Sign Crafters — Website

In-house Next.js site replacing the Framer build. Goals: launch SEO + landing
pages fast, send lead emails, and capture leads with in-page lead magnets.

Built on the Leadmill Next.js pattern (adapted from PROTECH), following the
Local SEO + AI Overview playbook.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** (`app/globals.css` + `@theme` tokens)
- **Resend** for transactional email + broadcast list-building
- Markdown blog via `gray-matter` + `marked`

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in keys (works without them in dev — emails just log)
npm run dev                  # http://localhost:3000
npm run build                # production build
```

## The core idea: pages from data

A new page = one entry in a data file. No new components needed.

| To launch a… | Edit | Renders at |
|---|---|---|
| Service / SEO page | `data/services.js` | `/services/[slug]` |
| Location page | `data/markets.js` | `/locations/[slug]` |
| Campaign landing page | `data/landing.js` | `/lp/[slug]` (noindex) |
| Gated guide (lead magnet) | `data/guides.js` + PDF in `public/guides/` | `/guides/[slug]` |
| Blog post | `content/blog/*.md` | `/blog/[slug]` |

Site-wide NAP/brand lives in `data/business.js` (single source of truth).
`app/sitemap.js` and `components/Footer.jsx` read these same files, so the
sitemap and internal links never drift from what's published.

Every generated page gets the playbook's required `<head>` tags, schema
(`LocalBusiness` site-wide + `Service`/`FAQPage`/`Article` per page),
answer-first block, question-based H2s, and CTAs by construction.

## Email + lead capture

All forms (`/quote`, `/free-mockup`, `/guides/*`, `/contact`) use one component
(`components/LeadForm.jsx`) → one server action (`lib/leads.js`) which:

1. **Notifies** the business (`RESEND_TO_EMAIL`)
2. **Auto-responds** to the lead
3. **Adds** the lead to a Resend Audience (`RESEND_AUDIENCE_ID`) for broadcasts

Without `RESEND_API_KEY` set, submissions succeed and log to the console — so
dev/preview works with no setup.

## Before launch (TODO)

- [ ] Fill real NAP, geo coordinates, and verified `sameAs` URLs in `data/business.js`
- [ ] Add brand assets: `public/logo.png`, `app/icon.png` (favicon), `app/apple-icon.png`
- [ ] Confirm brand colors in `app/globals.css` `@theme`
- [ ] Verify `houstonsigncrafters.com` domain in Resend (SPF/DKIM) for deliverability
- [ ] Add the guide PDF to `public/guides/`
- [ ] Set env vars in Vercel (preview + prod)
- [ ] Map every old Framer URL → new URL as a 301 in `next.config.ts` before DNS cutover
- [ ] Submit `sitemap.xml` in Google Search Console after cutover
