import React from "react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Certified JavaScript Developer",
      org: "XYZ Institute",
      date: "June 2023",
      description: "Completed an advanced course on JavaScript programming.",
    },
    {
      title: "React Professional Certification",
      org: "ABC Academy",
      date: "Dec 2022",
      description: "Hands-on projects using React and Redux.",
    },
  ];

  return (
    <section id="certifications" className="cert-section py-16 px-4 bg-background/50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          My <span className="text-primary-foreground">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="cert-card bg-card rounded-xl shadow-lg p-6 mb-8 mx-auto max-w-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground">{cert.title}</h3>
              <p className="org text-primary-foreground font-medium mb-1">{cert.org} | {cert.date}</p>
              <p className="text-foreground/80">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
