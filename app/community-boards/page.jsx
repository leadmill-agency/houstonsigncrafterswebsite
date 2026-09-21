import Link from "next/link";
import { BUSINESS } from "@/data/business";
import PhoneLink from "@/components/PhoneLink";
import TextLink from "@/components/TextLink";
import Faq from "@/components/Faq";

// Community Boards — DM-outreach landing page (Rameel, 2026-09-21). NO FORMS by
// owner decision: this page is sent in Instagram DMs and warm outreach; the
// conversion is a text or call back. That also keeps board inquiries out of the
// sign-lead conversion stack (no LeadForm = no Meta Lead / oaiq lead_created /
// CAPI events fired). PhoneLink/TextLink fire their own GA4 phone_click /
// text_click events, segmentable by this page path.
// Deliberately NOT in data/services.js — this is an advertising product, not a
// sign-manufacturing service; footer link only. PRD:
// ~/Desktop/hsc-community-boards-page-prd.md (built to its V1 launch state).

// All prices in one place per the PRD. Owner-set launch pricing.
const PRICING = {
  standard: { label: "Standard", price: 600 },
  premium: { label: "Premium", price: 900 },
};

const money = (n) => `$${n.toLocaleString("en-US")}`;

export const metadata = {
  title: "Houston Community Board Advertising",
  description:
    "Put your business inside busy Houston restaurants, cafés, gyms, and neighborhood businesses for a full year. Six category-exclusive local advertisers per board. Spots start at $600/year.",
  alternates: { canonical: "/community-boards" },
};

const CATEGORIES = [
  { name: "Home services", items: "HVAC, roofing, plumbing, electrical, landscaping, pest control, painting, remodeling, pool service" },
  { name: "Health & wellness", items: "Dentists, orthodontists, chiropractors, med spas, physical therapy, optometrists, fitness studios" },
  { name: "Real estate", items: "Agents, teams, brokerages, property managers, mortgage professionals" },
  { name: "Financial & professional", items: "Insurance, tax preparation, bookkeeping, CPAs, attorneys, banks and credit unions" },
  { name: "Auto", items: "Repair shops, detailing, collision, tire shops, dealerships" },
  { name: "Local favorites", items: "Boutiques, pet services, childcare, tutoring, beauty, local retail, other neighborhood businesses" },
];

const COMPARISONS = [
  { name: "Social ads", body: "People can scroll past them instantly. A community board stays physically in the room." },
  { name: "Search ads", body: "They reach people after they start searching. Community boards help build recognition before the search." },
  { name: "Direct mail", body: "A postcard may get looked at once. The board remains in the host location all year." },
  { name: "Billboards", body: "Large reach, but usually expensive and brief. Community boards are smaller, local, and located where customers spend actual time." },
];

const FAQS = [
  { q: "How much does a community-board ad cost?", a: `Standard positions are ${money(PRICING.standard.price)} for 12 months on one board. Premium positions are ${money(PRICING.premium.price)} for 12 months on one board. Artwork is included.` },
  { q: "Is that $600 per month?", a: `No. ${money(PRICING.standard.price)} covers the entire 12-month term for a standard position on one board.` },
  { q: "Where will my ad appear?", a: "You choose from available host locations. Each board is placed inside a participating local business such as a restaurant, coffee shop, gym, salon, waiting room, or other high-traffic location." },
  { q: "How many advertisers are on each board?", a: "Six. One business per category, so you are never placed beside a direct competitor." },
  { q: "Can my competitor advertise on the same board?", a: "No. We allow one business per category on each board. Once a category is claimed, we do not sell another spot on that board to a direct competitor during your term." },
  { q: "Do I have to design the ad?", a: "No. Text us your logo and basic information and we create the board artwork, with one approval round included." },
  { q: "When does my 12-month term begin?", a: "When the board is installed and your advertisement is live. We send you a photo once it is placed." },
  { q: "Can I advertise on multiple boards?", a: "Yes. If your customers come from more than one area, ask us about repeating your category across several boards." },
  { q: "Do you guarantee leads?", a: "No. This is local brand-awareness advertising. We can tell you exactly where your ad is displayed, but we do not guarantee calls, leads, sales, or a specific return." },
  { q: "Can my restaurant or business get a board for free?", a: "Yes, if the location is a fit. Text or call us with your business name and address and we will take a look." },
  { q: "Who owns the board?", a: "Houston Sign Crafters owns and maintains the physical board. The host keeps the writable section for their own messages for as long as the board is up." },
];

function ContactCTAs({ dark = false, textLabel = "Text About My Spot" }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <TextLink className={dark ? "btn btn-primary" : "btn btn-primary"} label={textLabel} />
      <PhoneLink className={dark ? "btn btn-outline-light" : "btn btn-outline-dark"} label={`Call ${BUSINESS.phone}`} />
    </div>
  );
}

export default function CommunityBoards() {
  return (
    <main className="pb-16 lg:pb-0">
      {/* Hero — text left, board mockup right. The mockup is deliberately
          CSS-built and labeled as an example layout (PRD rule: no borrowed
          program photography, no unlabeled mockups). Swap for a real install
          photo when board #1 exists. */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="eyebrow mb-3 text-white/70">Houston Community Boards</div>
              <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
                Get seen where Houston already spends time.
              </h1>
              <p className="mt-5 text-lg text-white/75">
                We place custom community boards inside busy Houston restaurants, coffee shops,
                gyms, salons, and neighborhood businesses. The host gets a useful specials board
                for free. Six local businesses sponsor the bottom of it. Your business stays
                there for a full year.
              </p>
              <p className="mt-4 font-semibold text-white">
                Six local businesses. One host location. Twelve months of visibility.
              </p>
              <div className="mt-7">
                <ContactCTAs dark />
              </div>
              <p className="mt-5 text-sm text-white/60">
                Designed and managed by Houston Sign Crafters, a local Houston sign company.
              </p>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="rounded-md bg-[#23272e] p-4 shadow-2xl ring-1 ring-white/10">
                <div className="rounded-sm border border-dashed border-white/25 px-4 py-6 text-center">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    Host&apos;s writable area
                  </div>
                  <div className="mt-2 text-lg font-semibold italic text-amber-200/90">
                    Today&apos;s specials, events &amp; announcements
                  </div>
                  <div className="mx-auto mt-4 space-y-2">
                    <div className="mx-auto h-2 w-4/5 rounded-full bg-white/20" />
                    <div className="mx-auto h-2 w-3/5 rounded-full bg-white/15" />
                    <div className="mx-auto h-2 w-2/3 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="mt-3 rounded-sm bg-white/10 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  Support Local Houston Businesses
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {["HVAC", "Dentist", "Real Estate"].map((c) => (
                    <div key={c} className="rounded-sm bg-white px-1.5 py-3 text-center">
                      <div className="text-[10px] font-bold text-ink">{c}</div>
                      <div className="mt-0.5 text-[8px] text-steel">Your ad here</div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {["Roofing", "Insurance", "Auto Shop"].map((c) => (
                    <div key={c} className="rounded-sm bg-white/90 px-1.5 py-3 text-center">
                      <div className="text-[10px] font-bold text-ink">{c}</div>
                      <div className="mt-0.5 text-[8px] text-steel">Your ad here</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between text-[9px] uppercase tracking-wider text-white/50">
                  <span>Houston Community Boards</span>
                  <span>by Houston Sign Crafters</span>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-white/50">
                Example layout (mockup) of the 24&Prime; &times; 36&Prime; board. Top ad row is
                Premium, bottom row is Standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-b border-fog bg-cloud">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-center sm:grid-cols-3 sm:px-6">
          <div>
            <div className="text-3xl font-bold text-ink">6 advertisers</div>
            <p className="mt-1 text-sm text-steel">One business per category.</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-ink">12 months</div>
            <p className="mt-1 text-sm text-steel">Your ad stays up for the full term.</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-ink">From {money(PRICING.standard.price)}/year</div>
            <p className="mt-1 text-sm text-steel">Artwork included.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Local advertising without another dashboard.</h2>
        <p className="mt-3 max-w-2xl text-steel">
          No bidding. No daily ad budget. No algorithm to manage. Pick a board, approve your
          ad, and your business is physically visible inside that location for the next 12 months.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "We place the board", b: "A Houston restaurant, café, gym, salon, or other busy local business receives a custom writable board at no charge. The host uses the top section for specials, events, and whatever they want customers to see that day." },
            { t: "You claim one of six spots", b: "Six local businesses appear beneath the host's writable section. We only allow one business per category — if you claim the HVAC spot, no other HVAC company can buy onto that board during your term." },
            { t: "We design and install your ad", b: "Send us your logo, phone number, website, and a short description. We create the artwork, send it for approval, and handle the rest." },
            { t: "It stays up for one year", b: "Your 12-month term begins when the board is installed and your ad is live. We send you a photo once it is placed." },
          ].map((s, i) => (
            <div key={s.t} className="rounded-sm border border-fog p-6">
              <div className="text-sm font-bold text-signal-600">Step {i + 1}</div>
              <h3 className="mt-1 font-semibold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm text-steel">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who should advertise */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Built for businesses that win locally.</h2>
          <p className="mt-3 max-w-2xl text-steel">
            This works best for businesses that serve customers in a specific part of Houston
            and benefit from repeated local visibility.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <div key={c.name} className="rounded-sm border border-fog bg-white p-5">
                <h3 className="font-semibold text-ink">{c.name}</h3>
                <p className="mt-1 text-sm text-steel">{c.items}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-sm border border-ink bg-white p-6">
            <p className="font-semibold text-ink">Your category is exclusive on each board.</p>
            <p className="mt-1 text-sm text-steel">
              You will not be placed beside a competing business from the same category.
            </p>
          </div>
        </div>
      </section>

      {/* Why physical */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Be there before somebody searches for you.</h2>
        <p className="mt-3 max-w-2xl text-steel">
          Digital ads are useful when someone is actively looking for a service. Community
          boards do something different: they help people recognize your name before the need
          comes up — while waiting for breakfast, ordering coffee, or checking into a gym.
          When they need what you sell, your name is already familiar.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {COMPARISONS.map((c) => (
            <div key={c.name} className="rounded-sm border border-fog p-5">
              <h3 className="font-semibold text-ink">{c.name}</h3>
              <p className="mt-1 text-sm text-steel">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">One payment. A full year on the board.</h2>
          <p className="mt-2 text-white/70">Artwork is included. No monthly ad budget. No setup fee.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-sm bg-white p-7 text-ink">
              <div className="eyebrow text-steel">{PRICING.standard.label}</div>
              <div className="mt-1 text-4xl font-bold">{money(PRICING.standard.price)}</div>
              <div className="text-sm text-steel">per board / per year</div>
              <ul className="mt-4 space-y-2 text-sm text-steel">
                <li>One lower-row advertising position</li>
                <li>Category exclusivity on that board</li>
                <li>Custom ad design with one approval round</li>
                <li>12 months of placement, installed by us</li>
                <li>Photo confirmation when live</li>
              </ul>
              <TextLink className="btn btn-primary mt-6 w-full sm:w-auto" label="Text About Standard" />
            </div>
            <div className="rounded-sm bg-white p-7 text-ink">
              <div className="eyebrow text-signal-600">{PRICING.premium.label}</div>
              <div className="mt-1 text-4xl font-bold">{money(PRICING.premium.price)}</div>
              <div className="text-sm text-steel">per board / per year</div>
              <ul className="mt-4 space-y-2 text-sm text-steel">
                <li>Everything in Standard, plus:</li>
                <li>Top-row placement, closest to the writable specials section</li>
                <li>More prominent treatment where the layout allows</li>
                <li>First choice among open premium positions</li>
              </ul>
              <TextLink className="btn btn-primary mt-6 w-full sm:w-auto" label="Text About Premium" />
            </div>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Your 12 months starts when your ad is installed, not when you reach out. Nothing
            auto-renews without a conversation first. Community-board advertising is sold as
            local brand-awareness placement: we do not guarantee impressions, leads, calls,
            sales, or return on investment. Final placement, host locations, category
            conflicts, artwork, and availability are subject to approval.
          </p>
        </div>
      </section>

      {/* Multi-board + locations */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">One neighborhood or the whole side of town.</h2>
        <p className="mt-3 max-w-2xl text-steel">
          If your customers come from more than one area, you can reserve the same category
          across multiple boards — Katy, Richmond, Sugar Land, The Heights, Cypress, Pearland,
          or wherever we have boards live.
        </p>
        <div className="mt-8 rounded-sm border border-fog bg-cloud p-7">
          <h3 className="text-lg font-bold text-ink">First Houston locations coming soon.</h3>
          <p className="mt-2 max-w-2xl text-steel">
            We&apos;re currently selecting host locations across Greater Houston. Want first
            choice when a board opens near your customers? Text us your business type and the
            area you serve.
          </p>
          <div className="mt-5">
            <TextLink className="btn btn-primary" label="Get My First Pick" />
          </div>
        </div>
      </section>

      {/* Host section */}
      <section className="bg-signal-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="eyebrow mb-2 text-white/80">For restaurants &amp; local businesses</div>
          <h2 className="text-2xl font-bold sm:text-3xl">Want the board? It&apos;s free.</h2>
          <div className="mt-4 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-white/90">
                We are looking for busy Houston businesses willing to host a community board
                near their entrance, counter, or waiting area. You pay nothing. You get the
                majority of the space to write daily specials, happy hour, events,
                announcements, promotions — anything your customers should know. Six local
                sponsors appear underneath. We handle the board, artwork, and setup.
              </p>
              <p className="mt-4 text-sm text-white/80">
                If you already know local businesses you&apos;d like represented on the board,
                tell us. We always prefer businesses the host already knows and trusts.
              </p>
            </div>
            <div>
              <p className="font-semibold">What we ask from you:</p>
              <ul className="mt-2 space-y-1 text-white/90">
                <li>1. Keep the board somewhere customers can easily see it.</li>
                <li>2. Keep it up for the agreed 12-month period.</li>
                <li>3. Let us know if it ever needs service or replacement.</li>
              </ul>
              <div className="mt-6">
                <TextLink className="btn bg-white text-signal-600 hover:bg-white/90" label="Text About My Free Board" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HSC */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Run by a Houston company that already makes signs for local businesses.
        </h2>
        <p className="mt-3 max-w-2xl text-steel">
          Houston Sign Crafters designs, builds, permits, and installs commercial signage
          across Greater Houston. Community Boards are a simpler product, but the idea is the
          same: help local businesses get noticed in the real world. We run the board program
          locally, and there is a real Houston company behind it if you need us.
        </p>
        <div className="mt-5">
          <Link href="/about" className="btn btn-outline-dark">About Houston Sign Crafters</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <Faq items={FAQS} heading="Community board questions" />
      </section>

      {/* Sticky mobile CTA — DM traffic reads this on a phone */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-fog bg-white p-3 lg:hidden">
        <div className="mx-auto flex max-w-lg gap-3">
          <TextLink className="btn btn-primary flex-1 justify-center text-center" label="Text About My Spot" />
          <PhoneLink className="btn btn-outline-dark" showIcon={true} label="Call" />
        </div>
      </div>
    </main>
  );
}
