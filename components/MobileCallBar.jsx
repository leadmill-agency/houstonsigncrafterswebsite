"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PhoneLink from "@/components/PhoneLink";

// Sticky call bar on phones (owner 2026-10-08: "they should be able to call
// at all times"). Mobile only (lg:hidden); the desktop nav has Call Us Now.
// Appears only AFTER the hero has scrolled out of view (owner, same day), so
// it never duplicates the hero's call button: an IntersectionObserver watches
// the page's first <section> (every page's hero). Not rendered on
// /community-boards (own bar), /lp (form is the sole exit), /proposals
// (chrome-free). GTM's tel: click trigger records taps as phone_call_click.
export default function MobileCallBar() {
  const pathname = usePathname() || "";
  const hidden = ["/community-boards", "/lp", "/proposals"].some((p) => pathname.startsWith(p));
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (hidden) return;
    setPastHero(false);
    const hero = document.querySelector("main > section");
    if (!hero || typeof IntersectionObserver === "undefined") {
      const onScroll = () => setPastHero(window.scrollY > 600);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    // rootMargin shrinks the viewport by 1px at the top so a hero resting exactly
    // on the edge (edge-adjacent counts as intersecting) still flips the bar on.
    const io = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0, rootMargin: "-1px 0px 0px 0px" });
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname, hidden]);

  if (hidden) return null;
  return (
    <>
      <div aria-hidden="true" className="h-[4.25rem] lg:hidden" />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-fog bg-white/95 p-3 backdrop-blur transition-transform duration-300 ease-out lg:hidden ${
          pastHero ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!pastHero}
      >
        <PhoneLink className="btn btn-primary w-full justify-center" label="Call (832) 974-2546" />
      </div>
    </>
  );
}
