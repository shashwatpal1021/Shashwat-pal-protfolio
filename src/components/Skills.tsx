import React from "react";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "React", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "Tailwind CSS", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Material UI", level: 4 },
      { name: "Shadcn/ui", level: 4 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 5 },
      { name: "MongoDB", level: 3 },
      { name: "Prisma", level: 4 },
      { name: "Fastapi", level: 4 },
      { name: "Python", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "REST APIs", level: 5 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 5 },
      { name: "Docker", level: 4 },
      { name: "AWS", level: 4 },
      { name: "CI/CD", level: 3 },
      { name: "Jest", level: 4 },
      { name: "Figma", level: 3 },
      { name: "Postman", level: 5 },
      { name: "Agile Methodologies", level: 4 }
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">
          My Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here's a comprehensive overview of my technical skills and proficiency
          levels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level === 1 && "Basic"}
                        {skill.level === 2 && "Intermediate"}
                        {skill.level === 3 && "Proficient"}
                        {skill.level === 4 && "Advanced"}
                        {skill.level === 5 && "Expert"}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
                    </div>
                  </div>
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
