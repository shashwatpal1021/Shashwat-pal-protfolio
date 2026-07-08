import React from "react";
import { Briefcase, CheckCircle } from "lucide-react";

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Innovate AI",
    role: "Lead Software Engineer",
    period: "2022 - Present",
    description:
      "Architecting and leading the development of AI-driven applications. Responsible for system design, mentoring a team of 6 engineers, and integrating machine learning models into production environments.",
    achievements: [
      "Led the design of a scalable microservices architecture for a flagship AI product.",
      "Improved system performance by 40% through targeted optimizations.",
      "Established best practices for code quality, testing, and CI/CD pipelines.",
    ],
  },
  {
    id: 2,
    company: "Tech Solutions Inc.",
    role: "Full Stack Developer",
    period: "2018 - 2022",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, and various cloud services. Collaborated closely with product managers and designers to deliver high-impact features.",
    achievements: [
      "Built a real-time analytics dashboard handling over 1 million events per day.",
      "Engineered a RESTful API service that reduced data processing time by 60%.",
      "Mentored junior developers and led code review sessions.",
    ],
  },
  {
    id: 3,
    company: "Digital Creations",
    role: "Software Developer",
    period: "2016 - 2018",
    description:
      "Contributed to the development of client-facing web applications, focusing on front-end features and functionality while gaining experience in back-end development.",
    achievements: [
      "Implemented responsive user interfaces that improved mobile user engagement by 25%.",
      "Assisted in the migration of a legacy system to a modern React-based stack.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Work Experience
          </h2>
          <div className="mt-2 h-1 w-20 bg-indigo-500 mx-auto rounded" data-aos="fade-up" data-aos-delay="100"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-16 mb-12" data-aos="fade-up">
              <div className="absolute left-0 top-0 flex items-center">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <Briefcase
                    size={24}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition-all hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 sm:mt-0">
                    {exp.period}
                  </p>
                </div>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                  {exp.company}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="list-none space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
