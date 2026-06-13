"use client";

import Link from "next/link";
import { siteConfig } from "@/data/config";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full glass h-16"
    >
      <div className="container max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Education", "Experience", "Creative", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[15px] font-medium text-muted hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
