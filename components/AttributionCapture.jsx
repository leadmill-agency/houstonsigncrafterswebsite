"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution } from "@/lib/attribution";

// Runs the attribution capture on first load AND on client-side
// navigations (a tagged link can land mid-session). Reads the query
// string straight off window.location, so no useSearchParams (which
// would force a Suspense boundary in the root layout). Renders nothing.
export default function AttributionCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureAttribution();
  }, [pathname]);
  return null;
}
