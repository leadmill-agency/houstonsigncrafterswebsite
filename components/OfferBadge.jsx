import Link from "next/link";
import { BUSINESS } from "@/data/business";

// Promo badge (data/business.js `offer`). Renders nothing if no offer is set.
// `tone` adapts colors for dark vs light backgrounds.
export default function OfferBadge({ tone = "light", className = "" }) {
  const { offer } = BUSINESS;
  if (!offer?.label) return null;
  const text = tone === "dark" ? "text-white" : "text-ink";

  return (
    <Link
      href={offer.href}
      className={`inline-flex items-center gap-2.5 rounded-sm border border-signal bg-signal/10 px-3 py-2 text-sm font-semibold ${text} ${className}`}
    >
      <span className="bg-signal px-1.5 py-0.5 font-display text-[11px] font-bold uppercase tracking-wide text-white">Offer</span>
      <span>
        {offer.label} <span className="font-normal opacity-80">— {offer.detail}</span>
      </span>
    </Link>
  );
}
