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
import OfferBadge from "@/components/OfferBadge";
import CostCallout from "@/components/CostCallout";
import ReviewedBy from "@/components/ReviewedBy";
import FoldedSections from "@/components/FoldedSections";
import RichText from "@/components/RichText";
import { getPricingRow } from "@/data/pricing";

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

// A plain facts table. Row rules are the only lines on these pages on purpose:
// a table needs them to be read across.
function FactsTable({ columns, rows }) {
  const wide = rows[0].length > 2;
  return (
    <table className="mt-6 w-full border-collapse text-left text-[15px]">
      {columns && (
        <thead className="hidden sm:table-header-group">
          <tr className="border-b-2 border-ink">
            {columns.map((c, i) => (
              <th key={i} scope="col" className="py-2.5 pr-5 font-semibold text-ink">{c}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((r) => (
          // On a phone each row stacks: label, then its cells underneath.
          <tr key={r[0]} className="block border-b border-fog py-3 align-top sm:table-row sm:py-0">
            <th scope="row" className={`block pr-5 font-semibold text-ink sm:table-cell sm:py-3 ${wide ? "" : "sm:w-[34%]"}`}>{r[0]}</th>
            {r.slice(1).map((cell, i) => (
              <td key={i} className={`block pr-5 pt-1 leading-relaxed text-steel sm:table-cell sm:py-3 ${wide && i === 0 ? "font-medium text-ink sm:whitespace-nowrap" : ""}`}>
                {/* The column name comes back as a prefix when the header row is hidden. */}
                {columns && wide && i > 0 && columns[i + 1] && <span className="font-medium text-ink sm:hidden">{columns[i + 1]}: </span>}
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Small print under a table. Accepts [label](/path) links.
const linked = "[&_a]:font-medium [&_a]:text-signal-600 [&_a]:underline [&_a]:underline-offset-2";
function Note({ text }) {
  if (!text) return null;
  return (
    <div className={`mt-4 text-sm leading-relaxed text-steel ${linked}`}>
      <RichText text={text} />
    </div>
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
  // `jobs` (with a fact per job from the permit drawing) wins over the older
  // `portfolioIds` list.
  const find = (id) => PORTFOLIO.find((p) => p.id === id);
  const projects = s.jobs
    ? s.jobs.items.map((j) => ({ ...find(j.id), fact: j.fact })).filter((p) => p.id)
    : (s.portfolioIds || []).map(find).filter(Boolean);
  const options = (s.options?.items || []).map((o) => ({ ...o, photo: find(o.id) })).filter((o) => o.photo);
  const priceRow = getPricingRow(slug);

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
    // Published price range (data/pricing.js) and the job photos shown on the page.
    ...(priceRow && {
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: priceRow.low,
        highPrice: Number(String(priceRow.high).replace(/[^0-9]/g, "")),
      },
    }),
    ...(projects.length > 0 && {
      image: projects.map((p) => ({
        "@type": "ImageObject",
        contentUrl: `${BUSINESS.url}${p.imageSrc}`,
        name: `${p.signType} for ${p.title} in ${p.location}`,
      })),
    }),
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
          <nav className="mb-4 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Home</Link> ·{" "}
            <Link href="/services" className="hover:text-white">Services</Link> ·{" "}
            <span className="text-white/80">{s.shortName}</span>
          </nav>
          {/* Same split as the homepage hero: pitch left, form right, so nobody
              has to scroll to ask for a quote (owner request 2026-08-31). */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{s.h1}</h1>
              <p className="mt-4 text-lg text-white/80">{s.heroSubtitle}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <PhoneLink className="btn btn-primary btn-lg" label={`Call ${BUSINESS.phone}`} />
              </div>
              <OfferBadge tone="dark" className="mt-5" />
            </div>
            <div className="w-full">
              <LeadForm kind="quote" submitLabel="Get My Free Quote" messageLabel={`Tell us about your ${s.shortName.toLowerCase()} project`} heading="Free design mockup in 1 business day" subheading="After a free site survey, you get mockups with your sign's dimensions and a quote within one business day." />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-4 pb-10 pt-14 sm:px-6">
        {/* Answer-first block (AI Overview eligibility) */}
        <div className="answer-block">
          <p>{s.answer}</p>
        </div>
        <ReviewedBy />
      </section>

      {/* Proof and specifics come before the long answers (depth pass 2026-11-25):
          a photo per option, published prices, named jobs, specs, rules, buyers. */}
      {options.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2 className="text-3xl font-bold text-ink">{s.options.heading}</h2>
          <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {options.map((o) => (
              <figure key={o.name}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cloud">
                  <Image
                    src={o.photo.imageSrc}
                    alt={`${o.name}: ${o.photo.signType} for ${o.photo.title} in ${o.photo.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    style={o.photo.objectPosition ? { objectPosition: o.photo.objectPosition } : undefined}
                  />
                </div>
                <figcaption className="mt-3">
                  <h3 className="text-lg font-semibold text-ink">{o.name}</h3>
                  <div className={`mt-1 text-sm leading-relaxed text-steel ${linked}`}>
                    <RichText text={o.body} />
                  </div>
                  <p className="mt-2 text-xs text-steel">Shown: {o.photo.title}, {o.photo.location}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {s.priceTable && (
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
          <h2 className="text-3xl font-bold text-ink">{s.priceTable.heading}</h2>
          <FactsTable columns={s.priceTable.columns} rows={s.priceTable.rows} />
          <Note text={s.priceTable.note} />
        </section>
      )}

      {projects.length > 0 && (s.jobs || !s.options) && (
        <section className="bg-cloud">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-3xl font-bold text-ink">{s.jobs?.heading || `Recent ${s.shortName.toLowerCase()} installs`}</h2>
            <div className={`mt-8 grid gap-x-5 gap-y-8 sm:grid-cols-2 ${projects.length > 2 ? "lg:grid-cols-3" : ""}`}>
              {projects.map((p) => (
                <figure key={p.id}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-white">
                    <Image
                      src={p.imageSrc}
                      alt={`${p.title}: ${p.signType} in ${p.location}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      style={p.objectPosition ? { objectPosition: p.objectPosition } : undefined}
                    />
                  </div>
                  <figcaption className="mt-3">
                    <span className="block font-semibold text-ink">{p.title}</span>
                    <span className="block text-sm text-steel">{p.signType} · {p.location}</span>
                    {p.fact && <span className="mt-1.5 block text-sm leading-relaxed text-carbon">{p.fact}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-8">
              <Link href="/portfolio" className="font-semibold text-signal-600 underline underline-offset-2 hover:text-ink">
                See more of our work
              </Link>
            </p>
          </div>
        </section>
      )}

      {(s.specs || s.rules) && (
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          {s.specs && (
            <div>
              <h2 className="text-3xl font-bold text-ink">{s.specs.heading}</h2>
              <FactsTable rows={s.specs.rows} />
              <Note text={s.specs.note} />
            </div>
          )}
          {s.rules && (
            <div className={s.specs ? "mt-16" : ""}>
              <h2 className="text-3xl font-bold text-ink">{s.rules.heading}</h2>
              <FactsTable columns={s.rules.columns} rows={s.rules.rows} />
              <Note text={s.rules.note} />
            </div>
          )}
        </section>
      )}

      {s.buyers && (
        <section className="bg-cloud">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="text-3xl font-bold text-ink">{s.buyers.heading}</h2>
            <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {s.buyers.items.map((b) => (
                <div key={b.who}>
                  <h3 className="text-lg font-semibold text-ink">{b.who}</h3>
                  <div className={`mt-1.5 text-sm leading-relaxed text-steel ${linked}`}>
                    <RichText text={b.body} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The long answers. First sections open, the rest fold; all of it stays in the HTML. */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <FoldedSections sections={s.sections} open={s.options ? 3 : 4} topic={s.shortName.toLowerCase()} />
      </section>

      {/* Per-service process timeline */}
      {s.process?.length > 0 && (
        <section className="bg-cloud">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-3xl font-bold text-ink">How it works, start to finish</h2>
            <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {s.process.map((step) => (
                <div key={step.t} className="">
                  <h3 className="text-lg font-semibold text-ink">{step.t}</h3>
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
          <blockquote>
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
        <div className="text-center">
          <h2 className="text-2xl font-bold text-ink">Get a free quote for {s.shortName.toLowerCase()}</h2>
          <p className="mt-1 text-sm text-steel">Written quote within one business day. Permitting and installation included.</p>
          <div className="mt-5">
            <LeadForm kind="quote" submitLabel="Get My Free Quote" showSignType={false} messageLabel={`Tell us about your ${s.shortName.toLowerCase()} project`} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-14 sm:px-6">
        <Faq items={s.faqs} heading={`${s.shortName}: frequently asked questions`} initialVisible={6} />
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold text-ink">Related services</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="group flex flex-col rounded-sm bg-white p-5 hover:bg-cloud">
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
