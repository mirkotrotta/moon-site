"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { Sun, Moon, Menu, Close, LogoGithub } from "@carbon/icons-react";
import SocialLinks from "@/components/SocialLinks";
import GlobalContainer from "@/components/ui/GlobalContainer";
import Logo from "@/components/ui/Logo";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Navigation items with proper structure
  const navigationItems = [
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Design System', href: '/design-system', special: true },
    { name: 'Contact', href: 'mailto:hello@mirkotrotta.com', isEmail: true },
  ];

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
      <header className="sticky-header border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm">
        <GlobalContainer>
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-8">
              <Logo />
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-1">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;
                  const isSpecial = item.special;
                  
                  const Component = item.isEmail ? 'a' : Link;
                  const linkProps = item.isEmail 
                    ? { href: item.href }
                    : { href: item.href };
                  
                  return (
                    <Component
                      key={item.name}
                      {...linkProps}
                      className={`
                        relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                        ${isActive 
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                          : isSpecial 
                            ? 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                            : item.isEmail
                              ? 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20'
                              : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                        }
                      `}
                    >
                      {item.name}
                      {isSpecial && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                      )}
                      {item.isEmail && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                      )}
                    </Component>
                  );
                })}
              </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* GitHub Link */}
              <a
                href="https://github.com/mirkotrotta/moon-site"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <LogoGithub size={16} />
                <span>Star</span>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <Close size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </GlobalContainer>
        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
            <GlobalContainer className="py-4">
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;
                  const isSpecial = item.special;
                  
                  const MobileComponent = item.isEmail ? 'a' : Link;
                  const mobileLinkProps = item.isEmail 
                    ? { href: item.href }
                    : { href: item.href, onClick: () => setMobileOpen(false) };
                  
                  return (
                    <MobileComponent
                      key={item.name}
                      {...mobileLinkProps}
                      className={`
                        flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200
                        ${isActive 
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                          : isSpecial 
                            ? 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                            : item.isEmail
                              ? 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20'
                              : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                        }
                      `}
                    >
                      <span className="flex-1">{item.name}</span>
                      {isSpecial && (
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                      )}
                      {item.isEmail && (
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      )}
                    </MobileComponent>
                  );
                })}
              </nav>
              
              {/* Mobile GitHub Link */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="https://github.com/mirkotrotta/moon-site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <LogoGithub size={20} />
                  <span>Star on GitHub</span>
                </a>
              </div>
            </GlobalContainer>
          </div>
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
