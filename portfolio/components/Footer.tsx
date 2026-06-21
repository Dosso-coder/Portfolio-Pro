export default function Footer() {
  return (
    <footer className="border-t px-5 py-7 md:px-8" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <span className="text-[15px] font-medium text-white">
          Sami<span className="text-[#E879F9]">.Dev</span>
        </span>
        <span className="text-[12px]" style={{ color: '#777' }}>© 2026 · Tous droits réservés</span>
        <div className="flex gap-4">
          {['LinkedIn', 'GitHub', 'Email'].map(link => (
            <a key={link} href="#" className="text-[12px] transition-colors hover:text-[#E879F9]" style={{ color: '#777', textDecoration: 'none' }}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
