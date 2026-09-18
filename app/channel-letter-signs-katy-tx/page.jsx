import Link from "next/link";
import { BUSINESS } from "@/data/business";
import PhoneLink from "@/components/PhoneLink";
import Faq from "@/components/Faq";

// Katy × channel letters landing page — first page from the Growth OS weekly
// SEO scan (PB16, approved by Rameel 2026-09-18). Every jurisdiction/landlord
// fact below came from the cited official sources; anything the research
// couldn't verify was cut or hedged, per house rules. Companion to the general
// /locations/katy-tx city page — this one is product-specific and goes deeper
// on permitting jurisdictions, so the two don't overlap.

export const metadata = {
  title: "Channel Letter Signs in Katy, TX",
  description:
    "Channel letter signs for Katy storefronts: UL-certified, built in Houston, with survey, city or county permitting, and licensed installation handled in-house.",
  alternates: { canonical: "/channel-letter-signs-katy-tx" },
};

const JURISDICTIONS = [
  {
    name: "City of Katy",
    body:
      "Signs inside the city limits fall under City Code Article 3.06. Permits are required, new off-premise signs are prohibited, and tall ground signs often need an engineering seal. Work in the public right-of-way can trigger additional bonding requirements, so we plan for those checkpoints from day one.",
  },
  {
    name: "Harris County (unincorporated)",
    body:
      "Much of what locals call Greater Katy north and east of the city is unincorporated Harris County. The county requires permits for on-premise signs in its extra-territorial jurisdiction, scenic sections, and designated toll-road corridors.",
  },
  {
    name: "Fort Bend County",
    body:
      "South Katy — the Cinco Ranch and Grand Parkway areas — is largely Fort Bend County. The county requires a sign permit for any sign visible from a Fort Bend County toll road, such as parts of SH-99 south of Fry Road, with technical standards to meet before installation.",
  },
  {
    name: "Waller County",
    body:
      "The county publishes sign standard details for hardware and installation under its commercial permitting resources. County-level rules vary, so for addresses northwest of Katy we confirm submission requirements with the Waller County Engineer before designing.",
  },
];

const FAQS = [
  {
    q: "How long does the full process take, from survey to installation?",
    a: "Timelines vary by jurisdiction and landlord approvals. After the on-site survey we deliver a mockup and itemized estimate within a few business days. Permit review times differ between the City of Katy and the county offices; once permits and landlord approvals are in hand, fabrication and installation typically take a few weeks depending on complexity and electrical work. Every estimate includes a projected timeline.",
  },
  {
    q: "Do you handle landlord and HOA approvals?",
    a: "Yes. We prepare the drawings landlords and HOAs require, coordinate the submittal package, and can present mockups to sign committees when needed. For HOA-governed centers like Katy Asian Town we request the signage rules early so the design matches their criteria the first time.",
  },
  {
    q: "Which agency do you submit permits to in Katy?",
    a: "It depends on the property. Inside the incorporated City of Katy we submit to the city. In unincorporated Harris, Fort Bend, or Waller County we submit to the respective county office. We confirm the correct permitting agency during the on-site survey.",
  },
  {
    q: "Do you handle electrical connections and inspections?",
    a: "Yes. We coordinate licensed electricians for final wiring and schedule the required electrical inspections with the permitting authority. Electrical work and inspection fees appear as their own line in the itemized estimate.",
  },
  {
    q: "Are your channel letters UL-certified?",
    a: "Yes. We build illuminated channel letters in our own Houston shop to UL electrical and safety standards, and every sign is backed by our 5-year warranty on materials and workmanship.",
  },
];

const SOURCES = [
  { label: "City of Katy Code, Article 3.06 (Signs)", url: "https://ecode360.com/38863194" },
  {
    label: "Harris County sign permits (ETJ, scenic, toll roads)",
    url: "https://oce.harriscountytx.gov/Services/Permits/Permits-A-to-Z/Signs-Extra-Territorial-Jurisdiction-Scenic-Toll-Roads",
  },
  {
    label: "Fort Bend County sign permits",
    url: "https://www.fortbendcountytx.gov/government/departments/engineering/permits/sign-permits",
  },
  { label: "Waller County permits", url: "https://www.co.waller.tx.us/page/Permits" },
  {
    label: "TxDOT 2024 most-congested roadways",
    url: "https://www.txdot.gov/content/dam/docs/division/tpp/2024-top-100-congested-roadways-all-vehicles.pdf",
  },
  {
    label: "Brixmor storefront sign criteria",
    url: "https://www.brixmor.com/-/media/brixmor/tenants/tenants-pdfs-and-images/ordering-your-storefront-sign.pdf",
  },
];

export default function ChannelLettersKatyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BUSINESS.url}/channel-letter-signs-katy-tx#webpage`,
        url: `${BUSINESS.url}/channel-letter-signs-katy-tx`,
        name: "Channel Letter Signs in Katy, TX",
        about: { "@id": `${BUSINESS.url}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
          { "@type": "ListItem", position: 2, name: "Katy, TX", item: `${BUSINESS.url}/locations/katy-tx` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Channel Letter Signs",
            item: `${BUSINESS.url}/channel-letter-signs-katy-tx`,
          },
        ],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-signal-600">
          Katy, TX · Channel Letters
        </p>
        <h1 className="text-4xl font-bold text-ink">Channel letter signs in Katy, TX</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-steel">
          If your business fronts I-10, the Grand Parkway, or a busy Katy shopping center,
          illuminated channel letters are the clearest way to stand out day and night. Major
          centers around Katy — Katy Mills, LaCenterra at Cinco Ranch, the Katy Grand
          entertainment cluster, and HOA-governed centers like Katy Asian Town — typically accept
          or require individually lit letters for storefronts, which makes channel letters the
          fastest route to landlord approval as well as the most visible option for drive-by
          traffic.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-steel">
          Visibility is worth real money here: the Katy Freeway segment through the area ranked
          among Texas&apos; most congested roadways in TxDOT&apos;s 2024 list, and SH-99 Segment D
          improvements are in planning. Both corridors feed sustained retail growth, so a bright,
          well-engineered channel letter sign earns more nighttime and commuter exposure than a
          printed panel ever will.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="btn btn-primary">Get a Quote</Link>
          <PhoneLink className="btn btn-outline-dark" label={`Call ${BUSINESS.phone}`} />
        </div>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">
            Four jurisdictions, one trade area: how Katy permitting works
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-steel">
            Katy&apos;s trade area crosses the incorporated City of Katy and large unincorporated
            parts of Harris, Fort Bend, and Waller counties — and the rules you follow depend on
            the property&apos;s exact address. A single shopping center can even straddle a
            boundary. Before we cut metal or order LEDs, we verify which agency issues the permit
            and what paperwork it requires.
          </p>
          <div className="mt-6 space-y-5">
            {JURISDICTIONS.map((j) => (
              <div key={j.name}>
                <h3 className="font-semibold text-ink">{j.name}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-steel">{j.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-steel">
            Full jurisdiction-by-jurisdiction breakdown, with official sources:{" "}
            <Link href="/sign-permits" className="underline decoration-fog underline-offset-2 hover:decoration-signal">
              sign permits in Houston &amp; suburbs
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Landlord rules come on top of city rules</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          Many Katy centers maintain their own sign criteria in addition to municipal rules, and
          the big landlords put it in writing. Brixmor, which owns LaCenterra at Cinco Ranch,
          requires individual interior-lighted letters for most storefront signs unless a
          property-specific exception applies. Simon Property Group&apos;s tenant criteria at Katy
          Mills list internally illuminated and reverse channel letters among the permitted
          storefront sign types. Katy Asian Town operates under HOA signage rules of its own.
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          We review the landlord or HOA sign manual early in the design phase — before fabrication,
          not after — so your letters clear both the landlord&apos;s aesthetics and local code the
          first time. Newer planned developments like The Village at Katy and The Green at Katy
          Park carry sign standards in their adopted development documents too, and we design to
          those limits from the start.
        </p>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">
            Our process: call, survey, mockup with itemized estimate
          </h2>
          <ol className="mt-5 space-y-4">
            {[
              [
                "Call",
                "Tell us the business address and, if you have it, the name of your center or landlord. We note any known landlord or HOA criteria and whether your storefront fronts a pylon, a multi-tenant façade, or a pad site.",
              ],
              [
                "On-site survey",
                "Our surveyor measures the façade, photographs mounting conditions, and documents electrical access. If the sign touches a monument or pylon, we check pole clearances, easements, and right-of-way concerns.",
              ],
              [
                "Design mockup and itemized estimate",
                "You get a scaled mockup showing the proposed letters — front-lit, reverse, or halo — at street scale, plus an itemized estimate that separates design, permitting, electrical, fabrication, and installation, and names the permit agency for your address.",
              ],
              [
                "Permitting and landlord approval",
                "With your go-ahead we secure landlord sign-off, prepare permit drawings, and submit to the correct city or county office — handling resubmittals, engineering seals for tall ground signs, and any bonding or right-of-way forms.",
              ],
              [
                "Fabrication and install",
                "We fabricate in our Houston shop to UL standards, coordinate a licensed electrician for final wiring, install with our own crews, and provide the documentation needed to close the permit.",
              ],
            ].map(([title, body], i) => (
              <li key={title} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center bg-signal text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-steel">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Built to the standards inspectors check</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          Every illuminated channel letter set we build is UL-certified for electrical safety. Tall
          ground signs — particularly inside City of Katy limits — commonly need a sealed
          engineering drawing before the permit is issued, and we coordinate licensed structural
          engineers when code or landlord requires one. Electrical hookups meet local code and are
          inspected by a licensed electrician, scheduled alongside installation so power and
          inspection line up with your opening date. Learn more about the product itself on our{" "}
          <Link href="/services/channel-letters" className="underline decoration-fog underline-offset-2 hover:decoration-signal">
            channel letters service page
          </Link>{" "}
          or see the{" "}
          <Link href="/portfolio" className="underline decoration-fog underline-offset-2 hover:decoration-signal">
            portfolio
          </Link>
          .
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          After installation, our in-house crews handle maintenance, LED replacements, and
          post-install adjustments, and every sign carries our 5-year warranty on materials and
          workmanship. If a landlord or inspector requests an as-built drawing, we supply it.
        </p>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <Faq items={FAQS} heading="Katy channel letter questions" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Next steps</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          Call or email with your business address, center name, and a short description of the
          sign you want. We&apos;ll confirm the permitting jurisdiction, schedule the on-site
          survey, and prepare a scaled mockup with an itemized estimate. Because Katy splits across
          city and county lines, that survey is what tells us whether your permit goes to the City
          of Katy, Harris County, Fort Bend County, or Waller County — and which landlord documents
          we&apos;ll need.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="btn btn-primary">Get a Quote</Link>
          <PhoneLink className="btn btn-outline-dark" label={`Call ${BUSINESS.phone}`} />
          <Link href="/locations/katy-tx" className="btn btn-outline-dark">All Katy Signage</Link>
        </div>
        <p className="mt-8 text-xs leading-relaxed text-steel">
          Jurisdiction and landlord facts on this page were read from official published sources in
          September 2026:{" "}
          {SOURCES.map((s, i) => (
            <span key={s.url}>
              {i > 0 && " · "}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline decoration-fog underline-offset-2 hover:decoration-signal">
                {s.label}
              </a>
            </span>
          ))}
          . Rules change — always confirm current requirements with the issuing office, or let us do
          it as part of your project.
        </p>
      </section>
    </main>
  );
}
