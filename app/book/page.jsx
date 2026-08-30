import { BUSINESS } from "@/data/business";
import PhoneLink from "@/components/PhoneLink";
import TextLink from "@/components/TextLink";
import BookButton from "@/components/BookButton";

// Booking page with the Google Calendar appointment schedule embedded INLINE
// (?gv=true embed mode), so visitors pick a time without leaving the site.
// Fallback links cover blocked iframes. Note: the final "booked" click happens
// inside Google's iframe, so GTM can't observe it; ads conversions use /book
// pageviews + fallback booking_click, and bookings themselves reconcile
// against the calendar.

export const metadata = {
  title: "Book a Free Sign Consult",
  description:
    "Book a free 30-minute call with Houston Sign Crafters. Bring a photo of your storefront and walk away knowing what your sign will take, cost, and need for permits.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
          <p className="eyebrow text-signal">Free 30-minute consult</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Talk to a sign maker, not a salesperson</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
            Pick a time below. Bring a photo of your storefront and we'll talk sign type, real
            price range, permits, and timeline on the spot.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="img-outline overflow-hidden rounded-sm border border-fog bg-white">
          <iframe
            src={BUSINESS.bookingEmbedUrl}
            title="Book a time with Houston Sign Crafters"
            className="h-[900px] w-full border-0 sm:h-[760px]"
            loading="eager"
          />
        </div>
        <p className="mt-4 text-center text-sm text-steel">
          Calendar not loading?{" "}
          <BookButton
            label="Open the calendar in a new tab"
            className="font-semibold text-signal-600 underline underline-offset-2 hover:text-ink"
          />{" "}
          · <PhoneLink className="font-semibold text-ink underline underline-offset-2" showIcon={false} /> ·{" "}
          <TextLink className="font-semibold text-ink underline underline-offset-2" label="text us" />
        </p>
      </section>
    </main>
  );
}
