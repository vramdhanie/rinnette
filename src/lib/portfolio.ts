import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "portfolio");

export type Artwork = {
  /** Derived from the MDX filename (e.g. "piece-1"); also the URL segment. */
  id: string;
  title: string;
  medium: string;
  year: string;
  dimensions?: string;
  /** Path to the main image under /public. */
  src: string;
  alt: string;
};

type Frontmatter = {
  title?: string;
  medium?: string;
  year?: string | number;
  dimensions?: string | number;
  image?: string;
  alt?: string;
  order?: number;
};

function readMdx(id: string): matter.GrayMatterFile<string> {
  return matter(fs.readFileSync(path.join(CONTENT_DIR, `${id}.mdx`), "utf8"));
}

function toArtwork(id: string, data: Frontmatter): Artwork {
  const required: Record<string, unknown> = {
    title: data.title,
    medium: data.medium,
    year: data.year,
    image: data.image,
    alt: data.alt,
  };
  for (const [field, value] of Object.entries(required)) {
    if (value === undefined || value === null || value === "") {
      throw new Error(
        `content/portfolio/${id}.mdx is missing required frontmatter field "${field}"`,
      );
    }
  }
  return {
    id,
    title: String(data.title),
    medium: String(data.medium),
    year: String(data.year),
    dimensions:
      data.dimensions !== undefined ? String(data.dimensions) : undefined,
    src: String(data.image),
    alt: String(data.alt),
  };
}

function allIds(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * All artworks, ordered by the `order` frontmatter field (then id). Read from
 * the MDX files at build time. Powers the grid, generateStaticParams, and
 * prev/next navigation.
 */
export const artworks: Artwork[] = allIds()
  .map((id) => ({ id, fm: readMdx(id).data as Frontmatter }))
  .map(({ id, fm }) => ({
    artwork: toArtwork(id, fm),
    order: typeof fm.order === "number" ? fm.order : Number.MAX_SAFE_INTEGER,
  }))
  .sort((a, b) => a.order - b.order || a.artwork.id.localeCompare(b.artwork.id))
  .map((entry) => entry.artwork);

/** Look up a single artwork by its id. */
export function getArtwork(id: string): Artwork | undefined {
  return artworks.find((art) => art.id === id);
}

/** The raw MDX body (frontmatter stripped) for an artwork's write-up. */
export function getArtworkContent(id: string): string {
  return readMdx(id).content;
}

/**
 * A short plain-text excerpt of the write-up's first paragraph, for use as a
 * meta description. Skips frontmatter, JSX blocks, headings and quotes.
 */
export function getArtworkExcerpt(id: string): string {
  const firstParagraph = getArtworkContent(id)
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find(
      (block) =>
        block.length > 0 &&
        !/^[<>#]/.test(block) &&
        !/^(import|export)\b/.test(block),
    );
  if (!firstParagraph) return "";
  const text = firstParagraph
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}…` : text;
}

/** The previous and next artworks (by order) for detail-page navigation. */
export function getAdjacentArtworks(id: string): {
  prev: Artwork | null;
  next: Artwork | null;
} {
  const index = artworks.findIndex((art) => art.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? artworks[index - 1] : null,
    next: index < artworks.length - 1 ? artworks[index + 1] : null,
  };
}
