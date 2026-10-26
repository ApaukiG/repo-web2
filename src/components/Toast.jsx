import { useApp } from '../context/AppContext'

export default function Toast() {
  const { toast, clearToast } = useApp()
  if (!toast) return null

  const tones = {
    success: 'bg-green text-white',
    info: 'bg-navy text-beige',
    error: 'bg-navy text-beige',
  }

  return (
    <div
      role="status"
      className="fixed bottom-6 right-6 z-[100] max-w-sm animate-fade-up rounded-2xl px-5 py-4 shadow-lg"
    >
      <div className={`rounded-2xl px-4 py-3 ${tones[toast.tone] || tones.success}`}>
        <div className="flex items-start gap-3">
          <p className="text-sm font-medium leading-snug">{toast.message}</p>
          <button
            type="button"
            onClick={clearToast}
            className="shrink-0 text-white/80 transition hover:text-white"
            aria-label="Cerrar aviso"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
