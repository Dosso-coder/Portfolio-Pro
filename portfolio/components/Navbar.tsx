'use client'

interface NavbarProps {
  isDark: boolean
  onToggleTheme: () => void
}

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  return (
    <nav
      style={{
        background: 'color-mix(in srgb, var(--bg) 88%, transparent)',
        borderBottom: '0.5px solid var(--border)',
      }}
      className="sticky top-0 z-40 w-full backdrop-blur-xl transition-all"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <span className="text-[17px] font-medium whitespace-nowrap" style={{ color: 'var(--text)' }}>
          Sami<span className="text-[#C026D3]">.</span>Dev
        </span>

        <div className="hidden flex-1 justify-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] hover:text-[#E879F9] transition-colors whitespace-nowrap"
              style={{ color: 'var(--text3)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button
            onClick={onToggleTheme}
            className="flex cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-1.5 transition-all"
            style={{ background: 'var(--bg3)', borderColor: 'var(--border2)' }}
            aria-label="Changer le thème"
          >
            <span className="text-sm">{isDark ? '🌙' : '☀️'}</span>
            <div
              className="relative h-[16px] w-[30px] flex-shrink-0 rounded-full transition-all"
              style={{ background: isDark ? '#2a1a42' : '#e9d5ff' }}
            >
              <div
                className="absolute top-[2.5px] h-[11px] w-[11px] rounded-full bg-[#C026D3] transition-transform"
                style={{ left: '2.5px', transform: isDark ? 'translateX(0)' : 'translateX(14px)' }}
              />
            </div>
            <span className="hidden text-[10px] tracking-wide sm:inline" style={{ color: 'var(--text3)' }}>
              {isDark ? 'SOMBRE' : 'CLAIR'}
            </span>
          </button>

          <a
            href="#contact"
            className="whitespace-nowrap rounded-full border-0 bg-gradient-to-br from-[#9333EA] to-[#C026D3] px-4 py-2 text-[12px] font-medium text-white"
          >
            Me contacter
          </a>
        </div>
      </div>
    </nav>
  )
}
