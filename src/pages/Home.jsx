import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import ProblemSection from '../components/ProblemSection.jsx'
import Modules from '../components/Modules.jsx'
import Benefits from '../components/Benefits.jsx'
import News from '../components/News.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Modules />
        <Benefits />
        <News />
      </main>
      <Footer />
    </div>
  )
}

export default Home
