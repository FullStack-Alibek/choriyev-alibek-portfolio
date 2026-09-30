"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Command,
  Menu,
  X,
  Globe,
  ChevronDown,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations, Language } from "@/data/translations";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, toggleCommandMenu } = usePortfolioStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: "/" },
    { name: t.about, href: "/about" },
    { name: t.projects, href: "/projects" },
    { name: t.skills, href: "/skills" },
    { name: t.experience, href: "/experience" },
    { name: t.services, href: "/services" },
    { name: t.blog, href: "/blog" },
    { name: t.contact, href: "/contact" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "uz", label: "UZ" },
    { code: "ru", label: "RU" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-amber-600 border border-red-500/30 flex items-center justify-center text-white font-bold font-mono text-base group-hover:shadow-glow-red transition-all duration-300">
            AC
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm tracking-tight group-hover:text-amber-400 transition-colors">
              Alibek Choriyev
            </span>
            <span className="text-[11px] text-gray-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Full Stack Dev
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 p-1.5 rounded-full bg-[#111827]/70 border border-white/[0.08] backdrop-blur-md shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-red-600 rounded-full z-0 shadow-glow-red"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action Tools */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Command Menu Trigger */}
          <button
            onClick={toggleCommandMenu}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#111827] border border-white/[0.08] text-xs text-gray-400 hover:text-white hover:border-red-500/40 transition-all cursor-pointer group shadow-sm"
            title="Command Palette (Cmd + K)"
          >
            <Command className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
            <span className="font-mono text-[11px] text-gray-400">⌘K</span>
          </button>

          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-[#111827] border border-white/[0.08] text-xs text-gray-300 hover:text-white hover:border-amber-500/40 transition-all shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono font-bold">{language.toUpperCase()}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute right-0 mt-2 w-28 py-1.5 bg-[#111827] border border-white/[0.1] rounded-2xl shadow-2xl z-50 overflow-hidden"
                >
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setLanguage(item.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-mono flex items-center justify-between hover:bg-white/[0.06] transition-colors ${
                        language === item.code ? "text-amber-400 font-bold bg-white/[0.04]" : "text-gray-300"
                      }`}
                    >
                      <span>{item.label}</span>
                      {language === item.code && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Primary CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-semibold shadow-glow-red hover:shadow-glow-red-lg transition-all duration-300 transform active:scale-95"
          >
            <span>{t.hireMe}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={toggleCommandMenu}
            className="p-2 rounded-xl bg-[#111827] border border-white/[0.08] text-gray-300"
          >
            <Command className="w-4 h-4 text-red-500" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#111827] border border-white/[0.08] text-gray-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#030712]/95 border-b border-white/[0.08] backdrop-blur-2xl overflow-hidden px-4 py-6"
          >
            <div className="flex flex-col space-y-2 mb-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-red-600 text-white font-semibold"
                        : "text-gray-300 hover:bg-white/[0.05]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
              <div className="flex space-x-2">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${
                      language === item.code
                        ? "bg-red-600 text-white border-red-500 font-bold"
                        : "bg-[#111827] text-gray-400 border-white/[0.08]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-semibold shadow-glow-red"
              >
                {t.hireMe}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
