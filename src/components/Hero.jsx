import React, { useState, useEffect, useRef } from 'react';
import { Waves, Leaf, Mountain, Sun } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const SectionCard = ({ icon: Icon, title, description, color }) => (
    <div 
      className={`
        group relative cursor-pointer 
        w-48 h-48 flex flex-col items-center justify-center 
        rounded-3xl shadow-xl
        bg-gradient-to-br ${color}
        transition-all duration-500 
        hover:scale-105 
        transform 
        backdrop-blur-sm
        relative overflow-hidden
      `}
      onMouseEnter={() => setActiveSection(title)}
      onMouseLeave={() => setActiveSection(null)}
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
      <Icon className="w-20 h-20 mb-4 text-white/90 group-hover:scale-110 transition-transform" />
      <span className="text-lg font-semibold text-white/90 tracking-wide">
        {title}
      </span>
      {activeSection === title && (
        <div className="absolute bottom-0 left-0 right-0 bg-white/20 p-3 text-center backdrop-blur-sm">
          <p className="text-sm text-white">{description}</p>
        </div>
      )}
    </div>
  );

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-[#E6F3FF] via-[#F0F9FF] to-[#FFFFFF] text-gray-800 overflow-hidden"
    >
     
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 animate-wave-slow"
        >
          <path 
            fill="#89CFF0" 
            fillOpacity="0.1" 
            d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,234.7C672,224,768,224,864,229.3C960,235,1056,245,1152,250.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
          ></path>
        </svg>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 animate-wave-slow-reverse"
        >
          <path 
            fill="#89CFF0" 
            fillOpacity="0.05" 
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
          ></path>
        </svg>
      </div>

      
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-8">
        <div className="text-center mb-16">
        <p 
            className={`
              text-4xl text-gray-600 font-bold
              transition-all duration-1000
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
            style={{ transitionDelay: '200ms' }}
          >
            Hi there, Am
          </p>
          <h1 
            className={`
              text-7xl mb-4 p-4
              text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-500 to-teal-400
              transition-all duration-1000
              font-bold
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            Sagnik Bhattacharya
          </h1>
          <p 
            className={`
              text-4xl text-gray-600 
              transition-all duration-1000
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
            style={{ transitionDelay: '200ms' }}
          >
            Crafting Balance, Designing Serenity
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          <SectionCard 
            icon={Waves} 
            title="Flow" 
            color="from-blue-300 to-cyan-400"
            description="Embracing adaptability and smooth transitions"
          />
          <SectionCard 
            icon={Leaf} 
            title="Growth" 
            color="from-green-300 to-teal-400"
            description="Nurturing potential with mindful design"
          />
          <SectionCard 
            icon={Mountain} 
            title="Perspective" 
            color="from-indigo-300 to-purple-400"
            description="Finding clarity through intentional simplicity"
          />
        </div>

        <button 
          className={`
            group flex items-center 
            bg-gradient-to-r from-blue-400 to-teal-500 
            text-white px-12 py-6 rounded-full 
            hover:from-blue-500 hover:to-teal-600 
            transition-all duration-300 
            transform hover:scale-110 active:scale-95
            shadow-xl
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            relative overflow-hidden
          `}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="absolute inset-0 bg-white/10 group-hover:opacity-20 transition-opacity"></div>
          Begin Your Journey
          <Sun 
            className="ml-4 transition-transform group-hover:rotate-45" 
          />
        </button>
      </div>

      
      <div 
        className={`
          absolute bottom-10 left-1/2 -translate-x-1/2 
          flex flex-col items-center
          transition-all duration-1000 
          ${isLoaded ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
        style={{ transitionDelay: '600ms' }}
      >
        <div className="animate-bounce-soft">
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="text-blue-400/70 animate-pulse-soft"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
        <span className="mt-2 text-xs uppercase tracking-widest text-blue-500 animate-pulse-soft">
          Explore Gently
        </span>
      </div>
    </div>
  );
};

export default Hero;