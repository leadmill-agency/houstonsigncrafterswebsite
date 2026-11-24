import RichText from "@/components/RichText";

// Long answer-first pages show their first few sections and fold the rest
// behind a native <details>. Every word stays in the HTML for search engines
// and AI crawlers; the page just stops being a wall of text (2026-11-24).
// A body may hold several paragraphs separated by blank lines.
function Section({ sec }) {
  return (
    <div>
      <h2>{sec.heading}</h2>
      {sec.body.split(/\n\n+/).map((para, i) => (
        <RichText key={i} text={para} />
      ))}
    </div>
  );
}

export default function FoldedSections({ sections, open = 4, topic }) {
  const first = sections.slice(0, open);
  const rest = sections.slice(open);
  return (
    <div className="prose-content">
      {first.map((sec) => (
        <Section key={sec.heading} sec={sec} />
      ))}
      {rest.length === 1 && <Section sec={rest[0]} />}
      {rest.length > 1 && (
        <details className="faq-more">
          <summary>
            Read {rest.length} more answers{topic ? ` about ${topic}` : ""} +
          </summary>
          <div>
            {rest.map((sec) => (
              <Section key={sec.heading} sec={sec} />
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
