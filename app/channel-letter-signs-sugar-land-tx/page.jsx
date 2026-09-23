import Link from "next/link";
import { BUSINESS } from "@/data/business";
import PhoneLink from "@/components/PhoneLink";
import Faq from "@/components/Faq";

// Sugar Land × channel letters — Growth OS weekly SEO scan draft (PB16,
// 2026-09-21), approved by Rameel 2026-09-23. Built on its own structure (three
// approval layers + redevelopment angle), NOT the Katy page's jurisdiction
// walkthrough, per the city-page boilerplate rule. Every Sugar Land fact below
// is from the official sources listed at the bottom; property-level landlord
// rules the research could not verify are deliberately left out.

export const metadata = {
  title: "Channel Letter Signs in Sugar Land, TX",
  description:
    "Channel letter storefront signs in Sugar Land: city permit, planned-development and First Colony sign reviews, and installation — built in our Houston shop.",
  alternates: { canonical: "/channel-letter-signs-sugar-land-tx" },
};

const LAYERS = [
  {
    title: "The city's sign code",
    body:
      "Sugar Land regulates signs through Chapter 4 of its Land Development Code. Sign permits are filed through the city's online Citizen Self Service portal, and reviewers check size limits and placement against the code before anything goes up.",
  },
  {
    title: "Planned developments and overlays",
    body:
      "Many Sugar Land properties sit inside a planned development with its own sign exhibits. The University Commons development, for example, includes final signage elevations in its ordinance, and the industrial corridor along US-90A has its own sign overlay district. These can change what size and style of letters a wall allows.",
  },
  {
    title: "Association and landlord review",
    body:
      "The First Colony Community Services Association publishes commercial signage guidelines covering many centers in the area and adopted an update in 2026. Landlords add their own storefront criteria on top, often in documents only tenants can access, so we ask the property manager for them before design starts.",
  },
];

const FAQS = [
  {
    q: "Do I need a city permit for channel letters in Sugar Land?",
    a: "Yes. Illuminated storefront channel letters need a sign permit from the City of Sugar Land, filed through its Citizen Self Service portal. We prepare the drawings and submit the application as part of the project.",
  },
  {
    q: "My center is in First Colony. Is the city permit enough?",
    a: "Often not. Many First Colony centers follow the association's commercial signage guidelines, and landlords usually have their own criteria as well. We get those documents from your property manager early so the design passes every review the first time.",
  },
  {
    q: "What if my storefront faces a toll road?",
    a: "Fort Bend County requires its own permit for signs visible from a county toll road. If your sign could be seen from one, we check that during the site survey and add the county submittal to your permit plan.",
  },
  {
    q: "Can the city's retail refresh grant help with a new sign?",
    a: "Possibly. Sugar Land launched its Enhanced Retail Refresh Grant in October 2025 to support commercial redevelopment. Eligibility and what it covers are set by the city's economic development team, so confirm with them before you count on it.",
  },
];

const SOURCES = [
  {
    label: "Sugar Land sign regulations (LDC Chapter 4)",
    url: "https://www.sugarlandtx.gov/DocumentCenter/View/32599/FINAL_SIGN-REG_DEC2023",
  },
  {
    label: "Sugar Land sign permit application",
    url: "https://www.sugarlandtx.gov/DocumentCenter/View/41362/Application---Sign-Permit",
  },
  {
    label: "University Commons planned development ordinance",
    url: "https://www.sugarlandtx.gov/DocumentCenter/View/38104/Ordinance-2041-University-Commons-FDP-with-Admin-Amendment-No-1",
  },
  {
    label: "First Colony commercial standards",
    url: "https://www.firstcolony.org/community-standards/commercial/",
  },
  { label: "Fort Bend County toll road permits", url: "https://www.fbctra.com/permits/" },
  {
    label: "Enhanced Retail Refresh Grant",
    url: "https://sugarlandecodev.com/release/sugar-land-launches-enhanced-retail-refresh-grant-to-boost-commercial-redevelopment",
  },
  {
    label: "Lake Pointe Redevelopment District",
    url: "https://sugarlandtx.gov/2512/Lake-Pointe-Redevelopment-District",
  },
  {
    label: "Imperial Historic District",
    url: "https://www.sugarlandtx.gov/2328/Imperial-Historic-District",
  },
];

export default function ChannelLettersSugarLandPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BUSINESS.url}/channel-letter-signs-sugar-land-tx#webpage`,
        url: `${BUSINESS.url}/channel-letter-signs-sugar-land-tx`,
        name: "Channel Letter Signs in Sugar Land, TX",
        about: { "@id": `${BUSINESS.url}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sugar Land, TX",
            item: `${BUSINESS.url}/locations/sugar-land-tx`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Channel Letter Signs",
            item: `${BUSINESS.url}/channel-letter-signs-sugar-land-tx`,
          },
        ],
      },
    ],
  };

  const link = "underline decoration-fog underline-offset-2 hover:decoration-signal";

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-signal-600">
          Sugar Land, TX · Channel Letters
        </p>
        <h1 className="text-4xl font-bold text-ink">Channel letter signs for Sugar Land storefronts</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-steel">
          Channel letters are the individual three-dimensional letters mounted across a
          storefront, usually lit with LEDs. In Sugar Land they do their best work where people
          already gather: the First Colony Mall and Sugar Land Town Square area around I-69 and
          SH-6, the Lake Pointe district north of SH-6, and the centers near Smart Financial
          Centre, where evening and event traffic keeps storefronts visible after dark.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-steel">
          Getting letters onto a Sugar Land wall usually means clearing more than one review. The
          city, the property&apos;s planned development, and the landlord or association can each
          have a say. We design, permit, build, and install channel letters for Sugar Land
          businesses, and we sort out which of those reviews apply before any metal is cut.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="btn btn-primary">Get My Quote</Link>
          <PhoneLink className="btn btn-outline-dark" label={`Call ${BUSINESS.phone}`} />
        </div>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">Three layers of approval in Sugar Land</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-steel">
            Most Sugar Land storefront signs answer to up to three sets of rules. Knowing which
            ones apply to your address is the first thing we check, because it decides the letter
            size, style, and lighting you can use.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {LAYERS.map((layer, i) => (
              <div key={layer.title} className="border border-fog bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-signal-600">
                  Layer {i + 1}
                </p>
                <h3 className="mt-1 font-semibold text-ink">{layer.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-steel">{layer.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-steel">
            Comparing suburbs? Our{" "}
            <Link href="/sign-permits" className={link}>
              sign permit guide
            </Link>{" "}
            covers who issues permits across the Houston area, with links to each office.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Refreshing an older Sugar Land storefront</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          Sugar Land has little open land left for new building, so much of its commercial
          activity is shifting to redeveloping existing retail and office centers. The city is
          leaning into that. Lake Pointe Green, the former Fluor campus near Smart Financial
          Centre, is approved for mixed-use redevelopment. The city also bought nearly 40 acres of
          the Imperial Historic District and ran a public visioning process for its future.
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          For a business in an older center, a new sign is often the most visible part of a
          refresh. Replacing faded cabinet signs or tired letters with new illuminated channel
          letters changes how a storefront reads from the road, day and night. In October 2025
          the city launched an Enhanced Retail Refresh Grant to support commercial redevelopment.
          The city&apos;s economic development team sets who qualifies, so check with them early
          if a refresh is on your list. If your existing sign structure is sound, a reface or
          upgrade may be enough; our{" "}
          <Link href="/services/sign-repair" className={link}>
            sign repair and refurbishment
          </Link>{" "}
          page explains when that makes sense.
        </p>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">Watch for the toll road rule</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-steel">
            Fort Bend County requires a separate permit for any sign that can be seen from a
            county toll road. It is easy to miss, because it has nothing to do with the city
            permit. During the site survey we look at sightlines from nearby roads, and if a
            county permit applies, we add it to your permit plan so it does not hold up your
            opening.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">How a Sugar Land project runs</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          It starts with a call. Tell us the address, the business name, and your property
          manager&apos;s contact if you have it. We then visit to measure the sign band, photograph
          the mounting surface, and confirm there is power for illuminated letters. From that
          visit you get a design mockup of the letters on your actual storefront, along with an
          itemized estimate that separates design, permits, fabrication, and installation. We
          don&apos;t quote before seeing the site, because Sugar Land&apos;s layered rules can
          change the design.
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          Once you approve, we collect the landlord or association sign-off, file the city permit
          through the portal, and handle any county submittal. The letters are cut, wired, and
          tested lit in our Houston shop, then our own crew installs them and coordinates the
          final inspection. Illuminated channel letters are UL-certified and carry our 5-year
          warranty on materials and workmanship. For more on the product itself, see our{" "}
          <Link href="/services/channel-letters" className={link}>
            channel letters page
          </Link>{" "}
          or finished work in the{" "}
          <Link href="/portfolio" className={link}>
            portfolio
          </Link>
          .
        </p>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <Faq items={FAQS} heading="Sugar Land channel letter questions" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Start with the address</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          Send us your storefront address and a photo of the building. We&apos;ll tell you which
          approval layers apply, book the site survey, and follow up with a mockup and itemized
          estimate. If your landlord&apos;s sign criteria are only available to tenants, forward
          them or give us the property manager&apos;s contact and we&apos;ll request them.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="btn btn-primary">Get My Quote</Link>
          <PhoneLink className="btn btn-outline-dark" label={`Call ${BUSINESS.phone}`} />
          <Link href="/locations/sugar-land-tx" className="btn btn-outline-dark">
            All Sugar Land Signage
          </Link>
        </div>
        <p className="mt-8 text-xs leading-relaxed text-steel">
          Sugar Land and Fort Bend County facts on this page come from official published sources,
          read in September 2026:{" "}
          {SOURCES.map((s, i) => (
            <span key={s.url}>
              {i > 0 && " · "}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className={link}>
                {s.label}
              </a>
            </span>
          ))}
          . Rules change, so confirm current requirements with the issuing office, or let us do it
          as part of your project.
        </p>
      </section>
    </main>
  );
}
