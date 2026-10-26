import { useState } from 'react'
import { companyBenefits, careers, cities, modalities } from '../data/mockData'
import { useApp } from '../context/AppContext'

const empty = {
  company: '',
  title: '',
  career: careers[0],
  city: cities[0],
  modality: modalities[0],
  salary: '',
  description: '',
  primeraOportunidad: true,
}

export default function ParaEmpresas() {
  const { publishOffer } = useApp()
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.company.trim()) next.company = 'Indica el nombre de la empresa'
    if (!form.title.trim()) next.title = 'Indica el cargo'
    if (!form.description.trim() || form.description.trim().length < 20) {
      next.description = 'Describe la oferta (mín. 20 caracteres)'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    publishOffer()
    setSuccess(true)
    setForm(empty)
  }

  return (
    <div>
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,#2b3553,#3a4568)] text-beige">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Para empresas
          </h1>
          <p className="mt-3 max-w-2xl text-beige/75">
            Publica roles junior y pasantías reales. El sello Empresa Primera Oportunidad destaca a
            quienes no exigen años de experiencia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-navy">Beneficios</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {companyBenefits.map((b) => (
            <article
              key={b.title}
              className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-navy/5"
            >
              <h3 className="font-display text-lg font-bold text-navy">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/10 bg-beige-soft py-14" aria-labelledby="form-title">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 id="form-title" className="font-display text-2xl font-bold text-navy">
            Publicar una oferta
          </h2>
          <p className="mt-2 text-sm text-navy/70">Formulario demo: validación y éxito en el cliente.</p>

          {success ? (
            <div
              role="status"
              className="mt-6 rounded-3xl bg-green-soft p-6 text-green animate-fade-up"
            >
              <p className="font-display text-lg font-bold">¡Oferta recibida!</p>
              <p className="mt-1 text-sm">
                Gracias. En producción el equipo revisaría la vacante antes de publicarla en la bolsa.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-4 rounded-xl bg-green px-4 py-2 text-sm font-semibold text-white"
              >
                Publicar otra
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/5" noValidate>
              <Field label="Empresa" error={errors.company}>
                <input
                  value={form.company}
                  onChange={set('company')}
                  className="field"
                  placeholder="Nombre comercial"
                />
              </Field>
              <Field label="Cargo" error={errors.title}>
                <input
                  value={form.title}
                  onChange={set('title')}
                  className="field"
                  placeholder="Ej.: Asistente administrativo junior"
                />
              </Field>
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Carrera">
                  <select value={form.career} onChange={set('career')} className="field">
                    {careers.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Ciudad">
                  <select value={form.city} onChange={set('city')} className="field">
                    {cities.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Modalidad">
                  <select value={form.modality} onChange={set('modality')} className="field">
                    {modalities.map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Rango salarial / ayuda económica">
                <input
                  value={form.salary}
                  onChange={set('salary')}
                  className="field"
                  placeholder="USD 450–550"
                />
              </Field>
              <Field label="Descripción" error={errors.description}>
                <textarea
                  value={form.description}
                  onChange={set('description')}
                  rows={4}
                  className="field"
                  placeholder="Responsabilidades, inducción, qué no se exige experiencia previa…"
                />
              </Field>
              <label className="flex items-center gap-3 text-sm font-medium text-navy">
                <input
                  type="checkbox"
                  checked={form.primeraOportunidad}
                  onChange={set('primeraOportunidad')}
                  className="h-4 w-4 rounded border-navy/30 text-green focus:ring-caramel"
                />
                Solicitar sello Empresa Primera Oportunidad
              </label>
              <button
                type="submit"
                className="w-full rounded-2xl bg-navy py-3 text-sm font-semibold text-beige transition hover:bg-navy-dark sm:w-auto sm:px-8"
              >
                Publicar oferta
              </button>
            </form>
          )}
        </div>
      </section>

      <style>{`
        .field {
          width: 100%;
          margin-top: 0.35rem;
          border-radius: 0.9rem;
          border: 1px solid color-mix(in srgb, #2b3553 15%, transparent);
          background: #fff;
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          outline: none;
        }
        .field:focus {
          box-shadow: 0 0 0 2px #c99a6b;
        }
      `}</style>
    </div>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block text-sm font-semibold text-navy">
      {label}
      {children}
      {error ? <span className="mt-1 block text-xs font-medium text-red-700">{error}</span> : null}
    </label>
  )
}
