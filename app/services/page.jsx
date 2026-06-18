import Link from "next/link";
import { getAllServices } from "@/data/services";
import CTASection from "@/components/CTASection";
import icons from "@/components/icons";

export const metadata = {
  title: "Sign Services in Houston, TX",
  description:
    "Explore Houston Sign Crafters' services — channel letters, monument signs, vehicle wraps, wall graphics, custom banners, and event signage. In-house design, permitting, and installation.",
  alternates: { canonical: "/services" },
};

export default function ServicesHub() {
  const services = getAllServices();

  return (
    <main>
      <section className="bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold text-ink">Our Sign Services in Houston</h1>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            We design, fabricate, permit, and install every kind of business sign in-house —
            so your project is handled by one team from first sketch to final installation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col rounded-xl border border-fog p-6 transition-shadow hover:shadow-md">
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cloud p-2.5 text-ink">{icons[s.icon] || icons.bolt}</span>
              <h2 className="font-semibold text-ink group-hover:text-signal-600">{s.name}</h2>
              <p className="mt-1 flex-1 text-sm text-steel">{s.heroSubtitle}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-signal-600">
                Learn more <span className="h-4 w-4">{icons.arrowRight}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
