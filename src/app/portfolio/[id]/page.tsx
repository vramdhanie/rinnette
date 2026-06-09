import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ZoomableImage from "@/components/ZoomableImage";
import {
  artworks,
  getArtwork,
  getAdjacentArtworks,
} from "@/data/portfolio";

type Params = { id: string };

// Pre-render one static page per artwork at build time.
export function generateStaticParams(): Params[] {
  return artworks.map((art) => ({ id: art.id }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const art = getArtwork(params.id);
  if (!art) return { title: "Artwork not found" };
  return {
    title: art.title,
    description: `${art.title} — ${art.medium}, ${art.year}. ${art.description.split("\n\n")[0]}`,
    openGraph: {
      title: `${art.title} — Rinnette`,
      images: [{ url: art.src, alt: art.alt }],
    },
  };
}

export default function ArtworkPage({ params }: { params: Params }) {
  const art = getArtwork(params.id);
  if (!art) notFound();

  const { prev, next } = getAdjacentArtworks(art.id);
  const paragraphs = art.description.split("\n\n");

  return (
    <article className="mx-auto max-w-5xl px-6 py-10">
      <Link
        href="/portfolio"
        className="text-sm uppercase tracking-widest text-stone transition-colors hover:text-mocha"
      >
        ← Back to portfolio
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr]">
        {/* Artwork — fits the screen, click to zoom */}
        <div className="self-start">
          <ZoomableImage
            src={art.src}
            alt={art.alt}
            caption={`${art.title} — ${art.medium}, ${art.year}`}
            className="max-h-[80vh] w-full object-contain"
          />
        </div>

        {/* Write-up */}
        <div>
          <h1 className="font-serif text-3xl leading-tight text-espresso sm:text-4xl">
            {art.title}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-clay">
            {art.medium} · {art.year}
          </p>
          {art.dimensions && (
            <p className="mt-1 text-sm text-stone">{art.dimensions}</p>
          )}

          <div className="mt-6 space-y-4 leading-relaxed text-mocha">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Prev / next navigation */}
      <nav className="mt-14 flex items-center justify-between border-t border-taupe/40 pt-6 text-sm">
        {prev ? (
          <Link
            href={`/portfolio/${prev.id}`}
            className="group text-stone transition-colors hover:text-mocha"
          >
            <span className="block text-xs uppercase tracking-widest text-clay">
              Previous
            </span>
            <span className="font-serif text-lg text-espresso group-hover:text-mocha">
              ← {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/portfolio/${next.id}`}
            className="group text-right text-stone transition-colors hover:text-mocha"
          >
            <span className="block text-xs uppercase tracking-widest text-clay">
              Next
            </span>
            <span className="font-serif text-lg text-espresso group-hover:text-mocha">
              {next.title} →
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
