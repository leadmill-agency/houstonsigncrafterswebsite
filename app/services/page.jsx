import Link from "next/link";
import { getAllServices } from "@/data/services";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import PhoneLink from "@/components/PhoneLink";
import TextLink from "@/components/TextLink";
import { BUSINESS } from "@/data/business";

// "Manufacturing" wording is deliberate: GSC shows the manufacturing/fabrication
// query family (business sign manufacturing houston pos ~5.6, sign fabrication
// houston, houston sign manufacturing) landing here with zero clicks. We ARE
// the manufacturer; the title should say the word searchers use.
export const metadata = {
  title: "Sign Manufacturing & Installation in Houston, TX",
  description:
    "Houston sign manufacturing: channel letters, monument signs, wall graphics, and banners, fabricated in our own shop and installed by our own crew. Free mockup and permits handled.",
  alternates: { canonical: "/services" },
};

export default function ServicesHub() {
  const services = getAllServices();

  return (
    <main>
      {/* Same split as the homepage and service-page heroes: pitch left, form
          right, so nobody has to scroll to ask for a quote (owner request
          2026-08-31; extended to the services hub 2026-09-19). */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                Sign Manufacturing and Installation in Houston
              </h1>
              <p className="mt-4 text-lg text-white/75">
                We manufacture every kind of business sign in our own Houston shop and install
                it with our own crew: design, fabrication, permits, and installation from one
                team, first sketch to final light-up.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
                <TextLink className="btn btn-outline-light" label="Text Us" />
              </div>
            </div>
            <div className="w-full">
              <div className="eyebrow mb-3 text-center text-white/70">Free quote in 1 business day</div>
              <LeadForm kind="quote" submitLabel="Get My Free Quote" messageLabel="Tell us about your sign project" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col rounded-sm border border-fog p-6 transition-colors hover:border-ink">
              <h2 className="font-semibold text-ink group-hover:text-signal-600">{s.name}</h2>
              <p className="mt-1 flex-1 text-sm text-steel">{s.heroSubtitle}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-signal-600">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
