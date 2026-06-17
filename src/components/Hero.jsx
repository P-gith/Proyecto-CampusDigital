import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="section-container relative flex min-h-screen items-center pt-20 pb-16 lg:pt-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-200 backdrop-blur-sm">
              Portal Académico Universitario
            </span>

            <h1
              id="hero-title"
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Todo lo que necesitas en{' '}
              <span className="bg-gradient-to-r from-primary-300 to-accent-500 bg-clip-text text-transparent">
                un solo lugar
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-100/90 sm:text-xl">
              CampusDigital conecta estudiantes con recursos académicos, trámites
              y servicios universitarios.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#modulos"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-primary-800 shadow-lg shadow-black/20 transition-all hover:bg-primary-50 hover:shadow-xl"
              >
                Explorar módulos
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Conocer más
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/30 ring-1 ring-white/20">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80"
                alt="Estudiantes universitarios utilizando tecnología digital en campus"
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/80">
                    <span className="text-lg font-bold text-white">+6</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Módulos integrados
                    </p>
                    <p className="text-xs text-primary-200">
                      Recursos académicos y administrativos
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div
              className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-accent-500 to-primary-600 opacity-60 blur-2xl"
              aria-hidden="true"
            />
          </motion.div>
        </div>

        <motion.a
          href="#problema"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
          aria-label="Desplazarse hacia abajo"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
