import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rinnette.web.app"),
  title: {
    default: "Rinnette — Artist Portfolio",
    template: "%s — Rinnette",
  },
  description:
    "The portfolio of Rinnette, a professional artist. Browse original works across painting and mixed media.",
  applicationName: "Rinnette",
  authors: [{ name: "Rinnette" }],
  keywords: [
    "Rinnette",
    "artist",
    "portfolio",
    "painting",
    "mixed media",
    "fine art",
  ],
  openGraph: {
    type: "website",
    siteName: "Rinnette",
    title: "Rinnette — Artist Portfolio",
    description:
      "The portfolio of Rinnette, a professional artist. Browse original works across painting and mixed media.",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rinnette — Painter & Mixed Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rinnette — Artist Portfolio",
    description:
      "The portfolio of Rinnette, a professional artist. Browse original works across painting and mixed media.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-cream text-espresso`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
