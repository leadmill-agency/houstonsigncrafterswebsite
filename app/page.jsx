import Link from "next/link";
import Image from "next/image";
import { getAllServices } from "@/data/services";
import { getAllMarkets } from "@/data/markets";
import { BUSINESS } from "@/data/business";
import { HOME_FAQS } from "@/data/faqs";
import PhoneLink from "@/components/PhoneLink";
import LeadForm from "@/components/LeadForm";
import TrustBar from "@/components/TrustBar";
import PortfolioGallery from "@/components/PortfolioGallery";
import Faq from "@/components/Faq";
import icons from "@/components/icons";

const HERO_IMG =
  "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?q=80&w=1920&auto=format&fit=crop";

const STEPS = [
  {
    title: "Send us what you've got",
    body: "A photo of your storefront and your logo is enough to start. We'll tell you what'll actually work — and what the city and your landlord will let you put up.",
  },
  {
    title: "We mock it up",
    body: "You see the sign on your own building before we cut a thing. Hate it? Change it. It's just pixels at this stage.",
  },
  {
    title: "We build it and pull the permits",
    body: "Fabrication starts in our shop while we handle the City paperwork. No surprise “that's not to code” after the money's spent.",
  },
  {
    title: "We put it up",
    body: "Our own licensed crew installs it, wires it, and makes sure it passes inspection. Then it's yours — warrantied for five years.",
  },
];

export default function HomePage() {
  const services = getAllServices();
  const markets = getAllMarkets();

  return (
    <main>
      {/* Hero — fabrication shot, manufacturing positioning */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image src={HERO_IMG} alt="Metal fabrication — grinding and welding, the kind of shop work behind a custom-built sign" fill priority sizes="100vw" className="absolute inset-0 -z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/90 to-ink/70" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-signal">Houston Sign Company</p>
            <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl">Custom signs, built in our Houston shop.</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Channel letters, monument signs, vehicle wraps. We design them, weld and wire them ourselves,
              pull the permits, and hang them. One crew, one number to call, and a 5-year warranty bolted to
              every job.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-signal-600">
                Get a Free Quote →
              </Link>
              <PhoneLink className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10" label={`Call ${BUSINESS.phone}`} />
            </div>
            <TrustBar tone="dark" className="mt-6" />
          </div>

          <div className="flex items-center">
            <div className="w-full">
              <div className="mb-3 text-center text-sm font-medium text-white/80">Free quote in 1 business day</div>
              <LeadForm kind="quote" submitLabel="Get My Free Quote" showSignType showMessage={false} />
            </div>
          </div>
        </div>
      </section>

      {/* The work — gallery they can scan to see sign types */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-signal-600">Straight from the shop</p>
              <h2 className="mt-1 text-3xl font-bold text-ink">See what we actually make</h2>
              <p className="mt-2 max-w-xl text-steel">Real signs we built and installed for Houston businesses. Tap one to see the type and where it went up.</p>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-1 text-sm font-bold text-signal-600 hover:text-ink">
              See all our work <span className="h-4 w-4">{icons.arrowRight}</span>
            </Link>
          </div>

          <PortfolioGallery limit={6} />

          {/* Sign-type shortcuts → service pages */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-ink">Looking for something specific?</span>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-full border border-fog bg-white px-3.5 py-1.5 text-sm text-steel hover:border-ink hover:text-ink">
                {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing positioning */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Most "sign companies" send the work out. We don't.</h2>
          <div className="mt-5 grid gap-6 text-lg leading-relaxed text-white/80 md:grid-cols-2">
            <p>
              A lot of shops are really just middlemen. They take your logo, email it to a wholesale factory a
              few states away, and show up weeks later to bolt on whatever shows up on the truck.
            </p>
            <p>
              We're an actual shop. The cutting, welding, wiring, painting, and printing all happen here in
              Houston — done by the same people who answer your call and climb the ladder on install day. If
              something's off, there's nobody to point at but us. That's the point.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <span className="inline-flex items-center gap-2"><span className="h-4 w-4 text-signal">{icons.check}</span>UL-certified fabrication</span>
            <span className="inline-flex items-center gap-2"><span className="h-4 w-4 text-signal">{icons.check}</span>Our own licensed install crew</span>
            <span className="inline-flex items-center gap-2"><span className="h-4 w-4 text-signal">{icons.check}</span>Permits handled in-house</span>
            <span className="inline-flex items-center gap-2"><span className="h-4 w-4 text-signal">{icons.check}</span>5-year warranty</span>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-ink">How a sign gets made</h2>
        <p className="mt-2 max-w-xl text-steel">No mystery, no runaround. Here's the whole thing, start to finish.</p>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-fog p-6">
              <span className="font-mono text-2xl font-bold text-signal-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-semibold text-ink">{s.title}</h3>
              <p className="mt-1 text-sm text-steel">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Service areas */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">We cover Houston and the suburbs</h2>
          <p className="mt-2 text-steel">Based in Houston, on the road across the metro most days.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {markets.map((m) => (
              <Link key={m.slug} href={`/locations/${m.slug}`} className="rounded-full border border-fog bg-white px-4 py-2 text-sm font-medium text-ink hover:border-ink">
                {m.city}
              </Link>
            ))}
            <Link href="/locations" className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white">All service areas</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="mb-6 text-center text-3xl font-bold text-ink">Questions we get a lot</h2>
        <Faq items={HOME_FAQS} heading={null} />
      </section>

      {/* Final CTA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Got a wall that needs a sign?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            Send a photo and a rough size. You'll have a real quote in your inbox within one business day —
            an actual number, not a runaround.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/quote" className="inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-sm font-bold text-white hover:bg-signal-600">
              Get a Free Quote →
            </Link>
            <PhoneLink className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10" label={`Call ${BUSINESS.phone}`} />
          </div>
        </div>
      </section>
    </main>
  );
}
