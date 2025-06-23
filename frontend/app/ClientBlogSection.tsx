"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BlogCardSimple from "@/components/blog/BlogCardSimple";
import GlobalContainer from "@/components/ui/GlobalContainer";

// Demo blog posts for showcase
const DEMO_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    frontmatter: {
      title: 'Getting Started with Next.js 15',
      date: '2024-01-15',
      summary: 'Learn the basics of Next.js 15 and how to build modern web applications.',
      tags: ['nextjs', 'react', 'javascript'],
      coverImage: '/hero-background.jpg'
    }
  },
  {
    slug: 'building-apis-with-fastapi',
    frontmatter: {
      title: 'Building Modern APIs with FastAPI',
      date: '2024-01-10',
      summary: 'Discover how to create powerful and efficient APIs using Python and FastAPI.',
      tags: ['python', 'api', 'fastapi'],
      coverImage: '/hero-background.jpg'
    }
  },
  {
    slug: 'responsive-design-principles',
    frontmatter: {
      title: 'Responsive Design Principles',
      date: '2024-01-05',
      summary: 'Master the art of creating websites that work beautifully on all devices.',
      tags: ['css', 'design', 'responsive'],
      coverImage: '/hero-background.jpg'
    }
  }
];

export interface PostData {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    summary?: string;
    tags?: string[];
    coverImage?: string;
  };
}

export default function ClientBlogSection() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use demo posts for showcase
    setPosts(DEMO_POSTS);
    setLoading(false);
  }, []);

  return (
    <section className="py-16">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Latest Articles</h2>
          <Link 
            href="/blog" 
            className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
          >
            View all articles
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <p className="text-gray-500 dark:text-gray-400 col-span-3 text-center py-8">Loading blog posts...</p>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <BlogCardSimple key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 col-span-3 text-center py-8">No blog posts found.</p>
          )}
        </div>
    </section>
  );
} 