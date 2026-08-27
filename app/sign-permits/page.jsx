import Link from "next/link";
import { BUSINESS } from "@/data/business";
import PhoneLink from "@/components/PhoneLink";

// Sign permits by jurisdiction — the topical-authority anchor page. EVERY fact
// below was read from the official government/covenant source on 2026-08-23;
// sources are linked inline and listed at the bottom. Do not add claims that
// aren't in the cited sources (house rule). Only Houston + Harris County
// publish processing times — no times are stated for the others on purpose.

export const metadata = {
  title: "Sign Permits in Houston & Suburbs",
  description:
    "Which office issues your sign permit in Houston, Katy, Sugar Land, The Woodlands, and nearby: official sources, applications, and what each review checks.",
  alternates: { canonical: "/sign-permits" },
};

const JURISDICTIONS = [
  {
    id: "houston",
    name: "City of Houston",
    authority: "Sign Administration (Houston Public Works) via the Houston Permitting Center",
    facts: [
      "Signs are governed by Chapter 46 of the City of Houston Building Code. Erecting, reconstructing, altering, relocating, or using a sign requires a written permit from the Sign Administrator (Sec. 4605(a)), with limited exceptions.",
      "Most sign permits are issued only to licensed sign contractors. Owners can self-permit only certain small non-electrical signs (ground signs up to 60 sq ft and 8 ft tall, or wall signs up to 16 ft above grade).",
      "Scenic and historic districts add review: designated scenic rights-of-way have their own rules, and in historic districts the Planning Department requires a Certificate of Appropriateness for exterior changes, including signs.",
      "The city's stated processing time is 4–11 business days, with fees starting around $69 plus per-square-foot charges over 32 sq ft.",
    ],
    links: [
      { label: "Sign Administration", url: "https://www.houstonpermittingcenter.org/building-code-enforcement/sign-administration" },
      { label: "Houston Sign Code (Ch. 46, PDF)", url: "https://www.houstonpermittingcenter.org/media/5591/download" },
      { label: "On-Premise Sign Permit Application (PDF)", url: "https://www.houstonpermittingcenter.org/media/6006/download" },
      { label: "Fees & processing times", url: "https://www.houstonpermittingcenter.org/hpwcode1112" },
    ],
  },
  {
    id: "katy",
    name: "City of Katy",
    authority: "Permit and Building Services Division (applications via the Civic Access portal)",
    facts: [
      "Katy's sign rules live in Article 3.06 (\"Signs\") of the city's Code of Ordinances; the city has adopted the 2021 International Building Codes and 2023 National Electrical Code.",
      "Applications, plan submittal, payment, and inspections all run through Katy's online Civic Access portal.",
    ],
    links: [
      { label: "Permits & Building Services", url: "https://www.cityofkaty.com/government/city-departments/permits-building" },
      { label: "Sign Permit Application (PDF)", url: "https://www.cityofkaty.com/home/showpublisheddocument/9803/638847981559670000" },
    ],
  },
  {
    id: "sugar-land",
    name: "City of Sugar Land",
    authority: "Permits & Inspections; sign rules in Development Code Chapter 4 (Planning & Development Services)",
    facts: [
      "Placing, erecting, replacing, or altering a monument sign requires a sign permit first; repainting or changing only the letters/message does not. Monument-sign permits are valid 180 days.",
      "Sugar Land prohibits several sign types outright, including electronic signs, revolving or moving signs, and portable signs.",
      "Monument sizes are capped by district (36 sq ft/4 ft in residential, 60 sq ft/6 ft nonresidential, 100 sq ft/10 ft with US-59 frontage), with setback and spacing rules.",
      "One temporary unlighted freestanding sign (up to 32 sq ft, 10 ft) is allowed without a permit for up to 75 days per calendar year.",
    ],
    links: [
      { label: "Permits & Inspections", url: "https://www.sugarlandtx.gov/2362/Permits-Inspections" },
      { label: "Sign Regulations: key excerpts (PDF)", url: "https://www.sugarlandtx.gov/DocumentCenter/View/32599/FINAL_SIGN-REG_DEC2023" },
    ],
  },
  {
    id: "the-woodlands",
    name: "The Woodlands Township",
    authority: "Covenant Administration / Development Standards Committee (covenant review, not a city permit office)",
    facts: [
      "The Woodlands works differently: it's covenant (deed-restriction) review. The Commercial Planning and Design Standards cover signage, and all exterior improvements must be approved by the appropriate Plan Review Committee before construction begins.",
      "Applications go through the Township's Civic Access portal; the Development Standards Committee oversees commercial projects.",
    ],
    links: [
      { label: "Covenant Administration", url: "https://www.thewoodlandstownship-tx.gov/Departments/Covenant-Administration" },
      { label: "Commercial Planning & Design Standards (PDF)", url: "https://www.thewoodlandstownship-tx.gov/files/sharedassets/main/v/2/covenant-administration/documents/commercial-planning-and-design-standards-aug-2026-recorded.pdf" },
    ],
  },
  {
    id: "pearland",
    name: "City of Pearland",
    authority: "Community Development, Planning Division",
    facts: [
      "A sign permit is required before erecting, installing, or modifying any sign, under the Sign Ordinance (Chapter 4, Division 5).",
      "All permanent signs requiring a permit must have their design certified by a professional engineer for structural integrity.",
      "New tenants and name changes need an approved Operating Certificate or Certificate of Occupancy first, and a Business Registration must be on file for the address.",
    ],
    links: [
      { label: "Sign Standards & Requirements", url: "https://www.pearlandtx.gov/departments/community-development/planning/sign-permits" },
      { label: "Sign Permit Checklist (PDF)", url: "https://www.pearlandtx.gov/home/showpublisheddocument/35339/638725565375330000" },
    ],
  },
  {
    id: "pasadena",
    name: "City of Pasadena",
    authority: "Permit Department",
    facts: [
      "The sign permit application requires a licensed sign contractor's number and signature, and illuminated signs need a separate electrical permit pulled by a licensed electrical or sign electrical contractor.",
      "Pylon and monument signs need a scaled site plan, structural design per the City Building Code, electrical design per the City Electrical Code, an elevation drawing, and landscaping around the sign per city ordinance.",
      "All foundations must be inspected before concrete is poured.",
    ],
    links: [
      { label: "Permits & Licenses", url: "https://www.pasadenatx.gov/399/Permits-Licenses" },
      { label: "Sign Installation Permit Application (PDF)", url: "https://www.pasadenatx.gov/DocumentCenter/View/1045/Sign-Installation-Permit-Application-PDF" },
    ],
  },
  {
    id: "harris-county",
    name: "Spring & Cypress (unincorporated Harris County)",
    authority: "Harris County Engineering Department, Permits Division, Sign Permitting Group",
    facts: [
      "Yes, the county itself permits signs: permits are required before placing on-premise signs in unincorporated Harris County, which covers most of Spring and Cypress.",
      "New off-premise signage (billboards) is prohibited countywide.",
      "Banners over 40 sq ft need a permit; up to 5 on-premise signs can be permitted per business address; ground signs 30 ft or taller need engineer-sealed foundation drawings and a hole inspection.",
      "The county's stated plan-review time is 3–5 business days; permits are valid 180 days and all signs are inspected.",
    ],
    links: [
      { label: "Harris County sign permits", url: "https://oce.harriscountytx.gov/Services/Permits/Permits-A-to-Z/Signs-Extra-Territorial-Jurisdiction-Scenic-Toll-Roads" },
      { label: "Sign Permit Checklist (PDF)", url: "https://oce.harriscountytx.gov/Portals/43/Documents/Permits/Sign_flyer_chklst_201706.pdf" },
    ],
  },
];

export default function SignPermitsPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
      { "@type": "ListItem", position: 2, name: "Sign Permits by Jurisdiction", item: `${BUSINESS.url}/sign-permits` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <p className="eyebrow text-signal">Permitting, demystified</p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Sign permits in Houston &amp; the surrounding cities: who issues what
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Every jurisdiction in the metro runs sign permits differently: different office,
            different code, different quirks. Here's the map, sourced from each authority's own
            published rules.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="answer-block">
          <p>
            In the Houston metro, who issues your sign permit depends on the address: the City of
            Houston's Sign Administration (Chapter 46 of the Building Code, 4–11 business days),
            each suburb's own permit office (Katy, Sugar Land, Pearland, Pasadena), The Woodlands'
            covenant review committees, or Harris County itself for unincorporated areas like most
            of Spring and Cypress (3–5 business days). Most permanent signs need a permit, most
            jurisdictions require a licensed sign contractor, and illuminated signs usually add an
            electrical permit. We handle the correct jurisdiction's process as part of every job.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <caption className="sr-only">Sign permit authorities by jurisdiction</caption>
            <thead>
              <tr className="border-b-2 border-ink text-left">
                <th className="py-2.5 pr-4 font-semibold text-ink">Where</th>
                <th className="py-2.5 pr-4 font-semibold text-ink">Who reviews it</th>
                <th className="py-2.5 font-semibold text-ink">Stated processing time</th>
              </tr>
            </thead>
            <tbody>
              {JURISDICTIONS.map((j) => (
                <tr key={j.id} className="border-b border-fog align-top">
                  <th scope="row" className="py-2.5 pr-4 text-left font-medium text-ink">
                    <a href={`#${j.id}`} className="underline decoration-fog underline-offset-2 hover:decoration-signal">{j.name}</a>
                  </th>
                  <td className="py-2.5 pr-4 text-steel">{j.authority}</td>
                  <td className="py-2.5 text-steel">
                    {j.id === "houston" ? "4–11 business days" : j.id === "harris-county" ? "3–5 business days" : "Not published"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {JURISDICTIONS.map((j, i) => (
        <section key={j.id} id={j.id} className={i % 2 === 0 ? "border-y border-fog bg-cloud" : ""}>
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
            <h2 className="text-2xl font-bold text-ink">{j.name}</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-signal-600">{j.authority}</p>
            <ul className="mt-4 space-y-2.5">
              {j.facts.map((f) => (
                <li key={f.slice(0, 40)} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-steel">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 bg-signal" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-steel">
              Official sources:{" "}
              {j.links.map((l, k) => (
                <span key={l.url}>
                  {k > 0 && " · "}
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="underline decoration-fog underline-offset-2 hover:decoration-signal">
                    {l.label}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">The part nobody tells you</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-steel">
          City code is only half the approval. Your landlord's sign criteria (letter style, colors,
          mounting) apply on top of everything above, and a sign can pass the city and still get
          rejected by the property. The order that avoids paying for a sign twice: lease criteria
          first, jurisdiction rules second, permit approval third, fabrication last. That's the
          order we run on every job: we confirm the criteria, prepare permit-ready drawings, submit
          to the right office above, and install after approval.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="btn btn-primary">Get a Permit-Ready Quote</Link>
          <PhoneLink className="btn btn-outline-dark" label={`Call ${BUSINESS.phone}`} />
          <Link href="/guides/sign-permitting-checklist" className="btn btn-outline-dark">Free Permitting Checklist</Link>
        </div>
        <p className="mt-8 text-xs leading-relaxed text-steel">
          Facts on this page were read from each authority's official published sources (linked
          above) in August 2026. Rules change, so always confirm current requirements with the issuing
          office, or let us do it as part of your project.
        </p>
      </section>
    </main>
  );
}
