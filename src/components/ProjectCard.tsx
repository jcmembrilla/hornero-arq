import { useRef } from 'react'
import { ArrowUpRight, CodeXml } from 'lucide-react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export type Project = {
  name: string
  category: string
  description: string
  technologies: string[]
  accent: 'clay' | 'aqua' | 'cyan'
  githubUrl?: string
  demoUrl: string
  number: string
}

type ProjectCardProps = {
  project: Project
  index: number
}

const accentStyles: Record<Project['accent'], { color: string; glow: string }> = {
  clay: {
    color: 'var(--accent-primary)',
    glow: 'color-mix(in srgb, var(--accent-primary) 12%, transparent)',
  },
  aqua: {
    color: 'var(--accent-secondary)',
    glow: 'color-mix(in srgb, var(--accent-secondary) 12%, transparent)',
  },
  cyan: {
    color: 'var(--accent-tertiary)',
    glow: 'color-mix(in srgb, var(--accent-tertiary) 12%, transparent)',
  },
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 })
  const accent = accentStyles[project.accent]

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType !== 'mouse') return

    const bounds = cardRef.current?.getBoundingClientRect()
    if (!bounds) return

    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    rotateY.set((x - 0.5) * 5)
    rotateX.set((0.5 - y) * 5)
  }

  function resetTilt() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="group relative flex min-h-[23rem] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-900/75 p-6 shadow-xl shadow-black/10 backdrop-blur-md transition-colors duration-300 hover:border-white/[0.16] sm:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 size-56 rounded-full blur-[75px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundColor: accent.glow }}
      />
      <div className="relative flex items-center justify-between">
        <span
          className="font-mono text-[11px] tracking-[0.18em]"
          style={{ color: accent.color }}
        >
          {project.category}
        </span>
        <span className="font-mono text-xs text-slate-600">{project.number}</span>
      </div>

      <div
        aria-hidden="true"
        className="relative my-8 flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.045] to-transparent"
      >
        <div
          className="absolute inset-x-10 bottom-5 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent.color}66, transparent)` }}
        />
        <span
          className="font-mono text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:scale-105 sm:text-3xl"
          style={{ color: accent.color }}
        >
          {project.name}
        </span>
        <span
          className="absolute right-4 top-4 size-1.5 rounded-full"
          style={{ backgroundColor: accent.color, boxShadow: `0 0 14px ${accent.color}` }}
        />
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-white">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] tracking-wide text-slate-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 pt-7">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-white"
            aria-label={`Código de ${project.name} en GitHub`}
          >
            <CodeXml size={14} aria-hidden="true" /> Código
          </a>
        )}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs transition-colors hover:text-white"
          style={{ color: accent.color }}
          aria-label={`Visitar el sitio de ${project.name}`}
        >
          Visitar sitio <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  )
}

export default ProjectCard
