"use client";

import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-border">
      <h2 className="text-6xl md:text-8xl font-black uppercase mb-24">03 / TRACKS</h2>
      <div className="flex flex-col gap-32">
        {siteConfig.experience.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32">
              <span className="text-sm font-black text-apple-purple uppercase tracking-[0.3em] mb-4 block">{exp.period}</span>
              <h3 className="text-5xl font-black mb-2 uppercase leading-none">{exp.role}</h3>
              <p className="text-2xl font-black text-apple-blue mb-8 uppercase tracking-tight">{exp.company}</p>
              <ul className="space-y-6">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg font-medium leading-relaxed text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-apple-purple mt-2.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8">
              <div className="media-slot aspect-[4/5] rounded-[24px]">
                [ EVENT/WORK PHOTO FIELD ]
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
