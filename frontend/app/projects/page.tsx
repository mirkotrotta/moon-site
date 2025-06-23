"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import ProjectCard, { Project } from "@/components/projects/ProjectCard";
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
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>

      {loading && <p className="text-sm text-gray-500">Loading...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Layout>
  );
}
