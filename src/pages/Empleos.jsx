import { useMemo, useState } from 'react'
import StatusTracker from '../components/StatusTracker'
import { careers, cities, jobs, modalities } from '../data/mockData'
import { useApp } from '../context/AppContext'

export default function Empleos() {
  const { applications, applyToJob } = useApp()
  const [career, setCareer] = useState('Todas')
  const [city, setCity] = useState('Todas')
  const [modality, setModality] = useState('Todas')
  const [salary, setSalary] = useState('Todos')

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      if (career !== 'Todas' && j.career !== career) return false
      if (city !== 'Todas' && j.city !== city) return false
      if (modality !== 'Todas' && j.modality !== modality) return false
      if (salary === '400+' && j.salaryMin < 400) return false
      if (salary === '500+' && j.salaryMin < 500) return false
      return true
    })
  }, [career, city, modality, salary])

  const appsByJob = Object.fromEntries(applications.map((a) => [a.jobId, a]))

  return (
    <div>
      <section className="border-b border-navy/10 bg-[linear-gradient(160deg,#efe6e1,#e0d1c5)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Empleos y pasantías
          </h1>
          <p className="mt-3 max-w-2xl text-navy/75">
            Solo roles junior o sin experiencia. Filtra, postula y sigue el estado: Enviada → Vista →
            En revisión → Entrevista → Resultado.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-3 rounded-3xl bg-white/70 p-4 ring-1 ring-navy/5 sm:grid-cols-2 lg:grid-cols-4">
          <FilterSelect label="Carrera" value={career} onChange={setCareer} options={['Todas', ...careers]} />
          <FilterSelect label="Ciudad" value={city} onChange={setCity} options={['Todas', ...cities]} />
          <FilterSelect
            label="Modalidad"
            value={modality}
            onChange={setModality}
            options={['Todas', ...modalities]}
          />
          <FilterSelect
            label="Salario"
            value={salary}
            onChange={setSalary}
            options={['Todos', '400+', '500+']}
          />
        </div>

        <p className="mt-6 text-sm text-navy/60">{filtered.length} ofertas</p>

        <div className="mt-4 grid gap-4">
          {filtered.map((job) => {
            const app = appsByJob[job.id]
            return (
              <article
                key={job.id}
                className="rounded-3xl bg-white/85 p-5 shadow-sm ring-1 ring-navy/5 transition hover:shadow-md sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-display text-xl font-bold text-navy">{job.title}</h2>
                      {job.primeraOportunidad ? (
                        <span className="rounded-full bg-green-soft px-2.5 py-0.5 text-xs font-bold text-green">
                          Empresa Primera Oportunidad
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-navy/70">
                      {job.company} · {job.city} · {job.modality}
                    </p>
                  </div>
                  <p className="rounded-xl bg-beige px-3 py-1.5 text-sm font-semibold text-navy">
                    {job.salary}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-navy/75">{job.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-navy/5 px-2.5 py-1">{job.career}</span>
                  <span className="rounded-full bg-navy/5 px-2.5 py-1">{job.experience}</span>
                </div>

                {app ? (
                  <div className="mt-5 space-y-2 rounded-2xl bg-beige-soft p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-caramel-dark">
                      Tu postulación
                    </p>
                    <StatusTracker status={app.status} />
                    {app.alert ? (
                      <p className="rounded-xl bg-caramel/15 px-3 py-2 text-xs font-medium text-caramel-dark">
                        Alerta: {app.alert}
                      </p>
                    ) : null}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => applyToJob(job.id)}
                    className="mt-5 rounded-2xl bg-navy px-5 py-2.5 text-sm font-semibold text-beige transition hover:bg-navy-dark"
                  >
                    Postular
                  </button>
                )}
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wider text-navy/60">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-navy/15 bg-white px-3 py-2 text-sm font-medium normal-case tracking-normal text-navy outline-none focus:ring-2 focus:ring-caramel"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  )
}
