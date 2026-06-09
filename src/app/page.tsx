import Link from "next/link";
import ZoomableImage from "@/components/ZoomableImage";

export default function Home() {
  return (
    <div>
      {/* Hero — a single large artwork that fits within the viewport and zooms on click. */}
      <section className="mx-auto max-w-6xl px-6 pt-10 sm:pt-14">
        <div className="mx-auto max-h-[85vh] w-full max-w-4xl">
          <ZoomableImage
            src="/images/roses-detail.webp"
            alt="Detail of Roses, an impasto acrylic painting of pink roses with thickly textured petals on a deep blue background."
            caption="Roses (detail) — click to view full screen"
            className="max-h-[85vh] w-full object-contain"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="font-serif text-4xl tracking-wide text-espresso sm:text-5xl">
          Rinnette
        </h1>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-clay">
          Painter · Mixed Media
        </p>
        <p className="mx-auto mt-6 max-w-xl text-balance leading-relaxed text-mocha">
          A short introductory statement about the artist and their work will
          live here. Replace this placeholder with a sentence or two that sets
          the tone for the collection.
        </p>
        <Link
          href="/portfolio"
          className="mt-8 inline-block border border-mocha px-8 py-3 text-sm uppercase tracking-widest text-mocha transition-colors hover:bg-mocha hover:text-cream"
        >
          View the Portfolio
        </Link>
      </section>
    </div>
  );
}
