import { BUSINESS } from "@/data/business";

// Rating + verifiable differentiators. No stock check-icons — just stars and
// uppercase labels split by hairline dividers (reads like a shop's credentials).
export default function TrustBar({ tone = "light", className = "" }) {
  const { reviews, trustPoints } = BUSINESS;
  const isDark = tone === "dark";
  const text = isDark ? "text-white" : "text-ink";
  const sub = isDark ? "text-white/60" : "text-steel";
  const rule = isDark ? "bg-white/25" : "bg-fog";

  const items = [
    ...(reviews?.rating
      ? [
          <span key="rating" className="inline-flex items-center gap-2">
            <Stars rating={reviews.rating} />
            <span className="font-display font-semibold">{reviews.rating.toFixed(1)}</span>
            <span className={sub}>· {reviews.count} reviews</span>
          </span>,
        ]
      : []),
    ...trustPoints.map((p) => (
      <span key={p} className="font-display text-xs font-semibold uppercase tracking-wide">
        {p}
      </span>
    )),
  ];

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm ${text} ${className}`}>
      {items.map((node, i) => (
        <span key={i} className="inline-flex items-center gap-4">
          {i > 0 && <span className={`hidden h-3 w-px sm:inline-block ${rule}`} aria-hidden="true" />}
          {node}
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
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < full ? "#1e64e6" : "none"} stroke="#1e64e6" strokeWidth="1.5">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}
