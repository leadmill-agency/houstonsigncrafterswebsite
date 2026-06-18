import { BUSINESS } from "@/data/business";

export const metadata = {
  title: "Privacy Policy",
  description: "How Houston Sign Crafters collects, uses, and protects the information you share through our website and forms.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-ink">Privacy Policy</h1>
      <p className="mt-2 text-sm text-steel">Last updated: June 2026</p>

      <div className="prose-content mt-8">
        <p>
          Houston Sign Crafters ("we," "us") respects your privacy. This policy explains what
          information we collect through our website and how we use it.
        </p>

        <h2>Information we collect</h2>
        <p>
          When you submit a quote request, mockup request, guide download, or contact form, we
          collect the information you provide — typically your name, email, phone number, company,
          and project details. We also use standard web analytics (such as Google Analytics) to
          understand how visitors use the site.
        </p>

        <h2>How we use your information</h2>
        <ul>
          <li>To respond to your request and prepare quotes or mockups</li>
          <li>To contact you about your project</li>
          <li>To send occasional updates or signage tips, if you opted in (you can unsubscribe anytime)</li>
          <li>To improve our website and services</li>
        </ul>

        <h2>Sharing</h2>
        <p>
          We do not sell your personal information. We may share it with service providers (such as
          our email provider) only as needed to operate our business and respond to you.
        </p>

        <h2>Your choices</h2>
        <p>
          You can opt out of marketing emails at any time using the unsubscribe link. To request
          access to or deletion of your information, contact us at{" "}
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>{" "}
          or call <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.
        </p>
      </div>
    </main>
  );
}
