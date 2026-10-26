export default function TestimonialCard({ item }) {
  const isYoung = item.type === 'joven'

  return (
    <article className="flex h-full flex-col rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy font-display text-lg font-bold text-beige"
          aria-hidden="true"
        >
          {item.initials}
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-navy">{item.name}</h3>
          <p className="text-sm text-navy/70">
            {item.age ? `${item.age} años · ` : ''}
            {item.role}
          </p>
        </div>
      </div>
      <span
        className={`mb-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
          isYoung ? 'bg-caramel/25 text-caramel-dark' : 'bg-green-soft text-green'
        }`}
      >
        {isYoung ? 'Jóvenes' : 'Expertos'}
      </span>
      <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-navy/85">
        “{item.quote}”
      </blockquote>
    </article>
  )
}
