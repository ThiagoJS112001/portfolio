'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    // Compensa o header fixo (~80px)
    const offsetPosition = element.offsetTop - 80
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-bg-primary relative overflow-hidden pt-24 pb-16"
    >
      {/* Glow ambiente sutil — apenas um, sem movimento */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[640px] h-[640px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Texto — coluna mais larga (ênfase na tipografia) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Eyebrow com número de seção */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Portfólio
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-6xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Thiago
              <br />
              <span className="italic text-primary">Schneider.</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-text-primary mb-4 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Desenvolvedor{' '}
              <span className="text-primary font-medium">Oracle APEX</span>
            </motion.p>

            <motion.p
              className="text-base text-text-secondary mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Especialista em desenvolvimento de aplicações empresariais com
              Oracle APEX, criando soluções eficientes e inovadoras que agregam
              valor aos negócios.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary"
              >
                Entre em Contato
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="btn btn-secondary"
              >
                Saiba Mais
              </button>
            </motion.div>
          </motion.div>

          {/* Foto — moldura orgânica com leve rotação */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Moldura lime atrás, deslocada (assimetria intencional) */}
              <div
                aria-hidden
                className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-primary rounded-3xl"
              />

              {/* Container da foto */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-[26rem] overflow-hidden rounded-3xl border border-white/10 bg-bg-tertiary shadow-2xl">
                {/* IMPORTANTE: adicionar manualmente o arquivo em public/images/profile.jpg */}
                <img
                  src="/images/profile.jpg.jpeg"
                  alt="Thiago Schneider"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tag flutuante — âncora de "desde 2022" */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-bg-tertiary border border-border rounded-2xl px-5 py-3 shadow-2xl backdrop-blur-md"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">
                  Codando desde
                </p>
                <p className="font-display text-3xl text-primary leading-none mt-1">
                  2022
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll minimalista */}
      <motion.button
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        aria-label="Rolar para próxima seção"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors group"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <svg
          className="w-4 h-8 group-hover:translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.button>
    </section>
  )
}
