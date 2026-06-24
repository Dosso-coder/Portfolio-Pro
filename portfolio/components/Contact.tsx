import React, { useState } from "react";

const contactPhotoSrc = '/images/image1.png';

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
  event.preventDefault();
  setIsSubmitting(true);
  setResult("Envoi en cours...");

  const formData = new FormData(event.target);
  formData.append("access_key", "6db3a538-c36c-4746-98ca-7af1fc3c41db");

  // Convertir le FormData en un objet simple pour l'envoyer en JSON
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: json,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message envoyé avec succès !");
      event.target.reset();
    } else {
      setResult("Une erreur est survenue, réessayez.");
    }
  } catch (error) {
    setResult("Erreur de connexion.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="border-t px-5 py-16 md:px-8 md:py-24" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
      <div className="mx-auto w-full max-w-6xl">
        {/* Titre de section */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-[11px] uppercase tracking-[3px] text-[#C026D3]">Contact</p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl" style={{ color: 'var(--text)' }}>
            Travaillons <span className="text-[#E879F9]">ensemble</span>
          </h2>
        </div>

        {/* Disposition en 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          
          {/* Colonne Gauche : Infos personnelles */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="relative flex h-[82px] w-[82px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 p-2 text-[18px] font-medium text-white"
                style={{
                  background: 'linear-gradient(135deg,#7C3AED,#C026D3)',
                  borderColor: '#9333EA',
                }}
              >
                <img src={contactPhotoSrc} alt="Dosso Djeneba Samira" className="h-full w-full rounded-full object-cover" />
              </div>
              <div>
                <div className="text-lg font-medium" style={{ color: 'var(--text)' }}>Dosso Djeneba Samira</div>
                <div className="mt-0.5 text-[12px] text-[#C026D3]">Développeuse full-stack et mobile Junior</div>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7" style={{ color: 'var(--text3)' }}>
              Que ce soit pour un stage, une alternance ou un projet freelance — je suis disponible.
            </p>

            <div className="space-y-3">
              {[
                { icon: 'ti-map-pin', label: 'Localisation', value: 'Abidjan, Côte d\'Ivoire' },
                { icon: 'ti-clock', label: 'Disponibilité', value: 'Immédiate' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-[12px]">
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
            </div>

            <div className="flex gap-2.5 pt-2">
              {['ti-brand-linkedin', 'ti-brand-github', 'ti-brand-twitter'].map((icon) => (
                <button
                  key={icon}
                  className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[9px] border transition-transform hover:scale-105"
                  style={{ background: 'var(--social-bg)', borderColor: 'var(--border2)' }}
                  aria-label="Lien social"
                >
                  <i className={`ti ${icon} text-[#C026D3] text-base`} />
                </button>
              ))}
            </div>
          </div>

          {/* Colonne Droite : Formulaire avec effet Border-Gradient Premium */}
          <div className="w-full relative rounded-[16px] p-[1px]" style={{ background: 'linear-gradient(135deg, transparent, var(--border), #C026D3/30)' }}>
            <form
              onSubmit={onSubmit}
              className="rounded-[15px] p-6 md:p-8 space-y-4"
              style={{ background: 'var(--form-bg)' }}
            >
              {/* Options cachées pour personnaliser l'email reçu */}
              <input type="hidden" name="from_name" value="Portfolio - Samira" />
              <input type="hidden" name="subject" value="Nouveau message depuis ton Portfolio" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider" style={{ color: 'var(--text3)' }}>Prénom</label>
                  <input name="prenom" type="text" placeholder="Jean" required className="w-full rounded-[9px] border px-3 py-2.5 text-[13px] outline-none transition-colors focus:border-[#C026D3]" style={{ background: 'var(--input-bg)', borderColor: 'var(--border2)', color: 'var(--text)', fontFamily: 'inherit' }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider" style={{ color: 'var(--text3)' }}>Nom</label>
                  <input name="nom" type="text" placeholder="Dupont" required className="w-full rounded-[9px] border px-3 py-2.5 text-[13px] outline-none transition-colors focus:border-[#C026D3]" style={{ background: 'var(--input-bg)', borderColor: 'var(--border2)', color: 'var(--text)', fontFamily: 'inherit' }} />
                </div>
              </div>

              {[
                { label: 'Email', name: 'email', type: 'email', placeholder: 'jean@entreprise.com' },
                { label: 'Sujet', name: 'sujet', type: 'text', placeholder: 'Stage / Alternance / Freelance' },
              ].map(f => (
                <div key={f.label} className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider" style={{ color: 'var(--text3)' }}>{f.label}</label>
                  <input name={f.name} type={f.type} placeholder={f.placeholder} required className="w-full rounded-[9px] border px-3 py-2.5 text-[13px] outline-none transition-colors focus:border-[#C026D3]" style={{ background: 'var(--input-bg)', borderColor: 'var(--border2)', color: 'var(--text)', fontFamily: 'inherit' }} />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase tracking-wider" style={{ color: 'var(--text3)' }}>Message</label>
                <textarea
                  name="message"
                  placeholder="Décris ton projet ou opportunité..."
                  required
                  className="h-[120px] w-full resize-none rounded-[9px] border px-3 py-2.5 text-[13px] outline-none transition-colors focus:border-[#C026D3]"
                  style={{ background: 'var(--input-bg)', borderColor: 'var(--border2)', color: 'var(--text)', fontFamily: 'inherit' }}
                />
              </div>

              {/* Feedback d'envoi */}
              {result && (
                <p className={`text-[13px] text-center font-medium py-1 ${result.includes("succès") ? "text-emerald-400" : "text-red-400"}`}>
                  {result}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border-0 py-3 text-[13px] font-medium text-white transition-opacity disabled:opacity-50"
                style={{ background: 'linear-gradient(135deg,#9333EA,#C026D3)' }}
              >
                <i className="ti ti-send text-[15px]" />
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}