import { BUSINESS, SERVICE_AREAS } from "@/data/business";
import { getAllServices } from "@/data/services";
import { getAllMarkets } from "@/data/markets";
import { PRICING, formatRange } from "@/data/pricing";
import { getAllPosts } from "@/lib/blog";

// llms.txt — a concise, markdown site map for AI systems, generated from the
// same data files as the pages so it can never drift. (Evidence on llms.txt
// adoption is weak as of 2026 — shipped as cheap insurance at the owner's
// request; the robots.txt AI-crawler rules + on-page content do the real work.)

export const dynamic = "force-static";

export function GET() {
  const services = getAllServices();
  const markets = getAllMarkets();
  const posts = getAllPosts();
  const B = BUSINESS.url;

  const lines = [
    `# ${BUSINESS.name}`,
    "",
    `> Custom sign company in Houston, TX. We design, fabricate, permit, and install commercial signs with our own in-house team — channel letters, monument signs, vehicle wraps, wall graphics, interior signs, and banners. ${BUSINESS.reviews.rating}★ across ${BUSINESS.reviews.count} reviews (${BUSINESS.reviews.source}). Free written quote within one business day. 5-year warranty; UL-certified illuminated signage.`,
    "",
    `Address: ${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality}, ${BUSINESS.address.addressRegion} ${BUSINESS.address.postalCode}`,
    `Phone: ${BUSINESS.phone} · Email: ${BUSINESS.email} · Hours: ${BUSINESS.hoursLabel}`,
    `Service area: ${SERVICE_AREAS.join(", ")} and the surrounding Houston metro.`,
    "",
    "## Key pages",
    "",
    `- [Company facts](${B}/company-facts): what we do, where we work, warranty, certifications`,
    `- [Pricing](${B}/pricing): real installed price ranges per sign type`,
    `- [Get a free quote](${B}/quote): itemized written quote within one business day`,
    `- [Portfolio](${B}/portfolio): recent Houston installs`,
    `- [About](${B}/about)`,
    `- [Contact](${B}/contact)`,
    "",
    "## Services",
    "",
    ...services.map((s) => `- [${s.name}](${B}/services/${s.slug}): ${s.metaDescription || ""}`),
    "",
    "## Typical installed price ranges (Houston)",
    "",
    ...PRICING.map((row) => `- ${row.label}: ${formatRange(row)} — typical timeline ${row.timeline}`),
    "",
    "## Service areas",
    "",
    ...markets.map((m) => `- [Signs in ${m.cityState}](${B}/locations/${m.slug})`),
    "",
    "## Guides & articles",
    "",
    `- [Free sign guides](${B}/guides)`,
    ...posts.map((p) => `- [${p.title}](${B}/blog/${p.slug})`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
