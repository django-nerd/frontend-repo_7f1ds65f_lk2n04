import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './Sections'

const hobbies = [
  'Guitar & Music',
  'Dance',
  'Rubik’s Cube coaching',
  'Basketball (awards, nationals qualification)'
]

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Hobbies" subtitle="Personal touch" />
        <div className="flex gap-6 overflow-x-auto pb-4">
          {hobbies.map((h, i) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="shrink-0 w-60 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80 backdrop-blur-xl hover:rotate-[0.5deg]"
            >
              <div className="h-28 w-full rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 mb-3" />
              <div className="font-semibold">{h}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobbies
