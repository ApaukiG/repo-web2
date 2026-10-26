import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'
import TestimonialCard from '../components/TestimonialCard'
import { pillars, stats, testimonials } from '../data/mockData'

export default function Inicio() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % testimonials.length)
    }, 5500)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div>
      {/* Hero: brand-first, one composition */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,#c99a6b33,transparent_50%),radial-gradient(ellipse_at_80%_10%,#2b355344,transparent_45%),linear-gradient(165deg,#efe6e1_0%,#e4d5cc_45%,#d4c4b8_100%)]"
          aria-hidden="true"
        />
        <div
          className="animate-soft-pulse absolute -right-16 top-10 h-72 w-72 rounded-full bg-caramel/20 blur-2xl"
          aria-hidden="true"
        />
        <div
          className="animate-float absolute -left-10 bottom-0 h-56 w-56 rounded-[40%] bg-navy/10 blur-xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
          <p className="animate-fade-up font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl">
            Primera Oportunidad
          </p>
          <h1 className="animate-fade-up mt-5 max-w-2xl font-display text-2xl font-bold leading-snug tracking-tight text-navy/90 sm:text-3xl md:text-[2rem] [animation-delay:80ms]">
            Tu primera oportunidad no debería exigir experiencia
          </h1>
          <p className="animate-fade-up mt-4 max-w-xl text-base leading-relaxed text-navy/75 sm:text-lg [animation-delay:140ms]">
            Capacitación, mentores y vacantes junior para recién egresados en Ecuador.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-3 [animation-delay:200ms]">
            <Link
              to="/mi-panel"
              className="rounded-2xl bg-navy px-6 py-3.5 text-sm font-semibold text-beige shadow-sm transition hover:-translate-y-0.5 hover:bg-navy-dark"
            >
              Soy joven
            </Link>
            <Link
              to="/empresas"
              className="rounded-2xl border-2 border-navy/20 bg-white/50 px-6 py-3.5 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:border-caramel hover:bg-white"
            >
              Soy empresa
            </Link>
          </div>
        </div>
      </section>

      {/* INEC counters */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="stats-title">
        <h2 id="stats-title" className="font-display text-2xl font-bold text-navy sm:text-3xl">
          El panorama juvenil
        </h2>
        <p className="mt-2 max-w-2xl text-navy/70">
          Indicadores oficiales INEC. Solo mostramos las cifras validadas del proyecto.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.id}
              className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-navy/5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.suffix === '%' || s.suffix === 'M' ? 1 : 0}
                />
              </p>
              <p className="mt-2 text-sm leading-snug text-navy/75">{s.label}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-caramel">
                {s.source}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-navy py-16 text-beige" aria-labelledby="pillars-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="pillars-title" className="font-display text-2xl font-bold sm:text-3xl">
            Tres pilares
          </h2>
          <p className="mt-2 max-w-xl text-beige/70">Cómo acompañamos el primer paso laboral.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <article
                key={p.id}
                className="rounded-3xl bg-white/5 p-6 ring-1 ring-beige/10 transition hover:bg-white/10"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="font-display text-4xl font-extrabold text-caramel">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-beige/75">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="voices-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="voices-title" className="font-display text-2xl font-bold text-navy sm:text-3xl">
              Voces reales
            </h2>
            <p className="mt-2 text-navy/70">Testimonios en primera persona — sin inventar hechos.</p>
          </div>
          <Link
            to="/el-problema"
            className="text-sm font-semibold text-caramel-dark underline-offset-4 hover:underline"
          >
            Ver el problema →
          </Link>
        </div>

        <div className="mt-8 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} item={t} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <TestimonialCard item={testimonials[slide]} />
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Ver testimonio ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-2.5 rounded-full transition ${
                  i === slide ? 'w-8 bg-navy' : 'w-2.5 bg-navy/25'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-beige-soft py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">Empieza hoy</h2>
            <p className="mt-1 text-navy/70">Filtra vacantes junior o publica una oferta sin muro de experiencia.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/empleos"
              className="rounded-2xl bg-green px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Ver empleos
            </Link>
            <Link
              to="/capacitaciones"
              className="rounded-2xl bg-caramel px-5 py-3 text-sm font-semibold text-navy transition hover:bg-caramel-dark hover:text-beige"
            >
              Capacitaciones
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
