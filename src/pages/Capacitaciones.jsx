import { useMemo, useState } from 'react'
import { careers, courses, employmentTips, interviewAreas } from '../data/mockData'
import { useApp } from '../context/AppContext'

export default function Capacitaciones() {
  const { showToast } = useApp()
  const [career, setCareer] = useState('Todas')
  const [areaId, setAreaId] = useState(interviewAreas[0].id)
  const [qIndex, setQIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState(null)

  const filtered = useMemo(() => {
    if (career === 'Todas') return courses
    return courses.filter((c) => c.career === career)
  }, [career])

  const area = interviewAreas.find((a) => a.id === areaId) ?? interviewAreas[0]
  const question = area.questions[qIndex]

  const evaluate = () => {
    const text = answer.trim().toLowerCase()
    if (text.length < 40) {
      setFeedback({
        tone: 'warn',
        title: 'Necesitas más detalle',
        body: 'Intenta una respuesta de al menos unas frases. Usa el tip y un ejemplo concreto.',
      })
      return
    }
    const hits = question.goodSignals.filter((s) => text.includes(s.toLowerCase()))
    const score = Math.min(100, 45 + hits.length * 18 + Math.min(20, Math.floor(text.length / 20)))
    setFeedback({
      tone: score >= 70 ? 'good' : 'mid',
      title: score >= 70 ? 'Buena base' : 'Vas por buen camino',
      body:
        hits.length > 0
          ? `Detectamos señales positivas: ${hits.join(', ')}. ${question.tip}`
          : `Incluye ideas como: ${question.goodSignals.join(', ')}. ${question.tip}`,
      score,
    })
  }

  return (
    <div>
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,#efe6e1,#e5d4c8)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Capacitaciones
          </h1>
          <p className="mt-3 max-w-2xl text-navy/75">
            Cursos gratuitos o asequibles, simulador de entrevistas y una guía para conseguir empleo
            sin experiencia.
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" aria-labelledby="catalog-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="catalog-title" className="font-display text-2xl font-bold text-navy">
              Catálogo
            </h2>
            <p className="mt-1 text-sm text-navy/65">{filtered.length} cursos</p>
          </div>
          <label className="flex flex-col gap-1 text-sm font-medium text-navy">
            Carrera
            <select
              value={career}
              onChange={(e) => setCareer(e.target.value)}
              className="rounded-xl border border-navy/15 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-caramel"
            >
              <option>Todas</option>
              {careers.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <article
              key={c.id}
              className="flex flex-col rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-navy/5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-beige px-2.5 py-0.5 text-xs font-semibold text-navy">
                  {c.career}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    c.price === 0 ? 'bg-green-soft text-green' : 'bg-caramel/20 text-caramel-dark'
                  }`}
                >
                  {c.level}
                  {c.price > 0 ? ` · USD ${c.price}` : ''}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-navy">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm text-navy/70">{c.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-navy/50">{c.duration}</span>
                <button
                  type="button"
                  onClick={() => showToast(`“${c.title}” agregado a tu panel (demo).`)}
                  className="rounded-xl bg-navy px-3 py-2 text-xs font-semibold text-beige transition hover:bg-navy-dark"
                >
                  Inscribirme
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Interview simulator */}
      <section className="bg-navy py-14 text-beige" aria-labelledby="sim-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="sim-title" className="font-display text-2xl font-bold sm:text-3xl">
            Simulador de entrevistas
          </h2>
          <p className="mt-2 max-w-xl text-beige/70">
            Elige un área, responde y recibe tips + feedback inmediato (mock en el navegador).
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[240px_1fr]">
            <div className="flex flex-row flex-wrap gap-2 lg:flex-col">
              {interviewAreas.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => {
                    setAreaId(a.id)
                    setQIndex(0)
                    setAnswer('')
                    setFeedback(null)
                  }}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                    areaId === a.id
                      ? 'bg-caramel text-navy'
                      : 'bg-white/10 text-beige hover:bg-white/15'
                  }`}
                >
                  {a.name}
                </button>
              ))}
            </div>

            <div className="rounded-3xl bg-beige p-6 text-navy">
              <p className="text-xs font-semibold uppercase tracking-wider text-caramel-dark">
                Pregunta {qIndex + 1} de {area.questions.length}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold">{question.q}</h3>
              <p className="mt-3 rounded-2xl bg-white/80 p-3 text-sm text-navy/70">
                <strong className="text-navy">Tip:</strong> {question.tip}
              </p>
              <label className="mt-4 block text-sm font-medium">
                Tu respuesta
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-navy/15 bg-white p-3 outline-none focus:ring-2 focus:ring-caramel"
                  placeholder="Escribe como si hablaras con la persona de RR. HH…"
                />
              </label>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={evaluate}
                  className="rounded-2xl bg-green px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Recibir feedback
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setQIndex((i) => (i + 1) % area.questions.length)
                    setAnswer('')
                    setFeedback(null)
                  }}
                  className="rounded-2xl border border-navy/20 px-5 py-2.5 text-sm font-semibold transition hover:bg-white"
                >
                  Siguiente pregunta
                </button>
              </div>
              {feedback ? (
                <div
                  className={`mt-5 rounded-2xl p-4 text-sm ${
                    feedback.tone === 'good'
                      ? 'bg-green-soft text-green'
                      : feedback.tone === 'warn'
                        ? 'bg-caramel/20 text-caramel-dark'
                        : 'bg-navy/5 text-navy'
                  }`}
                >
                  <p className="font-display font-bold">
                    {feedback.title}
                    {feedback.score != null ? ` · ${feedback.score}/100` : ''}
                  </p>
                  <p className="mt-1 leading-relaxed opacity-90">{feedback.body}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" aria-labelledby="guide-title">
        <h2 id="guide-title" className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Cómo conseguir empleo sin experiencia
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {employmentTips.map((t) => (
            <article
              key={t.title}
              className="rounded-3xl border border-navy/10 bg-white/60 p-6 transition hover:border-caramel/40"
            >
              <h3 className="font-display text-lg font-bold text-navy">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">{t.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
