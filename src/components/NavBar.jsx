
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
          <h1>Sagnik.</h1>
        </div>
        
        <div className="navbar-links">
          <a href="/" className="nav-link" >Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#works" className="nav-link">Works</a>
         
          <a href="#contact" className="nav-link">Contact</a>
          
        </div>
        
        <div className='flex gap-4 justify-end'>
          <a href="#contact"><button className="navbar-cta" >Contact</button></a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
