import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Leadership from './components/Leadership'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen text-white bg-[#05070c]">
      {/* Global background accents */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_10%,#0b0f1a_10%,#05070c_60%,#000000_100%)]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
      </div>

      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Leadership />
      <Hobbies />
      <Contact />

      <footer className="py-10 text-center text-xs text-white/40">© {new Date().getFullYear()} Rishi Bagri</footer>
    </div>
  )
}

export default App
