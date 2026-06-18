"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllServices } from "@/data/services";
import PhoneLink from "@/components/PhoneLink";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/locations", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const services = getAllServices();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-fog">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center" aria-label="Houston Sign Crafters — home">
            <Image
              src="/logo-light.png"
              alt="Houston Sign Crafters"
              width={1336}
              height={271}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-steel">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <PhoneLink className="text-sm font-semibold text-ink hover:text-signal-600 transition-colors" />
            <Link
              href="/quote"
              className="inline-flex items-center rounded-full bg-signal px-5 py-2.5 text-sm font-bold text-white hover:bg-signal-600 transition-colors"
            >
              Free Quote
            </Link>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded p-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-fog bg-white px-4 py-4">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="py-2 text-steel font-medium" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="py-1 text-sm text-steel" onClick={() => setOpen(false)}>
                  {s.shortName}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <PhoneLink className="rounded-full border border-ink px-5 py-2.5 text-center text-sm font-semibold text-ink" />
              <Link href="/quote" className="rounded-full bg-signal px-5 py-2.5 text-center text-sm font-bold text-white" onClick={() => setOpen(false)}>
                Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
