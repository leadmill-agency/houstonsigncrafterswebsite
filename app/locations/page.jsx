import Link from "next/link";
import { getAllMarkets } from "@/data/markets";
import { SERVICE_AREAS } from "@/data/business";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Service Areas",
  description:
    "Houston Sign Crafters serves Houston and nearby communities including Katy, Sugar Land, and The Woodlands. In-house design, permitting, and installation.",
  alternates: { canonical: "/locations" },
};

export default function LocationsHub() {
  const markets = getAllMarkets();

  return (
    <main>
      <section className="bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold text-ink">Where We Work</h1>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            Based in Houston, we design, permit, and install custom signage across the metro and
            surrounding communities. Select your area for local details.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((m) => (
            <Link key={m.slug} href={`/locations/${m.slug}`} className="group flex flex-col rounded-sm border border-fog p-6 transition-colors hover:border-ink">
              <h2 className="font-semibold text-ink group-hover:text-signal-600">{m.city}, {m.region}</h2>
              <p className="mt-1 flex-1 text-sm text-steel">{m.intro.slice(0, 120)}…</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-signal-600">
                View {m.city} →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-sm border border-fog bg-cloud p-6">
          <h3 className="font-semibold text-ink">Also serving</h3>
          <p className="mt-2 text-sm text-steel">{SERVICE_AREAS.join(" · ")}, plus nearby communities. Don't see your area? <Link href="/contact" className="font-medium text-signal-600">Get in touch</Link>. We likely cover it.</p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
