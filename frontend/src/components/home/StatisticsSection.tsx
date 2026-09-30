"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Calendar, Award, Sparkles } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { developerProfile } from "@/data/portfolioData";

export default function StatisticsSection() {
  const { language } = usePortfolioStore();
  const t = translations[language].stats;

  const statsList = [
    {
      id: "projects",
      label: t.projectsCompleted,
      value: developerProfile.stats.projectsCompleted,
      suffix: "+",
      icon: Briefcase,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/30",
    },
    {
      id: "tech",
      label: t.technologies,
      value: developerProfile.stats.technologies,
      suffix: "+",
      icon: Code,
      color: "text-red-500",
      bg: "bg-red-500/10 border-red-500/30",
    },
    {
      id: "experience",
      label: t.freelanceExperience,
      value: developerProfile.stats.experienceYears,
      suffix: "+ Yrs",
      icon: Calendar,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/30",
    },
    {
      id: "satisfaction",
      label: t.clientSatisfaction,
      value: 99,
      suffix: "%",
      icon: Award,
      color: "text-red-500",
      bg: "bg-red-500/10 border-red-500/30",
    },
  ];

  return (
    <section className="relative py-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-md hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl border ${stat.bg}`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <span className="text-2xl md:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-amber-400 transition-colors">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-gray-300 tracking-tight">
                  {stat.label}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
