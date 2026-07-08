import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-400 py-8 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} Shashwat Pal. All rights reserved.
            </p>
            <p className="text-sm mt-1">
              Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/shashwatpal1021" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shashwatpal1021/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:i.shashwatpal@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
