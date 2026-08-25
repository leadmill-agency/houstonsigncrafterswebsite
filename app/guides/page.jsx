import Link from "next/link";
import { getAllGuides } from "@/data/guides";

export const metadata = {
  title: "Free Sign Guides & Checklists",
  description:
    "Free guides from Houston Sign Crafters: sign permitting, costs, and what to know before you order a business sign in Houston.",
  alternates: { canonical: "/guides" },
};

export default function GuidesIndexPage() {
  const guides = getAllGuides();

  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <p className="eyebrow text-signal">Free downloads</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Sign guides &amp; checklists</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            The reference material we wish every Houston business had before ordering a sign.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group border border-fog p-6 transition-colors hover:border-signal"
            >
              <h2 className="text-xl font-bold text-ink group-hover:text-signal-600">{g.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel">{g.subtitle}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-signal-600">
                Get the free checklist →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-steel">
          Prefer to read online? Start with{" "}
          <Link href="/blog" className="underline decoration-fog underline-offset-2 hover:decoration-signal">
            the blog
          </Link>{" "}
          for sign costs, materials, and permitting in Houston.
        </p>
      </section>
    </main>
  );
}
