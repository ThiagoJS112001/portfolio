'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    images: string[]
    description: string
  }
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isOpen, currentImageIndex])

  // Reset image index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0)
    }
  }, [isOpen])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Handle swipe gestures
  const handleDragStart = () => {
    setIsDragging(true)
  }

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false)
    const threshold = 30 // reduced threshold for better mobile sensitivity
    
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        // Swiped right, go to previous image
        prevImage()
      } else {
        // Swiped left, go to next image
        nextImage()
      }
    }
  }

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
          className="relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl"
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

          {/* Carousel */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] bg-gray-100 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                whileDrag={{ 
                  cursor: "grabbing",
                  scale: 0.95
                }}
                style={{
                  filter: isDragging ? 'brightness(0.8)' : 'brightness(1)',
                  transition: 'filter 0.2s ease'
                }}
                className="w-full h-full object-contain cursor-grab select-none touch-pan-x"
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 group z-10"
                  title="Imagem anterior (← ou seta esquerda)"
                >
                  <svg className="w-6 h-6 text-gray-700 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 group z-10"
                  title="Próxima imagem (→ ou seta direita)"
                >
                  <svg className="w-6 h-6 text-gray-700 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Swipe indicators for mobile */}
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 lg:hidden pointer-events-none">
                  <motion.div
                    animate={{ 
                      x: [-5, 5, -5],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-white/60"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.div>
                </div>
                
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 lg:hidden pointer-events-none">
                  <motion.div
                    animate={{ 
                      x: [5, -5, 5],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="text-white/60"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-white text-sm rounded-full font-medium">
              {currentImageIndex + 1} / {project.images.length}
            </div>

            {/* Navigation hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/60 text-white text-xs rounded-full">
              <span className="hidden lg:inline">Use ← → ou clique nas setas</span>
              <span className="lg:hidden">Arraste para navegar</span>
            </div>
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-3 justify-center overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-24 h-18 lg:w-28 lg:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-primary shadow-md scale-105'
                        : 'border-gray-200 hover:border-gray-300 hover:scale-102'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="p-6 border-t border-gray-200">
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
