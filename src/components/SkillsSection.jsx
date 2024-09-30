import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Next.js', percentage: '50%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Express', percentage: '85%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', percentage: '80%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Tailwind CSS', percentage: '95%', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'React', percentage: '89%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', percentage: '90%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
];

const SkillsSection = () => {
  return (
    <div id='skills' className="bg-[#111827] text-white py-16">
      <div className="text-center mb-14 mt-24">
        <motion.h2 
          className="text-4xl font-bold text-purple-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
        </motion.p>
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        {skills.map((skill) => (
          <motion.div 
            key={skill.name} 
            className="flex flex-col items-center"
            whileHover={{ scale: 1}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative w-36 h-40 mb-4 bg-[#141c2d] rounded-3xl flex  items-center justify-center shadow-lg transition-all duration-300 hover:shadow-purple-400 hover:bg-[#22132d]">
              <img src={skill.icon} alt={`${skill.name} icon`} className="w-16 h-16 object-contain filter brightness-50 hover:brightness-150 transition-all duration-300" />
              <div className="absolute bottom-0 right-0  text-white text-sm font-bold px-2 py-1 rounded-full transform translate-x-1/2 translate-y-1/2">
                {skill.percentage}
              </div>
            </div>
            <div className="text-center mb-24 text-blue-900">
              <p className="mt-2 text-lg">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
