"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Code,
  Smartphone,
  Server,
  Cpu,
  Database,
  Layers,
  Palette,
  Sparkles,
  Zap,
  Cloud,
  FileCode
} from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { skillsData, SkillItem } from "@/data/portfolioData";

export default function SkillsSection() {
  const { language } = usePortfolioStore();
  const t = translations[language].skills;

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { id: "All", label: t.all },
    { id: "Frontend", label: t.frontend },
    { id: "Backend", label: t.backend },
    { id: "Mobile", label: t.mobile },
    { id: "Database", label: t.database },
    { id: "DevOps", label: t.devops },
  ];

  const filteredSkills = activeCategory === "All"
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe": return Globe;
      case "Code": return Code;
      case "Smartphone": return Smartphone;
      case "Server": return Server;
      case "Cpu": return Cpu;
      case "Database": return Database;
      case "Layers": return Layers;
      case "Palette": return Palette;
      case "Sparkles": return Sparkles;
      case "Zap": return Zap;
      case "Cloud": return Cloud;
      default: return FileCode;
    }
  };

  return (
    <section id="skills" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-red-500 uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5" />
              <span>{t.title}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production-Grade Tech Stack
            </h2>
            <p className="text-sm text-gray-400 max-w-xl">
              {t.subtitle}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-red-600 text-white font-semibold shadow-glow-red"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = getIcon(skill.iconName);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-md hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] font-mono text-gray-400">
                          {skill.yearsOfExp} Years Experience
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {skill.proficiency}%
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {skill.description[language]}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="pt-4 mt-2">
                  <div className="w-full h-1.5 rounded-full bg-[#1F2937] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
