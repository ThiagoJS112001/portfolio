'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { number: '4+', label: 'Anos de Experiência' },
    { number: '50+', label: 'Projetos Entregues' },
    { number: '100%', label: 'Dedicação' },
  ]

  const skills = [
    'Desenvolvimento Oracle APEX',
    'Banco de Dados Oracle',
    'SQL/PL-SQL',
    'JavaScript & HTML/CSS',
    'Análise de Requisitos',
    'Metodologias Ágeis',
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-bg-primary relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-8 lg:col-start-3 section-title text-center"
          >
            Código que resolve,{' '}
            <span className="italic text-primary">pessoas que importam.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Texto principal — citação editorial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                <span className="font-display text-5xl text-primary float-left mr-3 leading-[0.85] mt-1">
                  Desde
                </span>
                2022 atuo profissionalmente no desenvolvimento de aplicações,
                criando interfaces intuitivas, fluxos eficientes e soluções que
                agregam valor aos negócios. Sou apaixonado por tecnologia,
                proativo e sempre em busca de novos aprendizados.
              </p>

              <p>
                Minha jornada na área de tecnologia começou com a descoberta da
                programação, impulsionada por minha curiosidade por computadores
                e sistemas. Formado em Análise e Desenvolvimento de Sistemas,
                venho me dedicando ao aprimoramento contínuo através de cursos e
                experiências práticas.
              </p>
            </div>

            {/* Stats em linha, mais editorial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-border"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="font-display text-4xl md:text-5xl text-primary mb-1"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-text-secondary text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills como tags — menos formal que lista com bullets */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-28">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-6">
                Competências-chave
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-bg-tertiary border border-border rounded-full text-text-primary text-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
