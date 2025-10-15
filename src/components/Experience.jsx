import React from "react";

export const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "ABC Tech Solutions",
      duration: "Jan 2022 - Present",
      description: "Developed and maintained websites using React and TailwindCSS.",
    },
    {
      role: "Intern - Web Development",
      company: "XYZ Company",
      duration: "Jun 2021 - Dec 2021",
      description: "Worked on building responsive UI components and integrating APIs.",
    },
  ];

  return (
    <section id="experience" className="exp-section py-16 px-4 bg-background/40">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          My <span className="text-primary-foreground">Work Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="exp-card bg-card rounded-xl shadow-lg p-6 mb-8 mx-auto max-w-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground">{exp.role}</h3>
              <p className="company text-primary-foreground font-medium mb-1">{exp.company} | {exp.duration}</p>
              <p className="text-foreground/80">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
