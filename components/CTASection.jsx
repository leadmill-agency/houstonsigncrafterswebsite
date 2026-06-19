import Link from "next/link";
import PhoneLink from "@/components/PhoneLink";

// Reusable conversion band. Dropped at the bottom of service, location, and
// content pages so every page has a clear phone + quote CTA.
export default function CTASection({
  title = "Ready to get a sign built?",
  subtitle = "Send us a photo and a rough size. You'll have a real quote within one business day.",
}) {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">{subtitle}</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/quote" className="btn btn-primary">Get a Free Quote</Link>
          <PhoneLink className="btn btn-outline-light" showIcon={false} />
        </div>
      </div>
    </section>
  );
}
