import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/el-problema', label: 'El problema' },
  { to: '/capacitaciones', label: 'Capacitaciones' },
  { to: '/mentores', label: 'Mentores' },
  { to: '/empleos', label: 'Empleos' },
  { to: '/mi-panel', label: 'Mi panel' },
  { to: '/empresas', label: 'Empresas' },
  { to: '/nosotros', label: 'Nosotros' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-beige/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-sm font-bold text-caramel transition group-hover:scale-105">
            PO
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-navy">
            Primera Oportunidad
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-navy text-beige'
                    : 'text-navy/75 hover:bg-white/60 hover:text-navy'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-xl border border-navy/15 bg-white/50 px-3 py-2 text-sm font-semibold text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="animate-fade-in border-t border-navy/10 bg-beige px-4 py-3 lg:hidden"
          aria-label="Móvil"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-sm font-semibold ${
                      isActive ? 'bg-navy text-beige' : 'text-navy hover:bg-white/70'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
