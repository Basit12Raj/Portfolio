import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div id="contact" className="min-h-screen bg-[#111827] text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <motion.h2 
        className="text-3xl font-bold mb-4 text-accent animate-pulse"
        initial={{ x: -20, y: 10, capacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        >Have You Any Project? Please Drop a Message</motion.h2>
        <p className="mb-8 text-gray-300">Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible.</p>
        <div className="md:flex md:space-x-6">
          <div className="md:w-1/2 space-y-4 ml-8">
            <div className="flex items-center mt-10">
              <FaMapMarkerAlt className="text-accent mr-2" />
              <span>Bagh AJK , Pakistan!</span>
            </div>
            <div className="flex items-center mt-2">
              <FaPhone className="text-accent mr-2" />
              <span>(+92) 318 4989614</span>
            </div>
            <div className="flex items-center mt-2">
              <FaPhone className="text-accent mr-2" />
              <span>(+92) 312 9007988</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-accent mr-2" />
              <span>abasitak12@gmail.com</span>
            </div>
            <div className="flex items-center ">
              <FaEnvelope className="text-accent mr-2" />
              <span>abasitak12@gmail.com</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-accent transition duration-300"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition duration-300"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition duration-300"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition duration-300"><FaYoutube /></a>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <form className="space-y-4">
              <div className="relative group">
                <input type="text" id="name" className="w-full mt-1 p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-accent peer" placeholder=" " />
                <label htmlFor="name" className="absolute left-3 top-3 text-gray-400 duration-300 transform -translate-y-6 scale-75 origin-0 peer-focus:left-3 peer-focus:top-3 peer-focus:text-accent peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Name</label>
              </div>
              <div className="relative group">
                <input type="email" id="email" className="w-full mt-1 p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-accent peer" placeholder=" " />
                <label htmlFor="email" className="absolute left-3 top-3 text-gray-400 duration-300 transform -translate-y-6 scale-75 origin-0 peer-focus:left-3 peer-focus:top-3 peer-focus:text-accent peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Email</label>
              </div>
              <div className="relative group">
                <input type="text" id="phone" className="w-full mt-1 p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-accent peer" placeholder=" " />
                <label htmlFor="phone" className="absolute left-3 top-3 text-gray-400 duration-300 transform -translate-y-6 scale-75 origin-0 peer-focus:left-3 peer-focus:top-3 peer-focus:text-accent peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Phone (Optional)</label>
              </div>
              <div className="relative group">
                <textarea id="message" rows="2" className="w-full mt-1 p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-accent peer" placeholder=" "></textarea>
                <label htmlFor="message" className="absolute left-3 top-3 text-gray-400 duration-300 transform -translate-y-6 scale-75 origin-0 peer-focus:left-3 peer-focus:top-3 peer-focus:text-accent peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Write message...</label>
              </div>
              <div>
                <button type="submit" className="w-full p-3 bg-accent hover:bg-secondary rounded text-white font-bold transition duration-300">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
