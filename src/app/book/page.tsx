import type { Metadata } from "next";
import BookingEmbed from "@/components/BookingEmbed";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Book Window Cleaning Online",
  description:
    "Book a window cleaning appointment online with Window Cleaners Los Angeles. Available Monday–Sunday, 8 AM–8 PM.",
  alternates: { canonical: `${site.url}/book` },
};

export default function BookPage() {
  const bookingKey = process.env.BOOKING_KEY;

  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">Book Online</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Book your window cleaning appointment
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Choose an available time below. Current availability is Monday–Sunday, 8:00 AM–8:00 PM.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <BookingEmbed bookingKey={bookingKey} />
        </div>
        <p className="mt-6 text-center text-slate-600">
          Prefer to talk first? Call <a href={site.phoneHref} className="font-semibold text-sky-700">{site.phoneDisplay}</a>.
        </p>
      </section>
    </>
  );
}
