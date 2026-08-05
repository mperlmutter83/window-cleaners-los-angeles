import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Window Cleaners Los Angeles provides reliable residential and commercial window cleaning across Los Angeles, seven days a week from 8 AM to 8 PM.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">About</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About Window Cleaners Los Angeles
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            A local window cleaning service focused on clear communication, careful work, and reliable appointments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Clean windows, simple process</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Window Cleaners Los Angeles helps homeowners, renters, property managers, storefronts,
              and offices keep their glass looking clear and professional. We handle interior and exterior
              windows, screens, tracks, frames, skylights, mirrors, and hard-water stain issues.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The goal is simple: show up when expected, do careful work, and leave your windows looking clean.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="rounded-full bg-sky-600 px-7 py-3 text-center font-semibold text-white hover:bg-sky-700"
              >
                Call {site.phoneDisplay}
              </a>
              <Link
                href="/book"
                className="rounded-full border border-sky-600 px-7 py-3 text-center font-semibold text-sky-700 hover:bg-sky-50"
              >
                Book Online
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-sky-50 p-8">
            <h3 className="text-2xl font-bold text-slate-900">Service details</h3>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="font-semibold text-slate-900">Hours</dt>
                <dd className="mt-1 text-slate-600">{site.hoursLabel}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Phone</dt>
                <dd className="mt-1 text-slate-600">{site.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Email</dt>
                <dd className="mt-1 text-slate-600">{site.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Service Area</dt>
                <dd className="mt-1 text-slate-600">{site.serviceAreaLabel}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
