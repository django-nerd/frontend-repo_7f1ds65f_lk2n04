import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading, GlassCard, Grid } from './Sections'

const items = [
  { title: 'CEO, E-KARMA', desc: 'Co-founded and leading product and growth.' },
  { title: 'AI Intern, Deloitte', desc: 'Applied ML/CV in enterprise contexts.' },
  { title: 'UI/UX Intern, Dyte', desc: 'Design systems and product UX.' },
  { title: 'Freelance Video Editor', desc: '50+ projects delivering cinematic edits.' },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Experience" subtitle="Floating glass cards" />
        <Grid cols="md:grid-cols-2 lg:grid-cols-4">
          {items.map((x, i) => (
            <motion.div
              key={x.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <GlassCard className="transition-transform hover:-translate-y-1">
                <h4 className="text-white font-semibold">{x.title}</h4>
                <p className="text-white/70 text-sm mt-2">{x.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default Experience
