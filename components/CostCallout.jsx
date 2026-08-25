import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { getPricingRow, formatRange } from "@/data/pricing";
import PhoneLink from "@/components/PhoneLink";
import TextLink from "@/components/TextLink";

// Honest "what does it cost / how we quote" block — answers the #1 buyer
// question instead of dodging it. Pass the service `slug` to show that
// service's published range (owner-confirmed, data/pricing.js).
export default function CostCallout({ slug }) {
  const row = slug ? getPricingRow(slug) : null;
  const drivers = [
    "How big it is and how many letters",
    "Lit or not, and how it's lit",
    "How it mounts to your building",
    "Whether it needs a permit or engineering",
  ];
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <p className="eyebrow text-signal">Real talk</p>
        <h2 className="mt-1 text-3xl font-bold sm:text-4xl">What does it cost?</h2>
        <div className="mt-6 grid gap-6 text-lg leading-relaxed text-white/80 md:grid-cols-2">
          <div>
            {row ? (
              <p>
                {row.label} in Houston typically run{" "}
                <span className="font-semibold text-white">{formatRange(row)}</span> installed
                (typical timeline: {row.timeline.toLowerCase()}). Where your project lands depends on:
              </p>
            ) : (
              <p>It depends. Anybody quoting a flat number off a website is guessing. What moves the price:</p>
            )}
            <ul className="mt-4 space-y-2">
              {drivers.map((d) => (
                <li key={d} className="flex items-start gap-2.5">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 bg-signal" aria-hidden="true" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Send a photo of your storefront and a rough size. We pull up your address, factor in permitting and installation, and email you an <span className="text-white">itemized quote, usually within one business day.</span></p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/quote" className="btn btn-primary">Get My Free Quote</Link>
              <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
              <TextLink className="btn btn-outline-light" label="Text Us" />
            </div>
            <p className="mt-4 text-sm text-white/60">
              See all our published ranges on the{" "}
              <Link href="/pricing" className="text-white underline underline-offset-2 hover:text-signal">
                Houston sign pricing page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
