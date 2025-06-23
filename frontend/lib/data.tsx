import React from 'react';
import {
  Application, Code, MagicWand, ChartLineData, Network_1 as Network, Settings,
  CloudServices,
  AiLabel
} from '@carbon/icons-react';

// Define the Project interface locally to avoid import issues
export interface Project {
  name: string;
  description: string;
  url: string;
  stars: number;
  updated: string;
  language: string | null;
  topics?: string[];
}

export type SkillOrService = {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
};

// CUSTOMIZE: Update these skills with your own expertise and descriptions
export const skillsData: SkillOrService[] = [
  {
    title: 'Full-stack Development',
    description: 'Building complete applications with modern frontend and backend technologies like React, Next.js, Node.js, and Python.',
    icon: <Application size={36} />,
    url: '/services/full-stack-development' // CUSTOMIZE: Link to your service page or portfolio item
  },
  {
    title: 'Software Architecture',
    description: 'Designing scalable, maintainable systems with clean architecture principles and best practices.',
    icon: <Network size={36} />,
    url: '/services/software-architecture' // CUSTOMIZE: Link to your service page or portfolio item
  },
  {
    title: 'DevOps',
    description: 'Implementing CI/CD pipelines, containerization, and cloud infrastructure on AWS, Azure, and GCP.',
    icon: <Settings size={36} />,
    url: '/services/devops' // CUSTOMIZE: Link to your service page or portfolio item
  },
  {
    title: 'Data Engineering',
    description: 'Building robust data pipelines, integrations, and analytics solutions for business intelligence.',
    icon: <ChartLineData size={36} />,
    url: '/services/data-engineering' // CUSTOMIZE: Link to your service page or portfolio item
  },
  {
    title: 'API Development',
    description: 'Creating RESTful and GraphQL APIs with secure authentication, testing, and documentation.',
    icon: <Code size={36} />,
    url: '/services/api-development' // CUSTOMIZE: Link to your service page or portfolio item
  },
  {
    title: 'AI/ML Integration',
    description: 'Incorporating machine learning models and AI services into web and mobile applications.',
    icon: <MagicWand size={36} />,
    url: '/services/ai-ml-integration' // CUSTOMIZE: Link to your service page or portfolio item
  },
  {
    title: 'Cloud Services',
    description: 'Using cloud services like AWS, Azure, and GCP to store and process data.',
    icon: <CloudServices size={36} />,
    url: '/services/cloud-services' // CUSTOMIZE: Link to your service page or portfolio item
  },
  {
    title: 'AI Workflow Automation',
    description: 'Streamline workflows across industries with powerful AI agents. Build and deploy automated workflows.',
    icon: <AiLabel size={36} />,
    url: '/services/ai-workflow-automation' // CUSTOMIZE: Link to your service page or portfolio item
  }
];

// CUSTOMIZE: Replace with your own projects or leave as examples
// These projects will also be populated from the GitHub API if you set up the backend
export const featuredProjects: Project[] = [
  {
    name: 'Next.js Portfolio Template',
    description: 'A customizable, SEO-friendly portfolio template built with Next.js, Tailwind CSS, and TypeScript. Features blog support, project showcase, and contact form.',
    url: 'https://github.com/mirkotrotta/nextjs-portfolio',
    stars: 87,
    updated: '2023-09-15T12:00:00Z',
    language: 'TypeScript',
    topics: ['next.js', 'portfolio', 'showcase']
  },
  {
    name: 'FastAPI Backend Starter',
    description: 'Production-ready FastAPI starter template with JWT authentication, SQLAlchemy ORM, Alembic migrations, and comprehensive test suite.',
    url: 'https://github.com/mirkotrotta/fastapi-starter',
    stars: 124,
    updated: '2023-10-22T15:30:00Z',
    language: 'Python',
    topics: ['fastapi', 'backend', 'showcase']
  },
  {
    name: 'React Native Task Tracker',
    description: 'Cross-platform mobile app for task management with offline support, push notifications, and cloud sync functionality.',
    url: 'https://github.com/mirkotrotta/rn-task-tracker',
    stars: 68,
    updated: '2023-08-05T09:15:00Z',
    language: 'JavaScript',
    topics: ['react-native', 'mobile', 'showcase']
  }
]; 