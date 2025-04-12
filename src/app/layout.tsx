import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lozells Community Forum | Birmingham",
  description: "Supporting the Lozells community in Birmingham with local initiatives, events and resources.",
  keywords: ["Lozells", "Birmingham", "community", "forum", "support", "events", "local initiatives"],
  authors: [{ name: "Lozells Community Forum" }],
  creator: "Lozells Community Forum",
  publisher: "Lozells Community Forum",
  openGraph: {
    title: "Lozells Community Forum | Birmingham",
    description: "Supporting the Lozells community in Birmingham with local initiatives, events and resources.",
    url: "https://lozellscommunityforum.co.uk",
    siteName: "Lozells Community Forum",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lozells Community Forum",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://lozellscommunityforum.co.uk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}