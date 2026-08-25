import LeadForm from "@/components/LeadForm";
import PhoneLink from "@/components/PhoneLink";
import { BUSINESS } from "@/data/business";

export const metadata = {
  title: "Get a Free Sign Quote in Houston, TX",
  description:
    "Request a free, written quote for your custom sign in Houston. Channel letters, monument signs, wraps, banners, and more. Quote within one business day.",
  alternates: { canonical: "/quote" },
};

const POINTS = [
  "Written quote within one business day",
  "Permitting and licensed installation included",
  "5-year warranty on materials and workmanship",
  "One in-house team from design to install",
];

export default function QuotePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <h1 className="text-4xl font-bold text-ink">Get your free sign quote</h1>
          <p className="mt-4 text-lg text-steel">
            Tell us a bit about your project and we'll send a clear, written quote within one
            business day, including permitting and installation, with no surprise fees.
          </p>
          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-[7px] h-2 w-2 flex-shrink-0 bg-signal" aria-hidden="true" />
                <span className="text-carbon">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-sm border border-fog bg-cloud p-4 text-sm text-steel">
            Prefer to talk? Call{" "}
            <PhoneLink className="font-semibold text-ink" showIcon={false} /> · {BUSINESS.hoursLabel}
          </div>
        </div>

        <div>
          <LeadForm
            kind="quote"
            submitLabel="Get My Free Quote"
            showCompany
            showSignType
            messageLabel="Project details (size, location, deadline, any artwork)"
          />
        </div>
      </section>
    </main>
  );
}
