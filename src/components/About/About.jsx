// src/components/About/AdvancedAbout.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiAward, FiUsers, FiClock, FiCode, FiHeart } from "react-icons/fi";

const AdvancedAbout = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [currentText, setCurrentText] = useState(0);
  
  const texts = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [texts.length]);

  const stats = [
    { icon: <FiAward />, value: '8+', label: 'Projects Completed' },
    { icon: <FiUsers />, value: '9+', label: 'Happy Clients' },
    { icon: <FiClock />, value: '1+', label: 'Years Experience' },
    { icon: <FiCode />, value: '50k+', label: 'Lines of Code' }
  ];

  const tabs = {
    personal: {
      title: "Personal Journey",
      content: [
        "I'm a passionate full-stack developer with over 1 years of experience creating digital solutions that make a difference. My journey began in college where I discovered my love for turning complex problems into elegant, user-friendly applications.",
        "What drives me is the opportunity to create technology that improves people's lives. I believe in writing clean, maintainable code and designing intuitive user experiences that delight users.",
        "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
      ]
    },
    professional: {
      title: "Professional Approach",
      content: [
        "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have extensive experience with modern development practices including Agile methodology, CI/CD pipelines, and cloud deployment.",
        "My development philosophy centers around creating scalable, maintainable solutions while ensuring optimal performance and security. I'm proficient in both frontend and backend technologies, allowing me to build complete, end-to-end solutions.",
        "I stay current with industry trends and continuously update my skills to incorporate the latest technologies and best practices into my work."
      ]
    },
    values: {
      title: "Core Values",
      content: [
        "🚀 Innovation: Constantly exploring new technologies and approaches to solve problems creatively.",
        "💡 Quality: Committed to writing clean, efficient code and delivering exceptional user experiences.",
        "🤝 Collaboration: Believing that the best results come from teamwork and open communication.",
        "📈 Growth: Always learning and adapting to stay at the forefront of technology trends."
      ]
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Greeting */}
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Dhiraj Yadav
              </span>
            </motion.h3>

            {/* Animated Title */}
            <motion.div 
              className="text-3xl md:text-4xl font-bold text-white mb-6 h-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="block"
                >
                  {texts[currentText]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-6">
              {Object.keys(tabs).map((tabKey) => (
                <motion.button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tabKey
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                      : "bg-slate-800/50 text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tabs[tabKey].title}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-6"
              >
                {tabs[activeTab].content.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-gray-300 leading-relaxed mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-cyan-400 text-2xl mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="text-lg" />
                <span>Download Resume</span>
              </motion.button>
              
              <motion.button
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-slate-800/50 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-700/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FiHeart className="text-lg" />
                <span>Let's Connect</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Avatar */}
            <div className="relative mx-auto lg:mx-0 max-w-md">
              <motion.div
                className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-6xl font-bold">
                      DY
                    </div>
                    <h3 className="text-2xl font-bold text-white">Dhiraj Yadav</h3>
                    <p className="text-gray-400">Full Stack Developer</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FiCode className="text-white text-2xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <FiAward className="text-white text-xl" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              >
                <FiUsers className="text-white text-lg" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAbout;