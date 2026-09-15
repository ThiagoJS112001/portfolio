'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import CertificateModal from './CertificateModal'

type Category = 'Cloud' | 'Idiomas' | 'APEX' | 'Geral'

interface Certification {
  title: string
  issuer: string
  date: string
  expiration?: string
  category: Category
  highlight?: boolean
  imageUrl: string
}

const categoryStyles: Record<
  Category,
  { badge: string; icon: string; gradient: string; border: string }
> = {
  Cloud: {
    badge: 'bg-red-50 text-red-700 border-red-200',
    icon: '☁️',
    gradient: 'from-red-500 to-orange-500',
    border: 'hover:border-red-300',
  },
  APEX: {
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    icon: '⚡',
    gradient: 'from-orange-500 to-amber-500',
    border: 'hover:border-orange-300',
  },
  Idiomas: {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: '🌐',
    gradient: 'from-emerald-500 to-teal-500',
    border: 'hover:border-emerald-300',
  },
  Geral: {
    badge: 'bg-slate-50 text-slate-700 border-slate-200',
    icon: '🎓',
    gradient: 'from-slate-500 to-gray-500',
    border: 'hover:border-slate-300',
  },
}

const certifications: Certification[] = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'mai de 2026',
    expiration: 'mai de 2028',
    category: 'Cloud',
    highlight: true,
    imageUrl: '/images/certifications/oracle-oci-foundations.png',
  },
  {
    title: 'EF SET English Certificate 62/100 (C1 Advanced)',
    issuer: 'EF SET',
    date: 'out de 2024',
    category: 'Idiomas',
    imageUrl: '/images/certifications/efset-english-c1.png',
  },
  {
    title: 'Oracle APEX do básico ao avançado',
    issuer: 'Udemy',
    date: 'nov de 2023',
    category: 'APEX',
    imageUrl: '/images/certifications/oracle-apex-udemy-2023.png',
  },
  {
    title: 'Fisk Centro de Ensino',
    issuer: 'Fisk',
    date: 'jun de 2019',
    category: 'Geral',
    imageUrl: '/images/certifications/fisk-2019.png',
  },
  {
    title: 'The Complete Oracle APEX Fundamentals Course (2022)',
    issuer: 'Udemy',
    date: 'ago de 2022',
    category: 'APEX',
    imageUrl: '/images/certifications/oracle-apex-fundamentals-2022.png',
  },
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpen = (cert: Certification) => {
    setSelectedCert(cert)
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedCert(null), 300)
  }

  return (
    <section id="certifications" className="py-20 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Certificações & Cursos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary mb-12 max-w-2xl mx-auto"
        >
          Formação contínua e validações oficiais que comprovam minha evolução
          técnica e profissional.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const style = categoryStyles[cert.category]
            return (
              <motion.button
                key={index}
                type="button"
                onClick={() => handleOpen(cert)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-border ${style.border} transition-all duration-300 hover:-translate-y-1 group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                aria-label={`Ver certificado: ${cert.title}`}
              >
                {cert.highlight && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Destaque
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${style.gradient} flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    {style.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${style.badge}`}
                  >
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-2 leading-tight">
                  {cert.title}
                </h3>

                <div className="flex items-center text-text-secondary text-sm mb-3">
                  <svg
                    className="w-4 h-4 mr-1.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className="font-medium">{cert.issuer}</span>
                </div>

                <div className="flex items-center justify-between text-text-light text-sm pt-3 border-t border-border">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Emitida em {cert.date}</span>
                  </div>
                  <svg
                    className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>

                {cert.expiration && (
                  <div className="mt-2 flex items-center text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2 py-1.5">
                    <svg
                      className="w-3.5 h-3.5 mr-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Expira em {cert.expiration}</span>
                  </div>
                )}
              </motion.button>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary text-sm">
            � Clique em qualquer certificado para visualizar
          </p>
        </motion.div>
      </div>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={handleClose}
        certificate={selectedCert}
      />
    </section>
  )
}
