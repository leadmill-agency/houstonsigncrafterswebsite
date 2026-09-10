// First-party ad attribution (2026-09-12). Previously utm_source was
// HARDCODED to "houstonsigncrafters.com" in the CRM payload, so ad tags
// (e.g. ChatGPT ads: ?utm_source=chatgpt&utm_campaign=hscbuyerintent)
// were dropped and every website lead looked identical in attribution.
//
// On every page load: read the URL's utm_*/gclid params plus the external
// referrer and remember them in localStorage. A tagged click always
// overwrites (the ad platform is speaking); an untagged visit only fills
// the slot if it's empty (first-touch referrer). LeadForm attaches the
// stored values as hidden fields, so the tags survive the visitor
// browsing around the site before submitting.

const KEY = "hsc_attribution";
const TAG_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
];

export const ATTRIBUTION_FIELDS = [...TAG_PARAMS, "referrer", "landing_url"];

export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    const q = new URLSearchParams(window.location.search);
    const tags = {};
    for (const p of TAG_PARAMS) {
      const v = q.get(p);
      if (v) tags[p] = v.slice(0, 200);
    }
    const externalReferrer =
      document.referrer && !document.referrer.includes(window.location.hostname)
        ? document.referrer.slice(0, 300)
        : "";
    const base = {
      referrer: externalReferrer,
      landing_url: (window.location.origin + window.location.pathname + window.location.search).slice(0, 300),
      at: Date.now(),
    };
    let existing = null;
    try {
      existing = JSON.parse(window.localStorage.getItem(KEY) || "null");
    } catch {
      existing = null;
    }
    if (Object.keys(tags).length) {
      window.localStorage.setItem(KEY, JSON.stringify({ ...base, ...tags }));
    } else if (!existing) {
      window.localStorage.setItem(KEY, JSON.stringify(base));
    }
  } catch {
    // storage blocked (private mode etc.) — attribution is best-effort
  }
}

export function getAttribution() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "null") || {};
  } catch {
    return {};
  }
}
