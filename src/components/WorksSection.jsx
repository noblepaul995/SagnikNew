import React, { useState, useMemo } from 'react';
import { useEffect, useRef } from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { motion } from 'framer-motion';



const generateRandomColor = () => {
  
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 55%)`;
};
 


const AnimatedBackground = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMinYMin slice" className="fixed inset-0 z-0 opacity-50 pointer-events-none">
      <defs>
        {/* Gradient Definitions */}
        <linearGradient id="dynamicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6A11CB" stopOpacity="0.7">
            <animate attributeName="stop-color" values="#6A11CB;#2575FC;#FF42A6;#6A11CB" dur="20s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#2575FC" stopOpacity="0.5">
            <animate attributeName="stop-color" values="#2575FC;#FF42A6;#6A11CB;#2575FC" dur="20s" repeatCount="indefinite" />
          </stop>
        </linearGradient>

        
        <filter id="softBlur">
          <feGaussianBlur stdDeviation="10" />
        </filter>

       
        <mask id="particleMask">
          <rect width="100%" height="100%" fill="white" />
          {/* Animated floating particles */}
          <g opacity="0.6">
            <circle cx="30%" cy="20%" r="50">
              <animate attributeName="r" values="20;50;20" dur="12s" repeatCount="indefinite" />
              <animate attributeName="cx" values="30%;40%;20%" dur="15s" repeatCount="indefinite" />
              <animate attributeName="cy" values="20%;30%;10%" dur="10s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="80%" r="40">
              <animate attributeName="r" values="40;80;40" dur="15s" repeatCount="indefinite" />
              <animate attributeName="cx" values="70%;60%;80%" dur="18s" repeatCount="indefinite" />
              <animate attributeName="cy" values="80%;70%;90%" dur="12s" repeatCount="indefinite" />
            </circle>
          </g>
        </mask>

        
        <path id="wavePath" d="M0 540 Q960 360 1920 540" fill="none" />
      </defs>

      
      <rect width="100%" height="100%" fill="url(#dynamicGradient)" mask="url(#particleMask)" />

      
      <g filter="url(#softBlur)">
        <path fill="rgba(255,255,255,0.05)">
          <animate 
            attributeName="d" 
            values="
              M300 400 C500 300, 700 500, 900 400;
              M300 500 C500 400, 700 600, 900 500;
              M300 300 C500 200, 700 400, 900 300
            "
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
        <path fill="rgba(255,255,255,0.03)">
          <animate 
            attributeName="d" 
            values="
              M1200 600 C1400 500, 1600 700, 1800 600;
              M1200 700 C1400 600, 1600 800, 1800 700;
              M1200 500 C1400 400, 1600 600, 1800 500
            "
            dur="25s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      
      <use href="#wavePath" stroke="rgba(255,255,255,0.1)" strokeWidth="3">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-960 0"
          dur="30s"
          repeatCount="indefinite"
        />
      </use>
      <use href="#wavePath" stroke="rgba(255,255,255,0.05)" strokeWidth="2">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="960 50"
          to="0 0"
          dur="35s"
          repeatCount="indefinite"
        />
      </use>
    </svg>
  );
};

const WorksSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  
  const projects = useMemo(() => [
    {
      title: "Project 1",
      role: "Project 1",
      description: "description",
      tags: ["Portfolio", "Project Managament", "Study Center"],
      color: generateRandomColor(),
      complexity: 95
    },
    {
      title: "Project 2",
      role: "Project 2",
      description: "description",
      tags: ["Portfolio", "Project Managament", "Study Center"],
      color: generateRandomColor(),
      complexity: 95
    },
    {
      title: "Project 3",
      role: "Project 2",
      description: "description",
      tags: ["Portfolio", "Project Managament", "Study Center"],
      color: generateRandomColor(),
      complexity: 95
    },
    {
      title: "Project 4",
      role: "Project 4",
      description: "description",
      tags: ["Portfolio", "Project Managament", "Study Center"],
      color: generateRandomColor(),
      complexity: 88
    },
    {
      title: "Project 5",
      role: "Project 5",
      description: "description",
      tags: ["Portfolio", "Project Managament", "Study Center"],
      color: generateRandomColor(),
      complexity: 92
    },
    {
      title: "Project 6",
      role: "Project 6",
      description: "description",
      tags: ["Portfolio", "Project Managament", "Study Center"],
      color: generateRandomColor(),
      complexity: 92
    },
    {
      title: "Project 7",
      role: "Project 7",
      description: "description",
      tags: ["Portfolio", "Project Managament", "Study Center"],
      color: generateRandomColor(),
      complexity: 92
    },
    {
      title: "Project 8",
      role: "Project 8",
      description: "description",
      tags: ["Portfolio", "Project Managament", "Study Center"],
      color: generateRandomColor(),
      complexity: 92
    }
  ], []);

  return (
    <div 
    
    className="bg-white min-h-screen flex flex-col justify-center p-4 md:p-8 relative overflow-hidden" id='works'>
      
      <AnimatedBackground />

     
      <style jsx global>{`
        @keyframes wave {
          0% { transform: scaleX(0.9) translateY(0); }
          100% { transform: scaleX(1.1) translateY(20px); }
        }
        ${[0,1,2,3,4].map((i) => `
          @keyframes float${i} {
            0% { transform: translateY(0) scale(1); }
            100% { transform: translateY(-50px) scale(1.1); }
          }
          @keyframes morph${i} {
            0% { transform: scale(1) rotate(0deg); }
            100% { transform: scale(1.2) rotate(360deg); }
          }
        `).join('')}
      `}</style>
      <div className="text-center mb-16 relative z-10">
        <h1 
          className="text-6xl font-black tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(45deg, ${projects[0].color}, ${projects[1].color}, ${projects[2].color})`,
            WebkitBackgroundClip: 'text'
          }}
        >
          Digital Dreamscape
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Pushing the boundaries of digital imagination
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-16 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="relative group"
          >
            <motion.div
              className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden"
              whileHover={{ 
                scale: 1.03,
                boxShadow: `0 15px 30px ${project.color}20`
              }}
              onHoverStart={() => setActiveProject(index)}
              onHoverEnd={() => setActiveProject(null)}
            >
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 
                      className="text-3xl font-bold tracking-tight"
                      style={{ color: project.color }}
                    >
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">{project.role}</p>
                  </div>
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${project.color}20`,
                      color: project.color 
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {activeProject === index && (
              <div 
                className="absolute z-20 left-0 right-0 -bottom-2 transform translate-y-full bg-white border border-gray-100 rounded-2xl shadow-lg p-4 "
                style={{ 
                  borderColor: project.color,
                  borderWidth: '2px'
                }}
              >
                <p className="text-gray-700 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex space-x-2 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 rounded-full text-xs"
                      style={{ 
                        backgroundColor: `${project.color}20`, 
                        color: project.color 
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div 
                  className="text-sm text-right"
                  style={{ color: project.color }}
                >
                  Complexity: {project.complexity}%
                </div>
              </div>
            )}
          </div>
        ))}
         <button 
          className={`
            group flex items-center justify-center
            bg-gradient-to-r from-blue-400 to-teal-500 
            text-white px-12 py-6 rounded-full 
            hover:from-blue-500 hover:to-teal-600 
            transition-all duration-300 
            transform hover:scale-110 active:scale-95
            shadow-xl
            left-125 mt-32
            relative overflow-hidden
          `}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="absolute inset-0 bg-white/10 group-hover:opacity-20 transition-opacity"></div>
          Begin Your Journey
          <ArrowRightCircle 
            className="ml-4 transition-transform group-hover:rotate-45" 
          />
          
        </button>
      </div>
     
    </div>
  );
};

export default WorksSection;