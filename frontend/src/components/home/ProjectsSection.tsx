"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight,
  X,
  Check,
  Award,
  Layers
} from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { projectsData, Project } from "@/data/portfolioData";

export default function ProjectsSection() {
  const { language, activeProjectModal, setActiveProjectModal } = usePortfolioStore();
  const t = translations[language].projects;

  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { id: "All", label: t.filterAll },
    { id: "Saas Platform", label: t.filterSaas },
    { id: "Mobile Apps", label: t.filterMobile },
    { id: "Web Apps", label: t.filterWeb },
    { id: "Full Stack", label: t.filterFullstack },
  ];

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.title}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Crafted for Enterprise Impact
            </h2>
            <p className="text-sm text-gray-400 max-w-xl">
              {t.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeFilter === cat.id
                    ? "bg-red-600 text-white font-semibold shadow-glow-red"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl bg-[#111827]/90 border border-white/[0.08] overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#030712]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full bg-black/70 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 z-10 flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-black/70 border border-white/20 text-gray-200 hover:text-white hover:bg-red-600 transition-colors backdrop-blur-md"
                    title={t.liveDemo}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-black/70 border border-white/20 text-gray-200 hover:text-white hover:bg-red-600 transition-colors backdrop-blur-md"
                    title={t.github}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 md:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-red-400 mb-3">{project.subtitle}</p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {project.description[language]}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-[#1F2937]/80 border border-white/[0.06] text-[11px] font-mono text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.06]">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="bg-[#1F2937]/50 p-2.5 rounded-xl border border-white/[0.04] text-center">
                      <div className="text-xs font-mono font-bold text-amber-400">{metric.value}</div>
                      <div className="text-[10px] text-gray-400 truncate">{metric.label[language]}</div>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="w-full py-3 rounded-xl bg-[#1F2937] hover:bg-red-600 text-white text-xs font-semibold border border-white/[0.08] transition-all flex items-center justify-center space-x-2 group-hover:border-red-500/40"
                  >
                    <span>{t.caseStudy}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal Dialog */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-3xl rounded-3xl bg-[#111827] border border-white/[0.12] p-6 md:p-8 my-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto scrollbar-thin"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#1F2937] text-gray-400 hover:text-white hover:bg-red-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-[#030712]">
                <Image
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-medium border border-amber-500/30">
                  {activeProjectModal.category}
                </span>
                <h3 className="text-3xl font-extrabold text-white mt-3">{activeProjectModal.title}</h3>
                <p className="text-sm font-mono text-gray-400">{activeProjectModal.subtitle}</p>
              </div>

              <div className="text-sm text-gray-300 leading-relaxed">
                {activeProjectModal.longDescription[language]}
              </div>

              {/* Key Features */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-gray-200 uppercase font-mono tracking-wider">
                  {t.keyFeatures}
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {activeProjectModal.features[language].map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#1F2937]/50 border border-white/[0.04]">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-200 uppercase font-mono tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-[#1F2937] border border-white/[0.08] text-xs font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/[0.08]">
                <a
                  href={activeProjectModal.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-semibold shadow-glow-red flex items-center justify-center space-x-2"
                >
                  <span>{t.liveDemo}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-xl bg-[#1F2937] hover:bg-[#374151] border border-white/[0.08] text-white text-xs font-semibold flex items-center justify-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>{t.github}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
