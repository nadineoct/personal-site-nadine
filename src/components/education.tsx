"use client";

import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-24 border-t border-border">
      <h2 className="text-4xl font-black mb-12 tracking-tight">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteConfig.education.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card"
          >
            <div className="flex flex-col h-full">
              <span className="text-sm font-bold text-apple-blue uppercase tracking-widest mb-2">{edu.period}</span>
              <h3 className="text-2xl font-black mb-1 leading-tight">{edu.school}</h3>
              <p className="text-lg font-bold text-muted mb-4">{edu.degree}</p>
              <div className="mt-auto space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <div key={i} className="inline-block bg-apple-blue/5 text-apple-blue px-3 py-1 rounded-full text-xs font-bold mr-2 border border-apple-blue/10">
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
