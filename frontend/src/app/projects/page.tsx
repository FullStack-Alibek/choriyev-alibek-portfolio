"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Search,
  ExternalLink,
  Github,
  ArrowRight,
  Filter
} from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { projectsData } from "@/data/portfolioData";

export default function ProjectsPage() {
  const { language, setActiveProjectModal } = usePortfolioStore();
  const t = translations[language].projects;

  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Saas Platform", "Mobile Apps", "Web Apps", "Full Stack"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description[language].toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      {/* Header */}
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-red-500 uppercase tracking-widest">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Complete Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Showcase
        </h1>
        <p className="text-sm text-gray-400 max-w-xl">
          Explore production SaaS platforms, interactive web maps, logistics mobile applications, and headless e-commerce stores.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-md">

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeFilter === cat
                  ? "bg-red-600 text-white font-semibold shadow-glow-red"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#030712] border border-white/[0.08] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group rounded-3xl bg-[#111827]/90 border border-white/[0.08] overflow-hidden hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative w-full h-64 overflow-hidden bg-[#030712]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 text-white text-xs font-mono font-medium backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-red-400 mb-2">{project.subtitle}</p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {project.description[language]}
                </p>
              </div>

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

              <div className="pt-4 flex items-center justify-between border-t border-white/[0.06]">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-glow-red"
                >
                  View Details
                </button>

                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#1F2937] text-gray-300 hover:text-white hover:bg-red-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#1F2937] text-gray-300 hover:text-white hover:bg-red-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
