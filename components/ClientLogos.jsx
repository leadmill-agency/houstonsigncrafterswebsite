import Image from "next/image";

// "Signs we've built for" band under the homepage hero (owner request
// 2026-10-07; one-line dark band like the Firstbase/Antimetal logo rows).
// EVERY brand here is a real HSC client: Slick City, Meerut BBQ, and The Peach
// Cobbler Factory are in the portfolio (real installs); Pizza Hut and Marshalls
// were named by Rameel in writing on 2026-10-07. Do not add a brand without the
// same proof. Logo files came from Rameel (10/7) and were recolored to a single
// white tone on transparent (public/clients/*.png, 160px tall, 2x) so they sit
// on the ink band like a standard monochrome client row. Meerut BBQ's mark is the
// wordmark from HSC's own sign drawing (vector), same treatment.
const LOGOS = [
  { name: "Pizza Hut", src: "/clients/pizza-hut.png", w: 157, h: 160, cls: "h-16 sm:h-20" },
  { name: "Marshalls", src: "/clients/marshalls.png", w: 800, h: 160, cls: "h-7 sm:h-8" },
  { name: "Slick City Action Park", src: "/clients/slick-city.png", w: 337, h: 160, cls: "h-12 sm:h-14" },
  { name: "The Peach Cobbler Factory", src: "/clients/peach-cobbler-factory.png", w: 146, h: 160, cls: "h-16 sm:h-20" },
  // Wordmark lifted from HSC\'s own sign drawing for the job (Permits/Meerut - Sign Dimensions.pdf, vector).
  { name: "Meerut BBQ House", src: "/clients/meerut-bbq.png", w: 1843, h: 160, cls: "h-6 sm:h-7" },
];

export default function ClientLogos() {
  return (
    <section aria-label="Businesses we have built signs for" className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
        <p className="text-center text-sm text-white/55">Signs we&apos;ve built for</p>
        {/* One row, always: wraps nowhere, scrolls sideways on phones. */}
        <ul className="mt-5 flex items-center gap-x-10 overflow-x-auto whitespace-nowrap px-2 [scrollbar-width:none] sm:justify-between sm:gap-x-8 [&::-webkit-scrollbar]:hidden">
          {LOGOS.map((l) => (
            <li key={l.name} className="shrink-0">
              <Image src={l.src} alt={`${l.name} logo`} width={l.w} height={l.h} className={`w-auto opacity-80 ${l.cls}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
