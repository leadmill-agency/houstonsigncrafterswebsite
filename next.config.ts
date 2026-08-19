import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // 301 redirect map from the old Framer site → new in-house URLs.
  // Source list = the live houstonsigncrafters.com sitemap (crawled 2026-06-18).
  //
  // URLs NOT listed here are intentionally 1:1 (same path on both sites) so
  // their ranking + backlink equity carries over with no redirect:
  //   /  ·  /contact  ·  /services  ·  /blog
  //   /services/channel-letters  ·  /services/monument-signs
  //   /services/vehicle-wraps    ·  /services/wall-graphics
  //   /services/interior-signs   ·  /services/custom-banners
  // (The last two are why we aligned those slugs — preserves their equity.)
  //
  // Before DNS cutover: re-crawl + check GSC "Pages" for any indexed URL not
  // covered here and add it (playbook Field Note #25).
  async redirects() {
    return [
      // Top-level pages renamed in the rebuild
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/end-user-license-agreement", destination: "/terms", permanent: true },
      { source: "/thankyou", destination: "/contact", permanent: true },

      // Old landing / printing pages → closest new equivalent
      { source: "/sign-printing", destination: "/services", permanent: true },
      { source: "/banners-landing", destination: "/services/custom-banners", permanent: true },

      // Legacy blog posts. NOTE: two old slugs are now REPUBLISHED as real
      // posts on the same URL (channel-letter cost + channel-letters-vs-cabinet),
      // so they need NO redirect — the original URL keeps its equity directly.
      { source: "/blog/do-you-need-a-permit-for-a-sign-in-houston", destination: "/blog/houston-business-sign-permits", permanent: true },
      { source: "/blog/how-much-does-a-vehicle-wrap-cost-in-houston", destination: "/services/vehicle-wraps", permanent: true },
      { source: "/blog/free-sign-design-consultation-in-houston", destination: "/free-mockup", permanent: true },
      // Informational rebrand post → the services hub (closest intent: a rebrand
      // needs new signage) rather than the generic blog index, so its equity lands
      // on a relevant page. Republish a real rebrand post on this slug later to
      // reclaim the ranking directly (like the cost + vs-cabinet posts).
      { source: "/blog/rebranding-your-houston-business", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
