"use client";

import { useState } from "react";
import Image from "next/image";
import { getPortfolio, getActiveCategories } from "@/data/portfolio";

// Filterable portfolio grid. Filtering is client-side over a small in-memory
// list (fast, no network). Cards use a fixed aspect ratio + object-cover so the
// grid stays even though source photos vary in size (portfolio PRD §6).
export default function PortfolioGallery() {
  const all = getPortfolio();
  const categories = getActiveCategories();
  const [active, setActive] = useState("All");

  const items = active === "All" ? all : all.filter((p) => p.category === active);
  const hasConcepts = items.some((p) => p.type === "concept");

  return (
    <div>
      {/* Filter chips */}
      <div className="mb-8 flex flex-wrap gap-2 print:hidden">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === c
                ? "border-signal bg-signal text-white"
                : "border-fog bg-white text-steel hover:border-ink hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <figure
            key={p.id}
            className="group break-inside-avoid overflow-hidden rounded-xl border border-fog bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-cloud">
              <Image
                src={p.imageSrc}
                alt={p.location ? `${p.signType} for ${p.title} in ${p.location}` : `${p.signType} design concept for ${p.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              {p.type === "concept" && (
                <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                  Design concept
                </span>
              )}
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

      {hasConcepts && (
        <p className="mt-6 text-xs text-steel">
          Cards marked <span className="font-semibold text-ink">“Design concept”</span> are design
          renderings that show what we can build for a brand — not photos of a finished install.
        </p>
      )}
    </div>
  );
}
