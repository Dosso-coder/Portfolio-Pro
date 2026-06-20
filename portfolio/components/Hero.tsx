const heroPhotoSrc = '/images/image1.png'

export default function Hero() {
  return (
    <>
      <section
        id="accueil"
        className="px-5 py-14 md:px-8 md:py-20"
        style={{ background: 'var(--bg)' }}
      >
        <div className={`mx-auto grid w-full max-w-6xl items-center gap-12 ${heroPhotoSrc ? 'md:grid-cols-[1.05fr_0.95fr]' : ''}`}>
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#C026D3]" />
              <span className="text-[11px] tracking-[3px] text-[#C026D3] uppercase">Disponible</span>
            </div>

          <h2 className="mb-1 text-3xl font-medium tracking-tight md:text-5xl" style={{ color: 'var(--text)' }}>
           Dosso Djeneba Samira
          </h2>
          <p className="text-[20px] font-medium tracking-widest text-[#E879F9] mb-4">
            Développeuse web et mobile Junior
          </p>

          {/* <h1 className="mb-5 text-2xl font-medium leading-tight tracking-tight md:text-6xl" style={{ color: 'var(--text)' }}>
            Je code des<br />
            expériences web<br />
            <em className="text-[#E879F9] not-italic">qui marquent.</em>
          </h1> */}

          <p className="mb-8 max-w-xl text-base leading-8" style={{ color: 'var(--text3)' }}>
            Passionnée par le code propre et les interfaces élégantes, je transforme
            des idées en produits digitaux ambitieux.
          </p>

          <div className="flex gap-2.5 flex-wrap">
            <a href="#projets" className="rounded-full border-0 bg-gradient-to-br from-[#9333EA] to-[#C026D3] px-5 py-3 text-[13px] font-medium text-white">
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="rounded-full border px-5 py-3 text-[13px] font-medium"
              style={{ background: 'transparent', color: '#C026D3', borderColor: '#9333EA' }}
            >
              Télécharger CV
            </a>
          </div>
        </div>

        {heroPhotoSrc && (
          <div className="flex min-h-[360px] items-center justify-center md:min-h-[460px]">
            <div
              className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full md:h-[390px] md:w-[390px]"
              style={{ background: 'var(--bubble-bg)', border: '2.5px dashed var(--bubble-border)' }}
            >
              <div className="relative flex h-[244px] w-[244px] items-center justify-center overflow-hidden rounded-full text-[46px] font-medium text-white md:h-[314px] md:w-[314px] md:text-[64px]">
                <img src={heroPhotoSrc} alt="Marie Dupont" className="absolute inset-0 h-full w-full rounded-full object-cover" />
              </div>

              <div
                className="absolute right-0 top-3 flex items-center gap-2 rounded-xl border px-3 py-2 md:-right-6 md:top-8"
                style={{ background: 'var(--chip-bg)', borderColor: 'var(--chip-border)', boxShadow: '0 4px 20px rgba(192,38,211,0.1)' }}
              >
                <i className="ti ti-briefcase text-[#C026D3] text-sm" />
                <div>
                  <div className="text-[13px] font-medium" style={{ color: 'var(--text)' }}>8+</div>
                  <div className="text-[11px]" style={{ color: 'var(--text4)' }}>Projets</div>
                </div>
              </div>
              <div
                className="absolute bottom-5 left-0 flex items-center gap-2 rounded-xl border px-3 py-2 md:-left-8 md:bottom-12"
                style={{ background: 'var(--chip-bg)', borderColor: 'var(--chip-border)', boxShadow: '0 4px 20px rgba(192,38,211,0.1)' }}
              >
                <i className="ti ti-award text-[#C026D3] text-sm" />
                <div>
                  <div className="text-[13px] font-medium" style={{ color: 'var(--text)' }}>100%</div>
                  <div className="text-[11px]" style={{ color: 'var(--text4)' }}>Investie</div>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </section>

      <div className="border-y px-5 py-4 md:px-8" style={{ background: 'linear-gradient(135deg,#7C3AED,#C026D3,#EC4899)', borderColor: 'var(--border)' }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-5 md:justify-between">
          {[
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
          ].map((t) => (
            <div key={t.name} className="flex items-center gap-1.5 text-[12px] text-white font-medium opacity-90">
              <img src={t.icon} alt={t.name} width={16} height={16} />
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
