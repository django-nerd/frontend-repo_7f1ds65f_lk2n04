import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const containerRef = useRef(null)
  const [splineOk, setSplineOk] = useState(true)

  return (
    <section id="hero" ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[radial-gradient(125%_125%_at_50%_10%,#0b0f1a_10%,#05070c_60%,#000000_100%)]">
      {/* Particle-ish subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Spline 3D animation (auto-fallback if it cannot load) */}
      {splineOk ? (
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
            onLoad={() => setSplineOk(true)}
            onError={() => setSplineOk(false)}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ) : (
        // Fallback visual if Spline CDN is blocked or offline
        <div className="absolute inset-0">
          <div className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-500/25 via-fuchsia-500/15 to-cyan-500/25 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-cyan-400/20 via-emerald-400/10 to-blue-500/20 blur-3xl" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #22d3ee 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
      )}

      {/* Floating orb simulated depth */}
      <motion.div
        className="absolute -right-24 top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-fuchsia-500/30 via-violet-500/20 to-cyan-500/30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="select-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 drop-shadow-[0_0_25px_rgba(99,102,241,0.35)]"
        >
          RISHI BAGRI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-white/70"
        >
          Computer Scientist • AI Developer • Video Editor • Designer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#" 
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-md transition-transform hover:scale-[1.02] hover:bg-white/10"
          >
            <span className="relative">
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 opacity-30 blur transition-opacity group-hover:opacity-60" />
              <span className="relative">Download Resume</span>
            </span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-transform hover:scale-[1.03]"
          >
            View My Work
          </a>
        </motion.div>

        {/* If Spline failed, provide a tiny hint to retry */}
        {!splineOk && (
          <div className="mt-4 text-xs text-white/50">Interactive animation unavailable. Check connection and reload.</div>
        )}

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pointer-events-none absolute bottom-10 flex items-center gap-2 text-white/60"
        >
          <div className="h-6 w-[1px] bg-gradient-to-b from-transparent via-white/60 to-transparent" />
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="text-sm"
          >
            Scroll
          </motion.span>
        </motion.div>
      </div>

      {/* Gradient overlay to ensure readability over Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
    </section>
  )
}

export default Hero
