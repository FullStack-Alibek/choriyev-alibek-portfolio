"use client";

import React from "react";
import Link from "next/link";
import {
  Github,
  Send,
  Linkedin,
  Mail,
  Phone,
  MessageSquare,
  Instagram,
  Video
} from "lucide-react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { translations } from "@/data/translations";
import { developerProfile } from "@/data/portfolioData";

export default function Footer() {
  const { language } = usePortfolioStore();
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "Telegram", href: developerProfile.telegram, icon: Send, color: "text-amber-400" },
    { name: "WhatsApp", href: developerProfile.whatsappUrl, icon: MessageSquare, color: "text-red-400" },
    { name: "Phone", href: developerProfile.phoneUrl, icon: Phone, color: "text-amber-400" },
    { name: "Email", href: `mailto:${developerProfile.email}`, icon: Mail, color: "text-red-400" },
    { name: "GitHub", href: developerProfile.github, icon: Github, color: "text-gray-200" },
    { name: "LinkedIn", href: developerProfile.linkedin, icon: Linkedin, color: "text-amber-400" },
    { name: "Instagram", href: developerProfile.instagram, icon: Instagram, color: "text-red-400" },
    { name: "TikTok", href: developerProfile.tiktok, icon: Video, color: "text-amber-400" },
  ];

  return (
    <footer className="relative bg-[#030712] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden z-10">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Column 1: Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 border border-red-500/30 flex items-center justify-center text-white font-bold font-mono text-base shadow-glow-red">
                AC
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Alibek Choriyev
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Full Stack Developer specializing in Next.js, React Native, TypeScript, Node.js, FastAPI and PostgreSQL. Building modern web applications, mobile apps and scalable SaaS products.
            </p>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111827] border border-amber-500/30 text-amber-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{t.status}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About Story</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-400 transition-colors">Projects Showcase</Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-amber-400 transition-colors">Technical Skills</Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-amber-400 transition-colors">Work Experience</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider font-mono">Services</h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">Next.js Web Apps</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">React Native Mobile Apps</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">SaaS Product MVP</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">FastAPI / Node.js Backends</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">Analytics Dashboards</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Channels (All 8 Items) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider font-mono">Connect Direct</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {socialLinks.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-[#111827]"
                  >
                    <Icon className={`w-3.5 h-3.5 ${s.color}`} />
                    <span>{s.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Alibek Choriyev. {t.rights}</p>
          <p className="flex items-center gap-1 text-center">
            {t.designedWith}
          </p>
          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded-lg bg-[#111827] border border-white/[0.08] text-gray-400 hover:text-white hover:border-red-500/40 transition-all font-mono text-[11px]"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
