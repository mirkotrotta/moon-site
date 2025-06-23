// frontend/app/blog/page.tsx
import { Metadata } from 'next';
import { getAllPosts, PostData } from "@/lib/mdx";
import BlogHero from '@/components/blog/BlogHero';
import CategoryBar from '@/components/blog/CategoryBar';
import BlogCard from '@/components/blog/BlogCard';
import CallToAction from '@/components/blog/CallToAction';
import Link from 'next/link';

// PostData (which includes frontmatter) is defined in @/lib/mdx

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest articles and insights on technology, design, and more.',
  // Keep existing OpenGraph and Twitter metadata...
  openGraph: {
    title: 'Blog',
    description: 'Read our latest articles and insights on technology, design, and more.',
    type: 'website',
    images: [
      {
        url: 'https://picsum.photos/seed/blog-index-og/1200/630', // Updated seed/size
        width: 1200,
        height: 630,
        alt: 'Blog Posts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog',
    description: 'Read our latest articles and insights on technology, design, and more.',
    images: ['https://picsum.photos/seed/blog-index-twitter/800/400'] // Updated seed/size
  },
};

// Updated type definition to match Next.js 15 expected format
type BlogPageProps = {
  searchParams: Promise<{ tag?: string }>
}

export default async function BlogIndexPage(
  { searchParams }: BlogPageProps
) {
  try {
    // Fixed: await searchParams properly in Next.js 15
    const resolvedSearchParams = await searchParams;
    const tag = resolvedSearchParams.tag;
    const allPosts = getAllPosts();

    // Filter posts by tag if provided
    const filteredPosts = tag 
      ? allPosts.filter(post => 
          post.frontmatter.tags?.some(t => 
            t.toLowerCase() === tag.toLowerCase()
          )
        )
      : allPosts;

    // Extract all unique tags from *all* posts for the filter bar
    const allTags = [...new Set(
      allPosts.flatMap(post => post.frontmatter.tags || [])
    )].sort();

    // Handle posts for different sections
    const heroPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
    const featuredPosts = allPosts
      .filter(p => p.slug !== heroPost?.slug)
      .slice(0, 3);
    const mainGridPosts = tag
      ? filteredPosts.slice(heroPost ? 1 : 0)
      : filteredPosts.slice(1, 7); // Show 6 posts in main grid if no tag filter
    
    // Additional posts for different sections (when not filtering)
    const latestNewsPosts = !tag ? allPosts.slice(7, 10) : [];

    return (
      <>
        {/* Main content - The Layout component already provides the GlobalContainer */}
        <div className="py-8">
          {/* Hero Section */}
          {heroPost && (
            <BlogHero heroPost={heroPost} featuredPosts={featuredPosts} />
          )}
          
          {/* Category Filter Bar */}
          <CategoryBar tags={allTags} currentTag={tag} />
          
          {/* Main Content Section */}
          <div className="mt-8">
            {/* Section Header */}
            <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-1">
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {tag ? `Articles tagged with "${tag}"` : "Latest Articles"}
              </h2>
            </div>
            
            {/* Posts Grid */}
            {mainGridPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mb-16">
                {mainGridPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center bg-gray-50 dark:bg-gray-800/50 mb-16">
                <p className="text-gray-600 dark:text-gray-400">
                  {tag ? `No posts found with tag "${tag}".` : 'No posts available right now.'}
                </p>
                {tag && (
                  <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">
                    View all posts
                  </Link>
                )}
              </div>
            )}
            
            {/* Latest News Section (only when not filtering) */}
            {!tag && latestNewsPosts.length > 0 && (
              <section className="mb-16">
                <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-1">
                  <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    More Articles
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {latestNewsPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
        
        {/* The CallToAction component is outside the layout's container to allow for full-width styling */}
        <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
          <CallToAction />
        </div>
      </>
    );

  } catch (error) {
    console.error('Error rendering blog index:', error);
    // Keep the original error handling block
    return (
      <section className="py-10">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Blog</h1>
        <p>There was an error loading the blog posts. Please try again later.</p>
      </section>
    );
  }
}