'use client'

import { useState } from 'react'
import { projects, type Project } from './project-data'
import dynamic from 'next/dynamic'

const ProjectModal = dynamic(() => import('./ProjectModal'))

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-24 lg:py-32 bg-bg-secondary relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div
            className="lg:col-span-4"
          >
          </div>

          <h2
            className="lg:col-span-8 lg:col-start-3 section-title text-center"
          >
            Projetos em{' '}
            <span className="italic text-primary">destaque.</span>
          </h2>
        </div>

        {/* Zigzag — alterna imagem à esquerda/direita */}
        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1
            return (
              <article
                key={project.id}
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
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={480}
                      className="relative w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Texto */}
                <div
                  className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : ''}`}
                >
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">{project.category}</p>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mb-6 flex flex-wrap gap-2" aria-label="Tecnologias">
                    {project.technologies.map((technology) => <li key={technology} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-secondary">{technology}</li>)}
                  </ul>
                  <button

                    onClick={() => setSelectedProject(project)}
                    aria-haspopup="dialog"
                    aria-label={`Ver detalhes de ${project.title}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors group"
                  >
                    {project.gallery.length ? 'Explorar projeto e telas' : 'Conhecer a solução'}
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
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </section>
  )
}
