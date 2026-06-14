"use client";

import { siteConfig } from "@/data/config";
import { Mail, GitBranch as Github, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-zinc-200 py-16">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-zinc-900 tracking-wider uppercase">CONTACT</h3>
            
            <div className="flex flex-col gap-3">
              <a href={`mailto:${siteConfig.email}`} className="text-base text-zinc-600 hover:text-black flex items-center gap-2">
                <Mail size={16} /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-base text-zinc-600 hover:text-black flex items-center gap-2">
                <Phone size={16} /> {siteConfig.phone}
              </a>
            </div>

            <div className="flex gap-4 mt-2">
                {[
                    { icon: Github, href: siteConfig.socials.github },
                    { icon: Mail, href: `mailto:${siteConfig.email}` },
                ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-200 rounded-full hover:bg-zinc-100 transition-colors">
                        <social.icon size={16} />
                    </a>
                ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="text-right">
              <p className="font-bold text-zinc-900 text-lg">Nadine Arindy Octavia</p>
              <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
