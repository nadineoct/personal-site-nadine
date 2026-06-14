"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";

export function Hero() {
  const [isPressOpen, setIsPressOpen] = useState(false);

  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column - Vertically contained to match image height */}
        <div className="order-2 md:order-1 flex flex-col justify-start gap-6 h-auto py-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[80px] md:text-[100px] font-black leading-[0.8] tracking-tighter text-black"
          >
            hello!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-bold leading-tight max-w-sm"
          >
            I design backend architecture, write code, and compose music faster than replying to a text message :)
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-2"
          >
            <a href="/resume.pdf" download className="text-sm font-semibold text-black hover:underline underline-offset-4 w-fit">Download Resume →</a>
            <a href="/portfolio.pdf" download className="text-sm font-semibold text-black hover:underline underline-offset-4 w-fit">Download Portfolio →</a>
            <div className="relative">
              <button 
                onClick={() => setIsPressOpen(!isPressOpen)}
                className="text-left group pt-0"
              >
                  <span className="text-sm font-semibold text-black hover:underline underline-offset-4">Press & Articles →</span>
                  <span className="block text-[9px] uppercase text-zinc-500 font-semibold tracking-wider mt-0">mentions & features</span>
              </button>
              
              {isPressOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-zinc-200 rounded-2xl p-2 shadow-xl z-50">
                  <a href="https://gadis.co.id/Teen-Talk/105506/cerita-pengalaman-nadine-arindy-octavia-tambunan-saat-mengikuti-the-voice-?p=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaASboYxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAac-Sinw5SXLzWW_TpGizWG0Ty1MOeziyYN9ncloT_ZRT1ovxkXD0vnK8P3JlQ_aem_Cq9Dqlqfq4Js-AEuslTfdA" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100 rounded-xl transition-colors">
                    Cerita Pengalaman (Gadis)
                  </a>
                  <a href="https://www.detik.com/edu/sekolah/d-8064557/alumni-5-sma-luar-pulau-jawa-jadi-mahasiswa-terbaik-itb-terbanyak-di-sumatera?fbclid=PARlRTSASboaVleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaenr9nNVfIaJa7zO98qBQyA0heUt4SMt0CC55TW9ByjN4Yq1MCxHfZccMwBAQ_aem_osNwhnWC-hfu2hNiPrUWwA" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100 rounded-xl transition-colors">
                    Alumni 5 SMA Terbaik (DetikEdu)
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <div className="order-1 md:order-2">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="media-slot aspect-square rounded-[40px] md:rounded-[80px] overflow-hidden relative"
           >
             <img 
               src="personal-site-nadine/images/hero.jpg" 
               alt="Nadine Arindy Octavia Hero" 
               className="w-full h-full object-cover"
             />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
