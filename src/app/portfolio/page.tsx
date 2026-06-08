import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — Rinnette",
  description: "A selection of original works by Rinnette.",
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="font-serif text-4xl tracking-wide text-espresso">
          Portfolio
        </h1>
        <p className="mt-4 leading-relaxed text-mocha">
          A selection of original works. Click any piece to view it full screen.
          Replace this introduction with notes on the collection when ready.
        </p>
      </header>

      <div className="mt-12">
        <PortfolioGrid />
      </div>
    </section>
  );
}
