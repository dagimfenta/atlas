import { useEffect } from 'react'
import Hero from './components/Hero'
import Fleet from './components/Fleet'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Add loaded class to images when they finish loading
    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      if (img.complete) {
        img.classList.add('loaded')
      } else {
        img.addEventListener('load', () => {
          img.classList.add('loaded')
        })
      }
    })
  }, [])

  return (
    <div className="min-h-screen bg-atlas-black">
      <Navigation />
      <main>
        <Hero />
        <Fleet />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
