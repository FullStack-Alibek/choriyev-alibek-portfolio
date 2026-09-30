"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  Mail,
  Home,
  User,
  Briefcase,
  Code,
  Cpu,
  Layers,
  Send,
  X,
  Check,
  Sparkles
} from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations, Language } from "@/data/translations";
import { developerProfile } from "@/data/portfolioData";

export default function CommandPalette() {
  const router = useRouter();
  const {
    commandMenuOpen,
    setCommandMenuOpen,
    language,
    setLanguage
  } = usePortfolioStore();

  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const t = translations[language].commandMenu;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandMenuOpen(!commandMenuOpen);
      }
      if (e.key === "Escape" && commandMenuOpen) {
        setCommandMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [commandMenuOpen, setCommandMenuOpen]);

  const navItems = [
    { name: translations[language].nav.home, icon: Home, href: "/" },
    { name: translations[language].nav.about, icon: User, href: "/about" },
    { name: translations[language].nav.projects, icon: Briefcase, href: "/projects" },
    { name: translations[language].nav.skills, icon: Code, href: "/skills" },
    { name: translations[language].nav.experience, icon: Cpu, href: "/experience" },
    { name: translations[language].nav.services, icon: Layers, href: "/services" },
    { name: translations[language].nav.blog, icon: FileText, href: "/blog" },
    { name: translations[language].nav.contact, icon: Send, href: "/contact" },
  ];

  const handleNavigate = (href: string) => {
    router.push(href);
    setCommandMenuOpen(false);
    setQuery("");
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(developerProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredNav = navItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {commandMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-xl rounded-2xl bg-[#111827] border border-white/[0.12] shadow-2xl overflow-hidden relative"
          >
            {/* Header Search Box */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08]">
              <Search className="w-4 h-4 text-red-500 mr-3" />
              <input
                type="text"
                placeholder={t.placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setCommandMenuOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.06]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-4 scrollbar-thin">
              {/* Navigation Category */}
              <div>
                <div className="px-3 py-1 text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  {t.navigation}
                </div>
                <div className="mt-1 space-y-1">
                  {filteredNav.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleNavigate(item.href)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-gray-200 hover:bg-red-600/20 hover:text-white transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-4 h-4 text-gray-400 group-hover:text-amber-400" />
                          <span>{item.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-gray-500 group-hover:text-gray-300">
                          Jump →
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions Category */}
              <div>
                <div className="px-3 py-1 text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  {t.actions}
                </div>
                <div className="mt-1 space-y-1">
                  <button
                    onClick={copyEmailToClipboard}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-gray-200 hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-red-400" />
                      <span>{copied ? t.copiedEmail : t.copyEmail}</span>
                    </div>
                    {copied ? (
                      <Check className="w-4 h-4 text-amber-400" />
                    ) : (
                      <span className="text-[10px] font-mono text-gray-500">
                        {developerProfile.email}
                      </span>
                    )}
                  </button>

                  <a
                    href={developerProfile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-gray-200 hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>GitHub Repository</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">
                      {developerProfile.githubHandle}
                    </span>
                  </a>
                </div>
              </div>

              {/* Languages Category */}
              <div>
                <div className="px-3 py-1 text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                  Switch Language
                </div>
                <div className="mt-1 grid grid-cols-3 gap-2">
                  {(["en", "uz", "ru"] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setCommandMenuOpen(false);
                      }}
                      className={`px-3 py-2 rounded-xl text-xs font-mono font-semibold text-center transition-colors ${
                        language === lang
                          ? "bg-red-600 text-white"
                          : "bg-[#1F2937] text-gray-300 hover:bg-white/[0.08]"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer hints */}
            <div className="px-4 py-2.5 bg-[#030712] border-t border-white/[0.08] flex items-center justify-between text-[11px] text-gray-500 font-mono">
              <span>Use ↑ ↓ to navigate</span>
              <span>ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
