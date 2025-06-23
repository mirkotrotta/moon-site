"use client";

import { useCallback } from 'react';

type ShareTrackerProps = {
  onShare?: (platform: string) => void;
};

/**
 * ShareTracker - A utility component to track sharing events across different platforms
 * 
 * Example usage:
 * ```tsx
 * <ShareTracker 
 *   onShare={(platform) => {
 *     // Custom tracking code here
 *     if (process.env.NODE_ENV === 'development') console.log(`Shared on ${platform}`);
 *   }}
 * />
 * ```
 * 
 * This component:
 * 1. Tracks native share API usage
 * 2. Can be used with the SocialSharing component to track click events
 */
export default function ShareTracker({ onShare }: ShareTrackerProps) {
  const trackShare = useCallback((platform: string) => {
    // Call onShare callback if provided
    if (onShare) {
      onShare(platform);
    }
    
    // Track in Google Analytics if available
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'share', {
        method: platform,
        content_type: 'article',
      });
    }
    
    // Track in Fathom if available
    if (typeof window !== 'undefined' && typeof window.fathom === 'object') {
      window.fathom.trackGoal('SHARE', 0); // Use your Fathom event code
    }
    
    // Track in Plausible if available
    if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
      window.plausible('Share', { 
        props: { platform }
      });
    }
  }, [onShare]);
  
  // Listen for native share events
  if (typeof window !== 'undefined' && navigator.share) {
    const originalShare = navigator.share;
    
    // Override the native share API to track shares
    navigator.share = async function(data) {
      try {
        // Call the original method
        const result = await originalShare.call(this, data);
        
        // Track the share event
        trackShare('native');
        
        return result;
      } catch (error) {
        // Re-throw the error to maintain original behavior
        throw error;
      }
    };
  }
  
  // This component doesn't render anything visible
  return null;
}

// Helper function to track a share on a specific platform
export function trackSocialShare(platform: string) {
  // Track in Google Analytics if available
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'share', {
      method: platform,
      content_type: 'article',
    });
  }
  
  // Track in Fathom if available
  if (typeof window !== 'undefined' && typeof window.fathom === 'object') {
    window.fathom.trackGoal('SHARE', 0); // Use your Fathom event code
  }
  
  // Track in Plausible if available
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible('Share', { 
      props: { platform }
    });
  }
} 