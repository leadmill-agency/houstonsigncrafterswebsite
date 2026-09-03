import Image from "next/image";
import { notFound } from "next/navigation";
import { getProposal, getProposalSlugs } from "@/data/proposals";
import { BUSINESS } from "@/data/business";
import { TESTIMONIALS } from "@/data/testimonials";
import PORTFOLIO from "@/data/portfolio";
import { ProposalTracking, ProposalAction } from "@/components/ProposalClient";

// Unlisted client proposal pages — four-act decision document per the v2 PRD
// (Earth_Burger_Proposal_Claude_Code_PRD.md): oversized condensed headlines,
// large flat HSC color panels, real project drawings as proof, one dominant
// CTA. Not linked from navigation, not in the sitemap, noindexed.

export function generateStaticParams() {
  return getProposalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProposal(slug);
  if (!p) return {};
  return {
    title: `${p.projectName} Signage Proposal`,
    description: `Signage fabrication, permitting, engineering, and installation proposal for ${p.client} #${p.proposalId.split("-").pop()} in Houston.`,
    robots: { index: false, follow: false, noarchive: true },
  };
}

const money = (n) => `$${n.toLocaleString("en-US")}`;

function Eyebrow({ children }) {
  return (
    <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--hsc-blue)]">{children}</p>
  );
}

function ActHeadline({ children }) {
  return (
    <h2 className="mt-3 font-display font-bold uppercase leading-[0.95] text-[var(--p-ink)]" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
      {children}
    </h2>
  );
}

export default async function ProposalPage({ params }) {
  const { slug } = await params;
  const p = getProposal(slug);
  if (!p) notFound();

  const total = p.items.reduce((s, it) => s + it.price, 0);
  const deposit = (total * p.depositPercent) / 100;
  const balance = total - deposit;
  const review = Number.isInteger(p.testimonialIndex) ? TESTIMONIALS[p.testimonialIndex] : null;
  const evidence = (p.evidencePortfolioIds || [])
    .map((id) => PORTFOLIO.find((x) => x.id === id))
    .filter(Boolean);
  const eventProps = { proposal_id: p.proposalId, client: p.client, market: "Houston", proposal_value: total, proposal_version: p.version };
  const mailtoAgreement = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(`${p.projectName} #${p.proposalId.split("-").pop()} - Request Agreement and Site Survey`)}&body=${encodeURIComponent(`We would like to move forward with the ${p.projectName} signage proposal dated ${p.proposalDate}. Please send the final agreement and deposit invoice and coordinate the field survey.`)}`;

  const groups = p.groups.map((g) => {
    const items = p.items.filter((it) => it.group === g.id);
    return { ...g, items, subtotal: items.reduce((s, it) => s + it.price, 0) };
  });

  return (
    <main className="proposal-doc min-h-screen">
      <ProposalTracking proposalId={p.proposalId} client={p.client} value={total} version={p.version} />
      <style>{`
        .proposal-doc {
          --hsc-blue: #0C51AA; --hsc-cyan: #09B2FB; --hsc-navy: #082F5F;
          --hsc-blue-dark: #093F84; --hsc-blue-light: #DCEBFF; --hsc-cyan-light: #E4F7FF;
          --p-ink: #202124; --p-muted: #62676E; --p-paper: #F4F5F6; --p-line: #D9DEE5;
          background: var(--p-paper); color: var(--p-ink); font-size: 17px;
          font-variant-numeric: tabular-nums;
        }
        .proposal-doc .doc { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .proposal-doc .act { padding: 56px 0; }
        .proposal-doc .panel { border-radius: 24px; }
        .proposal-doc .btn-prop { display: inline-flex; align-items: center; justify-content: center; padding: 0.8rem 1.6rem; font-family: var(--font-display); font-weight: 600; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.06em; border-radius: 999px; white-space: nowrap; transition: background-color 150ms, border-color 150ms; }
        .proposal-doc .btn-prop-primary { background: var(--hsc-blue); color: #fff; }
        .proposal-doc .btn-prop-primary:hover { background: var(--hsc-blue-dark); }
        .proposal-doc .btn-prop-ghost { border: 1px solid var(--p-line); color: var(--hsc-blue); background: #fff; }
        .proposal-doc .btn-prop-ghost:hover { border-color: var(--hsc-blue); }
        .proposal-doc .btn-prop-invert { background: #fff; color: var(--hsc-navy); }
        .proposal-doc .pill { display: inline-block; border-radius: 999px; padding: 0.35rem 0.9rem; font-family: var(--font-display); font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; }
        .proposal-doc a:focus-visible, .proposal-doc button:focus-visible, .proposal-doc summary:focus-visible { outline: 2px solid var(--hsc-blue); outline-offset: 2px; }
        .proposal-doc details > summary { list-style: none; cursor: pointer; }
        .proposal-doc details > summary::-webkit-details-marker { display: none; }
        .proposal-doc details[open] .disclosure { transform: rotate(45deg); }
        .proposal-doc .disclosure { display: inline-block; transition: transform 150ms; color: var(--p-muted); }
        @media print {
          .no-print { display: none !important; }
          .proposal-doc { background: #fff !important; font-size: 12px; }
          .proposal-doc .act { padding: 20px 0; break-inside: avoid; }
          .proposal-doc .act-break { break-before: page; }
          .proposal-doc details { display: block; }
          .proposal-doc details > *:not(summary) { display: block; }
        }
      `}</style>

      {/* Sticky utility header */}
      <header className="no-print sticky top-0 z-50 border-b border-[var(--p-line)] bg-white/95 backdrop-blur">
        <div className="doc flex h-16 items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Image src="/logo-light.png" alt="Houston Sign Crafters" width={1336} height={271} className="h-8 w-auto flex-none" />
            <span className="hidden truncate text-sm text-[var(--p-muted)] lg:inline">
              {p.projectName} · {p.proposalId}
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

      <div className="doc">
        {/* ACT 1 — Project decision page */}
        <section className="act">
          {p.clientLogo && (
            <Image src={p.clientLogo.src} alt={`${p.client} logo`} width={p.clientLogo.w} height={p.clientLogo.h} className="mb-6 h-16 w-auto" priority />
          )}
          <Eyebrow>{p.client.toUpperCase()} #{p.proposalId.split("-").pop()}</Eyebrow>
          <h1 className="mt-3 font-display font-bold uppercase leading-[0.92] text-[var(--p-ink)]" style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)" }}>
            {p.projectName}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#3a3f46]">{p.heroDescription}</p>

          <div className="panel mt-10 bg-[var(--hsc-blue-light)] p-6 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <figure className="overflow-hidden rounded-2xl bg-white p-4">
                <Image src={p.assets.exteriorDrawing.src} alt={p.assets.exteriorDrawing.alt} width={p.assets.exteriorDrawing.w} height={p.assets.exteriorDrawing.h} className="h-auto w-full" priority />
              </figure>
              <div>
                <span className="pill bg-[var(--hsc-navy)] text-white">Complete signage package</span>
                <dl className="mt-6 space-y-3 text-[15px]">
                  <div className="flex justify-between gap-6 border-b border-[#c3d8f2] pb-2"><dt className="text-[var(--p-muted)]">Project site</dt><dd className="text-right font-semibold">{p.projectAddress}</dd></div>
                  <div className="flex justify-between gap-6 border-b border-[#c3d8f2] pb-2"><dt className="text-[var(--p-muted)]">Prepared for</dt><dd className="text-right font-semibold">{p.preparedFor}</dd></div>
                  <div className="flex justify-between gap-6 border-b border-[#c3d8f2] pb-2"><dt className="text-[var(--p-muted)]">Proposal date</dt><dd className="text-right font-semibold">{p.proposalDate}</dd></div>
                  <div className="flex justify-between gap-6 border-b border-[#c3d8f2] pb-2"><dt className="text-[var(--p-muted)]">Valid through</dt><dd className="text-right font-semibold">{p.validThrough}</dd></div>
                </dl>
                <div className="mt-6">
                  <div className="text-sm text-[var(--p-muted)]">Total project investment</div>
                  <div className="font-display font-bold text-[var(--hsc-navy)]" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1 }}>{money(total)}</div>
                  <div className="mt-1 text-sm text-[var(--p-muted)]">{p.salesTaxLabel}</div>
                </div>
                <div className="no-print mt-7 flex flex-wrap gap-3">
                  <ProposalAction kind="agreement" href="#request" className="btn-prop btn-prop-primary" eventProps={eventProps}>
                    Request Agreement
                  </ProposalAction>
                  <ProposalAction kind="pdf" href={p.pdfUrl} className="btn-prop btn-prop-ghost" eventProps={eventProps}>
                    Download PDF
                  </ProposalAction>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-[var(--p-muted)]">Scope basis: supplied ten-sheet signage package dated {p.drawingSetDate}.</p>
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-[#3a3f46]">{p.summary}</p>
        </section>

        {/* ACT 2 — Scope and investment */}
        <section className="act act-break">
          <Eyebrow>One package / twelve priced components</Eyebrow>
          <ActHeadline>Scope + investment</ActHeadline>
          <p className="mt-5 max-w-2xl text-lg text-[#3a3f46]">
            Every proposed sign and project allowance is shown below. Pricing is based on the
            complete package and the supplied drawings.
          </p>

          {/* One vertical, fully expanded list (owner call 2026-09-02): every
              description visible, no disclosure affordance — a $47k line item
              should never hide its spec behind a click. */}
          <div className="mt-10 max-w-3xl space-y-10">
            {groups.map((g) => (
              <div key={g.id}>
                <div className="flex items-baseline justify-between gap-4 border-b-2 border-[var(--p-ink)] pb-2">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--p-ink)]">{g.label}</h3>
                  <span className="font-display text-lg font-bold text-[var(--hsc-blue)]">{money(g.subtotal)}</span>
                </div>
                <ul>
                  {g.items.map((it) => (
                    <li key={it.id} className="border-b border-[var(--p-line)] py-3.5">
                      <div className="flex items-baseline justify-between gap-6">
                        <span className="font-semibold">{it.title}</span>
                        <span className="whitespace-nowrap font-semibold">{money(it.price)}</span>
                      </div>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--p-muted)]">{it.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="panel mt-12 bg-[var(--hsc-navy)] p-7 text-white sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-sm text-white/70">Total project investment</div>
                <div className="font-display font-bold" style={{ fontSize: "clamp(2.8rem, 6vw, 5.25rem)", lineHeight: 1 }}>{money(total)}</div>
                <div className="mt-1 text-sm text-white/70">Applicable sales tax is not included</div>
              </div>
              <dl className="space-y-2 text-[15px] sm:text-right">
                <div><dt className="inline text-white/70">Deposit with agreement: </dt><dd className="inline font-semibold">{money(deposit)}</dd></div>
                <div><dt className="inline text-white/70">Final payment upon installation: </dt><dd className="inline font-semibold">{money(balance)}</dd></div>
              </dl>
            </div>
            <p className="mt-6 border-t border-white/20 pt-4 text-sm text-white/70">{p.pricingNote}</p>
          </div>

          {review && (
            <figure className="mt-10 max-w-3xl">
              <blockquote className="text-xl leading-relaxed">"{review.quote}"</blockquote>
              <figcaption className="mt-3 text-sm text-[var(--p-muted)]">
                <span className="font-semibold text-[var(--p-ink)]">{review.name}</span> · verified {review.platform} review of Houston Sign Crafters
              </figcaption>
            </figure>
          )}
        </section>

        {/* ACT 3 — Delivery plan */}
        <section className="act act-break">
          <Eyebrow>A practical path to installation</Eyebrow>
          <ActHeadline>How the project moves</ActHeadline>
          <p className="mt-5 max-w-2xl text-lg text-[#3a3f46]">{p.scheduleIntro}</p>

          <div className="panel mt-10 bg-[var(--hsc-cyan-light)] p-6 sm:p-10">
            <ol className="space-y-6">
              {p.schedule.map((s, i) => (
                <li key={s.title} className="flex gap-5 border-b border-[#bfe6f5] pb-6 last:border-0 last:pb-0">
                  <span className="font-display text-3xl font-bold text-[var(--hsc-blue)]" aria-hidden="true">{i + 1}</span>
                  <div className="pt-1.5">
                    <div className="font-display text-lg font-bold uppercase tracking-wide">{s.title}</div>
                    <p className="mt-1 text-[15px] text-[#3a3f46]">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <span className="pill mt-8 inline-block bg-white text-[var(--hsc-navy)]">Target: requested opening window</span>
          </div>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-[var(--p-line)] bg-white p-4">
              <Image src={p.assets.canopyDrawing.src} alt={p.assets.canopyDrawing.alt} width={p.assets.canopyDrawing.w} height={p.assets.canopyDrawing.h} className="h-auto w-full" />
            </figure>
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">What we need from your team</h3>
              <ul className="mt-4 space-y-2.5 text-[15px]">
                {p.customerInputs.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[var(--hsc-blue)]" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {evidence.length > 0 && (
            <div className="mt-14">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">Work you can drive past</h3>
              <p className="mt-2 max-w-2xl text-[15px] text-[#3a3f46]">
                Recent Houston Sign Crafters installs. Each was designed, fabricated, permitted, and
                installed by the same crew proposed for this project, including face- and
                halo-illuminated work comparable to the Earth Burger exterior scope.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {evidence.map((e) => (
                  <figure key={e.id} className="overflow-hidden rounded-2xl border border-[var(--p-line)] bg-white">
                    <div className="relative aspect-[4/3]">
                      <Image src={e.imageSrc} alt={`${e.title}: ${e.signType} in ${e.location}`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                    </div>
                    <figcaption className="px-3.5 py-2.5 text-[13px]">
                      <span className="font-semibold text-[var(--p-ink)]">{e.title}</span>
                      <span className="text-[var(--p-muted)]"> · {e.signType}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ACT 4 — Approval and commercial terms */}
        <section className="act act-break">
          <Eyebrow>One decision / one next step</Eyebrow>
          <ActHeadline>Ready to authorize</ActHeadline>
          <p className="mt-5 max-w-2xl text-lg text-[#3a3f46]">{p.approvalIntro}</p>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
            <div className="panel bg-[var(--hsc-blue-light)] p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">Commercial summary</h3>
              <dl className="mt-4 space-y-3 text-[15px]">
                <div className="flex justify-between gap-6 border-b border-[#c3d8f2] pb-2"><dt className="text-[var(--p-muted)]">Total</dt><dd className="font-semibold">{money(total)} {p.salesTaxLabel}</dd></div>
                <div className="flex justify-between gap-6 border-b border-[#c3d8f2] pb-2"><dt className="text-[var(--p-muted)]">Due with agreement</dt><dd className="font-semibold">{money(deposit)}</dd></div>
                <div className="flex justify-between gap-6 border-b border-[#c3d8f2] pb-2"><dt className="text-[var(--p-muted)]">Due upon installation</dt><dd className="font-semibold">{money(balance)}</dd></div>
                <div className="flex justify-between gap-6"><dt className="text-[var(--p-muted)]">Valid through</dt><dd className="font-semibold">{p.validThrough}</dd></div>
              </dl>
              <h3 className="mt-7 font-display text-lg font-bold uppercase tracking-wide">Houston Sign Crafters includes</h3>
              <ul className="mt-3 space-y-2 text-[15px]">
                {p.hscIncludes.map((x) => (
                  <li key={x} className="flex items-start gap-2.5">
                    <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="var(--hsc-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1.5 flex-none" aria-hidden="true">
                      <path d="M3 10.5l4.5 4.5L17 5.5" />
                    </svg>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-[var(--p-line)] bg-white p-4">
              <Image src={p.assets.interiorDrawing.src} alt={p.assets.interiorDrawing.alt} width={p.assets.interiorDrawing.w} height={p.assets.interiorDrawing.h} className="h-auto w-full" />
            </figure>
          </div>

          <h3 className="mt-10 font-display text-lg font-bold uppercase tracking-wide">Important conditions</h3>
          <ol className="mt-3 max-w-3xl list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-[#3a3f46]">
            {p.conditions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ol>

          {p.contact && (
            <div className="mt-10 border-t border-[var(--p-line)] pt-6">
              <div className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[var(--p-muted)]">Who runs your project</div>
              <div className="mt-2 font-display text-xl font-bold text-[var(--hsc-navy)]">{p.contact.name}</div>
              <div className="text-sm text-[#3a3f46]">{p.contact.title}, Houston Sign Crafters</div>
              <div className="mt-1.5 text-sm text-[var(--p-muted)]">
                Direct:{" "}
                <ProposalAction kind="phone" href={BUSINESS.phoneHref} className="font-semibold text-[var(--hsc-blue)]" eventProps={eventProps}>{BUSINESS.phone}</ProposalAction>
                {" "}·{" "}
                <ProposalAction kind="email" href={mailtoAgreement} className="font-semibold text-[var(--hsc-blue)]" eventProps={eventProps}>{BUSINESS.email}</ProposalAction>
              </div>
            </div>
          )}
        </section>

        {/* Final CTA */}
        <section id="request" className="act">
          <div className="panel bg-[var(--hsc-blue)] p-7 text-white sm:p-12">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Next step</p>
            <h2 className="mt-3 font-display font-bold uppercase leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Request the agreement
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Then we will schedule the field survey and confirm the permitting and production path.
            </p>
            {/* No form (owner call): a $47k buyer replies to a person, not a
                funnel. Primary opens a prefilled email; the direct line sits
                beside it. The mailto carries the agreement-request event. */}
            <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
              <ProposalAction kind="agreement" href={mailtoAgreement} className="btn-prop btn-prop-invert" eventProps={eventProps}>
                Request Agreement by Email
              </ProposalAction>
              <ProposalAction kind="phone" href={BUSINESS.phoneHref} className="btn-prop border border-white/50 text-white hover:border-white" eventProps={eventProps}>
                Call {p.contact?.name?.split(" ")[0] || "us"} directly: {BUSINESS.phone}
              </ProposalAction>
            </div>
            <p className="mt-4 text-sm text-white/75">
              The email arrives pre-written. Send it as is, or add anything we should know.
            </p>
            <p className="mt-6 text-sm text-white/80">
              <ProposalAction kind="email" href={mailtoAgreement} className="font-semibold text-white underline underline-offset-2" eventProps={eventProps}>{BUSINESS.email}</ProposalAction>
              {" "}· {BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion}
              {" "}·{" "}
              <ProposalAction kind="pdf" href={p.pdfUrl} className="font-semibold text-white underline underline-offset-2" eventProps={eventProps}>Download PDF</ProposalAction>
            </p>
          </div>

          <div className="mt-10">
            <div className="text-[15px] text-[#3a3f46]">Prepared and submitted by</div>
            <div className="mt-1 font-display text-2xl font-bold text-[var(--hsc-navy)]">{p.contact?.name || "Houston Sign Crafters"}</div>
            <div className="text-sm text-[var(--p-muted)]">{p.contact?.title ? `${p.contact.title}, ` : ""}Houston Sign Crafters · {p.proposalDate}</div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--p-line)] bg-white">
        <div className="doc py-8 text-sm text-[var(--p-muted)]">
          <div className="font-semibold text-[var(--p-ink)]">Houston Sign Crafters</div>
          <div>{BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion}</div>
          <div>{BUSINESS.phone} · {BUSINESS.email} · Proposal #{p.proposalId}</div>
          <div className="mt-3 text-xs">Confidential commercial proposal prepared for {p.preparedFor}.</div>
        </div>
      </footer>
    </main>
  );
}
