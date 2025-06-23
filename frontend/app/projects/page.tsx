"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import ProjectCard, { Project } from "@/components/projects/ProjectCard";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import { fetchProjects } from "@/lib/api";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.theme === "dark");
    
    fetchProjects()
      .then((data) => {
        const sorted = data
          .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());
        setProjects(sorted);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  function toggleDarkMode() {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.theme = newMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newMode);
  }
  return (
    <Layout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          A showcase of professional projects demonstrating modern web development, 
          innovative solutions, and technical expertise.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="primary">
            {projects.length} Projects
          </Badge>
          <Badge variant="success" dot animate />
          <span className="text-sm text-gray-600 dark:text-gray-400">Live Updates</span>
        </div>
      </div>

      {loading && (
        <GlassCard className="text-center">
          <Badge variant="primary" animate>Loading projects...</Badge>
        </GlassCard>
      )}
      
      {error && (
        <GlassCard className="text-center border-red-200 dark:border-red-800">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </GlassCard>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Layout>
  );
}
