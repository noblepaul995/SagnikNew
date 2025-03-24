import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import WorksSection from './components/WorksSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Navbar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    
    </>
  )
}

export default App
