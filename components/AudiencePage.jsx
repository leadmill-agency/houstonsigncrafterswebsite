import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/data/business";
import { getPortfolio } from "@/data/portfolio";
import LeadForm from "@/components/LeadForm";
import PhoneLink from "@/components/PhoneLink";
import Faq from "@/components/Faq";

// Shared template for the buyer-type pages (/general-contractors,
// /property-managers, /franchise-signage) — data from data/audiences.js.
export default function AudiencePage({ audience }) {
  const portfolio = getPortfolio().filter((p) => audience.portfolioIds?.includes(p.id));

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
      { "@type": "ListItem", position: 2, name: audience.name, item: `${BUSINESS.url}/${audience.slug}` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <p className="eyebrow text-signal">{audience.eyebrow}</p>
          <h1 className="mt-1 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {audience.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{audience.intro}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/quote" className="btn btn-primary">Get a Quote in 1 Business Day</Link>
            <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="answer-block">
          <p>{audience.answer}</p>
        </div>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-bold text-ink">How we work with {audience.name.toLowerCase()}</h2>
          <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {audience.pains.map((item) => (
              <div key={item.h} className="border-t-2 border-ink pt-4">
                <h3 className="text-lg font-semibold text-ink">{item.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{item.p}</p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="mt-2 inline-block text-sm font-semibold text-signal-600 underline decoration-fog underline-offset-2 hover:decoration-signal"
                  >
                    {item.link.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {portfolio.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-bold text-ink">Relevant work</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {portfolio.map((p) => (
              <div key={p.id} className="img-outline relative aspect-[4/3] overflow-hidden rounded-sm bg-cloud">
                <Image
                  src={p.imageSrc}
                  alt={`${p.signType} for ${p.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                  style={p.objectPosition ? { objectPosition: p.objectPosition } : undefined}
                />
              </div>
            ))}
          </div>
          <Link href="/portfolio" className="mt-5 inline-block font-semibold text-signal-600 hover:underline">
            See the full portfolio →
          </Link>
        </section>
      )}

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="mb-6 text-3xl font-bold text-ink">Common questions</h2>
          <Faq items={audience.faqs} heading={null} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Start with a photo and an address</h2>
        <p className="mt-2 text-steel">
          Itemized written quote — design, permit, build, install — within one business day.
        </p>
        <div className="mt-6">
          <LeadForm kind="quote" submitLabel="Get My Quote" />
        </div>
      </section>
    </main>
  );
}
