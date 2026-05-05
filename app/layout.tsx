import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
      <body className="min-h-full flex flex-col text-slate-200 selection:bg-blue-500/30">
        {/* Navigation Header */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0F1C]/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="8" x2="16" y1="10" y2="10"/><line x1="8" x2="16" y1="14" y2="14"/><line x1="8" x2="16" y1="18" y2="18"/></svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Silovra</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link href="/about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">About</Link>
              <Link href="/privacy-policy" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
