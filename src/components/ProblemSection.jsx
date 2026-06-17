import { motion } from 'framer-motion'
import { Layers, Workflow, BookMarked } from 'lucide-react'
import { problemCards } from '../data/modules.js'

const iconMap = {
  layers: Layers,
  workflow: Workflow,
  access: BookMarked,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function ProblemSection() {
  return (
    <section
      id="problema"
      className="bg-slate-50 py-20 lg:py-28"
      aria-labelledby="problem-title"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            El desafío
          </span>
          <h2 id="problem-title" className="section-title mt-3">
            Información dispersa, procesos poco claros
          </h2>
          <p className="section-subtitle mx-auto">
            Actualmente los estudiantes enfrentan información dispersa, procesos
            administrativos poco claros y dificultad para encontrar recursos
            académicos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {problemCards.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.article
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg hover:shadow-slate-200/60"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
