import { Link } from 'react-router-dom'
import StatusTracker from '../components/StatusTracker'
import { jobs, recommendations, youngProfile } from '../data/mockData'
import { useApp } from '../context/AppContext'

export default function MiPanel() {
  const { applications } = useApp()
  const jobMap = Object.fromEntries(jobs.map((j) => [j.id, j]))

  return (
    <div>
      <section className="border-b border-navy/10 bg-[linear-gradient(145deg,#efe6e1,#dccfc4)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-caramel-dark">Mi panel</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Hola, {youngProfile.name.split(' ')[0]}
          </h1>
          <p className="mt-3 max-w-xl text-navy/75">
            Perfil, postulaciones, cursos completados y recomendaciones personalizadas (datos mock).
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile */}
          <aside className="rounded-3xl bg-white/85 p-6 shadow-sm ring-1 ring-navy/5 lg:col-span-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy font-display text-xl font-bold text-beige">
              VR
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-navy">{youngProfile.name}</h2>
            <p className="text-sm text-navy/65">{youngProfile.career}</p>
            <p className="mt-3 text-sm text-navy/80">{youngProfile.headline}</p>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-caramel-dark">
              Habilidades
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {youngProfile.skills.map((s) => (
                <li key={s} className="rounded-full bg-beige px-2.5 py-1 text-xs font-medium">
                  {s}
                </li>
              ))}
            </ul>
            <Link
              to="/mentores"
              className="mt-6 inline-block text-sm font-semibold text-caramel-dark underline-offset-4 hover:underline"
            >
              Ver mi perfil público →
            </Link>
          </aside>

          <div className="space-y-6 lg:col-span-2">
            {/* Applications */}
            <div className="rounded-3xl bg-white/85 p-6 shadow-sm ring-1 ring-navy/5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-xl font-bold text-navy">Postulaciones</h2>
                <Link to="/empleos" className="text-sm font-semibold text-navy/60 hover:text-navy">
                  Buscar más
                </Link>
              </div>
              <ul className="mt-5 space-y-4">
                {applications.map((a) => {
                  const job = jobMap[a.jobId]
                  if (!job) return null
                  return (
                    <li key={a.id} className="rounded-2xl bg-beige-soft p-4">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <p className="font-display font-bold text-navy">{job.title}</p>
                          <p className="text-sm text-navy/65">
                            {job.company} · actualizado {a.updatedAt}
                          </p>
                        </div>
                        {job.primeraOportunidad ? (
                          <span className="rounded-full bg-green-soft px-2 py-0.5 text-[10px] font-bold uppercase text-green">
                            Primera Oportunidad
                          </span>
                        ) : null}
                      </div>
                      <div className="mt-3">
                        <StatusTracker status={a.status} />
                      </div>
                      {a.alert ? (
                        <p className="mt-2 text-xs font-medium text-caramel-dark">🔔 {a.alert}</p>
                      ) : null}
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Courses */}
            <div className="rounded-3xl bg-white/85 p-6 shadow-sm ring-1 ring-navy/5">
              <h2 className="font-display text-xl font-bold text-navy">Cursos completados</h2>
              <ul className="mt-4 space-y-2">
                {youngProfile.courses.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 rounded-2xl bg-green-soft/60 px-4 py-3 text-sm font-medium text-green"
                  >
                    <span aria-hidden="true">✓</span> {c}
                  </li>
                ))}
              </ul>
              <Link
                to="/capacitaciones"
                className="mt-4 inline-block text-sm font-semibold text-caramel-dark hover:underline"
              >
                Explorar más cursos
              </Link>
            </div>

            {/* Recommendations */}
            <div className="rounded-3xl bg-navy p-6 text-beige shadow-sm">
              <h2 className="font-display text-xl font-bold">Recomendaciones</h2>
              <ul className="mt-4 space-y-3">
                {recommendations.map((r) => (
                  <li key={r.id} className="rounded-2xl bg-white/10 p-4">
                    <p className="font-semibold">{r.title}</p>
                    <p className="mt-1 text-sm text-beige/70">{r.reason}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
