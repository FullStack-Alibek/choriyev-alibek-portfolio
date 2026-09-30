import HeroSection from "@/components/home/HeroSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import TechnologyMarquee from "@/components/ui/TechnologyMarquee";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TimelineSection from "@/components/home/TimelineSection";
import GitHubHeatmap from "@/components/ui/GitHubHeatmap";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <StatisticsSection />
      <TechnologyMarquee />
      <ProjectsSection />
      <SkillsSection />
      <ServicesSection />
      <TimelineSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GitHubHeatmap />
      </div>
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
