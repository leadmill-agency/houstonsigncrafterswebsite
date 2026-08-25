// Portfolio / "Our Work" — source of data for the image gallery (/portfolio and
// the homepage). The gallery shows images only; this metadata powers each image's
// alt text (a11y/SEO) and the /portfolio CollectionPage schema.
//
// Images are polished AI renderings produced from real install photos (see
// memory: hsc-ai-rendering-pipeline). To add a project: render the photo, drop
// the jpg in /public/portfolio/, and add an entry here.

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
  { id: "slick-city-action-park", title: "Slick City Action Park", category: "Channel Letters", signType: "Illuminated Logo & Dimensional Letters", description: "A large-format entrance sign with a custom illuminated logo and bold dimensional lettering.", imageSrc: "/portfolio/slickcity.jpg", location: "Webster, TX", industry: "Entertainment", featured: true },
  { id: "copper-espresso-bar", title: "Copper Espresso Bar", category: "Channel Letters", signType: "Illuminated Channel Letters", description: "Crisp white channel letters on two faces of the building, lighting up a drive-thru coffee bar.", imageSrc: "/portfolio/copper.jpg", location: "Houston, TX", industry: "Coffee & Cafe", featured: true },
  { id: "clear-lake-medical-plaza", title: "Clear Lake Medical Plaza", category: "Channel Letters", signType: "Illuminated Channel Letters", description: "Front-lit channel letters with a sweeping accent over a brick medical-plaza entrance.", imageSrc: "/portfolio/clearlake.jpg", location: "Houston, TX", industry: "Medical", featured: true },
  { id: "emporium-games", title: "Emporium Games", category: "Channel Letters", signType: "Illuminated Channel Letters & Window Graphics", description: "Bold front-lit channel letters paired with full-storefront printed window graphics.", imageSrc: "/portfolio/emporium.jpg", location: "New Caney, TX", industry: "Gaming & Retail", featured: true },
  { id: "jys", title: "JYS", category: "Channel Letters", signType: "Custom Illuminated Channel Letters", description: "A custom script channel-letter sign with integrated lighting and a clean mount.", imageSrc: "/portfolio/jys.jpg", location: "Houston, TX", industry: "Commercial" },
  { id: "ss-perfumes", title: "S.S. Perfumes", category: "Channel Letters", signType: "Illuminated Channel Letters & Cabinet", description: "Illuminated channel letters over a red cabinet tagline on a brick storefront fascia.", imageSrc: "/portfolio/ssperfumes.jpg", location: "Houston, TX", industry: "Retail" },
  { id: "meerut-bbq-house", title: "Meerut BBQ House", category: "Channel Letters", signType: "Dimensional Channel Letters & Window Graphics", description: "Bold yellow dimensional channel letters with a custom logo, plus matching window graphics.", imageSrc: "/portfolio/meerut.jpg", location: "Houston, TX", industry: "Restaurant" },
  { id: "vasquitas-ice-cream", title: "Vasquitas Ice Cream", category: "Cabinet / Lightbox Signs", signType: "Cabinet Sign & Window Graphics", description: "A full-color cabinet sign paired with matching window graphics.", imageSrc: "/portfolio/vasquitas.jpg", location: "Houston, TX", industry: "Restaurant" },
  { id: "new-promise-neuropathy", title: "New Promise Neuropathy", category: "Channel Letters", signType: "Front-Lit Channel Letters & Logo", description: "Front-lit channel letters paired with a custom logo on a stone facade.", imageSrc: "/portfolio/newpromise.jpg", location: "Missouri City, TX", industry: "Medical" },
  { id: "stf-houston", title: "STF Houston", category: "Channel Letters", signType: "Illuminated Wall Sign", description: "Illuminated channel letters and a round logo mark on a wood-look feature wall.", imageSrc: "/portfolio/stf.jpg", location: "Houston, TX", industry: "Commercial" },
  { id: "flex-fit-pilates", title: "Flex Fit Pilates", category: "Channel Letters", signType: "Dimensional Building Letters", description: "Crisp dimensional letters on a multi-tenant retail building.", imageSrc: "/portfolio/flexfit.jpg", location: "Sugar Land, TX", industry: "Fitness" },
  { id: "at-home-shopping-center", title: "At Home Shopping Center", category: "Monument & Pylon Signs", signType: "Multi-Tenant Pylon Sign", description: "A tall pylon sign with individual illuminated tenant panels facing a high-traffic road.", imageSrc: "/portfolio/athome.jpg", location: "Houston, TX", industry: "Retail Center" },
  { id: "elite-career-institute", title: "Elite Career Institute of Texas", category: "Channel Letters", signType: "Dimensional Letters & Logo Medallion", description: "Dimensional letters and a round logo medallion mounted on brick.", imageSrc: "/portfolio/elite.jpg", location: "Houston, TX", industry: "Education" },
  { id: "kirkwood-tech-center", title: "Kirkwood Tech Center", category: "Monument & Pylon Signs", signType: "Monument Sign with Tenant Directory", description: "A brick monument sign with a stacked tenant directory for an office park.", imageSrc: "/portfolio/kirkwood.jpg", location: "Houston, TX", industry: "Office" },
  { id: "ad-turnkey-motorsport", title: "A&D Promotions & Turn-Key Motorsport", category: "Channel Letters", signType: "Dimensional Storefront Letters", description: "Dimensional storefront letters for two businesses sharing a custom-fabrication building.", imageSrc: "/portfolio/adturnkey.jpg", location: "Houston, TX", industry: "Automotive & Events" },
  { id: "luce-avenue-coffee", title: "Luce Avenue Coffee Roasters", category: "Channel Letters", signType: "Halo-Lit Channel Letters & Logo", description: "Warm halo-lit channel letters with a custom geometric logo against a clean white facade.", imageSrc: "/portfolio/luce.jpg", location: "Houston, TX", industry: "Coffee & Cafe" },
  { id: "bethune-empowerment-center", title: "Bethune Empowerment Center", category: "Channel Letters", signType: "Illuminated Channel Letters", description: "Large-scale illuminated lettering spanning a building canopy for clear identification.", imageSrc: "/portfolio/empower.jpg", location: "Houston, TX", industry: "Community" },
  { id: "hashtag-india", title: "Hashtag India", category: "Channel Letters", signType: "Illuminated Channel Letters & Logo", description: "Dual-face illuminated channel letters with a custom logo wrapping a corner building.", imageSrc: "/portfolio/hashtag.jpg", location: "Houston, TX", industry: "Restaurant" },
  { id: "karma-kolache-macarons", title: "Karma Kolache & Macarons", category: "Channel Letters", signType: "Dimensional Letters", description: "Bold dimensional letters on a brick tower facade with a clean secondary line.", imageSrc: "/portfolio/karma.jpg", location: "Houston, TX", industry: "Bakery" },
  { id: "nautical-bowls", title: "Nautical Bowls", category: "Channel Letters", signType: "Channel Letters & Custom Logo", description: "Channel letters with a custom anchor logo and a tidy tagline lockup against brick.", imageSrc: "/portfolio/nautica.jpg", location: "Houston, TX", industry: "Restaurant", objectPosition: "50% 22%" },
  { id: "bridge-3", title: "Bridge 3", category: "Channel Letters", signType: "Illuminated Channel Letters & Logo", description: "Illuminated channel letters and a custom logo for a Mission Ready Learning Lab storefront.", imageSrc: "/portfolio/bridge3.jpg", location: "Houston, TX", industry: "Education" },
];

export function getPortfolio() {
  return PORTFOLIO;
}

export function getActiveCategories() {
  const present = new Set(PORTFOLIO.map((p) => p.category));
  return CATEGORIES.filter((c) => c === "All" || present.has(c));
}

export default PORTFOLIO;
