import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const FONT_LEVELS = ['a11y-text-base', 'a11y-text-lg', 'a11y-text-xl', 'a11y-text-2xl']

const AccessibilityContext = createContext(null)

export function AccessibilityProvider({ children }) {
  const [fontLevel, setFontLevel] = useState(0)
  const [highContrast, setHighContrast] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)

  useEffect(() => {
    const html = document.documentElement

    FONT_LEVELS.forEach((cls) => html.classList.remove(cls))
    html.classList.add(FONT_LEVELS[fontLevel])

    html.classList.toggle('a11y-high-contrast', highContrast)
  }, [fontLevel, highContrast])

  const increaseText = useCallback(() => {
    setFontLevel((prev) => Math.min(prev + 1, FONT_LEVELS.length - 1))
  }, [])

  const decreaseText = useCallback(() => {
    setFontLevel((prev) => Math.max(prev - 1, 0))
  }, [])

  const resetSettings = useCallback(() => {
    setFontLevel(0)
    setHighContrast(false)
    window.speechSynthesis?.cancel()
    setIsSpeaking(false)
  }, [])

  const toggleHighContrast = useCallback(() => {
    setHighContrast((prev) => !prev)
  }, [])

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis?.cancel()
    setIsSpeaking(false)
  }, [])

  const speak = useCallback((text) => {
    if (!window.speechSynthesis || !text.trim()) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text.trim())
    utterance.lang = 'es-ES'
    utterance.rate = 0.95
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    setIsSpeaking(true)
    window.speechSynthesis.speak(utterance)
  }, [])

  const readSelection = useCallback(() => {
    const selected = window.getSelection()?.toString()
    if (selected?.trim()) {
      speak(selected)
    } else {
      speak('No hay texto seleccionado. Selecciona un fragmento en la página e intenta de nuevo.')
    }
  }, [speak])

  const readPage = useCallback(() => {
    const main = document.querySelector('main')
    const text = main?.innerText || document.body.innerText
    speak(text.slice(0, 5000))
  }, [speak])

  return (
    <AccessibilityContext.Provider
      value={{
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
        maxFontLevel: FONT_LEVELS.length - 1,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility debe usarse dentro de AccessibilityProvider')
  }
  return context
}
