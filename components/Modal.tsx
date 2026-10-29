'use client'

import { ReactNode, useEffect, useRef } from 'react'

export default function Modal({ titleId, onClose, children }: {
  titleId: string
  onClose: () => void
  children: ReactNode
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-3 text-text-primary outline-none backdrop:bg-black/85 open:flex open:items-center open:justify-center sm:p-6"
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      {children}
    </dialog>
  )
}
