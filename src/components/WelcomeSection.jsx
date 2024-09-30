import React from 'react';
import { AiOutlineSwapLeft } from "react-icons/ai";
import { MdWorkspacePremium } from "react-icons/md";

const WelcomeSection = () => {
  return (
    <div className="bg-[#111827] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-4">
        WELCOME TO MY WORLD
        </h1>
        <p className="text-lg mb-12">
          I'm a young tech enthusiast and entrepreneur who loves to take risks. I grew up in a tech family in New York City.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105  hover:shadow-purple-500">
            <div className="text-orange-500 mb-4">
              <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Creativity</h3>
            <p className="text-gray-400">
              Duis aute irure dolor in it esse cillum dolore eu fugiat nulla pari erunt mollit anim id est laborum.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-purple-500">
            <div className="text-orange-500 mb-4">
              <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9.414V14h2V8.586l3.707 3.707 1.414-1.414L10 5.758 4.879 10.879l1.414 1.414L9 8.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Dedication</h3>
            <p className="text-gray-400">
              Beaboris nisi ut aliquip ex ea commodo consen cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-purple-500">
            <div className="text-orange-500 mb-4">
              <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.293 12.293a1 1 0 011.414 0L10 16.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" />
              </svg>
            </div>
            {/* <MdWorkspacePremium className='ml-36 mb-2 text-red-700' /> */}
            <h3 className="text-2xl font-bold mb-2">Hard Work</h3>
            <p className="text-gray-400">
              Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui offi lit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
