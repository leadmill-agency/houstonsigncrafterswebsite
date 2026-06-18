import Link from "next/link";
import Image from "next/image";
import { getAllServices } from "@/data/services";
import { getAllMarkets } from "@/data/markets";
import { BUSINESS } from "@/data/business";
import { HOME_FAQS } from "@/data/faqs";
import PhoneLink from "@/components/PhoneLink";
import LeadForm from "@/components/LeadForm";
import TrustBar from "@/components/TrustBar";
import Faq from "@/components/Faq";
import icons from "@/components/icons";

const VALUE_PROPS = [
  { icon: "bolt", title: "Free quote in 1 business day", body: "Send us your project and get a clear, written quote fast — no waiting around." },
  { icon: "shield", title: "Permitting handled for you", body: "We pull City of Houston permits and confirm code so your install passes the first time." },
  { icon: "check", title: "5-year warranty", body: "Every sign is backed by a 5-year warranty on materials and workmanship." },
  { icon: "pencil", title: "In-house design & install", body: "Design, fabrication, and licensed installation under one roof — one team, start to finish." },
];

export default function HomePage() {
  const services = getAllServices();
  const markets = getAllMarkets();

  return (
    <main>
      {/* Hero — real installed sign behind a dark overlay (design review) */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/portfolio/elite.jpg"
          alt="Custom dimensional channel-letter sign installed on a Houston storefront"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/70" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-signal">Houston Sign Company</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Custom signs that turn Houston businesses into landmarks
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Channel letters, monument signs &amp; vehicle wraps — designed, built, and installed
              in-house right here in Houston. Free quote in 1 business day.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-signal-600">
                Request Your Free Quote →
              </Link>
              <PhoneLink className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10" label={`Call ${BUSINESS.phone}`} />
            </div>
            <TrustBar tone="dark" className="mt-6" />
          </div>

          <div className="flex items-center">
            <div className="w-full">
              <div className="mb-3 text-center text-sm font-medium text-white/80">Get your free quote in 1 business day</div>
              <LeadForm kind="quote" submitLabel="Get My Free Quote" showSignType showMessage={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-fog bg-cloud">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {VALUE_PROPS.map((v) => (
            <div key={v.title} className="flex flex-col">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink p-2.5 text-signal">{icons[v.icon]}</span>
              <h3 className="font-semibold text-ink">{v.title}</h3>
              <p className="mt-1 text-sm text-steel">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-ink">Signs we make</h2>
          <p className="mt-2 text-steel">From storefront lettering to fleet wraps — all designed and built in Houston.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col rounded-xl border border-fog p-6 transition-shadow hover:shadow-md">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cloud p-2.5 text-ink">{icons[s.icon] || icons.bolt}</span>
              <h3 className="font-semibold text-ink group-hover:text-signal-600">{s.name}</h3>
              <p className="mt-1 flex-1 text-sm text-steel">{s.heroSubtitle}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-signal-600">
                Learn more <span className="h-4 w-4">{icons.arrowRight}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-ink">Serving Houston &amp; surrounding areas</h2>
            <p className="mt-2 text-steel">In-house design, permitting, and installation across the metro.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {markets.map((m) => (
              <Link key={m.slug} href={`/locations/${m.slug}`} className="rounded-full border border-fog bg-white px-4 py-2 text-sm font-medium text-ink hover:border-ink">
                {m.city}
              </Link>
            ))}
            <Link href="/locations" className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white">All service areas</Link>
          </div>
        </div>
      </section>

      {/* Lead magnets */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          <PromoCard href="/quote" title="Instant Quote" body="Tell us about your sign and get a written quote within one business day." cta="Start my quote" />
          <PromoCard href="/free-mockup" title="Free Design Mockup" body="See your sign on your building before you commit. Free, no obligation." cta="Get my mockup" />
          <PromoCard href="/guides/sign-permitting-checklist" title="Houston Sign Permitting Checklist" body="A free guide to getting your business sign approved in Houston the first time." cta="Download the guide" />
        </div>
      </section>

      {/* FAQ — FAQPage schema feeds rich results + AI answers */}
      <section className="border-t border-fog bg-cloud">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="mb-6 text-center text-3xl font-bold text-ink">Houston custom sign FAQs</h2>
          <Faq items={HOME_FAQS} heading={null} />
        </div>
      </section>
    </main>
  );
}

function PromoCard({ href, title, body, cta }) {
  return (
    <Link href={href} className="group flex flex-col rounded-xl border border-fog bg-cloud p-6 transition-shadow hover:shadow-md">
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-steel">{body}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-signal-600">
        {cta} <span className="h-4 w-4">{icons.arrowRight}</span>
      </span>
    </Link>
  );
}
