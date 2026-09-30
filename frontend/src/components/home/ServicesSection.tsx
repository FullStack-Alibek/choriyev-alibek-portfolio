"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  LayoutDashboard,
  Server,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Calculator,
  X,
  Sparkles
} from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { servicesData } from "@/data/portfolioData";

export default function ServicesSection() {
  const { language, priceCalculatorOpen, setPriceCalculatorOpen } = usePortfolioStore();
  const t = translations[language].services;

  const [calcProject, setCalcProject] = useState("web");
  const [calcPages, setCalcPages] = useState("medium");
  const [calcUrgency, setCalcUrgency] = useState("standard");
  const [calcDesign, setCalcDesign] = useState("custom");

  const calculateEstimate = () => {
    let base = 800;
    if (calcProject === "mobile") base = 1200;
    if (calcProject === "saas") base = 1500;
    if (calcProject === "dashboard") base = 900;

    if (calcPages === "large") base += 500;
    if (calcPages === "enterprise") base += 1200;

    if (calcDesign === "premium") base += 400;
    if (calcUrgency === "rush") base *= 1.25;

    return Math.round(base);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe": return Globe;
      case "Smartphone": return Smartphone;
      case "LayoutDashboard": return LayoutDashboard;
      case "Server": return Server;
      case "Rocket": return Rocket;
      default: return Globe;
    }
  };

  return (
    <section id="services" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest">
              <Rocket className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.title}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Software Capabilities
            </h2>
            <p className="text-sm text-gray-400 max-w-xl">
              {t.subtitle}
            </p>
          </div>

          <button
            onClick={() => setPriceCalculatorOpen(true)}
            className="px-5 py-3 rounded-2xl bg-[#111827] hover:bg-red-600 text-white border border-white/[0.08] hover:border-red-500/40 text-xs font-semibold shadow-lg transition-all flex items-center space-x-2 self-start md:self-auto group"
          >
            <Calculator className="w-4 h-4 text-amber-400 group-hover:text-white" />
            <span>{t.estimateBtn}</span>
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-md hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-red-600/10 border border-red-500/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400 bg-[#1F2937] px-3 py-1 rounded-full border border-white/[0.06]">
                      {service.timeline}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                      {service.title[language]}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {service.description[language]}
                    </p>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="space-y-2 pt-2">
                    {service.deliverables[language].map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-gray-400 font-mono">Starting at</div>
                    <div className="text-lg font-mono font-bold text-amber-400">{service.startingPrice}</div>
                  </div>

                  <Link
                    href="/contact"
                    className="p-3 rounded-xl bg-[#1F2937] hover:bg-red-600 text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Price Calculator Modal */}
      <AnimatePresence>
        {priceCalculatorOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-xl rounded-3xl bg-[#111827] border border-white/[0.12] p-6 sm:p-8 shadow-2xl relative space-y-6"
            >
              <button
                onClick={() => setPriceCalculatorOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#1F2937] text-gray-400 hover:text-white hover:bg-red-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-semibold">
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Estimate Calculator</span>
              </div>

              <h3 className="text-2xl font-bold text-white">Project Cost & Timeline Estimator</h3>

              <div className="space-y-4">
                {/* Project type */}
                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-2">Project Scope</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "web", label: "Web App (Next.js)" },
                      { id: "mobile", label: "Mobile App (React Native)" },
                      { id: "dashboard", label: "Dashboard / Admin" },
                      { id: "saas", label: "Full SaaS Platform" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setCalcProject(item.id)}
                        className={`p-3 rounded-xl text-xs font-medium border text-left transition-all ${
                          calcProject === item.id
                            ? "bg-red-600 text-white border-red-500 font-bold"
                            : "bg-[#1F2937] text-gray-300 border-white/[0.08]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scale */}
                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-2">Scale & Complexity</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "medium", label: "Standard MVP" },
                      { id: "large", label: "Growth / Custom" },
                      { id: "enterprise", label: "Enterprise Suite" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setCalcPages(item.id)}
                        className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                          calcPages === item.id
                            ? "bg-red-600 text-white border-red-500 font-bold"
                            : "bg-[#1F2937] text-gray-300 border-white/[0.08]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Output Result */}
              <div className="p-5 rounded-2xl bg-[#030712] border border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">Estimated Investment</span>
                  <span className="text-2xl font-bold font-mono text-amber-400">
                    ~ ${calculateEstimate()} USD
                  </span>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setPriceCalculatorOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-glow-red"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
