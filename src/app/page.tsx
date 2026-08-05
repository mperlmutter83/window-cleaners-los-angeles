import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="inline-flex rounded-full bg-sky-500/15 px-4 py-2 text-sm font-semibold text-sky-200 ring-1 ring-sky-400/30">
              Residential & Commercial Window Cleaning
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Crystal-clear windows for Los Angeles homes and businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Window Cleaners Los Angeles delivers streak-free interior and exterior window cleaning,
              screen and track detailing, and reliable service seven days a week.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="rounded-full bg-sky-500 px-7 py-3 text-center font-semibold text-white shadow-lg shadow-sky-950/30 hover:bg-sky-400"
              >
                Call {site.phoneDisplay}
              </a>
              <Link
                href="/book"
                className="rounded-full border border-white/30 px-7 py-3 text-center font-semibold text-white hover:bg-white/10"
              >
                Book Online
              </Link>
            </div>
            <div className="mt-8 grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                <p className="font-semibold text-white">7 Days a Week</p>
                <p className="mt-1">8:00 AM–8:00 PM</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                <p className="font-semibold text-white">Free Quotes</p>
                <p className="mt-1">Fast response by call, text, or form.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                <p className="font-semibold text-white">Local LA Service</p>
                <p className="mt-1">Homes, storefronts, offices, and more.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8">
            <LeadForm
              heading="Get a Free Window Cleaning Quote"
              subheading="Tell us what you need cleaned and we’ll follow up with pricing and availability."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Window cleaning built around your property
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From single-family homes to retail storefronts and office buildings, we clean the glass,
            screens, tracks, and frames so the whole window looks finished.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.slice(0, 8).map((service) => (
            <div key={service} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700 font-bold">
                ✓
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{service}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Careful, detail-focused service with a streak-free finish.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sky-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Reliable window cleaning without the hassle
            </h2>
            <div className="mt-8 space-y-5">
              {[
                "Interior and exterior window cleaning available",
                "Screens, tracks, frames, and sills detailed",
                "Residential and commercial appointments seven days a week",
                "Clear communication before and after every job",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                    ✓
                  </span>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold">Need clean windows this week?</h3>
            <p className="mt-3 text-slate-300">
              Call now or book online. We serve Los Angeles and nearby communities seven days a week.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={site.phoneHref}
                className="block rounded-full bg-sky-500 px-6 py-3 text-center font-semibold text-white hover:bg-sky-400"
              >
                Call {site.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="block rounded-full border border-white/25 px-6 py-3 text-center font-semibold text-white hover:bg-white/10"
              >
                Request a Quote
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-400">{site.hoursLabel}</p>
          </div>
        </div>
      </section>
    </>
  );
}
