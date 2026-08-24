import Link from "next/link";
import { BUSINESS, SERVICE_AREAS } from "@/data/business";
import { getAllServices } from "@/data/services";
import { getAllMarkets } from "@/data/markets";
import PhoneLink from "@/components/PhoneLink";

// Company facts — a plain, server-rendered reference page. One URL that states
// what Houston Sign Crafters is, does, serves, and charges, in extractable
// tables. Useful to humans comparing sign companies AND to search/AI systems
// corroborating the business entity. Every fact here is sourced from
// data/business.js / data/services.js (the verified single sources of truth) —
// no claims that don't already appear elsewhere on the site.

export const metadata = {
  title: "Company Facts",
  description:
    "Key facts about Houston Sign Crafters: services, service areas, pricing approach, warranty, certifications, hours, and how the sign process works.",
  alternates: { canonical: "/company-facts" },
};

function FactsTable({ caption, rows }) {
  return (
    <table className="w-full border-collapse text-sm">
      <caption className="sr-only">{caption}</caption>
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label} className="border-b border-fog align-top">
            <th scope="row" className="w-44 py-2.5 pr-4 text-left font-semibold text-ink">
              {label}
            </th>
            <td className="py-2.5 text-steel">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function CompanyFactsPage() {
  const services = getAllServices();
  const markets = getAllMarkets();
  const fullAddress = `${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality}, ${BUSINESS.address.addressRegion} ${BUSINESS.address.postalCode}`;

  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <p className="eyebrow text-signal">Reference</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Houston Sign Crafters — company facts</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            The straight answers, in one place: what we do, where we work, how pricing works, and
            what stands behind every sign. If you're comparing sign companies, start here.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">The business</h2>
        <div className="mt-4">
          <FactsTable
            caption="Business facts"
            rows={[
              ["What we are", "A custom sign company in Houston, TX. We design, fabricate, permit, and install signs with our own team — no subcontractor handoffs."],
              ["Address", fullAddress],
              ["Phone", <PhoneLink key="p" className="font-semibold text-ink underline underline-offset-2" showIcon={false} />],
              ["Email", BUSINESS.email],
              ["Hours", BUSINESS.hoursLabel],
              ["Reviews", `${BUSINESS.reviews.rating}★ across ${BUSINESS.reviews.count} reviews (${BUSINESS.reviews.source})`],
              ["Warranty", "5-year warranty on our signs"],
              ["Electrical", "UL-certified illuminated signage"],
              ["Quote turnaround", "Free written quote within one business day"],
            ]}
          />
        </div>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">Services</h2>
          <p className="mt-2 text-steel">
            Everything is handled in-house: design → fabrication → permitting → installation.
          </p>
          <table className="mt-5 w-full border-collapse text-sm">
            <caption className="sr-only">Services offered</caption>
            <thead>
              <tr className="border-b-2 border-ink text-left">
                <th className="py-2 pr-4 font-semibold text-ink">Service</th>
                <th className="py-2 font-semibold text-ink">Details</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.slug} className="border-b border-fog align-top">
                  <th scope="row" className="w-56 py-2.5 pr-4 text-left font-medium text-ink">
                    <Link href={`/services/${s.slug}`} className="underline decoration-fog underline-offset-2 hover:decoration-signal">
                      {s.name}
                    </Link>
                  </th>
                  <td className="py-2.5 text-steel">{s.metaDescription || s.answer?.slice(0, 160)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Where we work</h2>
        <p className="mt-2 text-steel">
          Based at {fullAddress}. Serving the Houston metro, including:
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-steel sm:grid-cols-4">
          {SERVICE_AREAS.map((a) => {
            const m = markets.find((mk) => mk.cityState === a);
            return (
              <li key={a}>
                {m ? (
                  <Link href={`/locations/${m.slug}`} className="underline decoration-fog underline-offset-2 hover:decoration-signal">
                    {a}
                  </Link>
                ) : (
                  a
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-sm text-steel">
          We also handle sign permitting with the local jurisdiction for every install — City of
          Houston and the surrounding cities each have their own sign code, and we submit and manage
          the permit as part of the job.
        </p>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">How pricing works</h2>
          <p className="mt-2 max-w-2xl text-steel">
            Every sign is built to order, so price depends on size, lighting, mounting, and
            permitting. As a published reference point, channel letter signs in Houston typically
            range from about <strong className="text-ink">$1,500</strong> for a small, simple set to{" "}
            <strong className="text-ink">$10,000+</strong> for a large illuminated sign — see{" "}
            <Link href="/blog/how-much-do-channel-letters-cost-in-houston" className="underline decoration-fog underline-offset-2 hover:decoration-signal">
              our channel letter cost guide
            </Link>{" "}
            and the full{" "}
            <Link href="/pricing" className="underline decoration-fog underline-offset-2 hover:decoration-signal">
              Houston sign pricing table
            </Link>
            . The only accurate number is a written quote: send a photo of your storefront and get an
            itemized quote — design, permit, build, and install — within one business day.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/quote" className="btn btn-primary">Get a Free Quote</Link>
            <Link href="/free-mockup" className="btn btn-outline-dark">Get a Free Mockup</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">More</h2>
        <ul className="mt-4 space-y-2 text-sm text-steel">
          <li><Link href="/portfolio" className="underline decoration-fog underline-offset-2 hover:decoration-signal">Portfolio — recent Houston installs</Link></li>
          <li><Link href="/blog" className="underline decoration-fog underline-offset-2 hover:decoration-signal">Guides — sign costs, materials, and permitting in Houston</Link></li>
          <li><Link href="/about" className="underline decoration-fog underline-offset-2 hover:decoration-signal">About Houston Sign Crafters</Link></li>
          <li><Link href="/contact" className="underline decoration-fog underline-offset-2 hover:decoration-signal">Contact</Link></li>
        </ul>
      </section>
    </main>
  );
}
