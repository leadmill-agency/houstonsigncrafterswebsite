"use client";

import { usePathname } from "next/navigation";

// Hides the site footer on landing pages (/lp/*) so ad traffic has a single
// conversion goal and no escape routes. The server <Footer/> is passed as children.
export default function FooterGate({ children }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/lp")) return null;
  return children;
}
