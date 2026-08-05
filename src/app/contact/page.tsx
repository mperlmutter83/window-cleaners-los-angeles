import type { Metadata } from "next";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Window Cleaners Los Angeles for a free window cleaning quote. Call (310) 526-3974 or email info@windowcleanerslosangeles.com. Open Monday–Sunday, 8 AM–8 PM.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">Contact</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Window Cleaners Los Angeles
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Call, email, or send the form for a free quote and scheduling options.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="relative h-[300px] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/high-rise-window-cleaner.jpg"
                alt="Professional high-rise window cleaner working on exterior glass"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-3xl bg-sky-50 p-8">
              <h2 className="text-2xl font-bold text-slate-900">Call or email</h2>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Phone</p>
                  <a href={site.phoneHref} className="mt-1 block text-2xl font-bold text-sky-700">
                    {site.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Email</p>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-lg font-semibold text-sky-700">
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Hours</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{site.hoursLabel}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Service Area</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{site.serviceAreaLabel}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <LeadForm
              heading="Send Us a Message"
              subheading="We’ll use these details to follow up about your window cleaning request."
            />
          </div>
        </div>
      </section>
    </>
  );
}
