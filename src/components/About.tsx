import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'White Glove Service',
    description: 'Concierge-level attention from reservation to return. Your dedicated liaison ensures every detail is flawless.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Doorstep Delivery',
    description: 'Your vehicle arrives precisely when and where you need it. Private aviation, residences, or hotels worldwide.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Absolute Discretion',
    description: 'Privacy is paramount. Confidential handling of all arrangements with the utmost professionalism.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })


  return (
    <section id="about" className="py-32 md:py-40 bg-[var(--color-atlas-charcoal)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-atlas-cream) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <p 
            className="text-xs tracking-[0.4em] uppercase text-[var(--color-atlas-gold)] mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            The Atlas Experience
          </p>
          <h2 
            className="text-4xl md:text-6xl text-[var(--color-atlas-cream)] mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Beyond Transportation
          </h2>
          <p 
            className="text-lg leading-relaxed text-[var(--color-atlas-cream)]/60"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Atlas Rentals represents a philosophy of excellence. We don't simply provide vehicles—we 
            craft memorable journeys for those who appreciate the finer details. Every interaction 
            is designed to exceed expectations.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[var(--color-atlas-cream)]/20 text-[var(--color-atlas-gold)] mb-6 group-hover:border-[var(--color-atlas-gold)]/50 transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 
                className="text-xl md:text-2xl text-[var(--color-atlas-cream)] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-sm leading-relaxed text-[var(--color-atlas-cream)]/50 max-w-xs mx-auto"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
