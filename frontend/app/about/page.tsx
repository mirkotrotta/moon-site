import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import Layout from '@/components/Layout';
import SocialLinks from '@/components/SocialLinks';
import GlobalCTA from '@/components/ui/GlobalCTA';
import ClientBlogSection from '@/app/ClientBlogSection';
import GlobalContainer from '@/components/ui/GlobalContainer';
import SkillsServicesGrid from '@/components/ui/SkillsServicesGrid';
import { skillsData } from '@/lib/data';
import BlogCardSimple from '@/components/blog/BlogCardSimple';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about our mission, vision, and the technology I use.',
  openGraph: {
    title: 'About Me',
    description: 'Learn more about my mission, vision, and the technology I use.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us',
    description: 'Learn more about my mission, vision, and the technology I use.',
  },
};

export default function AboutPage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <Layout>
      <div className="py-16">
        <section className="grid grid-cols-1 md:grid-cols-12 items-start gap-8 md:gap-12 mb-20">
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <Card variant="elevated" className="w-64 h-auto md:w-full">
              <Image
                src="/images/moon-site-website-profile-place-holder.png"
                alt="Profile Picture"
                width={400}
                height={500}
                priority
                className="block w-full h-auto object-cover rounded-lg"
              />
            </Card>
          </div>
          <div className="md:col-span-8">
            <div className="mb-4">
              <Badge variant="primary" className="mb-4">About Me</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-2 text-gray-900 dark:text-white">Your Name / Project Name</h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-400 mb-4">Your Title / Project Tagline</h2>
            <SocialLinks className="mb-6 justify-center md:justify-start" />
            <Card variant="default" className="p-6">
              <div className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed space-y-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Skills & Services Section */}
        <section className="py-16">
          <Card variant="default" className="p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <Badge variant="secondary" className="mb-4">Expertise</Badge>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Skills & Services</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">Explore a range of skills and services that I offer, tailored to meet your project needs.</p>
            </div>
          </Card>
          <SkillsServicesGrid items={skillsData} />
        </section>

        {/* Blog Preview Section - Client Component */}
        <section className="py-16">
          <Card variant="default" className="p-8 mb-8">
            <Badge variant="primary" className="mb-4">Latest Writing</Badge>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Recent Blog Posts</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">Thoughts, insights, and updates from my journey in tech.</p>
          </Card>
          <ClientBlogSection />
        </section>
      </div>

      <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 mb-16">
        <GlobalCTA
          title="Explore My Work"
          subtitle="Check out some of the projects I've built, showcasing my skills in various technologies and problem domains."
          buttonText="View Projects"
          buttonHref="/projects"
          className="bg-gray-100 dark:bg-gray-800"
        />
      </div>
    </Layout>
  );
} 