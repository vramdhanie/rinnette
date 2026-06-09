import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Neutral gallery palette — beiges, browns and warm grays.
        // The artwork itself is meant to supply the colour.
        cream: "#f6f1e9",
        sand: "#e9e0d2",
        taupe: "#c9bca8",
        clay: "#a8927a",
        mocha: "#6f5b48",
        espresso: "#3a2f26",
        stone: "#8c857c",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["Cormorant Garamond", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
