import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const socialMediaLinks = [
  { href: 'https://linkedin.com', icon: faLinkedin },
  { href: 'https://github.com', icon: faGithub },
  { href: 'https://twitter.com', icon: faTwitter }
];

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    transition: { yoyo: Infinity, duration: 0.3 }
  }
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <motion.div 
        className="container mx-auto flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={footerVariants}
        transition={{ duration: 1, when: "beforeChildren", staggerChildren: 0.3 }}
      >
        <motion.div className="text-center mb-6">
          <h1 className="text-4xl font-bold">Abdul Basit Khan</h1>
          <p className="text-lg mt-2 text-[#00d7c0]">Full-Stack Developer</p>
        </motion.div>
        
        <motion.div className="flex space-x-8 mb-6">
          {socialMediaLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              variants={iconVariants}
              whileHover="hover"
            >
              <FontAwesomeIcon icon={link.icon} size="2x" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="text-center">
          <p className="text-sm mb-1">&copy; {new Date().getFullYear()} ABK7. All Rights Reserved.</p>
          {/* <p className="text-sm">Made with ❤️</p> */}
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
