import Image from "next/image";
import { notFound } from "next/navigation";
import { getProposal, getProposalSlugs } from "@/data/proposals";
import { BUSINESS } from "@/data/business";
import LeadForm from "@/components/LeadForm";
import { ProposalTracking, ProposalAction } from "@/components/ProposalClient";

// Unlisted client proposal pages (PRD: Website Proposal Links/). Not linked
// from navigation, not in the sitemap, noindexed. Document-style layout with
// its own scoped palette; print CSS strips chrome for a clean paper copy.

export function generateStaticParams() {
  return getProposalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProposal(slug);
  if (!p) return {};
  return {
    title: `${p.projectName} Signage Proposal | Houston Sign Crafters`,
    description: `Signage fabrication, permitting, and installation proposal for ${p.client} #${p.proposalId.split("-").pop()} at ${p.projectAddress.split(",")[0]} in Houston.`,
    robots: { index: false, follow: false, noarchive: true },
  };
}

const money = (n) => `$${n.toLocaleString("en-US")}`;

export default async function ProposalPage({ params }) {
  const { slug } = await params;
  const p = getProposal(slug);
  if (!p) notFound();

  const deposit = (p.subtotal * p.depositPercent) / 100;
  const eventProps = { proposal_id: p.proposalId, client: p.client, location: "Houston", proposal_value: p.subtotal, proposal_version: p.version };
  const mailtoAgreement = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(`${p.projectName} #${p.proposalId.split("-").pop()} - Request Agreement and Site Survey`)}&body=${encodeURIComponent(`We would like to move forward with the ${p.projectName} signage proposal dated ${p.proposalDate}. Please send the final agreement and deposit invoice and coordinate the site survey.`)}`;

  return (
    <main className="proposal-doc min-h-screen" style={{ background: "#F5F8FC", color: "#17202A" }}>
      <ProposalTracking proposalId={p.proposalId} client={p.client} value={p.subtotal} version={p.version} />
      <style>{`
        .proposal-doc { font-size: 17px; }
        .proposal-doc .doc { max-width: 1150px; margin: 0 auto; padding: 0 20px; }
        .proposal-doc .panel { background: #fff; border: 1px solid #D9E1EA; }
        .proposal-doc h2 { font-family: var(--font-display); font-size: 1.75rem; color: #0B2E59; }
        .proposal-doc .rule { border-top: 3px solid #1155AA; width: 56px; margin: 10px 0 18px; }
        .proposal-doc .btn-prop { display: inline-flex; align-items: center; justify-content: center; padding: 0.7rem 1.4rem; font-family: var(--font-display); font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 3px; }
        .proposal-doc .btn-prop-primary { background: #1155AA; color: #fff; }
        .proposal-doc .btn-prop-primary:hover { background: #0B2E59; }
        .proposal-doc .btn-prop-ghost { border: 1px solid #D9E1EA; color: #0B2E59; background: #fff; }
        .proposal-doc .btn-prop-ghost:hover { border-color: #1155AA; }
        @media print {
          .no-print { display: none !important; }
          .proposal-doc { background: #fff !important; font-size: 12px; }
          .proposal-doc .panel { border: none; }
          .proposal-doc section { break-inside: avoid; }
        }
      `}</style>

      {/* Sticky action header */}
      <header className="no-print sticky top-0 z-50 border-b border-[#D9E1EA] bg-white/95 backdrop-blur">
        <div className="doc flex h-16 items-center justify-between gap-3">
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
      <section className="border-b border-[#D9E1EA] bg-white">
        <div className="doc py-14">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#1155AA]">
            Signage fabrication and installation proposal
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold text-[#0B2E59] sm:text-6xl">{p.projectName}</h1>
          <p className="mt-2 text-lg text-[#667085]">{p.projectAddress}</p>
          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 text-sm sm:grid-cols-3">
            <div><div className="text-[#667085]">Prepared for</div><div className="font-semibold">{p.preparedFor}</div></div>
            <div><div className="text-[#667085]">Prepared by</div><div className="font-semibold">Houston Sign Crafters</div></div>
            <div><div className="text-[#667085]">Proposal date</div><div className="font-semibold">{p.proposalDate}</div></div>
            <div><div className="text-[#667085]">Valid through</div><div className="font-semibold">{p.validThrough}</div></div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-[#667085]">Total investment</div>
              <div className="font-display text-2xl font-bold text-[#0B2E59]">{money(p.subtotal)}</div>
              <div className="text-xs text-[#667085]">{p.salesTaxLabel}</div>
            </div>
          </div>
          <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
            <ProposalAction kind="agreement" href="#request" className="btn-prop btn-prop-primary" eventProps={eventProps}>
              Request Agreement &amp; Schedule Survey
            </ProposalAction>
            <ProposalAction kind="pdf" href={p.pdfUrl} className="btn-prop btn-prop-ghost" eventProps={eventProps}>
              Download PDF
            </ProposalAction>
          </div>
        </div>
      </section>

      <div className="doc space-y-10 py-12">
        {/* Executive summary */}
        <section className="panel p-7 sm:p-9">
          <h2>Executive summary</h2>
          <div className="rule" />
          <p className="leading-relaxed">{p.summary}</p>
          <p className="mt-4 leading-relaxed text-[#3d4a5c]">{p.objective}</p>
        </section>

        {/* At a glance */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.glance.map((g) => (
            <div key={g.label} className="panel p-5">
              <div className="font-display text-3xl font-bold text-[#0B2E59]">{g.n}</div>
              <div className="mt-1 text-sm text-[#667085]">{g.label}</div>
            </div>
          ))}
        </section>

        {/* Scope and investment */}
        <section className="panel p-7 sm:p-9">
          <h2>Scope and investment</h2>
          <div className="rule" />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[15px]">
              <thead>
                <tr className="border-b-2 border-[#0B2E59] text-left font-display text-xs uppercase tracking-wider text-[#0B2E59]">
                  <th className="py-2 pr-4">Item</th>
                  <th className="hidden py-2 pr-4 sm:table-cell">Description</th>
                  <th className="py-2 pr-4 text-right">Qty.</th>
                  <th className="py-2 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {p.scopeItems.map((it) => (
                  <tr key={it.id} className="border-b border-[#D9E1EA] align-top">
                    <td className="py-3 pr-4 font-semibold text-[#17202A]">
                      {it.title}
                      <div className="mt-1 text-[13px] font-normal leading-snug text-[#667085] sm:hidden">{it.description}</div>
                    </td>
                    <td className="hidden py-3 pr-4 text-[13px] leading-snug text-[#667085] sm:table-cell">{it.description}</td>
                    <td className="whitespace-nowrap py-3 pr-4 text-right">{it.quantity}</td>
                    <td className="whitespace-nowrap py-3 text-right font-semibold">{money(it.price)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} className="hidden py-4 sm:table-cell" />
                  <td className="py-4 pr-4 text-right font-display text-sm font-bold uppercase tracking-wider text-[#0B2E59] sm:text-right" colSpan={1}>
                    Total
                  </td>
                  <td className="py-4 text-right font-display text-xl font-bold text-[#0B2E59]">{money(p.subtotal)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 border-l-2 border-[#F47B20] pl-3 text-sm text-[#667085]">{p.pricingNote}</p>
        </section>

        {/* Inclusions */}
        <section className="panel p-7 sm:p-9">
          <h2>What is included</h2>
          <div className="rule" />
          <ul className="grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
            {p.inclusions.map((inc) => (
              <li key={inc} className="flex items-start gap-2.5">
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#176B45" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-none" aria-hidden="true">
                  <path d="M3 10.5l4.5 4.5L17 5.5" />
                </svg>
                <span>{inc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Schedule */}
        <section className="panel p-7 sm:p-9">
          <h2>Schedule</h2>
          <div className="rule" />
          <ol className="space-y-5">
            {p.schedule.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#0B2E59] font-display text-sm font-bold text-white">{i + 1}</span>
                <div className="pt-1">
                  <div className="font-semibold text-[#17202A]">
                    {s.title}
                    {s.timing && <span className="ml-2 font-normal text-[#1155AA]">{s.timing}</span>}
                  </div>
                  <p className="mt-0.5 text-sm text-[#667085]">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 border-l-2 border-[#1155AA] pl-3 text-sm leading-relaxed text-[#3d4a5c]">{p.scheduleStatement}</p>
        </section>

        {/* Responsibilities */}
        <section className="panel p-7 sm:p-9">
          <h2>Responsibilities and exclusions</h2>
          <div className="rule" />
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#0B2E59]">Houston Sign Crafters</h3>
              <ul className="mt-3 space-y-2 text-[15px]">
                {p.responsibilities.hsc.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 flex-none bg-[#1155AA]" aria-hidden="true" />
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
                    <span className="mt-2 h-1.5 w-1.5 flex-none bg-[#F47B20]" aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-wider text-[#0B2E59]">Exclusions</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#3d4a5c]">
            {p.exclusions.map((x) => (
              <li key={x} className="flex items-start gap-2.5">
                <span className="mt-[7px] h-1.5 w-1.5 flex-none bg-[#667085]" aria-hidden="true" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Why HSC */}
        <section className="panel p-7 sm:p-9" style={{ borderTop: "3px solid #0B463B" }}>
          <h2>Why Houston Sign Crafters</h2>
          <div className="rule" />
          <ul className="grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
            {p.whyHsc.map((w) => (
              <li key={w} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 flex-none bg-[#0B463B]" aria-hidden="true" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-l-2 border-[#0B463B] pl-3 text-[15px] italic text-[#3d4a5c]">{p.positioning}</p>
        </section>

        {/* Commercial terms */}
        <section className="panel p-7 sm:p-9">
          <h2>Commercial terms</h2>
          <div className="rule" />
          <ul className="space-y-2 text-[15px]">
            {p.terms.map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 flex-none bg-[#1155AA]" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Closing CTA + request form */}
        <section id="request" className="panel no-print p-7 sm:p-9" style={{ borderTop: "3px solid #1155AA" }}>
          <h2>Ready to move the Houston location forward?</h2>
          <div className="rule" />
          <p className="max-w-2xl leading-relaxed">
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
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#D9E1EA] bg-white">
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
