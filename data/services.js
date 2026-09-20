// Service catalog — the source of data for /services and /services/[slug].
//
// HOW TO LAUNCH A NEW SERVICE PAGE: add one entry here. The [slug]/page.jsx
// template renders the full SEO page (title/meta/canonical, answer-first block,
// question-based H2 sections, FAQ + FAQPage schema, Service schema, CTAs).
// No new components required.
//
// Each section.heading should be a question (playbook Part 5.4). The answer
// block should be 75–125 words and directly answer the buyer's implied query
// (Part 5.3). FAQ q/a text must match what renders on the page word-for-word
// (the FAQPage schema is generated from these same strings — Part 1.3).
//
// Section bodies support [label](/path) markdown links (internal only), parsed
// by the template. `portfolioIds` reference REAL installs in data/portfolio.js
// (never invent projects). `testimonialIndex` points into data/testimonials.js
// (verbatim Google quotes). `process` renders the per-service timeline that
// replaced the generic WhatYouGet block on service pages. Build-process facts
// come from the fabrication reference doc; don't add claims it can't back.

const SERVICES = {
  "channel-letters": {
    slug: "channel-letters",
    name: "Channel Letter Signs",
    shortName: "Channel Letters",
    formLabel: "Storefront Sign",
    order: 1,
    icon: "bolt",
    img: "/portfolio/copper.jpg",
    portfolioIds: ["copper-espresso-bar", "slick-city-action-park", "luce-avenue-coffee"],
    testimonialIndex: 0,
    metaTitle: "Channel Letter Signs in Houston, TX",
    metaDescription:
      "Custom illuminated channel letter signs in Houston, TX. Design, fabrication, permitting, and licensed installation. Free quote within one business day.",
    h1: "Channel Letter Signs in Houston, TX",
    heroSubtitle:
      "Custom illuminated storefront lettering, designed, fabricated, permitted, and installed by one Houston team.",
    answer:
      "Channel letters are the 3D letters you see across the top of most storefronts, usually lit with LEDs, mounted right to the building, spelling out your name. They're the go-to storefront sign in Houston because they read clean day and night and pass most city and landlord codes. We build the whole thing ourselves: a mockup so you see it first, UL-listed fabrication in our shop, the City permits, and our own crew on install day. Most jobs are quoted in one business day, up in a few weeks, and carry a 5-year warranty.",
    sections: [
      {
        heading: "What are channel letter signs?",
        body:
          "Channel letters are individually fabricated metal-and-acrylic letters that form your business name or logo on a storefront. Each letter is its own \"channel\" housing LED lighting. Front-lit letters glow through a colored acrylic face; reverse-lit (halo) letters cast a backlit glow onto the wall behind them; and you can combine both for a premium look. They are durable, weather-rated for the Gulf Coast climate, and far more visible than flat or printed signs. You can see finished sets we've installed for Copper Espresso Bar, Slick City Action Park, and Luce Avenue Coffee on [our work page](/portfolio).",
      },
      {
        heading: "How do you build channel letters?",
        body:
          "Every set starts as a vector pattern. A CNC router cuts the translucent acrylic faces and the aluminum backs, then a channel bender folds pre-painted aluminum coil into each letter's side walls, called returns. Trim cap seals the face edge, rows of self-adhesive LED modules line the inside of each letter, and everything wires to a low-voltage power supply. We bench-test every letter lit before it leaves the shop. On install day we tape a full-size paper pattern to your fascia, level it, drill on the marks, mount the letters flush or on a painted raceway, and seal every wall penetration with silicone.",
      },
      {
        heading: "How much do channel letters cost in Houston?",
        body:
          "Pricing depends on letter size, lighting style, mounting method, and whether a raceway or backer is required by your landlord. Small interior-tenant sets start lower, while large illuminated exterior sets for multi-tenant centers cost more. Rather than guess, we give you a firm written quote within one business day of seeing your storefront photos or a site visit, including permit and installation costs, with no surprise fees later. Our published ranges for every sign type are on the [Houston sign pricing page](/pricing).",
      },
      {
        heading: "Do you handle sign permits and city code?",
        body:
          "Yes. Houston Sign Crafters pulls the City of Houston sign permits and confirms your sign meets local code and your landlord's criteria before fabrication. Permitting trips up a lot of business owners: wrong size, wrong illumination, or missing approvals can mean a costly redo. We manage that process so your install passes inspection the first time. Every city around Houston handles signs differently, and our [sign permit guide](/sign-permits) breaks down what Houston, Katy, Sugar Land, and the other jurisdictions each require.",
      },
      {
        heading: "How long does a channel letter project take?",
        body:
          "A typical project runs a few weeks from approved design to installation, depending on permit turnaround and letter size. We start with a free design mockup so you see exactly how the sign looks on your building, then move to fabrication once you approve. If you have a hard deadline, like a grand opening or lease requirement, tell us and we'll tell you honestly whether we can hit it.",
      },
    ],
    faqs: [
      { q: "Are channel letters illuminated?", a: "Most are. We build front-lit, reverse-lit (halo), and combination letters using energy-efficient, UL-listed LEDs. Non-illuminated dimensional letters are also available if your location doesn't allow lighting." },
      { q: "Will my channel letters meet my landlord's sign criteria?", a: "Yes. We review your lease sign criteria and the City of Houston code before we build, so the finished sign is approved on both sides and passes inspection." },
      { q: "What warranty do you offer?", a: "Channel letters come with a 5-year warranty on materials and workmanship, including the LED lighting." },
      { q: "Can you match my exact brand colors?", a: "Yes. We color-match acrylic faces and vinyl to your brand standards and show you the match in the design mockup before fabrication." },
      { q: "What is a raceway and will my landlord require one?", a: "A raceway is a slim aluminum box, painted to match your wall, that holds the wiring and power supplies behind the letters. Many Houston landlords require one because it means fewer holes in the building. We check your lease criteria and tell you before we build." },
      { q: "How long does a City of Houston sign permit take?", a: "Most City of Houston sign permits come back in about 4 to 11 days. We prepare the application, submit it, and handle any corrections, so permitting and fabrication overlap instead of stacking up." },
    ],
    process: [
      { t: "Send photos and a rough size", b: "Snap your storefront and tell us the name going up. We review it and call you within one business day to make sure we're a good fit." },
      { t: "We survey your site", b: "Exact measurements, mounting surface, and power check at your storefront." },
      { t: "Free mockup with your estimate", b: "The sign on a photo of your actual building, with an itemized estimate: design, permit, build, and install." },
      { t: "We clear the red tape", b: "City permit pulled and landlord sign criteria checked before anything gets built." },
      { t: "Built here, installed by our crew", b: "Cut, wired, and bench-tested lit in our Houston shop, then mounted, sealed, and checked lit at dusk. 5-year warranty." },
    ],
    related: ["monument-signs", "wall-graphics", "custom-banners"],
  },

  // The umbrella page for the searcher's own word: "storefront sign". Added
  // 2026-08-31 for the Google Ads Store Front campaign (highest spend, had no
  // matching landing page) and the "storefront signage" organic volume.
  // order 1.5 slots it right after channel letters without renumbering.
  "storefront-signs": {
    slug: "storefront-signs",
    name: "Storefront Signs",
    shortName: "Storefront Signs",
    formLabel: "Storefront Sign",
    order: 1.5,
    icon: "bolt",
    img: "/portfolio/peachcobbler.jpg",
    portfolioIds: ["peach-cobbler-factory", "jamaica-pon-di-road", "ss-perfumes"],
    testimonialIndex: 3,
    metaTitle: "Storefront Signs in Houston, TX",
    metaDescription:
      "Custom storefront signs in Houston, TX: lit channel letters, cabinet signs, dimensional letters, and window graphics. Designed, permitted, and installed in-house. Free quote in one business day.",
    h1: "Storefront Signs in Houston, TX",
    heroSubtitle:
      "The sign over your door, done right: designed, built, permitted, and installed by one Houston crew.",
    answer:
      "A storefront sign is the sign that names your business on the front of your building, and it usually means one of four things: lit channel letters, a cabinet (lightbox) sign, non-lit dimensional letters, or window graphics. Most Houston storefronts use lit channel letters because they read day and night and pass most landlord criteria. We handle the whole job in-house: a mockup on a photo of your actual storefront, UL-listed fabrication in our Houston shop, the city permit, and installation by our own crew, backed by a 5-year warranty. Send a photo and you'll have a written quote in one business day.",
    sections: [
      {
        heading: "What counts as a storefront sign?",
        body:
          "Four things, mostly. Channel letters are individually built, usually LED-lit letters mounted to your fascia, the standard for retail and restaurants. Cabinet signs (lightboxes) put your whole logo on one internally lit panel. Dimensional letters are non-lit cut letters for a cleaner, architectural look. Window graphics turn your glass into signage for hours, offers, and branding. Many storefronts combine two or more, like the letters-plus-cabinet builds you can see on [our work page](/portfolio).",
      },
      {
        heading: "Which type is right for my storefront?",
        body:
          "Start with three questions. Does your landlord's sign criteria require a specific type? Strip centers and multi-tenant buildings usually do, and we read your lease criteria before designing. Do you need to be seen at night? If yes, lit channel letters or a cabinet. What does your budget look like? Dimensional letters and window graphics cost less than lit signs. We'll recommend the right build after seeing a photo of your storefront, and the mockup shows it on your actual building before you commit.",
      },
      {
        heading: "How much does a storefront sign cost in Houston?",
        body:
          "Most lit storefront signs are channel letter sets, which run $3,000 to $15,000 and up installed depending on size, lighting, and mounting, with most single storefronts landing between $4,000 and $12,000. Window graphics and dimensional letters cost less, and large multi-tenant work costs more. You get a firm written quote within one business day, with permit and installation included, and our published ranges for every sign type are on the [Houston sign pricing page](/pricing).",
      },
      {
        heading: "Do storefront signs need a permit?",
        body:
          "Exterior storefront signs almost always need a sign permit, and your landlord usually has to approve the design too. We handle both: we check your lease criteria, pull the city permit, and build to code so the install passes inspection the first time. Rules differ by city, and our [sign permit guide](/sign-permits) covers what Houston, Katy, Sugar Land, and the other local jurisdictions require.",
      },
      {
        heading: "How is the sign built and installed?",
        body:
          "Lit letters are cut and bent in our Houston shop, wired with LED modules, and bench-tested before they ship. The full build process is on our [channel letters page](/services/channel-letters). On install day our own crew levels a full-size pattern on your fascia, mounts the sign, seals every penetration, and checks it lit. One crew from mockup to light-up, no subcontractors, and a 5-year warranty on the work.",
      },
    ],
    faqs: [
      { q: "What is the most popular storefront sign type?", a: "Lit channel letters. They read clean day and night, meet most landlord sign criteria, and are the standard for Houston retail, restaurants, and offices." },
      { q: "Can you match my sign to my logo and brand colors?", a: "Yes. We color-match faces, returns, and vinyl to your brand and show you the match in a design mockup on a photo of your actual storefront before fabrication." },
      { q: "My landlord has sign criteria. Can you work with that?", a: "Yes, we do it constantly. Send us the sign criteria page from your lease and we design to it, so approval from your landlord and the city both go smoothly." },
      { q: "How long does a storefront sign take?", a: "Most lit storefront signs take a few weeks from approved design to installation, driven mostly by permit turnaround. Tell us your opening date and we'll tell you honestly whether we can hit it." },
      { q: "Do you remove the old sign?", a: "Yes. We take down the previous tenant's sign, patch and seal the mounting points, and install yours in its place as part of the job." },
      { q: "Is the sign covered by a warranty?", a: "Yes. Materials and workmanship, LED lighting included, are covered for 5 years." },
    ],
    process: [
      { t: "Send a photo of your storefront", b: "Snap the front of your space and tell us the name going up. We review it and call you within one business day." },
      { t: "We survey your site", b: "Exact measurements, mounting surface, and power check at your storefront." },
      { t: "Free mockup with your estimate", b: "The sign on a photo of your actual building, with an itemized estimate: design, permit, build, and install." },
      { t: "We clear the red tape", b: "Landlord sign criteria checked and the city permit pulled before anything gets built." },
      { t: "Built here, installed by our crew", b: "Old sign down, new sign mounted, sealed, and checked lit. 5-year warranty." },
    ],
    related: ["channel-letters", "wall-graphics", "interior-signs"],
  },

  "monument-signs": {
    slug: "monument-signs",
    name: "Monument Signs",
    shortName: "Monument Signs",
    order: 2,
    icon: "marker",
    img: "/portfolio/kirkwood.jpg",
    portfolioIds: ["coopwoods-air-conditioning", "kirkwood-tech-center", "zesty-cleaners"],
    testimonialIndex: 2,
    metaTitle: "Monument Signs in Houston, TX",
    metaDescription:
      "Custom monument signs in Houston, TX for businesses and communities. Design, masonry, illumination, permitting, and installation. Free 1-day quote.",
    h1: "Monument Signs in Houston, TX",
    heroSubtitle:
      "Ground-level business signage that anchors your address, built to last and to match your brand.",
    answer:
      "A monument sign is the low, freestanding sign that sits at your driveway or entrance and names your business, office park, or community from the street. Unlike a tall pole sign, it sits close to the ground on a solid base (masonry, stone, aluminum, or acrylic) and can be lit for night visibility. A lot of Houston developments and HOAs require them. We design, build, permit, and install monuments end to end, color-matched to your brand and engineered for Gulf Coast wind. Send a photo and you'll have a quote in a business day.",
    sections: [
      {
        heading: "What is a monument sign?",
        body:
          "A monument sign is a low-profile freestanding sign mounted on a base rather than on tall poles. It typically combines a structural base (brick, stone veneer, stucco, or aluminum) with a sign face that carries your name and logo, and often a changeable-copy or digital panel for tenants or messages. Because they sit at eye level near the road, monuments are excellent for driver visibility and curb appeal. The [Kirkwood Tech Center monument](/portfolio) is a recent example, a brick base with a stacked tenant directory for an office park.",
      },
      {
        heading: "How do you build monument signs?",
        body:
          "The structure is a welded square-tube frame skinned with an aluminum cabinet. The base gets brick, stone veneer, stucco, or a painted aluminum finish to match your building. Faces are routed aluminum or acrylic, with push-through acrylic letters when you want a premium lit look at night. Lighting and any changeable panels wire back through a serviceable access panel, so a bulb or a tenant name can be swapped without opening the whole sign. When size or wind load calls for it, we coordinate stamped engineering before the footing is poured.",
      },
      {
        heading: "Where are monument signs used in Houston?",
        body:
          "You'll see them at office buildings, medical and dental practices, retail centers, churches, schools, apartment communities, and master-planned neighborhoods across Houston and suburbs like Katy, Sugar Land, and The Woodlands. They're frequently required by deed restrictions and development sign criteria, which we review before designing.",
      },
      {
        heading: "Can monument signs be illuminated?",
        body:
          "Yes. We offer internally illuminated faces, external (ground or gooseneck) lighting, and push-through acrylic lettering for a premium nighttime look. Illumination keeps your address visible after dark, important for restaurants, medical offices, and any business with evening hours.",
      },
      {
        heading: "Do you handle permits and engineering?",
        body:
          "We do. Monument signs often require permits and, depending on size and wind-load requirements, stamped engineering. Houston Sign Crafters manages permitting and coordinates any required engineering so your sign is code-compliant and built to withstand Gulf Coast wind. Requirements differ by city and county, and our [sign permit guide](/sign-permits) explains what each Houston-area jurisdiction asks for.",
      },
    ],
    faqs: [
      { q: "How long does a monument sign take to build?", a: "Monument signs take longer than wall signs because of the base construction and permitting, typically several weeks. We give you a realistic timeline with your quote." },
      { q: "Can you add changeable or digital message panels?", a: "Yes. We build monuments with manual changeable-copy tracks or programmable LED message centers, depending on your needs and local code." },
      { q: "Will it match my building and brand?", a: "Yes. We match masonry, colors, and finishes to your building and brand, and show it in a design mockup before construction." },
      { q: "Do you replace or reface existing monument signs?", a: "We do. If your base is sound, refacing the sign panel is a cost-effective way to rebrand without rebuilding the whole monument." },
      { q: "What is the difference between a monument sign and a pylon sign?", a: "A monument sign sits low on a solid base. A pylon sign lifts the cabinet high on one or two poles so drivers see it from farther away, which suits shopping centers near highways. We design and build both." },
      { q: "How much does a monument sign cost in Houston?", a: "Most monument signs run $6,000 to $50,000 and up installed, depending on size, base material, illumination, and engineering. Our pricing page lists the full ranges, and your written quote itemizes everything." },
    ],
    process: [
      { t: "Send a photo of the site", b: "Show us where the sign goes and what should be on it. We review it and call you within one business day." },
      { t: "Site survey", b: "Sightlines, setbacks, utilities, and exact measurements at your location." },
      { t: "Design mockup with your estimate", b: "The monument designed to your brand and your development's criteria, with an itemized estimate." },
      { t: "Permits and engineering", b: "We pull the permit and coordinate stamped engineering when wind load or size requires it." },
      { t: "Build and installation", b: "Welded frame, finished cabinet, masonry base, footing, crane set, and cleanup by our own crew. 5-year warranty." },
    ],
    related: ["channel-letters", "pole-signs", "storefront-signs"],
  },

  // Added 2026-09-19 per Rameel: pole/pylon signs are a named core product
  // (exterior $4k+ focus) but had no page — "pole signs houston" searches had
  // nowhere to land. order 2.5 slots it right after monuments.
  "pole-signs": {
    slug: "pole-signs",
    name: "Pole & Pylon Signs",
    shortName: "Pole Signs",
    order: 2.5,
    icon: "marker",
    img: "/portfolio/athome.jpg",
    portfolioIds: ["at-home-shopping-center", "kirkwood-tech-center"],
    testimonialIndex: 2,
    metaTitle: "Pole Signs & Pylon Signs in Houston, TX",
    metaDescription:
      "Custom pole and pylon signs in Houston, TX: design, engineering, permitting, fabrication, and crane installation for shopping centers and highway sites.",
    h1: "Pole & Pylon Signs in Houston, TX",
    heroSubtitle:
      "High-visibility freestanding signage for shopping centers, pad sites, and highway frontage — designed, managed, and installed by one Houston team.",
    answer:
      "A pole sign (or pylon sign) lifts your name high above the road on one or two steel supports, so drivers see you from a distance — from the feeder, the intersection, or across a full parking lot. It's the sign that pulls traffic into shopping centers, gas stations, restaurants, and pad sites on busy Houston corridors. We handle the whole project: design mockup, stamped engineering and wind-load calculations when the height requires them, the city or county permit, cabinet fabrication in our shop, and crane installation by our own crew. Send a photo of the site and you'll hear from us within one business day.",
    sections: [
      {
        heading: "What is a pole sign, and how is it different from a monument?",
        body:
          "Both are freestanding signs, but they solve different problems. A [monument sign](/services/monument-signs) sits low on a solid base and works at driveway distance. A pole sign raises the cabinet ten, twenty, or more feet in the air so it reads from much farther away — which is why shopping centers near highways, gas stations, and drive-thru restaurants use them. A pylon sign is the wider version of the same idea: a broad tower, often wrapped in aluminum or masonry-look cladding, that carries a main cabinet plus a stack of tenant panels. The [At Home Shopping Center pylon](/portfolio) is a real example — individual illuminated tenant panels facing a high-traffic road.",
      },
      {
        heading: "What does a multi-tenant pylon do for a shopping center?",
        body:
          "For a retail center, the pylon is shared real estate: every tenant gets a lit panel at the road, and the center itself gets an anchor identity above them. We build tenant panels so they swap individually — when a tenant changes, the new panel slides in without touching the rest of the sign. Property managers appreciate that the wiring runs through serviceable access, so one dark panel doesn't mean opening the whole cabinet. If you manage a center, we can also reface or upgrade an existing pylon rather than replace it; see our [sign repair and refurbishment page](/services/sign-repair).",
      },
      {
        heading: "How do engineering and wind load work for tall signs?",
        body:
          "Height is what separates pole signs from everything else we build. A tall freestanding structure on the Gulf Coast has to be engineered for hurricane-zone wind loads: stamped drawings, a properly sized steel support, and a concrete footing designed for the soil and the sign's height and area. Jurisdictions around Houston commonly require sealed engineering before they'll issue a permit for a tall ground sign — unincorporated Harris County, for example, asks for engineered plans on taller structures. We coordinate the licensed structural engineer, the drawings, and the footing spec as part of the project, not as your homework.",
      },
      {
        heading: "Do pole signs need a permit in Houston?",
        body:
          "Yes — a freestanding sign of any real height needs a permit everywhere in the Houston area, and the issuing office depends on the address: City of Houston Sign Administration inside city limits, the county for unincorporated areas, and different rules again in Katy, Sugar Land, and the other suburbs. Height and size limits also vary by jurisdiction, which affects what we design in the first place. We confirm the correct office and the applicable limits during the site survey, then prepare and submit the permit package. Our [sign permit guide](/sign-permits) breaks down each jurisdiction with links to the official sources.",
      },
      {
        heading: "How much does a pole sign cost?",
        body:
          "Pole signs are engineered structures, so price follows height, cabinet size, the number of tenant panels, illumination, steel and footing requirements, and permitting. Rather than quote a range that won't match your site, we do it the accurate way: a site survey, then a design mockup with an itemized estimate that separates design, engineering, permit, fabrication, and crane installation — so you can see exactly where the money goes before anything is built.",
      },
    ],
    faqs: [
      { q: "How tall can a pole sign be in Houston?", a: "It depends on the jurisdiction and the property. Each city and county around Houston sets its own height and area limits for freestanding signs, and landlord or development criteria can restrict further. We confirm the limits for your exact address during the survey and design to them from the start." },
      { q: "Can you replace the faces or tenant panels on an existing pylon?", a: "Yes. If the structure is sound, refacing cabinets or swapping tenant panels is far more economical than rebuilding. We survey the existing sign, confirm the structure and wiring are serviceable, and quote the reface." },
      { q: "Do pole signs need engineering?", a: "Tall freestanding signs typically require stamped structural engineering for wind load before a permit is issued. We coordinate the licensed engineer and include the engineering in your itemized estimate." },
      { q: "Are your pole sign cabinets illuminated?", a: "Most are. We build internally illuminated cabinets with UL-listed LED lighting, and tenant panels light individually so each business reads clearly at night." },
      { q: "How long does a pole sign project take?", a: "Longer than a wall sign: engineering, permitting, footing work, and crane scheduling all add time, so most projects run several weeks to a few months depending on the jurisdiction. We give you a realistic timeline with your quote and keep you posted at each stage." },
      { q: "What warranty comes with a pole sign?", a: "Our 5-year warranty on materials and workmanship, including the LED lighting in cabinets and panels we build." },
    ],
    process: [
      { t: "Send a photo of the site", b: "Show us the frontage and tell us what should be on the sign. We review it and call you within one business day." },
      { t: "Site survey", b: "Sightlines, setbacks, utilities, soil conditions at the footing location, and the jurisdiction's height and size limits." },
      { t: "Design mockup with your estimate", b: "The sign rendered at your site, with an itemized estimate: design, engineering, permit, fabrication, and crane installation." },
      { t: "Engineering and permits", b: "Stamped wind-load engineering when height requires it, then the permit package to the correct city or county office." },
      { t: "Fabrication and crane set", b: "Cabinets built and bench-tested lit in our Houston shop, steel set in an engineered footing, crane installation and cleanup by our own crew. 5-year warranty." },
    ],
    related: ["monument-signs", "channel-letters", "storefront-signs"],
  },

  // Added 2026-09-19 per Rameel: commercial canopies/awnings are a growth line
  // (Jamal already bids them via PlanHub; valid STATEWIDE per the bid-desk
  // rule). Fabricated IN-HOUSE (Rameel confirmed 2026-09-19, superseding the
  // earlier supplier-fab note) — in-house/built-in-Houston claims are fine here.
  "awnings-canopies": {
    slug: "awnings-canopies",
    name: "Commercial Awnings & Canopies",
    shortName: "Awnings & Canopies",
    order: 2.7,
    icon: "marker",
    img: "/portfolio/athome.jpg",
    testimonialIndex: 4,
    metaTitle: "Commercial Awnings & Canopies in Houston, TX",
    metaDescription:
      "Commercial awnings and canopies for storefronts, walkways, patios, and drive-thrus — designed, engineered, permitted, and installed. Serving all of Texas.",
    h1: "Commercial Awnings & Canopies in Houston, TX",
    heroSubtitle:
      "Storefront awnings, walkway and entry canopies, patio covers, and drive-thru structures — designed, fabricated, and installed by one Houston team, anywhere in Texas.",
    answer:
      "A commercial awning or canopy does two jobs at once: it shades and shelters your customers, and it puts your brand on the front of the building. We handle awning and canopy projects end to end — design, in-house fabrication, engineering coordination, permitting, and installation — for storefronts, restaurant patios, walkways between buildings, school and church entries, and drive-thru lanes. Signage work stays close to Houston, but canopy and awning projects we take on across all of Texas. Send us photos of the building or the plans from your GC, and we'll tell you within one business day whether it's a fit.",
    sections: [
      {
        heading: "What kinds of awnings and canopies do you handle?",
        body:
          "Storefront fabric and metal awnings (with or without branding), entry and walkway canopies for schools, churches, medical buildings, and multifamily properties, restaurant patio covers, porte-cochères, and drive-thru canopies. On new construction and remodels, canopies often arrive as a line item in the architectural drawings — we work from those plans, coordinate the engineering, and fabricate and install the finished structure ourselves. On existing buildings, we start from photos and a site survey and design something that fits the façade and the code.",
      },
      {
        heading: "Can an awning carry my business name?",
        body:
          "Yes — and in many jurisdictions a branded awning counts as signage, which changes the permit path. Graphics on an awning valance or face are often the most economical way to add brand presence to a storefront, and they pair naturally with [channel letters](/services/channel-letters) above. We design the awning and any lettering together so the whole façade reads as one piece, and we permit it correctly as sign, structure, or both.",
      },
      {
        heading: "How do engineering and wind load work for canopies?",
        body:
          "A canopy is a structure before it's anything else. Gulf Coast wind loads mean frames, anchoring, and footings typically need real engineering — and most cities and counties require sealed drawings before they'll issue a structural permit. We coordinate the licensed engineer, prepare the permit package for the correct jurisdiction, and schedule inspections, the same way we run [pole sign](/services/pole-signs) projects. Our [sign permit guide](/sign-permits) covers who reviews what around Houston.",
      },
      {
        heading: "Do you only serve Houston?",
        body:
          "For canopy and awning work, no — we take on projects across all of Texas. General contractors bidding schools, retail centers, and municipal work statewide send us canopy and awning scopes regularly, and we quote them the same way: from the drawings, with engineering and permitting included. Signage-only projects we keep within roughly 150 miles of Houston, where our install crews live.",
      },
      {
        heading: "What does a commercial awning or canopy cost?",
        body:
          "Price follows size, frame material (aluminum vs steel), covering (fabric, metal panel, polycarbonate), engineering requirements, and how the structure attaches to or stands off the building. A small branded storefront awning is a different project than a freestanding drive-thru canopy with footings. Rather than guess, we quote from your plans or a site survey: an itemized estimate that separates design, engineering, permits, materials, and installation, so you can see exactly what drives the number.",
      },
    ],
    faqs: [
      { q: "Do commercial awnings need a permit in Houston?", a: "Usually yes. A structural awning or canopy typically needs a building permit, and if it carries your business name or logo it may need a sign permit as well. The path depends on the jurisdiction — we confirm what applies to your address and handle the submittals." },
      { q: "Do you work outside the Houston area?", a: "For awnings and canopies, yes — we take on projects across all of Texas, including GC-bid work for schools, retail, and municipal facilities. Signage-only projects stay within about 150 miles of Houston." },
      { q: "Fabric or metal — which should I choose?", a: "Fabric awnings cost less, install faster, and take branding well, but coverings need replacement over the years. Metal canopies cost more upfront and last much longer with less upkeep. We'll recommend based on your building, budget, and how long you plan to be in the space." },
      { q: "Can you replace just the fabric on an existing awning frame?", a: "Often, yes. If the frame is sound, recovering it — with or without new graphics — costs far less than a new structure. We inspect the frame first and tell you honestly whether it's worth reusing." },
      { q: "Do you work from architectural drawings for GC bids?", a: "Yes. A large share of our canopy work comes from general contractors' plan sets. Send the drawings and the bid date, and we'll quote the awning and canopy scope with engineering and permitting included." },
      { q: "Are your canopies engineered for hurricane-zone wind?", a: "Yes — frames, anchoring, and footings are engineered to the wind requirements of your site, with sealed drawings when the jurisdiction requires them, which for structural canopies is most of the time." },
    ],
    process: [
      { t: "Send photos or plans", b: "Snap the storefront, or send the architectural drawings if this is a bid. We review and respond within one business day." },
      { t: "Site survey or plan takeoff", b: "Measurements and attachment conditions on site, or a scope takeoff straight from the GC's plan set." },
      { t: "Design and itemized estimate", b: "The awning or canopy rendered on your building, with an estimate that separates design, engineering, permits, materials, and installation." },
      { t: "Engineering and permits", b: "Sealed structural drawings where required, then the permit package to the correct city or county office." },
      { t: "Fabrication and installation", b: "Built in our Houston shop, installed, inspected, and closed out with the permitting authority." },
    ],
    related: ["channel-letters", "pole-signs", "storefront-signs"],
  },

  "vehicle-wraps": {
    slug: "vehicle-wraps",
    name: "Vehicle Wraps",
    shortName: "Vehicle Wraps",
    order: 3,
    icon: "bolt",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=75",
    testimonialIndex: 1,
    metaTitle: "Vehicle Wraps in Houston, TX",
    metaDescription:
      "Custom vehicle wraps in Houston, TX for cars, trucks, vans, and fleets. Design, premium vinyl, professional installation. Free quote in one business day.",
    h1: "Vehicle Wraps in Houston, TX",
    heroSubtitle:
      "Turn your car, truck, or fleet into a moving billboard, designed and installed by Houston pros.",
    answer:
      "A vehicle wrap is printed vinyl laid over your car, van, truck, or whole fleet to turn it into rolling advertising. It's about the cheapest advertising there is per set of eyes: one wrapped van gets seen by thousands of Houston drivers a day. It also protects your factory paint, peeling off clean when you're done. We design it, print on premium cast vinyl, and install it tight with no bubbles or lifting. Full wraps, partial wraps, or simple lettering. Quoted in one business day.",
    sections: [
      {
        heading: "What is a vehicle wrap?",
        body:
          "A vehicle wrap is large-format vinyl graphics printed with your design and applied directly to a vehicle's body panels. Options range from full wraps that cover the entire vehicle, to partial wraps that cover key panels, to cut-vinyl lettering and logos for a clean, budget-friendly look. Premium cast vinyl with a protective laminate holds up to Houston sun and washing for years.",
      },
      {
        heading: "How does the wrap process work?",
        body:
          "We design on a template of your exact make and model, so you approve the real layout instead of a loose sketch. Graphics print on premium cast vinyl and get a protective laminate before they ever touch the vehicle. Install happens panel by panel: surfaces cleaned and prepped, vinyl laid and worked flat, edges sealed. Most single vehicles are done in one to three days, and fleet installs are scheduled in rotation so you never lose every truck at once.",
      },
      {
        heading: "How much does a vehicle wrap cost?",
        body:
          "Cost depends on vehicle size, how much of the vehicle is covered, and design complexity. A compact car with a partial wrap costs far less than a full box-truck wrap. Fleets get per-unit pricing. We provide a written quote within one business day once we know your vehicle make/model and the coverage you want. Our published wrap ranges are on the [Houston sign pricing page](/pricing).",
      },
      {
        heading: "Will a wrap damage my paint?",
        body:
          "No. When installed and removed correctly on factory paint in good condition, quality wrap vinyl protects the surface underneath and comes off cleanly. It actually shields your original paint from UV and minor abrasion during the years it's on the vehicle.",
      },
      {
        heading: "How long do vehicle wraps last?",
        body:
          "A professionally installed wrap with premium cast vinyl and laminate typically lasts five to seven years, depending on sun exposure and care. We use materials rated for the Texas climate and back our installation workmanship.",
      },
    ],
    faqs: [
      { q: "Do you wrap entire fleets?", a: "Yes. We handle single vehicles and multi-vehicle fleets with consistent branding and scheduled installs to minimize downtime." },
      { q: "Can I wrap just part of my vehicle?", a: "Absolutely. Partial wraps and cut-vinyl lettering are popular, lower-cost ways to brand a vehicle while still standing out." },
      { q: "How long does installation take?", a: "Most single-vehicle wraps are installed in one to three days depending on size and coverage. We confirm timing with your quote." },
      { q: "How do I care for my wrap?", a: "Hand washing or brushless washes are best. We provide care instructions so your wrap stays vibrant for its full lifespan." },
      { q: "Do vehicle wraps need a permit?", a: "No. Vehicle wraps aren't regulated like building signs, so there is no sign permit to pull. That makes a wrap one of the fastest ways to get your brand in front of Houston traffic." },
      { q: "How much does a vehicle wrap cost in Houston?", a: "Wraps run about $200 for simple lettering up to $10,000 for a full wrap on a large vehicle. Coverage, vehicle size, and design complexity set the price, and we quote within one business day." },
    ],
    process: [
      { t: "Tell us the vehicle and coverage", b: "Make, model, and whether you want lettering, a partial, or a full wrap. Quote in one business day." },
      { t: "Design proof on your template", b: "You approve the layout on a template of your exact vehicle, not a generic mockup." },
      { t: "Print and laminate", b: "Premium cast vinyl with a protective laminate, rated for Texas sun." },
      { t: "Panel-by-panel install", b: "Cleaned, laid, and sealed in our shop. Most single vehicles take one to three days." },
      { t: "Care instructions included", b: "We hand you simple wash guidance so the wrap stays sharp for its full lifespan." },
    ],
    related: ["custom-banners", "channel-letters", "wall-graphics"],
  },

  "wall-graphics": {
    slug: "wall-graphics",
    name: "Wall Graphics & Murals",
    shortName: "Wall Graphics",
    order: 4,
    icon: "pencil",
    img: "/portfolio/emporium.jpg",
    portfolioIds: ["emporium-games", "vasquitas-ice-cream", "meerut-bbq-house"],
    testimonialIndex: 3,
    metaTitle: "Wall Graphics & Murals in Houston, TX",
    metaDescription:
      "Custom wall graphics, murals, and window graphics in Houston, TX. Branded interiors, logo walls, storefront windows. Free quote in one business day.",
    h1: "Wall Graphics & Murals in Houston, TX",
    heroSubtitle:
      "Branded interiors, logo walls, and window graphics that turn blank space into marketing.",
    answer:
      "Wall graphics are large printed or cut vinyl applied to interior or exterior walls, windows, and floors to brand a space: a logo wall in the lobby, big graphics in a gym or office, product displays in retail, promos on a storefront window. They go up fast, cost a fraction of a painted mural, and peel off without repainting when you want a change. We design and install interior and exterior graphics, murals, and window film across Houston, and get a quote back to you in one business day.",
    sections: [
      {
        heading: "What are wall graphics?",
        body:
          "Wall graphics are adhesive vinyl prints or cut-vinyl designs applied directly to a surface: drywall, brick, glass, or floors. They range from a single cut-vinyl logo behind a reception desk to full-wall printed murals and environmental graphics that wrap an entire room. Specialty films let you frost windows, create privacy, or print on textured surfaces. The full-storefront window graphics we printed for [Emporium Games and Vasquitas Ice Cream](/portfolio) show what a finished install looks like.",
      },
      {
        heading: "Where do businesses use wall and window graphics?",
        body:
          "Common uses include reception logo walls, conference-room and breakroom branding, retail and restaurant feature walls, gym and studio motivational graphics, wayfinding, and storefront window promotions or frosted privacy film. They're a fast, affordable way to make a space feel finished and on-brand.",
      },
      {
        heading: "Can wall graphics be removed without damage?",
        body:
          "Most interior wall graphics use removable vinyl that comes off cleanly without damaging paint when removed properly. This makes them ideal for leased spaces, seasonal promotions, and anything you'll update over time. For permanent installs we use longer-life materials.",
      },
      {
        heading: "Do you design the artwork?",
        body:
          "Yes. Our in-house design team creates the artwork or adapts your existing brand assets, then shows you a mockup on a photo of your actual wall or window before we print. You approve the look before anything is produced.",
      },
    ],
    faqs: [
      { q: "Can you print large murals in one piece?", a: "We print in panels sized to your wall and install them seamlessly, so even room-sized murals look like a single continuous graphic." },
      { q: "Do you do frosted or privacy window film?", a: "Yes. We install frosted, etched-look, and printed window films for privacy, branding, and storefront promotions." },
      { q: "How long do interior graphics last?", a: "Interior graphics typically last for years; exterior graphics use weather-rated, laminated materials for outdoor durability." },
      { q: "Can you match my brand colors and fonts?", a: "Yes. We work from your brand guidelines or existing logo files and color-match to your standards." },
      { q: "Do window graphics need a sign permit in Houston?", a: "Sometimes. Some jurisdictions count window coverage toward your total allowed sign area, and landlords often have their own rules. We check your local code and lease criteria before we print, so nothing has to come down later." },
      { q: "How much do wall graphics cost?", a: "Most wall graphic and mural projects run $1,000 to $15,000 depending on wall size, material, and surface. Small cut-vinyl logos cost less. Send your wall dimensions and we quote within one business day." },
    ],
    process: [
      { t: "Send a photo and rough dimensions", b: "A phone photo of the wall or window is enough. We review it and call you within one business day." },
      { t: "Measure and check the surface", b: "Exact measurements and a surface check, on site when the project calls for it." },
      { t: "Mockup on your actual wall, with the estimate", b: "You see the design on a photo of your real space and approve it before we print." },
      { t: "Printed in panels", b: "Sized to your wall so even room-scale murals install as one continuous graphic." },
      { t: "Prepped and installed", b: "Surface cleaned, vinyl applied smooth and bubble-free by our own installers." },
    ],
    related: ["channel-letters", "custom-banners", "monument-signs"],
  },

  "interior-signs": {
    slug: "interior-signs",
    name: "Interior Signs",
    shortName: "Interior Signs",
    order: 5,
    icon: "pencil",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=75",
    testimonialIndex: 4,
    metaTitle: "Interior Signs in Houston, TX",
    metaDescription:
      "Custom interior signs in Houston, TX: lobby logo signs, office signage, ADA and wayfinding. In-house design and installation. Free 1-day quote.",
    h1: "Interior Signs in Houston, TX",
    heroSubtitle:
      "Lobby logo signs, office and suite signage, ADA and wayfinding. A polished, on-brand interior.",
    answer:
      "Interior signs are everything inside your space: the reception logo wall, dimensional letters, acrylic and metal wall signs, suite and office plaques, ADA room signs, wayfinding, hours on the door. They make a space feel finished and tell people they're in the right place. We design, build, and install the whole interior package for offices, medical and dental practices, retail, restaurants, and gyms, color-matched to your brand and mounted clean. Quote's back in a business day.",
    sections: [
      {
        heading: "What are interior signs?",
        body:
          "Interior signs cover everything inside your building: a reception logo sign behind the front desk, dimensional or acrylic lobby signs, office and suite identification, ADA-compliant braille room signs, directional wayfinding, conference-room and breakroom signs, and storefront hours or open/closed decals. They range from a single statement logo wall to a full set of coordinated signage throughout a space.",
      },
      {
        heading: "Do you make ADA-compliant signs?",
        body:
          "Yes. We produce ADA-compliant room and wayfinding signs with the required raised characters, braille, and contrast, important for permanent rooms and spaces in commercial buildings. We make sure restroom, exit, suite, and room signs meet accessibility requirements while still matching your brand.",
      },
      {
        heading: "What materials do interior signs use?",
        body:
          "Common choices include brushed or painted acrylic, dimensional PVC or metal letters, frosted and printed acrylic panels, and vinyl graphics. We match finishes and colors to your brand and your space. A law office, a medical lobby, and a fitness studio each call for a different look, and we'll recommend what fits. Typical interior packages run $200 to $10,000 and up, with full ranges on our [pricing page](/pricing).",
      },
      {
        heading: "Can you brand our whole office?",
        body:
          "Absolutely. Many clients start with a reception logo sign and add suite signs, wayfinding, conference-room names, and wall graphics for a cohesive, branded interior. We can design the full package so everything coordinates, and install it on your schedule with minimal disruption.",
      },
    ],
    faqs: [
      { q: "Do you make lobby and reception logo signs?", a: "Yes. Dimensional letters, acrylic standoff signs, and backlit logo signs for reception and lobby walls are some of our most popular interior pieces." },
      { q: "Are your room signs ADA-compliant?", a: "Yes. We produce ADA-compliant signage with raised characters, braille, and proper contrast for restrooms, suites, and permanent rooms." },
      { q: "Can interior signs match our brand exactly?", a: "Yes. We color-match to your brand standards and show you a mockup before fabrication." },
      { q: "Do you install, or just fabricate?", a: "Both. We design, fabricate, and install interior signage, and can coordinate a full-office rollout on your schedule." },
      { q: "Do interior signs need a City permit?", a: "Usually not. Interior signage generally doesn't require a City of Houston sign permit. ADA rules still apply to room and wayfinding signs, and we build those to code." },
      { q: "Can you install without disrupting our office?", a: "Yes. We schedule interior installs around your business hours and keep the work clean and contained, so your team barely notices until the signs are up." },
    ],
    process: [
      { t: "Share your space and brand files", b: "Photos of the walls, your logo, and what each room needs. We review it and call you within one business day." },
      { t: "Walkthrough and measurements", b: "We survey the space and measure each location, room by room where needed." },
      { t: "Mockup and spec sheet with your estimate", b: "Each piece on a photo of your actual space, with materials, finishes, and an itemized estimate." },
      { t: "ADA check and fabrication", b: "Room and wayfinding signs get the required raised characters, braille, and contrast, then everything is built and color-matched in our Houston shop." },
      { t: "Clean install on your schedule", b: "Mounted level and sequenced around your business hours, from one sign to a full building." },
    ],
    related: ["wall-graphics", "channel-letters", "monument-signs"],
  },

  // Added 2026-09-19 per Rameel: repairs, refurbs, and improvements are a
  // named content priority — dark letters, storm damage, refacing, and LED
  // retrofits bring exterior-sign owners in the door.
  "sign-repair": {
    slug: "sign-repair",
    name: "Sign Repair & Refurbishment",
    shortName: "Sign Repair",
    order: 5.5,
    icon: "bolt",
    img: "/portfolio/clearlake.jpg",
    testimonialIndex: 0,
    metaTitle: "Sign Repair & Refurbishment in Houston, TX",
    metaDescription:
      "Sign repair in Houston, TX: dark channel letters, storm damage, cracked faces, LED retrofits, and full refurbishment — even for signs we didn't build.",
    h1: "Sign Repair & Refurbishment in Houston, TX",
    heroSubtitle:
      "Dark letters, cracked faces, storm damage, tired cabinets — we diagnose, repair, and refurbish commercial signs across Houston, including signs we didn't build.",
    answer:
      "A dark or damaged sign costs you customers every night it stays broken — and it tells everyone driving past that the business behind it isn't paying attention. We repair and refurbish commercial signs across the Houston area: channel letters with dead sections, cabinets with failed lighting, cracked or faded faces, storm and wind damage, and rusted or peeling structures that need a refresh instead of a replacement. You don't need to know what's wrong — we diagnose on site, then give you an itemized quote that says exactly what failed and what fixing it costs. And yes, we work on signs other companies built.",
    sections: [
      {
        heading: "What sign problems do you repair?",
        body:
          "The most common calls: letters or whole sections gone dark, flickering or dim lighting, cracked or fallen acrylic faces, water intrusion after a storm, cabinets damaged by wind or vehicles, and electrical faults that trip breakers. On older signs the usual culprit is the lighting system itself — failing transformers, ballasts, or aging neon. We open the sign, find the actual fault rather than guessing, and repair it with the same UL-listed components we use in our new builds.",
      },
      {
        heading: "Is an LED retrofit worth it for an older sign?",
        body:
          "Often, yes. If your channel letters or cabinet still run on fluorescent lamps, neon, or old transformers, a retrofit replaces the internals with modern LED modules and low-voltage power supplies while keeping the sign you already own. The result is brighter, more even lighting, lower power usage, and far fewer service calls — dead transformers are one of the most common reasons Houston signs go dark. We'll tell you honestly whether your sign is a good retrofit candidate or whether the money is better spent elsewhere.",
      },
      {
        heading: "Can you reface a sign instead of replacing it?",
        body:
          "If the structure is sound, refacing is the economical way to rebrand or refresh: new faces in a cabinet, new panels on a [monument](/services/monument-signs) or [pylon](/services/pole-signs), or repainted returns and trim on channel letters. Rebranding after a purchase or franchise change usually doesn't require rebuilding the sign — and swapping the copy on an already-permitted sign generally doesn't trigger a new sign permit, though electrical or structural changes do. We check the permit question for your specific case before work starts.",
      },
      {
        heading: "What does refurbishment include?",
        body:
          "A refurbishment brings a structurally sound sign back to presentable: rust treated and repainted, faded faces replaced, lighting upgraded, sealed against water, and hardware replaced where corrosion has taken hold. For property managers, refurbishing a center's monument or pylon is dramatically cheaper than replacement and avoids the full permitting cycle a new structure requires. We survey the sign, photograph what we find, and quote repair and replacement side by side so you can compare honestly.",
      },
      {
        heading: "Do you repair signs you didn't build?",
        body:
          "Yes — a large share of our repair work is on signs installed by other companies. We diagnose on site, tell you what failed and why, and give you an itemized quote before any work happens. If the sign is beyond sensible repair, we'll say so plainly and show you what a replacement would look like with a [free design mockup](/free-mockup).",
      },
    ],
    faqs: [
      { q: "My sign is partially dark. What's usually wrong?", a: "On LED signs, a failed power supply or a bad module section. On older signs, dead transformers, ballasts, or aging neon. We open the sign and test rather than guess, then quote the actual fix." },
      { q: "Do you repair signs that another company built?", a: "Yes. Most repair calls we take are for signs we didn't build. We diagnose on site and give you an itemized quote before any work starts." },
      { q: "Does a sign repair need a permit?", a: "Routine repairs and like-for-like face changes on an already-permitted sign generally don't require a new permit. Converting to electronic messaging, or structural and electrical changes, do. We confirm what applies to your sign before work begins." },
      { q: "Can you fix storm or wind damage?", a: "Yes. We repair wind-damaged cabinets, replace broken faces, and reseal against water intrusion. If the damage is structural, we assess whether the sign can be repaired safely or needs engineering review." },
      { q: "Should I repair my sign or replace it?", a: "If the structure and cabinet are sound, repair or refurbishment is usually the better value. If the sign is failing structurally or no longer fits your brand, replacement can be smarter. We quote it straight and show you both options when it's a close call." },
      { q: "Do you use the same parts as your new signs?", a: "Yes. Repairs and retrofits use the same UL-listed LED modules, power supplies, and materials we build new signs with in our Houston shop." },
    ],
    process: [
      { t: "Tell us what's wrong", b: "Send a photo of the sign and describe what you're seeing — dark sections, damage, fading. We review it and call you within one business day." },
      { t: "On-site diagnosis", b: "We inspect the sign, test the lighting and electrical, and photograph what we find." },
      { t: "Itemized repair quote", b: "Exactly what failed, what fixing it costs, and — when it's a close call — what replacement would cost, side by side." },
      { t: "Repair or refurbish", b: "Repairs use the same UL-listed components as our new builds. Permits pulled if the scope requires them." },
      { t: "Back on and checked at night", b: "We verify the sign lit after dark, sealed and finished, before we call it done." },
    ],
    related: ["channel-letters", "monument-signs", "pole-signs"],
  },

  "custom-banners": {
    slug: "custom-banners",
    name: "Custom Banners",
    shortName: "Banners",
    order: 6,
    icon: "bolt",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=75",
    testimonialIndex: 5,
    metaTitle: "Custom Banners in Houston, TX",
    metaDescription:
      "Custom vinyl banners in Houston, TX for events, grand openings, and promotions. Durable printing, fast turnaround, rush options. Free 1-day quote.",
    h1: "Custom Banners in Houston, TX",
    heroSubtitle:
      "Durable, vivid banners for grand openings, events, and promotions, with rush options when you're on a deadline.",
    answer:
      "Banners are the fastest, cheapest way to get a big message up: grand openings, events, sales, construction sites, seasonal promos, indoors or out. We print full-color on heavy 13oz+ vinyl (or mesh for windy spots), then hem and grommet them so they're ready to hang. On a deadline? Tell us the date. Banners are one of our quickest jobs and we run rush when we can. Most are quoted the same or next business day.",
    sections: [
      {
        heading: "What kinds of banners do you print?",
        body:
          "We print vinyl banners, mesh banners for windy or fenced areas, retractable banner stands for trade shows and lobbies, pole banners, and step-and-repeat backdrops for events. Sizes range from small indoor signs to large building banners, all in full color.",
      },
      {
        heading: "How fast can I get a banner in Houston?",
        body:
          "Banners are one of our fastest products. When you're up against a grand opening, sale, or event date, tell us your deadline. We offer rush production and will tell you honestly what's achievable. Most standard banners are quoted within one business day, and published ranges are on our [pricing page](/pricing).",
      },
      {
        heading: "Are your banners durable outdoors?",
        body:
          "Yes. Outdoor banners are printed on heavy 13oz+ vinyl (or mesh for high-wind locations) with UV-stable inks, then hemmed and grommeted so they hold up to Houston sun, rain, and wind for the life of your promotion.",
      },
      {
        heading: "Can you design the banner for me?",
        body:
          "Yes. Our designers lay out your banner for maximum readability from a distance, using your logo and brand colors, and send a proof for approval before printing. Big, clear, and legible, not cluttered.",
      },
    ],
    faqs: [
      { q: "What's the largest banner you can make?", a: "We produce everything from small indoor banners to large building-side banners, printing in seamed panels for oversized jobs." },
      { q: "Do banners come ready to hang?", a: "Yes. Standard banners include reinforced hems and grommets. We can also add pole pockets or wind slits on request." },
      { q: "Can you do trade-show retractable banners?", a: "Yes. We make retractable banner stands and step-and-repeat backdrops that set up in seconds and travel easily." },
      { q: "Do you offer rush printing?", a: "We do. Share your deadline up front and we'll confirm whether rush production can meet it." },
      { q: "How much does a custom banner cost?", a: "Banners run about $30 to $1,000 depending on size and material. Hems and grommets are included, not extras, and most banners are quoted the same or next business day." },
      { q: "What artwork do I need to send?", a: "A logo file and your wording are enough. Our designers lay the banner out for distance readability and send a proof before anything prints. No print-ready file required." },
    ],
    process: [
      { t: "Tell us size, wording, and deadline", b: "That's all we need. Most banners are quoted the same or next business day." },
      { t: "Proof for approval", b: "Our designers lay it out big and legible, and you sign off before it prints." },
      { t: "Print, hem, grommet", b: "Heavy 13oz+ vinyl or mesh with UV-stable inks, finished and reinforced." },
      { t: "Ready to hang", b: "Grommets in place, pole pockets or wind slits added on request." },
    ],
    related: ["vehicle-wraps", "wall-graphics", "storefront-signs"],
  },
};

export function getAllServices() {
  return Object.values(SERVICES).sort((a, b) => a.order - b.order);
}

export function getService(slug) {
  return SERVICES[slug] || null;
}

export function getServiceSlugs() {
  return Object.keys(SERVICES);
}

export default SERVICES;
