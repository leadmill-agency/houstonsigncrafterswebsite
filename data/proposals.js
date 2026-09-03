// Client proposals rendered at /proposals/[slug] — unlisted, noindexed pages
// (PRD: HSC/Website Proposal Links/Earth_Burger_Proposal_Website_PRD.md).
// The slug carries a random suffix so the URL is unguessable; never link these
// from public navigation or the sitemap. Prices are client-facing only: no
// internal costs, formulas, or margin anywhere in this file.

export const PROPOSALS = {
  "earth-burger-houston-20001-7k4m2": {
    proposalId: "HSC-EB-20001",
    version: "2026-09-02-v1",
    client: "Earth Burger",
    projectName: "Earth Burger Houston",
    projectAddress: "4640 Scott Street, Houston, TX 77004",
    preparedFor: "Sinelli Concepts International",
    proposalDate: "September 2, 2026",
    validThrough: "September 17, 2026",
    subtotal: 47250,
    salesTaxLabel: "before applicable sales tax",
    depositPercent: 50,
    drawingSetDate: "June 30, 2026",
    accents: { green: "#0B463B", orange: "#F47B20" },
    glance: [
      { n: "3", label: "Illuminated exterior identity signs" },
      { n: "2", label: "Drive-thru and wayfinding structures" },
      { n: "3", label: "Interior sign elements" },
      { n: "$47,250", label: "Total project investment" },
    ],
    summary:
      "Houston Sign Crafters proposes to coordinate, fabricate, permit, and install the complete signage package for Earth Burger #20001 at 4640 Scott Street in Houston. The scope is based on the ten-sheet signage drawing package dated June 30, 2026 and includes three illuminated exterior identity signs, drive-thru signage, wayfinding, a wall stencil, and three interior sign elements.",
    objective:
      "Our objective is to deliver the Houston location within the requested opening window while providing Sinelli Concepts with one local point of accountability for field verification, permitting coordination, fabrication, installation, and warranty support.",
    scopeItems: [
      { id: "east-logo", title: "East illuminated logo", description: "Approx. 8'-4 1/4\" W x 6'-2 3/4\" H face- and halo-illuminated logo assembly with painted aluminum backer", quantity: "1", price: 5100 },
      { id: "south-logo", title: "South illuminated logo", description: "Approx. 6'-10 3/8\" W x 4'-1\" H face- and halo-illuminated logo assembly with painted aluminum backer and survey-dependent bracket system", quantity: "1", price: 4600 },
      { id: "north-logo", title: "North illuminated logo", description: "Approx. 16'-8 1/4\" W x 3'-10\" H face- and halo-illuminated logo assembly with painted aluminum backer and survey-dependent bracket system", quantity: "1", price: 8900 },
      { id: "stencil", title: "South wall stencil", description: "Approx. 7'-8 1/4\" W x 6'-10 3/8\" H stencil production and application; final paint by GC", quantity: "1", price: 700 },
      { id: "canopy", title: "Drive-thru canopy structure", description: "Fabricated drive-thru canopy with illuminated Earth Burger logo, Order Here copy, clearance copy, steel/aluminum support structure, and HSC installation", quantity: "1", price: 13350 },
      { id: "wayfinding", title: "Drive-thru wayfinding fixture", description: "Approx. 54\" W x 79\" H painted aluminum wayfinding fixture with 48\" panel, dimensional copy, arrow, and support posts", quantity: "1", price: 3100 },
      { id: "veggie-letters", title: "Interior Veggie Joint letters", description: "Approx. 6'-5 5/8\" W x 7 1/2\" H white Sintra letters, flush mounted", quantity: "1 set", price: 975 },
      { id: "round-sign", title: "Interior round 100% sign", description: "Approx. 39\" diameter painted ACM panel with dimensional Sintra copy and stud-mounted pads", quantity: "1", price: 1250 },
      { id: "entrance-sign", title: "Entrance mixed-material sign", description: "Approx. 3'-7 1/4\" W x 2'-7 1/2\" H layered Sintra, turf, painted copy, and laminated vinyl sign", quantity: "1", price: 1825 },
      { id: "install", title: "Combined installation", description: "Installation of all included non-canopy exterior and interior sign elements", quantity: "1", price: 5000 },
      { id: "permit", title: "Permit allowance", description: "Standard sign-permit coordination and allowance", quantity: "1", price: 850 },
      { id: "engineering", title: "Engineering allowance", description: "Structural engineering allowance for the proposed scope", quantity: "1", price: 1600 },
    ],
    pricingNote:
      "Pricing is based on purchase of the complete package and the supplied June 30, 2026 drawing set. Removal or material alteration of individual components may require repricing.",
    inclusions: [
      "Project coordination",
      "Field survey and final dimension verification",
      "Shop drawing review and production coordination",
      "Fabrication of listed signage",
      "UL-listed electrical components where applicable",
      "Standard permitting coordination",
      "Structural engineering allowance",
      "Installation of listed signage",
      "Final installation cleanup",
      "Five-year limited HSC warranty on qualifying HSC-fabricated electrical signage",
    ],
    schedule: [
      { title: "Authorization and deposit", description: "Proposal approval, executed agreement, and 50% deposit." },
      { title: "Field verification", timing: "About 2-3 business days after authorization", description: "Subject to site access." },
      { title: "Engineering and permit submission", timing: "About 3-5 business days", description: "After verified drawings and required customer documents are available." },
      { title: "Permit and landlord review", description: "Timing controlled by the applicable jurisdiction and reviewing parties." },
      { title: "Fabrication", timing: "About 4-6 weeks", description: "After final artwork, engineering, and permit approvals." },
      { title: "Installation", timing: "About 2-4 working days", description: "After fabrication, site readiness, and scheduling confirmation." },
    ],
    scheduleStatement:
      "Houston Sign Crafters will target completion within Earth Burger's requested 90-day opening window. The final completion date depends on timely customer approvals, landlord review, permitting, engineering, site readiness, and access.",
    responsibilities: {
      hsc: [
        "Field verification and signage coordination",
        "Fabrication of the listed signage",
        "Standard permit submission and coordination",
        "Engineering coordination within the stated allowance",
        "Installation of the listed signage",
        "Installation scheduling and closeout",
      ],
      customer: [
        "Final brand, artwork, landlord, and construction approvals",
        "Accurate property and construction documents requested by the permitting authority",
        "Primary 120V electrical circuits brought to each sign location",
        "Final electrical connection by the responsible licensed trade if excluded by jurisdiction or project conditions",
        "Concrete base, anchor bolts, and J-hooks for the drive-thru canopy structure as identified in the supplied drawing set",
        "Wall preparation, patching, waterproofing, and painting unless specifically included",
        "Final paint application for the south elevation stencil",
        "Safe and unobstructed site access",
      ],
    },
    exclusions: [
      "Sales tax is not included and will be added as applicable.",
      "Permit or engineering costs above the listed allowances require written approval and a change order.",
      "Concealed conditions, inadequate structure, unavailable electrical service, asbestos, underground conflicts, and site conditions not reasonably visible during the survey are excluded.",
      "Artwork revisions, scope changes, remobilization, storage, after-hours work, and delays caused by other trades may require a change order.",
      "Final dimensions and attachment methods are subject to field verification.",
    ],
    whyHsc: [
      "Houston-based fabrication and installation team",
      "Local permitting and field coordination",
      "UL-listed electrical sign capability",
      "One point of accountability from survey through installation",
      "Five-year limited warranty on qualifying electrical signage",
      "Capacity to support future Houston-area franchise locations",
    ],
    positioning:
      "Houston Sign Crafters can serve as Earth Burger's local signage execution partner for this project and future Houston-area openings.",
    terms: [
      "Proposal total: $47,250 before applicable sales tax",
      "Deposit: 50%, or $23,625",
      "Final payment: 50%, or $23,625, due upon installation unless the final agreement states otherwise",
      "Proposal validity: through September 17, 2026",
      "Work begins after the executed agreement, deposit, required documents, and customer approvals are received",
      "Changes require written authorization and may affect price and schedule",
      "The final fabrication and installation agreement controls if it conflicts with this proposal page",
    ],
    pdfUrl: "/proposals/Houston_Sign_Crafters_Earth_Burger_Houston_Proposal.pdf",
    status: "sent",
  },
};

export function getProposal(slug) {
  return PROPOSALS[slug] || null;
}

export function getProposalSlugs() {
  return Object.keys(PROPOSALS);
}

export default PROPOSALS;
