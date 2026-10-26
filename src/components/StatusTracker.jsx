import { applicationStatuses } from '../data/mockData'

export default function StatusTracker({ status }) {
  const current = applicationStatuses.indexOf(status)

  return (
    <ol className="flex flex-wrap gap-2" aria-label={`Estado: ${status}`}>
      {applicationStatuses.map((step, i) => {
        const done = i <= current
        const active = i === current
        return (
          <li
            key={step}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              active
                ? 'bg-navy text-beige'
                : done
                  ? 'bg-green-soft text-green'
                  : 'bg-beige text-navy/45'
            }`}
          >
            {step}
          </li>
        )
      })}
    </ol>
  )
}
