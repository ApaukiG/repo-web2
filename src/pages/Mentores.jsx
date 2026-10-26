import { useState } from 'react'
import Modal from '../components/Modal'
import { mentors, youngProfile } from '../data/mockData'
import { useApp } from '../context/AppContext'

export default function Mentores() {
  const { requestMentorship } = useApp()
  const [selected, setSelected] = useState(null)
  const [note, setNote] = useState('')

  const submit = () => {
    if (!selected) return
    requestMentorship(selected.name)
    setSelected(null)
    setNote('')
  }

  return (
    <div>
      <section className="border-b border-navy/10 bg-[linear-gradient(120deg,#efe6e1,#ddd0c6)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Red de mentores
          </h1>
          <p className="mt-3 max-w-2xl text-navy/75">
            Profesionales que acompañan CV, entrevistas y el primer rol. Solicita mentoría en un
            clic (demo con confirmación).
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {mentors.map((m) => (
            <article
              key={m.id}
              className="flex flex-col rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-navy/5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy font-display font-bold text-beige">
                  {m.initials}
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-navy">{m.name}</h2>
                  <p className="text-sm text-navy/65">
                    {m.role} · {m.city}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/75">{m.bio}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {m.areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-beige px-2.5 py-0.5 text-xs font-semibold text-navy"
                  >
                    {a}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSelected(m)}
                className="mt-5 rounded-2xl bg-caramel px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-caramel-dark hover:text-beige"
              >
                Solicitar mentoría
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Young profile showcase */}
      <section className="bg-navy py-14 text-beige" aria-labelledby="profile-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="profile-title" className="font-display text-2xl font-bold sm:text-3xl">
            Perfil joven (ejemplo)
          </h2>
          <p className="mt-2 text-beige/70">
            Así ven las empresas habilidades, cursos, pasantías y proyectos — no solo un CV vacío.
          </p>

          <div className="mt-8 rounded-[2rem] bg-beige p-6 text-navy sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold">{youngProfile.name}</h3>
                <p className="text-sm text-navy/70">
                  {youngProfile.age} años · {youngProfile.career} · {youngProfile.city}
                </p>
                <p className="mt-2 max-w-xl text-navy/80">{youngProfile.headline}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-caramel-dark">
                  Habilidades
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {youngProfile.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-white px-3 py-1 text-sm font-medium ring-1 ring-navy/10"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-caramel-dark">
                  Cursos
                </h4>
                <ul className="mt-2 space-y-1 text-sm">
                  {youngProfile.courses.map((c) => (
                    <li key={c}>✓ {c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-caramel-dark">
                  Pasantías / prácticas
                </h4>
                <ul className="mt-2 space-y-2 text-sm">
                  {youngProfile.internships.map((i) => (
                    <li key={i.place}>
                      <strong>{i.place}</strong> — {i.detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-caramel-dark">
                  Proyectos
                </h4>
                <ul className="mt-2 space-y-2 text-sm">
                  {youngProfile.projects.map((p) => (
                    <li key={p.name}>
                      <strong>{p.name}</strong> — {p.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={Boolean(selected)}
        title={selected ? `Mentoría con ${selected.name}` : ''}
        onClose={() => setSelected(null)}
        footer={
          <>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-navy/70 hover:bg-beige"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={submit}
              className="rounded-xl bg-navy px-4 py-2 text-sm font-semibold text-beige hover:bg-navy-dark"
            >
              Enviar solicitud
            </button>
          </>
        }
      >
        <p className="text-sm">
          Cuéntale brevemente qué necesitas (CV, entrevista, orientación de carrera).
        </p>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          className="mt-3 w-full rounded-2xl border border-navy/15 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-caramel"
          placeholder="Ej.: Quiero practicar respuestas a “no tengo experiencia”…"
        />
      </Modal>
    </div>
  )
}
