import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import shashwatImg from "../assests/shashwat.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-down">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-gray-800 dark:text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Shashwat Pal
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Senior Software Engineer | AI & Full-Stack
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
              I build exceptional digital experiences that are fast, accessible,
              and visually appealing. Let's turn your vision into reality.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
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
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <span className="absolute inset-0 rounded-full border-2 border-white transition-colors"></span>
                    <svg
                      className="relative z-10 h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m9 5 7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </a>

              <a
                href="https://drive.google.com/file/d/1NeeGhNWmKbmV37knKpr2Tqz8rAFs2uRC/view?usp=sharing"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                download="Shashwat_Pal_CV.pdf"
                title="Download CV"
                aria-label="Download Shashwat Pal's CV"
              >
                Download CV
              </a>
            </div>

            <div className="flex space-x-6 justify-center md:justify-start">
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

          <div className="flex justify-center animate-fade-in-up">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900 dark:to-purple-900 rounded-full blur-2xl opacity-50"></div>
              <img
                className="relative object-cover w-full h-full rounded-3xl shadow-lg border-4 border-white dark:border-gray-800"
                src={shashwatImg}
                alt="shashwat.pal"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <a
            href="#about"
            className="group flex flex-col items-center cursor-pointer"
            aria-label="Scroll to About section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="w-8 h-14 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center items-start p-2">
              <svg
                className="w-full h-full text-gray-500 dark:text-gray-400 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  d="m19 9-7 7-7-7"
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
