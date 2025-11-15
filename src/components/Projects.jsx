import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading, Grid } from './Sections'

const projects = [
  { title: 'Predictive Diagnosis using AI', tags: ['AI'] },
  { title: 'Fourier Transform Video Enhancement', tags: ['Signal Processing'] },
  { title: 'Sobel vs Canny Edge Detection', tags: ['Computer Vision'] },
  { title: 'Guitar Harmonics Physics Model', tags: ['Physics'] },
  { title: 'Editorial & Writing Work', tags: ['Writing'] },
]

const ProjectCard = ({ p }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
    <div className="aspect-video w-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20" />
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h5 className="text-white font-semibold">{p.title}</h5>
        <span className="text-[10px] text-white/50">Hover to preview</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {p.tags.map(t => (
          <span key={t} className="text-[11px] rounded-full bg-white/5 px-2 py-1 text-white/70 border border-white/10">{t}</span>
        ))}
      </div>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Showcase" subtitle="Selected projects" />
        <Grid cols="md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default Projects
