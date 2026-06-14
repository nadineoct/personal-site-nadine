import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
  homepage?: string;
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`group apple-card p-8 rounded-2xl border border-zinc-100 bg-white shadow-sm hover:shadow-xl transition-all ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-black text-black">{project.name}</h3>
        <div className="flex gap-2">
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 hover:bg-black hover:text-white transition-colors">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      
      <p className="text-zinc-600 mb-6 font-medium line-clamp-2">{project.description || "No description available."}</p>
      
      <div className="flex items-center gap-4 text-sm font-semibold text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          {project.language || "N/A"}
        </span>
        <span>★ {project.stargazers_count}</span>
      </div>
    </motion.div>
  );
}
