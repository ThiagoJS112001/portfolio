'use client'

import { useState } from 'react'
import Modal from './Modal'
import type { Project } from './project-data'

export default function ProjectModal({ onClose, project }: { onClose: () => void; project: Project }) {
  const [activeImage, setActiveImage] = useState(0)
  const [failedImage, setFailedImage] = useState<string | null>(null)
  const image = project.gallery[activeImage]

  return (
    <Modal titleId="project-title" onClose={onClose}>
      <div className="flex max-h-[90dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-bg-secondary shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-8">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">{project.category}</p>
            <h2 id="project-title" className="font-display text-3xl sm:text-4xl">{project.title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Fechar detalhes do projeto" className="shrink-0 rounded-lg px-3 py-2 text-2xl hover:bg-bg-tertiary">×</button>
        </div>
        <div className="overflow-y-auto overscroll-contain p-5 sm:p-8">
          <div className="mb-8 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
            {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-secondary">{technology}</span>)}
          </div>
          <div className="mb-8 grid gap-6 sm:grid-cols-2">
            <div><h3 className="mb-2 text-lg font-medium text-primary">Contexto</h3><p className="leading-relaxed text-text-secondary">{project.context}</p></div>
            <div><h3 className="mb-2 text-lg font-medium text-primary">Solução</h3><p className="leading-relaxed text-text-secondary">{project.solution}</p></div>
          </div>
          <h3 className="mb-3 text-lg font-medium">O que a solução inclui</h3>
          <ul className="mb-10 space-y-3 text-text-secondary">
            {project.deliverables.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-primary">→</span>{item}</li>)}
          </ul>
          {image && (
            <section aria-label="Telas do projeto" className="mb-8">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-medium">Por dentro da aplicação</h3>
                <span aria-live="polite" className="font-mono text-xs text-text-secondary">Tela {activeImage + 1} de {project.gallery.length}</span>
              </div>
              <figure>
                {failedImage === image.src ? (
                  <p role="status" className="rounded-xl border border-border p-8 text-text-secondary">Não foi possível carregar esta imagem. Use o link abaixo para abrir a tela.</p>
                ) : (
                  <img src={image.src} alt={image.caption} width={1858} height={843} decoding="async" onError={() => setFailedImage(image.src)} className="max-h-[55vh] w-full rounded-xl border border-border bg-bg-tertiary object-contain" />
                )}
                <figcaption className="mt-3 text-sm text-text-secondary">{image.caption}</figcaption>
              </figure>
              <div className="mt-4 flex flex-wrap gap-2" aria-label="Selecionar tela">
                {project.gallery.map((item, index) => (
                  <button key={item.src} type="button" aria-pressed={activeImage === index} onClick={() => setActiveImage(index)} className={`rounded-full border px-4 py-2 text-sm ${activeImage === index ? 'border-primary bg-primary text-text-inverse' : 'border-border hover:border-primary'}`}>Tela {index + 1}</button>
                ))}
                <a href={image.src} target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm text-primary underline underline-offset-4">Abrir imagem em nova aba</a>
              </div>
            </section>
          )}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <p className="text-sm text-text-secondary">Vamos conversar sobre uma solução para o seu negócio?</p>
            <a href="#contact" onClick={onClose} className="btn btn-primary">Entrar em contato</a>
          </div>
        </div>
      </div>
    </Modal>
  )
}
