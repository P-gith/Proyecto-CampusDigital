import { motion } from 'framer-motion'
import { Clock, Eye, Globe, Sparkles } from 'lucide-react'
import { benefits } from '../data/modules.js'

const iconMap = {
  clock: Clock,
  eye: Eye,
  globe: Globe,
  sparkles: Sparkles,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 lg:py-28"
      aria-labelledby="benefits-title"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-300">
            Beneficios
          </span>
          <h2
            id="benefits-title"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Gobierno electrónico al servicio del estudiante
          </h2>
          <p className="mt-4 text-lg text-primary-100/80">
            Eficiencia, transparencia y orientación al estudiante en cada
            interacción digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon]
            return (
              <motion.article
                key={benefit.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/20 text-primary-300 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-relaxed text-primary-100/70">
                  {benefit.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
