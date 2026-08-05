import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Window Cleaning Services",
  description:
    "Residential and commercial window cleaning services in Los Angeles, including interior/exterior windows, screens, tracks, frames, skylights, mirrors, and hard-water stain removal.",
  alternates: { canonical: `${site.url}/services` },
};

const details = [
  "Interior and exterior glass cleaned with a streak-free finish",
  "Screens removed, washed, and reinstalled when accessible",
  "Tracks, frames, and sills wiped and detailed",
  "Hard-water spots and mineral buildup treated when possible",
  "Flexible appointments for homes, storefronts, offices, and multi-unit properties",
  "Clear arrival windows and respectful service around your space",
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">Services</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Window cleaning services in Los Angeles
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Professional window cleaning for residential and commercial properties across Los Angeles.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service) => (
            <div key={service} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{service}</h2>
              <p className="mt-3 text-slate-600">
                Detail-focused cleaning designed to leave the glass brighter and the whole window area cleaner.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl bg-sky-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">What’s included</h2>
            <ul className="mt-6 space-y-4">
              {details.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <LeadForm heading="Request Service" subheading="Send the details and we’ll respond with next steps." />
          </div>
        </div>
      </section>
    </>
  );
}
