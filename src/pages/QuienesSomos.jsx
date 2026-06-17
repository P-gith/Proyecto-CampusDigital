import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import {
  heroContent,
  origenContent,
  propositoContent,
  equipoContent,
  impactoContent,
  ctaContent,
} from '../data/quienesSomos.js'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

function QuienesSomos() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-brand-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-brand-lime pt-28 pb-14 lg:pt-32 lg:pb-16">
          <div className="section-container">
            <motion.div {...fadeUp}>
              <span className="inline-block rounded-sm bg-brand-black px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest text-brand-lime">
                {heroContent.tag}
              </span>
              <h1 className="mt-5 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-brand-black sm:text-5xl lg:text-[3rem]">
                {heroContent.title[0]}
                <br />
                {heroContent.title[1]}
              </h1>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-charcoal-700">
                {heroContent.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Origen */}
        <section className="bg-[#F2F2F2] py-14 lg:py-16">
          <div className="section-container grid gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div {...fadeUp}>
              <p className="text-[11px] font-medium uppercase tracking-widest text-brand-lime">
                {origenContent.label}
              </p>
              <h2 className="mt-2.5 text-[28px] font-medium leading-tight tracking-tight text-brand-black">
                {origenContent.title}
              </h2>
              {origenContent.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-3 text-sm leading-[1.8] text-charcoal-700 first:mt-4"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="rounded-lg bg-brand-black p-8">
                <span
                  className="block text-5xl font-medium leading-none text-brand-lime"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="text-base font-medium leading-relaxed tracking-tight text-[#F2F2F2]">
                  {origenContent.quote.text}
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-widest text-[#F2F2F2]/35">
                  {origenContent.quote.attribution}
                </p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-xs leading-relaxed text-[#F2F2F2]/40">
                    Marco teórico:{' '}
                    <span className="text-brand-lime">
                      Carta Iberoamericana de Gobierno Electrónico
                    </span>
                    , modelos de madurez digital de la{' '}
                    <span className="text-brand-lime">ONU</span> y principios de{' '}
                    <span className="text-brand-lime">
                      administración pública orientada a resultados
                    </span>
                    .
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Propósito */}
        <section className="bg-brand-black py-14 lg:py-16">
          <div className="section-container">
            <motion.div {...fadeUp}>
              <p className="text-[11px] font-medium uppercase tracking-widest text-brand-lime">
                {propositoContent.label}
              </p>
              <h2 className="mt-2.5 text-[28px] font-medium tracking-tight text-[#F2F2F2]">
                {propositoContent.title}
              </h2>
            </motion.div>

            <div className="mt-8 grid gap-0.5 sm:grid-cols-2">
              {propositoContent.cards.map((card, index) => {
                const Icon = card.icon
                const isLime = card.variant === 'lime'
                return (
                  <motion.article
                    key={card.id}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-7 sm:p-8 ${isLime ? 'bg-brand-lime' : 'bg-[#1a1a1a]'}`}
                  >
                    <Icon
                      className={`mb-4 h-6 w-6 ${isLime ? 'text-brand-black' : 'text-brand-lime'}`}
                      aria-hidden="true"
                    />
                    <h3
                      className={`text-[15px] font-medium ${isLime ? 'text-brand-black' : 'text-[#F2F2F2]'}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`mt-2 text-[13px] leading-[1.75] ${isLime ? 'text-charcoal-700' : 'text-[#F2F2F2]/50'}`}
                    >
                      {card.description}
                    </p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="bg-[#F2F2F2] py-14 lg:py-16">
          <div className="section-container">
            <motion.div {...fadeUp} className="max-w-xl">
              <p className="text-[11px] font-medium uppercase tracking-widest text-brand-lime">
                {equipoContent.label}
              </p>
              <h2 className="mt-2.5 text-[28px] font-medium tracking-tight text-brand-black">
                {equipoContent.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
                {equipoContent.description}
              </p>
            </motion.div>

            <div className="mt-8 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
              {equipoContent.members.map((member, index) => (
                <motion.article
                  key={member.id}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-brand-white p-5 sm:p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-black text-sm font-medium text-brand-lime">
                    {member.initials}
                  </div>
                  <p className="text-sm font-medium text-brand-black">{member.area}</p>
                  <p className="mt-1 text-xs leading-relaxed text-charcoal-700">
                    {member.role}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm bg-[#F2F2F2] px-2 py-0.5 text-[11px] text-charcoal-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Impacto */}
        <section className="bg-brand-lime py-14 lg:py-16">
          <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div {...fadeUp}>
              <p className="text-[11px] font-medium uppercase tracking-widest text-brand-black/70">
                {impactoContent.label}
              </p>
              <h2 className="mt-2.5 text-[28px] font-medium leading-tight tracking-tight text-brand-black">
                {impactoContent.title[0]}
                <br />
                Más{' '}
                <span className="text-[#F2F2F2]">{impactoContent.titleHighlight}</span>
              </h2>
              <p className="mt-3.5 text-sm leading-[1.8] text-charcoal-700">
                {impactoContent.description}
              </p>
            </motion.div>

            <div className="flex flex-col gap-0.5">
              {impactoContent.stats.map((stat, index) => (
                <motion.div
                  key={stat.value}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-center justify-between gap-4 bg-brand-black px-6 py-5"
                >
                  <span className="text-[28px] font-medium text-brand-lime">
                    {stat.value}
                  </span>
                  <span className="max-w-[14rem] text-right text-xs leading-relaxed text-[#F2F2F2]/45">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-black py-14 text-center lg:py-16">
          <motion.div {...fadeUp} className="section-container">
            <h2 className="text-3xl font-medium tracking-tight text-[#F2F2F2]">
              {ctaContent.title[0]}
              <br />
              <span className="text-brand-lime">{ctaContent.titleHighlight}</span>
            </h2>
            <p className="mx-auto mt-2.5 max-w-md text-sm leading-relaxed text-[#F2F2F2]/40">
              {ctaContent.description}
            </p>
            <Link
              to={ctaContent.buttonTo}
              className="mt-7 inline-flex items-center gap-2 rounded bg-brand-lime px-8 py-3.5 text-sm font-medium text-brand-black transition-colors hover:bg-primary-400"
            >
              {ctaContent.buttonLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default QuienesSomos
