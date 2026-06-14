"use client";

import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-12">01 / IDENTITY</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-muted font-medium mb-8">
            {siteConfig.bio}
          </p>
          <div className="p-6 bg-foreground text-white rounded-2xl">
            <p className="text-lg font-black italic">
              "Active musician and digital creator with a growing online audience (9,800+ Instagram; 600+ YouTube)."
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <motion.div 
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="polaroid-frame -rotate-3 transition-transform duration-500"
          >
            <div className="tape-graphic" />
            <div className="w-[300px] h-[300px] relative overflow-hidden bg-gray-100">
              <img 
                src="/images/profile.jpg" 
                alt="Nadine Arindy O." 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-8 text-center text-2xl font-black tracking-tight text-gray-400">
              Nadine Arindy O.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
