import React from 'react';
import { motion } from 'framer-motion';
import youtube from '../assets/youtube.png';
import costcutters from '../assets/costcutters.png'
import whatsapp from '../assets/whatsapp.png'



// Sample data for projects
const projects = [
  {
    title: 'CostCutters',
    image: costcutters,
    link: 'https://example.com/project1',
  },
  {
    title: 'Youtube + X',
    image: youtube,
    link: 'https://example.com/project2',
  },
  {
    title: 'WhatsApp Clone',
    image: whatsapp,
    link: 'https://example.com/project3',
  },
];

const ProjectShowcase = () => {
  return (
    <section id='projects' className="py-16 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif proportional-nums text-yellow-400 mb-16 mt-10 animate-pulse">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <h3 className="text-[#22c55e] text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors duration-300"
                  >
                    View Project
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;