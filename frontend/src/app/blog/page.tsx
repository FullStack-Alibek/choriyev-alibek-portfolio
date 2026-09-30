"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Clock,
  Calendar,
  ArrowRight,
  User
} from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { blogPostsData } from "@/data/portfolioData";

export default function BlogPage() {
  const { language } = usePortfolioStore();
  const t = translations[language].blog;

  const [search, setSearch] = useState("");

  const filteredPosts = blogPostsData.filter((post) =>
    post.title[language].toLowerCase().includes(search.toLowerCase()) ||
    post.excerpt[language].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      {/* Header */}
      <div className="space-y-4 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-red-500 uppercase tracking-widest">
          <FileText className="w-3.5 h-3.5" />
          <span>Engineering Insights</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          {t.title}
        </h1>
        <p className="text-sm text-gray-400 max-w-xl">
          {t.subtitle}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative w-full max-w-md">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search engineering articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#111827] border border-white/[0.08] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60"
        />
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post, idx) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group rounded-3xl bg-[#111827]/80 border border-white/[0.08] overflow-hidden hover:border-red-500/50 transition-all shadow-xl flex flex-col justify-between"
          >
            <div className="relative w-full h-56 overflow-hidden bg-[#030712]">
              <Image
                src={post.image}
                alt={post.title[language]}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 text-white text-xs font-mono font-medium backdrop-blur-md">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-center space-x-4 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-red-400" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gray-500" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                {post.title[language]}
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed">
                {post.excerpt[language]}
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative">
                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                  </div>
                  <span className="text-xs font-medium text-gray-300">{post.author.name}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                >
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
