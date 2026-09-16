'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      title: 'Kaizen',
      description: 'Sistema de melhoria contínua desenvolvido em Oracle APEX, focado em otimização de processos e gestão de qualidade.',
      image: '/images/kaizen.svg',
      technologies: ['Oracle APEX', 'PL/SQL', 'JavaScript'],
      link: '#',
      gallery: [
        '/kaizen-screenshots/kaizen-dashboard-real.png',
        '/kaizen-screenshots/kaizen-form-real.png', 
        '/kaizen-screenshots/kaizen-list-real.png'
      ],
      detailedDescription: 'Sistema completo de gestão Kaizen desenvolvido em Oracle APEX. Inclui módulos para criação de ideias, premiação, indicadores de performance e parametrização. Interface moderna e intuitiva com dashboards interativos e relatórios detalhados.'
    },
    {
      title: 'Sistema de Indicadores de Performance',
      description: 'Plataforma completa para monitoramento de KPIs empresariais em tempo real, com alertas automáticos e análise de tendências para tomada de decisão.',
      image: '/images/indicadores.svg',
      technologies: ['Oracle APEX', 'PL/SQL', 'JavaScript'],
      link: '#',
      gallery: [],
      detailedDescription: 'Dashboard avançado para monitoramento de indicadores chave de performance.'
    },
    {
      title: 'Suporte Técnico Oracle APEX',
      description: 'Serviços especializados de suporte e manutenção para sistemas Oracle APEX, incluindo correção de bugs, otimização de performance e consultoria técnica.',
      image: '/images/suporte-apex.svg',
      technologies: ['Oracle APEX', 'PL/SQL', 'JavaScript'],
      link: '#',
      gallery: [],
      detailedDescription: 'Serviços completos de suporte e consultoria para sistemas Oracle APEX.'
    },
  ]

  const openProjectModal = (project: any) => {
    setSelectedProject({
      title: project.title,
      description: project.detailedDescription
    })
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-24 lg:py-32 bg-bg-secondary relative">
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
            Projetos em{' '}
            <span className="italic text-primary">destaque.</span>
          </motion.h2>
        </div>

        {/* Zigzag — alterna imagem à esquerda/direita */}
        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Imagem */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] bg-bg-tertiary border border-border rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Texto */}
                <div
                  className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : ''}`}
                >
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => openProjectModal(project)}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors group"
                  >
                    Ver detalhes
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </motion.button>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </section>
  )
}
