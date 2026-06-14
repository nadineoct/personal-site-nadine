"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Juara 1 Perorangan - Best Speaker at The Global Youth Innovation Summit (2025)",
    category: "comp",
    image: "/personal-site-nadine/images/achievements/gyis-speaker.jpeg",
  },
  {
    title: "Juara 2 Perorangan - Best Delegate of The Global Youth Innovation Summit (2025)",
    category: "comp",
    image: "/personal-site-nadine/images/achievements/gyis-delegate.jpeg",
  },
  {
    title: "Juara 1 Kelompok - Place Winner of SDGs Project Innovation Presentation (2025)",
    category: "comp",
    image: "/personal-site-nadine/images/achievements/sdgs-presentation.jpeg",
  },
  {
    title: "Juara 1 Kelompok - Best SDGs Project Video at GYIS (2025)",
    category: "comp",
    image: "/personal-site-nadine/images/achievements/sdgs-video.jpeg",
  },
  {
    title: "Juara 1 Kelompok - Most Favourite Team at GYIS (2025)",
    category: "comp",
    image: "/personal-site-nadine/images/achievements/favourite-team.jpeg",
  },
  {
    title: "Juara 2 Kelompok - Best Team at GYIS (2025)",
    category: "comp",
    image: "/personal-site-nadine/images/achievements/best-team.jpeg",
  },
  {
    title: "Dean's List - Information Systems and Technology ITB (2026)",
    category: "comp",
    image: "/personal-site-nadine/images/achievements/deans-list-ist.jpeg",
  },
  {
    title: "Dean's List - Tahap Persiapan Bersama ITB (2025)",
    category: "comp",
    image: "/personal-site-nadine/images/achievements/deans-list-tpb.jpeg",
  },
  {
    title: "Finalis Berbakat - Pemilihan Duta Kampus ITB / PDKI (2025)",
    category: "comp",
    image: "/personal-site-nadine/images/achievements/pdki.jpeg",
  },
  {
    title: "Juara 1 Kelompok - Band Arts Competition at Jatinangor Olympics (2024)",
    category: "comp",
    image: "/personal-site-nadine/images/achievements/band.jpeg",
  },
  {
    title: "Fully Funded Scholar - NUS Winter Enterprise Programme, National University of Singapore (2025)",
    desc: "Selected as 1 of 20 from ITB / only 1st-year student awardee.",
    category: "global",
    image: "/personal-site-nadine/images/achievements/nus-wep.jpeg",
  },
  {
    title: "Fully Funded Awardee - PCAE Scholarship to Singapore & Malaysia (2025)",
    category: "global",
    image: "/personal-site-nadine/images/achievements/pcae.jpeg",
  },
];

export function AchievementsHub() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = achievements.filter(
    (a) => activeTab === "all" || a.category === activeTab
  );

  return (
    <section id="achievements" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Achievements Hub
        </h2>

        <div className="flex justify-center mb-12">
          <div className="flex gap-1 p-1 bg-gray-100 rounded-full w-fit">
            {[
              { id: "all", label: "All Achievements" },
              { id: "comp", label: "Competitions & Awards" },
              { id: "global", label: "Global & Recognitions" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#111111] text-white shadow-md"
                    : "text-[#6B7280] hover:text-[#111111] bg-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="apple-card flex flex-col gap-6 overflow-hidden"
            >
              <div className="h-48 rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xl font-black leading-tight mb-2">
                  {item.title}
                </h4>

                {item.desc && (
                  <p className="text-sm text-black font-medium">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
