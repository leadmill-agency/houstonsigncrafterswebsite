import Image from "next/image";
import { notFound } from "next/navigation";
import { getLanding, getLandingSlugs } from "@/data/landing";
import { BUSINESS } from "@/data/business";
import LeadForm from "@/components/LeadForm";
import TrustBar from "@/components/TrustBar";
import OfferBadge from "@/components/OfferBadge";
import PortfolioGallery from "@/components/PortfolioGallery";
import PhoneLink from "@/components/PhoneLink";
import TextLink from "@/components/TextLink";

const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?q=80&w=1920&auto=format&fit=crop";

const WHAT_YOU_GET = [
  { t: "Design mockup", b: "See your sign on your own building before you pay a dime." },
  { t: "UL-certified build", b: "Made in our Houston shop with weather-rated materials and LEDs." },
  { t: "Permits handled", b: "We pull the City permits and check your landlord's sign criteria." },
  { t: "Licensed install", b: "Our own crew mounts it, wires it, and backs it for 5 years." },
];

const STEPS = [
  { t: "Send a photo", b: "Your storefront and logo is enough. We'll tell you what'll work." },
  { t: "Get your quote", b: "An itemized, written quote in one business day, no runaround." },
  { t: "We build & install", b: "We fabricate, permit, and put it up. Then it's yours, warrantied." },
];

export function generateStaticParams() {
  return getLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lp = getLanding(slug);
  if (!lp) return {};
  return {
    title: lp.metaTitle || lp.headline,
    description: lp.metaDescription || lp.subhead,
    // Ad landing pages stay out of the index — they're not for organic search.
    robots: { index: false, follow: false },
    alternates: { canonical: `/lp/${slug}` },
  };
}

export default async function LandingPage({ params }) {
  const { slug } = await params;
  const lp = getLanding(slug);
  if (!lp) notFound();
  const heroImg = lp.heroImage || HERO_FALLBACK;

  return (
    <main className="bg-white">
      {/* Minimal header — logo + call, no nav links */}
      <header className="flex items-center justify-between gap-3 border-b border-fog px-4 py-3 sm:px-6">
        <Image src="/logo-light.png" alt="Houston Sign Crafters" width={1336} height={271} priority className="h-8 w-auto" />
        <div className="flex items-center gap-2">
          <PhoneLink className="btn btn-primary btn-sm" />
          <span className="hidden sm:inline-flex">
            <TextLink className="btn btn-outline-dark btn-sm" label="Text Us" />
          </span>
        </div>
      </header>

      {/* Hero + form */}
      <section id="top" className="relative isolate overflow-hidden bg-ink text-white">
        <Image src={heroImg} alt="Custom sign installed for a Houston business" fill priority sizes="100vw" className="absolute inset-0 -z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/90 to-ink/70" />

        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-3 text-signal">{lp.eyebrow}</p>
            <h1 className="text-4xl font-bold leading-[1.02] sm:text-5xl">{lp.headline}</h1>
            <p className="mt-4 max-w-xl text-lg text-white/80">{lp.subhead}</p>
            <OfferBadge tone="dark" className="mt-5 self-start" />
            <ul className="mt-5 space-y-2">
              {lp.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-white/90">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 bg-signal" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <TrustBar tone="dark" className="mt-6" />
          </div>

          <div className="flex items-center">
            <div className="w-full">
              <div className="eyebrow mb-3 text-center text-white/80">Free quote in 1 business day</div>
              <LeadForm kind={lp.formKind || "quote"} submitLabel={lp.cta || "Get My Free Quote"} showSignType showMessage={false} />
              <p className="mt-3 text-center text-sm text-white/70">
                Or <PhoneLink className="font-semibold text-white underline underline-offset-2" showIcon={false} /> · <TextLink className="font-semibold text-white underline underline-offset-2" label="text us" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-fog bg-ink">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-4 py-4 sm:px-6">
          {["In-house fabrication", "Permits handled", "Licensed install", "5-Year Warranty", "UL-Certified"].map((t) => (
            <span key={t} className="inline-flex items-center gap-2.5 font-display text-xs font-semibold uppercase tracking-wide text-white">
              <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* The work */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="eyebrow text-signal-600">Recent work</p>
        <h2 className="mt-1 text-3xl font-bold text-ink">Signs we've built for Houston businesses</h2>
        <div className="mt-8">
          <PortfolioGallery limit={6} />
        </div>
      </section>

      {/* What you get */}
      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-bold text-ink">What you get</h2>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_YOU_GET.map((item, i) => (
              <div key={item.t} className="border-t-2 border-ink pt-4">
                <span className="font-display text-2xl font-bold text-signal-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-lg font-semibold text-ink">{item.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel">{item.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-bold text-ink">How it works</h2>
        <ol className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.t} className="border-t-2 border-ink pt-4">
              <span className="font-display text-3xl font-bold text-signal-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 text-lg font-semibold text-ink">{s.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-steel">{s.b}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Final CTA */}
      <section className="bg-signal">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready for a sign that gets noticed?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Send a photo and a rough size. You'll have a real quote in your inbox within one business
            day. {BUSINESS.offer?.label ? `Mention this ad for ${BUSINESS.offer.label.toLowerCase()}.` : ""}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#top" className="btn bg-white text-signal-600 hover:bg-white/90">Get My Free Quote</a>
            <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
            <TextLink className="btn btn-outline-light" label="Text Us" />
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/80">
            We only take a handful of new installs a week. Get your spot.
          </p>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-ink text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row sm:px-6">
          <span>© {new Date().getFullYear()} {BUSINESS.legalName} · Houston, TX</span>
          <span className="flex items-center gap-4">
            <a href={BUSINESS.phoneHref} className="font-semibold text-white">{BUSINESS.phone}</a>
            <span className="text-white/50">{BUSINESS.hoursLabel}</span>
          </span>
        </div>
      </footer>
    </main>
  );
}
