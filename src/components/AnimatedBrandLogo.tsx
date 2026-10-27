import { motion, useReducedMotion } from 'framer-motion'

function AnimatedBrandLogo() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative aspect-[1408/768] overflow-hidden rounded-[2rem] border border-white/[0.07] shadow-[0_0_80px_rgba(70,204,173,0.12)]">
      {!reduceMotion && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-white/[0.06] border-t-aqua/50"
        />
      )}
      <div className="portfolio-logo-reveal absolute inset-0 overflow-hidden">
        <img
          src="/Hornero-Arq.svg"
          alt="Logotipo oficial de Hornero-Arq: un hornero junto a un nido de arquitectura digital."
          fetchPriority="high"
          decoding="async"
          draggable={false}
          className="absolute inset-0 size-full object-cover"
        />
        <svg
          viewBox="0 0 1408 768"
          preserveAspectRatio="none"
          className="portfolio-intro-code absolute inset-0 size-full"
          aria-hidden="true"
        >
          <path
            d="M150 602H340L394 548H520M832 550H1032L1080 500H1270"
            fill="none"
            stroke="#77dcc2"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength="1"
            style={{ animationDelay: '0.1s' }}
          />
          <path
            d="M284 440H410L464 386H560M900 370H1054L1100 416H1220"
            fill="none"
            stroke="#e5a36e"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength="1"
            style={{ animationDelay: '0.35s' }}
          />
          <path
            d="M386 620V574L428 532M1070 310V354L1110 394"
            fill="none"
            stroke="#e5a36e"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength="1"
            style={{ animationDelay: '0.55s' }}
          />
          <text
            x="100"
            y="650"
            fill="#77dcc2"
            fontFamily="monospace"
            fontSize="18"
            letterSpacing="2"
            className="portfolio-intro-code-label"
            style={{ animationDelay: '0.15s' }}
          >
            &lt;path d="hornero-arq" /&gt;
          </text>
          <text
            x="1030"
            y="278"
            fill="#e5a36e"
            fontFamily="monospace"
            fontSize="18"
            letterSpacing="2"
            className="portfolio-intro-code-label"
            style={{ animationDelay: '0.55s' }}
          >
            stroke: aqua;
          </text>
        </svg>
      </div>
      {!reduceMotion && (
        <span className="portfolio-intro-scan pointer-events-none absolute inset-y-0 z-10 w-px bg-white/80 shadow-[0_0_18px_4px_rgba(119,220,194,0.55)]" />
      )}
    </div>
  )
}

export default AnimatedBrandLogo
