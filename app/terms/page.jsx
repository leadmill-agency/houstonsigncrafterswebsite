import { BUSINESS } from "@/data/business";

export const metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of the Houston Sign Crafters website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-ink">Terms of Use</h1>
      <p className="mt-2 text-sm text-steel">Last updated: June 2026</p>

      <div className="prose-content mt-8">
        <p>
          By using the Houston Sign Crafters website, you agree to these terms. The content here is
          provided for general information about our products and services.
        </p>

        <h2>Quotes and estimates</h2>
        <p>
          Quotes and pricing shown or provided through this site are estimates based on the
          information available and are not a binding contract until confirmed in writing. Final
          pricing depends on project specifications, materials, permitting, and site conditions.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The content, designs, and graphics on this site are owned by Houston Sign Crafters and may
          not be reproduced without permission.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          The website is provided "as is." We make no warranties about the completeness or accuracy
          of the information on it, and we are not liable for any damages arising from its use.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or call{" "}
          <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.
        </p>
      </div>
    </main>
  );
}
