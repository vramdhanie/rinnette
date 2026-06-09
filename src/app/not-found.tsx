import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-28 text-center">
      <p className="font-serif text-6xl text-taupe">404</p>
      <h1 className="mt-4 font-serif text-3xl text-espresso">Page not found</h1>
      <p className="mt-3 text-mocha">
        The page you are looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-mocha px-8 py-3 text-sm uppercase tracking-widest text-mocha transition-colors hover:bg-mocha hover:text-cream"
      >
        Return Home
      </Link>
    </section>
  );
}
