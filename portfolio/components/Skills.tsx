'use client'

type SkillItem = {
  name: string
  level: 'Bon' | 'Inter.' | 'Base'
  logo?: string
  icon?: string
  invert?: boolean
}

type SkillCategory = {
  icon: string
  gradient: string
  items: SkillItem[]
}

const skills: Record<string, SkillCategory> = {
  Frontend: {
    icon: 'ti-layout',
    gradient: 'linear-gradient(150deg,#4C1D95,#7C3AED)',
    items: [
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 'Bon' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 'Bon' },
      { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 'Bon' },
      { name: 'React JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Bon' },
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Inter.' },
      { name: 'Vue JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 'Inter.' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 'Inter.', invert: true },
    ],
  },
  'Backend & Base de données': {
    icon: 'ti-server',
    gradient: 'linear-gradient(150deg,#7C3AED,#C026D3,#3B0764)',
    items: [
      { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', level: 'Inter.' },
      { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', level: 'Inter.' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Bon' },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 'Inter.' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 'Bon' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 'Inter.' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 'Inter.' },
    ],
  },
  'Design & Outils': {
    icon: 'ti-palette',
    gradient: 'linear-gradient(150deg,#C026D3,#0F766E)',
    items: [
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 'Bon' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 'Bon' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 'Bon', invert: true },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 'Bon' },
    ],
  },
}

const levelStyle: Record<SkillItem['level'], { bg: string; color: string }> = {
  'Bon': { bg: 'var(--lv-bon-bg)', color: 'var(--lv-bon-c)' },
  'Inter.': { bg: 'var(--lv-inter-bg)', color: 'var(--lv-inter-c)' },
  'Base': { bg: 'var(--lv-base-bg)', color: 'var(--lv-base-c)' },
}

export default function Skills() {
  return (
    <section id="competences" className="px-5 py-16 md:px-8 md:py-24" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[11px] uppercase tracking-[3px] text-[#C026D3]">Expertise</p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl" style={{ color: 'var(--text)' }}>
            Mes <span className="text-[#E879F9]">compétences</span>
          </h2>
        </div>

        <div className="grid items-start gap-5 md:grid-cols-3">
          {Object.entries(skills).map(([cat, data]) => (
            <div key={cat} className="overflow-hidden rounded-[14px] border" style={{ borderColor: 'var(--border)' }}>
              <div className="px-3.5 py-5 text-center" style={{ background: data.gradient }}>
                <div className="mx-auto mb-2 flex h-[42px] w-[42px] items-center justify-center rounded-[10px]" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <i className={`ti ${data.icon} text-white text-xl`} />
                </div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-white">{cat}</p>
              </div>
              <div className="p-4" style={{ background: 'var(--skill-body)' }}>
                {data.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 py-2"
                    style={{ borderBottom: i < data.items.length - 1 ? '0.5px solid var(--border)' : 'none' }}
                  >
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="flex-shrink-0 object-contain"
                        style={item.invert ? { filter: 'invert(70%)' } : {}}
                      />
                    ) : (
                      <i className={`ti ${item.icon} flex-shrink-0 text-[#C026D3] text-[18px]`} />
                    )}
                    <span className="flex-1 text-[12px] font-medium" style={{ color: 'var(--text2)' }}>{item.name}</span>
                    <span
                      className="whitespace-nowrap rounded-lg px-2 py-0.5 text-[10px] font-medium"
                      style={{ background: levelStyle[item.level].bg, color: levelStyle[item.level].color }}
                    >
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
