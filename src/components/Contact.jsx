import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 blur" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Let’s Work Together</h3>
            <p className="mt-3 text-white/70">Email: rbagri@purdue.edu</p>
            <div className="mt-5 flex items-center justify-center gap-4 text-sm">
              <a href="https://linkedin.com" target="_blank" className="text-white/80 underline">LinkedIn</a>
              <a href="https://github.com" target="_blank" className="text-white/80 underline">Github</a>
              <a href="https://instagram.com" target="_blank" className="text-white/80 underline">Instagram</a>
            </div>
            <a href="mailto:rbagri@purdue.edu" className="mt-8 inline-block rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-white">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
