"use client";

import { GitHubProjects } from "./github-projects";
import { motion } from "framer-motion";

export function ProjectsTab() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
        <p className="text-xl text-zinc-600 mb-16 max-w-2xl font-medium">
          "A selection of projects that showcase my technical, analytical, and product development experience."
        </p>

        <GitHubProjects />

        <div className="flex justify-center mt-20">
          <a 
            href="https://github.com/nadineoct" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-[#111111] text-white rounded-full font-semibold hover:bg-black transition-all hover:scale-105"
          >
            View All Repositories ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
