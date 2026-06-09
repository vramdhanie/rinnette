import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import ZoomableImage from "@/components/ZoomableImage";

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
};

/**
 * A captioned, click-to-zoom supporting image for use inside MDX write-ups.
 * Usage: <Figure src="/images/detail.jpg" alt="..." caption="..." />
 */
function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-sm bg-sand">
        <ZoomableImage
          src={src}
          alt={alt}
          caption={caption ?? alt}
          className="max-h-[70vh] w-full object-contain"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-stone">{caption}</figcaption>
      )}
    </figure>
  );
}

/**
 * Component overrides applied when compiling artwork write-ups, so markdown
 * elements pick up the site's styling and any images become zoomable.
 */
export const mdxComponents = {
  Figure,
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="font-serif text-2xl text-espresso" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="font-serif text-xl text-espresso" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-2 border-taupe pl-4 font-serif text-xl italic text-espresso"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc space-y-1 pl-5" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal space-y-1 pl-5" {...props} />
  ),
  a: ({ href, ...props }: ComponentPropsWithoutRef<"a">) => {
    const className =
      "text-mocha underline underline-offset-2 transition-colors hover:text-espresso";
    return href && href.startsWith("/") ? (
      <Link href={href} className={className} {...props} />
    ) : (
      <a href={href} className={className} {...props} />
    );
  },
  // Plain markdown images (![alt](/path)) also become zoomable.
  img: ({ src, alt }: ComponentPropsWithoutRef<"img">) => (
    <ZoomableImage
      src={typeof src === "string" ? src : ""}
      alt={alt ?? ""}
      caption={alt ?? undefined}
      className="my-4 max-h-[70vh] w-full object-contain"
    />
  ),
};
