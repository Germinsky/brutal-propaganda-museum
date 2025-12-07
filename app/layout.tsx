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
  title: "Brutal Propaganda Museum – Daily Prophetic NFT Art",
  description: "A cyberpunk cathedral of AI-generated apocalyptic news art. Fresh prophecies minted daily at 06:00 UTC on Base chain. 0.08 ETH floor.",
  keywords: ["NFT", "crypto art", "Base chain", "AI art", "Web3", "digital art", "blockchain"],
  authors: [{ name: "Digital Prophets", url: "https://digitalprophets.blog" }],
  openGraph: {
    title: "Brutal Propaganda Museum",
    description: "Daily prophetic NFT art minted fresh every morning",
    url: "https://brutalpropaganda.museum",
    siteName: "Brutal Propaganda Museum",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brutal Propaganda Museum",
    description: "Daily prophetic NFT art minted fresh every morning",
    creator: "@DigitalProphets",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
