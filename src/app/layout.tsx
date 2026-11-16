import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mahadi Na Manzo — Digital agency",
    template: "%s | Mahadi Na Manzo",
  },
  description:
    "Mahadi Na Manzo is an independent digital agency building thoughtful brands and digital experiences.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mahadi Na Manzo",
    locale: "en_NG",
    title: "Mahadi Na Manzo — Digital agency",
    description:
      "Thoughtful brands and digital experiences for businesses moving forward.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahadi Na Manzo — Make your next move matter.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadi Na Manzo — Digital agency",
    description:
      "Thoughtful brands and digital experiences for businesses moving forward.",
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
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
