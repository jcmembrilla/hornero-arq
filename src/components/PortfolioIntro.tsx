import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import AnimatedBrandLogo from './AnimatedBrandLogo'

function PortfolioIntro() {
  const [isVisible, setIsVisible] = useState(true)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setIsVisible(false),
      reduceMotion ? 300 : 2100,
    )

    return () => window.clearTimeout(timeout)
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="portfolio-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.45, ease: 'easeOut' }}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#090c12]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,rgba(44,76,76,0.2),transparent_55%)]" />

          <div className="relative flex w-full max-w-2xl flex-col items-center px-8">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, ease: 'easeOut' }}
              className="mb-8 font-mono text-[10px] tracking-[0.3em] text-slate-400 sm:text-xs"
            >
              HORNERO-ARQ <span className="text-clay">·</span> PORTFOLIO
            </motion.p>

            <div className="w-full">
              <AnimatedBrandLogo />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.5, duration: reduceMotion ? 0 : 0.5 }}
              className="mt-8 font-mono text-[10px] tracking-[0.24em] text-slate-500"
            >
              CONSTRUYENDO BUENAS BASES
            </motion.p>

            <div className="mt-5 h-px w-36 overflow-hidden bg-white/10">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0 : 1.7, ease: 'easeInOut' }}
                className="block h-full origin-left bg-gradient-to-r from-clay to-aqua"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PortfolioIntro
