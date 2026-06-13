"use client";

import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-black mb-8 tracking-tight">About Me</h2>
          <p className="text-xl leading-relaxed text-muted font-medium">
            {siteConfig.bio}
          </p>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <motion.div 
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="relative bg-white p-4 pb-12 shadow-2xl rounded-sm -rotate-3 border border-border"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm border border-white/20 rotate-12 pointer-events-none" />
            <div className="w-64 h-64 bg-apple-blue/10 rounded-sm overflow-hidden flex items-center justify-center text-apple-blue/20">
              <span className="text-xs uppercase font-bold tracking-widest">Photo Placeholder</span>
            </div>
            <div className="mt-6 font-medium text-center italic text-muted">
              {siteConfig.creativeBio}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
