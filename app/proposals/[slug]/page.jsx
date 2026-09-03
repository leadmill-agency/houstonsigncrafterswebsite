import { Fragment } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProposal, getProposalSlugs } from "@/data/proposals";
import { BUSINESS } from "@/data/business";
import PORTFOLIO from "@/data/portfolio";
import { TESTIMONIALS } from "@/data/testimonials";
import LeadForm from "@/components/LeadForm";
import { ProposalTracking, ProposalAction } from "@/components/ProposalClient";

// Unlisted client proposal pages (PRD: Website Proposal Links/). Not linked
// from navigation, not in the sitemap, noindexed. Editorial document layout
// (ploy.ai-style numbered sections, whitespace over borders) per the approved
// redesign plan; print CSS strips chrome for the PDF.

export function generateStaticParams() {
  return getProposalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProposal(slug);
  if (!p) return {};
  return {
    title: `${p.projectName} Signage Proposal`,
    description: `Signage fabrication, permitting, and installation proposal for ${p.client} #${p.proposalId.split("-").pop()} at ${p.projectAddress.split(",")[0]} in Houston.`,
    robots: { index: false, follow: false, noarchive: true },
  };
}

const money = (n) => `$${n.toLocaleString("en-US")}`;

// Ploy-style section heading: a big light numeral anchoring a bold title.
function SectionHead({ n, children }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="section-num" aria-hidden="true">{n}</span>
      <h2>{children}</h2>
    </div>
  );
}

export default async function ProposalPage({ params }) {
  const { slug } = await params;
  const p = getProposal(slug);
  if (!p) notFound();

  const deposit = (p.subtotal * p.depositPercent) / 100;
  const eventProps = { proposal_id: p.proposalId, client: p.client, location: "Houston", proposal_value: p.subtotal, proposal_version: p.version };
  const mailtoAgreement = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(`${p.projectName} #${p.proposalId.split("-").pop()} - Request Agreement and Site Survey`)}&body=${encodeURIComponent(`We would like to move forward with the ${p.projectName} signage proposal dated ${p.proposalDate}. Please send the final agreement and deposit invoice and coordinate the site survey.`)}`;

  const evidence = (p.evidencePortfolioIds || [])
    .map((id) => PORTFOLIO.find((x) => x.id === id))
    .filter(Boolean);
  const review = Number.isInteger(p.testimonialIndex) ? TESTIMONIALS[p.testimonialIndex] : null;

  // Grouped scope rows mirror the at-a-glance figures so the table is auditable.
  const groups = [
    { label: "Exterior identity", ids: ["east-logo", "south-logo", "north-logo", "stencil"] },
    { label: "Drive-thru", ids: ["canopy", "wayfinding"] },
    { label: "Interior", ids: ["veggie-letters", "round-sign", "entrance-sign"] },
    { label: "Project-wide", ids: ["install", "permit", "engineering"] },
  ].map((g) => ({ ...g, items: g.ids.map((id) => p.scopeItems.find((it) => it.id === id)).filter(Boolean) }));

  return (
    <main className="proposal-doc min-h-screen" style={{ background: "#F7F9FC", color: "#17202A" }}>
      <ProposalTracking proposalId={p.proposalId} client={p.client} value={p.subtotal} version={p.version} />
      <style>{`
        .proposal-doc { font-size: 17px; }
        .proposal-doc .doc { max-width: 820px; margin: 0 auto; padding: 0 22px; }
        .proposal-doc .doc-wide { max-width: 1000px; margin: 0 auto; padding: 0 22px; }
        .proposal-doc h2 { font-family: var(--font-display); font-size: 1.9rem; color: #0B2E59; letter-spacing: 0.01em; }
        .proposal-doc .section-num { font-family: var(--font-display); font-size: 2.6rem; font-weight: 700; color: #C7D6E8; line-height: 1; }
        .proposal-doc section { padding: 44px 0; }
        .proposal-doc section + section { border-top: 1px solid #E4EAF1; }
        .proposal-doc .btn-prop { display: inline-flex; align-items: center; justify-content: center; padding: 0.7rem 1.4rem; font-family: var(--font-display); font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 3px; white-space: nowrap; }
        .proposal-doc .btn-prop-primary { background: #1155AA; color: #fff; }
        .proposal-doc .btn-prop-primary:hover { background: #0B2E59; }
        .proposal-doc .btn-prop-ghost { border: 1px solid #D9E1EA; color: #0B2E59; background: #fff; }
        .proposal-doc .btn-prop-ghost:hover { border-color: #1155AA; }
        .proposal-doc .tick { display: inline-block; width: 7px; height: 7px; flex: none; margin-top: 9px; }
        @media print {
          .no-print { display: none !important; }
          .proposal-doc { background: #fff !important; font-size: 12px; }
          .proposal-doc section { break-inside: avoid; padding: 22px 0; }
        }
      `}</style>

      {/* Sticky action header */}
      <header className="no-print sticky top-0 z-50 border-b border-[#E4EAF1] bg-white/95 backdrop-blur">
        <div className="doc-wide flex h-16 items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Image src="/logo-light.png" alt="Houston Sign Crafters" width={1336} height={271} className="h-8 w-auto flex-none" />
            <span className="hidden truncate text-sm text-[#667085] md:inline">
              {p.projectName} · Proposal #{p.proposalId}
            </span>
          </div>
          <div className="flex flex-none items-center gap-2">
            <ProposalAction kind="pdf" href={p.pdfUrl} className="btn-prop btn-prop-ghost hidden sm:inline-flex" eventProps={eventProps}>
              Download PDF
            </ProposalAction>
            <ProposalAction kind="agreement" href="#request" className="btn-prop btn-prop-primary" eventProps={eventProps}>
              Request Agreement
            </ProposalAction>
          </div>
        </div>
      </header>

      {/* Cover */}
      <div className="border-b border-[#E4EAF1] bg-white">
        <div className="doc py-16">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[#1155AA]">
            Signage fabrication and installation proposal
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-none text-[#0B2E59] sm:text-6xl">{p.projectName}</h1>
          <p className="mt-3 text-lg text-[#3d4a5c]">{p.projectAddress}</p>
          <p className="mt-1.5 text-[15px] text-[#667085]">
            3 illuminated exterior identity signs · 2 drive-thru structures · 3 interior elements
          </p>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <dl className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
              <div><dt className="text-[#667085]">Prepared for</dt><dd className="font-semibold">{p.preparedFor}</dd></div>
              <div><dt className="text-[#667085]">Prepared by</dt><dd className="font-semibold">Houston Sign Crafters</dd></div>
              <div><dt className="text-[#667085]">Proposal date</dt><dd className="font-semibold">{p.proposalDate}</dd></div>
              <div><dt className="text-[#667085]">Valid through</dt><dd className="font-semibold">{p.validThrough}</dd></div>
            </dl>
            <div className="flex-none border-t-2 border-[#0B2E59] pt-3 sm:text-right">
              <div className="text-sm text-[#667085]">Total investment</div>
              <div className="font-display text-4xl font-bold text-[#0B2E59]">{money(p.subtotal)}</div>
              <div className="text-xs text-[#667085]">{p.salesTaxLabel}</div>
            </div>
          </div>

          <div className="no-print mt-10 flex flex-col gap-3 sm:flex-row">
            <ProposalAction kind="agreement" href="#request" className="btn-prop btn-prop-primary" eventProps={eventProps}>
              Request Agreement &amp; Schedule Survey
            </ProposalAction>
            <ProposalAction kind="pdf" href={p.pdfUrl} className="btn-prop btn-prop-ghost" eventProps={eventProps}>
              Download PDF
            </ProposalAction>
          </div>
        </div>
      </div>

      <div className="doc">
        {/* 01 Executive summary */}
        <section>
          <SectionHead n="01">Executive summary</SectionHead>
          <p className="mt-5 leading-relaxed">{p.summary}</p>
          <p className="mt-4 leading-relaxed text-[#3d4a5c]">{p.objective}</p>
        </section>

        {/* 02 Scope and investment */}
        <section>
          <SectionHead n="02">Scope and investment</SectionHead>
          <div className="mt-6 overflow-x-auto rounded-sm border border-[#D9E1EA] bg-white p-1">
            <table className="w-full border-collapse text-[15px]">
              <thead>
                <tr className="text-left font-display text-xs uppercase tracking-wider text-[#667085]">
                  <th className="px-4 py-3">Item</th>
                  <th className="hidden px-4 py-3 sm:table-cell">Description</th>
                  <th className="px-4 py-3 text-right">Qty.</th>
                  <th className="px-4 py-3 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((g) => (
                  <Fragment key={g.label}>
                    <tr>
                      <td colSpan={4} className="border-t border-[#E4EAF1] px-4 pb-1 pt-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-[#1155AA]">
                        {g.label}
                      </td>
                    </tr>
                    {g.items.map((it) => (
                      <tr key={it.id} className="align-top">
                        <td className="px-4 py-2.5 font-semibold text-[#17202A]">
                          {it.title}
                          <div className="mt-1 text-[13px] font-normal leading-snug text-[#667085] sm:hidden">{it.description}</div>
                        </td>
                        <td className="hidden px-4 py-2.5 text-[13px] leading-snug text-[#667085] sm:table-cell">{it.description}</td>
                        <td className="whitespace-nowrap px-4 py-2.5 text-right text-[#3d4a5c]">{it.quantity}</td>
                        <td className="whitespace-nowrap px-4 py-2.5 text-right font-semibold">{money(it.price)}</td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
                <tr className="border-t-2 border-[#0B2E59]">
                  <td className="px-4 py-4 font-display text-sm font-bold uppercase tracking-wider text-[#0B2E59]" colSpan={2}>
                    Total project investment
                  </td>
                  <td className="hidden sm:table-cell" />
                  <td className="whitespace-nowrap px-4 py-4 text-right font-display text-2xl font-bold text-[#0B2E59]">{money(p.subtotal)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-[#667085]">
            <span className="font-display text-xs font-bold uppercase tracking-wider text-[#F47B20]">Note </span>
            {p.pricingNote}
          </p>

          {review && (
            <figure className="mt-10">
              <blockquote className="text-xl leading-relaxed text-[#17202A]">"{review.quote}"</blockquote>
              <figcaption className="mt-3 text-sm text-[#667085]">
                <span className="font-semibold text-[#17202A]">{review.name}</span> · {review.platform} review of Houston Sign Crafters
              </figcaption>
            </figure>
          )}
        </section>

        {/* 03 What is included */}
        <section>
          <SectionHead n="03">What is included</SectionHead>
          <ul className="mt-6 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
            {p.inclusions.map((inc) => (
              <li key={inc} className="flex items-start gap-2.5">
                <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="#176B45" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1.5 flex-none" aria-hidden="true">
                  <path d="M3 10.5l4.5 4.5L17 5.5" />
                </svg>
                <span>{inc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 04 Schedule */}
        <section>
          <SectionHead n="04">Schedule</SectionHead>
          <ol className="mt-6 space-y-4">
            {p.schedule.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="font-display text-lg font-bold text-[#C7D6E8]" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="font-semibold text-[#17202A]">{s.title}</span>
                  {s.timing && <span className="ml-2 text-[15px] text-[#1155AA]">{s.timing}</span>}
                  <span className="ml-2 text-[15px] text-[#667085]">{s.description}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#3d4a5c]">{p.scheduleStatement}</p>
        </section>

        {/* 05 Responsibilities and exclusions */}
        <section>
          <SectionHead n="05">Responsibilities and exclusions</SectionHead>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#0B2E59]">Houston Sign Crafters</h3>
              <ul className="mt-3 space-y-2 text-[15px]">
                {p.responsibilities.hsc.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <span className="tick" style={{ background: "#0B463B" }} aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#0B2E59]">Customer, landlord, or general contractor</h3>
              <ul className="mt-3 space-y-2 text-[15px]">
                {p.responsibilities.customer.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <span className="tick" style={{ background: "#F47B20" }} aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className="mt-9 font-display text-sm font-bold uppercase tracking-wider text-[#0B2E59]">Exclusions</h3>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-[#3d4a5c]">
            {p.exclusions.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
        </section>

        {/* 06 Work you can drive past */}
        {evidence.length > 0 && (
          <section>
            <SectionHead n="06">Work you can drive past</SectionHead>
            <p className="mt-5 max-w-2xl text-[15px] text-[#3d4a5c]">
              Recent Houston Sign Crafters installs. Each was designed, fabricated, permitted, and
              installed by the same crew proposed for this project, including face- and halo-illuminated
              work comparable to the Earth Burger exterior scope.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {evidence.map((e) => (
                <figure key={e.id} className="overflow-hidden rounded-sm border border-[#D9E1EA] bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image src={e.imageSrc} alt={`${e.title}: ${e.signType} in ${e.location}`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <figcaption className="px-3 py-2 text-[13px]">
                    <span className="font-semibold text-[#17202A]">{e.title}</span>
                    <span className="text-[#667085]"> · {e.signType}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* 07 Why Houston Sign Crafters */}
        <section>
          <SectionHead n="07">Why Houston Sign Crafters</SectionHead>
          <ul className="mt-6 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
            {p.whyHsc.map((w) => (
              <li key={w} className="flex items-start gap-2.5">
                <span className="tick" style={{ background: "#1155AA" }} aria-hidden="true" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-[15px] italic leading-relaxed text-[#3d4a5c]">{p.positioning}</p>
          {p.contact && (
            <div className="mt-8 border-t border-[#E4EAF1] pt-6">
              <div className="font-display text-xs font-bold uppercase tracking-wider text-[#667085]">Who runs your project</div>
              <div className="mt-2 font-display text-xl font-bold text-[#0B2E59]">{p.contact.name}</div>
              <div className="text-sm text-[#3d4a5c]">{p.contact.title}, Houston Sign Crafters</div>
              <div className="mt-1.5 text-sm text-[#667085]">
                Direct:{" "}
                <ProposalAction kind="phone" href={BUSINESS.phoneHref} className="font-semibold text-[#1155AA]" eventProps={eventProps}>{BUSINESS.phone}</ProposalAction>
                {" "}·{" "}
                <ProposalAction kind="email" href={mailtoAgreement} className="font-semibold text-[#1155AA]" eventProps={eventProps}>{BUSINESS.email}</ProposalAction>
              </div>
            </div>
          )}
        </section>

        {/* 08 Commercial terms */}
        <section>
          <SectionHead n="08">Commercial terms</SectionHead>
          <ul className="mt-6 space-y-2 text-[15px]">
            {p.terms.map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="tick" style={{ background: "#1155AA" }} aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Request agreement */}
        <section id="request" className="no-print">
          <div className="rounded-sm border border-[#D9E1EA] bg-white p-7 sm:p-9">
            <h2>Ready to move the Houston location forward?</h2>
            <p className="mt-4 max-w-2xl leading-relaxed">
              Request the final agreement and deposit invoice. Houston Sign Crafters will then coordinate
              the site survey and confirm the permitting and production schedule.
            </p>
            <div className="mt-6 max-w-2xl">
              <LeadForm
                kind="contact"
                submitLabel="Request Agreement & Schedule Survey"
                messageLabel={`Anything we should know before sending the ${p.projectName} agreement?`}
              />
            </div>
            <p className="mt-5 text-sm text-[#667085]">
              Prefer email or phone?{" "}
              <ProposalAction kind="email" href={mailtoAgreement} className="font-semibold text-[#1155AA] underline underline-offset-2" eventProps={eventProps}>
                {BUSINESS.email}
              </ProposalAction>{" "}
              ·{" "}
              <ProposalAction kind="phone" href={BUSINESS.phoneHref} className="font-semibold text-[#1155AA] underline underline-offset-2" eventProps={eventProps}>
                {BUSINESS.phone}
              </ProposalAction>{" "}
              ·{" "}
              <ProposalAction kind="pdf" href={p.pdfUrl} className="font-semibold text-[#1155AA] underline underline-offset-2" eventProps={eventProps}>
                Download Proposal PDF
              </ProposalAction>
            </p>
          </div>
        </section>

        {/* Sign-off */}
        <section>
          <div className="text-[15px] text-[#3d4a5c]">Prepared and submitted by</div>
          <div className="mt-1 font-display text-2xl font-bold text-[#0B2E59]">{p.contact?.name || "Houston Sign Crafters"}</div>
          <div className="text-sm text-[#667085]">{p.contact?.title ? `${p.contact.title}, ` : ""}Houston Sign Crafters · {p.proposalDate}</div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#E4EAF1] bg-white">
        <div className="doc py-8 text-sm text-[#667085]">
          <div className="font-semibold text-[#17202A]">Houston Sign Crafters</div>
          <div>{BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion}</div>
          <div>{BUSINESS.phone} · {BUSINESS.email} · Proposal #{p.proposalId}</div>
          <div className="mt-3 text-xs">Confidential commercial proposal prepared for {p.preparedFor}.</div>
        </div>
      </footer>
    </main>
  );
}
