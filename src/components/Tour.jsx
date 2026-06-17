import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react'
import { tourSteps } from '../data/tour.js'

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
}

function Tour() {
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(0)

  const step = tourSteps[currentStep]
  const isFirst = currentStep === 0
  const isLast = currentStep === tourSteps.length - 1

  const goTo = (index) => {
    setDirection(index > currentStep ? 1 : -1)
    setCurrentStep(index)
  }

  const goNext = () => {
    if (!isLast) goTo(currentStep + 1)
  }

  const goPrev = () => {
    if (!isFirst) goTo(currentStep - 1)
  }

  return (
    <section
      id="tour"
      className="relative overflow-hidden bg-brand-black py-20 lg:py-28"
      aria-labelledby="tour-title"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-lime/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-brand-lime/5 blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="mx-auto max-w-lg text-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              aria-live="polite"
            >
              {/* Badge */}
              <div className="relative mx-auto mb-6 inline-flex">
                <div
                  className="absolute inset-0 rounded-full bg-brand-lime/30 blur-xl"
                  aria-hidden="true"
                />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-brand-lime/30 bg-charcoal-800 text-lg font-bold text-brand-lime">
                  {step.badge}
                </div>
              </div>

              {/* Step indicator */}
              <p className="text-xs font-bold uppercase tracking-widest text-brand-lime">
                Paso {currentStep + 1} de {tourSteps.length}
              </p>

              {/* Heading */}
              <h2 id="tour-title" className="mt-4 text-3xl font-bold text-brand-white sm:text-4xl">
                {step.heading}{' '}
                <span className="text-brand-lime">{step.headingHighlight}</span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-base leading-relaxed text-charcoal-200 sm:text-lg">
                {step.description}
              </p>

              {/* Features box */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/15 bg-white/5 text-left backdrop-blur-sm">
                {step.features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div
                      key={feature.text}
                      className={`flex items-center gap-4 px-5 py-4 ${
                        index < step.features.length - 1
                          ? 'border-b border-white/10'
                          : ''
                      }`}
                    >
                      <Icon
                        className="h-5 w-5 shrink-0 text-brand-lime"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-brand-white sm:text-base">
                        {feature.text}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* CTA on last step */}
              {step.cta && (
                <motion.a
                  href={step.cta.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-lime px-6 py-3.5 text-base font-semibold text-brand-black transition-colors hover:bg-primary-400"
                >
                  {step.cta.label}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </motion.a>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div
            className="mt-10 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Pasos del tour"
          >
            {tourSteps.map((s, index) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={index === currentStep}
                aria-label={`Paso ${index + 1}: ${s.stepLabel}`}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'w-8 bg-brand-lime'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goPrev}
              disabled={isFirst}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-brand-white transition-all hover:border-white/40 hover:bg-white/5 disabled:pointer-events-none disabled:opacity-30"
              aria-label="Paso anterior"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Anterior
            </button>

            {!isLast ? (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-brand-white transition-all hover:border-brand-lime hover:bg-brand-lime/10 hover:text-brand-lime"
                aria-label="Siguiente paso"
              >
                Siguiente
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : (
              <a
                href="#modulos"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-brand-white transition-all hover:border-brand-lime hover:bg-brand-lime/10 hover:text-brand-lime"
              >
                Ir a módulos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>

          {/* Scroll hint */}
          {isFirst && (
            <motion.a
              href="#problema"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 inline-flex text-white/40 transition-colors hover:text-brand-lime"
              aria-label="Continuar explorando la página"
            >
              <ChevronDown className="h-7 w-7 animate-bounce" />
            </motion.a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Tour
