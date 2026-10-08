import Image from "next/image";
import { getPortfolio } from "@/data/portfolio";

// Image-only gallery: uniform tiles, no captions, no click action.
// Default: the portfolio (pass `limit` for a subset). Pass `items`
// ([{ src, alt, objectPosition? }]) for a custom list, e.g. the long
// homepage gallery in data/home-gallery.js. `portrait` switches the tiles
// to the carousel slides' native 4:5 so nothing gets cropped.
export default function PortfolioGallery({ limit, items, portrait = false }) {
  const list = items
    ? items
    : (limit ? getPortfolio().slice(0, limit) : getPortfolio()).map((p) => ({
        src: p.imageSrc,
        alt: p.location ? `${p.signType} for ${p.title} in ${p.location}` : `${p.signType} for ${p.title}`,
        objectPosition: p.objectPosition,
      }));
  const aspect = portrait ? "aspect-[4/5]" : "aspect-[4/3]";
  const cols = portrait
    ? "grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5"
    : "grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4";

  return (
    <div className={`grid ${cols}`}>
      {list.map((it, i) => (
        <div key={`${it.src}-${i}`} className={`img-outline group relative ${aspect} overflow-hidden rounded-sm bg-cloud`}>
          <Image
            src={it.src}
            alt={it.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            style={it.objectPosition ? { objectPosition: it.objectPosition } : undefined}
          />
        </div>
      ))}
    </div>
  );
}
