"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/data/business";
import { trackEvent } from "@/lib/analytics";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/locations", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar — local-business signals */}
      <div className="hidden bg-ink text-white/80 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 text-xs">
          <span className="tracking-wide">Houston, TX &nbsp;·&nbsp; In-house fabrication &amp; installation</span>
          <span className="flex items-center gap-4">
            <span className="text-white/55">{BUSINESS.hoursLabel}</span>
            <a
              href={BUSINESS.phoneHref}
              onClick={() => trackEvent("phone_click", { event_label: "nav_utility" })}
              className="font-semibold text-white hover:text-signal"
            >
              {BUSINESS.phone}
            </a>
          </span>
        </div>
      </div>

      <div className="border-b border-fog bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" className="flex items-center" aria-label="Houston Sign Crafters — home">
              <Image src="/logo-light.png" alt="Houston Sign Crafters" width={1336} height={271} priority className="h-9 w-auto" />
            </Link>

            <nav className="hidden items-center gap-7 text-[15px] font-semibold text-ink lg:flex">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-signal-600">
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href={BUSINESS.phoneHref}
                onClick={() => trackEvent("phone_click", { event_label: "nav" })}
                className="font-display text-sm font-semibold uppercase tracking-wide text-ink hover:text-signal-600"
              >
                {BUSINESS.phone}
              </a>
              <Link href="/quote" className="btn btn-primary btn-sm">Get a Quote</Link>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 text-ink"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-fog bg-white px-4 py-4 md:hidden">
            <nav className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="border-b border-fog py-3 font-semibold text-ink" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <a href={BUSINESS.phoneHref} className="btn btn-outline-dark w-full">{BUSINESS.phone}</a>
                <Link href="/quote" className="btn btn-primary w-full" onClick={() => setOpen(false)}>Get a Quote</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
