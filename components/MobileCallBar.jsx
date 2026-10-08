"use client";

import { usePathname } from "next/navigation";
import PhoneLink from "@/components/PhoneLink";

// Sticky call bar on phones (owner 2026-10-08: "when someone is scrolling they
// should be able to click the button where they can call people at all
// times"). Hidden on lg+ where the nav's Call Us Now pill is always visible.
// Not rendered on /community-boards (it has its own text/call bar), /lp (the
// form is the sole exit by design), or /proposals (chrome-free). The spacer
// keeps the footer from hiding under the fixed bar. GTM's tel: click trigger
// records taps as phone_call_click.
export default function MobileCallBar() {
  const pathname = usePathname() || "";
  if (["/community-boards", "/lp", "/proposals"].some((p) => pathname.startsWith(p))) return null;
  return (
    <>
      <div aria-hidden="true" className="h-[4.25rem] lg:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-fog bg-white/95 p-3 backdrop-blur lg:hidden">
        <PhoneLink className="btn btn-primary w-full justify-center" label="Call (832) 974-2546" />
      </div>
    </>
  );
}
