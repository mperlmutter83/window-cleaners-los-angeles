import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Window Cleaning Service Areas",
  description:
    "Window Cleaners Los Angeles serves Los Angeles and nearby communities including Beverly Hills, Santa Monica, West Hollywood, Culver City, Brentwood, Pasadena, Glendale, Burbank, and more.",
  alternates: { canonical: `${site.url}/service-areas` },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-300">Service Areas</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Window cleaning across Los Angeles
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            We provide residential and commercial window cleaning throughout Los Angeles and nearby communities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.serviceAreas.map((area) => (
            <div key={area} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-slate-900">{area}</h2>
              <p className="mt-2 text-sm text-slate-600">Window cleaning available 7 days a week.</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-sky-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Don’t see your neighborhood?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Call or send a message — we may still be able to help depending on the property and schedule.
          </p>
          <a
            href={site.phoneHref}
            className="mt-6 inline-block rounded-full bg-sky-600 px-7 py-3 font-semibold text-white hover:bg-sky-700"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
