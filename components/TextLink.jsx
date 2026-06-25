"use client";

import { BUSINESS } from "@/data/business";
import { trackEvent } from "@/lib/analytics";

// Text-us CTA — lowers friction for mobile buyers who'd rather text than call.
// Fires a GA4 `text_click` key event.
export default function TextLink({ className = "", label }) {
  return (
    <a
      href={BUSINESS.smsHref}
      className={className}
      onClick={() => trackEvent("text_click", { event_category: "engagement", event_label: BUSINESS.smsHref })}
    >
      {label || `Text ${BUSINESS.phone}`}
    </a>
  );
}
