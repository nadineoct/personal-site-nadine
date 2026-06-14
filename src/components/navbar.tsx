"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    "Home",
    "About",
    "Education",
    "Experience",
    "Creative",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full bg-white border-b border-gray-100 h-16"
    >
      <div className="container max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-black">
          {siteConfig.name}
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const id = item.toLowerCase();

            return (
              <Link
                key={item}
                href={`#${id}`}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  activeSection === id
                    ? "text-black"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}