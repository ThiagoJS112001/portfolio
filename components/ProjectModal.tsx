'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
  }
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  
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
  }, [isOpen])

  // Control body overflow when modal is open
  useEffect(() => {
    if (isOpen) {
      // Previne scroll do body quando modal está aberto
      document.body.style.overflow = 'hidden'
    } else {
      // Restaura scroll do body quando modal fecha
      document.body.style.overflow = 'unset'
    }

    // Cleanup quando componente é desmontado
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Description */}
          <div className="p-8">
            <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
