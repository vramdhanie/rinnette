import Link from "next/link";

export default function Footer() {
  const year = 2026; // static build — bump when content is finalised

  return (
    <footer className="border-t border-taupe/40 bg-sand/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-stone sm:flex-row">
        <p className="font-serif text-base tracking-[0.2em] text-espresso">
          RINNETTE
        </p>
        <nav className="flex gap-6">
          <Link href="/portfolio" className="hover:text-mocha">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-mocha">
            About
          </Link>
          {/* Placeholder — replace with a real contact address later. */}
          <a href="mailto:hello@example.com" className="hover:text-mocha">
            Contact
          </a>
        </nav>
        <p>© {year} Rinnette. All rights reserved.</p>
      </div>
    </footer>
  );
}
