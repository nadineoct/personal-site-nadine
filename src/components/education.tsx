"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

export function Education() {
  return (
    <section id="education" className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Education
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[13px] top-0 bottom-0 w-[2px] bg-zinc-700" />

          <div className="space-y-0">
            {siteConfig.education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-16 pb-14"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 top-1 w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                    edu.current
                      ? "bg-white border-white"
                      : "bg-background border-zinc-500"
                  }`}
                />

                {/* Period */}
                <div className="mb-3">
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-[#444444]">
                    {edu.period}
                  </span>

                  {edu.current && (
                    <span className="ml-3 px-3 py-1 rounded-full bg-[#111111] text-white text-[10px] font-bold uppercase tracking-wider">
                      Current
                    </span>
                  )}
                </div>

                {/* School */}
                <h3 className="text-2xl md:text-4xl font-bold mb-3 text-[#111111]">
                  {edu.school}
                </h3>

                {/* Degree */}
                <p className="text-lg text-[#444444]">
                  {edu.degree}
                </p>

                {/* Divider */}
                {index !== siteConfig.education.length - 1 && (
                  <div className="mt-10 border-b border-zinc-800" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}