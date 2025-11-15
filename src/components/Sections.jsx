import React from 'react'
import { motion } from 'framer-motion'

export const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-10">
    <h3 className="text-2xl md:text-3xl font-semibold text-white">{title}</h3>
    {subtitle && <p className="mt-2 text-white/60">{subtitle}</p>}
  </div>
)

export const GlassCard = ({ children, className = '' }) => (
  <div className={`relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-xl ${className}`}>
    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04), 0 0 80px rgba(88,28,135,0.08)'}} />
    {children}
  </div>
)

export const Grid = ({ children, cols = 'md:grid-cols-2', className='' }) => (
  <div className={`grid grid-cols-1 ${cols} gap-6 ${className}`}>{children}</div>
)
