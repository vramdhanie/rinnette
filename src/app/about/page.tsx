import type { Metadata } from "next";
import ZoomableImage from "@/components/ZoomableImage";

export const metadata: Metadata = {
  title: "About",
  description: "About the artist Rinnette — biography and artistic practice.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="font-serif text-4xl tracking-wide text-espresso">About</h1>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[2fr_3fr]">
        {/* Portrait */}
        <div className="self-start overflow-hidden rounded-sm bg-sand">
          <ZoomableImage
            src="/images/portrait.svg"
            alt="Portrait of the artist"
            caption="Rinnette in the studio"
            className="max-h-[70vh] w-full object-cover"
          />
        </div>

        {/* Biography */}
        <div className="space-y-6 leading-relaxed text-mocha">
          <p>
            This is placeholder biography text. Introduce the artist here — their
            background, where they work, and what draws them to their chosen
            media.
          </p>
          <p>
            A second paragraph can expand on the artist&rsquo;s journey,
            influences, and the themes that recur throughout the work.
          </p>

          <div>
            <h2 className="font-serif text-2xl text-espresso">Artist Statement</h2>
            <p className="mt-3">
              Placeholder for the artist statement — a short reflection on intent,
              process, and the ideas behind the work.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-espresso">Practice</h2>
            <p className="mt-3">
              Notes on materials, technique, and approach can live here. Replace
              this text when the content is finalised.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
