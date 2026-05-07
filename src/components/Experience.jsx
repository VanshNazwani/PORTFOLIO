import React from "react";

export const Experience = () => {
  const experiences = [
    {
      role: "Cloud Consultant",
      company: "Teleglobal International · Internship",
      duration: "Feb 2026 – Present",
      description:
        "Designing, deploying, and managing scalable cloud solutions across AWS, Azure, and GCP. Helping businesses migrate to the cloud, optimize infrastructure costs, and build reliable systems using modern DevOps practices. Focused on cloud architecture, infrastructure as code, automation, and performance optimization.",
      certificateLink: "",
    },
    {
      role: "Fullstack Web Developer Intern",
      company: "VPN Digital Services Pvt Ltd",
      duration: "Dec 2025 – May 2026",
      description:
        "Led development of the company’s main EdTech platform for skill-based courses, building responsive UI components and backend features. Fixed critical bugs, improved performance, and deployed the application to production, ensuring a reliable learning experience for users.",
      certificateLink: "",
    },
    {
      role: "Web Development Intern",
      company: "Insight Quest Tech",
      duration: "October 2025 – November 2025",
      description:
        "Built and improved web applications using React.js, Node.js, and MongoDB. Contributed to frontend design, responsive layouts, and backend integration while gaining practical exposure to agile development workflows and collaborative engineering practices.",
      certificateLink:
        "https://www.linkedin.com/posts/vanshnazwani_hello-connections-lll-thrilled-to-share-activity-7393903264854888448-wrSF",
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
              <p className="text-foreground/80 leading-relaxed mb-3">
                {exp.description}
              </p>
              {exp.certificateLink && (
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
