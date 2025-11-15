import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading, GlassCard } from './Sections'

const items = [
  { title: 'Purdue University', subtitle: 'BS Computer Science' },
  { title: 'Sarala Birla Academy', subtitle: 'IBDP' },
  { title: 'Sri Kumarans Public School', subtitle: 'ICSE' },
]

const Timeline = () => {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Education" subtitle="A quick journey so far" />
        <div className="relative mx-auto">
          <div className="absolute left-4 sm:left-1/2 -ml-[1px] h-full w-[2px] bg-gradient-to-b from-violet-500/60 via-white/20 to-cyan-500/60" />
          <div className="space-y-8">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative ${idx % 2 ? 'sm:ml-auto sm:w-1/2 sm:pl-8' : 'sm:w-1/2 sm:pr-8'} pt-2`}
              >
                <div className="absolute left-3 sm:left-auto sm:-right-[9px] top-3 h-3 w-3 rounded-full bg-white shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
                <GlassCard>
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-white/70 text-sm mt-1">{item.subtitle}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
