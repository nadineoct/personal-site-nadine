"use client";

import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";
import { Laptop, Music, Star, Code } from "lucide-react";

const Sticker = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    drag
    dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    className={`absolute cursor-pointer select-none p-3 bg-white rounded-xl shadow-lg border border-border flex items-center justify-center ${className}`}
  >
    {children}
  </motion.div>
);

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 min-h-[80vh] flex flex-col md:flex-row items-center justify-between">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:w-3/5"
      >
        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter bg-gradient-to-r from-apple-blue via-apple-purple to-apple-blue bg-clip-text text-transparent">
          hello!
        </h1>
        <p className="text-2xl md:text-3xl font-medium leading-tight max-w-[500px]">
          {siteConfig.tagline}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="md:w-2/5 relative h-[300px] w-full flex items-center justify-center mt-20 md:mt-0"
      >
        <div className="relative">
           <div className="w-48 h-48 md:w-64 md:h-64 bg-white/50 backdrop-blur rounded-[40px] border border-border shadow-xl flex items-center justify-center">
             <Laptop className="w-24 h-24 md:w-32 md:h-32 text-apple-blue opacity-80" />
           </div>
           
           <Sticker className="top-[-30px] left-[-30px] -rotate-12">
             <Code className="w-6 h-6 text-apple-purple" />
           </Sticker>
           <Sticker className="bottom-[-20px] right-[-10px] rotate-6">
             <Music className="w-6 h-6 text-apple-blue" />
           </Sticker>
           <Sticker className="top-[-10px] right-[-40px] rotate-12">
             <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
           </Sticker>
        </div>
      </motion.div>
    </section>
  );
}
