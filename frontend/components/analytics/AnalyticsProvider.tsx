"use client";

import { ReactNode, useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

type AnalyticsProviderProps = {
  children: ReactNode;
  googleAnalyticsId?: string;
  fathomSiteId?: string;
  plausibleDomain?: string;
  umamiWebsiteId?: string;
};

/**
 * AnalyticsProvider - A component that integrates multiple analytics services.
 * 
 * To use this component, wrap your _app.tsx or RootLayout component:
 * ```tsx
 * <AnalyticsProvider 
 *   googleAnalyticsId="G-YOUR_GA_ID"
 *   fathomSiteId="YOUR_FATHOM_ID"
 *   plausibleDomain="yourdomain.com"
 *   umamiWebsiteId="YOUR_UMAMI_ID"
 * >
 *   {children}
 * </AnalyticsProvider>
 * ```
 * 
 * This component implements:
 * - Google Analytics 4 (GA4)
 * - Fathom Analytics (privacy-friendly)
 * - Plausible Analytics (privacy-friendly)
 * - Umami Analytics (self-hostable)
 * 
 * For each provider, you only need to include the ID/domain for the services you want to use.
 */
export default function AnalyticsProvider({
  children,
  googleAnalyticsId,
  fathomSiteId,
  plausibleDomain,
  umamiWebsiteId
}: AnalyticsProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Track page views when route changes
  useEffect(() => {
    if (!pathname) return;
    
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // Google Analytics pageview
    if (googleAnalyticsId && typeof window.gtag === 'function') {
      window.gtag('config', googleAnalyticsId, {
        page_path: url,
      });
    }
    
    // Fathom pageview
    if (fathomSiteId && typeof window.fathom === 'object') {
      window.fathom.trackPageview();
    }
    
    // Plausible pageview
    if (plausibleDomain && typeof window.plausible === 'function') {
      window.plausible('pageview');
    }
    
    // Umami pageview is automatic
    
  }, [pathname, searchParams, googleAnalyticsId, fathomSiteId, plausibleDomain]);
  
  return (
    <>
      {/* Google Analytics */}
      {googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `}
          </Script>
        </>
      )}
      
      {/* Fathom Analytics */}
      {fathomSiteId && (
        <Script
          src="https://cdn.usefathom.com/script.js"
          data-site={fathomSiteId}
          defer
          strategy="afterInteractive"
        />
      )}
      
      {/* Plausible Analytics */}
      {plausibleDomain && (
        <Script
          src="https://plausible.io/js/script.js"
          data-domain={plausibleDomain}
          defer
          strategy="afterInteractive"
        />
      )}
      
      {/* Umami Analytics */}
      {umamiWebsiteId && (
        <Script
          src="https://analytics.umami.is/script.js"
          data-website-id={umamiWebsiteId}
          strategy="afterInteractive"
        />
      )}
      
      {children}
    </>
  );
}

// Augment the window object to include analytics properties
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    fathom: {
      trackPageview: () => void;
      trackGoal: (code: string, cents: number) => void;
    };
    plausible: (event: string, options?: any) => void;
  }
} 