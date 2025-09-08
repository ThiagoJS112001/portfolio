'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { number: '3+', label: 'Anos de Experiência' },
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Sobre Mim
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                Desde 2022 atuo profissionalmente no desenvolvimento de aplicações, criando interfaces
                intuitivas, fluxos eficientes e soluções que agregam valor aos negócios. Sou apaixonado
                por tecnologia, proativo e sempre em busca de novos aprendizados.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                Minha jornada na área de tecnologia começou com a descoberta da programação, impulsionada
                por minha curiosidade por computadores e sistemas. Formado em Análise e Desenvolvimento
                de Sistemas, venho me dedicando ao aprimoramento contínuo através de cursos e experiências práticas.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.h3
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-text-secondary font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-bg-secondary rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Principais Competências
            </h3>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-text-secondary"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
