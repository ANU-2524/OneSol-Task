import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Impact from './components/Impact'
import Slider from './components/Slider'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FooterCTA from './components/FooterCTA'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Impact />
      <Slider />
      <Testimonials />
      <FAQ />
      <FooterCTA />
    </div>
  )
}

export default App
