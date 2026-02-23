import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { projects } from "../../constants";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiCode,
  FiLayers,
  FiEye,
  FiFilter,
  FiChevronRight,
  FiChevronLeft
} from "react-icons/fi";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Extract unique categories from projects
  const categories = ["All", ...new Set(projects.flatMap(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;

      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject, currentImageIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateX: -15,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        style={{ opacity, scale }}
      >
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
            Featured Projects
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
            A collection of my recent work showcasing full-stack development,
            modern design patterns, and innovative solutions
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border backdrop-blur-sm ${filter === category
                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-transparent shadow-lg shadow-purple-500/25"
                : "bg-slate-800/50 text-gray-300 border-slate-700 hover:bg-slate-700/50 hover:text-white"
                }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFilter className="text-lg" />
              <span>{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div
                className="h-full flex flex-col bg-slate-800/40 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2"
                onClick={() => handleOpenModal(project)}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border shadow-lg ${project.status === "Completed"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Desktop Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-[2px] hidden lg:flex">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(project);
                      }}
                      className="p-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 hover:border-cyan-400 transition-colors"
                      title="View Details"
                    >
                      <FiEye className="text-xl" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                      className="p-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 hover:border-cyan-400 transition-colors"
                      title="View Code"
                    >
                      <FiGithub className="text-xl" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.webapp, '_blank');
                      }}
                      className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                      title="Live Demo"
                    >
                      <FiExternalLink className="text-xl" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title & Year */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-cyan-400 font-medium">{project.subtitle}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                      {project.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-md bg-slate-700/40 text-slate-300 border border-slate-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-slate-700/40 text-slate-400 border border-slate-600/30">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Mobile Mobile Actions (Always Visible on Mobile/Tablet) */}
                  <div className="flex gap-3 mt-auto lg:hidden">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-700/50 text-white text-sm font-medium border border-slate-600 hover:bg-slate-700 transition-colors"
                    >
                      <FiGithub /> Code
                    </a>
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium shadow-lg shadow-purple-900/20"
                    >
                      <FiExternalLink /> Live
                    </a>
                  </div>
                </div>

                {/* Animated Border Gradient */}
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400">No projects match the selected filter. Try another category!</p>
          </motion.div>
        )}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition-colors border border-slate-700/50"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX className="text-xl" />
              </motion.button>

              {/* Modal Content */}
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Gallery */}
                <div className="lg:w-1/2 relative">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 lg:h-full object-cover"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                  />

                  {/* Image Navigation */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <motion.button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition-colors border border-slate-700/50"
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiChevronLeft />
                      </motion.button>
                      <motion.button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition-colors border border-slate-700/50"
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiChevronRight />
                      </motion.button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                              ? "bg-cyan-400 w-4"
                              : "bg-white/50 hover:bg-white/80"
                              }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-8 overflow-y-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {selectedProject.title}
                        </h3>
                        <p className="text-cyan-400 font-semibold">
                          {selectedProject.subtitle}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${selectedProject.status === "Completed"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        }`}>
                        {selectedProject.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedProject.fullDescription || selectedProject.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <FiCode className="mr-2 text-cyan-400" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies?.map((tech, index) => (
                          <motion.span
                            key={index}
                            className="px-3 py-2 bg-slate-800 text-cyan-300 text-sm rounded-lg border border-cyan-500/30"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {tech}
                          </motion.span>
                        )) || selectedProject.tags.map((tag, index) => (
                          <motion.span
                            key={index}
                            className="px-3 py-2 bg-slate-800 text-cyan-300 text-sm rounded-lg border border-cyan-500/30"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    {selectedProject.features && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <FiLayers className="mr-2 text-purple-400" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {selectedProject.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-center text-gray-300 text-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <motion.div
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-gray-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-slate-700"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiGithub />
                        <span>View Code</span>
                      </motion.a>
                      <motion.a
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiExternalLink />
                        <span>Live Demo</span>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;