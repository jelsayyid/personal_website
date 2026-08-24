import type { Metadata } from "next";
import { DM_Serif_Display, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
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
  metadataBase: new URL("https://josephelsayyid.com"),
  title: "Joseph Elsayyid · Advanced Computing & Technology Strategy",
  description:
    "Engineer working across advanced computing, technology strategy, and global technology systems. Yale EECS and Yale SOM Technology Management.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Joseph Elsayyid",
    "Yale",
    "EECS",
    "Electrical Engineering",
    "Computer Science",
    "Yale School of Management",
    "AI Hardware",
    "Semiconductors",
    "Compute-in-Memory",
    "Embedded Systems",
    "Technology Strategy",
  ],
  authors: [{ name: "Joseph Elsayyid" }],
  openGraph: {
    title: "Joseph Elsayyid · Advanced Computing & Technology Strategy",
    description:
      "Engineer working across advanced computing, technology strategy, and global technology systems.",
    url: "https://josephelsayyid.com",
    siteName: "Joseph Elsayyid",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/joseph-elsayyid-schwarzman.jpeg",
        alt: "Joseph Elsayyid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Elsayyid · Advanced Computing & Technology Strategy",
    description:
      "Engineer working across advanced computing, technology strategy, and global technology systems.",
    images: ["/joseph-elsayyid-schwarzman.jpeg"],
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
