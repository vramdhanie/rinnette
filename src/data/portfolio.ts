export type Artwork = {
  id: string;
  title: string;
  medium: string;
  year: string;
  /** Dimensions of the piece, e.g. "60 × 90 cm". */
  dimensions?: string;
  /** Path under /public. */
  src: string;
  alt: string;
  /**
   * The artist's full write-up of the piece. Paragraphs are separated by a
   * blank line (\n\n) and rendered individually on the detail page.
   */
  description: string;
};

/**
 * Placeholder artworks. Replace the entries below with real pieces — drop the
 * image files into /public/images and update each record. Each artwork is
 * pre-rendered to its own static detail page at /portfolio/<id>. No other code
 * needs to change for new artwork to appear in the grid and gain a detail page.
 */
export const artworks: Artwork[] = [
  {
    id: "piece-1",
    title: "Untitled No. 1",
    medium: "Oil on canvas",
    year: "2024",
    dimensions: "60 × 90 cm",
    src: "/images/art-1.svg",
    alt: "Placeholder artwork one",
    description:
      "Placeholder write-up for the first piece. Here the artist describes what drew her to the subject and the mood she wanted to hold on the canvas.\n\nA second paragraph can go deeper into process — the layering of colour, the decisions made and undone, and what the finished work means to her.",
  },
  {
    id: "piece-2",
    title: "Untitled No. 2",
    medium: "Acrylic on linen",
    year: "2024",
    dimensions: "50 × 70 cm",
    src: "/images/art-2.svg",
    alt: "Placeholder artwork two",
    description:
      "Placeholder write-up for the second piece. Replace this with the artist's own account of the work.\n\nThe write-up can be as short or as long as the piece deserves.",
  },
  {
    id: "piece-3",
    title: "Untitled No. 3",
    medium: "Mixed media on paper",
    year: "2023",
    dimensions: "40 × 40 cm",
    src: "/images/art-3.svg",
    alt: "Placeholder artwork three",
    description:
      "Placeholder write-up for the third piece. Describe the materials, the inspiration, and the story behind the work here.",
  },
  {
    id: "piece-4",
    title: "Untitled No. 4",
    medium: "Watercolour",
    year: "2023",
    dimensions: "30 × 45 cm",
    src: "/images/art-4.svg",
    alt: "Placeholder artwork four",
    description:
      "Placeholder write-up for the fourth piece. Replace with the artist's reflection on this work.",
  },
  {
    id: "piece-5",
    title: "Untitled No. 5",
    medium: "Oil on panel",
    year: "2022",
    dimensions: "80 × 100 cm",
    src: "/images/art-5.svg",
    alt: "Placeholder artwork five",
    description:
      "Placeholder write-up for the fifth piece. Describe what this work explores and how it came together.",
  },
  {
    id: "piece-6",
    title: "Untitled No. 6",
    medium: "Charcoal and pastel",
    year: "2022",
    dimensions: "55 × 75 cm",
    src: "/images/art-6.svg",
    alt: "Placeholder artwork six",
    description:
      "Placeholder write-up for the sixth piece. Replace with the artist's own words about the work.",
  },
];

/** Look up a single artwork by its id. */
export function getArtwork(id: string): Artwork | undefined {
  return artworks.find((art) => art.id === id);
}

/** The previous and next artworks (by grid order) for detail-page navigation. */
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
