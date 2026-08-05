"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-white font-bold">
              WC
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Window Cleaners <span className="text-sky-600">Los Angeles</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
            >
              Call {site.phoneDisplay}
            </a>
            <Link
              href="/book"
              className="rounded-full border border-sky-600 px-5 py-2.5 text-sm font-semibold text-sky-700 hover:bg-sky-50 transition-colors"
            >
              Book Online
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden rounded-lg border border-slate-300 p-2 text-slate-700"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-slate-200 py-4">
            <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 px-3">
                <a
                  href={site.phoneHref}
                  className="rounded-full bg-sky-600 px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Call {site.phoneDisplay}
                </a>
                <Link
                  href="/book"
                  className="rounded-full border border-sky-600 px-5 py-3 text-center text-sm font-semibold text-sky-700"
                  onClick={() => setOpen(false)}
                >
                  Book Online
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
