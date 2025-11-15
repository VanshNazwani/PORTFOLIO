import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Certifications } from "../components/Certifications";
import { Experience } from "../components/Experience";
import LeetcodeHeatmap from "../components/LeetcodeHeatmap";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />

        {/* LeetCode Heatmap */}
        <LeetcodeHeatmap />

        <ProjectsSection />
        <Experience />
        <Certifications />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
