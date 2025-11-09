// src/components/Skills/VisualSkills.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SkillsInfo } from "../../constants";
import { 
  FiCode, 
  FiDatabase, 
  FiTool, 
  FiCloud, 
  FiCpu, 
  FiLayers,
  FiTrendingUp,
  FiAward,
  FiStar,
  FiZap
} from "react-icons/fi";

const VisualSkills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      setProgress(100);
    }
  }, [isInView]);

  const categoryIcons = {
    "Frontend": <FiCode className="text-2xl" />,
    "Backend": <FiDatabase className="text-2xl" />,
    "Tools & Technologies": <FiTool className="text-2xl" />,
    "Cloud & DevOps": <FiCloud className="text-2xl" />,
    "Programming Languages": <FiCpu className="text-2xl" />,
    "Other Skills": <FiLayers className="text-2xl" />
  };

  // Generate skill levels for visualization
  const getSkillLevel = (skillName) => {
    const levels = {
      // Frontend
      "React": 95, "JavaScript": 90, "TypeScript": 85, "HTML": 98, "CSS": 92,
      "Tailwind CSS": 88, "Next.js": 85, "Vue.js": 75, "Angular": 70,
      // Backend
      "Node.js": 90, "Express.js": 88, "Python": 85, "Java": 80, "PHP": 75,
      "MongoDB": 87, "PostgreSQL": 83, "MySQL": 85, "Redis": 78,
      // Tools
      "Git": 92, "Docker": 85, "AWS": 82, "Firebase": 80, "Figma": 78,
      // Add more skills as needed
    };
    return levels[skillName] || Math.floor(Math.random() * 30) + 70;
  };

  const RadarChart = ({ skills }) => {
    const size = 200;
    const center = size / 2;
    const radius = 80;
    const angles = skills.map((_, i) => (i * 2 * Math.PI) / skills.length);

    const points = skills.map((skill, i) => {
      const level = getSkillLevel(skill.name);
      const angle = angles[i];
      const r = (level / 100) * radius;
      return {
        x: center + r * Math.cos(angle - Math.PI / 2),
        y: center + r * Math.sin(angle - Math.PI / 2),
        level
      };
    });

    const pathData = points.map((point, i) => 
      `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    ).join(' ') + ' Z';

    return (
      <div className="relative">
        <svg width={size} height={size} className="mx-auto">
          {/* Grid circles */}
          {[0.25, 0.5, 0.75, 1].map((scale, i) => (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={radius * scale}
              fill="none"
              stroke="rgba(100, 116, 139, 0.3)"
              strokeWidth="1"
            />
          ))}
          
          {/* Axis lines */}
          {angles.map((angle, i) => (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + radius * Math.cos(angle - Math.PI / 2)}
              y2={center + radius * Math.sin(angle - Math.PI / 2)}
              stroke="rgba(100, 116, 139, 0.3)"
              strokeWidth="1"
            />
          ))}
          
          {/* Skill points and labels */}
          {points.map((point, i) => (
            <g key={i}>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#06b6d4"
                className="animate-pulse"
              />
              <text
                x={point.x}
                y={point.y - 10}
                textAnchor="middle"
                fill="#e2e8f0"
                fontSize="10"
                fontWeight="bold"
              >
                {point.level}%
              </text>
            </g>
          ))}
          
          {/* Skill area */}
          <motion.path
            d={pathData}
            fill="url(#skillGradient)"
            fillOpacity="0.3"
            stroke="url(#skillGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Skill labels around radar */}
        {skills.map((skill, i) => {
          const angle = angles[i];
          const labelRadius = radius + 25;
          const x = center + labelRadius * Math.cos(angle - Math.PI / 2);
          const y = center + labelRadius * Math.sin(angle - Math.PI / 2);
          
          return (
            <motion.div
              key={skill.name}
              className="absolute text-xs text-gray-300 font-medium"
              style={{
                left: x - 20,
                top: y - 10,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.5 }}
            >
              {skill.name}
            </motion.div>
          );
        })}
      </div>
    );
  };

  const BarChart = ({ skills }) => {
    return (
      <div className="space-y-3">
        {skills.slice(0, 8).map((skill, index) => {
          const level = getSkillLevel(skill.name);
          return (
            <motion.div
              key={skill.name}
              className="flex items-center space-x-3 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
              />
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">{level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  const CircularProgress = ({ skills }) => {
    return (
      <div className="grid grid-cols-2 gap-4">
        {skills.slice(0, 6).map((skill, index) => {
          const level = getSkillLevel(skill.name);
          const radius = 40;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (level / 100) * circumference;

          return (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative">
                <svg width="100" height="100" className="transform -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="rgba(100, 116, 139, 0.3)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="url(#circularGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="circularGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain mb-1"
                  />
                  <div className="text-lg font-bold text-cyan-400">{level}%</div>
                </div>
              </div>
              <span className="text-sm text-gray-300 mt-2 font-medium">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    );
  };

  const HeatMap = ({ skills }) => {
    const skillLevels = skills.reduce((acc, skill) => {
      const level = getSkillLevel(skill.name);
      const category = Math.floor(level / 20);
      if (!acc[category]) acc[category] = [];
      acc[category].push(skill);
      return acc;
    }, {});

    return (
      <div className="space-y-4">
        {[4, 3, 2, 1, 0].map((levelIndex) => (
          <div key={levelIndex} className="flex items-center">
            <div className="w-20 text-sm text-gray-400 font-medium">
              {levelIndex * 20 + 1}-{(levelIndex + 1) * 20}%
            </div>
            <div className="flex-1 flex flex-wrap gap-2">
              {skillLevels[levelIndex]?.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    levelIndex === 4 ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg" :
                    levelIndex === 3 ? "bg-purple-500/80 text-white" :
                    levelIndex === 2 ? "bg-purple-400/60 text-white" :
                    levelIndex === 1 ? "bg-purple-300/40 text-gray-300" :
                    "bg-slate-700/50 text-gray-400"
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 + levelIndex * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const VisualizationSelector = ({ skills }) => {
    const [vizType, setVizType] = useState('radar');

    const visualizations = {
      radar: <RadarChart skills={skills.slice(0, 6)} />,
      bars: <BarChart skills={skills} />,
      circular: <CircularProgress skills={skills} />,
      heatmap: <HeatMap skills={skills} />
    };

    return (
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-white font-semibold">Skill Visualization</h4>
          <div className="flex space-x-2">
            {Object.keys(visualizations).map((type) => (
              <motion.button
                key={type}
                onClick={() => setVizType(type)}
                className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all ${
                  vizType === type
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-700 text-gray-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type}
              </motion.button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={vizType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[300px] flex items-center justify-center"
          >
            {visualizations[vizType]}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background */}
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
            Technical Mastery
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
            Interactive visualization of my technical skills and proficiency levels
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {SkillsInfo.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border backdrop-blur-sm ${
                activeCategory === index
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-transparent shadow-lg shadow-purple-500/25"
                  : "bg-slate-800/50 text-gray-300 border-slate-700 hover:bg-slate-700/50 hover:text-white"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {categoryIcons[category.title] || <FiTool className="text-2xl" />}
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <VisualizationSelector skills={SkillsInfo[activeCategory]?.skills || []} />
          </motion.div>

          {/* Skill Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                {categoryIcons[SkillsInfo[activeCategory]?.title]}
                <span className="ml-3">{SkillsInfo[activeCategory]?.title}</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SkillsInfo[activeCategory]?.skills.map((skill, index) => {
                  const level = getSkillLevel(skill.name);
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="relative mb-3">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        {hoveredSkill === skill.name && (
                          <motion.div
                            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          />
                        )}
                      </div>
                      <span className="text-gray-300 text-sm font-medium text-center mb-2">
                        {skill.name}
                      </span>
                      <div className="w-full bg-slate-600 rounded-full h-1">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="text-cyan-400 text-xs font-bold mt-1">
                        {level}%
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Stats Card */}
            <motion.div
              className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {SkillsInfo[activeCategory]?.skills.length || 0}
                  </div>
                  <div className="text-gray-300 text-sm">Skills</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {Math.max(...SkillsInfo[activeCategory]?.skills.map(s => getSkillLevel(s.name)) || 0)}%
                  </div>
                  <div className="text-gray-300 text-sm">Top Skill</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-400 mb-1">
                    {Math.round(SkillsInfo[activeCategory]?.skills.reduce((acc, skill) => acc + getSkillLevel(skill.name), 0) / (SkillsInfo[activeCategory]?.skills.length || 1))}%
                  </div>
                  <div className="text-gray-300 text-sm">Average</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Overall Progress */}
        <motion.div
          className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-semibold flex items-center">
              <FiTrendingUp className="mr-2 text-cyan-400" />
              Overall Technical Proficiency
            </h4>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualSkills;