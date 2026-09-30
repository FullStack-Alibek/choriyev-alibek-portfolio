"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { experienceData } from "@/data/portfolioData";

export default function TimelineSection() {
  const { language } = usePortfolioStore();
  const t = translations[language].experience;

  return (
    <section id="experience" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 space-y-3 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-red-500 uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proven Track Record
          </h2>
          <p className="text-sm text-gray-400 max-w-xl">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-red-600/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet Indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#030712] border-2 border-red-500 group-hover:scale-125 group-hover:bg-red-600 transition-all shadow-glow-red" />

              <div className="p-6 md:p-8 rounded-3xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-md hover:border-amber-500/40 transition-all shadow-xl space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {exp.role[language]}
                    </h3>
                    <div className="text-sm font-semibold text-red-400 font-mono mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-xs text-gray-400 font-mono">
                    <span className="px-3 py-1 rounded-full bg-[#1F2937] border border-white/[0.06] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {exp.description[language]}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-[11px] font-mono text-gray-400 uppercase tracking-wider font-bold">
                    {t.keyAchievements}
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {exp.achievements[language].map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-[#1F2937]/80 border border-white/[0.06] text-[11px] font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
