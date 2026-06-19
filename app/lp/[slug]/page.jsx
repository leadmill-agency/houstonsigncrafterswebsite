import { notFound } from "next/navigation";
import { getLanding, getLandingSlugs } from "@/data/landing";
import { BUSINESS } from "@/data/business";
import LeadForm from "@/components/LeadForm";
import PhoneLink from "@/components/PhoneLink";

export function generateStaticParams() {
  return getLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lp = getLanding(slug);
  if (!lp) return {};
  return {
    title: lp.headline,
    description: lp.subhead,
    // Campaign LPs are noindex so they don't compete with SEO service pages.
    robots: { index: false, follow: false },
    alternates: { canonical: `/lp/${slug}` },
    openGraph: { title: lp.headline, description: lp.subhead, url: `${BUSINESS.url}/lp/${slug}` },
  };
}

export default async function LandingPage({ params }) {
  const { slug } = await params;
  const lp = getLanding(slug);
  if (!lp) notFound();

  return (
    <main className="bg-ink text-white">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col justify-center">
          {lp.eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-signal">{lp.eyebrow}</p>}
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{lp.headline}</h1>
          <p className="mt-5 text-lg text-white/75">{lp.subhead}</p>
          <ul className="mt-8 space-y-3">
            {lp.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-[7px] h-2 w-2 flex-shrink-0 bg-signal" aria-hidden="true" />
                <span className="text-white/90">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-sm text-white/60">
            Prefer to call? <PhoneLink className="font-semibold text-white" showIcon={false} label={BUSINESS.phone} /> · {BUSINESS.hoursLabel}
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full">
            <div className="mb-3 text-center text-sm font-medium text-white/70">Get your free quote</div>
            <LeadForm kind={lp.formKind || "quote"} submitLabel={lp.cta || "Get My Free Quote"} showSignType messageLabel="Project details (size, location, deadline)" />
          </div>
        </div>
      </section>
    </main>
  );
}
