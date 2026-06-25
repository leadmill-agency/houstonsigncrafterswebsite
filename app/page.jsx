import Link from "next/link";
import Image from "next/image";
import { getAllServices } from "@/data/services";
import { getAllMarkets } from "@/data/markets";
import { BUSINESS } from "@/data/business";
import { HOME_FAQS } from "@/data/faqs";
import PhoneLink from "@/components/PhoneLink";
import TextLink from "@/components/TextLink";
import LeadForm from "@/components/LeadForm";
import TrustBar from "@/components/TrustBar";
import PortfolioGallery from "@/components/PortfolioGallery";
import Faq from "@/components/Faq";

const HERO_IMG =
  "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?q=80&w=1920&auto=format&fit=crop";

const WHAT_YOU_GET = [
  { t: "A real design mockup", b: "Your sign rendered on a photo of your actual building — so you see it before you commit to anything." },
  { t: "UL-certified fabrication", b: "Built in our Houston shop with weather-rated materials and LEDs made to take the Gulf Coast heat." },
  { t: "Permits, handled", b: "We pull the City of Houston permits and check your landlord's sign criteria so it passes inspection the first time." },
  { t: "Licensed installation", b: "Our own crew mounts it, wires it, and cleans up. No subcontractor roulette." },
  { t: "A 5-year warranty", b: "Materials and workmanship, lighting included. If something fails, you call us — the people who built it." },
];

const STEPS = [
  { title: "Send us what you've got", body: "A photo of your storefront and your logo is enough to start. We'll tell you what'll work — and what the city and your landlord will let you put up." },
  { title: "We mock it up", body: "You see the sign on your own building before we cut a thing. Hate it? Change it. It's just pixels at this stage." },
  { title: "We build it & permit it", body: "Fabrication starts in our shop while we handle the City paperwork. No surprise “that's not to code” after the money's spent." },
  { title: "We put it up", body: "Our licensed crew installs it, wires it, and makes sure it passes inspection. Then it's yours — warrantied for five years." },
];

const PROOF = ["UL-certified fabrication", "Our own install crew", "Permits handled in-house", "5-year warranty"];

export default function HomePage() {
  const services = getAllServices();
  const markets = getAllMarkets();
  const { team, offer, stats } = BUSINESS;

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image src={HERO_IMG} alt="Metal fabrication — grinding and welding, the kind of shop work behind a custom-built sign" fill priority sizes="100vw" className="absolute inset-0 -z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/90 to-ink/65" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-3 text-signal">Houston Sign Company</p>
            <h1 className="text-5xl font-bold leading-[0.98] sm:text-6xl">Custom signs, built in our Houston shop.</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Channel letters, monument signs, vehicle wraps. We design them, weld and wire them ourselves,
              pull the permits, and hang them. One crew, one number to call, and a 5-year warranty bolted to
              every job.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="btn btn-primary">Get a Free Quote</Link>
              <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
            </div>
            <p className="mt-3 text-sm text-white/65">
              Prefer to text? <TextLink className="font-semibold text-white underline underline-offset-2" label="Text us" /> · {offer.label}: {offer.detail}
            </p>
            <TrustBar tone="dark" className="mt-7" />
          </div>

          <div className="flex items-center">
            <div className="w-full">
              <div className="eyebrow mb-3 text-center text-white/70">Free quote in 1 business day</div>
              <LeadForm kind="quote" submitLabel="Get My Free Quote" showSignType showMessage={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Who you'll talk to — the human */}
      <section className="border-b border-fog bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cloud">
            <Image src={team.photo} alt={team.name ? `${team.name}, ${team.title} at Houston Sign Crafters` : "The Houston Sign Crafters crew and work truck on a job site"} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow text-signal-600">Who you'll talk to</p>
            <h2 className="mt-1 text-4xl font-bold text-ink">A real sign maker picks up — not a call center.</h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              {team.name
                ? `Most days that's ${team.name}, our ${team.title.toLowerCase()}, who ${team.note}.`
                : "You'll talk to someone on our crew who actually builds signs for a living."}{" "}
              No phone tree, no overseas script, no “let me transfer you.” You tell us what you've got, and we
              tell you straight: what'll work, what it'll run, and how fast we can get it up.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              We're a Houston shop — the same people who quote your job design it, build it, and climb the
              ladder on install day. That's on purpose.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PhoneLink className="btn btn-primary" label={`Call ${BUSINESS.phone}`} />
              <TextLink className="btn btn-outline-dark" label="Text us" />
            </div>
          </div>
        </div>
      </section>

      {/* The work — image-only gallery */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-signal-600">Straight from the shop</p>
              <h2 className="mt-1 text-4xl font-bold text-ink">See what we actually make</h2>
              <p className="mt-2 max-w-xl text-steel">Real signs we built and installed for Houston businesses — channel letters, monument signs, cabinet signs, wraps, and more.</p>
            </div>
            <Link href="/portfolio" className="font-display text-sm font-semibold uppercase tracking-wide text-signal-600 hover:text-ink">See all our work →</Link>
          </div>
          <PortfolioGallery limit={8} />
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="font-display text-sm font-semibold uppercase tracking-wide text-ink">Looking for something specific?</span>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-sm border border-fog bg-white px-3.5 py-1.5 text-sm text-steel hover:border-ink hover:text-ink">
                {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow text-signal-600">No surprises</p>
        <h2 className="mt-1 text-4xl font-bold text-ink">What you actually get</h2>
        <p className="mt-2 max-w-xl text-steel">Every project includes the whole thing, start to finish. Here's what that means.</p>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_YOU_GET.map((item, i) => (
            <div key={item.t} className="border-t-2 border-ink pt-4">
              <span className="font-display text-2xl font-bold text-signal-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 text-xl font-semibold text-ink">{item.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-steel">{item.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What a sign costs */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <p className="eyebrow text-signal">Real talk</p>
          <h2 className="mt-1 text-4xl font-bold sm:text-5xl">What does a sign cost?</h2>
          <div className="mt-6 grid gap-6 text-lg leading-relaxed text-white/80 md:grid-cols-2">
            <div>
              <p>Straight answer: it depends — and anybody who quotes you a flat number off a website is guessing. What moves the price:</p>
              <ul className="mt-4 space-y-2">
                {[
                  "How big it is and how many letters",
                  "Lit or not — and how it's lit (front-lit, halo, etc.)",
                  "How it mounts to your building",
                  "Whether it needs a permit or engineering",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2.5">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 bg-signal" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p>As a rough idea, a small set of dimensional letters can start in the few-hundred-to-low-thousands range, while a large illuminated monument sign runs several thousand and up.</p>
              <p className="mt-4">Here's how we actually do it: send a photo of your storefront and a rough size. We pull up your address, factor in permitting and installation, and email you an <span className="text-white">itemized quote — usually within one business day.</span> No “come in for a consultation,” no runaround.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/quote" className="btn btn-primary">Get My Free Quote</Link>
                <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us — manufacturing positioning */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">Most “sign companies” send the work out. We don't.</h2>
        <div className="mt-6 grid gap-6 text-lg leading-relaxed text-steel md:grid-cols-2">
          <p>A lot of shops are really just middlemen. They take your logo, email it to a wholesale factory a few states away, and show up weeks later to bolt on whatever comes off the truck.</p>
          <p>We're an actual shop. The cutting, welding, wiring, painting, and printing all happen here in Houston — done by the same people who answer your call and climb the ladder on install day. If something's off, there's nobody to point at but us. That's the point.</p>
        </div>
        <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
          {PROOF.map((p) => (
            <span key={p} className="inline-flex items-center gap-2.5 font-display text-sm font-semibold uppercase tracking-wide text-ink">
              <span className="h-2.5 w-2.5 bg-signal" aria-hidden="true" />
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="eyebrow text-signal-600">Start to finish</p>
          <h2 className="mt-1 text-4xl font-bold text-ink">How a sign gets made</h2>
          <p className="mt-2 max-w-xl text-steel">No mystery, no runaround. Here's the whole thing.</p>
          <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-4">
                <span className="font-display text-3xl font-bold text-signal-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service areas */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-bold text-ink">We cover Houston &amp; the suburbs</h2>
        <p className="mt-2 text-steel">Based in Houston, on the road across the metro most days.</p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {markets.map((m) => (
            <Link key={m.slug} href={`/locations/${m.slug}`} className="rounded-sm border border-fog bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink">
              {m.city}
            </Link>
          ))}
          <Link href="/locations" className="rounded-sm bg-ink px-4 py-2 text-sm font-semibold text-white">All areas →</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-fog bg-cloud">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="mb-8 text-4xl font-bold text-ink">Questions we get a lot</h2>
          <Faq items={HOME_FAQS} heading={null} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-signal">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Got a wall that needs a sign?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Send a photo and a rough size. You'll have a real quote in your inbox within one business day —
            an actual number, not a runaround.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/quote" className="btn bg-white text-signal-600 hover:bg-white/90">Get a Free Quote</Link>
            <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
            <TextLink className="btn btn-outline-light" label="Text Us" />
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/80">
            We only take a handful of new installs a week — get your spot.
          </p>
        </div>
      </section>
    </main>
  );
}
