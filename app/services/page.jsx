import Link from "next/link";
import { getAllServices } from "@/data/services";
import CTASection from "@/components/CTASection";

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
      <section className="bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold text-ink">Sign Manufacturing and Installation in Houston</h1>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            We manufacture every kind of business sign in our own Houston shop and install it
            with our own crew: design, fabrication, permits, and installation from one team,
            first sketch to final light-up.
          </p>
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
