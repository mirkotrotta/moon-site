import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from '@/components/analytics/AnalyticsProvider';

// Force dynamic rendering for all pages to avoid useSearchParams issues
export const dynamic = 'force-dynamic';

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Moon Site',
    template: '%s | Moon Site',
  },
  description: 'Personal website built with Next.js and Tailwind CSS',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  authors: [{ name: 'Anonymous' }],
  creator: 'Anonymous',
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AnalyticsProvider
          // Configure with your analytics provider IDs
          // googleAnalyticsId="G-YOUR_GA_ID"
          // fathomSiteId="YOUR_FATHOM_ID"
          // plausibleDomain="yourdomain.com"
          // umamiWebsiteId="YOUR_UMAMI_ID"
        >
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
