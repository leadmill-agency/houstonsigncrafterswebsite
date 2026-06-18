// Renders an FAQ accordion AND the matching FAQPage JSON-LD from the same
// source array, so the schema always matches the visible text word-for-word
// (playbook Part 1.3 — schema must mirror the page).
export default function Faq({ items, heading = "Frequently asked questions" }) {
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

  return (
    <section className="mx-auto max-w-3xl">
      {heading && <h2 className="mb-6 text-2xl font-bold text-ink">{heading}</h2>}
      <div>
        {items.map((it, i) => (
          <details key={i} className="faq-item">
            <summary>{it.q}</summary>
            <div className="faq-answer">
              <p>{it.a}</p>
            </div>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
