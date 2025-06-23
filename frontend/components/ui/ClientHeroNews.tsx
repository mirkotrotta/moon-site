"use client";

import { useEffect, useState } from "react";
import BlogCardSimple from "@/components/blog/BlogCardSimple";

// Demo blog posts for showcase
const DEMO_POSTS = [
  {
    slug: 'ai-powered-development',
    frontmatter: {
      title: 'AI-Powered Development Tools',
      date: '2024-01-15',
      summary: 'Exploring the latest AI tools that are revolutionizing software development.',
      tags: ['ai', 'development', 'tools'],
      coverImage: '/hero-background.jpg'
    }
  },
  {
    slug: 'modern-web-security',
    frontmatter: {
      title: 'Modern Web Security Best Practices',
      date: '2024-01-12',
      summary: 'Essential security practices every web developer should know in 2024.',
      tags: ['security', 'web', 'best-practices'],
      coverImage: '/hero-background.jpg'
    }
  },
  {
    slug: 'cloud-deployment-strategies',
    frontmatter: {
      title: 'Cloud Deployment Strategies',
      date: '2024-01-08',
      summary: 'Comprehensive guide to deploying applications in the cloud era.',
      tags: ['cloud', 'deployment', 'devops'],
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

export default function ClientHeroNews() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use demo posts for showcase
    setPosts(DEMO_POSTS.slice(0, 3));
    setLoading(false);
  }, []);

  return (
    <div className="space-y-4">
      {loading ? (
        <p className="text-gray-500 text-sm">Loading news...</p>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <BlogCardSimple key={post.slug} post={post} />
        ))
      ) : (
        <p className="text-gray-500 text-sm">No news articles found.</p>
      )}
    </div>
  );
}
