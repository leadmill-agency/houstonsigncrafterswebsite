"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  // Landing pages (/lp/*) are chrome-free for ad conversion — no nav escape routes.
  if (pathname?.startsWith("/lp")) return null;

  return (
    <header className="sticky top-0 z-50">
      {/* Contact topbar — phone always, email from sm up. */}
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-1.5 text-[13px] sm:gap-3 sm:px-6">
          <span className="text-white/60">Call us now:</span>
          <a
            href={BUSINESS.phoneHref}
            onClick={() => trackEvent("phone_click", { event_label: "topbar" })}
            className="font-semibold text-white transition-colors hover:text-signal"
          >
            {BUSINESS.phone}
          </a>
          <span className="hidden text-white/30 sm:inline" aria-hidden="true">|</span>
          <span className="hidden text-white/60 sm:inline">Email:</span>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="hidden font-semibold text-white transition-colors hover:text-signal sm:inline"
          >
            {BUSINESS.email}
          </a>
        </div>
      </div>
      <div className="border-b border-fog bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between gap-4 lg:h-24">
            <Link href="/" className="flex items-center" aria-label="Houston Sign Crafters home">
              <Image
                src="/logo-light.png"
                alt="Houston Sign Crafters"
                width={1336}
                height={271}
                priority
                className="h-11 w-auto sm:h-12 lg:h-14"
              />
            </Link>

            <nav className="hidden items-center gap-6 text-[15px] font-semibold text-ink lg:flex">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="whitespace-nowrap transition-colors hover:text-signal-600">
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Two CTAs: booking (secondary, dark) + quote (primary). Phone stays in the topbar. */}
            <div className="hidden items-center gap-3 md:flex">
              <Link href="/book" className="btn btn-dark whitespace-nowrap">
                <CalendarIcon />
                Schedule a Call
              </Link>
              <Link href="/quote" className="btn btn-primary whitespace-nowrap">
                Get A Quote
                <ArrowIcon />
              </Link>
            </div>

            <button
              className="md:hidden relative inline-flex h-11 w-11 items-center justify-center text-ink transition-transform active:scale-[0.96]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {/* Both icons stay mounted and cross-fade (opacity + scale + blur)
                  so the swap has an enter AND an exit — no dependency needed. */}
              <MenuIcon path="M3 12h18M3 6h18M3 18h18" visible={!open} />
              <MenuIcon path="M18 6 6 18M6 6l12 12" visible={open} />
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
                <Link href="/book" className="btn btn-dark w-full" onClick={() => setOpen(false)}>
                  <CalendarIcon />
                  Schedule a Call
                </Link>
                <Link href="/quote" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
                  Get a Quote
                  <ArrowIcon />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// CTA glyphs — same 2px stroke as the menu icon so the icon set reads as one system.
function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="btn-arrow">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// Cross-faded menu glyph. Uses the skill's exact icon-swap values —
// scale 0.25→1, opacity 0→1, blur 4px→0 — on a cubic-bezier(0.2,0,0,1) ease.
function MenuIcon({ path, visible }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="absolute transition-[opacity,scale,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)]"
      style={{
        opacity: visible ? 1 : 0,
        scale: visible ? "1" : "0.25",
        filter: visible ? "blur(0px)" : "blur(4px)",
      }}
    >
      <path d={path} />
    </svg>
  );
}
