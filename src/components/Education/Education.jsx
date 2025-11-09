import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { education } from "../../constants";
import { 
  FiBook, 
  FiCalendar, 
  FiMapPin, 
  FiAward, 
  FiClock,
  FiChevronDown,
  FiExternalLink
} from "react-icons/fi";

const Education = () => {
  const [activeEducation, setActiveEducation] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pursuing": return "text-green-400";
      case "Completed": return "text-blue-400";
      default: return "text-gray-400";
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "Pursuing": return "bg-green-500/20 border-green-500/30";
      case "Completed": return "bg-blue-500/20 border-blue-500/30";
      default: return "bg-gray-500/20 border-gray-500/30";
    }
  };

  return (
    <section
      id="education"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Academic Journey
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            My educational path through institutions that shaped my technical expertise and problem-solving abilities
          </motion.p>
        </motion.div>

        {/* Timeline Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.button
              key={edu.id}
              variants={itemVariants}
              onClick={() => setActiveEducation(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border backdrop-blur-sm ${
                activeEducation === index
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-transparent shadow-lg shadow-purple-500/25"
                  : "bg-slate-800/50 text-gray-300 border-slate-700 hover:bg-slate-700/50 hover:text-white"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiBook className="text-xl" />
              <span>{edu.degreeType}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 h-full hidden lg:block"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {/* Education Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 lg:space-y-20"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900 z-20"
                  variants={dotVariants}
                />

                {/* Content Card */}
                <motion.div 
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
                    {/* Header Section */}
                    <div className="flex items-start space-x-4 mb-6">
                      <motion.div 
                        className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-white truncate">
                            {edu.school}
                          </h3>
                          <motion.span
                            className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBg(edu.status)} ${getStatusColor(edu.status)}`}
                            whileHover={{ scale: 1.1 }}
                          >
                            {edu.status}
                          </motion.span>
                        </div>
                        
                        <p className="text-cyan-400 font-semibold text-sm mb-1">
                          {edu.degree}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-2">
                          <div className="flex items-center space-x-1">
                            <FiMapPin className="text-purple-400" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FiCalendar className="text-cyan-400" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Grade & Date */}
                    <div className="flex items-center justify-between mb-4 p-3 bg-slate-700/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <FiAward className="text-yellow-400" />
                        <span className="text-white font-semibold">Grade:</span>
                        <span className="text-green-400 font-bold">{edu.grade}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <FiClock />
                        <span className="text-sm">{edu.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-300 leading-relaxed mb-4 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {edu.desc}
                    </motion.p>

                    {/* Expandable Courses Section */}
                    <motion.div className="border-t border-slate-700/50 pt-4">
                      <motion.button
                        onClick={() => setExpandedCard(expandedCard === edu.id ? null : edu.id)}
                        className="flex items-center justify-between w-full text-left"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center space-x-2 text-cyan-400 font-semibold">
                          <FiBook />
                          <span>Key Courses & Skills</span>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedCard === edu.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiChevronDown />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {expandedCard === edu.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 grid grid-cols-2 gap-2">
                              {edu.courses?.map((course, courseIndex) => (
                                <motion.div
                                  key={courseIndex}
                                  className="px-3 py-2 bg-slate-700/30 rounded-lg text-gray-300 text-sm border border-slate-600/30 hover:border-cyan-500/30 transition-colors"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: courseIndex * 0.1 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {course}
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Progress Bar for Current Education */}
                    {edu.status === "Pursuing" && (
                      <motion.div 
                        className="mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>70%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full relative"
                            initial={{ width: 0 }}
                            animate={{ width: "70%" }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-2/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {education.length}
            </div>
            <div className="text-gray-300">Degrees</div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {education.filter(edu => edu.status === "Completed").length}
            </div>
            <div className="text-gray-300">Completed</div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {education.filter(edu => edu.status === "Pursuing").length}
            </div>
            <div className="text-gray-300">In Progress</div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              70.9%
            </div>
            <div className="text-gray-300">Current GPA</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg mb-6">
            Interested in my academic background and how it complements my technical skills?
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Let's Discuss Opportunities</span>
            <FiExternalLink />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;