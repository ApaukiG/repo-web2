import { Link } from 'react-router-dom'
import { methodology, team } from '../data/mockData'

export default function Nosotros() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-navy/10">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#c99a6b33,transparent_50%),linear-gradient(180deg,#efe6e1,#e6d8cf)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Nosotros
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy/80">
            Primera Oportunidad nace para que el primer empleo en Ecuador no dependa de años de
            experiencia que nadie pudo acumular aún.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-navy">El proyecto</h2>
        <p className="mt-4 max-w-3xl text-navy/75 leading-relaxed">
          Combinamos capacitaciones asequibles, una red de mentores y una bolsa de vacantes junior /
          pasantías. Partimos de relatos de jóvenes egresados y de profesionales de RR. HH., y los
          contrastamos con indicadores oficiales INEC (juventud 18–29, PEA, desempleo y subempleo
          juvenil). No inventamos estadísticas adicionales.
        </p>
      </section>

      <section className="bg-navy py-14 text-beige">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Metodología de validación</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {methodology.map((m) => (
              <article key={m.step} className="rounded-3xl bg-white/5 p-6 ring-1 ring-beige/10">
                <span className="font-display text-3xl font-extrabold text-caramel">{m.step}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-beige/75">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-navy">Equipo</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {team.map((t) => (
            <article
              key={t.name}
              className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-navy/5"
            >
              <div className="mb-4 h-12 w-12 rounded-2xl bg-caramel/40" aria-hidden="true" />
              <h3 className="font-display text-lg font-bold text-navy">{t.name}</h3>
              <p className="text-sm font-semibold text-caramel-dark">{t.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">{t.bio}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/mi-panel"
            className="rounded-2xl bg-navy px-5 py-3 text-sm font-semibold text-beige hover:bg-navy-dark"
          >
            Soy joven
          </Link>
          <Link
            to="/empresas"
            className="rounded-2xl border-2 border-navy/20 px-5 py-3 text-sm font-semibold text-navy hover:border-caramel"
          >
            Soy empresa
          </Link>
        </div>
      </section>
    </div>
  )
}
