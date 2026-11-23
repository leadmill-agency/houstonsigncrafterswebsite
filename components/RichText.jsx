import Link from "next/link";

// Renders a plain string, turning [label](/path) markdown links into real
// internal links. Internal paths only; anything else renders as text. Shared
// by the service and location templates so body copy in data/ files can carry
// contextual links to the money pages (organic plan 2026-11-23).
export default function RichText({ text }) {
  const parts = text.split(/(\[[^\]]+\]\(\/[^)]*\))/g);
  return (
    <p>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\((\/[^)]*)\)$/);
        if (!m) return part;
        return (
          <Link key={i} href={m[2]} className="font-medium text-signal-600 underline underline-offset-2 hover:text-ink">
            {m[1]}
          </Link>
        );
      })}
    </p>
  );
}
