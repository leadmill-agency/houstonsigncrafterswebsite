import Image from "next/image";
import { getPortfolio } from "@/data/portfolio";

// Clean portfolio grid — no filter, no labels. Cards use a fixed aspect ratio +
// object-cover so the grid stays even though source photos vary in size.
// Pass `limit` to show a curated subset (e.g. on the homepage).
export default function PortfolioGallery({ limit }) {
  const items = limit ? getPortfolio().slice(0, limit) : getPortfolio();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <figure key={p.id} className="group overflow-hidden rounded-xl border border-fog bg-white shadow-sm">
          <div className="relative aspect-[4/3] overflow-hidden bg-cloud">
            <Image
              src={p.imageSrc}
              alt={p.location ? `${p.signType} for ${p.title} in ${p.location}` : `${p.signType} for ${p.title}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="p-5">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-cloud px-2.5 py-0.5 text-xs font-medium text-signal-600">{p.category}</span>
              {p.industry && <span className="text-xs text-steel">{p.industry}</span>}
            </div>
            <h3 className="mt-2 font-semibold text-ink">{p.title}</h3>
            <p className="text-sm font-medium text-steel">{p.signType}</p>
            <p className="mt-2 text-sm text-steel">{p.description}</p>
            {p.location && <p className="mt-3 text-xs font-medium text-ink">{p.location}</p>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
