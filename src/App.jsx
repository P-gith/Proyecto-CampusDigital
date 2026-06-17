import { Routes, Route } from 'react-router-dom'
import { AccessibilityProvider } from './context/AccessibilityContext.jsx'
import AccessibilityWidget from './components/AccessibilityWidget.jsx'
import ScrollToHash from './components/ScrollToHash.jsx'
import Home from './pages/Home.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'

function App() {
  return (
    <AccessibilityProvider>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
      <AccessibilityWidget />
    </AccessibilityProvider>
  )
}

export default App
