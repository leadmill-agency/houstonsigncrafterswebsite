import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Free Sign Design Mockup — See Your Sign Before You Buy",
  description:
    "Get a free design mockup of your custom sign on your own building or vehicle. No obligation. Houston Sign Crafters — design, permitting, and installation in-house.",
  alternates: { canonical: "/free-mockup" },
};

const STEPS = [
  { title: "Share your details", body: "Send your business name, logo, and a photo of your storefront or vehicle." },
  { title: "We design your mockup", body: "Our in-house designers show your sign on your actual building or vehicle." },
  { title: "You decide", body: "Love it? We quote it, permit it, and install it. No obligation either way." },
];

export default function FreeMockupPage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold">See your sign before you commit</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Get a free, no-obligation design mockup of your custom sign on your own building or
            vehicle. It's the easiest way to picture the finished result.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">How it works</h2>
            <ol className="mt-6 space-y-6">
              {STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-sm bg-signal font-display font-semibold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1 text-sm text-steel">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex items-start gap-3 rounded-sm border border-fog bg-cloud p-4 text-sm text-steel">
              <span className="mt-[7px] h-2 w-2 flex-shrink-0 bg-signal" aria-hidden="true" />
              Free and no obligation — you only move forward if you love the design.
            </div>
          </div>

          <div>
            <LeadForm
              kind="mockup"
              submitLabel="Get My Free Mockup"
              showCompany
              showSignType
              messageLabel="Tell us about your project (and where we can see the building/vehicle)"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
