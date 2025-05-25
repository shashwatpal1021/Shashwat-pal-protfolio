import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-10 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Animated Down Arrow */}
          {/* <div className="flex justify-center mb-6">
            <span className="relative flex items-center justify-center w-12 h-12">
              <span className="absolute inset-0 rounded-full border-2 border-indigo-400 group-hover:border-yellow-400 transition-colors duration-300"></span>
              <svg
                className="relative z-10 w-6 h-6 text-indigo-400 animate-bounce transition-colors duration-300"
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
          </div> */}

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
            About Me
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate full-stack developer with expertise in building
              modern web applications. With a strong foundation in both
              front-end and back-end technologies, I create seamless,
              user-friendly experiences that solve real-world problems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My journey in software development began 3 years ago, and since
              then, I've worked on a variety of projects ranging from e-commerce
              platforms to data visualization tools. I'm constantly learning and
              adapting to new technologies to stay at the forefront of web
              development.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me hiking in the mountains,
              reading science fiction, or experimenting with new recipes in the
              kitchen. I believe that diverse experiences contribute to creative
              problem-solving in technology.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                Education
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                B.Tech Information Technology
                <br />
                Dr. APJ Abdul Kalam University, Lucknow
                <br />
                2017-2021
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                Experience
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Senior Developer
                <br />
                Concentrix
                <br />
                2025-Present
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                Location
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Gurugram, India
                <br />
                Available for remote work
                <br />
                Open to relocation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
