import { getAllServices } from "@/data/services";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us",
  description:
    "Houston Sign Crafters is a local custom sign company handling design, fabrication, permitting, and installation in-house — serving Houston businesses with quality signage and fast quotes.",
  alternates: { canonical: "/about" },
};

const DIFFERENTIATORS = [
  { icon: "pencil", title: "In-house design", body: "Our designers create your sign and show you a mockup before anything is built." },
  { icon: "bolt", title: "Built to last", body: "UL-listed fabrication and weather-rated materials made for the Gulf Coast climate." },
  { icon: "shield", title: "Permits handled", body: "We manage City of Houston permitting and landlord criteria so installs pass the first time." },
  { icon: "check", title: "Licensed installation", body: "Our own licensed crews install your sign safely and correctly — no subcontractor guesswork." },
];

export default function AboutPage() {
  const services = getAllServices();
  return (
    <main>
      <section className="bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold text-ink">About Houston Sign Crafters</h1>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            We're a Houston-based custom sign company that handles everything under one roof —
            design, fabrication, permitting, and licensed installation — so business owners get a
            professional sign without juggling multiple vendors.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="prose-content">
          <h2>Signage, done right and done locally</h2>
          <p>
            From storefront channel letters and monument signs to vehicle wraps, wall graphics,
            banners, and event signage, we help Houston businesses stand out with high-quality
            custom signs. Because we manage the entire process in-house, we can move quickly —
            most projects are quoted within one business day — and we stand behind our work with a
            5-year warranty on materials and workmanship.
          </p>
          <p>
            We also handle the parts most business owners dread: pulling City of Houston permits,
            confirming landlord sign criteria, and making sure every install meets code and passes
            inspection. When you have a tight deadline — a grand opening, a lease requirement, or an
            event — tell us, and we'll be honest about what we can deliver.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.title} className="rounded-sm border border-fog p-5">
              <h3 className="font-semibold text-ink">{d.title}</h3>
              <p className="mt-1 text-sm text-steel">{d.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-steel">
          We make {services.map((s) => s.shortName.toLowerCase()).join(", ")} — and more. Whatever
          your business needs to get noticed, we can design and build it.
        </p>
      </section>

      <CTASection />
    </main>
  );
}
