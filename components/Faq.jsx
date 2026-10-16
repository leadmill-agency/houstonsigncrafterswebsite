// Renders an FAQ accordion AND the matching FAQPage JSON-LD from the same
// source array, so the schema always matches the visible text word-for-word
// (playbook Part 1.3 — schema must mirror the page).
//
// `initialVisible`: show this many questions, fold the rest behind a native
// "Show N more" disclosure. Every question stays in the DOM and in the JSON-LD
// (the homepage keeps its 24 answer-first questions for AI search, owner
// 2026-10-07); the fold just stops the page from ending in a wall of rows.
export default function Faq({ items, heading = "Frequently asked questions", initialVisible }) {
  if (!items?.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  const fold = initialVisible && items.length > initialVisible;
  const shown = fold ? items.slice(0, initialVisible) : items;
  const hidden = fold ? items.slice(initialVisible) : [];

  return (
    <section className="mx-auto max-w-3xl">
      {heading && <h2 className="mb-6 text-2xl font-bold text-ink">{heading}</h2>}
      <div>
        {shown.map((it, i) => (
          <FaqItem key={i} item={it} />
        ))}
        {fold && (
          <details className="faq-more">
            <summary>Show {hidden.length} more questions +</summary>
            <div>
              {hidden.map((it, i) => (
                <FaqItem key={`more-${i}`} item={it} />
              ))}
            </div>
          </details>
        )}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}

function FaqItem({ item }) {
  return (
    <details className="faq-item">
      <summary>{item.q}</summary>
      <div className="faq-answer">
        <p>{item.a}</p>
      </div>
    </details>
  );
}
