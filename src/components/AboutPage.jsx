import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import NewImg from '../assets/newimg.png'

const AboutMe = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-r from-[#111827] to-[#111827] text-white flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto p-10 bg-gray-800 rounded-lg shadow-2xl flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-6 text-green-400 animate-pulse">Building Exceptional Digital Products</h1>
          <p className="mb-8 text-gray-300 leading-relaxed">
            Experienced in creating top-notch digital solutions using the MERN Stack and Next.js. Passionate about delivering high-quality products with professional design and seamless user experience.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="text-green-400 text-xl font-bold mr-2">&#10003;</span>
              <span>Branding & Design</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 text-xl font-bold mr-2">&#10003;</span>
              <span>Web Development</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 text-xl font-bold mr-2">&#10003;</span>
              <span>UI/UX Design</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 text-xl font-bold mr-2">&#10003;</span>
              <span>Product Design</span>
            </li>
          </ul>
          <div className="flex space-x-6">
            <a href="mailto:abasitak12@gmail.com" className="flex items-center bg-green-400 text-gray-900 px-4 py-3 rounded-md shadow-md hover:bg-green-500 transition duration-300">
              <FaEnvelope className="mr-2" />
              <span>abasitak12@gmail.com</span>
            </a>
            <a href="tel:+88012345688" className="flex items-center bg-green-400 text-gray-900 px-4 py-3 rounded-md shadow-md hover:bg-green-500 transition duration-300">
              <FaPhone className="mr-2" />
              <span>+92 312 9007988</span>
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={NewImg}
            alt="Mr. Abdul Basit Khan"
            className="w-[420px] h-[420px] rounded-sm shadow-xl mb-6 hover:scale-105 transition-transform duration-300"
            initial = {{x: 10, y: -10, capacity: 0}}
            animate = {{x: 0, y: 0, capacity: 1}}
            transition = {{duration: 1}}
          />
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-green-400">Full Stack Developer</p>
            <p className="text-2xl font-bold">Mr. Abdul Basit Khan</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
