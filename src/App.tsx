import { ArrowDown, ArrowRight, ArrowUpRight, CodeXml, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import ProjectCard, { type Project } from './components/ProjectCard'
import PortfolioIntro from './components/PortfolioIntro'

const projects: Project[] = [
  {
    name: 'Planilla Escolar',
    category: 'Plataforma escolar',
    description:
      'Plataforma digital para la gestión escolar, presentada como Mi Escuela.',
    technologies: [],
    accent: 'clay',
    demoUrl: 'https://planillaescolar.netlify.app/',
    number: '01',
  },
  {
    name: 'Comercio Local',
    category: 'Comercio local',
    description:
      'Red social para descubrir y conectar con comercios locales.',
    technologies: [],
    accent: 'aqua',
    demoUrl: 'https://localcomercio.com.ar/',
    number: '02',
  },
  {
    name: 'Radios ARG',
    category: 'Radio online',
    description:
      'Una experiencia de radio online, siempre a tu alcance.',
    technologies: [],
    accent: 'cyan',
    demoUrl: 'https://radiosarg.netlify.app/',
    number: '03',
  },
  {
    name: 'Simple Agenda',
    category: 'Productividad',
    description:
      'Agenda simple y práctica para organizar tus días y no olvidar nada importante.',
    technologies: [],
    accent: 'clay',
    demoUrl: 'https://simple-agenda.netlify.app/',
    number: '04',
  },
]

const riseIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}
const currentYear = new Date().getFullYear()

function App() {
  return (
    <>
    <PortfolioIntro />
    <main className="overflow-hidden">
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Inicio">
          <span className="font-mono text-sm font-semibold tracking-[0.12em] text-slate-100">
            HORNERO<span className="text-clay">-ARQ</span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 text-sm text-slate-400 sm:flex">
          <a className="transition-colors hover:text-white" href="#sobre-mi">Sobre mí</a>
          <a className="transition-colors hover:text-white" href="#proyectos">Proyectos</a>
          <a className="transition-colors hover:text-white" href="#contacto">Contacto</a>
        </nav>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full border border-clay/30 px-4 py-2 text-xs font-medium text-clay transition hover:border-clay/60 hover:bg-clay/10"
        >
          Hablemos <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </header>

      <section id="inicio" className="relative mx-auto grid min-h-[calc(100svh-88px)] w-full max-w-7xl items-center gap-8 px-6 pb-24 pt-10 sm:px-10 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:pb-32 lg:pt-0">
        <div className="pointer-events-none absolute -left-40 top-20 size-[28rem] rounded-full bg-clay/[0.07] blur-[120px]" />
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={riseIn}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-aqua/20 bg-aqua/[0.06] px-3.5 py-2 font-mono text-[11px] tracking-wide text-aqua"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-aqua" />
            DISPONIBLE PARA NUEVOS PROYECTOS
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={riseIn}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="mb-3 text-sm font-medium tracking-wide text-slate-400"
          >
            Hola, soy Juan Cruz
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={riseIn}
            transition={{ duration: 0.7, delay: 0.14, ease: 'easeOut' }}
            className="text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl"
          >
            Construyo productos
            <span className="mt-2 block text-slate-400">digitales con</span>
            <span className="mt-2 block bg-gradient-to-r from-clay via-amber-200 to-aqua bg-clip-text text-transparent">
              buenas bases.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={riseIn}
            transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
            className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
          >
            Desarrollador full-stack. Diseño y construyo experiencias web sólidas,
            desde la primera idea hasta cada detalle en producción.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={riseIn}
            transition={{ duration: 0.6, delay: 0.34, ease: 'easeOut' }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full bg-clay px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Explorar proyectos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-white/25 hover:text-white"
            >
              Contactarme <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-12 flex items-center gap-5 text-slate-500"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">También en</span>
            <a href="https://github.com/jcmembrilla" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-clay">
              <CodeXml size={17} />
            </a>
          </motion.div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[36rem] items-center justify-center lg:justify-end">
          <div className="absolute inset-8 rounded-full bg-aqua/[0.08] blur-[90px]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative w-full"
          >
            <img
              src="/Hornero-Arq.jpg"
              alt="Logotipo oficial de Hornero-Arq: un hornero junto a un nido de arquitectura digital."
              decoding="async"
              className="block aspect-[1408/768] w-full rounded-[2rem] border border-white/[0.07] object-cover shadow-2xl shadow-black/20"
            />
          </motion.div>
        </div>

        <a
          href="#sobre-mi"
          aria-label="Desplazarse a la sección Sobre mí"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-clay lg:block"
        >
          <ArrowDown size={18} />
        </a>
      </section>

      <section id="sobre-mi" className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12 lg:py-20">
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.18em] text-clay">01 / SOBRE MÍ</p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              La paciencia de construir.
              <span className="text-slate-500"> La curiosidad de mejorar.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Creo en hacer las cosas con intención: buenas decisiones
            técnicas, interfaces que se sienten naturales y soluciones preparadas
            para crecer. Disfruto transformar problemas complejos en productos
            útiles, accesibles y fáciles de mantener.
          </p>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.18em] text-aqua">02 / TRABAJO SELECCIONADO</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Proyectos con propósito.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Una selección de ideas convertidas en experiencias digitales robustas y cuidadas.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="contacto" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-12 lg:pb-32">
        <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-slate-900/90 to-slate-900/40 px-7 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-28 size-72 rounded-full bg-clay/[0.08] blur-[90px]" />
          <div className="relative max-w-2xl">
            <p className="mb-4 font-mono text-xs tracking-[0.18em] text-clay">03 / SIGUIENTE PASO</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              ¿Construimos algo que valga la pena?
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Si tienes una idea, un desafío interesante o simplemente quieres conectar, mi bandeja está abierta.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=membrillajc%40gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Redactar un email a membrillajc@gmail.com en Gmail"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-clay"
            >
              <Mail size={16} aria-hidden="true" />
              Email
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl justify-center border-t border-white/[0.06] px-6 py-7 text-center text-xs text-slate-500 sm:px-10 lg:px-12">
        <p>© {currentYear} Hornero-Arq · Juan Cruz. Hecho con paciencia y buenas bases.</p>
      </footer>
      </main>
      </>
  )
}

export default App
