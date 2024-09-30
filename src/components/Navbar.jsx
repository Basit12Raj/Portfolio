import React, { useState, useEffect } from "react";
// import { FiAlignCenter } from "react-icons/fi";
import { FaStarOfLife } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';



function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav  className={`fixed top-0 left-0 w-full z-50 transition-all ${
      scrolled ? "bg-gray-800" : "bg-[#111827]"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <FaStarOfLife className="w-auto h-8 mr-2 text-[#c9f31d]" />
          <span className="text-white font-bold text-3xl">ABK7</span>
        </div>
        <ul className="hidden md:flex items-center space-x-4 ">
         
          <li>
            <Link
              to="about" smooth={true} duration={500}
              className="text-gray-300 hover:text-[#c9f31d] px-3 py-2 flex items-center justify-center cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="skills" smooth={true} duration={500}
              className="text-gray-300 hover:text-[#c9f31d] px-3 py-2 flex items-center justify-center cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects" smooth={true} duration={500}
              className="text-gray-300 hover:text-[#c9f31d] px-3 py-2 flex items-center justify-center cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              href="/blog"
              className="text-gray-300 hover:text-[#c9f31d] px-3 py-2 flex items-center justify-center"
            >
              Resume
            </a>
          </li>
          
          <li>
            <Link
              to="contact" smooth={true} duration={500}
              className="text-gray-300 mr-52 hover:text-[#c9f31d] px-3 py-2 flex items-center justify-center cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link to="contact" smooth={true} duration={500} className="bg-gray-800 text-white font-bold py-2 px-6 border border-1 border-yellow-500 cursor-pointer ">LET'S TALK</Link>
      </div>
    </nav>
  );
}

export default Navbar;
