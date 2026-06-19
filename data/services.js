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

const SERVICES = {
  "channel-letters": {
    slug: "channel-letters",
    name: "Channel Letter Signs",
    shortName: "Channel Letters",
    formLabel: "Storefront Sign",
    order: 1,
    icon: "bolt",
    img: "https://images.unsplash.com/photo-1545972154-9bb223aac798?w=1200&q=75",
    metaTitle: "Channel Letter Signs in Houston, TX | Custom Storefront Signage",
    metaDescription:
      "Custom illuminated channel letter signs in Houston, TX. Design, fabrication, permitting, and licensed installation. Free quote within one business day.",
    h1: "Channel Letter Signs in Houston, TX",
    heroSubtitle:
      "Custom illuminated storefront lettering — designed, fabricated, permitted, and installed by one Houston team.",
    answer:
      "Channel letters are custom three-dimensional letters, usually lit with energy-efficient LEDs, mounted to your building to spell out your business name. They are the most common storefront sign in Houston because they read clearly day and night and meet most city and landlord sign codes. Houston Sign Crafters handles the whole job in-house: design mockup, UL-listed fabrication, City of Houston permitting, and licensed installation. Most projects are quoted within one business day and installed within a few weeks, backed by a 5-year warranty on materials and workmanship.",
    sections: [
      {
        heading: "What are channel letter signs?",
        body:
          "Channel letters are individually fabricated metal-and-acrylic letters that form your business name or logo on a storefront. Each letter is its own \"channel\" housing LED lighting. Front-lit letters glow through a colored acrylic face; reverse-lit (halo) letters cast a backlit glow onto the wall behind them; and you can combine both for a premium look. They are durable, weather-rated for the Gulf Coast climate, and far more visible than flat or printed signs.",
      },
      {
        heading: "How much do channel letters cost in Houston?",
        body:
          "Pricing depends on letter size, lighting style, mounting method, and whether a raceway or backer is required by your landlord. Small interior-tenant sets start lower, while large illuminated exterior sets for multi-tenant centers cost more. Rather than guess, we give you a firm written quote within one business day of seeing your storefront photos or a site visit — including permit and installation costs, with no surprise fees later.",
      },
      {
        heading: "Do you handle sign permits and city code?",
        body:
          "Yes. Houston Sign Crafters pulls the City of Houston sign permits and confirms your sign meets local code and your landlord's criteria before fabrication. Permitting trips up a lot of business owners — wrong size, wrong illumination, or missing approvals can mean a costly redo. We manage that process so your install passes inspection the first time.",
      },
      {
        heading: "How long does a channel letter project take?",
        body:
          "A typical project runs a few weeks from approved design to installation, depending on permit turnaround and letter size. We start with a free design mockup so you see exactly how the sign looks on your building, then move to fabrication once you approve. If you have a hard deadline — a grand opening or lease requirement — tell us and we'll tell you honestly whether we can hit it.",
      },
    ],
    faqs: [
      { q: "Are channel letters illuminated?", a: "Most are. We build front-lit, reverse-lit (halo), and combination letters using energy-efficient, UL-listed LEDs. Non-illuminated dimensional letters are also available if your location doesn't allow lighting." },
      { q: "Will my channel letters meet my landlord's sign criteria?", a: "Yes — we review your lease sign criteria and the City of Houston code before we build, so the finished sign is approved on both sides and passes inspection." },
      { q: "What warranty do you offer?", a: "Channel letters come with a 5-year warranty on materials and workmanship, including the LED lighting." },
      { q: "Can you match my exact brand colors?", a: "Yes. We color-match acrylic faces and vinyl to your brand standards and show you the match in the design mockup before fabrication." },
    ],
    related: ["monument-signs", "wall-graphics", "custom-banners"],
  },

  "monument-signs": {
    slug: "monument-signs",
    name: "Monument Signs",
    shortName: "Monument Signs",
    order: 2,
    icon: "marker",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=75",
    metaTitle: "Monument Signs in Houston, TX | Custom Ground & Business Signs",
    metaDescription:
      "Custom monument signs in Houston, TX for businesses, offices, and communities. Design, masonry, illumination, permitting, and installation. Free 1-day quote.",
    h1: "Monument Signs in Houston, TX",
    heroSubtitle:
      "Ground-level business signage that anchors your address — built to last and to match your brand.",
    answer:
      "A monument sign is a freestanding, ground-level sign that identifies your business, office park, or community from the street. Unlike tall pole signs, monuments sit low to the ground on a solid base of masonry, stone, aluminum, or acrylic, and can be illuminated for night visibility. They project permanence and are often required by Houston-area developments and HOAs. Houston Sign Crafters designs, builds, permits, and installs monument signs end to end, color-matched to your brand and engineered for the local climate, with a free quote delivered within one business day.",
    sections: [
      {
        heading: "What is a monument sign?",
        body:
          "A monument sign is a low-profile freestanding sign mounted on a base rather than on tall poles. It typically combines a structural base (brick, stone veneer, stucco, or aluminum) with a sign face that carries your name and logo, and often a changeable-copy or digital panel for tenants or messages. Because they sit at eye level near the road, monuments are excellent for driver visibility and curb appeal.",
      },
      {
        heading: "Where are monument signs used in Houston?",
        body:
          "You'll see them at office buildings, medical and dental practices, retail centers, churches, schools, apartment communities, and master-planned neighborhoods across Houston and suburbs like Katy, Sugar Land, and The Woodlands. They're frequently required by deed restrictions and development sign criteria, which we review before designing.",
      },
      {
        heading: "Can monument signs be illuminated?",
        body:
          "Yes. We offer internally illuminated faces, external (ground or gooseneck) lighting, and push-through acrylic lettering for a premium nighttime look. Illumination keeps your address visible after dark — important for restaurants, medical offices, and any business with evening hours.",
      },
      {
        heading: "Do you handle permits and engineering?",
        body:
          "We do. Monument signs often require permits and, depending on size and wind-load requirements, stamped engineering. Houston Sign Crafters manages permitting and coordinates any required engineering so your sign is code-compliant and built to withstand Gulf Coast wind.",
      },
    ],
    faqs: [
      { q: "How long does a monument sign take to build?", a: "Monument signs take longer than wall signs because of the base construction and permitting — typically several weeks. We give you a realistic timeline with your quote." },
      { q: "Can you add changeable or digital message panels?", a: "Yes. We build monuments with manual changeable-copy tracks or programmable LED message centers, depending on your needs and local code." },
      { q: "Will it match my building and brand?", a: "Yes — we match masonry, colors, and finishes to your building and brand, and show it in a design mockup before construction." },
      { q: "Do you replace or reface existing monument signs?", a: "We do. If your base is sound, refacing the sign panel is a cost-effective way to rebrand without rebuilding the whole monument." },
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
    metaTitle: "Vehicle Wraps in Houston, TX | Car, Truck & Fleet Wraps",
    metaDescription:
      "Custom vehicle wraps in Houston, TX for cars, trucks, vans, and fleets. Design, premium vinyl, and professional installation. Free quote within one business day.",
    h1: "Vehicle Wraps in Houston, TX",
    heroSubtitle:
      "Turn your car, truck, or fleet into a moving billboard — designed and installed by Houston pros.",
    answer:
      "A vehicle wrap is a printed adhesive vinyl applied over your car, van, truck, or fleet to display your branding. Wraps are one of the lowest cost-per-impression forms of advertising because a single wrapped vehicle is seen by thousands of Houston drivers every day. They also protect your factory paint and can be removed without damage. Houston Sign Crafters designs your wrap, prints on premium cast vinyl, and installs it cleanly with no bubbles or lifting — full wraps, partial wraps, and simple lettering, quoted within one business day.",
    sections: [
      {
        heading: "What is a vehicle wrap?",
        body:
          "A vehicle wrap is large-format vinyl graphics printed with your design and applied directly to a vehicle's body panels. Options range from full wraps that cover the entire vehicle, to partial wraps that cover key panels, to cut-vinyl lettering and logos for a clean, budget-friendly look. Premium cast vinyl with a protective laminate holds up to Houston sun and washing for years.",
      },
      {
        heading: "How much does a vehicle wrap cost?",
        body:
          "Cost depends on vehicle size, how much of the vehicle is covered, and design complexity. A compact car with a partial wrap costs far less than a full box-truck wrap. Fleets get per-unit pricing. We provide a written quote within one business day once we know your vehicle make/model and the coverage you want.",
      },
      {
        heading: "Will a wrap damage my paint?",
        body:
          "No — when installed and removed correctly on factory paint in good condition, quality wrap vinyl protects the surface underneath and comes off cleanly. It actually shields your original paint from UV and minor abrasion during the years it's on the vehicle.",
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
    ],
    related: ["custom-banners", "channel-letters", "wall-graphics"],
  },

  "wall-graphics": {
    slug: "wall-graphics",
    name: "Wall Graphics & Murals",
    shortName: "Wall Graphics",
    order: 4,
    icon: "pencil",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=75",
    metaTitle: "Wall Graphics & Murals in Houston, TX | Interior & Exterior Signage",
    metaDescription:
      "Custom wall graphics, murals, and window graphics in Houston, TX. Branded interiors, logo walls, and storefront windows. Free quote within one business day.",
    h1: "Wall Graphics & Murals in Houston, TX",
    heroSubtitle:
      "Branded interiors, logo walls, and window graphics that turn blank space into marketing.",
    answer:
      "Wall graphics are large-format printed or cut vinyl applied to interior or exterior walls, windows, and floors to brand a space. They're used for logo walls in lobbies, motivational graphics in offices and gyms, product displays in retail, and storefront window promotions. Wall graphics install quickly, cost far less than painted murals, and can be updated or removed without repainting. Houston Sign Crafters designs and installs interior and exterior wall graphics, murals, and window films across Houston, with a free quote delivered within one business day.",
    sections: [
      {
        heading: "What are wall graphics?",
        body:
          "Wall graphics are adhesive vinyl prints or cut-vinyl designs applied directly to a surface — drywall, brick, glass, or floors. They range from a single cut-vinyl logo behind a reception desk to full-wall printed murals and environmental graphics that wrap an entire room. Specialty films let you frost windows, create privacy, or print on textured surfaces.",
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
      { q: "Do you do frosted or privacy window film?", a: "Yes — we install frosted, etched-look, and printed window films for privacy, branding, and storefront promotions." },
      { q: "How long do interior graphics last?", a: "Interior graphics typically last for years; exterior graphics use weather-rated, laminated materials for outdoor durability." },
      { q: "Can you match my brand colors and fonts?", a: "Yes. We work from your brand guidelines or existing logo files and color-match to your standards." },
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
    metaTitle: "Interior Signs in Houston, TX | Lobby, Office & Acrylic Signs",
    metaDescription:
      "Custom interior signs in Houston, TX — lobby and reception logo signs, office and suite signage, ADA and wayfinding. In-house design and installation. Free 1-day quote.",
    h1: "Interior Signs in Houston, TX",
    heroSubtitle:
      "Lobby logo signs, office and suite signage, ADA and wayfinding — a polished, on-brand interior.",
    answer:
      "Interior signs are the signage inside your space — lobby and reception logo signs, dimensional letters, acrylic and metal wall signs, office and suite plaques, ADA-compliant room signs, wayfinding, and hours decals. They make a space feel finished, reinforce your brand the moment someone walks in, and help visitors navigate. Houston Sign Crafters designs, fabricates, and installs interior signage for offices, medical practices, retail, restaurants, gyms, and more across Houston — color-matched to your brand and installed cleanly, with a free quote within one business day.",
    sections: [
      {
        heading: "What are interior signs?",
        body:
          "Interior signs cover everything inside your building: a reception logo sign behind the front desk, dimensional or acrylic lobby signs, office and suite identification, ADA-compliant braille room signs, directional wayfinding, conference-room and breakroom signs, and storefront hours or open/closed decals. They range from a single statement logo wall to a full set of coordinated signage throughout a space.",
      },
      {
        heading: "Do you make ADA-compliant signs?",
        body:
          "Yes. We produce ADA-compliant room and wayfinding signs with the required raised characters, braille, and contrast — important for permanent rooms and spaces in commercial buildings. We make sure restroom, exit, suite, and room signs meet accessibility requirements while still matching your brand.",
      },
      {
        heading: "What materials do interior signs use?",
        body:
          "Common choices include brushed or painted acrylic, dimensional PVC or metal letters, frosted and printed acrylic panels, and vinyl graphics. We match finishes and colors to your brand and your space — a law office, a medical lobby, and a fitness studio each call for a different look, and we'll recommend what fits.",
      },
      {
        heading: "Can you brand our whole office?",
        body:
          "Absolutely. Many clients start with a reception logo sign and add suite signs, wayfinding, conference-room names, and wall graphics for a cohesive, branded interior. We can design the full package so everything coordinates, and install it on your schedule with minimal disruption.",
      },
    ],
    faqs: [
      { q: "Do you make lobby and reception logo signs?", a: "Yes — dimensional letters, acrylic standoff signs, and backlit logo signs for reception and lobby walls are some of our most popular interior pieces." },
      { q: "Are your room signs ADA-compliant?", a: "Yes. We produce ADA-compliant signage with raised characters, braille, and proper contrast for restrooms, suites, and permanent rooms." },
      { q: "Can interior signs match our brand exactly?", a: "Yes. We color-match to your brand standards and show you a mockup before fabrication." },
      { q: "Do you install, or just fabricate?", a: "Both — we design, fabricate, and install interior signage, and can coordinate a full-office rollout on your schedule." },
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
    metaTitle: "Custom Banners in Houston, TX | Vinyl, Event & Grand Opening Banners",
    metaDescription:
      "Custom vinyl banners in Houston, TX for events, grand openings, and promotions. Durable printing, fast turnaround, rush options. Free quote within one business day.",
    h1: "Custom Banners in Houston, TX",
    heroSubtitle:
      "Durable, vivid banners for grand openings, events, and promotions — with rush options when you're on a deadline.",
    answer:
      "Custom banners are printed vinyl signs used for grand openings, events, sales, construction sites, and seasonal promotions. They're the fastest, most affordable way to get a large branded message up quickly, indoors or outdoors. Houston Sign Crafters prints full-color banners on heavy-duty vinyl or mesh, finishes them with hems and grommets for easy hanging, and offers rush turnaround for tight deadlines. Most banners are quoted within one business day, and we can often produce them fast when you're up against a grand opening or event date.",
    sections: [
      {
        heading: "What kinds of banners do you print?",
        body:
          "We print vinyl banners, mesh banners for windy or fenced areas, retractable banner stands for trade shows and lobbies, pole banners, and step-and-repeat backdrops for events. Sizes range from small indoor signs to large building banners, all in full color.",
      },
      {
        heading: "How fast can I get a banner in Houston?",
        body:
          "Banners are one of our fastest products. When you're up against a grand opening, sale, or event date, tell us your deadline — we offer rush production and will tell you honestly what's achievable. Most standard banners are quoted within one business day.",
      },
      {
        heading: "Are your banners durable outdoors?",
        body:
          "Yes. Outdoor banners are printed on heavy 13oz+ vinyl (or mesh for high-wind locations) with UV-stable inks, then hemmed and grommeted so they hold up to Houston sun, rain, and wind for the life of your promotion.",
      },
      {
        heading: "Can you design the banner for me?",
        body:
          "Yes. Our designers lay out your banner for maximum readability from a distance, using your logo and brand colors, and send a proof for approval before printing. Big, clear, and legible — not cluttered.",
      },
    ],
    faqs: [
      { q: "What's the largest banner you can make?", a: "We produce everything from small indoor banners to large building-side banners, printing in seamed panels for oversized jobs." },
      { q: "Do banners come ready to hang?", a: "Yes — standard banners include reinforced hems and grommets. We can also add pole pockets or wind slits on request." },
      { q: "Can you do trade-show retractable banners?", a: "Yes. We make retractable banner stands and step-and-repeat backdrops that set up in seconds and travel easily." },
      { q: "Do you offer rush printing?", a: "We do. Share your deadline up front and we'll confirm whether rush production can meet it." },
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
    metaTitle: "Wedding & Event Signage in Houston, TX | Custom Event Signs",
    metaDescription:
      "Custom wedding and event signage in Houston, TX — welcome signs, seating charts, neon-look signs, and backdrops. Beautiful, fast, and stress-free. Free 1-day quote.",
    h1: "Wedding & Event Signage in Houston, TX",
    heroSubtitle:
      "Welcome signs, seating charts, custom neon, and backdrops — beautiful event signage, even on a tight timeline.",
    answer:
      "Wedding and event signage covers the custom signs that guide and delight your guests: welcome signs, seating charts, table numbers, directional signs, bar menus, faux-neon signs, and step-and-repeat backdrops. Houston Sign Crafters designs and produces event signage in materials like acrylic, foam board, vinyl, and LED-lit faux neon, matched to your colors and theme. We're known for handling last-minute event needs — so if your date is close, we can often still help. Every piece is quoted within one business day.",
    sections: [
      {
        heading: "What wedding signs do you make?",
        body:
          "We create welcome signs, seating charts and escort displays, table numbers, directional and wayfinding signs, bar and menu signs, custom monograms, and large step-and-repeat photo backdrops. Faux-neon LED signs with your names or a phrase are especially popular for receptions and photos.",
      },
      {
        heading: "Can you produce event signage on short notice?",
        body:
          "Often, yes. Event timelines are tight and things change — we're set up to handle rush and last-minute requests. Tell us your event date when you reach out and we'll tell you honestly what we can deliver in time.",
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
      { q: "Do you make custom neon signs for weddings?", a: "Yes — we build LED faux-neon signs with your names, initials, or a custom phrase, in your choice of color. They're safe, lightweight, and reusable." },
      { q: "Can you match my wedding colors and invitations?", a: "Absolutely. We coordinate fonts, colors, and finishes to your invitation suite and décor and proof everything before production." },
      { q: "How early should I order wedding signage?", a: "Earlier is better, but we specialize in tight timelines — reach out with your date and we'll let you know what's possible." },
      { q: "Do you offer backdrops for photos?", a: "Yes. We produce step-and-repeat backdrops and large statement signs perfect for photos and social sharing." },
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
