"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";

const achievements = [
  { title: "Juara 1 Perorangan - Best Speaker at The Global Youth Innovation Summit (2025)", category: "comp" },
  { title: "Juara 2 Perorangan - Best Delegate of The Global Youth Innovation Summit (2025)", category: "comp" },
  { title: "Juara 1 Kelompok - Place Winner of SDGs Project Innovation Presentation (2025)", category: "comp" },
  { title: "Juara 1 Kelompok - Best SDGs Project Video at GYIS (2025)", category: "comp" },
  { title: "Juara 1 Kelompok - Most Favourite Team at GYIS (2025)", category: "comp" },
  { title: "Juara 2 Kelompok - Best Team at GYIS (2025)", category: "comp" },
  { title: "Mahasiswa Berprestasi Jurusan Sistem dan Teknologi Informasi ITB (2026)", category: "comp" },
  { title: "Dean's List - Information Systems and Technology ITB (2026)", category: "comp" },
  { title: "Dean's List - Tahap Persiapan Bersama ITB (2025)", category: "comp" },
  { title: "Finalis Berbakat - Pemilihan Duta Kampus ITB / PDKI (2025)", category: "comp" },
  { title: "Juara 1 Perorangan - Character Development Training (CDT) ITB Side Event (2025)", category: "comp" },
  { title: "Juara 1 Kelompok - Band Arts Competition at Jatinangor Olympics (2024)", category: "comp" },
  { 
    title: "Fully Funded Scholar - NUS Winter Enterprise Programme, National University of Singapore (2025)", 
    desc: "Selected as 1 of 20 from ITB / only 1st-year student awardee.",
    category: "global" 
  },
  { 
    title: "Fully Funded Awardee - PCAE Scholarship to Singapore & Malaysia (2025)", 
    desc: "Selected as 1 of 2 awardees.",
    category: "global" 
  },
];

export function AchievementsHub() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = achievements.filter(a => activeTab === "all" || a.category === activeTab);

  return (
    <section id="achievements" className="py-32 border-t border-border">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase">04 / HUB</h2>
          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg overflow-x-auto whitespace-nowrap">
            {[
              { id: "all", label: "All Achievements" },
              { id: "comp", label: "Competitions & Awards" },
              { id: "global", label: "Global & Recognitions" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
                  activeTab === tab.id ? "bg-white shadow-sm text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div key={i} className="apple-card flex flex-col gap-6">
              <div className="media-slot h-32">
                [ CERTIFICATE SLOT ]
              </div>
              <div>
                <h4 className="text-xl font-black leading-tight mb-2">{item.title}</h4>
                {item.desc && <p className="text-sm text-muted font-medium">{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
