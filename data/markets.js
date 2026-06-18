// Location/market catalog — source of data for /locations and /locations/[slug].
//
// HOW TO LAUNCH A NEW LOCATION PAGE: add one entry here. The [slug] template
// renders a full local SEO page (LocalBusiness schema with this city first in
// areaServed, local intro, services, nearby areas, CTAs).
//
// CRITICAL (playbook Field Note #9): every city needs 300+ UNIQUE words —
// real landmarks, neighborhoods, and local context. Do NOT find-and-replace the
// city name into a shared template; Google treats that as duplicate content.
// Write `intro` and `localContext` fresh for each city.

const MARKETS = {
  "katy-tx": {
    slug: "katy-tx",
    city: "Katy",
    region: "TX",
    cityState: "Katy, TX",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=75",
    metaTitle: "Sign Company in Katy, TX | Custom Business Signs & Installation",
    metaDescription:
      "Custom signs in Katy, TX — channel letters, monument signs, vehicle wraps, and banners. Local design, permitting, and installation. Free quote within one business day.",
    h1: "Sign Company in Katy, TX",
    intro:
      "Houston Sign Crafters builds custom signage for businesses across Katy, from the retail centers along the Grand Parkway and I-10 Energy Corridor to the offices and storefronts in Cinco Ranch, Cross Creek Ranch, and Old Katy. Katy's fast-growing master-planned communities and strict development sign criteria mean storefront and monument signs have to be done right the first time — correctly sized, properly permitted, and matched to each center's standards.",
    localContext:
      "We've worked with retail, medical, restaurant, and office tenants throughout the 77449, 77450, and 77494 ZIP codes. Because much of Katy sits within deed-restricted developments and HOA-governed centers, we review your lease sign criteria and the applicable city or MUD requirements before we fabricate anything. For businesses near LaCenterra at Cinco Ranch or the Katy Mills corridor, visibility from high-traffic roads is everything — we design channel letters and monument signs that read clearly at highway speeds while staying inside the rules. Need a banner for a grand opening in a new Katy strip center, or a full fleet wrap for a service business running routes across west Houston? We handle design, production, permitting, and licensed installation in-house, so you deal with one team from quote to finished sign.",
    nearby: ["Cinco Ranch", "Cross Creek Ranch", "Fulshear", "Brookshire", "Energy Corridor"],
  },

  "sugar-land-tx": {
    slug: "sugar-land-tx",
    city: "Sugar Land",
    region: "TX",
    cityState: "Sugar Land, TX",
    img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&q=75",
    metaTitle: "Sign Company in Sugar Land, TX | Custom Business Signs & Installation",
    metaDescription:
      "Custom signs in Sugar Land, TX — channel letters, monument signs, wraps, and banners. Local design, permitting, and installation. Free quote within one business day.",
    h1: "Sign Company in Sugar Land, TX",
    intro:
      "Houston Sign Crafters serves businesses throughout Sugar Land, including the corporate offices and medical buildings around Highway 6 and US-59, the retail at Sugar Land Town Square and First Colony, and the professional practices in Telfair and Riverstone. Sugar Land's polished, master-planned character sets a high bar for signage — clean monument signs, well-built illuminated letters, and on-brand interiors are the norm here, and city sign standards are enforced.",
    localContext:
      "From First Colony and Greatwood to New Territory and Telfair, we help Sugar Land businesses in the 77478, 77479, and 77498 areas present a professional storefront. Medical and dental practices along the Highway 6 corridor frequently come to us for illuminated monument signs and suite signage that match upscale developments; restaurants and retailers at Town Square want channel letters and window graphics that fit the district's aesthetic. Because Sugar Land actively reviews sign permits and many properties carry strict tenant criteria, we confirm code and landlord approval before fabrication to avoid costly redos. Whether you're rebranding a long-standing First Colony office, opening a new location in Riverstone, or wrapping a fleet of service vehicles, we manage the entire project — design mockup, fabrication, permitting, and licensed installation — with a 5-year warranty and a quote in your inbox within one business day.",
    nearby: ["First Colony", "Telfair", "Riverstone", "Missouri City", "Stafford"],
  },

  "the-woodlands-tx": {
    slug: "the-woodlands-tx",
    city: "The Woodlands",
    region: "TX",
    cityState: "The Woodlands, TX",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=75",
    metaTitle: "Sign Company in The Woodlands, TX | Custom Business Signs",
    metaDescription:
      "Custom signs in The Woodlands, TX — channel letters, monument signs, wraps, and banners. Design, permitting, and installation. Free quote within one business day.",
    h1: "Sign Company in The Woodlands, TX",
    intro:
      "Houston Sign Crafters provides custom signage for businesses across The Woodlands, from the corporate campuses and retail at Hughes Landing and Market Street to the offices and shops along Research Forest Drive and Lake Woodlands. The Woodlands is known for tightly controlled, nature-forward design standards — The Woodlands Township and the Development Standards Committee enforce strict sign covenants — so signage here must be tasteful, correctly scaled, and pre-approved.",
    localContext:
      "We design and install signs throughout the 77380, 77381, 77382, and 77384 areas, working within the Development Standards Committee's covenants that govern size, lighting, and placement. Businesses near Market Street and Hughes Landing typically want refined channel letters, halo-lit lettering, and elegant monument signs that complement the area's upscale, wooded character; medical and professional offices along Research Forest and Grogan's Mill need clean suite and directory signage. Because approval through the township's standards process is required before most signs go up, we prepare submittals and confirm compliance up front, then handle fabrication and licensed installation. From a single illuminated storefront sign to a fleet wrap for a Montgomery County service company or event signage for a corporate function, you get one in-house team managing the whole job — with a free, detailed quote within one business day.",
    nearby: ["Hughes Landing", "Market Street", "Spring", "Conroe", "Shenandoah"],
  },

  "pasadena-tx": {
    slug: "pasadena-tx",
    city: "Pasadena",
    region: "TX",
    cityState: "Pasadena, TX",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=75",
    metaTitle: "Sign Company in Pasadena, TX | Custom Business Signs & Installation",
    metaDescription:
      "Custom signs in Pasadena, TX — channel letters, monument signs, vehicle wraps, and banners. Local design, permitting, and installation. Free quote within one business day.",
    h1: "Sign Company in Pasadena, TX",
    intro:
      "Houston Sign Crafters builds custom signage for businesses across Pasadena, from the retailers and restaurants along Spencer Highway and Fairmont Parkway to the industrial and service companies near the Bayport and ship-channel corridors. Pasadena is a working city — petrochemical, manufacturing, automotive, and trade businesses sit alongside busy storefronts — and signage here has to be tough, highly visible, and built to handle heavy traffic and a demanding Gulf Coast environment.",
    localContext:
      "We serve businesses throughout the 77502, 77503, 77504, 77505, and 77506 ZIP codes, from Strawberry Road and Red Bluff to the shops near San Jacinto College and Pasadena Town Square. Industrial and contractor clients near the ship channel come to us for durable building signs, safety and facility signage, and fleet wraps that brand trucks running routes across the east side. Retailers, taquerias, auto shops, and medical offices along Spencer Highway and Fairmont Parkway need channel letters and monument signs that read clearly at speed on Pasadena's wide, busy roads. Because many signs here face permitting and high wind-load exposure, we confirm City of Pasadena code and engineering before fabrication, then handle production and licensed installation in-house — one team, a 5-year warranty, and a free quote in your inbox within one business day. Pasadena's older strip centers and standalone buildings are also prime candidates for sign refacing and repair — if your cabinet or monument structure is still sound, replacing just the face is a cost-effective way to rebrand. Many of our Pasadena clients serve a strong Spanish-speaking community, so bilingual lettering and clear, high-contrast designs that read well from Spencer Highway, Shaw Avenue, and Red Bluff are a regular request. From a taqueria storefront to an industrial facility near the ship channel, we size and build signage to get noticed on Pasadena's fast, wide commercial roads.",
    nearby: ["Deer Park", "South Houston", "La Porte", "Pearland", "Galena Park"],
  },

  "spring-tx": {
    slug: "spring-tx",
    city: "Spring",
    region: "TX",
    cityState: "Spring, TX",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=75",
    metaTitle: "Sign Company in Spring, TX | Custom Business Signs & Installation",
    metaDescription:
      "Custom signs in Spring, TX — channel letters, monument signs, vehicle wraps, and banners. Local design, permitting, and installation. Free quote within one business day.",
    h1: "Sign Company in Spring, TX",
    intro:
      "Houston Sign Crafters provides custom signage for businesses across Spring, from the historic shops of Old Town Spring to the corporate campuses and retail around Springwoods Village, CityPlace, and the ExxonMobil campus along I-45 and the Grand Parkway. Spring blends small-business charm with fast-growing corporate development, so signage ranges from characterful storefront signs in Old Town to polished channel letters and monument signs for new Class-A office and retail space.",
    localContext:
      "We work throughout the 77373, 77379, 77386, and 77388 areas, from Cypresswood and Klein to Augusta Pines and Gleannloch Farms. Small businesses in Old Town Spring often want eye-catching, on-brand storefront and window signage that fits the district's character, while medical, professional, and retail tenants near Springwoods Village and the Hardy Toll Road want clean illuminated letters and monument signs that match newer master-planned developments. Many Spring locations sit in deed-restricted developments with their own sign criteria, which we review alongside city and county code before fabrication. From a single illuminated storefront sign to a fleet wrap for a north-Houston service company, we handle design, permitting, fabrication, and licensed installation in-house, backed by a 5-year warranty and a free quote within one business day. Old Town Spring's calendar of festivals and markets also makes it a strong fit for event and seasonal signage — custom banners, A-frames, and event signs that help shops stand out on busy weekends. Along the I-45 frontage and FM 2920, where traffic moves fast, we design monument and channel-letter signs sized for highway readability, and we reface tired panels on aging strip centers so established Spring businesses can refresh their look without rebuilding. Whatever corner of Spring you're in, you get one team and one point of contact from first sketch to final install.",
    nearby: ["Klein", "The Woodlands", "Old Town Spring", "Tomball", "Humble"],
  },

  "cypress-tx": {
    slug: "cypress-tx",
    city: "Cypress",
    region: "TX",
    cityState: "Cypress, TX",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=75",
    metaTitle: "Sign Company in Cypress, TX | Custom Business Signs & Installation",
    metaDescription:
      "Custom signs in Cypress, TX — channel letters, monument signs, vehicle wraps, and banners. Local design, permitting, and installation. Free quote within one business day.",
    h1: "Sign Company in Cypress, TX",
    intro:
      "Houston Sign Crafters serves businesses across Cypress, from the fast-growing retail and medical centers along US-290 and the Grand Parkway to the storefronts and offices in Bridgeland, Towne Lake, and Fairfield. Cypress is one of Houston's fastest-expanding areas, with new commercial centers opening constantly — and the master-planned communities here hold signage to a high, consistent standard that we design to match.",
    localContext:
      "We design and install signs throughout the 77429 and 77433 ZIP codes, from Fry Road and Barker Cypress to Cypress Rosehill and the Houston Premium Outlets corridor. New retail, restaurant, fitness, and medical tenants opening along 290 and the Grand Parkway need channel letters and monument signs that stand out at highway speed while meeting their center's sign criteria; established businesses in Bridgeland and Towne Lake often want refined, on-brand storefront and monument signage that fits the community's polished look. Because so much of Cypress is governed by development standards and MUD requirements, we confirm sign criteria and code up front, then fabricate and install in-house. Whether you're opening a new Cypress storefront, rebranding, or wrapping a fleet for a Cy-Fair service business, you get one team from quote to installation — a 5-year warranty and a free quote within one business day. Cypress's relentless new construction also keeps demand high for builder, realtor, and contractor signage — site and yard signs, vehicle and trailer wraps, and grand-opening banners for the steady stream of new businesses opening along 290 and Fry Road. Churches, schools, and youth-sports organizations across the Cy-Fair ISD area frequently come to us for monument signs and large banners near venues like the Berry Center. Because visibility on 290's frontage and feeder roads is everything, we design letters and monuments at a scale that reads cleanly at highway speed.",
    nearby: ["Bridgeland", "Towne Lake", "Fairfield", "Jersey Village", "Tomball"],
  },

  "pearland-tx": {
    slug: "pearland-tx",
    city: "Pearland",
    region: "TX",
    cityState: "Pearland, TX",
    img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&q=75",
    metaTitle: "Sign Company in Pearland, TX | Custom Business Signs & Installation",
    metaDescription:
      "Custom signs in Pearland, TX — channel letters, monument signs, vehicle wraps, and banners. Local design, permitting, and installation. Free quote within one business day.",
    h1: "Sign Company in Pearland, TX",
    intro:
      "Houston Sign Crafters provides custom signage for businesses across Pearland, from the retail and dining at Pearland Town Center to the medical, professional, and service businesses along Broadway Street (FM 518) and the Highway 288 corridor. Pearland is one of the region's fastest-growing suburbs, with strong retail, a growing medical sector tied to the nearby Texas Medical Center, and master-planned communities like Shadow Creek Ranch and Silverlake that set a clean, modern bar for signage.",
    localContext:
      "We serve the 77581 and 77584 areas, from Broadway and Pearland Parkway to Shadow Creek Ranch and the 288 medical corridor. Medical and dental practices expanding south from the Texas Medical Center come to us for illuminated monument signs and suite signage that look professional and meet center criteria; retailers and restaurants at Pearland Town Center and along Broadway want channel letters and window graphics that draw traffic on one of the area's busiest commercial strips. Because Pearland actively reviews sign permits and many properties carry strict tenant sign criteria, we confirm code and landlord approval before fabrication to avoid costly redos. From a new Shadow Creek storefront sign to a fleet wrap for a south-Houston service company, we manage design, permitting, fabrication, and licensed installation in-house — a 5-year warranty and a free quote within one business day. The ongoing Highway 288 expansion and toll lanes keep pulling new medical, retail, and dining development into Pearland, which means a steady need for grand-opening banners, temporary signage, and permanent storefront signs as businesses open along the corridor and around Shadow Creek Ranch Town Center. We also reface and refresh monument panels for the area's many maturing strip centers and HOAs. With so much of Pearland held to modern, master-planned design standards, we make sure every sign looks polished, meets criteria, and reads clearly from Broadway and Pearland Parkway.",
    nearby: ["Friendswood", "Shadow Creek Ranch", "Manvel", "Alvin", "Fresno"],
  },
};

export function getAllMarkets() {
  return Object.values(MARKETS);
}

export function getMarket(slug) {
  return MARKETS[slug] || null;
}

export function getMarketSlugs() {
  return Object.keys(MARKETS);
}

export default MARKETS;
