import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://josephelsayyid.com"),
  title: "Joseph Elsayyid",
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
    title: "Joseph Elsayyid",
    description:
      "Engineer working across advanced computing, technology strategy, and global technology systems.",
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
      "Engineer working across advanced computing, technology strategy, and global technology systems.",
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
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
