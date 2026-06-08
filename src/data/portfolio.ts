export type Artwork = {
  id: string;
  title: string;
  medium: string;
  year: string;
  /** Path under /public. */
  src: string;
  alt: string;
};

/**
 * Placeholder artworks. Replace the entries below with real pieces — drop the
 * image files into /public/images and update each record. No other code needs
 * to change for new artwork to appear in the portfolio grid.
 */
export const artworks: Artwork[] = [
  {
    id: "piece-1",
    title: "Untitled No. 1",
    medium: "Oil on canvas",
    year: "2024",
    src: "/images/art-1.svg",
    alt: "Placeholder artwork one",
  },
  {
    id: "piece-2",
    title: "Untitled No. 2",
    medium: "Acrylic on linen",
    year: "2024",
    src: "/images/art-2.svg",
    alt: "Placeholder artwork two",
  },
  {
    id: "piece-3",
    title: "Untitled No. 3",
    medium: "Mixed media on paper",
    year: "2023",
    src: "/images/art-3.svg",
    alt: "Placeholder artwork three",
  },
  {
    id: "piece-4",
    title: "Untitled No. 4",
    medium: "Watercolour",
    year: "2023",
    src: "/images/art-4.svg",
    alt: "Placeholder artwork four",
  },
  {
    id: "piece-5",
    title: "Untitled No. 5",
    medium: "Oil on panel",
    year: "2022",
    src: "/images/art-5.svg",
    alt: "Placeholder artwork five",
  },
  {
    id: "piece-6",
    title: "Untitled No. 6",
    medium: "Charcoal and pastel",
    year: "2022",
    src: "/images/art-6.svg",
    alt: "Placeholder artwork six",
  },
];
