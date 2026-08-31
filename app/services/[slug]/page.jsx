import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getService, getServiceSlugs, getAllServices } from "@/data/services";
import { BUSINESS } from "@/data/business";
import PORTFOLIO from "@/data/portfolio";
import { TESTIMONIALS } from "@/data/testimonials";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import PhoneLink from "@/components/PhoneLink";
import TextLink from "@/components/TextLink";
import OfferBadge from "@/components/OfferBadge";
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

// Renders a section body string, turning [label](/path) markdown links into
// real internal links. Internal paths only; anything else renders as text.
function BodyText({ text }) {
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

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const allServices = getAllServices();
  const related = (s.related || [])
    .map((r) => allServices.find((x) => x.slug === r))
    .filter(Boolean);

  // Real installs of this sign type (data/portfolio.js — never placeholders).
  const projects = (s.portfolioIds || [])
    .map((id) => PORTFOLIO.find((p) => p.id === id))
    .filter(Boolean);

  const review = Number.isInteger(s.testimonialIndex) ? TESTIMONIALS[s.testimonialIndex] : null;

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
          {/* Same split as the homepage hero: pitch left, form right, so nobody
              has to scroll to ask for a quote (owner request 2026-08-31). */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{s.h1}</h1>
              <p className="mt-4 text-lg text-white/75">{s.heroSubtitle}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
                <TextLink className="btn btn-outline-light" label="Text Us" />
              </div>
              <OfferBadge tone="dark" className="mt-5" />
            </div>
            <div className="w-full">
              <div className="eyebrow mb-3 text-center text-white/70">Free quote in 1 business day</div>
              <LeadForm kind="quote" submitLabel="Get My Free Quote" messageLabel={`Tell us about your ${s.shortName.toLowerCase()} project`} />
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
              <BodyText text={sec.body} />
            </div>
          ))}
        </div>
      </section>

      {/* Real installs of this sign type */}
      {projects.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
          <h2 className="text-3xl font-bold text-ink">Recent {s.shortName.toLowerCase()} installs</h2>
          <div className={`mt-8 grid gap-5 sm:grid-cols-2 ${projects.length > 2 ? "lg:grid-cols-3" : ""}`}>
            {projects.map((p) => (
              <figure key={p.id} className="img-outline overflow-hidden rounded-sm border border-fog bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.imageSrc}
                    alt={`${p.title}: ${p.signType} in ${p.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    style={p.objectPosition ? { objectPosition: p.objectPosition } : undefined}
                  />
                </div>
                <figcaption className="px-4 py-3">
                  <span className="block font-semibold text-ink">{p.title}</span>
                  <span className="block text-sm text-steel">{p.signType} · {p.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5">
            <Link href="/portfolio" className="font-semibold text-signal-600 underline underline-offset-2 hover:text-ink">
              See more of our work
            </Link>
          </p>
        </section>
      )}

      {/* Per-service process timeline */}
      {s.process?.length > 0 && (
        <section className="border-y border-fog bg-cloud">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-3xl font-bold text-ink">How it works, start to finish</h2>
            <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {s.process.map((step, i) => (
                <div key={step.t} className="border-t-2 border-ink pt-4">
                  <span className="font-display text-2xl font-bold text-signal-600">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 text-lg font-semibold text-ink">{step.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel">{step.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CostCallout slug={slug} />

      {/* One real Google review, matched to this service */}
      {review && (
        <section className="mx-auto max-w-3xl px-4 pt-14 sm:px-6">
          <blockquote className="border-l-4 border-signal bg-white py-1 pl-6">
            <div className="flex gap-0.5 text-signal" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                </svg>
              ))}
            </div>
            <p className="mt-3 text-lg leading-relaxed text-ink">"{review.quote}"</p>
            <footer className="mt-3 text-sm text-steel">
              <span className="font-semibold text-ink">{review.name}</span> · {review.platform} review
            </footer>
          </blockquote>
        </section>
      )}

      {/* On-page quote form */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
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
        <Faq items={s.faqs} heading={`${s.shortName}: frequently asked questions`} />
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
