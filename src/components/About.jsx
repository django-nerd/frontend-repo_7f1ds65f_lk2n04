import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl shadow-xl"
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04), 0 0 80px rgba(88,28,135,0.12)'}}
            />
            <h2 className="text-2xl md:text-3xl font-semibold text-white">About Me</h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              Computer Science undergraduate at Purdue University with experience in AI, computer vision, signal processing, and full-stack development. Co-founder of E-KARMA, video editor with 50+ projects, and published researcher.
            </p>
            <div className="mt-6 flex gap-3 text-xs text-white/60">
              <span className="rounded-full bg-white/5 px-3 py-1">AI</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Computer Vision</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Full-Stack</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-3xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 backdrop-blur-xl">
              <div className="absolute inset-0 rounded-3xl m-4 border border-white/10" />
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.25),transparent_60%)]" />
              <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.06),transparent_30%)]" />
              <div className="absolute inset-0 rounded-3xl flex items-center justify-center text-white/80 font-semibold tracking-wide">
                Silhouette
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
