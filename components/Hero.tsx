'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    console.log(`Tentando rolar para: ${sectionId}`)
    
    const element = document.getElementById(sectionId)
    if (element) {
      console.log(`Elemento encontrado:`, element)
      
      // Método alternativo para scroll suave
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - 80 // Deixa espaço para o header fixo
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      console.error(`Element with ID "${sectionId}" not found`)
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-secondary to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Olá, eu sou{' '}
              <span className="gradient-text">Thiago Schneider</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-text-secondary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desenvolvedor Oracle APEX
            </motion.p>
            
            <motion.p 
              className="text-lg text-text-secondary mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Especialista em desenvolvimento de aplicações empresariais com Oracle APEX,
              criando soluções eficientes e inovadoras que agregam valor aos negócios.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary"
              >
                Entre em Contato
              </button>
              <button
                onClick={() => {
                  console.log('Botão "Saiba Mais" clicado!')
                  scrollToSection('about')
                }}
                className="btn btn-secondary relative z-10"
                style={{ pointerEvents: 'auto' }}
              >
                Saiba Mais
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img
                  src="https://i.pinimg.com/736x/30/88/cc/3088ccaaf3738a3085874c97c1cdd94f.jpg"
                  alt="Thiago Schneider"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-primary rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-text-light text-sm mb-2">Role para baixo</span>
          <div className="w-6 h-10 border-2 border-text-light rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text-light rounded-full animate-bounce-slow mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
