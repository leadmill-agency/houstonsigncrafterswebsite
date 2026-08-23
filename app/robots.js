import { BUSINESS } from "@/data/business";

// /lp/ campaign pages are noindex; also keep crawlers out of internals.
const DISALLOW = ["/api/", "/_next/", "/lp/"];

// AI retrieval crawlers, explicitly allowed. Being cited by AI assistants
// requires the SEARCH crawlers (OAI-SearchBot, Claude-SearchBot,
// PerplexityBot) — they're distinct from the training crawlers (GPTBot,
// ClaudeBot), which we also allow. Never block Bingbot: ChatGPT's local
// answers ride Bing's index. Rules match the wildcard, but naming the bots
// makes the intent explicit and survives any future tightening of `*`.
const AI_CRAWLERS = [
  "OAI-SearchBot", // ChatGPT search citations
  "ChatGPT-User", // user-initiated ChatGPT fetches
  "GPTBot", // OpenAI training
  "Claude-SearchBot", // Claude web-search citations
  "Claude-User", // user-initiated Claude fetches
  "ClaudeBot", // Anthropic training
  "PerplexityBot", // Perplexity citations
  "Perplexity-User", // user-initiated Perplexity fetches
  "Googlebot",
  "Bingbot",
];

export default function robots() {
  return {
    rules: [
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW,
      },
    ],
    sitemap: `${BUSINESS.url}/sitemap.xml`,
  };
}
