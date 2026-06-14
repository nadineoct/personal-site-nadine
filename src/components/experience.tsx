"use client";

import { siteConfig } from "@/data/config";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Experience
      </h2>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[13px] top-0 bottom-0 w-[2px] bg-zinc-700" />

        <div className="space-y-0">
          {siteConfig.experience.map((exp, index) => (
            <div key={index} className="relative pl-16 pb-14">
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 top-1 w-7 h-7 rounded-full border-2 ${
                  exp.current
                    ? "bg-white border-white"
                    : "bg-background border-zinc-500"
                }`}
              />

              {/* Date + Current Badge */}
              <div className="mb-3">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-zinc-500">
                  {exp.period}
                </span>

                {exp.current && (
                  <span className="ml-3 px-3 py-1 rounded-md bg-zinc-800 text-[10px] font-bold uppercase tracking-wider">
                    Current
                  </span>
                )}
              </div>

              {/* Role */}
              <h3 className="text-2xl md:text-4xl font-bold mb-3">
                {exp.role}
              </h3>

              {/* Company */}
              <p className="text-lg text-zinc-400 mb-6">
                {exp.company}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-zinc-300 leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              {index !== siteConfig.experience.length - 1 && (
                <div className="mt-10 border-b border-zinc-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}