// "Signs we've built for" strip under the homepage hero (owner request
// 2026-10-07, modeled on the logo rows tech sites run under their hero).
// EVERY name here is a real HSC client: Slick City, Meerut BBQ, Peach Cobbler
// Factory, and Nautical Bowls are in the portfolio (real installs); Pizza Hut,
// WingBay, and Marshalls were named by Rameel in writing on 2026-10-07. Do not
// add a brand without the same proof. Rendered as typographic wordmarks
// because we hold no logo files; swap in SVGs if Rameel supplies them.
const CLIENTS = [
  "Pizza Hut",
  "Marshalls",
  "Slick City",
  "WingBay",
  "The Peach Cobbler Factory",
  "Nautical Bowls",
  "Meerut BBQ",
];

export default function ClientLogos() {
  return (
    <section aria-label="Businesses we have built signs for" className="border-b border-fog bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="eyebrow text-center text-steel">Signs we&apos;ve built for</p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {CLIENTS.map((name) => (
            <li
              key={name}
              className="font-display text-lg font-bold uppercase tracking-[0.12em] text-ink/45 transition-colors hover:text-ink sm:text-xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
