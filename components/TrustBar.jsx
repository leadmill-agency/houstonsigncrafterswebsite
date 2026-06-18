import { BUSINESS } from "@/data/business";
import icons from "@/components/icons";

// Compact trust strip: star rating (if confirmed) + verifiable differentiators.
// Surfaces the 5-year warranty / UL / Houston / 1-day-quote signals the
// conversion review said were buried. `tone` adapts colors for dark vs light bg.
export default function TrustBar({ tone = "light", className = "" }) {
  const { reviews, trustPoints } = BUSINESS;
  const isDark = tone === "dark";
  const text = isDark ? "text-white" : "text-ink";
  const sub = isDark ? "text-white/70" : "text-steel";
  const divide = isDark ? "border-white/15" : "border-fog";

  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium ${text} ${className}`}>
      {reviews?.rating && (
        <span className="inline-flex items-center gap-1.5">
          <Stars rating={reviews.rating} />
          <span>{reviews.rating.toFixed(1)}</span>
          <span className={sub}>from {reviews.count} reviews</span>
        </span>
      )}
      {trustPoints.map((p, i) => (
        <span key={p} className={`inline-flex items-center gap-1.5 ${i === 0 && reviews?.rating ? `border-l ${divide} pl-5` : ""}`}>
          <span className="inline-flex h-4 w-4 text-signal">{icons.check}</span>
          {p}
        </span>
      ))}
    </div>
  );
}

function Stars({ rating }) {
  const full = Math.round(rating);
  return (
    <span className="inline-flex" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < full ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="1.5">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}
