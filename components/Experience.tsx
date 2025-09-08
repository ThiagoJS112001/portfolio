'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: 'Desenvolvedor Oracle APEX',
      company: 'Empresa Atual',
      period: '2022 - Presente',
      description: 'Desenvolvimento de aplicações empresariais utilizando Oracle APEX, criação de dashboards, relatórios e sistemas integrados. Responsável pela análise de requisitos, modelagem de dados e implementação de soluções.',
      achievements: [
        'Desenvolvimento de mais de 20 aplicações APEX',
        'Otimização de performance de banco de dados',
        'Integração com APIs e sistemas externos',
        'Desenvolvimento de novos desenvolvedores',
      ],
    },
    {
      title: 'Estudante de ADS',
      company: 'Instituição de Ensino',
      period: '2020 - 2023',
      description: 'Formação em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web, banco de dados e metodologias de desenvolvimento de software.',
      achievements: [],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Experiência Profissional
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline marker */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {exp.company}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {exp.achievements.length > 0 && (
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start text-text-secondary"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
