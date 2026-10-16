import { BUSINESS } from "@/data/business";
import { TESTIMONIALS } from "@/data/testimonials";

// Visible customer reviews + matching Review JSON-LD from the same array, so
// the schema mirrors the page word-for-word (same pattern as Faq.jsx). Quotes
// are verbatim from the live Google listing — see data/testimonials.js.
//
// Layout: one large lead quote beside a stack of smaller ones, instead of a
// grid of identical cards (design critique 2026-10-08). With `limit` 3 that is
// one lead + two supporting; larger limits keep stacking on the right.
export default function Testimonials({ limit = 6, heading = "What Houston businesses say" }) {
  const items = TESTIMONIALS.slice(0, limit);
  if (!items.length) return null;
  const [lead, ...rest] = items;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": items.map((t) => ({
      "@type": "Review",
      itemReviewed: { "@id": `${BUSINESS.url}/#business` },
      reviewRating: { "@type": "Rating", ratingValue: String(t.rating), bestRating: "5" },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      publisher: { "@type": "Organization", name: t.platform },
    })),
  };

  return (
    <section className="border-y border-fog bg-cloud">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">{heading}</h2>
          <p className="text-sm text-steel">
            {BUSINESS.reviews?.rating ? `${BUSINESS.reviews.rating.toFixed(1)} stars · ${BUSINESS.reviews.count} reviews · ` : ""}
            word for word from our Google listing
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <figure className="flex flex-col justify-between border-l-4 border-signal bg-white p-7 sm:p-9">
            <div>
              <Stars n={lead.rating} />
              <blockquote className="mt-4 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                &ldquo;{lead.quote}&rdquo;
              </blockquote>
            </div>
            <figcaption className="mt-6 text-xs font-semibold uppercase tracking-wide text-steel">
              {lead.name} · {lead.platform}
            </figcaption>
          </figure>
          <div className="grid gap-6">
            {rest.map((t) => (
              <figure key={t.name} className="flex flex-col border border-fog bg-white p-6">
                <Stars n={t.rating} />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-carbon">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-steel">
                  {t.name} · {t.platform}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-ink" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 0 0 .95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 0 0-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1 1 0 0 0-1.18 0l-2.8 2.03c-.78.57-1.84-.2-1.54-1.12l1.07-3.29a1 1 0 0 0-.36-1.12L2.98 8.72c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .95-.69l1.07-3.3Z" />
        </svg>
      ))}
    </div>
  );
}
