import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry. Our concierge team will contact you within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-32 md:py-40 bg-[var(--color-atlas-black)] relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="w-full h-full object-cover"
          onLoad={(e) => e.currentTarget.classList.add('loaded')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-atlas-black)] via-[var(--color-atlas-black)]/80 to-[var(--color-atlas-black)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p 
              className="text-xs tracking-[0.4em] uppercase text-[var(--color-atlas-gold)] mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Begin Your Journey
            </p>
            <h2 
              className="text-4xl md:text-6xl text-[var(--color-atlas-cream)] mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Reserve Your Experience
            </h2>
            <p 
              className="text-lg leading-relaxed text-[var(--color-atlas-cream)]/60 mb-12"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Our dedicated concierge team is available around the clock to curate your 
              perfect driving experience. Whether for a special occasion or an unforgettable 
              journey, we're here to exceed your expectations.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[var(--color-atlas-cream)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--color-atlas-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-xs tracking-[0.2em] uppercase text-[var(--color-atlas-silver)] mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    24/7 Concierge
                  </p>
                  <p 
                    className="text-xl text-[var(--color-atlas-cream)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    (123) 456 7890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[var(--color-atlas-cream)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--color-atlas-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-xs tracking-[0.2em] uppercase text-[var(--color-atlas-silver)] mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Email
                  </p>
                  <p 
                    className="text-xl text-[var(--color-atlas-cream)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    info@atlasrentals.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[var(--color-atlas-cream)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--color-atlas-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-xs tracking-[0.2em] uppercase text-[var(--color-atlas-silver)] mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Flagship Location
                  </p>
                  <p 
                    className="text-xl text-[var(--color-atlas-cream)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Nashville, TN
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-xs tracking-[0.2em] uppercase text-[var(--color-atlas-silver)] mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[var(--color-atlas-cream)]/20 py-3 text-[var(--color-atlas-cream)] placeholder:text-[var(--color-atlas-cream)]/30 focus:border-[var(--color-atlas-gold)] focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-xs tracking-[0.2em] uppercase text-[var(--color-atlas-silver)] mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[var(--color-atlas-cream)]/20 py-3 text-[var(--color-atlas-cream)] placeholder:text-[var(--color-atlas-cream)]/30 focus:border-[var(--color-atlas-gold)] focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-xs tracking-[0.2em] uppercase text-[var(--color-atlas-silver)] mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[var(--color-atlas-cream)]/20 py-3 text-[var(--color-atlas-cream)] placeholder:text-[var(--color-atlas-cream)]/30 focus:border-[var(--color-atlas-gold)] focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="vehicle" 
                    className="block text-xs tracking-[0.2em] uppercase text-[var(--color-atlas-silver)] mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Preferred Vehicle
                  </label>
                  <select
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[var(--color-atlas-cream)]/20 py-3 text-[var(--color-atlas-cream)] focus:border-[var(--color-atlas-gold)] focus:outline-none transition-colors duration-300 cursor-pointer"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option value="" className="bg-[var(--color-atlas-charcoal)]">Select a vehicle</option>
                    <option value="rolls-royce-ghost" className="bg-[var(--color-atlas-charcoal)]">Rolls-Royce Ghost</option>
                    <option value="bentley-continental" className="bg-[var(--color-atlas-charcoal)]">Bentley Continental GT</option>
                    <option value="lamborghini-huracan" className="bg-[var(--color-atlas-charcoal)]">Lamborghini Huracán</option>
                    <option value="porsche-911" className="bg-[var(--color-atlas-charcoal)]">Porsche 911 Turbo S</option>
                    <option value="other" className="bg-[var(--color-atlas-charcoal)]">Other / Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-xs tracking-[0.2em] uppercase text-[var(--color-atlas-silver)] mb-2"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-[var(--color-atlas-cream)]/20 py-3 text-[var(--color-atlas-cream)] placeholder:text-[var(--color-atlas-cream)]/30 focus:border-[var(--color-atlas-gold)] focus:outline-none transition-colors duration-300 resize-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full atlas-button mt-8"
              >
                Submit Inquiry
              </button>

              <p 
                className="text-xs text-center text-[var(--color-atlas-cream)]/40 mt-4"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Our concierge team will respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
