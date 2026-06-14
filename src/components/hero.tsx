"use client";

import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div className="order-2 md:order-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[120px] md:text-[180px] font-black leading-[0.8] tracking-tighter bg-gradient-to-r from-apple-blue to-apple-purple bg-clip-text text-transparent mb-12"
          >
            hello!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-black leading-tight max-w-md"
          >
            I design backend architecture, write code, and compose music faster than replying to a text message :)
          </motion.p>
        </div>
        <div className="order-1 md:order-2">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="media-slot aspect-square rounded-[40px] md:rounded-[80px] overflow-hidden relative"
           >
             <img 
               src="/personal-site-nadine/images/hero.jpg" 
               alt="Nadine Arindy Octavia Hero" 
               className="w-full h-full object-cover"
             />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
