import Link from "next/link";
import PhoneLink from "@/components/PhoneLink";

// Reusable conversion band. Dropped at the bottom of service, location, and
// content pages so every page has a clear phone + quote CTA (playbook Part 4.2).
export default function CTASection({
  title = "Ready to get started?",
  subtitle = "Tell us about your project and get a free, detailed quote within one business day.",
}) {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">{subtitle}</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-full bg-signal px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-signal-600"
          >
            Get a Free Quote
          </Link>
          <PhoneLink className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10" />
        </div>
      </div>
    </section>
  );
}
