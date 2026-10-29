import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <Header />
      <main id="main-content" tabIndex={-1} className="overflow-x-hidden">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
