import React from "react";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";
import shashwatImg from "../assests/shashwat.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white" data-aos="fade-up">
              About Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-indigo-500 mx-auto rounded" data-aos="fade-up" data-aos-delay="100"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
            <div className="lg:col-span-1 flex justify-center" data-aos="fade-right">
              <img
                src={shashwatImg}
                alt="Shashwat Pal"
                className="w-48 h-48 sm:w-60 sm:h-60 rounded-full object-cover shadow-lg border-4 border-indigo-200 dark:border-indigo-800"
              />
            </div>
            <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm" data-aos="fade-left">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                As a seasoned full-stack developer with over eight years of experience, I specialize in architecting and building robust, scalable, and intelligent web applications. My passion lies in leveraging cutting-edge technologies to transform complex problems into elegant, user-friendly solutions.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                My journey in software development has been a progression of continuous learning, from mastering foundational web technologies to leading projects that incorporate machine learning and AI. I thrive in dynamic environments and am committed to staying at the forefront of the ever-evolving tech landscape.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300">
                When I'm not coding, you can find me exploring the latest in AI research, contributing to open-source projects, or mentoring aspiring developers. I believe that a blend of technical depth and creative problem-solving is key to building truly impactful software.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                  <GraduationCap
                    size={32}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                Education
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                B.Tech Information Technology
                <br />
                Dr. APJ Abdul Kalam University, Lucknow
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                  <Briefcase
                    size={32}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                Experience
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                8+ Years
                <br />
                Full Stack Development
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                  <MapPin
                    size={32}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                Location
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Gurugram, India
                <br />
                Available for remote work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
