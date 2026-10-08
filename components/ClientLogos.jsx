// "Signs we've built for" band under the homepage hero (owner request
// 2026-10-07; one-line dark band like the Firstbase/Antimetal logo rows).
// EVERY name here is a real HSC client: Slick City, Meerut BBQ, and The Peach
// Cobbler Factory are in the portfolio (real installs); Pizza Hut and Marshalls
// were named by Rameel in writing on 2026-10-07. WingBay and Nautical Bowls were
// removed at his request the same day. Do not add a brand without the same
// proof. Typographic wordmarks because we hold no logo files; swap in SVGs if
// Rameel supplies them.
const CLIENTS = ["Pizza Hut", "Marshalls", "Slick City", "The Peach Cobbler Factory", "Meerut BBQ"];

export default function ClientLogos() {
  return (
    <section aria-label="Businesses we have built signs for" className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
        <p className="text-center text-sm text-white/55">Signs we&apos;ve built for</p>
        {/* One row, always: wraps nowhere, scrolls sideways on phones. */}
        <ul className="mt-4 flex items-center gap-x-10 overflow-x-auto whitespace-nowrap px-2 [scrollbar-width:none] sm:justify-between sm:gap-x-6 [&::-webkit-scrollbar]:hidden">
          {CLIENTS.map((name) => (
            <li key={name} className="shrink-0 font-display text-lg font-bold uppercase tracking-[0.08em] text-white/80 sm:text-xl xl:text-2xl">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
