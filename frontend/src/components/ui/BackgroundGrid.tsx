"use client";

import React from "react";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* Precision grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top glowing red radial mesh */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-red-600/15 via-red-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Middle right gold accent glow */}
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Bottom left subtle dark surface glow */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-[160px] pointer-events-none" />
    </div>
  );
}
