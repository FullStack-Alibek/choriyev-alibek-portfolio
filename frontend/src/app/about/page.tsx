"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  MapPin,
  Award,
  Terminal,
  Download,
  ArrowRight,
  Code2,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import MagnetButton from "@/components/ui/MagnetButton";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { developerProfile } from "@/data/portfolioData";

export default function AboutPage() {
  const { language } = usePortfolioStore();
  const t = translations[language].about;

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

      {/* Header */}
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-red-500 uppercase tracking-widest">
          <User className="w-3.5 h-3.5" />
          <span>About My Journey</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Passionate Engineer & Problem Solver
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
          {developerProfile.bio[language]}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Profile Card */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl bg-[#111827]/90 border border-white/[0.08] p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-red-500/40 transition-colors">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 bg-[#030712]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Alibek Choriyev"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Alibek Choriyev</h2>
              <p className="text-xs font-mono text-red-400">Senior Full Stack Engineer</p>
              <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono pt-2">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Tashkent, Uzbekistan (UTC+5)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Story & Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-md space-y-4 shadow-xl">
            <h3 className="text-xl font-bold text-white">My Engineering Philosophy</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              I believe software engineering is an art form of turning abstract user requirements into resilient, subsecond digital architectures. Whether building an AI-powered SaaS or a logistics fleet manager, my focus is always on code maintainability, type safety, and pixel-perfect design.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                "Clean Code & Type Safety",
                "Optimized Web Vitals",
                "Responsive UI/UX Precision",
                "Scalable Microservices",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={developerProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold shadow-glow-red flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#1F2937] hover:bg-[#374151] text-white text-xs font-bold border border-white/[0.08] flex items-center space-x-2"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="w-4 h-4 text-red-400" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
