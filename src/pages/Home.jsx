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

export const Home = () => {
  // Refresh LeetCode data automatically every 30 minutes
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTimestamp(Date.now()), 100000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />

        {/* ✅ LeetCode Heatmap Section */}
        <section
          id="leetcode"
          className="py-20 px-4 text-center bg-secondary/40 rounded-xl mx-auto max-w-6xl my-12 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            My <span className="text-primary">LeetCode Progress</span>
          </h2>

          <div className="flex justify-center items-center">
            <div className="overflow-hidden w-full flex justify-center">
              <img
                key={timestamp} // Forces React re-render
                src={`https://leetcard.jacoblin.cool/vanshnazwani4705?theme=transparent&font=Hammersmith%20One&ext=heatmap&border=0&width=1000&ts=${timestamp}`} // Updated URL with transparent theme & font
                alt="LeetCode Heatmap"
                className="rounded-2xl w-full max-w-[1000px] shadow-lg border border-primary/30 transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
          </div>

        </section>

        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
