// Published price ranges — the single source for /pricing, service-page cost
// callouts, and company-facts. RANGES CONFIRMED IN WRITING BY THE OWNER
// (Rameel, 2026-08-23). Do not edit numbers without owner sign-off (house
// rule: no unverified figures anywhere).
//
// `serviceSlug` links a row to its /services page; timeline = typical
// production + install window once the design/permit is approved.

export const PRICING = [
  {
    serviceSlug: "channel-letters",
    label: "Channel letter signs",
    low: 1500,
    high: "10,000+",
    note: "Small non-lit sets start around $1,500; large illuminated storefront sets typically run $4,000–$10,000+.",
    timeline: "6–8 weeks",
  },
  {
    serviceSlug: "monument-signs",
    label: "Monument signs",
    low: 6000,
    high: "50,000+",
    note: "Masonry, foundations, and engineering drive the range. Multi-tenant and lit monuments sit at the top.",
    timeline: "10–12 weeks",
  },
  {
    serviceSlug: "vehicle-wraps",
    label: "Vehicle wraps",
    low: 200,
    high: "10,000",
    note: "From door decals and partial wraps up to full commercial fleet wraps.",
    timeline: "3–7 days",
  },
  {
    serviceSlug: "wall-graphics",
    label: "Wall graphics & murals",
    low: 1000,
    high: "15,000",
    note: "Interior feature walls to full exterior murals; size and surface prep drive the price.",
    timeline: "About 1 day to install",
  },
  {
    serviceSlug: "interior-signs",
    label: "Interior & lobby signs",
    low: 200,
    high: "10,000+",
    note: "From ADA and wayfinding packages up to backlit dimensional lobby logos.",
    timeline: "About 1 day to install",
  },
  {
    serviceSlug: "custom-banners",
    label: "Custom banners",
    low: 30,
    high: "1,000",
    note: "Vinyl and mesh banners, any size, with finishing and hardware.",
    timeline: "About 1 day",
  },
];

export function getPricingRow(serviceSlug) {
  return PRICING.find((p) => p.serviceSlug === serviceSlug) || null;
}

export function formatRange(row) {
  return `$${row.low.toLocaleString("en-US")} – $${row.high}`;
}

export default PRICING;
