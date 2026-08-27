// Audience (buyer-type) pages — /general-contractors, /property-managers,
// /franchise-signage. The B2B buyers who ask "sign contractor for a retail
// buildout in Houston" rather than "sign shop near me". Every claim here is
// verified elsewhere on the site (business.js / pricing.js / sign-permits) —
// NO certifications, bonding, or insurance claims unless the owner confirms
// them in writing.

const AUDIENCES = {
  "general-contractors": {
    slug: "general-contractors",
    name: "General Contractors",
    metaTitle: "Sign Company for General Contractors in Houston",
    metaDescription:
      "Sign company for general contractors in Houston: permit-ready drawings, in-house fabrication and install, one point of contact. Quotes in one business day.",
    eyebrow: "For general contractors",
    h1: "The sign sub that doesn't blow your schedule",
    intro:
      "You've got a CO date and a punch list. The sign can't be the thing holding the ribbon-cutting. We run signage like a trade: permit-ready drawings, real lead times, and our own crew on the install.",
    answer:
      "Houston Sign Crafters works as a signage subcontractor for general contractors across the Houston metro: we produce permit-ready sign drawings, handle the sign permit with the correct jurisdiction (City of Houston, the suburbs, or unincorporated Harris County), fabricate in our own Houston shop, and install with our own crew, with an itemized written quote within one business day of getting plans or a site photo.",
    pains: [
      {
        h: "Permits stall closeouts",
        p: "Sign permits run through a different office in every jurisdiction, and a wrong submission can push your CO. We prepare permit-ready drawings and submit to the right authority ourselves. We published the whole map: see sign permits by jurisdiction.",
        link: { href: "/sign-permits", label: "Sign permits by jurisdiction" },
      },
      {
        h: "Bids you can actually level",
        p: "Our quotes are itemized (design, permit, fabrication, install), and our typical installed ranges are published, so you can sanity-check numbers before you even call. Quote back within one business day.",
        link: { href: "/pricing", label: "Published price ranges" },
      },
      {
        h: "One sub, no handoffs",
        p: "Design, fabrication, permitting, and installation are all our own people. One contact from submittal to final walk. No broker in the middle, no third-party installer showing up unbriefed.",
      },
      {
        h: "Timelines you can put in the schedule",
        p: "Channel letters typically run 6–8 weeks and monuments 10–12 weeks once design and permit are approved, real numbers we publish and plan around, not best-case guesses.",
        link: { href: "/pricing", label: "Typical timelines" },
      },
    ],
    faqs: [
      {
        q: "Can you work from our architectural plans?",
        a: "Yes. Send plans or elevation drawings and we'll produce sign shop drawings suitable for permit submission and landlord review, then quote the full scope itemized within one business day.",
      },
      {
        q: "Who pulls the sign permit?",
        a: "We do, with the correct authority for the address: City of Houston Sign Administration, the suburb's permit office, or Harris County for unincorporated areas. Most jurisdictions require a licensed sign contractor to pull the permit, which is part of what you're hiring us for.",
      },
      {
        q: "Can you hit a hard opening date?",
        a: "Give us the date up front and we'll work the schedule backwards from it, permit review windows included. Typical production runs are published on our pricing page; rush options depend on scope, so flag the date in your first message.",
      },
      {
        q: "What stands behind the install?",
        a: "Our signs carry a 5-year warranty and illuminated work is UL-certified. If something fails, you call the crew that built it, not a subcontractor chain.",
      },
    ],
    portfolioIds: ["slick-city-action-park", "kirkwood-tech-center", "at-home-shopping-center"],
  },

  "property-managers": {
    slug: "property-managers",
    name: "Property Managers",
    metaTitle: "Sign Company for Property Managers in Houston",
    metaDescription:
      "Sign company for property managers in Houston: tenant panels, monument refacing, code-compliant signage, one accountable vendor. Quotes in 1 business day.",
    eyebrow: "For property managers",
    h1: "One sign vendor for every property on your list",
    intro:
      "Tenant turns, faded monuments, a sign the city flagged. Signage is a rolling to-do list across every property you run. We're the one call that handles all of it, correctly permitted, on every site.",
    answer:
      "Houston Sign Crafters supports property managers across the Houston metro with tenant panel changes, monument sign refacing and rebuilds, code-compliant new signage, and repairs, handled by one in-house team that manages the permit with the correct jurisdiction for each property and answers with an itemized written quote within one business day.",
    pains: [
      {
        h: "Tenant turns, without the runaround",
        p: "New tenant panels and reface jobs quoted fast so the space isn't sitting unbranded. Send the property address and existing sign photos. Itemized quote in one business day.",
      },
      {
        h: "Reface or rebuild? An honest answer",
        p: "A tired monument doesn't always need to be demolished. We'll tell you when a reface saves the budget and when the structure genuinely needs replacing, with numbers for both.",
        link: { href: "/services/monument-signs", label: "Monument signs & refacing" },
      },
      {
        h: "Compliance across jurisdictions",
        p: "Properties in Houston, Sugar Land, Pearland, and unincorporated Harris County answer to different sign codes and offices. We permit each site with its correct authority. The map is published on our site.",
        link: { href: "/sign-permits", label: "Sign permits by jurisdiction" },
      },
      {
        h: "Fewer callbacks, documented work",
        p: "5-year warranty on our signs and UL-certified illumination. When something's under warranty, the crew that built it services it. One accountable vendor, not a phone tree.",
      },
    ],
    faqs: [
      {
        q: "Do you handle multi-tenant monument panel changes?",
        a: "Yes. Panel swaps, refaces, and full rebuilds on multi-tenant monuments are core work for us. Send the property address and a photo of the existing sign for a quote within one business day.",
      },
      {
        q: "Can you service properties across different cities?",
        a: "Yes. We serve the Houston metro including Katy, Sugar Land, The Woodlands, Cypress, Pearland, Spring, and Pasadena, and we handle each property's permit with its own jurisdiction's process.",
      },
      {
        q: "A tenant's sign was flagged by the city. Can you fix it?",
        a: "That's a common call. We'll assess what the code issue is, prepare compliant drawings, re-permit with the correct office, and bring the sign up to spec.",
      },
      {
        q: "Do you offer recurring maintenance?",
        a: "We repair and service signs we build under the 5-year warranty, and we quote repair or maintenance work on existing signage per property. Ask about setting up a standing arrangement across your portfolio.",
      },
    ],
    portfolioIds: ["kirkwood-tech-center", "at-home-shopping-center", "clear-lake-medical-plaza"],
  },

  "franchise-signage": {
    slug: "franchise-signage",
    name: "Franchise & Multi-Location",
    metaTitle: "Franchise Sign Company in Houston",
    metaDescription:
      "Franchise sign company in Houston: brand-standard, spec-accurate fabrication with landlord and city approvals handled. Quotes in one business day.",
    eyebrow: "For franchises & multi-location brands",
    h1: "Your brand standards, built to spec in Houston",
    intro:
      "Corporate has a sign spec. Your landlord has criteria. The city has a code. Opening day doesn't care about any of it. We build franchise signage that satisfies all three. We've done it for national concepts opening Houston locations.",
    answer:
      "Houston Sign Crafters fabricates and installs brand-standard signage for franchise and multi-location businesses opening in the Houston metro, working from your franchisor's sign criteria, clearing the landlord's requirements and the local jurisdiction's permit, and delivering an itemized written quote within one business day. Franchise concepts we've built for include Nautical Bowls and Slick City Action Park locations.",
    pains: [
      {
        h: "Spec-accurate, not spec-adjacent",
        p: "Franchise sign packages come with exact letterforms, colors, and lighting specs. We fabricate to the drawing in our own Houston shop, so what corporate approved is what goes on the wall.",
      },
      {
        h: "Three approvals, one handler",
        p: "Franchisor sign criteria, landlord criteria, and city code all have to line up before fabrication. We run all three approvals in the right order so you don't pay for a sign twice.",
        link: { href: "/sign-permits", label: "How local permitting works" },
      },
      {
        h: "Opening-date driven",
        p: "We schedule backwards from your opening. Typical channel letter production is 6–8 weeks after approvals. Flag your date in the first call and we'll tell you honestly whether it's makeable.",
        link: { href: "/pricing", label: "Typical timelines & ranges" },
      },
      {
        h: "Proof from real franchise builds",
        p: "We've fabricated and installed for franchise locations including Nautical Bowls and Slick City Action Park: brand-spec work, permitted and installed by our own crew.",
        link: { href: "/portfolio", label: "See the work" },
      },
    ],
    faqs: [
      {
        q: "Can you work directly from our franchisor's sign criteria package?",
        a: "Yes. Send the brand's sign criteria and we'll produce site-specific drawings for corporate, landlord, and permit approval, then fabricate to the approved spec.",
      },
      {
        q: "Do you coordinate with corporate or the franchisor's vendor list?",
        a: "We're happy to work within a franchisor's approval process: submittals, spec sheets, and photos of completed work for brand sign-off.",
      },
      {
        q: "Can you handle multiple Houston-area locations?",
        a: "Yes. One team across the metro means consistent fabrication and one point of contact as you roll out locations in Houston, Katy, Sugar Land, and beyond.",
      },
      {
        q: "What does a typical franchise storefront sign cost?",
        a: "Illuminated channel letter sets typically run $1,500 to $10,000+ installed depending on size and lighting. See our published pricing page. Every quote is itemized and free within one business day.",
      },
    ],
    portfolioIds: ["nautical-bowls", "slick-city-action-park", "emporium-games"],
  },
};

export function getAllAudiences() {
  return Object.values(AUDIENCES);
}

export function getAudience(slug) {
  return AUDIENCES[slug] || null;
}

export function getAudienceSlugs() {
  return Object.keys(AUDIENCES);
}

export default AUDIENCES;
