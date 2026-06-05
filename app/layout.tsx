import type { Metadata } from "next";
import { DM_Serif_Display, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph Elsayyid",
  description:
    "Yale EECS engineer and Yale SOM candidate focused on technology leadership, product strategy, and venture-building. Professional proficiency in Mandarin, Arabic, and Spanish; conversant in French.",
  keywords: [
    "Joseph Elsayyid",
    "Yale",
    "EECS",
    "Electrical Engineering",
    "Computer Science",
    "Yale School of Management",
    "AI Hardware",
    "Edge ML",
  ],
  authors: [{ name: "Joseph Elsayyid" }],
  openGraph: {
    title: "Joseph Elsayyid",
    description:
      "Yale EECS engineer and Yale SOM candidate focused on technology leadership, product strategy, and venture-building. Professional proficiency in Mandarin, Arabic, and Spanish; conversant in French.",
    url: "https://josephelsayyid.com",
    siteName: "Joseph Elsayyid",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Elsayyid",
    description:
      "Yale EECS engineer and Yale SOM candidate focused on technology leadership, product strategy, and venture-building. Professional proficiency in Mandarin, Arabic, and Spanish; conversant in French.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body>
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
