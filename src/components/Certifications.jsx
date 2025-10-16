import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import oracleCert from "../assets/oracle.png";
import aicteCloud from "../assets/AICTE_cloud.png";
import aicteJava from "../assets/AICTE_java.png";
import aicteWeb from "../assets/AICTE_web.png";
import awsCert from "../assets/AWS2.png";
import ccnaCert from "../assets/CCNA.png";
import iotCert from "../assets/IOT.png";
import techWorkshop from "../assets/Techworkshop.png";

export const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Certified AI Foundations Associate",
      org: "Oracle University",
      date: "Sep 2025",
      description:
        "Certified in Generative AI fundamentals and practical application of Oracle Cloud AI Services.",
      image: oracleCert,
      linkedin:
        "https://www.linkedin.com/posts/vanshnazwani_oracle-certification-cloudcomputing-activity-7377768617670529025-TWwE",
      tech: ["AI", "Cloud"],
    },
    {
      title: "AICTE Cloud Computing Certification",
      org: "AICTE",
      date: "JUL - SEP 2025",
      description:
        "Completed a cloud computing certification covering fundamentals of cloud architecture, deployment, and management.",
      image: aicteCloud,
      linkedin: "https://www.linkedin.com/posts/vanshnazwani_hello-connections-lll-i-am-pleased-to-activity-7371890167504289792-7b0H",
      tech: ["Cloud", "AICTE"],
    },
    {
      title: "AWS Cloud Practitioner Certification",
      org: "Amazon Web Services",
      date: "AUG 2025",
      description:
        "Certified in cloud fundamentals and AWS core services, including EC2, S3, and IAM.",
      image: awsCert,
      linkedin: "https://www.linkedin.com/posts/vanshnazwani_hello-connections-lll-thrilled-to-share-activity-7367143985611481089-uMh2",
      tech: ["AWS", "Cloud"],
    },
    {
      title: "CCNA Networking Certification",
      org: "Cisco",
      date: "MAY 2025",
      description:
        "Certified in Cisco networking fundamentals, routing and switching, and network security essentials.",
      image: ccnaCert,
      linkedin: "https://www.linkedin.com/posts/vanshnazwani_ccna-networking-cisconetworkingacademy-activity-7330918331647975425-K_yM",
      tech: ["Networking", "CCNA"],
    },
    {
      title: "AICTE Java Programming Certification",
      org: "AICTE",
      date: "JAN - MAR 2025",
      description:
        "Certified in Java programming covering OOP, data structures, and basic backend development.",
      image: aicteJava,
      linkedin: "https://www.linkedin.com/posts/vanshnazwani_aicte-galgotiasuniversity-activity-7339554854899486720-0ib2",
      tech: ["Java", "Backend"],
    },
    {
      title: "AICTE Web Development Certification",
      org: "AICTE",
      date: "OCT - DEC 2024",
      description:
        "Hands-on certification covering HTML, CSS, JavaScript, and responsive web design.",
      image: aicteWeb,
      linkedin: "https://www.linkedin.com/posts/vanshnazwani_webdevelopment-internship-aicte-activity-7272189053272244224-SsBB",
      tech: ["HTML", "CSS", "JS"],
    },
    {
      title: "Tech Workshop Participation",
      org: "Tech Workshops",
      date: "NOV 2024",
      description:
        "Participated in hands-on technical workshops covering modern technologies and practical applications.",
      image: techWorkshop,
      linkedin: "https://www.linkedin.com/posts/vanshnazwani_galgotiastechcouncil-galgotiasuniversity-activity-7280181417332879360-oVbA",
      tech: ["Workshop", "Hands-on"],
    },
     {
      title: "IoT Fundamentals Certification",
      org: "Coursera",
      date: "APR 2024",
      description:
        "Completed certification on Internet of Things concepts, protocols, and basic device integration.",
      image: iotCert,
      linkedin: "https://www.linkedin.com/posts/vanshnazwani_hello-connections-lll-excited-to-share-activity-7231716620174254081-r-QB",
      tech: ["IoT", "Hardware"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextCert = () =>
    setCurrentIndex((prev) => (prev + 1) % certifications.length);

  const prevCert = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );

  // Auto-rotate
  useEffect(() => {
    startAutoRotate();
    return stopAutoRotate;
  }, []);

  const startAutoRotate = () => {
    stopAutoRotate();
    intervalRef.current = setInterval(nextCert, 5000);
  };

  const stopAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const cert = certifications[currentIndex];

  return (
    <section id="certifications" className="py-20 px-6 bg-background/50 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-primary">
          My <span className="text-primary-foreground">Certifications</span>
        </h2>

        <div
          className="relative flex items-center justify-center"
          onMouseEnter={stopAutoRotate}
          onMouseLeave={startAutoRotate}
        >
          {/* Left Arrow */}
          <button
            onClick={prevCert}
            className="absolute left-0 md:left-12 text-primary-foreground hover:text-primary transition-colors p-3 rounded-full bg-card/70 shadow-md z-10"
          >
            <FaChevronLeft size={28} />
          </button>

          {/* Certificate Card */}
          <div className="bg-card rounded-2xl shadow-xl w-[420px] md:w-[520px] flex flex-col overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-72 md:h-80 bg-gray-100">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex justify-center flex-wrap gap-2 mt-3">
              {cert.tech.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex-1 flex flex-col justify-center items-center text-center p-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-primary-foreground font-medium text-base mb-1">
                {cert.org}
              </p>
              <p className="text-foreground/70 text-sm mb-3">{cert.date}</p>
              <p className="text-foreground/80 text-base mb-4 leading-relaxed">
                {cert.description}
              </p>
              <div className="flex gap-4 mt-auto">
                <a
                  href={cert.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-foreground transition-colors"
                  title="View on LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextCert}
            className="absolute right-0 md:right-12 text-primary-foreground hover:text-primary transition-colors p-3 rounded-full bg-card/70 shadow-md z-10"
          >
            <FaChevronRight size={28} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {certifications.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-primary" : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
