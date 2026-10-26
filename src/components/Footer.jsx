import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-navy/10 bg-navy text-beige">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold tracking-tight">Primera Oportunidad</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-beige/75">
            Plataforma para que jóvenes recién egresados en Ecuador encuentren empleo y pasantías
            sin el muro de la experiencia.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-caramel">Explorar</p>
          <ul className="mt-3 space-y-2 text-sm text-beige/80">
            <li>
              <Link className="hover:text-beige" to="/capacitaciones">
                Capacitaciones
              </Link>
            </li>
            <li>
              <Link className="hover:text-beige" to="/empleos">
                Empleos y pasantías
              </Link>
            </li>
            <li>
              <Link className="hover:text-beige" to="/empresas">
                Para empresas
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-caramel">Datos</p>
          <p className="mt-3 text-sm leading-relaxed text-beige/80">
            Indicadores de juventud, PEA, desempleo y subempleo según INEC (mayo 2026 donde aplica).
            No se inventan cifras adicionales.
          </p>
        </div>
      </div>
      <div className="border-t border-beige/10 py-4 text-center text-xs text-beige/55">
        © {new Date().getFullYear()} Primera Oportunidad · Ecuador
      </div>
    </footer>
  )
}
