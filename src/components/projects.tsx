import { siteConfig } from "@/data/config";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-12 border-t">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {siteConfig.projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
