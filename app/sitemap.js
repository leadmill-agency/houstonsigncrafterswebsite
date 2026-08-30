import { BUSINESS } from "@/data/business";
import { getServiceSlugs } from "@/data/services";
import { getMarketSlugs } from "@/data/markets";
import { getGuideSlugs } from "@/data/guides";
import { getAllPosts } from "@/lib/blog";

const BASE = BUSINESS.url;

// Generated from the same data files that build the pages, so the sitemap can
// never drift from what's actually published. Landing pages (/lp/*) are
// intentionally excluded — they're noindex.
export default function sitemap() {
  const now = new Date().toISOString();

  const staticPages = [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/portfolio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/locations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/quote`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/free-mockup`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/book`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/guides`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/company-facts`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/pricing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/sign-permits`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/general-contractors`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/property-managers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/franchise-signage`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const services = getServiceSlugs().map((slug) => ({
    url: `${BASE}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const locations = getMarketSlugs().map((slug) => ({
    url: `${BASE}/locations/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guides = getGuideSlugs().map((slug) => ({
    url: `${BASE}/guides/${slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: p.updated || p.date || now,
  }));

  return [
    ...staticPages.map((e) => ({ ...e, lastModified: now })),
    ...services.map((e) => ({ ...e, lastModified: now })),
    ...locations.map((e) => ({ ...e, lastModified: now })),
    ...guides.map((e) => ({ ...e, lastModified: now })),
    ...posts,
  ];
}
