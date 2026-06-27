import { useEffect, useState } from 'react'
import CrtGrid from './components/CrtGrid.jsx'
import CrtScreen from './components/CrtScreen.jsx'
import Nav from './components/Nav.jsx'
import BackToTop from './components/BackToTop.jsx'
import SectionNav from './components/SectionNav.jsx'
import SocialRail from './components/SocialRail.jsx'
import SideDecor from './components/SideDecor.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // CRT screen effects on/off, remembered across visits.
  const [crt, setCrt] = useState(() => localStorage.getItem('crt') !== 'off')
  useEffect(() => {
    document.documentElement.classList.toggle('crt-off', !crt)
    localStorage.setItem('crt', crt ? 'on' : 'off')
  }, [crt])

  // CRT power-on overlay — plays once on mount, then unmounts.
  const [booting, setBooting] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {booting && crt && <div className="crt-boot" aria-hidden="true" />}
      {crt && <CrtGrid />}
      {crt && <CrtScreen />}
      <Nav crt={crt} onToggleCrt={() => setCrt((v) => !v)} />
      <SideDecor />
      <SectionNav />
      <SocialRail />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
