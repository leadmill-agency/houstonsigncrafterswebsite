import LeadForm from "@/components/LeadForm";
import PhoneLink from "@/components/PhoneLink";
import { BUSINESS } from "@/data/business";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Houston Sign Crafters for custom signs, quotes, and project questions. Call (832) 974-2546 or send us a message — we respond within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <h1 className="text-4xl font-bold text-ink">Contact us</h1>
          <p className="mt-4 text-lg text-steel">
            Questions about a project, a quote, or a deadline? Send us a message and we'll get
            back to you within one business day.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-steel">Phone</div>
                <PhoneLink className="font-semibold text-ink" showIcon={false} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-steel">Email &amp; hours</div>
                <a href={`mailto:${BUSINESS.email}`} className="font-medium text-ink">{BUSINESS.email}</a>
                <div className="text-sm text-steel">{BUSINESS.hoursLabel}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-sm border border-fog bg-cloud p-4 text-sm text-steel">
            Ready for numbers? Skip ahead and{" "}
            <a href="/quote" className="font-semibold text-signal-600">request a free quote →</a>
          </div>
        </div>

        <div>
          <LeadForm kind="contact" submitLabel="Send Message" showCompany messageLabel="How can we help?" />
        </div>
      </section>
    </main>
  );
}
