"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { Sun, Moon, Menu, Close } from "@carbon/icons-react";
import SocialLinks from "@/components/SocialLinks";
import GlobalContainer from "@/components/ui/GlobalContainer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Function to update header height CSS variable
  const updateHeaderHeight = () => {
    const header = document.querySelector('header');
    if (header) {
      const height = header.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
    
    // Set the header height CSS variable based on actual header height
    updateHeaderHeight();
    
    // Listen for window resize to update header height
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);
  
  // Update header height when mobile menu is toggled
  useEffect(() => {
    // Use setTimeout to ensure the DOM has updated
    const timer = setTimeout(() => {
      updateHeaderHeight();
    }, 50);
    return () => clearTimeout(timer);
  }, [mobileOpen]);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  };

  return (
    <div className="font-sans text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 min-h-screen flex flex-col">
      <header className="sticky-header border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
        <GlobalContainer>
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <span className="font-bold text-lg tracking-tight">Moon Site</span>
              </Link>
              <nav className="hidden md:flex space-x-4 text-sm">
                <Link href="/about" className="hover:underline hover:bg-gray-200 w-full h-full flex items-center justify-center">About</Link>
                <Link href="/resume" className="hover:underline hover:bg-gray-200 w-full h-full flex items-center justify-center">Resume</Link>
                <Link href="/projects" className="hover:underline hover:bg-gray-200 w-full h-full flex items-center justify-center">Projects</Link>
                <Link href="/blog" className="hover:underline hover:bg-gray-200 w-full h-full flex items-center justify-center">Blog</Link>
                <Link href="/design-system" className="hover:underline hover:bg-gray-200 w-full h-full flex items-center justify-center text-blue-600 dark:text-blue-400">Design System</Link>
                <Link href="/contact" className="hover:underline hover:bg-gray-200 w-full h-full flex items-center justify-center">Contact</Link>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="border border-gray-400 dark:border-gray-600 p-2 w-8 h-8 text-xs hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="md:hidden border border-gray-400 dark:border-gray-600 p-2 w-8 h-8 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <Close size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </GlobalContainer>
        {mobileOpen && (
          <GlobalContainer className="md:hidden border-t border-gray-200 dark:border-gray-700 py-3 space-y-2 bg-white dark:bg-gray-900">
            <Link href="/about" className="block hover:underline">About</Link>
            <Link href="/resume" className="block hover:underline">Resume</Link>
            <Link href="/projects" className="block hover:underline">Projects</Link>
            <Link href="/blog" className="block hover:underline">Blog</Link>
            <Link href="/design-system" className="block hover:underline text-blue-600 dark:text-blue-400">Design System</Link>
            <Link href="/contact" className="block hover:underline">Contact</Link>
          </GlobalContainer>
        )}
      </header>

      <main className="flex-grow w-full py-10">
        <GlobalContainer>
          {children}
        </GlobalContainer>
      </main>

      <footer className="mt-auto border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-xs py-8 text-gray-600 dark:text-gray-400">
        <GlobalContainer className="text-center">
          <p className="font-semibold">Moon Site – Professional Portfolio Template</p>
          <p className="mt-1">Open Source • Production Ready • Fully Customizable</p>
          <div className="flex justify-center gap-6 mt-3">
            <a
              href="https://github.com/mirkotrotta/moon-site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ⭐ Star on GitHub
            </a>
            <a
              href="https://github.com/mirkotrotta/moon-site/generate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:underline"
            >
              🚀 Use This Template
            </a>
            <a
              href="https://github.com/mirkotrotta/moon-site/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              🍴 Fork Repository
            </a>
          </div>
          <SocialLinks className="mt-3 justify-center" />
          <p className="mt-4 text-gray-400">© {new Date().getFullYear()} Moon Site Template. Built with Next.js & FastAPI.</p>
        </GlobalContainer>
      </footer>
    </div>
  );
}
