'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define a constant for the blog directory path
const BLOG_DIR = path.join(process.cwd(), "content/blog");

// Interface definitions
export interface Frontmatter {
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
  coverImage?: string;
}

export interface PostData {
  slug: string;
  frontmatter: Frontmatter;
}

/**
 * Extract slug from a filename by removing the .mdx extension
 */
function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx$/, '');
}

/**
 * Function to get all blog posts (converted from server action)
 */
export function fetchAllPosts(): PostData[] {
  // Ensure the blog directory exists
  if (!fs.existsSync(BLOG_DIR)) {
    console.warn(`Blog directory not found: ${BLOG_DIR}`);
    return [];
  }

  try {
    const files = fs.readdirSync(BLOG_DIR);
    const posts: PostData[] = [];

    for (const file of files) {
      if (!file.endsWith('.mdx')) continue;
      
      // Derive slug directly from filename
      const slug = getSlugFromFilename(file);
      const filePath = path.join(BLOG_DIR, file);
      
      try {
        const raw = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(raw);
        
        posts.push({
          slug,
          frontmatter: data as Frontmatter
        });
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
        // Skip this file on error
      }
    }
    
    // Sort posts by date (newest first)
    return posts.sort((a, b) => 
      b.frontmatter.date.localeCompare(a.frontmatter.date)
    );
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return [];
  }
} 