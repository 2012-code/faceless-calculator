import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Silovra - AI Earnings Calculator",
  description: "Calculate your potential earnings from Faceless AI YouTube and TikTok channels with Silovra. Our advanced AI-powered revenue estimator helps you discover the true profitability of your content.",
  metadataBase: new URL('https://silovra.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Silovra - AI Earnings Calculator",
    description: "Calculate your potential earnings from Faceless AI YouTube and TikTok channels with Silovra.",
    url: 'https://silovra.online',
    siteName: 'Silovra',
    images: [
      {
        url: '/og-image.png', // We should generate this or use a placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Silovra - AI Earnings Calculator",
    description: "Calculate your potential earnings from Faceless AI YouTube and TikTok channels with Silovra.",
    images: ['/og-image.png'],
  },
  other: {
    "google-adsense-account": "ca-pub-9086261363146330",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9086261363146330"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
