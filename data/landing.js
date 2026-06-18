// Campaign landing pages — source of data for /lp/[slug].
//
// HOW TO LAUNCH A LANDING PAGE: add one entry here. These are for paid/social
// campaigns — single conversion goal, noindex (so they don't compete with the
// SEO service pages for the same keywords).
//
// Each entry: headline, subhead, bullets, formKind (quote|mockup), and an
// optional eyebrow/offer line.

const LANDING = {
  "channel-letters-houston": {
    slug: "channel-letters-houston",
    eyebrow: "Houston Storefront Signs",
    headline: "Get a custom channel letter sign for your Houston storefront",
    subhead:
      "Illuminated storefront lettering — designed, permitted, and installed by one local team. Free quote within one business day.",
    bullets: [
      "UL-listed LED channel letters built for the Houston climate",
      "City permitting and landlord sign-criteria handled for you",
      "Licensed installation and a 5-year warranty",
    ],
    formKind: "quote",
    cta: "Get My Free Quote",
  },
  "vehicle-wraps-houston": {
    slug: "vehicle-wraps-houston",
    eyebrow: "Houston Vehicle Wraps",
    headline: "Turn your vehicle into a 24/7 billboard",
    subhead:
      "Premium car, truck, van, and fleet wraps — designed and installed in Houston. Thousands of impressions a day for one flat cost.",
    bullets: [
      "Full wraps, partial wraps, and cut-vinyl lettering",
      "Premium cast vinyl rated for years in the Texas sun",
      "Single vehicles and full fleets — scheduled to limit downtime",
    ],
    formKind: "quote",
    cta: "Get My Free Quote",
  },
};

export function getLanding(slug) {
  return LANDING[slug] || null;
}

export function getLandingSlugs() {
  return Object.keys(LANDING);
}

export default LANDING;
