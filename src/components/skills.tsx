"use client";

import { siteConfig } from "@/data/config";

export function Skills() {
  const skillCategories = [
    { title: "Hard Skills", skills: siteConfig.skills.hard },
    { title: "Languages", skills: siteConfig.skills.language },
    { title: "Soft Skills", skills: siteConfig.skills.soft },
  ];

  return (
    <section id="skills" className="py-24 border-t border-border">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-full text-sm font-semibold border border-zinc-200 hover:border-zinc-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
