"use client";

import { trackEvent, trackPixel } from "@/lib/analytics";

// CTA to the Design Your Sign tool (tool.houstonsigncrafters.com). Fires the
// conversion signals before the new tab opens: dataLayer `tool_click` (same
// pattern as booking_click for the Ads contractor), GA4 event, Meta pixel.
const TOOL_URL = "https://tool.houstonsigncrafters.com/";

export default function ToolLink({ label = "Design My Sign Free", className = "btn btn-primary", source = "page" }) {
  const handleClick = () => {
    trackEvent("tool_click", { link_url: TOOL_URL, source });
    trackPixel("Lead", { content_name: "design_tool_click" });
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "tool_click" });
    }
  };
  return (
    <a href={TOOL_URL} target="_blank" rel="noopener" onClick={handleClick} className={className}>
      {label}
    </a>
  );
}
