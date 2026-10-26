import TestimonialCard from '../components/TestimonialCard'
import { causes, testimonials } from '../data/mockData'

export default function ElProblema() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-navy/10">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#c99a6b28,transparent_40%),linear-gradient(180deg,#efe6e1,#e8ddd6)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-caramel-dark">El problema</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Tres causas validadas detrás del desempleo y subempleo juvenil
          </h1>
          <p className="mt-4 max-w-2xl text-navy/75">
            Relatos de jóvenes y expertos en Ecuador. Las cifras de contexto están en Inicio (INEC);
            aquí explicamos el porqué con evidencia cualitativa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {causes.map((c, i) => (
            <article
              key={c.id}
              className="relative flex flex-col rounded-[2rem] bg-white/75 p-7 shadow-sm ring-1 ring-navy/5"
            >
              <span className="absolute -top-3 left-7 rounded-full bg-navy px-3 py-1 font-display text-sm font-bold text-caramel">
                Causa {i + 1}
              </span>
              <h2 className="mt-4 font-display text-xl font-bold text-navy">{c.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/75">{c.description}</p>
              <blockquote className="mt-6 rounded-2xl bg-beige p-4 text-sm italic text-navy/85">
                “{c.quote}”
                <footer className="mt-2 not-italic text-xs font-semibold text-caramel-dark">
                  — {c.quoteAuthor}
                </footer>
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 text-beige">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Entrevistas en primera persona</h2>
          <p className="mt-2 max-w-2xl text-beige/70">
            Etiquetas de color: <span className="text-caramel">Jóvenes</span> y{' '}
            <span className="text-green">Expertos</span>.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.id} className="[&_article]:bg-beige [&_article]:text-navy">
                <TestimonialCard item={t} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
