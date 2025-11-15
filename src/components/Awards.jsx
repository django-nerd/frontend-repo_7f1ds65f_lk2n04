import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './Sections'

const awards = [
  'King Constantine Medal',
  'Best Delegate (IIMUN Championship)',
  'TAPMI Biz Kids (2nd Place)',
  'Top 15% Cathedral Math Competition',
  'Subject Toppers (CS HL, Math HL, Physics HL)'
]

const Awards = () => {
  return (
    <section id="awards" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Awards" subtitle="Badge wall" />
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
          {awards.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="shrink-0 rounded-full px-6 py-12 text-center text-sm font-medium text-white border border-yellow-500/20 bg-yellow-500/10 shadow-[0_0_30px_rgba(234,179,8,0.25)]"
            >
              {a}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
