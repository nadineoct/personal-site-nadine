"use client";

import { siteConfig } from "@/data/config";
import { Mail, Phone, QrCode } from "lucide-react";
import { LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur rounded-[32px] p-8 md:p-16 mb-20 text-center border border-white/10">
           <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter">
             {siteConfig.funFact}
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-sm uppercase font-bold text-white/50 tracking-widest mb-8">Contact Information</h3>
            <div className="space-y-6">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-2xl font-black hover:text-apple-blue transition-colors">
                <Mail className="w-6 h-6" /> {siteConfig.email}
              </a>
              <a href={siteConfig.socials.linkedin} className="flex items-center gap-4 text-2xl font-black hover:text-apple-blue transition-colors">
                <LinkedinIcon className="w-6 h-6" /> LinkedIn
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-2xl font-black hover:text-apple-blue transition-colors">
                <Phone className="w-6 h-6" /> {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-4">
               <QrCode className="w-full h-full text-foreground" />
            </div>
            <div className="mt-8 text-right">
              <p className="text-white/50 font-bold tracking-tight uppercase text-xs mb-2">Developed with 🤍</p>
              <p className="font-black text-xl">Nadine Arindy Octavia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
