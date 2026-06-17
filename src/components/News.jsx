import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { news } from '../data/modules.js'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

function News() {
  return (
    <section
      id="noticias"
      className="bg-brand-mint py-20 lg:py-28"
      aria-labelledby="news-title"
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
            Noticias
          </span>
          <h2 id="news-title" className="section-title mt-3">
            Comunicados institucionales
          </h2>
          <p className="section-subtitle mx-auto">
            Mantente informado sobre fechas académicas, convocatorias y eventos
            de la comunidad universitaria.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-8 lg:grid-cols-3"
        >
          {news.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-brand-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-black/8"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-black px-3 py-1 text-xs font-semibold text-brand-lime">
                  {item.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-charcoal-500">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={item.date}>{item.date}</time>
                </div>

                <h3 className="text-lg font-semibold text-brand-black transition-colors group-hover:text-primary-700">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600">
                  {item.description}
                </p>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-black transition-colors hover:text-primary-700"
                  aria-label={`Leer más sobre ${item.title}`}
                >
                  Leer más
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default News
