import { Oswald, Public_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterGate from "@/components/FooterGate";
import Analytics from "@/components/Analytics";
import MetaPixel from "@/components/MetaPixel";
import { BUSINESS, SERVICE_AREAS } from "@/data/business";

// Oswald = condensed, signage-style display face for headlines (reads like
// fabricated channel lettering). Public Sans = sturdy, plain-spoken body grotesk.
const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const publicSans = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "Houston Sign Company | Custom Signs, Channel Letters & Vehicle Wraps",
    template: "%s | Houston Sign Crafters",
  },
  description:
    "Houston Sign Crafters is a custom sign company in Houston, TX — channel letters, monument signs, vehicle wraps, interior signs, and banners, designed, fabricated, permitted, and installed in-house. Free quote within one business day.",
  robots: "index, follow",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    title: "Houston Sign Company | Custom Signs, Channel Letters & Vehicle Wraps",
    description:
      "Custom signage designed, built, permitted, and installed by one Houston team. Channel letters, monument signs, vehicle wraps, banners, and more.",
    url: BUSINESS.url,
  },
  twitter: { card: "summary_large_image" },
  other: { "geo.region": "US-TX", "geo.placename": "Houston, Texas" },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
};

export default function RootLayout({ children }) {
  // Site-wide LocalBusiness schema with a stable @id so every page resolves to
  // one entity (playbook Part 1.3). Address/geo/sameAs come from data/business.js
  // — fill in the real values before launch.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    image: `${BUSINESS.url}/logo.png`,
    logo: `${BUSINESS.url}/logo.png`,
    description:
      "Custom sign company in Houston, TX offering channel letters, monument signs, vehicle wraps, wall graphics, banners, and event signage with in-house design, permitting, and installation.",
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: { "@type": "PostalAddress", ...BUSINESS.address },
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.latitude, longitude: BUSINESS.geo.longitude },
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "City", name })),
    sameAs: BUSINESS.sameAs,
    ...(BUSINESS.reviews?.rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(BUSINESS.reviews.rating),
            reviewCount: String(BUSINESS.reviews.countNumeric),
            bestRating: "5",
          },
        }
      : {}),
  };

  return (
    <html lang="en" className={`${oswald.variable} ${publicSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <MetaPixel />
      </head>
      <body className="font-sans antialiased">
        <Nav />
        {children}
        <FooterGate>
          <Footer />
        </FooterGate>
      </body>
    </html>
  );
}
