import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

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
    company: "Concentrix",
    role: "Senior Frontend Developer",
    period: "Jan 2025 - Present",
    description:
      "Led the frontend development team in creating responsive, user-friendly web applications. Implemented modern React architecture and design systems.",
    achievements: [
      "Reduced load time by 40% through code optimization",
      "Implemented CI/CD pipeline for frontend deployments",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    id: 2,
    company: "HTS Tech Solutions Ltd.",
    role: "Full Stack Developer",
    period: "Aug 2023 - Jan 2025",
    description:
      "Developed full-stack web applications using React, Node.js, and Supabase. Collaborated with design and product teams to deliver feature-rich applications.",
    achievements: [
      "Created a real-time dashboard used by over 10,000 users",
      "Integrated docusign systems and improved conversion rates by 25%",
      "Implemented responsive designs for cross-platform compatibility",
    ],
  },
  {
    id: 3,
    company: "Johnson Controls",
    role: "Full Stack Developer",
    period: "Oct 2022 - Aug 2023",
    description:
      "Combined design and development skills to create visually appealing and functional web experiences. Specialized in interactive prototypes and animations.",
    achievements: [
      "Redesigned main product interface resulting in 30% increase in user engagement",
      "Created company design system and component library",
    ],
  },
];

const Experience: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
          Experience
        </h2>
        <div
          className="relative max-h-[500px] overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row items-center ${
                  idx % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse md:text-right"
                }`}
              >
                <div className="md:w-1/2 w-full">
                  <button
                    className="w-full text-left focus:outline-none"
                    onClick={() => handleToggle(exp.id)}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold dark:text-white">
                            {exp.role}
                          </h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                            {exp.company}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {exp.period}
                          </p>
                        </div>
                        <span className="ml-4 text-2xl">
                          {openId === exp.id ? "−" : "+"}
                        </span>
                      </div>
                      {openId === exp.id && (
                        <div className="mt-4 text-gray-700 dark:text-gray-300">
                          {exp.description}
                          {exp.achievements && exp.achievements.length > 0 && (
                            <ul className="list-none space-y-2 mt-4">
                              {exp.achievements.map((responsibility, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <CheckCircle size={18} className="text-indigo-500 dark:text-indigo-400" />
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  </button>
                </div>
                {/* Timeline indicator */}
                <div className="hidden md:flex flex-col items-center mx-4">
                  <div className="w-4 h-4 rounded-full bg-indigo-500"></div>
                  {idx < experiences.length - 1 && (
                    <div className="w-1 h-24 bg-indigo-300 dark:bg-indigo-700"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

