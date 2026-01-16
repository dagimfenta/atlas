import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-atlas-black)]/60 via-[var(--color-atlas-black)]/40 to-[var(--color-atlas-black)] z-10" />
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=80"
          alt="Luxury car in dramatic lighting"
          className="w-full h-full object-cover object-center scale-110"
          onLoad={(e) => e.currentTarget.classList.add('loaded')}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6"
      >
        {/* Main Logo Typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="mb-4"
        >
          <h1 
            className="text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tight text-[var(--color-atlas-cream)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Atlas
          </h1>
        </motion.div>

        {/* Established Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6 mb-2"
        >
          <span className="w-16 h-px bg-[var(--color-atlas-cream)]/30" />
          <span 
            className="text-xs tracking-[0.4em] uppercase text-[var(--color-atlas-cream)]/70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Est 2025
          </span>
          <span className="w-16 h-px bg-[var(--color-atlas-cream)]/30" />
        </motion.div>

        {/* Rentals */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <h2 
            className="text-[clamp(3rem,12vw,9rem)] leading-[0.85] tracking-tight text-[var(--color-atlas-cream)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Rentals
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-lg md:text-xl tracking-widest text-[var(--color-atlas-cream)]/60 max-w-md mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Extraordinary machines for extraordinary moments
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12"
        >
          <a href="#fleet" className="atlas-button inline-block">
            Explore Our Fleet
          </a>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Hero
