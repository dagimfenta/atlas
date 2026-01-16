import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-atlas-dark)] py-16 border-t border-[var(--color-atlas-cream)]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#" className="inline-block">
              <span 
                className="text-3xl tracking-wide text-[var(--color-atlas-cream)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Atlas
              </span>
              <span 
                className="text-3xl tracking-wide text-[var(--color-atlas-cream)]/50 ml-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Rentals
              </span>
            </a>
            <p 
              className="text-xs tracking-[0.3em] uppercase text-[var(--color-atlas-cream)]/40 mt-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Est. 2025
            </p>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs tracking-[0.2em] uppercase text-[var(--color-atlas-cream)]/50 hover:text-[var(--color-atlas-gold)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-atlas-cream)]/10 my-12" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p 
            className="text-xs text-[var(--color-atlas-cream)]/40"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            © {currentYear} Atlas Rentals. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-[var(--color-atlas-cream)]/40 hover:text-[var(--color-atlas-cream)]/60 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
