"use client";

import { siteConfig } from "@/data/config";
import { ExternalLink } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./icons";

export function Skills() {
  return (
    <section id="creative" className="py-24 border-t border-border">
      <h2 className="text-4xl font-black mb-16 tracking-tight">Skills & Creative</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Hard Skills */}
        <div className="apple-card">
          <h3 className="text-sm font-black uppercase tracking-widest text-muted mb-6">Hard Skills</h3>
          <div className="flex flex-wrap gap-2">
            {siteConfig.skills.hard.map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-apple-blue/5 text-apple-blue rounded-lg text-sm font-bold border border-apple-blue/10">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="apple-card">
          <h3 className="text-sm font-black uppercase tracking-widest text-muted mb-6">Language</h3>
          <div className="flex flex-wrap gap-2">
            {siteConfig.skills.language.map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-apple-purple/5 text-apple-purple rounded-lg text-sm font-bold border border-apple-purple/10">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="apple-card">
          <h3 className="text-sm font-black uppercase tracking-widest text-muted mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {siteConfig.skills.soft.map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-bold border border-gray-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="apple-card bg-foreground text-white p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h3 className="text-3xl font-black mb-4">Creative Focus</h3>
            <div className="space-y-4">
              {siteConfig.creative.map((item, i) => (
                <div key={i} className="flex items-center gap-2 group cursor-pointer">
                  <span className="text-xl font-medium text-white/80 group-hover:text-white transition-colors">{item.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-8">
            <div className="text-center">
              <InstagramIcon className="w-8 h-8 mb-2 mx-auto text-apple-purple" />
              <p className="text-2xl font-black tracking-tighter">{siteConfig.stats.instagram}</p>
              <p className="text-xs uppercase font-bold text-white/50 tracking-widest">Followers</p>
            </div>
            <div className="text-center">
              <YoutubeIcon className="w-8 h-8 mb-2 mx-auto text-red-500" />
              <p className="text-2xl font-black tracking-tighter">{siteConfig.stats.youtube}</p>
              <p className="text-xs uppercase font-bold text-white/50 tracking-widest">Subscribers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
