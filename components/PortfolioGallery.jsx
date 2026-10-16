import Image from "next/image";
import { getPortfolio } from "@/data/portfolio";

// Image-only gallery: no captions, no click action.
// Default: uniform 4:3 tiles from the portfolio (pass `limit` for a subset).
// `masonry` + `items` ([{ src, alt, w, h }]): CSS-columns masonry where every
// image keeps its own aspect ratio, used by the long homepage gallery
// (data/home-gallery.js) so landscape renderings and 4:5 slides mix without
// cropping anyone's lettering.
// `featured`: the first N items render as large tiles in a row above the
// masonry so the wall has a hierarchy (design critique 2026-10-08); the count
// of photos is unchanged.
export default function PortfolioGallery({ limit, items, masonry = false, featured = 0 }) {
  if (masonry && items) {
    const lead = items.slice(0, featured);
    const rest = items.slice(featured);
    return (
      <div>
        {lead.length > 0 && (
          <div className={`mb-2 grid gap-2 sm:mb-3 sm:gap-3 ${lead.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {lead.map((it, i) => (
              <div key={`${it.src}-lead-${i}`} className="img-outline group relative aspect-[4/3] overflow-hidden rounded-sm bg-cloud">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  quality={85}
                  priority={i === 0}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        )}
        <div className="columns-2 gap-2 sm:columns-3 sm:gap-3 lg:columns-4 xl:columns-5">
          {rest.map((it, i) => (
            <div key={`${it.src}-${i}`} className="img-outline group mb-2 overflow-hidden rounded-sm bg-cloud break-inside-avoid sm:mb-3">
              <Image
                src={it.src}
                alt={it.alt}
                width={it.w}
                height={it.h}
                quality={85}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  const list = limit ? getPortfolio().slice(0, limit) : getPortfolio();
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
      {list.map((p) => (
        <div key={p.id} className="img-outline group relative aspect-[4/3] overflow-hidden rounded-sm bg-cloud">
          <Image
            src={p.imageSrc}
            alt={p.location ? `${p.signType} for ${p.title} in ${p.location}` : `${p.signType} for ${p.title}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            style={p.objectPosition ? { objectPosition: p.objectPosition } : undefined}
          />
        </div>
      ))}
    </div>
  );
}
