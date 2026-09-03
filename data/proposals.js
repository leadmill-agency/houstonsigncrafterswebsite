// Client proposals rendered at /proposals/[slug] — unlisted, noindexed pages.
// Spec: Downloads/Earth_Burger_Proposal_Claude_Code_PRD.md (v2, four acts).
// The slug carries a random suffix so the URL is unguessable; never link these
// from public navigation or the sitemap. Prices are client-facing only: no
// internal costs, formulas, or margin anywhere in this file. Totals are
// asserted at module load so a bad edit fails the build, not the client call.

export const PROPOSALS = {
  "earth-burger-houston-20001-7k4m2": {
    proposalId: "HSC-EB-20001",
    version: "2026-09-02-v3",
    status: "sent",
    client: "Earth Burger",
    preparedFor: "Sinelli Concepts International",
    projectName: "Earth Burger Houston",
    projectAddress: "4640 Scott Street, Houston, TX 77004",
    proposalDate: "September 2, 2026",
    validThrough: "September 17, 2026",
    depositPercent: 50,
    expectedTotal: 51000,
    salesTaxLabel: "before applicable sales tax",
    drawingSetDate: "June 30, 2026",
    heroDescription:
      "Fabrication, permitting coordination, engineering allowance, and installation for the complete Houston signage package.",
    summary:
      "Houston Sign Crafters proposes to coordinate, fabricate, permit, and install the complete signage package for Earth Burger #20001 at 4640 Scott Street in Houston. The scope is based on the ten-sheet signage drawing package dated June 30, 2026 and includes three illuminated exterior identity signs, drive-thru signage, wayfinding, a wall stencil, and three interior sign elements.",
    // Repriced per owner 2026-09-02 (v3): permits at $500 per exterior sign
    // (City of Houston permits each exterior sign separately, 4 signs), one
    // combined installation line covering everything including the canopy,
    // package total set to $51,000.
    groups: [
      { id: "exterior", label: "Exterior identity", expectedSubtotal: 20400 },
      { id: "driveThru", label: "Drive-thru and wayfinding", expectedSubtotal: 14750 },
      { id: "interior", label: "Interior signage", expectedSubtotal: 4275 },
      { id: "delivery", label: "Project delivery and allowances", expectedSubtotal: 11575 },
    ],
    items: [
      { id: "east-logo", group: "exterior", title: "East illuminated logo", description: "Approx. 8'-4 1/4\" W x 6'-2 3/4\" H face- and halo-illuminated logo assembly with painted aluminum backer.", quantity: "1", price: 5400 },
      { id: "south-logo", group: "exterior", title: "South illuminated logo", description: "Approx. 6'-10 3/8\" W x 4'-1\" H face- and halo-illuminated logo assembly with painted aluminum backer and survey-dependent bracket system.", quantity: "1", price: 4850 },
      { id: "north-logo", group: "exterior", title: "North illuminated logo", description: "Approx. 16'-8 1/4\" W x 3'-10\" H face- and halo-illuminated logo assembly with painted aluminum backer and survey-dependent bracket system.", quantity: "1", price: 9400 },
      { id: "stencil", group: "exterior", title: "South wall stencil", description: "Approx. 7'-8 1/4\" W x 6'-10 3/8\" H stencil production and application; final paint by GC.", quantity: "1", price: 750 },
      { id: "canopy", group: "driveThru", title: "Drive-thru canopy structure", description: "Fabricated drive-thru canopy with illuminated Earth Burger logo, Order Here copy, clearance copy, and steel/aluminum support structure.", quantity: "1", price: 11500 },
      { id: "wayfinding", group: "driveThru", title: "Drive-thru wayfinding fixture", description: "Approx. 54\" W x 79\" H painted aluminum wayfinding fixture with 48\" panel, dimensional copy, arrow, and support posts.", quantity: "1", price: 3250 },
      { id: "veggie-letters", group: "interior", title: "Interior Veggie Joint letters", description: "Approx. 6'-5 5/8\" W x 7 1/2\" H white Sintra letters, flush mounted.", quantity: "1 set", price: 1025 },
      { id: "round-sign", group: "interior", title: "Interior round 100% sign", description: "Approx. 39\" diameter painted ACM panel with dimensional Sintra copy and stud-mounted pads.", quantity: "1", price: 1325 },
      { id: "entrance-sign", group: "interior", title: "Entrance mixed-material sign", description: "Approx. 3'-7 1/4\" W x 2'-7 1/2\" H layered Sintra, turf, painted copy, and laminated vinyl sign.", quantity: "1", price: 1925 },
      { id: "install", group: "delivery", title: "Installation (all signage)", description: "Installation of every sign element in this proposal, including the drive-thru canopy structure, by the HSC crew: equipment, mounting, wiring connections at the sign, and site cleanup.", quantity: "1", price: 7975 },
      { id: "permit", group: "delivery", title: "Permit allowance (4 exterior signs)", description: "City of Houston requires a separate sign permit for each exterior sign. Allowance of $500 per sign for the four permitted exterior signs, including preparation, submission, and coordination.", quantity: "4", price: 2000 },
      { id: "engineering", group: "delivery", title: "Engineering allowance", description: "Structural engineering allowance for the proposed scope.", quantity: "1", price: 1600 },
    ],
    pricingNote:
      "Package pricing may require revision if individual components are removed or materially changed.",
    schedule: [
      { title: "Authorize", description: "Execute the agreement and submit the 50% deposit." },
      { title: "Verify", description: "Field survey and final dimensions, approximately 2-3 business days after site access." },
      { title: "Engineer and permit", description: "Prepare required documents and submit after verified drawings. Review timing is controlled by third parties." },
      { title: "Fabricate", description: "Approximately 4-6 weeks after final artwork, engineering, and permit approvals." },
      { title: "Install", description: "Approximately 2-4 working days after fabrication, site readiness, and scheduling confirmation." },
    ],
    scheduleIntro:
      "The sequence is built around Earth Burger's requested 90-day opening window. Agency review, approvals, and site readiness remain schedule dependencies.",
    customerInputs: [
      "Final brand, artwork, landlord, and construction approvals",
      "Property and construction documents requested by permitting authorities",
      "Primary 120V circuits at each sign location",
      "Safe and unobstructed site access",
      "Drive-thru concrete base, anchor bolts, and J-hooks identified in the supplied drawing",
      "Final paint application for the south wall stencil",
    ],
    hscIncludes: [
      "Field verification and project coordination",
      "Listed fabrication and installation scope",
      "Standard permit and engineering coordination",
      "Installation scheduling and closeout",
      "Five-year limited warranty on qualifying HSC-fabricated electrical signage",
    ],
    conditions: [
      "Permit or engineering costs above the stated allowances require written approval.",
      "Final dimensions and attachment methods remain subject to field verification.",
      "Concealed conditions, inadequate structure, unavailable electrical service, underground conflicts, scope changes, remobilization, storage, and after-hours work are excluded unless authorized.",
      "Changes may affect both price and schedule.",
      "The final fabrication and installation agreement controls if it conflicts with the proposal page.",
    ],
    approvalIntro:
      "The package gives Sinelli Concepts one Houston-based partner for field verification, fabrication, installation, and project closeout.",
    // Client's own logo (from earthburger.com, owner-supplied 2026-09-02) —
    // cover identification only, per the PRD's "identify the project" rule.
    clientLogo: { src: "/proposals/eb/earth-burger-logo.png", w: 500, h: 297 },
    assets: {
      exteriorDrawing: { src: "/proposals/eb/east-elevation.png", w: 1755, h: 1496, alt: "East front elevation: face- and halo-illuminated Earth Burger logo, 8'-4 1/4\" wide by 6'-2 3/4\" high, with night view and building elevation from the supplied drawing set" },
      canopyDrawing: { src: "/proposals/eb/canopy.png", w: 1417, h: 1496, alt: "Drive-thru canopy drawing: front and side views with illuminated Earth Burger logo, Order Here copy, and 9'-0\" clearance, from the supplied drawing set" },
      interiorDrawing: { src: "/proposals/eb/interior-entrance.png", w: 1526, h: 1496, alt: "Entrance area interior sign drawing: layered 100% plant-based veggie joint sign, 3'-7 1/4\" wide, from the supplied drawing set" },
    },
    // Real Google review (index into data/testimonials.js) and the human layer.
    // evidencePortfolioIds: real installs (data/portfolio.js) shown at the end
    // of Act 3 as execution proof; the drawings prove package comprehension.
    evidencePortfolioIds: ["copper-espresso-bar", "coronation-theater", "luce-avenue-coffee"],
    testimonialIndex: 2,
    contact: { name: "Rameel Sheikh", title: "Owner" },
    pdfUrl: "/proposals/Houston_Sign_Crafters_Earth_Burger_Houston_Proposal.pdf",
  },
};

// Fail loudly at build time if any proposal's numbers drift (PRD section 18).
for (const [slug, p] of Object.entries(PROPOSALS)) {
  const total = p.items.reduce((s, it) => s + it.price, 0);
  if (total !== p.expectedTotal) {
    throw new Error(`Proposal ${slug}: itemized total ${total} != expected ${p.expectedTotal}`);
  }
  for (const g of p.groups) {
    const sub = p.items.filter((it) => it.group === g.id).reduce((s, it) => s + it.price, 0);
    if (sub !== g.expectedSubtotal) {
      throw new Error(`Proposal ${slug}: group ${g.id} subtotal ${sub} != expected ${g.expectedSubtotal}`);
    }
  }
}

export function getProposal(slug) {
  return PROPOSALS[slug] || null;
}

export function getProposalSlugs() {
  return Object.keys(PROPOSALS);
}

export default PROPOSALS;
