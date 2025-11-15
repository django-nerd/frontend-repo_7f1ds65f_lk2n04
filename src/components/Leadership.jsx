import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './Sections'

const items = [
  { title: 'Head Boy' },
  { title: 'Baraza Co-Head' },
  { title: 'Basketball Captain' },
  { title: 'Peer Mentoring Head' },
]

const Leadership = () => {
  return (
    <section id="leadership" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Leadership" subtitle="Story panels" />
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {items.map((x, i) => (
            <motion.div
              key={x.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="snap-center shrink-0 w-[280px] sm:w-[360px] h-[220px] rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80 backdrop-blur-xl"
            >
              <div className="h-24 w-full rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 mb-3" />
              <div className="font-semibold">{x.title}</div>
              <p className="text-sm text-white/60 mt-1">Short highlight story.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
