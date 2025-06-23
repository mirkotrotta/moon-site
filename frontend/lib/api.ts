import { Project } from '@/lib/data';

export interface ResumeEntry {
  id: number;
  title: string;
  company: string;
  start_date: string;
  end_date: string | null;
  description?: string;
  location?: string;
  role_type?: string;
}

// Placeholder data for demo purposes
const DEMO_PROJECTS: Project[] = [
  {
    name: 'Moon-Site Portfolio',
    description: 'A modern, responsive portfolio website built with Next.js and FastAPI. Features blog functionality, project showcase, and dynamic resume display.',
    url: 'https://github.com/demo-user/moon-site',
    stars: 24,
    updated: '2024-01-15T10:30:00Z',
    language: 'TypeScript',
    topics: ['nextjs', 'portfolio', 'showcase', 'tailwindcss']
  },
  {
    name: 'AI-Powered Task Manager',
    description: 'Smart task management application with AI-powered categorization and priority suggestions. Built with React and Python.',
    url: 'https://github.com/demo-user/ai-task-manager',
    stars: 89,
    updated: '2024-01-12T14:20:00Z',
    language: 'Python',
    topics: ['ai', 'productivity', 'showcase', 'machine-learning']
  },
  {
    name: 'Real-time Chat Application',
    description: 'Scalable real-time chat application with WebSocket support, message encryption, and user presence tracking.',
    url: 'https://github.com/demo-user/realtime-chat',
    stars: 156,
    updated: '2024-01-10T09:15:00Z',
    language: 'JavaScript',
    topics: ['websockets', 'chat', 'showcase', 'realtime']
  },
  {
    name: 'E-commerce Analytics Dashboard',
    description: 'Comprehensive analytics dashboard for e-commerce businesses with real-time metrics, sales tracking, and customer insights.',
    url: 'https://github.com/demo-user/ecommerce-dashboard',
    stars: 67,
    updated: '2024-01-08T16:45:00Z',
    language: 'TypeScript',
    topics: ['analytics', 'dashboard', 'showcase', 'ecommerce']
  },
  {
    name: 'Mobile Food Delivery App',
    description: 'Cross-platform mobile application for food delivery with real-time tracking, payment integration, and restaurant management.',
    url: 'https://github.com/demo-user/food-delivery-app',
    stars: 203,
    updated: '2024-01-05T11:30:00Z',
    language: 'JavaScript',
    topics: ['mobile', 'react-native', 'showcase', 'food-delivery']
  },
  {
    name: 'Blockchain Voting System',
    description: 'Secure and transparent voting system built on blockchain technology with voter verification and tamper-proof ballot storage.',
    url: 'https://github.com/demo-user/blockchain-voting',
    stars: 134,
    updated: '2024-01-03T13:20:00Z',
    language: 'Solidity',
    topics: ['blockchain', 'voting', 'showcase', 'security']
  }
];

const DEMO_RESUME: ResumeEntry[] = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc',
    start_date: '2022-03-01',
    end_date: null,
    description: 'Leading development of scalable web applications using modern technologies. Built and maintained multiple high-traffic applications serving 100K+ users.',
    location: 'San Francisco, CA',
    role_type: 'Full-time'
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Digital Solutions Co',
    start_date: '2020-06-15',
    end_date: '2022-02-28',
    description: 'Developed and maintained web applications using React, Node.js, and Python. Collaborated with cross-functional teams to deliver innovative solutions.',
    location: 'Remote',
    role_type: 'Full-time'
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Creative Web Studio',
    start_date: '2019-01-10',
    end_date: '2020-06-10',
    description: 'Specialized in creating responsive, user-friendly interfaces using modern frontend technologies. Worked closely with designers to implement pixel-perfect designs.',
    location: 'New York, NY',
    role_type: 'Full-time'
  },
  {
    id: 4,
    title: 'Junior Web Developer',
    company: 'StartupXYZ',
    start_date: '2018-03-01',
    end_date: '2018-12-31',
    description: 'Built and maintained company website and internal tools. Gained experience in full-stack development and agile methodologies.',
    location: 'Austin, TX',
    role_type: 'Full-time'
  }
];

// Determine the API base URL based on environment
const getApiBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Client-side: check if we're in production
    return window.location.hostname === 'localhost' ? 'http://localhost:8000' : null;
  }
  // Server-side: check environment variable
  return process.env.API_BASE_URL || null;
};

export async function fetchProjects(): Promise<Project[]> {
  const apiBaseUrl = getApiBaseUrl();
  
  if (!apiBaseUrl) {
    // Return demo data if no API URL is configured
    return DEMO_PROJECTS;
  }

  try {
    const response = await fetch(`${apiBaseUrl}/api/github/`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data: Project[] = await response.json();
    return data.filter(p => p.description && p.language);
  } catch (error) {
    console.warn('Failed to fetch projects from API, using demo data:', error);
    return DEMO_PROJECTS;
  }
}

export async function fetchResume(): Promise<ResumeEntry[]> {
  const apiBaseUrl = getApiBaseUrl();
  
  if (!apiBaseUrl) {
    // Return demo data if no API URL is configured
    return DEMO_RESUME;
  }

  try {
    const response = await fetch(`${apiBaseUrl}/api/resume/`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data: ResumeEntry[] = await response.json();
    return data;
  } catch (error) {
    console.warn('Failed to fetch resume from API, using demo data:', error);
    return DEMO_RESUME;
  }
} 