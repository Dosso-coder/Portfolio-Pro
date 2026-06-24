const highlights = [
  { value: '8+', label: 'Projets réalisés' },
  { value: '24h', label: 'Réponse moyenne' },
  { value: '100%', label: 'Motivation' },
]

export default function About() {
  return (
    <section id="apropos" className="border-t px-5 py-16 md:px-8 md:py-24" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[3px] text-[#C026D3]">À propos</p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl" style={{ color: 'var(--text)' }}>
            Une développeuse full-stack et mobile junior .
          </h2>
        </div>

        <div>
          <p className="mb-5 text-sm leading-7 md:text-base md:leading-8" style={{ color: 'var(--text3)' }}>
            Je conçois des interfaces web claires, responsives et agréables à utiliser. J’aime transformer une idée en expérience concrète, avec une attention particulière pour la structure du code, la lisibilité et les petits détails qui rendent un site plus professionnel.
          </p>
          <p className="mb-8 text-sm leading-7 md:text-base md:leading-8" style={{ color: 'var(--text3)' }}>
           Passionnée par la création d'interfaces web fluides, réactives et esthétiques, je traduis des maquettes graphiques en expériences digitales modernes. Mon point fort réside dans l'intégration de designs minimalistes, le développement de composants UI réutilisables et la communication fluide avec les API REST. Motivée à l'idée d'intégrer une équipe collaborative pour appliquer ma rigueur technique et contribuer au cycle de vie de vos projets.</p>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-[14px] border p-4" style={{ background: 'var(--card-bg)', borderColor: 'var(--border)' }}>
                <div className="text-2xl font-medium text-[#E879F9]">{item.value}</div>
                <div className="mt-1 text-[12px]" style={{ color: 'var(--text3)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
