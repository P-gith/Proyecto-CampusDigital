import { motion } from 'framer-motion'
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { footerLinks } from '../data/modules.js'

function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ]

  return (
    <footer id="contacto" className="bg-slate-900 text-slate-300">
      <div className="section-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <a href="#inicio" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700">
                <GraduationCap className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-white">
                Campus<span className="text-primary-400">Digital</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Portal académico universitario que centraliza información, recursos
              y servicios digitales para la comunidad estudiantil. Comprometidos
              con la eficiencia, transparencia y excelencia educativa.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                Av. Universitaria 1234, Ciudad Académica
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                +51 (01) 555-0100
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                contacto@campusdigital.edu
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-8 sm:grid-cols-3 lg:col-span-5 lg:col-start-6"
          >
            {[
              { title: 'Institucional', links: footerLinks.institucional },
              { title: 'Recursos', links: footerLinks.recursos },
              { title: 'Soporte', links: footerLinks.soporte },
            ].map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-primary-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Síguenos
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} CampusDigital. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
