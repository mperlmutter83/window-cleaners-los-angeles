import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 text-lg text-slate-600">
        The page you requested could not be found.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-sky-600 px-7 py-3 font-semibold text-white hover:bg-sky-700"
      >
        Back to Home
      </Link>
    </section>
  );
}
