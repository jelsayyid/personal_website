import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://josephelsayyid.com"),
  title: "Joseph Elsayyid",
  description:
    "Technology builder working across physical intelligence, AI hardware, and the institutions underneath them. Yale EECS and Yale SOM Technology Management.",
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
    title: "Joseph Elsayyid",
    description:
      "Technology builder working across physical intelligence, AI hardware, and the institutions underneath them.",
    url: "https://josephelsayyid.com",
    siteName: "Joseph Elsayyid",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/joseph-elsayyid-hero.png",
        alt: "Joseph Elsayyid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Elsayyid",
    description:
      "Technology builder working across physical intelligence, AI hardware, and the institutions underneath them.",
    images: ["/joseph-elsayyid-hero.png"],
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
    <html lang="en" className={sourceSans.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navigation />
        <main id="main-content" tabIndex={-1}>{children}</main>
      </body>
    </html>
  );
}
