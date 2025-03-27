
import React, { useState, useEffect } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [visible, setVisible] = useState(false);
 
 



  
  useEffect(() => {
    const handleScroll = () => {
      
      const viewportHeight = window.innerHeight;
      
      
      if (window.scrollY > viewportHeight * 0.8) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={`navbar ${visible ? 'visible' : ''} mb-6`} >
      <div className="navbar-container" >
        <div className="navbar-logo">
          <h1 className="text-2xl  p-4
              text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-500 to-teal-400
              transition-all duration-1000
              font-extrabold">Sagnik.</h1>
        </div>
        
        <div className="navbar-links">
          <a href="/" className="nav-link" >Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#works" className="nav-link">Works</a>
         
          <a href="#contact" className="nav-link">Contact</a>
          
        </div>
        
        <div className='flex gap-4 justify-end'>
          <a href="#contact"><button className=" bg-gradient-to-r from-blue-400 to-teal-500 
            text-white px-4 py-2 rounded-2xl" >Contact</button></a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
