"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Send,
  Sparkles,
  MapPin,
  Github,
  Linkedin,
  Terminal,
  CheckCircle2,
  Award
} from "lucide-react";
import MagnetButton from "@/components/ui/MagnetButton";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { developerProfile } from "@/data/portfolioData";

export default function HeroSection() {
  const { language } = usePortfolioStore();
  const t = translations[language].hero;

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Availability Status Badge with Gold highlight */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-[#111827] border border-amber-500/30 text-xs font-mono text-amber-300 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span>{t.status}</span>
              <Award className="w-3.5 h-3.5 text-amber-400 ml-1" />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {t.headlinePrefix}{" "}
                <span className="bg-gradient-to-r from-red-500 via-amber-400 to-amber-200 bg-clip-text text-transparent underline decoration-red-500/40 underline-offset-8">
                  {t.headlineAccent}
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-gray-400 tracking-tight">
                {t.headlineSuffix}
              </p>
            </motion.div>

            {/* Subtitle / Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-normal"
            >
              {t.description}
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link href="/projects">
                <MagnetButton className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-glow-red hover:shadow-glow-red-lg transition-all flex items-center space-x-2 group">
                  <span>{t.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagnetButton>
              </Link>

              <Link href="/contact">
                <MagnetButton className="px-6 py-3.5 rounded-xl bg-[#1F2937] hover:bg-[#374151] border border-white/[0.08] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2">
                  <Send className="w-4 h-4 text-red-400" />
                  <span>{t.ctaSecondary}</span>
                </MagnetButton>
              </Link>

              <a
                href={developerProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-[#111827] hover:bg-[#1F2937] border border-white/[0.08] text-gray-300 hover:text-white transition-all flex items-center space-x-2 text-xs font-mono"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>{t.ctaCv}</span>
              </a>
            </motion.div>

            {/* Social Links & Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-6 pt-4 text-xs text-gray-400 font-mono border-t border-white/[0.06]"
            >
              <div className="flex items-center space-x-1.5 text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>{t.location}</span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href={developerProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={developerProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={developerProfile.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  title="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Developer Workspace Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl bg-[#111827]/90 border border-white/[0.12] p-5 shadow-2xl backdrop-blur-xl group hover:border-red-500/40 transition-colors"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-gray-600" />
                  <span className="text-xs font-mono text-gray-400 ml-2">developer.config.ts</span>
                </div>
                <Terminal className="w-4 h-4 text-amber-400" />
              </div>

              {/* Code Snippet Box */}
              <div className="font-mono text-xs text-gray-300 space-y-2 p-3 bg-[#030712]/90 rounded-xl border border-white/[0.06]">
                <div className="text-red-400">
                  <span className="text-amber-400">const</span> developer = &#123;
                </div>
                <div className="pl-4 text-gray-300">
                  <span className="text-gray-400">name</span>: <span className="text-white">&apos;Alibek Choriyev&apos;</span>,
                </div>
                <div className="pl-4 text-gray-300">
                  <span className="text-gray-400">title</span>: <span className="text-white">&apos;Full Stack Developer&apos;</span>,
                </div>
                <div className="pl-4 text-gray-300">
                  <span className="text-gray-400">expertise</span>: [
                </div>
                <div className="pl-8 text-amber-400">
                  &apos;Next.js 15&apos;, &apos;React Native&apos;, &apos;TypeScript&apos;,
                </div>
                <div className="pl-8 text-amber-400">
                  &apos;Node.js&apos;, &apos;FastAPI&apos;, &apos;PostgreSQL&apos;
                </div>
                <div className="pl-4 text-gray-300">],</div>
                <div className="pl-4 text-gray-300">
                  <span className="text-gray-400">quality</span>: <span className="text-amber-400">&apos;Silicon Valley Grade&apos;</span>,
                </div>
                <div className="text-red-400">&#125;;</div>
              </div>

              {/* Gold Highlight Feature Badges */}
              <div className="grid grid-cols-2 gap-2.5 mt-4 pt-1">
                <div className="p-3 rounded-xl bg-[#1F2937]/80 border border-amber-500/20 flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-medium text-gray-200">95+ Lighthouse Score</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1F2937]/80 border border-red-500/20 flex items-center space-x-2.5">
                  <Sparkles className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="text-[11px] font-medium text-gray-200">Vercel & Linear Quality</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
