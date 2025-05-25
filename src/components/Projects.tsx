import { ExternalLink, Github } from "lucide-react";
import React from "react";
import project1Img from "../assests/project-1.png";
import issueTrackerImg from "../assests/issue-tracker-2.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rentify - Rentall App",
    description: `Rentify is a fully functional rentall app designed to simplify the rental process for both landlord and tenants.`,
    image: project1Img,
    tags: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "NexAuth",
    ],
    liveUrl: "https://rentify-app-ten.vercel.app/",
    githubUrl: "https://github.com/shashwatpal1021/rentify_app",
  },
  {
    id: 2,
    title: "Issue Tracker App",
    description:
      "An Issue Tracker App is a tool designed to help teams to manage and track issues, bugs, or task within a project.",
    image: issueTrackerImg,
    tags: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Postgresql",
      "Shadcn",
      "Tailwind CSS",
      "NexAuth",
    ],
    liveUrl: "https://issue-tracker-umber-delta.vercel.app/",
    githubUrl: "https://github.com/shashwatpal1021/issue-tracker",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was carefully crafted to
          solve specific problems and showcase different skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
