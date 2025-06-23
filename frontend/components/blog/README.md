# Blog Components

This directory contains reusable components for blog posts with IBM-inspired design aesthetic.

## Key Components

### BlogPost

Main component for rendering a blog post with dual sidebars:
- Left sidebar: Table of Contents (sticky)
- Right sidebar: Related posts and social sharing (sticky)
- Content area: Article content with header and MDX rendering

```tsx
import BlogPost from '@/components/blog/BlogPost';

export default function Page() {
  const post = {
    frontmatter: {
      title: 'Post Title',
      date: '2023-01-01',
      tags: ['tag1', 'tag2'],
      summary: 'Post summary',
      coverImage: '/path/to/image.jpg'
    },
    content: 'Raw MDX content',
    mdxSource: // Serialized MDX content,
    slug: 'post-slug',
    relatedPosts: [
      {
        title: 'Related Posts',
        items: [
          {
            title: 'Related Post 1',
            href: '/blog/related-1',
            date: '2023-01-01',
            summary: 'Post summary',
            tags: ['tag1', 'tag2']
          }
        ]
      }
    ]
  };
  
  return <BlogPost post={post} />;
}
```

### BlogPostHeader

Displays the post title, date, tags, and cover image.

### SocialSharing

Provides buttons to share content on social media and displays author's social links.

```tsx
<SocialSharing 
  url="/blog/post-slug"
  title="Post Title"
  summary="Post summary"
/>
```

## Analytics

We've implemented analytics tracking for blog posts:

### AnalyticsProvider

Wrap your app in this provider to enable analytics tracking:

```tsx
// app/layout.tsx
import AnalyticsProvider from '@/components/analytics/AnalyticsProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider
          googleAnalyticsId="G-YOUR_GA_ID"
fathomSiteId="YOUR_FATHOM_ID"
plausibleDomain="yourdomain.com"
umamiWebsiteId="YOUR_UMAMI_ID"
        >
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
```

### ShareTracker

Automatically tracks social share events in your analytics platform:

```tsx
import { trackSocialShare } from '@/components/analytics/ShareTracker';

// Track a share event
trackSocialShare('twitter');
```

## Third-Party Recommendations

For enhanced social media sharing and analytics, consider these tools:

1. **Plausible Analytics** - Privacy-friendly analytics (https://plausible.io/)
2. **Fathom Analytics** - Simple, privacy-focused analytics (https://usefathom.com/)
3. **AddThis** - Comprehensive sharing buttons (https://www.addthis.com/)
4. **ShareThis** - Free social sharing buttons (https://sharethis.com/)
5. **Simple Share Buttons** - Lightweight sharing solution (https://simplesharebuttons.com/)

## Styling

All components use Tailwind CSS with an IBM-inspired design system featuring:
- Clean typography with lighter font weights
- Minimal borders and subtle separators
- Ample white space
- Sticky sidebars that remain visible during content scrolling 