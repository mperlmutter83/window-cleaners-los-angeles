import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-white font-bold">
                WC
              </span>
              <span className="text-lg font-bold text-white">
                Window Cleaners <span className="text-sky-400">Los Angeles</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Professional window cleaning for homes and businesses across Los Angeles.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="hover:text-sky-300">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-sky-300">
                  {site.email}
                </a>
              </li>
              <li className="text-slate-400">{site.hoursLabel}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Pages</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-sky-300">Services</Link></li>
              <li><Link href="/service-areas" className="hover:text-sky-300">Service Areas</Link></li>
              <li><Link href="/about" className="hover:text-sky-300">About</Link></li>
              <li><Link href="/blog" className="hover:text-sky-300">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-sky-300">Contact</Link></li>
              <li><Link href="/book" className="hover:text-sky-300">Book Online</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Popular Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>Residential Window Cleaning</li>
              <li>Commercial Window Cleaning</li>
              <li>Screen, Track & Frame Cleaning</li>
              <li>Hard-Water Stain Removal</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
