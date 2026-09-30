"use client";

import React from "react";
import {
  Globe,
  Code2,
  Smartphone,
  Server,
  Cpu,
  Database,
  Layers,
  Palette,
  Zap,
  Box,
  Terminal,
  FileCode2,
  Lock,
  Workflow
} from "lucide-react";

const techList = [
  { name: "Next.js 15", icon: Globe, color: "text-white" },
  { name: "React.js", icon: Code2, color: "text-amber-400" },
  { name: "TypeScript", icon: FileCode2, color: "text-gray-200" },
  { name: "React Native", icon: Smartphone, color: "text-red-400" },
  { name: "Node.js", icon: Server, color: "text-amber-300" },
  { name: "FastAPI", icon: Cpu, color: "text-red-500" },
  { name: "PostgreSQL", icon: Database, color: "text-gray-200" },
  { name: "MongoDB", icon: Layers, color: "text-amber-400" },
  { name: "Tailwind CSS", icon: Palette, color: "text-white" },
  { name: "Framer Motion", icon: Zap, color: "text-amber-400" },
  { name: "Docker", icon: Box, color: "text-gray-300" },
  { name: "Zustand", icon: Workflow, color: "text-amber-400" },
  { name: "Prisma ORM", icon: Terminal, color: "text-slate-300" },
  { name: "Redis", icon: Lock, color: "text-red-500" },
];

export default function TechnologyMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-8 my-8 border-y border-white/[0.08] bg-[#111827]/40 backdrop-blur-md">
      {/* Left/Right fading gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
        {[...techList, ...techList, ...techList].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-3 px-5 py-2.5 rounded-xl bg-[#1F2937]/60 border border-white/[0.08] text-gray-200 text-sm font-medium hover:border-amber-500/40 hover:bg-[#1F2937] transition-all cursor-default group shadow-sm"
            >
              <Icon className={`w-4 h-4 ${tech.color} group-hover:scale-110 transition-transform`} />
              <span className="whitespace-nowrap group-hover:text-white">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
