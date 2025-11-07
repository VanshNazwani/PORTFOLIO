import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", icon: "🌐", category: "frontend" },
  { name: "JavaScript", icon: "📜", category: "frontend" },
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "TypeScript", icon: "📘", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "Next.js", icon: "⚡", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Express", icon: "🚂", category: "backend" },
  { name: "MongoDB", icon: "🍃", category: "backend" },
  { name: "PostgreSQL", icon: "🐘", category: "backend" },
  { name: "GraphQL", icon: "📊", category: "backend" },

  // Tools
  { name: "Git/GitHub", icon: "📚", category: "tools" },
  { name: "Docker", icon: "🐳", category: "tools" },
  { name: "Figma", icon: "🎯", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/10"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-2xl">{skill.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
