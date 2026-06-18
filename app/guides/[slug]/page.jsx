import { notFound } from "next/navigation";
import { getGuide, getGuideSlugs } from "@/data/guides";
import { BUSINESS } from "@/data/business";
import LeadForm from "@/components/LeadForm";
import icons from "@/components/icons";

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: { title: g.metaTitle, description: g.metaDescription, url: `${BUSINESS.url}/guides/${slug}` },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-signal-600">Free Guide</p>
          <h1 className="text-4xl font-bold text-ink">{g.title}</h1>
          <p className="mt-4 text-lg text-steel">{g.subtitle}</p>
          <ul className="mt-8 space-y-3">
            {g.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-signal p-1 text-white">{icons.check}</span>
                <span className="text-carbon">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3 text-center text-sm font-medium text-steel">Enter your email and we'll send the PDF</div>
          <LeadForm
            kind="guide"
            submitLabel="Email Me the Guide"
            showMessage={false}
          />
          <p className="mt-3 text-center text-xs text-steel">
            We'll email you the guide and occasional Houston signage tips. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
