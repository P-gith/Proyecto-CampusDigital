import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Accessibility,
  X,
  Type,
  Minus,
  Plus,
  Contrast,
  Volume2,
  VolumeX,
  MousePointerClick,
  FileText,
  RotateCcw,
} from 'lucide-react'
import { useAccessibility } from '../context/AccessibilityContext.jsx'

function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef(null)
  const buttonRef = useRef(null)

  const {
    fontLevel,
    highContrast,
    isSpeaking,
    increaseText,
    decreaseText,
    resetSettings,
    toggleHighContrast,
    readSelection,
    readPage,
    stopSpeaking,
    maxFontLevel,
  } = useAccessibility()

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const fontLabels = ['Normal', 'Mediano', 'Grande', 'Muy grande']

  return (
    <div className="a11y-widget fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-panel-title"
            className="mb-4 w-[min(100vw-3rem,22rem)] overflow-hidden rounded-2xl border border-black/10 bg-brand-white shadow-2xl shadow-black/20"
          >
            <div className="flex items-center justify-between border-b border-black/8 bg-brand-mint px-4 py-3">
              <div className="flex items-center gap-2">
                <Accessibility className="h-5 w-5 text-primary-700" aria-hidden="true" />
                <h2 id="a11y-panel-title" className="text-sm font-bold text-brand-black">
                  Accesibilidad
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-charcoal-600 transition-colors hover:bg-black/5 hover:text-brand-black"
                aria-label="Cerrar panel de accesibilidad"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 p-4">
              {/* Tamaño de texto */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Type className="h-4 w-4 text-primary-700" aria-hidden="true" />
                  <span className="text-sm font-semibold text-brand-black">
                    Tamaño de texto
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={decreaseText}
                    disabled={fontLevel === 0}
                    className="flex h-10 flex-1 items-center justify-center gap-1 rounded-xl border border-black/10 bg-brand-mint text-sm font-medium text-brand-black transition-colors hover:bg-primary-200 disabled:opacity-40"
                    aria-label="Disminuir tamaño de texto"
                  >
                    <Minus className="h-4 w-4" aria-hidden="true" />
                    A-
                  </button>
                  <span className="min-w-[5.5rem] text-center text-xs font-medium text-charcoal-600">
                    {fontLabels[fontLevel]}
                  </span>
                  <button
                    type="button"
                    onClick={increaseText}
                    disabled={fontLevel === maxFontLevel}
                    className="flex h-10 flex-1 items-center justify-center gap-1 rounded-xl border border-black/10 bg-brand-mint text-sm font-medium text-brand-black transition-colors hover:bg-primary-200 disabled:opacity-40"
                    aria-label="Aumentar tamaño de texto"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                    A+
                  </button>
                </div>
              </div>

              {/* Alto contraste */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Contrast className="h-4 w-4 text-primary-700" aria-hidden="true" />
                  <span className="text-sm font-semibold text-brand-black">
                    Alto contraste
                  </span>
                </div>
                <div className="a11y-contrast-row flex items-center justify-between rounded-xl border border-black/10 bg-brand-mint px-4 py-3">
                  <span className="a11y-contrast-label text-sm font-medium text-brand-black">
                    {highContrast ? 'Activado' : 'Desactivado'}
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={highContrast}
                    aria-label={highContrast ? 'Desactivar alto contraste' : 'Activar alto contraste'}
                    onClick={toggleHighContrast}
                    className="a11y-switch"
                  >
                    <span
                      className="a11y-switch-track"
                      data-on={highContrast}
                      aria-hidden="true"
                    >
                      <span className="a11y-switch-thumb" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Lectura en voz alta */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-primary-700" aria-hidden="true" />
                  <span className="text-sm font-semibold text-brand-black">
                    Lectura en voz alta
                  </span>
                </div>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={readSelection}
                    className="flex w-full items-center gap-3 rounded-xl border border-black/10 bg-brand-mint px-4 py-3 text-left text-sm font-medium text-brand-black transition-colors hover:bg-primary-200"
                  >
                    <MousePointerClick className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Leer texto seleccionado
                  </button>
                  <button
                    type="button"
                    onClick={readPage}
                    className="flex w-full items-center gap-3 rounded-xl border border-black/10 bg-brand-mint px-4 py-3 text-left text-sm font-medium text-brand-black transition-colors hover:bg-primary-200"
                  >
                    <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Leer contenido principal
                  </button>
                  {isSpeaking && (
                    <button
                      type="button"
                      onClick={stopSpeaking}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100"
                    >
                      <VolumeX className="h-4 w-4" aria-hidden="true" />
                      Detener lectura
                    </button>
                  )}
                </div>
              </div>

              {/* Restablecer */}
              <button
                type="button"
                onClick={resetSettings}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-black/15 px-4 py-2.5 text-xs font-medium text-charcoal-600 transition-colors hover:border-black/25 hover:text-brand-black"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Restablecer ajustes
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-expanded={isOpen}
        aria-controls="a11y-panel"
        aria-label={isOpen ? 'Cerrar accesibilidad' : 'Abrir opciones de accesibilidad'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-black text-brand-lime shadow-xl shadow-black/30 transition-colors hover:bg-charcoal-800"
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Accessibility className="h-6 w-6" aria-hidden="true" />
        )}
      </motion.button>
    </div>
  )
}

export default AccessibilityWidget
