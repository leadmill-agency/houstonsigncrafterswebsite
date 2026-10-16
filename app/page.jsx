import Link from "next/link";
import Image from "next/image";
import { getAllMarkets } from "@/data/markets";
import { BUSINESS } from "@/data/business";
import { HOME_FAQS } from "@/data/faqs";
import PhoneLink from "@/components/PhoneLink";
import ClientLogos from "@/components/ClientLogos";
import LeadForm from "@/components/LeadForm";
import TrustBar from "@/components/TrustBar";
import OfferBadge from "@/components/OfferBadge";
import PortfolioGallery from "@/components/PortfolioGallery";
import { HOME_GALLERY_CURATED } from "@/data/home-gallery";
import { PRICING, formatRange } from "@/data/pricing";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";

// Hero + closing band use real HSC installs, not stock (design critique
// 2026-10-08: the stock welding shot was darkened into a navy wash and the
// first screen had no visible photograph). The dark block wall on the S.S.
// Perfumes shot carries white type on its own, so the overlay stays light.
const HERO_IMG = "/portfolio/ssperfumes.jpg";
const CLOSING_IMG = "/portfolio/emporium.jpg";

const WHAT_YOU_GET = [
  { t: "A real design mockup", b: "Your sign rendered on a photo of your actual building. You see it before you commit to anything." },
  { t: "UL-certified fabrication", b: "Built in our Houston shop with weather-rated materials and LEDs made to take the Gulf Coast heat." },
  { t: "Permits, handled", b: "We pull the city permits and check your landlord's sign criteria so it passes inspection the first time." },
  { t: "Licensed installation", b: "Our own crew mounts it, wires it, and cleans up. No subcontractor roulette." },
  { t: "A 5-year warranty", b: "Materials and workmanship, lighting included. If something fails, you call the people who built it." },
];

const STEPS = [
  { title: "Send us what you've got", body: "A photo of your storefront and your logo is enough to start. We'll tell you what'll work, and what the city and your landlord will let you put up." },
  { title: "We mock it up", body: "You see the sign on your own building before we cut a thing. Hate it? Change it. It's just pixels at this stage." },
  { title: "We build it & permit it", body: "Fabrication starts in our shop while we handle the City paperwork. No surprise “that's not to code” after the money's spent." },
  { title: "We put it up", body: "Our licensed crew installs it, wires it, and makes sure it passes inspection. Then it's yours, warrantied for five years." },
];

const PROOF = ["UL-certified fabrication", "Our own install crew", "Permits handled in-house", "5-year warranty"];

export default function HomePage() {
  const markets = getAllMarkets();
  const { team } = BUSINESS;

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src={HERO_IMG}
          alt="Illuminated channel letters we built and installed for S.S. Perfumes in Houston, lit at dusk"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover object-[62%_100%]"
        />
        {/* Neutral black, not brand navy, so the photo keeps its own colour.
            Bottom-anchored crop keeps the lit storefront and leaves the sign's
            lettering out of the frame, so nothing competes with the headline. */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 via-45% to-black/15" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div className="stagger-in flex flex-col justify-center">
            {/* The claim leads; the SEO phrase lives in the first body sentence. */}
            <h1 className="text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl">Signs built in our own shop.</h1>
            <p className="mt-5 max-w-lg text-lg text-white/85">
              A Houston sign company that does the whole job:{" "}
              <Link href="/services/channel-letters" className="hover:underline hover:underline-offset-2">channel letters in Houston</Link>,
              monuments, and pole signs, built and installed by our own crew. 5-year warranty on every one.
            </p>
            {/* Call is THE action (owner 2026-10-07: buyers call, so make it loud;
                text option removed, nobody used it). The quote form sits beside the hero. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneLink className="btn btn-primary btn-lg" label={`Call ${BUSINESS.phone}`} />
            </div>
            <OfferBadge tone="dark" className="mt-5" />
            {/* Three items that fit one line; the full list lives on /about. */}
            <TrustBar tone="dark" className="mt-6" points={["5-Year Warranty", "Built in Houston"]} />
          </div>

          <div className="flex items-center">
            <div className="w-full">
              <LeadForm
                kind="quote"
                submitLabel="Get My Free Quote"
                showSignType
                showMessage={false}
                heading="Free design mockup within 1 business day of your site survey"
                subheading="We come out for a free site survey, then send you design mockups with your sign's dimensions, along with a quote."
              />
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* The work — image-only gallery */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-bold text-ink sm:text-5xl">See what we actually make</h2>
              <p className="mt-2 max-w-xl text-steel">Real signs we built and installed for Houston businesses: channel letters, monument signs, cabinet signs, wraps, and more.</p>
            </div>
            <Link href="/portfolio" className="group inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wide text-signal-600 transition-colors hover:text-ink">
              See all our work
              <span className="transition-transform duration-200 ease-[cubic-bezier(0.2,0,0,1)] group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <PortfolioGallery items={HOME_GALLERY_CURATED} masonry featured={2} />
        </div>
      </section>

      {/* Who you'll talk to + why in-house matters. One section instead of two
          that made the same claim (design critique 2026-10-08). Copy verbatim. */}
      <section className="border-b border-fog bg-white">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cloud lg:sticky lg:top-32">
            <Image src={team.photo} alt={team.name ? `${team.name}, ${team.title} at Houston Sign Crafters` : "The Houston Sign Crafters crew and work truck on a job site"} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-ink sm:text-5xl">A real sign maker picks up.</h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              {team.name
                ? `Most days that's ${team.name}, our ${team.title.toLowerCase()}, who ${team.note}.`
                : "You'll talk to someone on our crew who builds signs for a living."}{" "}
              No phone tree, no overseas script, no “let me transfer you.” You tell us what you've got, and we
              tell you straight: what'll work, what it'll run, and how fast we can get it up.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              We're a Houston shop. The same people who quote your job design it, build it, and climb the
              ladder on install day. That's on purpose.
            </p>

            <h3 className="mt-10 text-2xl font-bold leading-tight text-ink sm:text-3xl">Most “sign companies” send the work out. We don't.</h3>
            <p className="mt-3 text-lg leading-relaxed text-steel">A lot of shops are really just middlemen. They take your logo, email it to a wholesale factory a few states away, and show up weeks later to bolt on whatever comes off the truck.</p>
            <p className="mt-3 text-lg leading-relaxed text-steel">We're an actual shop. The cutting, welding, wiring, painting, and printing all happen here in Houston, done by the same people who answer your call and climb the ladder on install day. If something's off, there's nobody to point at but us. That's the point.</p>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {PROOF.map((p) => (
                <span key={p} className="inline-flex items-center gap-2.5 font-display text-sm font-semibold uppercase tracking-wide text-ink">
                  <span className="h-2.5 w-2.5 bg-ink" aria-hidden="true" />
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <PhoneLink className="btn btn-primary" label={`Call ${BUSINESS.phone}`} />
            </div>
          </div>
        </div>
      </section>

      {/* What you get — photo-led, not a text grid: real installed work on the
          left, a tight numbered rail on the right. */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="relative">
            <div className="img-outline relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/portfolio/copper.jpg"
                alt="Illuminated channel letter sign we built and installed for a Houston coffee bar, lit at dusk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="img-outline absolute -bottom-8 -right-4 hidden w-[46%] overflow-hidden rounded-sm border-4 border-white shadow-lg sm:block lg:-right-10">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/portfolio/clearlake.jpg"
                  alt="Monument sign we built for a Houston medical plaza, illuminated at night"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
            </div>
            <span className="absolute left-4 top-4 bg-ink/85 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-wide text-white">
              Built + installed by our crew
            </span>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-ink">What's included</h2>
            <p className="mt-2 max-w-xl text-steel">Every project includes the whole thing, start to finish.</p>
            <ol className="mt-8 divide-y divide-fog">
              {WHAT_YOU_GET.map((item, i) => (
                <li key={item.t} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="font-display text-xl font-bold leading-7 text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold text-ink">{item.t}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-steel">{item.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What a sign costs: copy beside a real monument install, so the money
          section has a photo and not just two columns of text. */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div>
            <h2 className="text-4xl font-bold sm:text-6xl">What does a sign cost?</h2>
            {/* Published ranges as display numerals (critique 2026-10-08, owner
                10/15). Every figure comes from data/pricing.js; no new numbers. */}
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { label: "Channel letters", value: formatRange(PRICING.find((r) => r.serviceSlug === "channel-letters")) },
                { label: "Most lit storefront sets", value: "$4,000 – $12,000" },
                { label: "Monument signs", value: formatRange(PRICING.find((r) => r.serviceSlug === "monument-signs")) },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-signal pl-4">
                  <dd className="font-display text-3xl font-bold leading-none text-white sm:text-4xl">{s.value}</dd>
                  <dt className="mt-2 text-sm text-white/70">{s.label}</dt>
                </div>
              ))}
            </dl>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/80">
              <p>
                Installed, with permits and installation included. Every range is published on our{" "}
                <Link href="/pricing" className="font-semibold text-white underline underline-offset-2 hover:text-signal">
                  pricing page
                </Link>
                . What moves your project inside the range:
              </p>
              <ul className="space-y-2">
                {[
                  "How big it is and how many letters",
                  "Lit or not, and how it's lit (front-lit, halo, etc.)",
                  "How it mounts to your building",
                  "Whether it needs a permit or engineering",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2.5">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 bg-white/60" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <p>Here's how we do it: send a photo of your storefront and a rough size. We pull up your address, factor in permitting and installation, and email you an <span className="text-white">itemized quote, usually within one business day.</span> No “come in for a consultation,” no runaround.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className="btn btn-primary">Get My Free Quote</Link>
              <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
            </div>
          </div>
          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/portfolio/kirkwood.jpg"
                alt="Brick monument sign with tenant directory we built for Kirkwood Tech Center in Houston, TX"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-display text-xs font-semibold uppercase tracking-wide text-white/60">
              Monument sign, Kirkwood Tech Center · built and installed by our crew
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Process: a vertical timeline beside a night install, instead of four
          equal numbered columns. The 6-week figure is owner-verified (brand kit). */}
      <section className="border-b border-fog bg-cloud">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <h2 className="text-4xl font-bold text-ink sm:text-5xl">How a sign gets made</h2>
            <p className="mt-2 max-w-xl text-steel">No mystery, no runaround. Here's the whole thing.</p>
            <ol className="mt-10 border-l-2 border-ink/15">
              {STEPS.map((s, i) => (
                <li key={s.title} className="relative pb-9 pl-8 last:pb-0">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 bg-ink" aria-hidden="true" />
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-steel">Step {i + 1}</span>
                  <h3 className="mt-1 text-2xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-steel">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <figure className="lg:sticky lg:top-32 lg:self-start">
            <div className="img-outline relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/portfolio/extra/froosta-at-night.jpg"
                alt="Lit pylon sign at night with the Froosta panel we built and installed in Houston"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-ink">~6 weeks</span>
              <span className="text-sm text-steel">from deposit to install, permits included</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Service areas */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-bold text-ink">We cover Houston &amp; the suburbs</h2>
        <p className="mt-2 text-steel">Based in Houston, on the road across the metro most days.</p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {markets.map((m) => (
            <Link key={m.slug} href={`/locations/${m.slug}`} className="rounded-sm border border-fog bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink">
              {m.city}
            </Link>
          ))}
          <Link href="/locations" className="rounded-sm bg-ink px-4 py-2 text-sm font-semibold text-white">All areas →</Link>
        </div>
      </section>

      {/* Reviews: one lead quote + two supporting. All six stay in the JSON-LD
          on /about; the homepage shows three. */}
      <Testimonials limit={3} />

      {/* FAQ: all 24 answer-first questions stay in the DOM and schema for AI
          search (owner 2026-10-07); eight show by default, the rest fold. */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="mb-8 text-4xl font-bold text-ink">Questions we get a lot</h2>
          <Faq items={HOME_FAQS} heading={null} />
        </div>
      </section>

      {/* Final CTA over a real install, not a flat brand-blue band. */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src={CLOSING_IMG}
          alt="Illuminated channel letters we built and installed for Emporium Games in New Caney, TX, lit at dusk"
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover object-[center_52%]"
        />
        <div className="absolute inset-0 -z-10 bg-ink/70" />
        <div className="mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 lg:py-36">
          <h2 className="text-4xl font-bold sm:text-6xl">Got a wall that needs a sign?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Send a photo and a rough size. You'll have a real quote in your inbox within one business
            day. An actual number, not a runaround.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/quote" className="btn btn-primary btn-lg">Get My Free Quote</Link>
            <PhoneLink className="btn btn-outline-light btn-lg" label={`Call ${BUSINESS.phone}`} />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/75">
            We only take a handful of new installs a week. Get your spot.
          </p>
        </div>
      </section>
    </main>
  );
}
