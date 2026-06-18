import Link from "next/link";
import PhoneLink from "@/components/PhoneLink";

export const metadata = { robots: { index: false } };

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-signal-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 text-steel">
        The page you're looking for doesn't exist or has moved. Let's get you back on track.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-bold text-white hover:bg-ink-700">
          Back to home
        </Link>
        <PhoneLink className="inline-flex items-center justify-center rounded-full border border-fog px-7 py-3 text-sm font-semibold text-ink hover:border-ink" />
      </div>
    </main>
  );
}
