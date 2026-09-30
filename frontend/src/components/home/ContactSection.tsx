"use client";

import React from "react";
import {
  Send,
  Mail,
  Phone,
  MessageSquare,
  Github,
  Linkedin,
  Instagram,
  Video,
  MapPin,
  ExternalLink
} from "lucide-react";
import ContactForm from "../../features/contact/components/ContactForm";
import { usePortfolioStore } from "../../store/usePortfolioStore";
import { translations } from "../../data/translations";
import { developerProfile } from "../../data/portfolioData";

export default function ContactSection() {
  const { language } = usePortfolioStore();
  const t = translations[language].contact;

  const contactChannels = [
    {
      id: "telegram",
      label: "Telegram (Primary)",
      value: developerProfile.telegramHandle,
      href: developerProfile.telegram,
      icon: Send,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      highlight: true,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: developerProfile.whatsapp,
      href: developerProfile.whatsappUrl,
      icon: MessageSquare,
      color: "text-red-400 border-red-500/30 bg-red-500/10",
      highlight: false,
    },
    {
      id: "phone",
      label: "Direct Phone",
      value: developerProfile.phone,
      href: developerProfile.phoneUrl,
      icon: Phone,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      highlight: false,
    },
    {
      id: "email",
      label: "Email Address",
      value: developerProfile.email,
      href: `mailto:${developerProfile.email}`,
      icon: Mail,
      color: "text-red-400 border-red-500/30 bg-red-500/10",
      highlight: false,
    },
    {
      id: "github",
      label: "GitHub Profile",
      value: developerProfile.githubHandle,
      href: developerProfile.github,
      icon: Github,
      color: "text-gray-200 border-white/20 bg-white/10",
      highlight: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn Profile",
      value: "Alibek Choriyev",
      href: developerProfile.linkedin,
      icon: Linkedin,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      highlight: false,
    },
    {
      id: "instagram",
      label: "Instagram Profile",
      value: developerProfile.instagramHandle,
      href: developerProfile.instagram,
      icon: Instagram,
      color: "text-red-400 border-red-500/30 bg-red-500/10",
      highlight: false,
    },
    {
      id: "tiktok",
      label: "TikTok Channel",
      value: developerProfile.tiktokHandle,
      href: developerProfile.tiktok,
      icon: Video,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      highlight: false,
    },
  ];

  return (
    <section id="contact" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Channels (All 8 Items) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-red-500 uppercase tracking-widest">
                <Send className="w-3.5 h-3.5 text-amber-400" />
                <span>Direct Communication</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t.title}
              </h2>
              <p className="text-sm text-gray-400">
                {t.subtitle}
              </p>
            </div>

            {/* Direct Channels Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-2">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.id}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${channel.label}: ${channel.value}`}
                    className={`p-3.5 rounded-2xl bg-[#111827]/90 border ${
                      channel.highlight ? "border-amber-500/50 shadow-glow-gold" : "border-white/[0.08]"
                    } hover:border-amber-400 transition-all flex items-center justify-between group shadow-md`}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className={`p-2.5 rounded-xl border ${channel.color} shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                          <span>{channel.label}</span>
                          {channel.highlight && (
                            <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] font-bold">
                              FAST
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                          {channel.value}
                        </div>
                      </div>
                    </div>

                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-amber-400 transition-colors shrink-0 ml-2" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: React Hook Form + Zod + Sonner Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
