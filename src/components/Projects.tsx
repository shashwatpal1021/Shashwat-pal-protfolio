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
    description: `A full-stack rental application that simplifies property listings and management for landlords and tenants, featuring secure authentication and a streamlined user experience.`,
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
      "A robust issue tracking tool built to help development teams manage, track, and resolve bugs and tasks efficiently within a collaborative project environment.",
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
  {
    id: 3,
    title: "GenAI Content Platform",
    description:
      "A multi-tenant SaaS platform leveraging generative AI to produce high-quality marketing content, including articles, social media posts, and video scripts.",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=1170&q=80",
    tags: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Stripe",
      "Prisma",
      "LLM APIs",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "RAG-Based Financial Advisor",
    description:
      "An AI-powered chatbot using a Retrieval-Augmented Generation (RAG) pipeline to provide financial advice by querying a vector database of market data.",
    image: "https://images.unsplash.com/photo-1554224155-169544351720?auto=format&fit=crop&w=1170&q=80",
    tags: [
      "Python",
      "LangChain",
      "Pinecone",
      "React",
      "Docker",
      "AWS",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "E-commerce Recommendation Engine",
    description:
      "A scalable recommendation engine that provides personalized product suggestions based on user behavior and collaborative filtering techniques.",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1172&q=80",
    tags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Real-Time Data Streaming Pipeline",
    description:
      "A high-throughput data pipeline that processes and analyzes streaming data in real-time, feeding insights into a live monitoring dashboard.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a63045462?auto=format&fit=crop&w=1170&q=80",
    tags: [
      "Kafka",
      "Spark Streaming",
      "Python",
      "Cassandra",
      "Grafana",
      "AWS",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My Projects
          </h2>
          <div className="mt-2 h-1 w-20 bg-indigo-500 mx-auto rounded" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mt-4" data-aos="fade-up" data-aos-delay="200">
          Here are some of my recent projects. Each one was carefully crafted to
          solve specific problems and showcase different skills.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              data-aos="fade-up"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex justify-start gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 font-semibold hover:underline"
                  >
                    <Github size={18} className="mr-2" />
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
