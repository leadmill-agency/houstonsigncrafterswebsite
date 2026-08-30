"use client";

import { BUSINESS } from "@/data/business";
import { trackEvent, trackPixel } from "@/lib/analytics";

// Booking CTA. Opens the Google Calendar scheduling page and fires the
// conversion signals first: dataLayer `booking_click` (for the Google Ads
// contractor's GTM trigger, same pattern as quote_form_success), GA4 event,
// and a Meta pixel Schedule event.
export default function BookButton({ label = "Pick a Time", className = "btn btn-primary" }) {
  const handleClick = () => {
    trackEvent("booking_click", { link_url: BUSINESS.bookingUrl });
    trackPixel("Schedule", { content_name: "booking_click" });
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "booking_click" });
    }
  };
  return (
    <a
      href={BUSINESS.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {label}
    </a>
  );
}
