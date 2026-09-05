import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/data/business";
import Faq from "@/components/Faq";
import ToolLink from "@/components/ToolLink";
import PhoneLink from "@/components/PhoneLink";

// SEO/AEO landing page for the Design Your Sign lead-magnet tool
// (tool.houstonsigncrafters.com). Target queries: "sign mockup",
// "free sign mockup", "see my sign on my building", "sign design online".
// The tool itself lives on the subdomain; this page is the indexable,
// schema-carrying front door on the main domain.

export const metadata = {
  title: "Free Sign Mockup on Your Own Building",
  description:
    "Upload a photo of your storefront and see a finished sign on it in about 5 minutes: day view, night view, and a realistic budget range. Free, no signup.",
  alternates: { canonical: "/sign-mockup" },
};

const FAQS = [
  { q: "Is the sign mockup really free?", a: "Yes. The tool is free, takes about 5 minutes, and doesn't ask you to create an account or hand over a credit card. We build it because people who see their sign on their own building are the people who end up ordering one." },
  { q: "What photo should I use?", a: "A straight-on photo of your storefront taken from across the parking lot works best. Daylight, whole fascia in frame, phone camera is fine." },
  { q: "How accurate is the budget range?", a: "It's a realistic planning range based on our published Houston pricing, not a quote. Exact pricing comes after a call and an on-site survey, and our itemized estimates arrive together with the refined design mockup." },
  { q: "Can I use the mockup to get landlord approval?", a: "It's a strong starting point for that conversation. For formal landlord and city approvals we produce dimensioned sign drawings as part of a real project, which is exactly what the permit process requires." },
  { q: "What happens after I design my sign?", a: "Nothing, unless you want it to. If you like what you see, send it to us: we review it, call you to make sure we're a good fit, survey the site for exact measurements, and deliver a free refined mockup with an itemized estimate." },
  { q: "Do you only make lit channel letter signs?", a: "No. We design, fabricate, permit, and install channel letters, cabinet signs, dimensional letters, monument signs, and window graphics across Greater Houston, all from our own shop." },
];

export default function SignMockupPage() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Design Your Sign",
    url: "https://tool.houstonsigncrafters.com/",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free tool that renders a finished sign on a photo of your own storefront, with day and night views and a realistic budget range.",
    provider: { "@type": "LocalBusiness", "@id": `${BUSINESS.url}/#business` },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.url}/` },
      { "@type": "ListItem", position: 2, name: "Free Sign Mockup" },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                See your sign on your building before you spend a dollar
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/75">
                Upload a photo of your storefront and our free tool puts a finished sign on it:
                day view, night view, and a realistic budget range. About 5 minutes. No signup.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ToolLink label="Design My Sign Free" source="hero" />
                <PhoneLink className="btn btn-outline-light" label={`Call ${BUSINESS.phone}`} />
              </div>
              <p className="mt-4 text-sm text-white/60">
                Built by Houston Sign Crafters, the shop that fabricates and installs the real thing.
              </p>
            </div>
            <figure className="img-outline overflow-hidden rounded-sm bg-white">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/tool/mockup-night.jpg"
                  alt="Night mockup of an illuminated storefront sign rendered on the customer's actual building"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="px-4 py-2.5 text-sm text-steel">
                A real HSC mockup: the sign rendered on the customer's actual building at night, before anything was built.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Answer block + how it works */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="answer-block">
          <p>
            You can see what a sign will look like on your own building before you buy one. Our free
            Design Your Sign tool takes a photo of your storefront and renders a finished sign on it,
            in daylight and lit up at night, with a realistic budget range based on our published
            Houston pricing. It takes about 5 minutes, needs no signup, and nothing is final: when
            you like what you see, we confirm exact measurements and pricing with a real person
            before anything gets built.
          </p>
        </div>

        <div className="prose-content">
          <h2>How the sign mockup tool works</h2>
          <p>
            Three steps. Tell the tool your business name. Snap or upload a photo of your storefront.
            The tool designs the first version for you, on your actual building, and you tweak it
            from there: style, colors, placement. You'll see the sign in daylight and glowing at
            night, the two moments that matter, along with a budget range so you know what you're
            looking at before anyone calls anyone.
          </p>

          <h2>Why we give it away</h2>
          <p>
            Because the hardest part of buying a sign is imagining it. Business owners put off the
            decision for months because they can't picture the result or the price. The tool answers
            both in five minutes. Some people use it and never call us, and that's fine. The ones who
            do call already know what they want, which makes the project faster for everybody. Our
            published prices are on the <Link href="/pricing">Houston sign pricing page</Link>, and
            the full process, from survey to install, is on every service page.
          </p>
        </div>
      </section>

      {/* Day/night example */}
      <section className="border-y border-fog bg-cloud">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-bold text-ink">Day and night, on the real building</h2>
          <p className="mt-2 max-w-2xl text-steel">
            The same storefront, before the sign existed. This is the kind of mockup the tool
            produces, and the kind we refine by hand when a project moves forward.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <figure className="img-outline overflow-hidden rounded-sm border border-fog bg-white">
              <div className="relative aspect-[4/3]">
                <Image src="/tool/mockup-day.jpg" alt="Daytime sign mockup rendered on a Houston storefront before fabrication" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
              <figcaption className="px-4 py-2.5 text-sm text-steel">Day view</figcaption>
            </figure>
            <figure className="img-outline overflow-hidden rounded-sm border border-fog bg-white">
              <div className="relative aspect-[4/3]">
                <Image src="/tool/mockup-night.jpg" alt="Night sign mockup showing the illuminated letters on the same Houston storefront" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </div>
              <figcaption className="px-4 py-2.5 text-sm text-steel">Night view, letters lit</figcaption>
            </figure>
          </div>
          <div className="mt-8">
            <ToolLink label="Try It On Your Building" source="examples" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-14 sm:px-6">
        <Faq items={FAQS} heading="Sign mockup tool: frequently asked questions" />
      </section>

      {/* Closing CTA */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Five minutes from now, you'll know</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            What the sign looks like on your building, how it glows at night, and roughly what it
            costs. Then it's your call.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ToolLink label="Design My Sign Free" source="footer_cta" />
            <Link href="/free-mockup" className="btn btn-outline-light">Prefer a Designer Do It? Free Mockup</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
