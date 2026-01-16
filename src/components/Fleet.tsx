import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Vehicle {
  id: number
  name: string
  brand: string
  tagline: string
  price: string
  image: string
  specs: {
    power: string
    acceleration: string
    topSpeed: string
  }
}

const vehicles: Vehicle[] = [
  {
    id: 1,
    name: 'Wraith',
    brand: 'Rolls-Royce',
    tagline: 'Effortless Everywhere',
    price: '2,500',
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1600&q=80',
    specs: {
      power: '624 HP',
      acceleration: '4.4s',
      topSpeed: '155 mph',
    },
  },
  {
    id: 2,
    name: '911 GT3 RS',
    brand: 'Porsche',
    tagline: 'Be Extraordinary',
    price: '1,800',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=1600&q=80',
    specs: {
      power: '518 HP',
      acceleration: '3.0s',
      topSpeed: '207 mph',
    },
  },
  {
    id: 3,
    name: 'Chiron',
    brand: 'Bugatti',
    tagline: 'Every Day Amplified',
    price: '2,200',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80',
    specs: {
      power: '1479 HP',
      acceleration: '2.3s',
      topSpeed: '304 mph',
    },
  },
  {
    id: 4,
    name: '911 GT3',
    brand: 'Porsche',
    tagline: 'Engineered to Thrill',
    price: '1,500',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
    specs: {
      power: '502 HP',
      acceleration: '3.2s',
      topSpeed: '197 mph',
    },
  },
]

const VehicleCard = ({ vehicle, index }: { vehicle: Vehicle; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-atlas-charcoal)]">
        <motion.img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.name}`}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          onLoad={(e) => e.currentTarget.classList.add('loaded')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-atlas-black)] via-transparent to-transparent opacity-80" />
        
        {/* Specs Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[var(--color-atlas-black)]/60 flex items-center justify-center"
        >
          <div className="flex gap-8 md:gap-12">
            {Object.entries(vehicle.specs).map(([key, value]) => (
              <div key={key} className="text-center">
                <p 
                  className="text-2xl md:text-3xl text-[var(--color-atlas-cream)]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {value}
                </p>
                <p 
                  className="text-xs tracking-widest uppercase text-[var(--color-atlas-cream)]/50 mt-1"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {key === 'acceleration' ? '0-60' : key === 'topSpeed' ? 'Top Speed' : key}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <div>
            <p 
              className="text-xs tracking-[0.3em] uppercase text-[var(--color-atlas-silver)] mb-1"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {vehicle.brand}
            </p>
            <h3 
              className="text-2xl md:text-3xl text-[var(--color-atlas-cream)] group-hover:text-[var(--color-atlas-gold)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {vehicle.name}
            </h3>
          </div>
          <div className="text-right">
            <p 
              className="text-xs tracking-widest uppercase text-[var(--color-atlas-silver)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              From
            </p>
            <p 
              className="text-xl text-[var(--color-atlas-cream)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ${vehicle.price}<span className="text-sm text-[var(--color-atlas-cream)]/50">/day</span>
            </p>
          </div>
        </div>
        <p 
          className="text-sm italic text-[var(--color-atlas-cream)]/50 mt-2"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {vehicle.tagline}
        </p>
        
        {/* Reserve Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="inline-block mt-4 text-xs tracking-[0.2em] uppercase text-[var(--color-atlas-gold)] border-b border-[var(--color-atlas-gold)]/50 hover:border-[var(--color-atlas-gold)] pb-1 transition-colors duration-300"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Reserve Now
        </motion.a>
      </div>
    </motion.article>
  )
}

const Fleet = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="fleet" className="py-32 md:py-40 bg-[var(--color-atlas-black)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p 
            className="text-xs tracking-[0.4em] uppercase text-[var(--color-atlas-gold)] mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            The Collection
          </p>
          <h2 
            className="text-4xl md:text-6xl text-[var(--color-atlas-cream)] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Fleet
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-[var(--color-atlas-cream)]/20" />
            <p 
              className="text-sm tracking-wider text-[var(--color-atlas-cream)]/50 max-w-md"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Curated excellence for those who accept nothing less
            </p>
            <span className="w-12 h-px bg-[var(--color-atlas-cream)]/20" />
          </div>
        </motion.div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fleet
