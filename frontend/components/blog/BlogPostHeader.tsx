import Image from 'next/image';
import { Frontmatter } from './BlogPost';

type BlogPostHeaderProps = {
  frontmatter: Frontmatter;
  coverImage: string;
};

/**
 * BlogPostHeader component that displays the title, date, tags, and optional cover image
 * with IBM-inspired minimal styling and ample white space.
 */
export default function BlogPostHeader({ frontmatter, coverImage }: BlogPostHeaderProps) {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 pb-8 mb-8">
      {/* Title */}
      {frontmatter?.title && (
        <h1 className="text-4xl font-light text-gray-900 dark:text-gray-100 mb-4 leading-tight">
          {frontmatter.title}
        </h1>
      )}
      
      {/* Date */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {new Date(frontmatter.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
      
      {/* Tags */}
      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-8">
          {frontmatter.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Cover image */}
      {coverImage && (
        <div className="mt-6 mb-8">
          <Image 
            src={coverImage}
            alt={frontmatter.title}
            width={1200}
            height={600}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </header>
  );
} 