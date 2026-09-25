import Link from "next/link";
import { getMarketsByMetro } from "@/data/markets";
import { SERVICE_AREAS } from "@/data/business";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Service Areas",
  description:
    "Houston Sign Crafters serves the Houston, San Antonio, and Austin metros, from Katy and Sugar Land to New Braunfels and Round Rock. Design, permitting, and installation.",
  alternates: { canonical: "/locations" },
};

export default function LocationsHub() {
  const groups = getMarketsByMetro();

  return (
    <main>
      <section className="bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold text-ink">Where We Work</h1>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            We build signs in our Houston shop and install them across the Houston, San Antonio,
            and Austin metros, with local staff in each. Select your area for local details.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {groups.map(({ metro, markets }) => (
          <div key={metro} className="mb-12 last:mb-0">
            <h2 className="mb-5 text-2xl font-bold text-ink">{metro} area</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {markets.map((m) => (
                <Link key={m.slug} href={`/locations/${m.slug}`} className="group flex flex-col rounded-sm border border-fog p-6 transition-colors hover:border-ink">
                  <h3 className="font-semibold text-ink group-hover:text-signal-600">{m.city}, {m.region}</h3>
                  <p className="mt-1 flex-1 text-sm text-steel">{m.intro.slice(0, 120)}…</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-signal-600">
                    View {m.city} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-10 rounded-sm border border-fog bg-cloud p-6">
          <h3 className="font-semibold text-ink">Also serving</h3>
          <p className="mt-2 text-sm text-steel">{SERVICE_AREAS.join(" · ")}, plus nearby communities. Don't see your area? <Link href="/contact" className="font-medium text-signal-600">Get in touch</Link>. We likely cover it.</p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
