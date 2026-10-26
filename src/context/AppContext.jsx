import { createContext, useContext, useMemo, useState } from 'react'
import { initialApplications, jobs } from '../data/mockData'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [applications, setApplications] = useState(initialApplications)
  const [toast, setToast] = useState(null)

  const showToast = (message, tone = 'success') => {
    setToast({ message, tone, id: Date.now() })
    window.setTimeout(() => setToast(null), 3200)
  }

  const applyToJob = (jobId) => {
    if (applications.some((a) => a.jobId === jobId)) {
      showToast('Ya postulaste a esta oferta.', 'info')
      return
    }
    const job = jobs.find((j) => j.id === jobId)
    setApplications((prev) => [
      {
        id: `a-${Date.now()}`,
        jobId,
        status: 'Enviada',
        updatedAt: new Date().toISOString().slice(0, 10),
        alert: `Postulación enviada a ${job?.company ?? 'la empresa'}.`,
      },
      ...prev,
    ])
    showToast('Postulación enviada. Puedes seguirla en Mi panel.')
  }

  const requestMentorship = (mentorName) => {
    showToast(`Solicitud de mentoría enviada a ${mentorName}. Te contactaremos pronto.`)
  }

  const publishOffer = () => {
    showToast('Oferta publicada. El equipo la revisará antes de mostrarla.')
  }

  const value = useMemo(
    () => ({
      applications,
      applyToJob,
      requestMentorship,
      publishOffer,
      toast,
      showToast,
      clearToast: () => setToast(null),
    }),
    [applications, toast],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp debe usarse dentro de AppProvider')
  return ctx
}
