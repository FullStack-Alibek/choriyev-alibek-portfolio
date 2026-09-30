"use client";

import React from "react";
import SkillsSection from "@/components/home/SkillsSection";
import TechnologyMarquee from "@/components/ui/TechnologyMarquee";

export default function SkillsPage() {
  return (
    <div className="pt-24 pb-20">
      <SkillsSection />
      <TechnologyMarquee />
    </div>
  );
}
