import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, getServiceSlugs, getAllServices } from "@/data/services";
import { BUSINESS } from "@/data/business";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import PhoneLink from "@/components/PhoneLink";
import TextLink from "@/components/TextLink";
import OfferBadge from "@/components/OfferBadge";
import WhatYouGet from "@/components/WhatYouGet";
import CostCallout from "@/components/CostCallout";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${BUSINESS.url}/services/${slug}`,
      images: s.img ? [{ url: s.img }] : undefined,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const allServices = getAllServices();
  const related = (s.related || [])
    .map((r) => allServices.find((x) => x.slug === r))
    .filter(Boolean);

  // Service schema, tied to the site-wide LocalBusiness entity via provider @id.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    serviceType: s.name,
    provider: { "@type": "LocalBusiness", "@id": `${BUSINESS.url}/#business` },
    areaServed: { "@type": "City", name: "Houston, TX" },
    url: `${BUSINESS.url}/services/${slug}`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.url}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BUSINESS.url}/services` },
      { "@type": "ListItem", position: 3, name: s.name },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <nav className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link> ·{" "}
            <Link href="/services" className="hover:text-white">Services</Link> ·{" "}
            <span className="text-white/80">{s.shortName}</span>
          </nav>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{s.h1}</h1>
              <p className="mt-4 text-lg text-white/75">{s.heroSubtitle}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/quote" className="btn btn-primary">
                  Get a Free Quote
                </Link>
                <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
                <TextLink className="btn btn-outline-light" label="Text Us" />
              </div>
              <OfferBadge tone="dark" className="mt-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        {/* Answer-first block (AI Overview eligibility) */}
        <div className="answer-block">
          <p>{s.answer}</p>
        </div>

        <div className="prose-content">
          {s.sections.map((sec) => (
            <div key={sec.heading}>
              <h2>{sec.heading}</h2>
              <p>{sec.body}</p>
            </div>
          ))}
        </div>

      </section>

      <CostCallout />

      <WhatYouGet heading={`What you get with your ${s.shortName.toLowerCase()}`} />

      {/* On-page quote form */}
      <section className="mx-auto max-w-3xl px-4 pb-14 sm:px-6">
        <div className="rounded-sm border border-fog bg-cloud p-6 text-center md:p-8">
          <h2 className="text-2xl font-bold text-ink">Get a free quote for {s.shortName.toLowerCase()}</h2>
          <p className="mt-1 text-sm text-steel">Written quote within one business day. Permitting and installation included.</p>
          <div className="mt-5">
            <LeadForm kind="quote" submitLabel="Get My Free Quote" showSignType={false} messageLabel={`Tell us about your ${s.shortName.toLowerCase()} project`} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-14 sm:px-6">
        <Faq items={s.faqs} heading={`${s.shortName} — frequently asked questions`} />
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold text-ink">Related services</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="group flex flex-col rounded-sm border border-fog p-5">
                <h3 className="font-semibold text-ink group-hover:text-signal-600">{r.shortName}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-signal-600">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
