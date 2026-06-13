"use client";

import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-32 border-t border-border">
      <h2 className="text-6xl md:text-8xl font-black uppercase mb-20">02 / ACADEMIA</h2>
      <div className="flex flex-col gap-16">
        {siteConfig.education.map((edu, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
              <span className="text-sm font-black text-apple-blue uppercase tracking-[0.2em] mb-4 block">{edu.period}</span>
              <h3 className="text-4xl font-black mb-4 leading-none uppercase">{edu.school}</h3>
              <p className="text-xl font-bold text-muted mb-6">{edu.degree}</p>
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((a, i) => (
                  <span key={i} className="px-4 py-1.5 bg-gray-100 text-[10px] font-black uppercase tracking-widest rounded-full">
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className={index % 2 === 0 ? "order-2" : "order-2 md:order-1"}>
              <div className="media-slot h-[300px]">
                [ CAMPUS/EDUCATION PHOTO ]
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
