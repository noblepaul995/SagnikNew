import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Zap, 
  GitBranch,
  Database,
  Rocket,
  Code2Icon,
  CodeIcon
} from 'lucide-react';

const SkillsCards = () => {
  const skills = [
    { 
      icon: Code, 
      name: 'Full Stack Development', 
      level: 95,
      description: 'Crafting end-to-end web solutions with modern technologies',
      color: 'bg-blue-500'
    },
    { 
      icon: Brain, 
      name: 'Problem Solving', 
      level: 90,
      description: 'Innovative approach to complex algorithmic challenges',
      color: 'bg-green-500'
    },
    { 
      icon: Zap, 
      name: 'Performance Optimization', 
      level: 88,
      description: 'Maximizing application efficiency and user experience',
      color: 'bg-purple-500'
    },
    { 
      icon: GitBranch, 
      name: 'Version Control', 
      level: 85,
      description: 'Proficient in Git workflows and collaborative development',
      color: 'bg-orange-500'
    },
    { 
      icon: Database, 
      name: 'Database Management', 
      level: 80,
      description: 'Designing and optimizing complex database architectures',
      color: 'bg-teal-500'
    },
    { 
      icon: Rocket, 
      name: 'Deployment & DevOps', 
      level: 75,
      description: 'Streamlining continuous integration and delivery pipelines',
      color: 'bg-red-500'
    },
    { 
      icon: Code2Icon, 
      name: 'Python', 
      level: 75,
      description: 'Streamlining continuous integration and delivery pipelines',
      color: 'bg-red-500'
    },
    { 
      icon: CodeIcon, 
      name: 'JavaScript', 
      level: 75,
      description: 'Streamlining continuous integration and delivery pipelines',
      color: 'bg-red-500'
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

  const cardVariants = {
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

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover="hover"
          className="bg-white/10 rounded-2xl p-6 border border-white/10 overflow-hidden relative"
        >
          <div className="flex items-center mb-4">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="mr-4"
            >
              <skill.icon className={`w-12 h-12 ${skill.color} bg-opacity-20 p-2 rounded-full`} />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
            </div>
          </div>
          
          <p className="text-white/70 mb-4 text-sm">{skill.description}</p>
          
          <div className="flex items-center">
            <div className="flex-grow mr-4">
              <div className="flex justify-between mb-2">
                <span className="text-white/80 text-sm">Proficiency</span>
                <span className="text-white/70 text-sm">{skill.level}%</span>
              </div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 50
                }}
                className={`${skill.color} h-2 rounded-full opacity-70`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsCards;