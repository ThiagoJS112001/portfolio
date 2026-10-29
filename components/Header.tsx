'use client'

import { useEffect, useRef, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'projects', label: 'Projetos' },
  { id: 'about', label: 'Sobre' },
  { id: 'experience', label: 'Experiência' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'certifications', label: 'Certificações' },
  { id: 'contact', label: 'Contato' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let frame: number | null = null
    const handleScroll = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(() => {
        frame = null
        setIsScrolled(window.scrollY > 50)
        const current = navItems.find(({ id }) => {
          const rect = document.getElementById(id)?.getBoundingClientRect()
          return rect && rect.top <= 200 && rect.bottom >= 200
        })
        if (current) setActiveSection(current.id)
      })
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onResize = () => { if (desktop.matches) setIsMenuOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onResize)
    }
  }, [isMenuOpen])

  return (
    <header className={`fixed top-0 z-50 w-full transition-colors ${isScrolled || isMenuOpen ? 'border-b border-border bg-bg-primary/95 shadow-lg' : 'bg-bg-primary/90'}`}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:p-3 focus:text-text-inverse">Pular para o conteúdo</a>
      <nav aria-label="Navegação principal" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#home" onClick={() => setIsMenuOpen(false)} aria-label="Thiago Schneider, início" className="shrink-0 font-display text-2xl hover:text-primary">T<span className="text-primary">.</span>S</a>
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}><a href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined} className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:text-primary ${activeSection === item.id ? 'text-primary' : 'text-text-secondary'}`}>{item.label}</a></li>
            ))}
          </ul>
          <button ref={menuButtonRef} type="button" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((open) => !open)} className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 hover:text-primary lg:hidden">
            <span className="sr-only">{isMenuOpen ? 'Fechar menu principal' : 'Abrir menu principal'}</span>
            <span aria-hidden="true" className="text-2xl leading-none">{isMenuOpen ? '×' : '☰'}</span>
          </button>
        </div>
        <div id="mobile-navigation" hidden={!isMenuOpen} className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border pb-3 lg:hidden">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}><a href={`#${item.id}`} onClick={() => setIsMenuOpen(false)} aria-current={activeSection === item.id ? 'location' : undefined} className={`block rounded-lg px-3 py-3 hover:text-primary ${activeSection === item.id ? 'text-primary' : 'text-text-secondary'}`}>{item.label}</a></li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
