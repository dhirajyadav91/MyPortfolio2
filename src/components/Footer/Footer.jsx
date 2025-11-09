// components/AdvancedFooter.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail,
  FiHeart 
} from "react-icons/fi";

const AdvancedFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "GitHub", href: "https://github.com/dhirajyadav91", icon: <FiGithub /> },
        { name: "LinkedIn", href: "https://linkedin.com/in/dhiraj-yadav91", icon: <FiLinkedin /> },
        { name: "Twitter", href: "#", icon: <FiTwitter /> },
        { name: "Email", href: "mailto:dhirajdhoni97@gmail.com", icon: <FiMail /> }
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Dhiraj Yadav</h3>
                <p className="text-cyan-400 text-sm">Full Stack Developer</p>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Crafting digital experiences with modern technologies and innovative solutions. 
              Let's build something amazing together.
            </p>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div 
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        {link.icon && (
                          <span className="text-lg group-hover:scale-110 transition-transform">
                            {link.icon}
                          </span>
                        )}
                        <span>{link.name}</span>
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        {link.icon && (
                          <span className="text-lg group-hover:scale-110 transition-transform">
                            {link.icon}
                          </span>
                        )}
                        <span>{link.name}</span>
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} Dhiraj Yadav. All rights reserved.</span>
            <motion.span
              className="flex items-center space-x-1 text-red-400"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiHeart className="text-sm" />
            </motion.span>
          </div>

          {/* Additional Links */}
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <motion.a
              href="#"
              className="hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default AdvancedFooter;