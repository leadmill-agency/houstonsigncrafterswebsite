// Portfolio / "Our Work" — source of data for /portfolio.
//
// HOW TO ADD A PROJECT: drop the image in /public/portfolio/ and add an entry
// here. Keep `category` to one of CATEGORIES below so the filter works.
//
// `type`: "install" = a completed, photographed install. "concept" = a design
// rendering / mockup (shown with a "Design concept" badge so it's never passed
// off as a finished photo — per the portfolio PRD's honesty rules). Missing
// `type` defaults to "install".
//
// Metadata comes from the company's own sign catalogue. Do NOT invent client
// names, locations, or testimonials.

export const CATEGORIES = [
  "All",
  "Channel Letters",
  "Cabinet / Lightbox Signs",
  "Monument & Pylon Signs",
  "Window Vinyl",
  "Interior Signs",
  "Wall Graphics",
  "Vehicle Wraps",
  "Banners",
];

const PORTFOLIO = [
  // ---- Completed installs (photographed) ----
  {
    id: "slick-city-action-park",
    title: "Slick City Action Park",
    category: "Channel Letters",
    signType: "Illuminated Logo & Dimensional Letters",
    description:
      "A large-format entrance sign with a custom illuminated logo and bold dimensional lettering, sized for high visibility at the building's main entry.",
    imageSrc: "/portfolio/slickcity.jpg",
    location: "Webster, TX",
    industry: "Entertainment",
    type: "install",
    featured: true,
  },
  {
    id: "emporium-games",
    title: "Emporium Games",
    category: "Channel Letters",
    signType: "Illuminated Channel Letters & Window Graphics",
    description:
      "Bold front-lit channel letters paired with full-storefront printed window graphics, turning a nighttime exterior into a bright, eye-catching destination.",
    imageSrc: "/portfolio/emporium.jpg",
    location: "New Caney, TX",
    industry: "Gaming & Retail",
    type: "install",
    featured: true,
  },
  {
    id: "jys",
    title: "JYS",
    category: "Channel Letters",
    signType: "Custom Illuminated Channel Letters",
    description:
      "A custom script channel-letter sign with integrated lighting and a clean mount, built for a bold building-top presence.",
    imageSrc: "/portfolio/jys.jpg",
    location: "Houston, TX",
    industry: "Commercial",
    type: "install",
  },
  {
    id: "vasquitas-ice-cream",
    title: "Vasquitas Ice Cream",
    category: "Cabinet / Lightbox Signs",
    signType: "Cabinet Sign & Window Graphics",
    description:
      "A full-color cabinet sign paired with matching window graphics, bringing a fun, recognizable brand right to the storefront.",
    imageSrc: "/portfolio/vasquitas.jpg",
    location: "Houston, TX",
    industry: "Restaurant",
    type: "install",
  },
  {
    id: "new-promise-neuropathy",
    title: "New Promise Neuropathy",
    category: "Channel Letters",
    signType: "Front-Lit Channel Letters & Logo",
    description:
      "Front-lit channel letters paired with a custom logo, mounted on a stone facade for a clean, professional look that stands out after dark.",
    imageSrc: "/portfolio/newpromise.jpg",
    location: "Missouri City, TX",
    industry: "Medical",
    type: "install",
  },
  {
    id: "flex-fit-pilates",
    title: "Flex Fit Pilates",
    category: "Channel Letters",
    signType: "Dimensional Building Letters",
    description:
      "Crisp dimensional letters on a multi-tenant retail building, keeping each storefront clearly identified day and night.",
    imageSrc: "/portfolio/flexfit.jpg",
    location: "Sugar Land, TX",
    industry: "Fitness",
    type: "install",
  },
  {
    id: "elite-career-institute",
    title: "Elite Career Institute of Texas",
    category: "Channel Letters",
    signType: "Dimensional Letters & Logo Medallion",
    description:
      "Dimensional letters and a round logo medallion mounted on brick, giving the entrance a polished, established feel.",
    imageSrc: "/portfolio/elite.jpg",
    location: "Houston, TX",
    industry: "Education",
    type: "install",
  },
  {
    id: "bg-wealth-sharing",
    title: "BG Wealth Sharing",
    category: "Channel Letters",
    signType: "Dimensional Letters & Logo",
    description:
      "Two-tone dimensional letters with a custom logo, mounted flush to a stucco facade for a sharp, modern storefront.",
    imageSrc: "/portfolio/bgwealth.jpg",
    location: "Houston, TX",
    industry: "Professional Services",
    type: "install",
  },

  // ---- Design concepts (renderings / mockups) ----
  {
    id: "luce-avenue-coffee",
    title: "Luce Avenue Coffee Roasters",
    category: "Channel Letters",
    signType: "Halo-Lit Channel Letters & Logo",
    description:
      "Warm halo-lit channel letters with a custom geometric logo, glowing softly against a clean white facade for an upscale, inviting storefront.",
    imageSrc: "/portfolio/luce.jpg",
    industry: "Coffee & Cafe",
    type: "concept",
  },
  {
    id: "clear-lake-medical-plaza",
    title: "Clear Lake Medical Plaza",
    category: "Channel Letters",
    signType: "Illuminated Channel Letters",
    description:
      "Front-lit channel letters with a sweeping accent element, designed for a clean and professional medical-plaza entrance.",
    imageSrc: "/portfolio/clearlake.jpg",
    industry: "Medical",
    type: "concept",
  },
  {
    id: "bethune-empowerment-center",
    title: "Bethune Empowerment Center",
    category: "Channel Letters",
    signType: "Illuminated Channel Letters",
    description:
      "Large-scale illuminated lettering spanning a building canopy, designed for clear identification from across the lot.",
    imageSrc: "/portfolio/empower.jpg",
    industry: "Community",
    type: "concept",
  },
  {
    id: "hashtag-india",
    title: "Hashtag India",
    category: "Channel Letters",
    signType: "Illuminated Channel Letters & Logo",
    description:
      "Dual-face illuminated channel letters with a custom logo, wrapping a corner building for visibility from both directions.",
    imageSrc: "/portfolio/hashtag.jpg",
    industry: "Restaurant",
    type: "concept",
  },
  {
    id: "karma-kolache-macarons",
    title: "Karma Kolache & Macarons",
    category: "Channel Letters",
    signType: "Dimensional Letters",
    description:
      "Bold dimensional letters on a brick tower facade, balancing a strong primary name with a clean secondary line.",
    imageSrc: "/portfolio/karma.jpg",
    industry: "Bakery",
    type: "concept",
  },
  {
    id: "nautical-bowls",
    title: "Nautical Bowls",
    category: "Channel Letters",
    signType: "Channel Letters & Custom Logo",
    description:
      "Channel letters with a custom anchor logo and a tidy tagline lockup, sized to read cleanly against brick.",
    imageSrc: "/portfolio/nautica.jpg",
    industry: "Restaurant",
    type: "concept",
  },
  {
    id: "turn-key-motorsport",
    title: "Turn-Key Motorsport",
    category: "Channel Letters",
    signType: "Channel Letters & Service Callout",
    description:
      "Bold channel letters paired with a simple service callout, sized for a multi-bay automotive storefront.",
    imageSrc: "/portfolio/turnkey.jpg",
    industry: "Automotive",
    type: "concept",
  },
];

export function getPortfolio() {
  return PORTFOLIO;
}

// Only show category chips that actually have projects (plus "All").
export function getActiveCategories() {
  const present = new Set(PORTFOLIO.map((p) => p.category));
  return CATEGORIES.filter((c) => c === "All" || present.has(c));
}

export default PORTFOLIO;
