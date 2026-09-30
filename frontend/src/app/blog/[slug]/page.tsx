"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  Sparkles
} from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { blogPostsData } from "@/data/portfolioData";

export default function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { language } = usePortfolioStore();
  const t = translations[language].blog;

  const post = blogPostsData.find((p) => p.slug === resolvedParams.slug) || blogPostsData[0];

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center space-x-2 text-xs font-mono text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-red-500" />
        <span>Back to Articles</span>
      </Link>

      {/* Title & Metadata */}
      <div className="space-y-4">
        <span className="px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-mono font-medium">
          {post.category}
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {post.title[language]}
        </h1>

        <div className="flex items-center space-x-6 text-xs font-mono text-gray-400 pt-2 border-b border-white/[0.08] pb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden relative border border-red-500/30">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <span className="text-gray-200 font-semibold">{post.author.name}</span>
          </div>

          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-red-400" />
            <span>{post.date}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Banner Image */}
      <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden bg-[#030712] border border-white/[0.08]">
        <Image src={post.image} alt={post.title[language]} fill className="object-cover" />
      </div>

      {/* Article Body */}
      <article className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-6 bg-[#111827]/80 p-8 rounded-3xl border border-white/[0.08]">
        <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
          {post.excerpt[language]}
        </p>
        <div className="border-t border-white/[0.08] pt-6">
          {post.content[language]}
        </div>
      </article>

      {/* Tags */}
      <div className="flex items-center space-x-2 pt-4">
        <span className="text-xs font-mono text-gray-400">Tags:</span>
        {post.tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 rounded-lg bg-[#111827] border border-white/[0.08] text-xs font-mono text-gray-300">
            #{tag}
          </span>
        ))}
      </div>

    </div>
  );
}
