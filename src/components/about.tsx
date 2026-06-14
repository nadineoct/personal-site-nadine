"use client";

import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";
import Ferrofluid from "./Ferrofluid";

export function About() {
  return (
    <section id="education" className="py-24 border-t border-border">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        About Me
      </h2>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
  <Ferrofluid
    className="w-full h-full"
    dpr={1}
    mixBlendMode="screen"
    colors={["#7C3AED"]}
    speed={0.25}
    scale={2}
    turbulence={0.8}
    fluidity={0.15}
    glow={1.5}
    shimmer={1}
    mouseInteraction={false}
  />
</div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-12">
            01 / IDENTITY
          </h2>

          <p className="text-xl md:text-2xl leading-relaxed text-black font-medium mb-8">
            {siteConfig.bio}
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            <p className="text-lg md:text-xl font-bold italic leading-relaxed text-black">
              "Active musician and digital creator with a growing online
              audience (9,800+ Instagram · 600+ YouTube). Passionate about
              technology, sustainability, and building meaningful digital
              experiences."
            </p>
          </div>
        </motion.div>

        {/* RIGHT PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-6 rounded-[40px] bg-white/10 blur-3xl" />

            {/* Photo Frame */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 w-[340px] h-[440px]">
              {/* GANTI FOTO DI SINI */}
              <img
                src="/personal-site-nadine/images/profile.jpg"
                alt="Nadine Arindy Octavia"
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Name Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">
                  Nadine Arindy Octavia
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-300 mt-1">
                  Information Systems & Technology
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}