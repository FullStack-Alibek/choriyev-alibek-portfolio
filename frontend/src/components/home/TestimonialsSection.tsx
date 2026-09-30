"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { testimonialsData } from "@/data/portfolioData";

export default function TestimonialsSection() {
  const { language } = usePortfolioStore();
  const t = translations[language].testimonials;

  return (
    <section className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 space-y-3 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Product Leaders & Founders
          </h2>
          <p className="text-sm text-gray-400 max-w-xl">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-md hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <Quote className="w-10 h-10 text-red-500/20 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Gold Rating stars */}
                <div className="flex space-x-1">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-gray-300 leading-relaxed italic">
                  &ldquo;{item.content[language]}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center space-x-3 pt-6 mt-6 border-t border-white/[0.06]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-amber-500/30">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-mono">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
