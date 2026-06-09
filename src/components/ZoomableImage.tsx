"use client";

import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  /** Tailwind classes for the inline (non-zoomed) image. */
  className?: string;
  /** Optional caption shown beneath the zoomed image. */
  caption?: string;
};

/**
 * Displays an image constrained to fit the screen. Clicking it opens a
 * full-screen lightbox where the image is shown at up to 90% of the viewport.
 * Close via the backdrop, the close button, or the Escape key.
 */
export default function ZoomableImage({ src, alt, className, caption }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    // Lock background scroll while the lightbox is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Zoom in on ${alt}`}
        className="group block h-full w-full cursor-zoom-in overflow-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={
            className ??
            "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          }
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center bg-espresso/95 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] cursor-default object-contain shadow-2xl"
          />
          {caption && (
            <p className="mt-4 max-w-[90vw] text-center text-sm text-cream/70">
              {caption}
            </p>
          )}
        </div>
      )}
    </>
  );
}
