'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Experience() {
  const [diplomaOpen, setDiplomaOpen] = useState(false)
  const [activeDiploma, setActiveDiploma] = useState<{
    url: string
    title: string
    issuer: string
    period: string
  } | null>(null)

  // ESC fecha o modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && diplomaOpen) setDiplomaOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [diplomaOpen])

  // Bloqueia scroll do body
  useEffect(() => {
    if (diplomaOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [diplomaOpen])

  const experiences = [
    {
      title: 'Desenvolvedor Oracle APEX',
      company: 'Empresa Atual',
      period: '2022 - Presente',
      description:
        'Desenvolvimento de aplicações empresariais utilizando Oracle APEX, criação de dashboards, relatórios e sistemas integrados. Responsável pela análise de requisitos, modelagem de dados e implementação de soluções.',
      achievements: [
        'Desenvolvimento de mais de 20 aplicações APEX',
        'Otimização de performance de banco de dados',
        'Integração com APIs e sistemas externos',
        'Desenvolvimento de novos desenvolvedores',
      ],
      diplomaUrl: null,
    },
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      company: 'Instituição de Ensino',
      period: '2020 - 2023',
      description:
        'Formação em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web, banco de dados e metodologias de desenvolvimento de software.',
      achievements: [],
      diplomaUrl: '/images/certifications/Diploma facul.jpg',
    },
  ]

  const openDiploma = (exp: (typeof experiences)[number]) => {
    if (!exp.diplomaUrl) return
    setActiveDiploma({
      url: exp.diplomaUrl,
      title: `Diploma — ${exp.title}`,
      issuer: exp.company,
      period: exp.period,
    })
    setDiplomaOpen(true)
  }

  const isDiplomaPdf = activeDiploma?.url.toLowerCase().endsWith('.pdf')

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
                  {exp.diplomaUrl ? (
                    <button
                      type="button"
                      onClick={() => openDiploma(exp)}
                      className="w-full text-left bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
                      aria-label={`Ver diploma de ${exp.title}`}
                    >
                      <DiplomaContent exp={exp} />
                    </button>
                  ) : (
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <DiplomaContent exp={exp} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal do Diploma */}
      <AnimatePresence>
        {diplomaOpen && activeDiploma && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setDiplomaOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-gray-200 gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      🎓 Diploma
                    </span>
                    <span className="text-xs text-text-secondary">
                      Concluído em {activeDiploma.period}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    {activeDiploma.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {activeDiploma.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setDiplomaOpen(false)}
                  aria-label="Fechar modal"
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Imagem / PDF */}
              <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6 flex items-center justify-center min-h-[300px]">
                {isDiplomaPdf ? (
                  <iframe
                    src={`${activeDiploma.url}#toolbar=1&navpanes=0&scrollbar=1`}
                    title={activeDiploma.title}
                    className="w-full flex-1 min-h-[500px] rounded-lg shadow-md bg-white"
                  />
                ) : (
                  <img
                    src={activeDiploma.url}
                    alt={activeDiploma.title}
                    className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-md"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const fallback = target.nextElementSibling as HTMLElement
                      if (fallback) fallback.classList.remove('hidden')
                    }}
                  />
                )}
                <div className="hidden text-center p-8">
                  <div className="text-6xl mb-4">📜</div>
                  <p className="text-text-secondary font-medium">
                    Diploma não encontrado
                  </p>
                  <p className="text-sm text-text-light mt-2">
                    Salve o arquivo em{' '}
                    <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                      public/images/certifications/
                    </code>
                  </p>
                  <p className="text-xs text-text-light mt-1 font-mono break-all">
                    {activeDiploma.url}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-2 p-4 border-t border-gray-200 bg-gray-50">
                <a
                  href={activeDiploma.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Baixar
                </a>
                <a
                  href={activeDiploma.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Abrir
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function DiplomaContent({ exp }: { exp: { title: string; company: string; period: string; description: string; achievements: string[]; diplomaUrl: string | null } }) {
  return (
    <>
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

      {exp.diplomaUrl && (
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-xs text-text-secondary flex items-center gap-1.5">
            <span className="text-base">🎓</span>
            <span>Diploma disponível para visualização</span>
          </span>
          <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            Ver diploma
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      )}
    </>
  )
}
