import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { PRICING, formatRange } from "@/data/pricing";
import PhoneLink from "@/components/PhoneLink";
import Faq from "@/components/Faq";

// The pricing page almost no sign company publishes: real ranges, in a real
// table. Ranges owner-confirmed (see data/pricing.js). Answer-first, tabular,
// server-rendered — built to be quoted by people and AI assistants alike.

export const metadata = {
  title: "Sign Prices in Houston: Real Ranges",
  description:
    "What signs cost in Houston: channel letters $1,500–$10,000+, monument signs $6,000–$50,000+, wraps, and banners. Real ranges from a Houston sign shop.",
  alternates: { canonical: "/pricing" },
};

const PRICING_FAQS = [
  {
    q: "Why is the range so wide?",
    a: "Because size, lighting, mounting, and permitting move the price more than the sign type does. A 20-inch non-lit letter set and a 6-foot illuminated set are different projects. The range tells you the honest neighborhood; the written quote gives you the exact number.",
  },
  {
    q: "What's included in your quote?",
    a: "Everything: design, materials, fabrication, the permit, and installation by our own crew. Itemized, in writing, within one business day. No surprise line items later.",
  },
  {
    q: "Do timelines include the permit?",
    a: "Timelines shown are typical production and installation once design and permit are approved. Permit review time varies by jurisdiction. We handle the submission and keep you posted either way.",
  },
  {
    q: "Do prices include installation?",
    a: "Yes. Every range on this page is the installed price: design, materials, fabrication, permit, and installation by our own crew. The written quote breaks each of those out.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <p className="eyebrow text-signal">Straight answers</p>
          <h1 className="text-3xl font-bold sm:text-4xl">What a sign costs in Houston</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Most sign companies won't publish numbers. Here are our real ranges, installed, in
            Houston, and what moves a project inside them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="answer-block">
          <p>
            In Houston, channel letter signs typically run $1,500 to $10,000+, monument signs
            $6,000 to $50,000+, vehicle wraps $200 to $10,000, wall graphics $1,000 to $15,000,
            interior signs $200 to $10,000+, and banners $30 to $1,000, installed. Size,
            lighting, mounting, and permitting set where a project lands; every quote is itemized
            and free within one business day.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="sr-only">Typical installed sign price ranges in Houston</caption>
            <thead>
              <tr className="border-b-2 border-ink text-left">
                <th className="py-2.5 pr-4 font-semibold text-ink">Sign type</th>
                <th className="py-2.5 pr-4 font-semibold text-ink">Typical range (installed)</th>
                <th className="py-2.5 pr-4 font-semibold text-ink">Typical timeline*</th>
                <th className="py-2.5 font-semibold text-ink">What moves it</th>
              </tr>
            </thead>
            <tbody>
              {PRICING.map((row) => (
                <tr key={row.serviceSlug} className="border-b border-fog align-top">
                  <th scope="row" className="py-3 pr-4 text-left font-medium text-ink">
                    <Link
                      href={`/services/${row.serviceSlug}`}
                      className="underline decoration-fog underline-offset-2 hover:decoration-signal"
                    >
                      {row.label}
                    </Link>
                  </th>
                  <td className="whitespace-nowrap py-3 pr-4 font-semibold text-ink">{formatRange(row)}</td>
                  <td className="whitespace-nowrap py-3 pr-4 text-steel">{row.timeline}</td>
                  <td className="py-3 text-steel">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-steel">
          *Typical production + installation once design and permit are approved. Permit review
          varies by jurisdiction. We handle it as part of every job.
        </p>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">The four things that set your price</h2>
          <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {[
              ["Size", "Bigger letters, taller monuments, longer walls mean more material and more engineering."],
              ["Lighting", "Front-lit, halo-lit, or combination LED changes fabrication and electrical scope."],
              ["Mounting", "Flush to brick, raceway, wireway, or a ground foundation. Each installs differently."],
              ["Permitting", "City permits, landlord criteria, and engineering letters where the sign needs them."],
            ].map(([t, b], i) => (
              <div key={t} className="border-t-2 border-ink pt-3">
                <span className="font-display text-xl font-bold text-signal-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 font-semibold text-ink">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-steel">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Pricing questions, answered</h2>
        <div className="mt-6">
          <Faq items={PRICING_FAQS} heading={null} />
        </div>
      </section>

      <section className="bg-signal">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">Want the exact number?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Send a photo of your storefront and a rough size and you'll have an itemized, written
            quote within one business day. Design, permit, build, and install included.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/quote" className="btn bg-white text-signal-600 hover:bg-white/90">Get My Free Quote</Link>
            <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
          </div>
        </div>
      </section>
    </main>
  );
}
