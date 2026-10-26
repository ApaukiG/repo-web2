import { useEffect } from 'react'

export default function Modal({ open, title, onClose, children, footer }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-navy/50 backdrop-blur-[2px]"
        aria-label="Cerrar"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative z-10 w-full max-w-lg animate-fade-up rounded-3xl bg-beige-soft p-6 shadow-xl"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 id="modal-title" className="font-display text-xl font-bold text-navy">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-2 text-2xl leading-none text-navy/60 transition hover:bg-beige hover:text-navy"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
        <div className="text-navy/80">{children}</div>
        {footer ? <div className="mt-6 flex flex-wrap justify-end gap-3">{footer}</div> : null}
      </div>
    </div>
  )
}
