'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certificate: {
    title: string
    issuer: string
    date: string
    expiration?: string
    category: string
    imageUrl: string
  } | null
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificate,
}: CertificateModalProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isOpen, onClose])

  // Control body overflow when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !certificate) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        onClick={onClose}
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
                  {certificate.category}
                </span>
                <span className="text-xs text-text-secondary">
                  Emitida em {certificate.date}
                </span>
                {certificate.expiration && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    Expira em {certificate.expiration}
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                {certificate.title}
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                {certificate.issuer}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Fechar modal"
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6 flex items-center justify-center min-h-[300px]">
            <img
              src={certificate.imageUrl}
              alt={`Certificado: ${certificate.title}`}
              className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-md"
              onError={(e) => {
                const target = e.currentTarget
                target.style.display = 'none'
                const fallback = target.nextElementSibling as HTMLElement
                if (fallback) fallback.classList.remove('hidden')
              }}
            />
            <div className="hidden text-center p-8">
              <div className="text-6xl mb-4">📜</div>
              <p className="text-text-secondary font-medium">
                Imagem do certificado não encontrada
              </p>
              <p className="text-sm text-text-light mt-2">
                Salve a imagem em{' '}
                <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                  public/images/certifications/
                </code>
              </p>
              <p className="text-xs text-text-light mt-1 font-mono">
                {certificate.imageUrl}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
