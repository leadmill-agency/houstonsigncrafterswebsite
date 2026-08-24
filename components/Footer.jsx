import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/data/business";
import { getAllServices } from "@/data/services";
import { getAllMarkets } from "@/data/markets";

// 4-column footer rendered on every page = the playbook's "no-orphans"
// internal-link pattern (Part 3.4). Every important page gets a site-wide
// inbound link here.
export default function Footer() {
  const services = getAllServices();
  const markets = getAllMarkets();

  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/logo-dark.png" alt="Houston Sign Crafters" width={1336} height={271} className="h-9 w-auto" />
            <p className="mt-3 text-sm leading-relaxed">{BUSINESS.tagline}</p>
            <p className="mt-4 text-sm">
              <a href={BUSINESS.phoneHref} className="font-semibold text-white hover:text-signal">
                {BUSINESS.phone}
              </a>
              <br />
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">{BUSINESS.email}</a>
              <br />
              <span className="text-white/60">{BUSINESS.hoursLabel}</span>
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50">Signs We Make</div>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white">{s.shortName}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50">Service Areas</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/locations" className="hover:text-white">Houston</Link></li>
              {markets.map((m) => (
                <li key={m.slug}>
                  <Link href={`/locations/${m.slug}`} className="hover:text-white">{m.city}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50">Company</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Our Work</Link></li>
              <li><Link href="/quote" className="hover:text-white">Get a Free Quote</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Sign Pricing</Link></li>
              <li><Link href="/sign-permits" className="hover:text-white">Sign Permits by City</Link></li>
              <li><Link href="/free-mockup" className="hover:text-white">Free Design Mockup</Link></li>
              <li><Link href="/guides/sign-permitting-checklist" className="hover:text-white">Sign Permitting Checklist</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/company-facts" className="hover:text-white">Company Facts</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {BUSINESS.legalName}. Serving Houston &amp; surrounding areas.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
