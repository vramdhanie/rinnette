import Link from "next/link";
import ZoomableImage from "@/components/ZoomableImage";
import { artworks } from "@/data/portfolio";

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {artworks.map((art) => (
        <figure key={art.id} className="flex flex-col">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-sand">
            <ZoomableImage
              src={art.src}
              alt={art.alt}
              caption={`${art.title} — ${art.medium}, ${art.year}`}
            />
          </div>
          <figcaption className="mt-3">
            <p className="font-serif text-lg leading-tight text-espresso">
              {art.title}
            </p>
            <p className="text-sm text-stone">
              {art.medium} · {art.year}
            </p>
            <Link
              href={`/portfolio/${art.id}`}
              className="mt-2 inline-block text-sm uppercase tracking-widest text-mocha transition-colors hover:text-espresso"
            >
              View details →
            </Link>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
