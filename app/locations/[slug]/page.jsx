import Link from "next/link";
import { notFound } from "next/navigation";
import { getMarket, getMarketSlugs } from "@/data/markets";
import { getAllServices } from "@/data/services";
import { BUSINESS, SERVICE_AREAS } from "@/data/business";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import PhoneLink from "@/components/PhoneLink";
import Faq from "@/components/Faq";

export function generateStaticParams() {
  return getMarketSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const m = getMarket(slug);
  if (!m) return {};
  return {
    title: m.metaTitle,
    description: m.metaDescription,
    alternates: { canonical: `/locations/${slug}` },
    openGraph: {
      title: m.metaTitle,
      description: m.metaDescription,
      url: `${BUSINESS.url}/locations/${slug}`,
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const m = getMarket(slug);
  if (!m) notFound();

  const services = getAllServices();

  // LocalBusiness schema with THIS city first in areaServed (playbook Part 2.5).
  const areaServed = [m.cityState, ...SERVICE_AREAS.filter((a) => a !== m.cityState)];
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    url: `${BUSINESS.url}/locations/${slug}`,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    priceRange: BUSINESS.priceRange,
    areaServed: areaServed.map((name) => ({ "@type": "City", name })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <nav className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link> ·{" "}
            <Link href="/locations" className="hover:text-white">Service Areas</Link> ·{" "}
            <span className="text-white/80">{m.city}</span>
          </nav>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{m.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{m.intro}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/quote" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="answer-block">
          <p>{m.answer}</p>
        </div>

        <div className="prose-content">
          {m.sections.map((sec) => (
            <div key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.body.split(/\n\n+/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ))}
        </div>

        {m.faqs?.length > 0 && (
          <div className="mt-12">
            <Faq items={m.faqs} heading={`${m.city} sign FAQs`} />
          </div>
        )}

        <h2 className="mb-4 mt-12 text-2xl font-bold text-ink">Sign services in {m.city}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-sm border border-fog p-4 hover:border-ink">
              <span className="font-medium text-ink">{s.shortName}</span>
            </Link>
          ))}
        </div>

        {m.nearby?.length > 0 && (
          <p className="mt-8 text-sm text-steel">
            <span className="font-semibold text-ink">Nearby:</span> {m.nearby.join(" · ")}
          </p>
        )}

        <div className="mt-10 rounded-sm border border-fog bg-cloud p-6">
          <h3 className="text-lg font-bold text-ink">Get a free quote in {m.city}</h3>
          <p className="mt-1 text-sm text-steel">Written quote within one business day.</p>
          <div className="mt-4">
            <LeadForm kind="quote" submitLabel="Get My Free Quote" showSignType messageLabel={`Tell us about your ${m.city} sign project`} />
          </div>
        </div>
      </section>

      <CTASection title={`Need a sign in ${m.city}?`} />
    </main>
  );
}
