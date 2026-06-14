"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "./project-card";
import { motion } from "framer-motion";

const TARGET_PROJECTS = [
  "Agent Hub",
  "Legal Guard RegTech",
  "Appetite Connect Cashier",
  "Radiant",
  "TechRXiv",
  "titanic-survial-prediction",
  "mall-customer-segmentation",
  "nimonscooked",
  "sales-data-analysis-and-visualization",
  "watermarking-sismul"
];

export function GitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/nadineoct/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo: any) => TARGET_PROJECTS.includes(repo.name));
        setProjects(filtered);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20">Loading projects...</div>;

  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  return (
    <div className="space-y-16">
      {/* Featured Projects */}
      <div>
        <h3 className="text-2xl font-bold mb-8">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-8">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
