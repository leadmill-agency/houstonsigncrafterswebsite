// Concrete deliverables every project includes. Shared by the homepage and
// service pages so buyers always see what's in scope (no surprises).
const ITEMS = [
  { t: "A real design mockup", b: "Your sign on a photo of your actual building, before you commit." },
  { t: "UL-certified fabrication", b: "Built in our Houston shop with weather-rated materials and LEDs." },
  { t: "Permits, handled", b: "We pull the City permits and check your landlord's sign criteria." },
  { t: "Licensed installation", b: "Our own crew mounts it, wires it, cleans up — no subcontractors." },
  { t: "A 5-year warranty", b: "Materials and workmanship, lighting included." },
];

export default function WhatYouGet({ heading = "What you get with every sign" }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h2 className="text-3xl font-bold text-ink">{heading}</h2>
      <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <div key={item.t} className="border-t-2 border-ink pt-4">
            <span className="font-display text-2xl font-bold text-signal-600">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-1 text-lg font-semibold text-ink">{item.t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-steel">{item.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
