import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap } from 'lucide-react'
import { navLinks } from '../data/modules.js'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          ? 'bg-white/90 shadow-md shadow-slate-200/50 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container flex h-16 items-center justify-between lg:h-20"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="group flex items-center gap-2.5"
          aria-label="CampusDigital - Inicio"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 shadow-lg shadow-primary-600/25 transition-transform group-hover:scale-105">
            <GraduationCap className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          <span
            className={`text-lg font-bold tracking-tight transition-colors ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            Campus<span className="text-primary-400">Digital</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 ${
                  scrolled
                    ? 'text-slate-600 hover:bg-primary-50 hover:text-primary-700'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-lg p-2 lg:hidden ${
            scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
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
            className="overflow-hidden border-t border-slate-200/20 bg-white/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="section-container space-y-1 py-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                  >
                    {link.label}
                  </a>
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
