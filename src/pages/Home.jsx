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
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      // Extract section ID from hash (handles both #section and #/section)
      const sectionId = hash.replace("#", "").replace(/^\//, "");
      
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    // Trigger on hash change
    window.addEventListener("hashchange", handleScroll);
    // Trigger on initial load
    handleScroll();

    return () => window.removeEventListener("hashchange", handleScroll);
  }, []);

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
