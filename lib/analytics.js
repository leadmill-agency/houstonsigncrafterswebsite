// Thin wrapper around window.gtag. Safe to import + call from any client
// component. No-ops cleanly when gtag isn't present (SSR, missing env var,
// ad-blocker, etc.) so callsites stay simple. (Playbook Part 6.2.)

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

// Meta Pixel standard event (e.g. "Lead"). No-ops if the pixel isn't loaded.
export function trackPixel(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", name, params);
}

// OpenAI Ads pixel event (e.g. "lead_created"). The oaiq stub queues calls
// even before the SDK loads, so this only guards SSR / blocked script.
// Pass { event_id } in options to dedup against the server-side CAPI event.
export function trackOaiq(eventName, data = {}, options) {
  if (typeof window === "undefined") return;
  if (typeof window.oaiq !== "function") return;
  window.oaiq("measure", eventName, data, options);
}
