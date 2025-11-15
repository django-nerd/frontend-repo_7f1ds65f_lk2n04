import React from 'react'
import { motion } from 'framer-motion'

const Section = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`relative py-24 sm:py-28 md:py-32 ${className}`}
    >
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(99,102,241,0.15),transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-6xl px-6"
      >
        {children}
      </motion.div>
    </section>
  )
}

export default Section
