import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerNavs = [
    {
      title: "Explore",
      links: ["Works", "About", "Services", "Blog"]
    },
    {
      title: "Connect",
      links: ["Contact", "Collaborate", "Hire Me", "Consultation"]
    },
    {
      title: "Resources",
      links: ["Portfolio", "Case Studies", "Insights", "Toolkit"]
    }
  ];

  const socialIcons = [
    {
      name: "GitHub",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      link: "#"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      link: "#"
    },
    {
      name: "Twitter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
      link: "#"
    }
  ];

  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl font-black bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(45deg, #6E41C0, #FF4081, #00B4DB)',
                WebkitBackgroundClip: 'text'
              }}
            >
              Digital
              <br />
              Frontier
            </h2>
            <p className="text-gray-600 mt-4 mb-6">
              Crafting digital experiences that push the boundaries of innovation.
            </p>
            
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Navigation Columns */}
        {footerNavs.map((nav, navIndex) => (
          <div key={nav.title} className="md:col-span-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navIndex * 0.2, duration: 0.6 }}
              className="font-bold text-lg mb-6 text-gray-900"
            >
              {nav.title}
            </motion.h3>
            <ul className="space-y-4">
              {nav.links.map((link, linkIndex) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: (navIndex * nav.links.length + linkIndex) * 0.1,
                    duration: 0.5 
                  }}
                >
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-black transition-colors group flex items-center"
                  >
                    {link}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div className="md:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="font-bold text-lg mb-6 text-gray-900">
              Stay Updated
            </h3>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to my digital newsletter for weekly insights.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-4 py-2 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6E41C0]/50"
                />
                <button 
                  className="bg-gradient-to-r from-[#6E41C0] to-[#FF4081] text-white px-4 py-2 rounded-r-xl hover:opacity-90 transition-opacity"
                >
                  Go
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-100 mt-12 pt-8 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Digital Frontier. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;