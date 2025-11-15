import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from './Sections'

const tech = [
  { name: 'Python', desc: 'Data, AI, scripting, automation' },
  { name: 'Machine Learning', desc: 'Modeling, training, evaluation' },
  { name: 'Computer Vision', desc: 'Image/video analysis, detection' },
  { name: 'Frontend', desc: 'React, motion, responsive UI' },
  { name: 'UX/UI', desc: 'Design systems, prototypes' },
  { name: 'Video Editing', desc: 'Storytelling, effects, color' },
]

const soft = [
  { name: 'Leadership', desc: 'Lead teams and deliver results' },
  { name: 'Collaboration', desc: 'Cross-functional teamwork' },
  { name: 'Problem Solving', desc: 'Analytical, creative approaches' },
  { name: 'Communication', desc: 'Clear, structured, empathetic' },
  { name: 'Creativity', desc: 'Inventive, aesthetic judgment' },
]

const Tile = ({ item, onClick }) => (
  <button onClick={onClick} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl transition-transform hover:scale-[1.02] focus:outline-none">
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 0 40px rgba(59,130,246,0.25), inset 0 0 0 1px rgba(255,255,255,0.06)'}} />
    <div className="relative">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-500/40 mb-3" />
      <h5 className="text-white font-medium">{item.name}</h5>
      <p className="text-white/60 text-sm mt-1">Click to expand</p>
    </div>
  </button>
)

const Skills = () => {
  const [active, setActive] = useState(null)

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Skill Matrix" subtitle="Technical and soft skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical */}
          <div>
            <h4 className="text-white/80 font-semibold mb-4">Technical Skills</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tech.map((t, i) => (
                <Tile key={t.name} item={t} onClick={() => setActive(t)} />
              ))}
            </div>
          </div>

          {/* Soft */}
          <div>
            <h4 className="text-white/80 font-semibold mb-4">Soft Skills</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {soft.map((s, i) => (
                <Tile key={s.name} item={s} onClick={() => setActive(s)} />
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur-xl"
            >
              <div className="text-sm">
                <span className="font-semibold">{active.name}: </span>
                {active.desc}
              </div>
              <button className="mt-4 text-xs text-white/60 underline" onClick={() => setActive(null)}>Close</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
