import { ArrowDown, Linkedin, Twitter, Github, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Vansh
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Nazwani
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a passionate Full Stack Developer with expertise in modern web technologies. I build efficient, scalable applications with a focus on clean code and user experience.
          </p>

          <div className="pt-8">
            <div className="flex space-x-6 justify-center items-center">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vanshnazwani"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-white"
              >
                <Linkedin className="w-6 h-6 hover:scale-110 transition-transform" />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded-md">
                  LinkedIn
                </span>
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/VanshNazwa27968"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-white"
              >
                <Twitter className="w-6 h-6 hover:scale-110 transition-transform" />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded-md">
                  Twitter
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/vanshnazwani"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-white"
              >
                <Github className="w-6 h-6 hover:scale-110 transition-transform" />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded-md">
                  GitHub
                </span>
              </a>

              {/* Mail */}
            <a
  href="mailto:nazwaniv@gmail.com"
  className="relative group text-white"
>
  <Mail className="w-6 h-6 hover:scale-110 transition-transform" />
  <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded-md">
    Mail
  </span>
</a>

{/* LeetCode */}
<a
  href="https://leetcode.com/VanshNazwani4705/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative group"
>
  <img
    src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-3521542-2944960.png?f=webp&w=256"
    alt="LeetCode"
    className="w-6 h-6 invert hover:scale-110 transition-transform"
  />
  <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded-md">
    LeetCode
  </span>
</a>

            </div>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
