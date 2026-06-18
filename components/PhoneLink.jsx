"use client";

import { BUSINESS } from "@/data/business";
import { trackEvent } from "@/lib/analytics";
import icons from "@/components/icons";

// Phone CTA that fires a GA4 `phone_click` key event — the most important
// conversion for a local service business (playbook Part 6.2). Use everywhere
// instead of a raw tel: link so every call click is measured.
export default function PhoneLink({ className = "", showIcon = true, label }) {
  return (
    <a
      href={BUSINESS.phoneHref}
      className={className}
      onClick={() => trackEvent("phone_click", { event_category: "engagement", event_label: BUSINESS.phoneHref })}
    >
      {showIcon && <span className="w-4 h-4 inline-block align-middle mr-2">{icons.phone}</span>}
      {label || BUSINESS.phone}
    </a>
  );
}
