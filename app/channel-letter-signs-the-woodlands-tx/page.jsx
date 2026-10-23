import Link from "next/link";
import { BUSINESS } from "@/data/business";
import PhoneLink from "@/components/PhoneLink";
import Faq from "@/components/Faq";
import ReviewedBy from "@/components/ReviewedBy";

// The Woodlands × channel letters — Growth OS weekly SEO scan draft (PB16,
// 2026-10-12), merged with the same week's "business signage in The Woodlands"
// article draft (merge-don't-twin, Field Note 30). Rebuilt by Claude 2026-10-15
// as the numbers page: every rule below is quoted from the recorded August 2026
// Commercial Planning and Design Standards (Article VI), not the 2011 version
// the draft used. The general covenant explainer lives on
// /locations/the-woodlands-tx; this page must not repeat it.

export const metadata = {
  title: "Channel Letter Signs in The Woodlands, TX",
  description:
    "Channel letter signs in The Woodlands: the Township's 2026 sign rules in plain English, from letter height to return colors, plus Plan Review Committee approval and install.",
  alternates: { canonical: "/channel-letter-signs-the-woodlands-tx" },
};

const HEIGHTS = [
  ["50,000 sq ft or larger", "6 ft"],
  ["20,000 to 49,999 sq ft", "4 ft"],
  ["10,000 to 19,999 sq ft", "3 ft"],
  ["Under 10,000 sq ft", "2 ft"],
  ["In-line retail store", "2 ft"],
];

const RULES = [
  {
    title: "Channel letters are the required format",
    body:
      "Building signs must be individually mounted, fabricated metal channel letters or graphics with a closed acrylic face. Box (cabinet) signs are only considered in special cases, such as an unusually long business name.",
  },
  {
    title: "70% of the storefront, at most",
    body:
      "The sign can't be wider than 70% of your storefront, and it should sit centered in your part of the fascia band, ideally over the entry door.",
  },
  {
    title: "Returns in bronze, black, or the face color",
    body:
      "The sides of each letter must be dark bronze, black, or match the letter face. In a multi-tenant building, every tenant's returns must share the same color, depth, and material.",
  },
  {
    title: "Two lines and a small logo",
    body:
      "Copy is limited to two lines, with at least a sixth of the sign's height between them. A logo can take up no more than about 20% of the message, and only with approval.",
  },
  {
    title: "No visible raceways or wiring",
    body:
      "Exposed raceways, wireways, crossovers, transformers, and conduit aren't allowed unless the committee approves them. Letters are normally mounted flush with the power hidden behind the wall.",
  },
  {
    title: "Ground floor only on taller buildings",
    body:
      "On retail buildings more than one story tall, building signs can't go above the first floor. Retail tenants get one sign per street frontage, with a maximum of two.",
  },
];

const FAQS = [
  {
    q: "Who approves a channel letter sign in The Woodlands?",
    a: "The Plan Review Committee with jurisdiction over your site. Depending on the covenants that apply, that is the Development Review Committee, the Community Standards Committee, or the Development Standards Committee. Every sign that can be seen from outside the building must be submitted and approved before it's fabricated or installed.",
  },
  {
    q: "Can I use a cabinet sign instead of channel letters?",
    a: "Usually not. The standards limit building signs to individual channel letters with closed faces. A box sign may be allowed in special circumstances, for example to supplement letters for an unusually long business name, but that's decided case by case.",
  },
  {
    q: "My business name includes \"Woodlands.\" Does that change anything?",
    a: "Yes. The words \"The Woodlands\" and \"Woodlands\" are registered trademarks of The Woodlands Land Development Company. Any sign application using them is sent to the company, and the committee can't act on it for 20 days. If the company objects, the sign won't be approved, so plan for the wait or choose a different name on the sign.",
  },
  {
    q: "Can my sign show our phone number or website?",
    a: "Not on a building or monument sign unless the committee specifically allows it. Contact details, taglines, and hours belong on the small door graphic, which is limited to one square foot.",
  },
  {
    q: "Do I still need the county?",
    a: "The Township's approval is separate from government permits. The Woodlands covers south Montgomery County and north Harris County, and certificates of occupancy come from the county your site is in. We confirm the jurisdiction and any county requirements during the site survey.",
  },
];

const SOURCES = [
  {
    label: "Commercial Planning and Design Standards, recorded August 2026",
    url: "https://www.thewoodlandstownship-tx.gov/files/sharedassets/main/v/2/covenant-administration/documents/commercial-planning-and-design-standards-aug-2026-recorded.pdf",
  },
  {
    label: "The Woodlands Township Covenant Administration, commercial standards",
    url: "https://www.thewoodlandstownship-tx.gov/Departments/Covenant-Administration/Commercial-Standards",
  },
];

export default function ChannelLettersWoodlandsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BUSINESS.url}/channel-letter-signs-the-woodlands-tx#webpage`,
        url: `${BUSINESS.url}/channel-letter-signs-the-woodlands-tx`,
        name: "Channel Letter Signs in The Woodlands, TX",
        about: { "@id": `${BUSINESS.url}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "The Woodlands, TX",
            item: `${BUSINESS.url}/locations/the-woodlands-tx`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Channel Letter Signs",
            item: `${BUSINESS.url}/channel-letter-signs-the-woodlands-tx`,
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
          The Woodlands, TX · Channel Letters
        </p>
        <h1 className="text-4xl font-bold text-ink">Channel letter signs in The Woodlands</h1>
        <ReviewedBy className="mt-2" />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-steel">
          In most of the Houston area, channel letters are one choice among several. In The
          Woodlands they are effectively the rule. The Township&apos;s commercial standards limit
          building signs to individual channel letters with closed faces, and they set the
          letter height, width, return color, and number of lines your sign can have.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-steel">
          This page lays out those rules in plain English, from the version recorded in August
          2026, so you know what your sign can look like before you spend money on a design. We
          design, permit, build, and install channel letters for businesses in The Woodlands, and
          we prepare the Plan Review Committee submittal as part of the job.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="btn btn-primary">Get My Quote</Link>
          <PhoneLink className="btn btn-outline-dark" label={`Call ${BUSINESS.phone}`} />
        </div>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">How tall can your letters be?</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-steel">
            For retail signs, the maximum height for one line of copy depends on the size of the
            building, measured as gross building area. A two-line sign can be up to one and a
            half times the one-line height, including the space between the lines.
          </p>
          <div className="mt-6 max-w-xl overflow-hidden border border-fog bg-white">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-ink text-white">
                <tr>
                  <th className="px-4 py-2.5 font-semibold">Building size</th>
                  <th className="px-4 py-2.5 font-semibold">One-line sign height</th>
                </tr>
              </thead>
              <tbody>
                {HEIGHTS.map(([size, height]) => (
                  <tr key={size} className="border-t border-fog">
                    <td className="px-4 py-2.5 text-steel">{size}</td>
                    <td className="px-4 py-2.5 font-semibold text-ink">{height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-steel">
            Most shops in a strip center are in-line retail, so two feet is the number to design
            around. That&apos;s smaller than many owners expect, which is why we size the letters
            on a mockup of your actual storefront before anything is built.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">The rules that shape every sign</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          Beyond height, six rules decide most of what a Woodlands storefront sign looks like.
          Your center may add its own criteria on top, and those can be stricter.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RULES.map((rule) => (
            <div key={rule.title} className="border border-fog bg-white p-5">
              <h3 className="font-semibold text-ink">{rule.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-steel">{rule.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">Two surprises worth knowing early</h2>
          <h3 className="mt-5 font-semibold text-ink">A 20-day hold for &quot;Woodlands&quot; in the name</h3>
          <p className="mt-2 max-w-2xl leading-relaxed text-steel">
            &quot;The Woodlands&quot; and &quot;Woodlands&quot; are registered trademarks of The
            Woodlands Land Development Company. If your sign uses either word, the committee sends
            the application to the company and can&apos;t act on it for 20 days. If the company
            objects, the sign isn&apos;t approved. Businesses named after the area should build
            that wait into their opening schedule.
          </p>
          <h3 className="mt-6 font-semibold text-ink">No phone numbers, websites, or taglines</h3>
          <p className="mt-2 max-w-2xl leading-relaxed text-steel">
            Building and monument signs show the business name, and a short approved description
            if you need one. Phone numbers, websites, taglines, and hours aren&apos;t allowed on
            them unless the committee says otherwise. Those details go on one small white
            &quot;engraved look&quot; door graphic, limited to one square foot.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Replacing an old sign or moving out</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          The standards are strict about what happens to the wall. When a new sign replaces an
          old one, every exposed anchor hole has to be repaired and painted so no outline of the
          previous sign shows. When a business leaves, its building signs, monument panel, and
          visible window graphics must come down within 30 days, the facade must be patched and
          painted, and a blank panel goes into the monument sign.
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          That makes removal and wall repair part of the job, not an afterthought. We include
          both in the estimate when a project replaces an existing sign. If your letters are
          sound but dim, relighting them with new LEDs may be all you need; our{" "}
          <Link href="/services/sign-repair" className={link}>
            sign repair and refurbishment
          </Link>{" "}
          page explains when that works.
        </p>
      </section>

      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">How a Woodlands project runs</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-steel">
            It starts with a call. Send us the address, the business name, and your property
            manager&apos;s contact. We visit to measure the fascia band, check the building size
            that sets your height limit, and confirm power for illuminated letters. Some
            addresses near I-45 sit in Shenandoah or Oak Ridge North, which are separate cities
            with their own sign codes, so we confirm the jurisdiction at the same time.
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed text-steel">
            You then get a mockup of the letters on your storefront, drawn to the Township&apos;s
            limits, with an itemized estimate covering design, approvals, fabrication, and
            installation. Once you approve it, we prepare the Plan Review Committee submittal and
            handle any landlord sign-off. After approval, the letters are cut, wired, and tested
            lit in our Houston shop, and our own crew installs them. Illuminated channel letters
            are UL-certified and carry our 5-year warranty. More on the product itself is on our{" "}
            <Link href="/services/channel-letters" className={link}>
              channel letters page
            </Link>
            , and the{" "}
            <Link href="/locations/the-woodlands-tx" className={link}>
              The Woodlands signage page
            </Link>{" "}
            covers monuments and office signs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Faq items={FAQS} heading="The Woodlands channel letter questions" />
      </section>

      <section className="border-t border-fog bg-cloud">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-ink">Start with the address</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-steel">
            Send us your storefront address and a photo of the building. We&apos;ll tell you your
            height limit, book the site survey, and follow up with a mockup and itemized estimate.
            If your center has its own sign criteria, forward them or give us the property
            manager&apos;s contact and we&apos;ll request them.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/quote" className="btn btn-primary">Get My Quote</Link>
            <PhoneLink className="btn btn-outline-dark" label={`Call ${BUSINESS.phone}`} />
          </div>
          <p className="mt-8 text-xs leading-relaxed text-steel">
            The rules on this page are from The Woodlands Township&apos;s published standards,
            read in October 2026:{" "}
            {SOURCES.map((s, i) => (
              <span key={s.url}>
                {i > 0 && " · "}
                <a href={s.url} target="_blank" rel="noopener noreferrer" className={link}>
                  {s.label}
                </a>
              </span>
            ))}
            . Standards change and individual centers can add stricter criteria, so confirm with
            the Township or let us do it as part of your project.
          </p>
        </div>
      </section>
    </main>
  );
}
