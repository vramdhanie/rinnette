/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — pre-rendered to HTML/JS at build time, no server runtime.
  output: "export",
  // Static export cannot use the on-demand image optimizer.
  images: { unoptimized: true },
};

export default nextConfig;
