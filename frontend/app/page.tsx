// Server Component
import Link from "next/link";
import GlobalCTA from "@/components/ui/GlobalCTA";
import SkillsServicesGrid from "@/components/ui/SkillsServicesGrid";
import ProjectCard from "@/components/projects/ProjectCard";
import { skillsData, featuredProjects } from "@/lib/data";
import Layout from "@/components/Layout";
import ClientBlogSection from "./ClientBlogSection";
import HeroWithSidebar from "@/components/ui/HeroWithSidebar";
import { LogoGithub, Launch } from '@carbon/icons-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Template Showcase */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Open Source Template • Live Demo
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Moon Site Template
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A modern, production-ready Next.js portfolio template with FastAPI backend. 
            Complete with blog, projects showcase, design system, and professional components.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="https://github.com/mirkotrotta/moon-site/generate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              <Launch size={20} />
              Use This Template
            </a>
            <a
              href="https://github.com/mirkotrotta/moon-site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 text-white border border-white/20 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <LogoGithub size={20} />
              View on GitHub
            </a>
            <Link
              href="/design-system"
              className="bg-purple-600/50 backdrop-blur-sm hover:bg-purple-600/70 text-white border border-white/20 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              🎨 Design System
            </Link>
          </div>
          <div className="text-sm text-white/80">
            ⭐ Star on GitHub • 🍴 Fork & Customize • 🚀 Deploy Instantly
          </div>
        </div>
      </section>

      {/* About/Introduction Section - CUSTOMIZE: Update with your personal information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="md:grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 mb-8 md:mb-0">
            <div className="relative aspect-square max-w-sm mx-auto overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
              <img 
                src="/images/moon-site-website-profile-place-holder.png" // CUSTOMIZE: Replace with your profile picture
                alt="Profile Image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">About Me</h2>
            <div className="prose dark:prose-invert">
              {/* CUSTOMIZE: Update the following paragraphs with your own bio */}
              <p className="mb-4">
                Hello! I'm a passionate full-stack developer with over 5 years of experience building modern web applications. 
                I specialize in TypeScript, React, Next.js, Node.js, and Python, with a strong focus on creating clean, maintainable, and scalable code.
              </p>
              <p className="mb-4">
                My background includes working with startups and enterprise companies, where I've led the development of various web applications, 
                RESTful APIs, and cloud infrastructure. I'm particularly interested in performance optimization, user experience, and the integration of AI solutions.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open source projects, writing technical blog posts, or exploring the latest developments in web technology.
              </p>
            </div>
            <div className="mt-6">
              <Link 
                href="/about" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn more about me
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Services Section */}
      <section className="py-16">
        <div className="grid grid-cols-2 gap-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Skills & Services</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Explore a range of skills and services that I offer, tailored to meet your project needs.</p>
        </div>
        {/* Skills data is populated from lib/data.tsx - edit that file to customize */}
        <SkillsServicesGrid items={skillsData} />
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Featured Projects</h2>
          <Link 
            href="/projects" 
            className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
          >
            View all projects
          </Link>
        </div>
        {/* Project data is populated from lib/data.tsx and GitHub API - edit lib/data.tsx to customize */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      {/* Blog Preview Section - Client Component */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <ClientBlogSection />
      </section>

      {/* Global CTA Section - CUSTOMIZE: Update with your own call to action */}
      <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 mb-16">
        <GlobalCTA 
          title="Let's Work Together"
          subtitle="Interested in collaborating on a project or have a position that fits my skills? Get in touch and let's discuss how I can help you achieve your goals."
          buttonText="Contact Me"
          buttonHref="/contact"
        />
      </div>
    </Layout>
  );
}
