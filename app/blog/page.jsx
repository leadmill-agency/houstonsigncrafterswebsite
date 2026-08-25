import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Houston Signage Blog: Tips, Guides & Ideas",
  description:
    "Guides and tips on custom signs for Houston businesses: permitting, sign types, design, and getting your storefront noticed. From Houston Sign Crafters.",
  alternates: { canonical: "/blog" },
};

export default function BlogHub() {
  const posts = getAllPosts();

  return (
    <main>
      <section className="bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold text-ink">The Houston Signage Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            Practical guides on signs, permitting, and getting your Houston business noticed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        {posts.length === 0 ? (
          <p className="text-center text-steel">New posts coming soon.</p>
        ) : (
          <div className="grid gap-6">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-sm border border-fog p-6 transition-colors hover:border-ink">
                {p.category && <span className="text-xs font-semibold uppercase tracking-wider text-signal-600">{p.category}</span>}
                <h2 className="mt-1 text-xl font-bold text-ink group-hover:text-signal-600">{p.title}</h2>
                {p.description && <p className="mt-2 text-steel">{p.description}</p>}
                {p.date && <p className="mt-3 text-sm text-steel">{new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>}
              </Link>
            ))}
          </div>
        )}
      </section>

      <CTASection />
    </main>
  );
}
