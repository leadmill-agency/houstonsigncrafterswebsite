import Image from "next/image";
import { getPortfolio } from "@/data/portfolio";

// True image-only gallery — uniform tiles, no captions, no click action.
// Pass `limit` to show a curated subset (e.g. on the homepage).
export default function PortfolioGallery({ limit }) {
  const items = limit ? getPortfolio().slice(0, limit) : getPortfolio();

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
      {items.map((p) => (
        <div key={p.id} className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-cloud">
          <Image
            src={p.imageSrc}
            alt={p.location ? `${p.signType} for ${p.title} in ${p.location}` : `${p.signType} for ${p.title}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>
      ))}
    </div>
  );
}
