import Link from "next/link";
import Image from "next/image";
import { getPortfolio } from "@/data/portfolio";
import { getAllServices } from "@/data/services";
import { BUSINESS } from "@/data/business";
import PortfolioGallery from "@/components/PortfolioGallery";
import PhoneLink from "@/components/PhoneLink";
import { getAllMarkets } from "@/data/markets";

const inlineLink = "font-medium text-ink underline decoration-fog underline-offset-2 hover:decoration-signal";

export const metadata = {
  title: "Commercial Sign Portfolio",
  description:
    "View commercial signs designed, fabricated, and installed by Houston Sign Crafters: channel letters, monument signs, cabinet signs, window vinyl, and more.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Commercial Sign Portfolio",
    description: "Recent commercial sign projects built and installed for Houston businesses.",
    url: `${BUSINESS.url}/portfolio`,
  },
};

const TRUST = [
  "Design-to-install service",
  "Houston-based team",
  "Permitting support",
  "Commercial sign fabrication",
  "5-year warranty",
];

const PROCESS = [
  { title: "Site visit or photo review", body: "We look at your storefront and dimensions, in person or from photos you send." },
  { title: "Design mockup", body: "We show your sign on your actual building so you can picture the result." },
  { title: "Quote & approval", body: "You get a clear written quote. Approve it and we schedule the work." },
  { title: "Permitting & fabrication", body: "We pull permits and build your sign in-house, on spec." },
  { title: "Installation", body: "Our licensed crew installs it cleanly and makes sure it passes inspection." },
];

export default function PortfolioPage() {
  const projects = getPortfolio();
  const services = getAllServices();
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const collage = (featured.length >= 3 ? featured : projects).slice(0, 4);
  const cityLinks = getAllMarkets().filter((m) => projects.some((p) => p.location === m.cityState));

  // ImageGallery schema referencing the real project photos.
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Commercial Sign Portfolio | Houston Sign Crafters",
    description: "Commercial signs designed, fabricated, and installed by Houston Sign Crafters.",
    url: `${BUSINESS.url}/portfolio`,
    about: { "@type": "LocalBusiness", "@id": `${BUSINESS.url}/#business` },
    hasPart: projects.map((p) => ({
      "@type": "ImageObject",
      name: `${p.signType}: ${p.title}`,
      contentUrl: `${BUSINESS.url}${p.imageSrc}`,
      description: p.description,
    })),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: `${BUSINESS.url}/portfolio` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Commercial Signs Built for Houston Businesses</h1>
            <p className="mt-5 text-lg text-white/80">
              Design, permitting, fabrication, and installation for storefronts, offices,
              restaurants, franchises, and commercial properties.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="btn btn-primary">
                Request My Quote
              </Link>
              <a href="#work" className="btn btn-outline-light">
                View Our Work
              </a>
            </div>
          </div>

          {/* Collage */}
          <div className="grid grid-cols-2 gap-3">
            {collage.map((p, i) => (
              <div key={p.id} className={`relative overflow-hidden rounded-sm ${i === 0 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image src={p.imageSrc} alt={`${p.signType} for ${p.title}`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" priority={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-4 py-4 sm:px-6">
          {TRUST.map((t) => (
            <span key={t} className="inline-flex items-center gap-2.5 text-sm font-semibold text-white">
              <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Featured work intro + grid */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-ink">Recent sign work</h2>
          <p className="mt-2 text-steel">
            {projects.length} signs we've built and installed for Houston-area businesses:{" "}
            <Link href="/services/channel-letters" className={inlineLink}>channel letter signs</Link>,{" "}
            <Link href="/services/monument-signs" className={inlineLink}>monument signs</Link>,{" "}
            <Link href="/services/pole-signs" className={inlineLink}>pylon signs</Link>, and{" "}
            <Link href="/services/storefront-signs" className={inlineLink}>storefront cabinet signs</Link>.
          </p>
          {/* Cities with a location page and at least one install in the portfolio. */}
          {cityLinks.length > 0 && (
            <p className="mt-2 text-steel">
              Most are in Houston. You can also see our work in{" "}
              {cityLinks.map((c, i) => (
                <span key={c.slug}>
                  {i > 0 && (i === cityLinks.length - 1 ? ", and " : ", ")}
                  <Link href={`/locations/${c.slug}`} className={inlineLink}>{c.city}</Link>
                </span>
              ))}
              .
            </p>
          )}
        </div>
        <PortfolioGallery />
      </section>

      {/* Sign types / capabilities */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-bold text-ink">Signs we can help with</h2>
            <p className="mt-2 text-steel">
              Not sure what type of sign you need? Send us a photo of your storefront and your logo and
              we'll help you figure out the right option.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white p-6 transition-colors hover:bg-cloud">
                <h3 className="font-display text-lg font-semibold text-ink group-hover:text-signal-600">{s.name}</h3>
                <p className="mt-1 text-sm text-steel">{s.heroSubtitle}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-signal-600">View →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-ink">How the process works</h2>
        <p className="mt-2 max-w-2xl text-steel">
          We keep it simple: review the site, create a mockup, finalize the quote, handle permitting
          and production, then install the sign.
        </p>
        <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((step) => (
            <li key={step.title} className="">
              <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-steel">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Final CTA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Need a sign for your business?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Send us your logo, storefront photo, and rough dimensions. We'll help you figure out the
            right sign type, design, and next step.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/quote" className="btn btn-primary">
              Request My Quote
            </Link>
            <PhoneLink className="btn btn-outline-light" />
          </div>
          <p className="mt-4 text-sm text-white/60">Serving Houston and surrounding areas.</p>
        </div>
      </section>
    </main>
  );
}
