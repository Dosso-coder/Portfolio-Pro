const contactPhotoSrc = '/images/image1.png'
const contactEmail = 'djeneba.dosso@epitch.eu'

export default function Contact() {
  return (
    <section id="contact" className="border-t px-5 py-16 md:px-8 md:py-24" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[11px] uppercase tracking-[3px] text-[#C026D3]">Contact</p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl" style={{ color: 'var(--text)' }}>
            Travaillons <span className="text-[#E879F9]">ensemble</span>
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div
                className="relative flex h-[82px] w-[82px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 p-2 text-[18px] font-medium text-white"
                style={{
                  background: 'linear-gradient(135deg,#7C3AED,#C026D3)',
                  borderColor: '#9333EA',
                }}
              >
                <img src={contactPhotoSrc} alt="Marie Dupont" className="h-full w-full rounded-full object-cover" />
              </div>
              <div>
                <div className="text-lg font-medium" style={{ color: 'var(--text)' }}>Dosso Djeneba Samira</div>
                <div className="mt-0.5 text-[12px] text-[#C026D3]">Développeuse web et mobile Junior</div>
              </div>
            </div>

            <p className="mb-6 max-w-md text-sm leading-7" style={{ color: 'var(--text3)' }}>
              Que ce soit pour un stage, une alternance ou un projet freelance — je suis disponible .
            </p>

            {[
              { icon: 'ti-mail', label: 'Email', value: contactEmail },
              { icon: 'ti-map-pin', label: 'Localisation', value: 'Abidjan, Côte d Ivoire' },
              { icon: 'ti-clock', label: 'Disponibilité', value: 'Immédiate' },
            ].map((item) => (
              <div key={item.label} className="mb-4 flex items-center gap-3 rounded-[12px] p-2">
                <div
                  className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[9px] border"
                  style={{ background: 'var(--social-bg)', borderColor: 'var(--border2)' }}
                >
                  <i className={`ti ${item.icon} text-[#C026D3] text-base`} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text4)' }}>{item.label}</div>
                  <div className="mt-0.5 text-[13px]" style={{ color: 'var(--text2)' }}>{item.value}</div>
                </div>
              </div>
            ))}

            <div className="mt-6 flex gap-2.5">
              {['ti-brand-linkedin', 'ti-brand-github', 'ti-brand-twitter'].map((icon) => (
                <button
                  key={icon}
                  className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[9px] border"
                  style={{ background: 'var(--social-bg)', borderColor: 'var(--border2)' }}
                  aria-label="Lien social"
                >
                  <i className={`ti ${icon} text-[#C026D3] text-base`} />
                </button>
              ))}
            </div>
          </div>

          <form
            action={`https://formsubmit.co/${contactEmail}`}
            method="POST"
            className="rounded-[14px] border p-5 md:p-7"
            style={{ background: 'var(--form-bg)', borderColor: 'var(--border)' }}
          >
            <input type="hidden" name="_subject" value="Nouveau message depuis mon portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="mb-3 grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[11px] uppercase tracking-wider" style={{ color: 'var(--text3)' }}>Prénom</label>
                <input name="prenom" type="text" placeholder="Jean" required className="w-full rounded-[9px] border px-3 py-2.5 text-[13px] outline-none" style={{ background: 'var(--input-bg)', borderColor: 'var(--border2)', color: 'var(--text)', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] uppercase tracking-wider" style={{ color: 'var(--text3)' }}>Nom</label>
                <input name="nom" type="text" placeholder="Dupont" required className="w-full rounded-[9px] border px-3 py-2.5 text-[13px] outline-none" style={{ background: 'var(--input-bg)', borderColor: 'var(--border2)', color: 'var(--text)', fontFamily: 'inherit' }} />
              </div>
            </div>

            {[
              { label: 'Email', name: 'email', type: 'email', placeholder: 'jean@entreprise.com' },
              { label: 'Sujet', name: 'sujet', type: 'text', placeholder: 'Stage / Alternance / Freelance' },
            ].map(f => (
              <div key={f.label} className="mb-3">
                <label className="mb-1.5 block text-[11px] uppercase tracking-wider" style={{ color: 'var(--text3)' }}>{f.label}</label>
                <input name={f.name} type={f.type} placeholder={f.placeholder} required className="w-full rounded-[9px] border px-3 py-2.5 text-[13px] outline-none" style={{ background: 'var(--input-bg)', borderColor: 'var(--border2)', color: 'var(--text)', fontFamily: 'inherit' }} />
              </div>
            ))}

            <div className="mb-4">
              <label className="mb-1.5 block text-[11px] uppercase tracking-wider" style={{ color: 'var(--text3)' }}>Message</label>
              <textarea
                name="message"
                placeholder="Décris ton projet ou opportunité..."
                required
                className="h-[120px] w-full resize-none rounded-[9px] border px-3 py-2.5 text-[13px] outline-none"
                style={{ background: 'var(--input-bg)', borderColor: 'var(--border2)', color: 'var(--text)', fontFamily: 'inherit' }}
              />
            </div>

            <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border-0 py-3 text-[13px] font-medium text-white" style={{ background: 'linear-gradient(135deg,#9333EA,#C026D3)' }}>
              <i className="ti ti-send text-[15px]" />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>

    </section>
  )
}
