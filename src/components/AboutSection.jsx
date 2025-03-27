import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Briefcase, 
  Award, 
  Globe, 
  Zap, 
  Target, 
  BookOpen, 
  Brain,
  Rocket,
  GitBranch,
  Database
} from 'lucide-react';
import SkillsCards from './SkillsCard';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('story');
  const containerRef = useRef(null);

  const experiences = [

    {
      company: 'No Experience Yet',
      role: 'Full Stack Devloper',
      period: '2023 - 2021',
      description: 'Developed machine learning-powered web applications, focusing on performance optimization and cutting-edge frontend technologies.',
      technologies: ['Python', 'React', 'NextJs']
    }
  ];

 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };
  const achievements = [
    {
      icon: Award,
      title: 'Machine Learning Certification',
      issuer: 'Online Learning Platform',
      year: 2023
    },
    {
      icon: Rocket,
      title: 'Hackathon Winner',
      issuer: 'Regional Tech Conference',
      year: 2022
    }
  ];


  const TabContent = {
    story: (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 text-white/90"
      >
        <motion.p 
          variants={itemVariants}
          className="leading-relaxed"
        >
          Born with an insatiable curiosity for technology, I've transformed from a curious teenager tinkering with computers to a passionate digital architect who breathes code and dreams in algorithms.
        </motion.p>
        <motion.p 
          variants={itemVariants}
          className="leading-relaxed"
        >
          My journey is defined by an relentless pursuit of innovation – turning complex challenges into elegant, scalable solutions that push the boundaries of what's possible in the digital realm. <br />
          Full Stack Dev | React ⚛️ Node.js 🖥️ MongoDB 📊 | Python 🐍 & Tkinter UI | JWT & bcrypt Security | Building sleek, responsive apps that blend style with functionality| CSE JGEC 2028
        </motion.p>
        <motion.div 
          variants={itemVariants}
          className="flex space-x-4 mt-6"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 px-6 py-3 rounded-full cursor-pointer"
          >
            Download CV
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/10 px-6 py-3 rounded-full cursor-pointer"
          >
            Contact Me
          </motion.div>
        </motion.div>
      </motion.div>
    ),
    experience: (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className="bg-white/10 p-6 rounded-xl border border-white/10 relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">{exp.company}</h3>
              <span className="text-sm text-white/70">{exp.period}</span>
            </div>
            <p className="text-white/80 mb-4">{exp.role}</p>
            <p className="text-white/70 mb-4">{exp.description}</p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2 }
              }}
              className="absolute bottom-0 left-0 right-0 bg-white/5 p-3 flex space-x-2"
            >
              {exp.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    ),
    skills: (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
      <SkillsCards />
       
      </motion.div>
    ),
    achievements: (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {achievements.map((achievement, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className="bg-white/10 p-6 rounded-xl border border-white/10 flex items-center space-x-6"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <achievement.icon className="w-12 h-12 text-blue-400" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
              <p className="text-white/70">{achievement.issuer} - {achievement.year}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    )
  };

  const TabButton = ({ children, value }) => (
    <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`
      px-6 py-3 rounded-full transition-all duration-300
      flex items-center space-x-2
      ${activeTab === value 
        ? 'bg-blue-600 text-white shadow-lg' 
        : 'bg-white/10 text-white/70 hover:bg-white/20'}
    `}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </motion.button>
  );

  return (
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#0a0b1a] via-[#111827] to-[#030712] text-white py-20 px-8 md:px-20"
      id='about'
    >
        
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4 p-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            About My Digital Odyssey
          </h2>
          <p className="text-xl text-white/70">
            Transforming ideas into extraordinary digital experiences
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center mb-12 space-x-6"
        >
          <TabButton value="story">
            <BookOpen className="w-5 h-5" />
            <span>My Story</span>
          </TabButton>
          <TabButton value="experience">
            <Briefcase className="w-5 h-5" />
            <span>Experience</span>
          </TabButton>
          <TabButton value="skills">
            <Target className="w-5 h-5" />
            <span>Skills</span>
          </TabButton>
          <TabButton value="achievements">
            <Award className="w-5 h-5" />
            <span>Achievements</span>
          </TabButton>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 p-10 rounded-2xl border border-white/10"
          >
            {TabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AboutSection;