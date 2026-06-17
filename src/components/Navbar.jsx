import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap } from 'lucide-react'
import { navLinks } from '../data/modules.js'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isQuienesSomos = location.pathname === '/quienes-somos'
  const useDarkText = isQuienesSomos || scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-white/95 shadow-md shadow-black/5 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container flex h-16 items-center justify-between lg:h-20"
        aria-label="Navegación principal"
      >
        <Link
          to="/"
          className="group flex items-center gap-2.5"
          aria-label="CampusDigital - Inicio"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-black shadow-lg transition-transform group-hover:scale-105">
            <GraduationCap className="h-5 w-5 text-brand-lime" aria-hidden="true" />
          </div>
          <span
            className={`text-lg font-bold tracking-tight transition-colors ${
              useDarkText ? 'text-brand-black' : 'text-brand-black'
            }`}
          >
            Campus<span className="text-primary-700">Digital</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-brand-mint text-brand-black'
                    : useDarkText
                      ? 'text-charcoal-700 hover:bg-brand-mint hover:text-brand-black'
                      : 'text-brand-black/80 hover:bg-black/5 hover:text-brand-black'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-lg p-2 lg:hidden ${
            useDarkText
              ? 'text-charcoal-700 hover:bg-brand-mint'
              : 'text-brand-black hover:bg-black/5'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/10 bg-brand-white/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="section-container space-y-1 py-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={handleLinkClick}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      location.pathname === link.to
                        ? 'bg-brand-mint text-brand-black'
                        : 'text-charcoal-700 hover:bg-brand-mint hover:text-brand-black'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
