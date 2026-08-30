import Link from "next/link";
import { BUSINESS } from "@/data/business";
import PhoneLink from "@/components/PhoneLink";
import BookButton from "@/components/BookButton";

// Dedicated post-submit confirmation page. Exact path /thankyou (no hyphen) to
// match the old site's structure per the Google Ads contractor — but the Ads
// conversion trigger fires on the `quote_form_success` dataLayer event pushed
// at submit time (LeadForm.jsx), NOT on this pageview, so refreshes here never
// double-count. noindex: it's a post-action page, not a landing page.

export const metadata = {
  title: "Thank You, We're On It",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thankyou" },
};

export default function ThankYouPage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="eyebrow text-signal">Request received</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Thanks, we're on it.</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
            Your request just landed with our team. You'll hear from us within one business day,
            usually a lot faster.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">What happens next</h2>
        <ol className="mt-6 space-y-4">
          {[
            "We review your request and pull up your address to check sign criteria.",
            "You get an itemized, written quote by email: design, permit, build, and install.",
            "Reply or call to fine-tune it. No pressure, no chasing us down.",
          ].map((step, i) => (
            <li key={step} className="flex items-start gap-3">
              <span className="font-display text-xl font-bold text-signal-600">{String(i + 1).padStart(2, "0")}</span>
              <span className="pt-0.5 text-steel">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 border border-signal bg-signal/5 p-5">
          <h3 className="font-display text-lg font-bold text-ink">Want to skip the phone tag?</h3>
          <p className="mt-1 text-sm text-steel">
            Put yourself on our calendar and we'll talk through your project at a time you pick.
          </p>
          <div className="mt-4">
            <BookButton label="Book a Free 30-Minute Consult" />
          </div>
        </div>
        <p className="mt-6 text-steel">
          Need us sooner? <PhoneLink className="font-semibold text-ink underline underline-offset-2" showIcon={false} />{" "}
          ({BUSINESS.hoursLabel}).
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/portfolio" className="btn btn-outline-dark">See Our Recent Work</Link>
          <Link href="/pricing" className="btn btn-outline-dark">Browse Sign Pricing</Link>
        </div>
      </section>
    </main>
  );
}
