import { BUSINESS } from "@/data/business";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /lp/ campaign pages are noindex; also keep crawlers out of internals.
        disallow: ["/api/", "/_next/", "/lp/"],
      },
    ],
    sitemap: `${BUSINESS.url}/sitemap.xml`,
  };
}
