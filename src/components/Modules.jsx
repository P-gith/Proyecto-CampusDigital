import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { modules } from '../data/modules.js'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function Modules() {
  return (
    <section
      id="modulos"
      className="py-20 lg:py-28"
      aria-labelledby="modules-title"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-700">
            Módulos principales
          </span>
          <h2 id="modules-title" className="section-title mt-3">
            Recursos académicos integrados
          </h2>
          <p className="section-subtitle mx-auto">
            Accede a todos los servicios universitarios desde módulos
            especializados diseñados para tu éxito académico.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <motion.article
                key={module.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-brand-white p-8 shadow-sm transition-all hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10"
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${module.bgLight} ${module.iconColor} transition-transform group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-semibold text-brand-black">
                  {module.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-charcoal-600">
                  {module.description}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-black transition-colors group-hover:text-primary-700"
                  aria-label={`Ver más sobre ${module.title}`}
                >
                  Ver más
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${module.color} opacity-0 blur-2xl transition-opacity group-hover:opacity-10`}
                  aria-hidden="true"
                />
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Modules
