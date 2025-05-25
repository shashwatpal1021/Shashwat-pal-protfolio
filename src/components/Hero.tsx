import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import shashwatImg from "../assests/shashwat.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-30 md:pt-32 pb-10 md:pb-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="container mt-35 p-10 mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 dark:text-white">
              Hi, I'm{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Shashwat Pal
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I build exceptional digital experiences that are fast, accessible,
              visually appealing, and responsive. Let's turn your vision into
              reality.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group flex items-center px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
                <span className="ml-3 flex items-center">
                  {/* Circle with animated arrow */}
                  <span className="relative flex items-center justify-center w-7 h-7">
                    <span className="absolute inset-0 rounded-full border-2 border-white group-hover:border-yellow-400 transition-colors duration-300"></span>
                    <svg
                      className="relative z-10 w-4 h-4 text-white group-hover:text-yellow-400 transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-rotate-12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </a>

              <a
                href="https://drive.google.com/file/d/1g2UphPtnmbg3jJl4h2540mOKBc-tTFg4/view?usp=sharing"
                className="px-6 py-3 bg-yellow-600 dark:bg-green-700 text-white rounded-lg hover:bg-green-600 dark:hover:bg-green-800 transition-colors shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                download="Shashwat_Pal_CV.pdf"
                title="Download CV"
                aria-label="Download Shashwat Pal's CV"
              >
                Download CV
              </a>

              <a
                href="#projects"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </a>
            </div>

            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com/shashwatpal1021"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shashwatpal1021/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:i.shashwatpal@gmail.com"
                className="text-gray-700 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 from-indigo-400 to-purple-500 dark:from-indigo-500 dark:to-purple-600 opacity-80"></div>
              <img
                className="ml-15 mt-15"
                src={shashwatImg}
                alt="shashwat.pal"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="group flex flex-col items-center cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="relative flex items-center justify-center w-12 h-12">
              <span className="absolute inset-0 rounded-full border-2 bg-indigo-400 border-indigo-400 group-hover:border-yellow-400 transition-colors duration-300"></span>
              <svg
                className="relative z-10 w-6 h-6 text-green-900 group-hover:text-yellow-400 transition-colors duration-300 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 5v14M19 12l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
