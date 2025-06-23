// Server Component
import Link from "next/link";
import GlobalCTA from "@/components/ui/GlobalCTA";
import SkillsServicesGrid from "@/components/ui/SkillsServicesGrid";
import ProjectCard from "@/components/projects/ProjectCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import { skillsData, featuredProjects } from "@/lib/data";
import Layout from "@/components/Layout";
import ClientBlogSection from "./ClientBlogSection";
import HeroWithSidebar from "@/components/ui/HeroWithSidebar";
import { LogoGithub, Launch } from '@carbon/icons-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Template Showcase */}
      <section className="relative min-h-[100vh] sm:min-h-[80vh] md:min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Badge variant="primary" animate className="mb-4 sm:mb-6">
            🚀 Open Source Template • Live Demo
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Moon Site Template
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            A modern, production-ready Next.js portfolio template with FastAPI backend. 
            Complete with blog, projects showcase, design system, and professional components.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-2 sm:px-0">
            <Button
              href="https://github.com/mirkotrotta/moon-site/generate"
              variant="secondary"
              size="lg"
              icon={<Launch size={18} />}
              className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl border-0 w-full sm:w-auto"
            >
              Use This Template
            </Button>
            <Button
              href="https://github.com/mirkotrotta/moon-site"
              variant="outline"
              size="lg"
              icon={<LogoGithub size={18} />}
              className="bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70 text-white border-white/20 hover:border-white/30 w-full sm:w-auto"
            >
              View on GitHub
            </Button>
            <Button
              href="/design-system"
              variant="outline"
              size="lg"
              className="bg-purple-600/50 backdrop-blur-sm hover:bg-purple-600/70 text-white border-white/20 hover:border-white/30 w-full sm:w-auto"
            >
              🎨 Design System
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/80 px-2 sm:px-0">
            <div className="flex items-center gap-2">
              <Badge variant="success" dot />
              <span>Star on GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" dot />
              <span>Fork & Customize</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="primary" dot />
              <span>Deploy Instantly</span>
            </div>
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
            <div className="prose text-md dark:prose-invert">
              {/* CUSTOMIZE: Update the following paragraphs with your own bio */}
              <p className="mb-4">
              Hello! I'm a silent traveler beneath the pale glow of the moon, walking paths where few dare linger.  
              In the stillness of the night, I find clarity — a lone wolf drawn not by the noise of the pack, but the quiet hum of instinct.
              </p>
              <p className="mb-4">
                My journey is not defined by crowds, but by shadows and stars. I move with purpose through forgotten forests of thought,  
                where every silence speaks, and each step echoes with the weight of unseen battles.  
                I build not to impress, but to endure — structure, solitude, and strength in every line.
              </p>
              <p>
                When the world sleeps, I sharpen my craft. The moon is my mentor, the dark my discipline.  
                I do not howl for attention — I hunt for meaning, and I leave no trace but precision.
              </p>
            </div>
            <div className="mt-6">
              <Button 
                href="/about" 
                variant="link"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn more about me
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Button>
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
