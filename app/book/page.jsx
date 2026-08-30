import { BUSINESS } from "@/data/business";
import PhoneLink from "@/components/PhoneLink";
import BookButton from "@/components/BookButton";

// Booking page. Ads point HERE (tracked, branded), then the button hands off
// to the Google Calendar scheduling link and fires `booking_click` for the
// Ads conversion trigger.

export const metadata = {
  title: "Book a Free Sign Consult",
  description:
    "Book a free 15-minute call with Houston Sign Crafters. Bring a photo of your storefront and walk away knowing what your sign will take, cost, and need for permits.",
  alternates: { canonical: "/book" },
};

const CALL_COVERS = [
  "What sign type fits your building and budget",
  "A realistic range, from our published pricing",
  "Which permits your address needs, and who pulls them",
  "Timeline to install, worked back from your open date",
];

export default function BookPage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="eyebrow text-signal">Free 15-minute consult</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Talk to a sign maker, not a salesperson</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
            Pick a time that works and get straight answers about your sign from the people who
            will actually build it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookButton label="Pick a Time on Our Calendar" />
            <PhoneLink className="btn btn-outline-light" label={`Or call ${BUSINESS.phone}`} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">What we'll cover on the call</h2>
        <ul className="mt-6 space-y-3">
          {CALL_COVERS.map((c) => (
            <li key={c} className="flex items-start gap-2.5 text-steel">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-signal" aria-hidden="true" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-steel">
          Have a photo of your storefront handy. That plus a rough size is enough for us to talk
          real numbers on the spot.
        </p>
        <div className="mt-8">
          <BookButton label="Book My Free Consult" />
        </div>
      </section>
    </main>
  );
}
