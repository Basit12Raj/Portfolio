import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import NewImage from '../assets/newimg.png'

export default function () {
  return (
    <div className="grid bg-[#111827] min-h-screen text-white sm:grid-cols-2 py-24">
      {/* Left side content */}
      <div className="text-left sm:col-span-1 px-6 sm:px-12 py-10 mt-12 sm:mt-0">
        <h1 className="text-3xl mb-4 md:text-7xl font-bold text-white">
          HI, <span className="text-yellow-300">I'M ABK7!</span>
        </h1>
        <h2 className="text-4xl md:text-4xl font-medium text-white mt-4">
          CREATIVE{" "}
          <span className="text-[#90d9b8]">
            <ReactTyped
              strings={[
                "CODER",
                "FULL-STACK",
                "WEB-DEVELOPER",
                "DEVELOPER",
                "PRO-CODER"
              ]}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            />
          </span>
        </h2>
        <p className="text-gray-500 text-lg mt-6">
          I'm a driven full-stack web developer specializing in the MERN stack
          (MongoDB, Express.js, React.js, and Node.js). I leverage my
          problem-solving skills and understanding of user experience to build
          efficient, scalable, and user-friendly web applications from backend
          architecture to interactive front-end interfaces.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/cv.pdf"
            className="inline-flex items-center shadow-lg shadow-yellow-500/50 px-4 py-2 text-black bg-yellow-400 rounded-md hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Download CV
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm6 6V7a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0zm7-6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <div className="flex space-x-3">
            <div className="group relative p-3 bg-gray-800 rounded-lg shadow-lg transition duration-300 hover:bg-gray-700 hover:shadow-xl hover:scale-105">
              <FaFacebookF className="text-lg transition duration-300 transform group-hover:scale-125 group-hover:text-blue-400" />
            </div>
            <div className="group relative p-3 bg-gray-800 rounded-lg shadow-lg transition duration-300 hover:bg-gray-700 hover:shadow-xl hover:scale-105">
              <FaInstagram className="text-lg transition duration-300 transform group-hover:scale-125 group-hover:text-pink-400" />
            </div>
            <div className="group relative p-3 bg-gray-800 rounded-lg shadow-lg transition duration-300 hover:bg-gray-700 hover:shadow-xl hover:scale-105">
              <FaLinkedinIn className="text-lg transition duration-300 transform group-hover:scale-125 group-hover:text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side content */}
      <div className="relative flex flex-col md:flex-row items-center md:ml-24">
  <div className="relative flex justify-center items-center">
    <div className="absolute top-0 left-0 md:left-auto md:top-auto w-[200px] sm:w-[300px] md:w-[480px] h-[200px] sm:h-[300px] md:h-[480px] bg-yellow-500 rounded-full opacity-40"></div>
    <motion.img
      src={NewImage}
      alt="ABK"
      className="object-cover h-[200px] sm:h-[300px] md:h-[480px] w-[200px] sm:w-[300px] md:w-[480px] relative z-10 rounded-full"
      initial={{ x: 50, y: -50, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    />
  </div>
</div>


      
    </div>
  );
}
