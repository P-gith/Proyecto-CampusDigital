import { Link } from 'react-router-dom'
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
import { contactInfo } from '../data/contact.js'

function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ]

  return (
    <footer id="contacto" className="bg-charcoal-700 text-charcoal-200">
      <div className="section-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-lime">
                <GraduationCap className="h-5 w-5 text-brand-black" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-brand-white">
                Campus<span className="text-brand-lime">Digital</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-300">
              Portal académico universitario que centraliza información, recursos
              y servicios digitales para la comunidad estudiantil. Comprometidos
              con la eficiencia, transparencia y excelencia educativa.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-lime">
                  Contacto institucional
                </h3>
                <p className="flex items-start gap-2 text-charcoal-300">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" aria-hidden="true" />
                  <span>{contactInfo.address}</span>
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs font-medium text-charcoal-400">
                  Teléfonos institucionales
                </p>
                <ul className="space-y-1.5">
                  {contactInfo.phones.map((phone) => (
                    <li key={phone.href}>
                      <a
                        href={phone.href}
                        className="flex items-center gap-2 text-charcoal-300 transition-colors hover:text-brand-lime"
                      >
                        <Phone className="h-4 w-4 shrink-0 text-brand-lime" aria-hidden="true" />
                        {phone.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2 text-xs font-medium text-charcoal-400">
                  Correos electrónicos
                </p>
                <ul className="space-y-2.5">
                  {contactInfo.emails.map((email) => (
                    <li key={email.href}>
                      <a
                        href={email.href}
                        className="group block transition-colors hover:text-brand-lime"
                      >
                        <span className="flex items-center gap-2 text-charcoal-300 group-hover:text-brand-lime">
                          <Mail className="h-4 w-4 shrink-0 text-brand-lime" aria-hidden="true" />
                          <span className="break-all">{email.value}</span>
                        </span>
                        <span className="mt-0.5 block pl-6 text-xs text-charcoal-400 group-hover:text-brand-lime/80">
                          {email.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
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
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-white">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-charcoal-300 transition-colors hover:text-brand-lime"
                      >
                        {link.label}
                      </Link>
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-white">
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-charcoal-600 text-charcoal-300 transition-colors hover:bg-brand-lime hover:text-brand-black"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-charcoal-600 pt-8 text-center text-sm text-charcoal-400">
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
