import React from "react";
import { Code, Database, Wrench, Cpu, Cloud, BrainCircuit } from "lucide-react";

interface SkillCategory {
  name: string;
  skills: string[];
  icon: React.ElementType;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: Code,
    skills: ["TypeScript", "JavaScript", "Python", "HTML/CSS"],
  },
  {
    name: "Frontend",
    icon: Cpu,
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Shadcn/ui",
      "Redux",
    ],
  },
  {
    name: "Backend",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    name: "Databases & Data",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Kafka",
      "Spark Streaming",
      "Cassandra",
    ],
  },
  {
    name: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: ["Scikit-learn", "Pandas", "LangChain", "Pinecone", "LLM APIs"],
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    skills: ["AWS", "Docker", "CI/CD", "Git", "Grafana", "Postman"],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Technical Skills
          </h2>
          <div className="mt-2 h-1 w-20 bg-indigo-500 mx-auto rounded"></div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mt-4">
            A collection of technologies I've worked with throughout my career as a software engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-700"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flex items-center mb-6">
                <category.icon
                  className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-4"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full font-medium transition-colors hover:bg-indigo-100 dark:hover:bg-indigo-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
