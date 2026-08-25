// Campaign landing pages — source of data for /lp/[slug].
//
// These are paid-ad landing pages (Meta, Google): chrome-free (no site nav/footer),
// single conversion goal, noindex + robots-disallowed so they never compete with
// the SEO pages. To launch a variant for a new ad/audience, add one entry here.
//
// Each entry drives the full LP template (hero + quote form, offer, trust, gallery,
// deliverables, process, final CTA). heroImage should be a strong portfolio
// rendering in /public/portfolio/.

const LANDING = {
  "houston-signs": {
    slug: "houston-signs",
    metaTitle: "Custom Storefront Signs in Houston: $400 Off | Houston Sign Crafters",
    metaDescription:
      "Get $400 off a lighted storefront sign in Houston. Channel letters, monument signs, and more. Designed, built, permitted, and installed in-house. Free quote in 1 business day.",
    eyebrow: "Houston Sign Company",
    headline: "Custom storefront signs, built in Houston.",
    subhead:
      "Channel letters, monument signs, vehicle wraps. Designed, fabricated, permitted, and installed by one local crew. Get a free quote in one business day.",
    heroImage: "/portfolio/clearlake.jpg",
    bullets: [
      "In-house design, fabrication & licensed install",
      "City permits handled for you",
      "UL-certified, backed by a 5-year warranty",
      "Free design mockup: see it before you pay",
    ],
    formKind: "quote",
    cta: "Get My Free Quote",
  },
  "channel-letters-houston": {
    slug: "channel-letters-houston",
    metaTitle: "Channel Letter Signs in Houston: $400 Off | Houston Sign Crafters",
    metaDescription:
      "Illuminated channel letter signs for your Houston storefront, $400 off. Built and installed in-house with permits handled. Free quote within one business day.",
    eyebrow: "Houston Storefront Signs",
    headline: "Illuminated channel letters for your storefront.",
    subhead:
      "UL-listed LED channel letters. Designed, built, permitted, and installed by one Houston team. Free quote in one business day.",
    heroImage: "/portfolio/jys.jpg",
    bullets: [
      "UL-listed LED channel letters built for the Houston climate",
      "City permitting and landlord sign criteria handled",
      "Licensed installation and a 5-year warranty",
    ],
    formKind: "quote",
    cta: "Get My Free Quote",
  },
  "vehicle-wraps-houston": {
    slug: "vehicle-wraps-houston",
    metaTitle: "Vehicle Wraps in Houston | Houston Sign Crafters",
    metaDescription:
      "Custom car, truck, van, and fleet wraps in Houston, designed and installed on premium cast vinyl. Free quote within one business day.",
    eyebrow: "Houston Vehicle Wraps",
    headline: "Turn your vehicle into a 24/7 billboard.",
    subhead:
      "Premium car, truck, van, and fleet wraps, designed and installed in Houston. Thousands of impressions a day for one flat cost.",
    heroImage: "/portfolio/slickcity.jpg",
    bullets: [
      "Full wraps, partial wraps, and cut-vinyl lettering",
      "Premium cast vinyl rated for years in the Texas sun",
      "Single vehicles and full fleets, scheduled to limit downtime",
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
