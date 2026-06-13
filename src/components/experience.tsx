"use client";

import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <h2 className="text-4xl font-black mb-16 tracking-tight">Experience</h2>
      <div className="relative pl-8 border-l-2 border-border space-y-20">
        {siteConfig.experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Circle on timeline */}
            <div className="absolute left-[-41px] top-1 w-5 h-5 rounded-full bg-apple-blue border-4 border-white shadow-sm" />
            
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
               <div className="md:w-1/4 pt-1">
                 <span className="text-sm font-black uppercase tracking-widest text-muted">{exp.period}</span>
                 <p className="text-xs font-bold text-apple-purple mt-1 uppercase tracking-tighter">{exp.location}</p>
               </div>
               
               <div className="md:w-3/4 apple-card">
                 <h3 className="text-2xl font-black mb-1">{exp.role}</h3>
                 <p className="text-xl font-bold text-apple-blue mb-6">{exp.company}</p>
                 <ul className="space-y-4">
                   {exp.points.map((point, i) => (
                     <li key={i} className="flex items-start gap-3 text-lg font-medium leading-relaxed text-muted">
                       <span className="w-1.5 h-1.5 rounded-full bg-apple-purple mt-2.5 shrink-0" />
                       {point}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
