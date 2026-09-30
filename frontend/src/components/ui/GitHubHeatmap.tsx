"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { GitCommit, Flame, Award, ExternalLink } from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { developerProfile } from "@/data/portfolioData";

export default function GitHubHeatmap() {
  const { language } = usePortfolioStore();
  const t = translations[language].github;

  const gridData = useMemo(() => {
    const weeks = [];
    let seed = 123;
    for (let w = 0; w < 48; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        seed = (seed * 9301 + 49297) % 233280;
        const rnd = seed / 233280;
        let level = 0;
        if (rnd > 0.3) level = 1;
        if (rnd > 0.6) level = 2;
        if (rnd > 0.8) level = 3;
        if (rnd > 0.93) level = 4;
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  }, []);

  const getColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-red-950/80 border-red-900/40";
      case 2:
        return "bg-red-800/90 border-red-700/60";
      case 3:
        return "bg-amber-600 border-amber-500";
      case 4:
        return "bg-amber-400 border-amber-300 shadow-sm shadow-amber-400/50";
      default:
        return "bg-[#111827] border-white/[0.04]";
    }
  };

  return (
    <div className="w-full my-12 p-6 md:p-8 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-md relative overflow-hidden group">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-red-500 text-sm font-semibold mb-1">
            <GitCommit className="w-4 h-4" />
            <span>GitHub {developerProfile.githubHandle}</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">{t.title}</h3>
          <p className="text-sm text-gray-400">{t.subtitle}</p>
        </div>

        <a
          href={developerProfile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-medium text-gray-300 hover:text-white bg-[#1F2937] hover:bg-red-600 rounded-lg border border-white/[0.08] transition-all self-start md:self-auto"
        >
          <span>Visit Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Statistics badges */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="p-3 rounded-xl bg-[#1F2937]/50 border border-white/[0.06]">
          <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
            <GitCommit className="w-3.5 h-3.5 text-red-400" />
            <span>{t.totalCommits}</span>
          </div>
          <div className="text-lg md:text-xl font-bold text-white font-mono">1,428+</div>
        </div>

        <div className="p-3 rounded-xl bg-[#1F2937]/50 border border-white/[0.06]">
          <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.currentStreak}</span>
          </div>
          <div className="text-lg md:text-xl font-bold text-amber-400 font-mono">42 Days</div>
        </div>

        <div className="p-3 rounded-xl bg-[#1F2937]/50 border border-white/[0.06]">
          <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.longestStreak}</span>
          </div>
          <div className="text-lg md:text-xl font-bold text-amber-400 font-mono">89 Days</div>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex gap-1.5 min-w-[650px]">
          {gridData.map((week, wIndex) => (
            <div key={wIndex} className="flex flex-col gap-1.5">
              {week.map((level, dIndex) => (
                <motion.div
                  key={dIndex}
                  whileHover={{ scale: 1.3, zIndex: 10 }}
                  className={`w-3 h-3 rounded-[3px] border ${getColor(level)} transition-colors cursor-pointer`}
                  title={`Contribution level: ${level}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-400 mt-4 pt-3 border-t border-white/[0.06]">
        <span>48 Weeks Contribution Activity</span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#111827] border border-white/[0.04]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-red-950/80" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-red-800/90" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-amber-600" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-amber-400" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
