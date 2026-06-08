"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-taupe/40 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.25em] text-espresso"
          onClick={() => setOpen(false)}
        >
          RINNETTE
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-mocha ${
                  isActive(link.href) ? "text-mocha" : "text-stone"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-2 sm:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-espresso transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-espresso transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-espresso transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-taupe/40 px-6 py-3 sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm uppercase tracking-widest ${
                  isActive(link.href) ? "text-mocha" : "text-stone"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
