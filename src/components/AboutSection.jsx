import { Briefcase, Code, User } from "lucide-react";

const skills = [
  {
    title: "Web Development",
    icon: <Code className="h-6 w-6 text-primary" />,
    description: "Creating responsive websites and web applications with modern frameworks.",
  },
  {
    title: "UI/UX Design",
    icon: <User className="h-6 w-6 text-primary" />,
    description: "Designing intuitive user interfaces and seamless user experiences.",
  },
  {
    title: "Project Management",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    description: "Leading projects from conception to completion with agile methodologies.",
  },
];

export const AboutSection = () => {

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* About text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
I am a Full Stack Developer specializing in building efficient, scalable, and user-friendly web applications. With expertise in React, Node.js, and modern web technologies, I focus on creating solutions that are both functional and visually appealing. I enjoy turning complex problems into elegant, practical solutions, while continuously exploring new technologies and contributing to open-source projects.

              <br /><br />
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a
                href="src/assets/RESUME.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Interactive Cards */}
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                onClick={scrollToProjects}
                className="cursor-pointer gradient-border p-6 card-hover rounded-xl bg-white flex items-start gap-4 transition-transform transform hover:scale-105"
              >
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  {skill.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{skill.title}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
