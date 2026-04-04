import type { Metadata } from "next";
import { DM_Serif_Display, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
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
    "Engineer, builder, strategist. Designing systems across chips, institutions, and continents.",
  keywords: [
    "Joseph Elsayyid",
    "Yale",
    "EECS",
    "Electrical Engineering",
    "Computer Science",
    "AI Hardware",
    "Systems Engineering",
  ],
  authors: [{ name: "Joseph Elsayyid" }],
  openGraph: {
    title: "Joseph Elsayyid",
    description:
      "Engineer, builder, strategist. Designing systems across chips, institutions, and continents.",
    url: "https://josephelsayyid.com",
    siteName: "Joseph Elsayyid",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Elsayyid",
    description:
      "Engineer, builder, strategist. Designing systems across chips, institutions, and continents.",
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
          <CustomCursor />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
