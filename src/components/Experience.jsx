import React from "react";

export const Experience = () => {
  const experiences = [
    {
      role: "Fresher",
      company: "Open to Opportunities",
      duration: "Present",
      description:
        "As a recent graduate, I’m eager to apply my knowledge of web development, React, and Node.js in a professional setting. I’ve built multiple academic and personal projects showcasing skills in frontend and backend development.",
    },
  ];

  return (
    <section id="experience" className="exp-section py-16 px-4 bg-background/40">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          My <span className="text-primary-foreground">Work Experience</span>
        </h2>

        <div className="flex flex-col items-center">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="exp-card bg-card rounded-xl shadow-lg p-8 mb-8 w-full max-w-3xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl text-left"
            >
              <h3 className="text-2xl font-semibold mb-2 text-foreground">
                {exp.role}
              </h3>
              <p className="text-primary-foreground font-medium mb-2">
                {exp.company} | {exp.duration}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
