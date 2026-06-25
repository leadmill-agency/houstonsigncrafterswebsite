import { NextResponse, type NextRequest } from "next/server";

// Keep non-production hosts (the *.vercel.app preview, branch previews) OUT of
// Google's index until the real domain cuts over. Every page's canonical/OG
// already points at houstonsigncrafters.com, so the preview must not be
// indexable on its own URL — otherwise Google sees a canonical pointing to a
// different site (the old Framer build still on the live domain).
//
// Once DNS for houstonsigncrafters.com points at this deployment, the host
// matches PROD_HOST and indexing turns on automatically — no code change needed.
const PROD_HOST = "houstonsigncrafters.com";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase();
  const isProd = host === PROD_HOST || host === `www.${PROD_HOST}`;

  const res = NextResponse.next();
  if (!isProd) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
};
