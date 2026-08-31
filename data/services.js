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
      { t: "Send photos and a rough size", b: "Snap your storefront and tell us the name going up. You get a written quote in one business day." },
      { t: "See it before you buy", b: "We mock the sign up on a photo of your actual building and revise until you like it." },
      { t: "We clear the red tape", b: "City permit pulled and landlord sign criteria checked before anything gets built." },
      { t: "Built in our Houston shop", b: "Cut, bent, wired, and bench-tested lit with UL-listed components before it ships." },
      { t: "Installed by our own crew", b: "Mounted, sealed, and checked lit at dusk. Covered by a 5-year warranty." },
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
          "Most lit storefront signs are channel letter sets, which run $1,500 to $10,000 and up installed depending on size, lighting, and mounting. Window graphics and dimensional letters cost less, and large multi-tenant work costs more. You get a firm written quote within one business day, with permit and installation included, and our published ranges for every sign type are on the [Houston sign pricing page](/pricing).",
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
      { t: "Send a photo of your storefront", b: "Snap the front of your space and tell us the name going up. Written quote in one business day." },
      { t: "See it before you buy", b: "A free mockup shows the sign on your actual building, revised until you like it." },
      { t: "We clear the red tape", b: "Landlord sign criteria checked and the city permit pulled before anything gets built." },
      { t: "Built in our Houston shop", b: "UL-listed components, bench-tested lit before it leaves the shop." },
      { t: "Installed by our own crew", b: "Old sign down, new sign mounted, sealed, and checked lit. 5-year warranty." },
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
      { t: "Send a photo of the site", b: "Show us where the sign goes and what should be on it. Written quote in one business day." },
      { t: "Design and site check", b: "We design the monument to your brand and your development's sign criteria, and confirm sightlines and setbacks." },
      { t: "Permits and engineering", b: "We pull the permit and coordinate stamped engineering when wind load or size requires it." },
      { t: "Base and cabinet build", b: "Welded frame, finished cabinet, and masonry or stone base work, matched to your building." },
      { t: "Installation", b: "Footing, crane set, wiring, and cleanup by our own crew. 5-year warranty on the work." },
    ],
    related: ["channel-letters", "wall-graphics", "vehicle-wraps"],
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
      { t: "Send a photo and dimensions", b: "A phone photo of the wall or window plus rough measurements is enough. Quote in one business day." },
      { t: "Mockup on your actual wall", b: "You see the design on a photo of your real space and approve it before we print." },
      { t: "Printed in panels", b: "Sized to your wall so even room-scale murals install as one continuous graphic." },
      { t: "Prepped and installed", b: "Surface cleaned, vinyl applied smooth and bubble-free by our own installers." },
      { t: "Easy to change later", b: "Removable materials come off cleanly when you rebrand or run the next promotion." },
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
      { t: "Share your space and brand files", b: "Photos of the walls, your logo, and what each room needs. Quote in one business day." },
      { t: "Mockup and spec sheet", b: "You see each piece on a photo of your actual space, with materials and finishes called out." },
      { t: "ADA and code check", b: "Room and wayfinding signs get the required raised characters, braille, and contrast." },
      { t: "Fabrication", b: "Acrylic, metal, and vinyl pieces built and color-matched in our Houston shop." },
      { t: "Clean install on your schedule", b: "Mounted level and sequenced around your business hours, from one sign to a full building." },
    ],
    related: ["wall-graphics", "channel-letters", "monument-signs"],
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
    related: ["vehicle-wraps", "wall-graphics", "wedding-signage"],
  },

  "wedding-signage": {
    slug: "wedding-signage",
    name: "Wedding & Event Signage",
    shortName: "Wedding Signage",
    order: 7,
    icon: "pencil",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=75",
    testimonialIndex: 2,
    metaTitle: "Wedding & Event Signage in Houston, TX",
    metaDescription:
      "Custom wedding and event signage in Houston, TX: welcome signs, seating charts, neon-look signs, and backdrops. Fast and stress-free. Free 1-day quote.",
    h1: "Wedding & Event Signage in Houston, TX",
    heroSubtitle:
      "Welcome signs, seating charts, custom neon, and backdrops. Beautiful event signage, even on a tight timeline.",
    answer:
      "Wedding and event signs are the pieces that guide and wow your guests: welcome signs, seating charts, table numbers, directionals, bar menus, custom faux-neon, and big step-and-repeat backdrops for photos. We make them in acrylic, mirror, foam board, vinyl, and LED faux-neon, matched to your colors and theme. Tight timeline? We handle a lot of last-minute event work, so if your date's close, reach out. We can usually still help. Every piece is quoted in one business day.",
    sections: [
      {
        heading: "What wedding signs do you make?",
        body:
          "We create welcome signs, seating charts and escort displays, table numbers, directional and wayfinding signs, bar and menu signs, custom monograms, and large step-and-repeat photo backdrops. Faux-neon LED signs with your names or a phrase are especially popular for receptions and photos.",
      },
      {
        heading: "Can you produce event signage on short notice?",
        body:
          "Often, yes. Event timelines are tight and things change. We're set up to handle rush and last-minute requests. Tell us your event date when you reach out and we'll tell you honestly what we can deliver in time.",
      },
      {
        heading: "What materials and styles are available?",
        body:
          "We print and fabricate on acrylic, mirrored and frosted panels, foam board, wood-look substrates, vinyl, and LED faux-neon. Whether your theme is modern, classic, or rustic, we match fonts, colors, and finishes to your invitation suite and décor.",
      },
      {
        heading: "Do you design the signs to match my theme?",
        body:
          "Yes. Share your colors, fonts, or invitation design and our team creates coordinated signage, sending proofs for approval so everything matches your event's look before we produce it.",
      },
    ],
    faqs: [
      { q: "Do you make custom neon signs for weddings?", a: "Yes. We build LED faux-neon signs with your names, initials, or a custom phrase, in your choice of color. They're safe, lightweight, and reusable." },
      { q: "Can you match my wedding colors and invitations?", a: "Absolutely. We coordinate fonts, colors, and finishes to your invitation suite and décor and proof everything before production." },
      { q: "How early should I order wedding signage?", a: "Earlier is better, but we specialize in tight timelines. Reach out with your date and we'll let you know what's possible." },
      { q: "Do you offer backdrops for photos?", a: "Yes. We produce step-and-repeat backdrops and large statement signs perfect for photos and social sharing." },
      { q: "Can you make signs for corporate events and parties?", a: "Yes. The same welcome signs, backdrops, seating displays, and faux-neon we build for weddings work for corporate events, quinceañeras, birthdays, and grand openings. Tell us the occasion and the date." },
    ],
    process: [
      { t: "Share your date, theme, and pieces", b: "Colors, fonts, or your invitation design, plus the list of signs you need. Quote in one business day." },
      { t: "Proofs matched to your look", b: "Every piece is designed to coordinate with your invitations and decor, and you approve each proof." },
      { t: "Production, rush when needed", b: "Acrylic, mirror, foam board, vinyl, and faux-neon, produced to your timeline." },
      { t: "Ready before your event", b: "Finished pieces done in time for setup day, with your deadline confirmed up front." },
    ],
    related: ["custom-banners", "wall-graphics", "channel-letters"],
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
