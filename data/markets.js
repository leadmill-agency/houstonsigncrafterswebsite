// Location/market catalog — source of data for /locations and /locations/[slug].
//
// Each city = page metadata (META below) merged with its long-form body content
// (answer + sections + faqs), which lives in one JSON file per city under
// data/locations/. Keeping the 1,000+ word body in its own file keeps this
// index readable and makes each city easy to edit.
//
// HOW TO LAUNCH A NEW LOCATION PAGE: add a data/locations/<slug>.json file
// (answer, sections[], faqs[]) and a META entry here. The [slug] template renders
// a full local SEO page (LocalBusiness + FAQPage schema, answer-first block,
// unique question-H2 sections, city FAQ, services, nearby, CTAs).
//
// CRITICAL (playbook Field Note #9): every city's body must be UNIQUE — real
// corridors, communities, ZIPs, and a DIFFERENT section structure per city so the
// pages never read as templated. Do not find-and-replace one city into another.

import katy from "./locations/katy-tx.json";
import sugarLand from "./locations/sugar-land-tx.json";
import woodlands from "./locations/the-woodlands-tx.json";
import pasadena from "./locations/pasadena-tx.json";
import spring from "./locations/spring-tx.json";
import cypress from "./locations/cypress-tx.json";
import pearland from "./locations/pearland-tx.json";

const META = {
  "katy-tx": {
    slug: "katy-tx",
    city: "Katy",
    region: "TX",
    cityState: "Katy, TX",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=75",
    metaTitle: "Sign Company in Katy, TX",
    metaDescription:
      "Custom signs in Katy, TX: channel letters, monument signs, vehicle wraps, and banners. In-house design, HOA and city permitting, licensed installation.",
    h1: "Sign Company in Katy, TX",
    intro:
      "Custom signage for Katy storefronts, offices, and master-planned communities, all designed, permitted, and installed by one in-house Houston team.",
    nearby: ["Cinco Ranch", "Cross Creek Ranch", "Fulshear", "Brookshire", "Energy Corridor"],
  },
  "sugar-land-tx": {
    slug: "sugar-land-tx",
    city: "Sugar Land",
    region: "TX",
    cityState: "Sugar Land, TX",
    img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&q=75",
    metaTitle: "Sign Company in Sugar Land, TX",
    metaDescription:
      "Custom signs in Sugar Land, TX: channel letters, monument signs, medical-office signage, and more. In-house design, permitting, and licensed installation.",
    h1: "Sign Company in Sugar Land, TX",
    intro:
      "Polished, professional signage for Sugar Land's corporate, medical, and retail businesses, built and installed in-house.",
    nearby: ["First Colony", "Telfair", "Riverstone", "Missouri City", "Stafford"],
  },
  "the-woodlands-tx": {
    slug: "the-woodlands-tx",
    city: "The Woodlands",
    region: "TX",
    cityState: "The Woodlands, TX",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=75",
    metaTitle: "Sign Company in The Woodlands, TX",
    metaDescription:
      "Custom signs in The Woodlands, TX built to Development Standards Committee covenants: channel letters, monuments, and more. In-house design and permitting.",
    h1: "Sign Company in The Woodlands, TX",
    intro:
      "Covenant-compliant, upscale signage for The Woodlands. We handle the Development Standards approval, fabrication, and installation.",
    nearby: ["Hughes Landing", "Market Street", "Spring", "Conroe", "Shenandoah"],
  },
  "pasadena-tx": {
    slug: "pasadena-tx",
    city: "Pasadena",
    region: "TX",
    cityState: "Pasadena, TX",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=75",
    metaTitle: "Sign Company in Pasadena, TX",
    metaDescription:
      "Custom signs in Pasadena, TX: channel letters, monument signs, industrial signage, bilingual designs, and wraps. In-house design and permitting.",
    h1: "Sign Company in Pasadena, TX",
    intro:
      "Durable storefront, industrial, and bilingual signage for Pasadena, engineered, permitted, and installed in-house.",
    nearby: ["Deer Park", "South Houston", "La Porte", "Pearland", "Galena Park"],
  },
  "spring-tx": {
    slug: "spring-tx",
    city: "Spring",
    region: "TX",
    cityState: "Spring, TX",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=75",
    metaTitle: "Sign Company in Spring, TX",
    metaDescription:
      "Custom signs in Spring, TX, from Old Town Spring storefronts to corporate signage near Springwoods Village. In-house design, permitting, and installation.",
    h1: "Sign Company in Spring, TX",
    intro:
      "Storefront, corporate, and event signage for Spring and Old Town Spring, designed, permitted, and installed in-house.",
    nearby: ["Klein", "The Woodlands", "Old Town Spring", "Tomball", "Humble"],
  },
  "cypress-tx": {
    slug: "cypress-tx",
    city: "Cypress",
    region: "TX",
    cityState: "Cypress, TX",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=75",
    metaTitle: "Sign Company in Cypress, TX",
    metaDescription:
      "Custom signs in Cypress, TX: channel letters, monument signs, vehicle wraps for builders, and more. In-house design, permitting, and installation.",
    h1: "Sign Company in Cypress, TX",
    intro:
      "Fast-turnaround signage and fleet wraps for Cypress's growing businesses, builders, and contractors, built and installed in-house.",
    nearby: ["Bridgeland", "Towne Lake", "Fairfield", "Jersey Village", "Tomball"],
  },
  "pearland-tx": {
    slug: "pearland-tx",
    city: "Pearland",
    region: "TX",
    cityState: "Pearland, TX",
    img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&q=75",
    metaTitle: "Sign Company in Pearland, TX",
    metaDescription:
      "Custom signs in Pearland, TX: medical and dental signage on SH-288, retail and restaurant signs, monuments, and banners. In-house design and permitting.",
    h1: "Sign Company in Pearland, TX",
    intro:
      "Medical, retail, and restaurant signage for Pearland and the SH-288 corridor, designed, permitted, and installed in-house.",
    nearby: ["Friendswood", "Shadow Creek Ranch", "Manvel", "Alvin", "Fresno"],
  },
};

const CONTENT = {
  "katy-tx": katy,
  "sugar-land-tx": sugarLand,
  "the-woodlands-tx": woodlands,
  "pasadena-tx": pasadena,
  "spring-tx": spring,
  "cypress-tx": cypress,
  "pearland-tx": pearland,
};

const MARKETS = Object.fromEntries(
  Object.entries(META).map(([slug, meta]) => [slug, { ...meta, ...CONTENT[slug] }])
);

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
