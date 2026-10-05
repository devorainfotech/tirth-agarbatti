"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PILLARS = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Authentic Heritage",
    desc: "Formulated according to authentic Indian incense traditions, using natural sandalwood powder, pure benzoin sambrani resins, and real flower essences.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "Premium Fragrance",
    desc: "Crafted with hand-selected aromatic accords to ensure an even burn time, rich lingering fragrance throw, and clean atmospheric warmth.",
  },
  {
    num: "03",
    icon: HeartHandshake,
    title: "Devotional Experience",
    desc: "Designed to elevate daily morning puja, meditation, and reflective moments—bringing peaceful energy and sacred tranquility to your home.",
  },
];

export default function Design2QualityPillars() {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F1E6] text-[#241914] relative border-b border-[#B89042]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16 space-y-2">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A95736] block">
              OUR UNCOMPROMISING COMMITMENT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#241914]">
              BRAND <span className="italic text-[#B89042]">PILLARS</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-12 h-[2px] bg-[#B89042]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#A95736]" />
              <div className="w-12 h-[2px] bg-[#B89042]" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.num} direction="up" distance={20} delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#FFFDF8] border-2 border-[#B89042]/30 p-7 sm:p-8 relative space-y-4 hover:border-[#A95736] transition-all shadow-lg rounded-xs flex flex-col justify-between h-full group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xs bg-[#F7F1E6] border border-[#B89042]/40 flex items-center justify-center text-[#A95736] group-hover:bg-[#241914] group-hover:text-[#FFFDF8] transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-serif text-3xl font-bold text-[#B89042]">
                        {p.num}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241914] tracking-wide group-hover:text-[#A95736] transition-colors">
                      {p.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#241914]/85 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#B89042]/20 text-[10px] uppercase font-semibold text-[#B89042] tracking-widest">
                    Milliard Heritage Standard
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
