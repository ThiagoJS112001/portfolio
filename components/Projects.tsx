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
    if (project.gallery && project.gallery.length > 0) {
      setSelectedProject({
        title: project.title,
        images: project.gallery,
        description: project.detailedDescription
      })
    }
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Projetos em Destaque
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-56 sm:h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openProjectModal(project)}
                  className="btn btn-primary btn-small w-full text-center"
                  disabled={!project.gallery || project.gallery.length === 0}
                >
                  {project.gallery && project.gallery.length > 0 ? 'Ver Projeto' : 'Em Breve'}
                </motion.button>
              </div>
            </motion.div>
          ))}
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
