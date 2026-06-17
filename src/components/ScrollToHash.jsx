import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = hash.replace('#', '')
    const scrollToElement = () => {
      const element = document.getElementById(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }

    const timeout = setTimeout(scrollToElement, 100)
    return () => clearTimeout(timeout)
  }, [pathname, hash])

  return null
}

export default ScrollToHash
