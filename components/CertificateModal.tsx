'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

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
    fileType?: 'image' | 'pdf'
    additionalImages?: string[]
  } | null
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificate,
}: CertificateModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageError, setImageError] = useState(false)
  const [pdfError, setPdfError] = useState(false)
  const [fileNotFound, setFileNotFound] = useState(false)

  // Lista de mídias: [principal, ...extras]
  const allMedia = certificate
    ? [certificate.imageUrl, ...(certificate.additionalImages || [])]
    : []
  const hasCarousel = allMedia.length > 1
  const currentUrl = allMedia[currentIndex] || ''

  const isPdf =
    certificate?.fileType === 'pdf' ||
    currentUrl.toLowerCase().endsWith('.pdf')

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? allMedia.length - 1 : i - 1))
    setImageError(false)
    setPdfError(false)
    setFileNotFound(false)
  }, [allMedia.length])

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i === allMedia.length - 1 ? 0 : i + 1))
    setImageError(false)
    setPdfError(false)
    setFileNotFound(false)
  }, [allMedia.length])

  // Keyboard navigation (ESC + setas)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') {
        onClose()
      } else if (hasCarousel && e.key === 'ArrowLeft') {
        goPrev()
      } else if (hasCarousel && e.key === 'ArrowRight') {
        goNext()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isOpen, onClose, hasCarousel, goPrev, goNext])

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

  // Reset current index and errors when certificate changes
  // (including when modal closes and certificate becomes null)
  useEffect(() => {
    setCurrentIndex(0)
    setImageError(false)
    setPdfError(false)
    setFileNotFound(false)
  }, [certificate])

  // Reset errors when navigating between images in the carousel
  useEffect(() => {
    setImageError(false)
    setPdfError(false)
    setFileNotFound(false)
  }, [currentIndex])

  if (!isOpen || !certificate) return null

  const fileName = currentUrl.split('/').pop() || 'certificado'

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
                {isPdf && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                    📄 PDF
                  </span>
                )}
                {hasCarousel && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    🖼️ {currentIndex + 1}/{allMedia.length}
                  </span>
                )}
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

          {/* Content - PDF, Image or Fallback */}
          <div className="relative flex-1 overflow-hidden bg-gray-50 p-4 md:p-6 flex items-center justify-center min-h-[300px]">
            {/* Carousel arrows */}
            {hasCarousel && !fileNotFound && !imageError && !pdfError && (
              <>
                <button
                  onClick={goPrev}
                  aria-label="Imagem anterior"
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
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
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  aria-label="Próxima imagem"
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
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
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {fileNotFound ? (
              <NotFoundFallback
                fileName={fileName}
                imageUrl={currentUrl}
                isPdf={isPdf}
              />
            ) : isPdf ? (
              pdfError ? (
                <PdfFallback fileName={fileName} imageUrl={currentUrl} />
              ) : (
                <div className="w-full h-full min-h-[60vh] flex flex-col">
                  <iframe
                    key={currentUrl}
                    src={`${currentUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                    title={`Certificado: ${certificate.title}`}
                    className="w-full flex-1 min-h-[500px] rounded-lg shadow-md bg-white"
                  />
                </div>
              )
            ) : imageError ? (
              <ImageFallback fileName={fileName} imageUrl={currentUrl} />
            ) : (
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentUrl}
                  src={currentUrl}
                  alt={`Certificado: ${certificate.title}`}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-md"
                  onError={() => setImageError(true)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            )}
          </div>

          {/* Carousel indicators (dots) */}
          {hasCarousel && (
            <div className="flex justify-center gap-2 py-3 bg-gray-50">
              {allMedia.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx)
                    setImageError(false)
                    setPdfError(false)
                    setFileNotFound(false)
                  }}
                  aria-label={`Ir para imagem ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Footer with actions */}
          <div className="flex items-center justify-between gap-2 p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-text-secondary truncate min-w-0">
              {fileName}
            </p>
            <div className="flex gap-2 flex-shrink-0">
              <a
                href={currentUrl}
                download={fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Baixar
              </a>
              <a
                href={currentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Abrir
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ImageFallback({
  fileName,
  imageUrl,
}: {
  fileName: string
  imageUrl: string
}) {
  return (
    <div className="text-center p-8">
      <div className="text-6xl mb-4">📜</div>
      <p className="text-text-secondary font-medium">
        Imagem do certificado não encontrada
      </p>
      <p className="text-sm text-text-light mt-2">
        Salve a imagem em{' '}
        <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
          public/images/certifications/The Complete Oracle APEX Fundamentals Course (2022)
        </code>
      </p>
      <p className="text-xs text-text-light mt-1 font-mono break-all">
        {imageUrl}
      </p>
    </div>
  )
}

function PdfFallback({
  fileName,
  imageUrl,
}: {
  fileName: string
  imageUrl: string
}) {
  return (
    <div className="text-center p-8 max-w-md">
      <div className="text-6xl mb-4">📄</div>
      <p className="text-text-secondary font-medium mb-2">
        Seu navegador não conseguiu exibir o PDF inline
      </p>
      <p className="text-sm text-text-light mb-4">
        Use os botões abaixo para baixar ou abrir em uma nova aba.
      </p>
      <p className="text-xs text-text-light font-mono break-all mb-4">
        {imageUrl}
      </p>
      <div className="flex gap-2 justify-center">
        <a
          href={imageUrl}
          download={fileName}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
        >
          Baixar PDF
        </a>
        <a
          href={imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
        >
          Abrir em nova aba
        </a>
      </div>
    </div>
  )
}

function NotFoundFallback({
  fileName,
  imageUrl,
  isPdf,
}: {
  fileName: string
  imageUrl: string
  isPdf: boolean
}) {
  return (
    <div className="text-center p-8 max-w-md">
      <div className="text-6xl mb-4">{isPdf ? '📄' : '📜'}</div>
      <p className="text-text-secondary font-medium mb-2">
        {isPdf ? 'PDF' : 'Imagem'} não encontrado(a)
      </p>
      <p className="text-sm text-text-light mb-4">
        O arquivo esperado não foi encontrado na pasta. Salve o{' '}
        {isPdf ? 'PDF' : 'arquivo de imagem'} com este nome exato:
      </p>
      <p className="text-xs text-text-light font-mono break-all bg-gray-100 px-3 py-2 rounded mb-4">
        public/images/certifications/{fileName}
      </p>
      <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-2">
        💡 Depois de salvar o arquivo, recarregue esta página.
      </p>
    </div>
  )
}
