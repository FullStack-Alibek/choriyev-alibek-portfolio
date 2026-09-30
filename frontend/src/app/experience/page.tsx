"use client";

import React from "react";
import TimelineSection from "@/components/home/TimelineSection";
import GitHubHeatmap from "@/components/ui/GitHubHeatmap";

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-20 space-y-12">
      <TimelineSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GitHubHeatmap />
      </div>
    </div>
  );
}
