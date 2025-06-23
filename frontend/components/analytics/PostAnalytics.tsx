'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface PostAnalyticsProps {
  slug: string;
  title: string;
}

/**
 * Component for tracking blog post analytics
 * This is a placeholder that can be expanded with actual analytics implementations
 */
export default function PostAnalytics({ slug, title }: PostAnalyticsProps) {
  const pathname = usePathname();
  
  useEffect(() => {
    // Simple view tracking - can be expanded with real analytics service
    // Track post view analytics
  if (process.env.NODE_ENV === 'development') {
    console.log(`Post viewed: ${title} (${slug})`);
  }
    
    // Example of how you might track with a service like Google Analytics
    try {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'post_view', {
          post_title: title,
          post_slug: slug,
          page_path: pathname,
        });
      }
    } catch (error) {
      console.error('Analytics error:', error);
    }

    // Clean up function in case you need to handle any teardown
    return () => {
      // Cleanup if needed
    };
  }, [slug, title, pathname]);

  // This component doesn't render anything visible
  return null;
}

// Add global type for gtag
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
} 