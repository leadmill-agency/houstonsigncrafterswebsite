// Single source of truth for Houston Sign Crafters business info (NAP, brand,
// hours, service areas). Imported everywhere so the name/phone/address format
// is byte-identical across the whole site (playbook Part 2.2 — NAP consistency).
//
// NAP + geo + sameAs pulled from the live houstonsigncrafters.com JSON-LD
// (2026-06-18). Re-verify each sameAs URL is live before relying on it
// (playbook Field Note #5).

export const BUSINESS = {
  name: "Houston Sign Crafters",
  legalName: "Houston Sign Crafters",
  tagline: "Custom signs designed, built, and installed in Houston.",
  // Canonical site origin. Pick www or non-www and keep it consistent
  // everywhere (canonical, OG, sitemap). Using non-www here.
  url: "https://houstonsigncrafters.com",

  phone: "(832) 974-2546",
  phoneHref: "tel:+18329742546",
  smsHref: "sms:+18329742546",

  // Lead notifications land here; auto-responders send from RESEND_FROM_EMAIL.
  // sales@ is the address used on the company's own catalogue/collateral.
  email: "sales@houstonsigncrafters.com",

  address: {
    streetAddress: "1359 E 40th St",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77022",
    addressCountry: "US",
  },
  geo: { latitude: 29.8035, longitude: -95.3505 },

  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
  ],
  hoursLabel: "Mon–Fri, 8am–5pm",

  priceRange: "$$",

  // Aggregate review rating shown in the trust bar + LocalBusiness schema.
  // Source: aggregated across review platforms (confirmed by owner, 2026-06).
  // `count` is a string so we can show "428+". Set rating to null to hide the
  // star rating everywhere (the rest of the trust bar still renders).
  reviews: { rating: 4.8, count: "428+", countNumeric: 428, source: "Google & Trustpilot" },

  // Verifiable differentiators for the trust bar (no unverified claims).
  trustPoints: [
    "5-Year Warranty",
    "UL-Certified",
    "Built in Houston",
    "Free Quote in 1 Business Day",
  ],

  // "Who you'll talk to" — the single biggest anti-AI / trust signal.
  // Owners confirmed by Rameel 2026-08-23. TODO: real HEADSHOT(s) →
  // public/team/, then update `photo`.
  team: {
    name: "Rameel Sheikh",
    title: "Owner",
    photo: "/portfolio/jys.jpg", // interim: real HSC truck on a job site
    note: "answers most of the calls himself",
  },
  owners: ["Rameel Sheikh", "Kashir Sheikh"],

  // Optional headline stat. TODO: set a REAL number (e.g. 300) to show
  // "300+ Houston businesses served"; leave null to hide it. Don't invent one.
  stats: {
    businessesServed: null,
  },

  // Promo shown on the home + service pages. Edit freely.
  offer: {
    label: "$400 off a lighted storefront sign",
    detail: "mention this offer when you request your quote",
    href: "/quote",
  },

  // Real directory profiles from the live site. Keep the strongest 8–12, all
  // verified (playbook Field Note #7). Re-confirm each resolves before launch.
  sameAs: [
    "https://www.facebook.com/profile.php?id=61579345208574",
    "https://www.brownbook.net/business/54528056/houston-sign-crafters",
    "https://citysquares.com/b/houston-sign-crafters-26818597",
    "https://www.provenexpert.com/en-us/houston-sign-crafters/",
    "https://www.tupalo.co/houston-texas/houston-sign-crafters",
    "https://www.hotfrog.com/company/6850c8936f22b876b5c1bdc33cbc4d22/houston-sign-crafters/houston/design-printing",
    "https://www.chamberofcommerce.com/business-directory/texas/houston/sign-shop/2034045939-houston-sign-crafters-sign-company-business-sign-channel-letters-storefront-sign",
    "https://issuu.com/houstonsigncrafters/docs/houston_sign_crafters",
  ],
};

// Primary metro + suburbs we serve. Used for areaServed schema and as the
// seed list for location pages.
export const SERVICE_AREAS = [
  "Houston, TX",
  "Katy, TX",
  "Sugar Land, TX",
  "The Woodlands, TX",
  "Cypress, TX",
  "Pearland, TX",
  "Spring, TX",
  "Pasadena, TX",
];

export default BUSINESS;
