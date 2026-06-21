'use client'

import { useState } from 'react'

interface Project {
  id: number
  name: string
  category: string
  description: string
  details: string
  image: string
  techs: string[]
  features: string[]
  link: string
  badgeColor: string
  bgColor: string
}

const projects: Project[] = [
  // Ajoute tes projets ici en copiant le même format.
  {
    id: 1,
    name: 'GAAP',
    category: 'projet ecole',
    description: 'application web pour faciliter la gestion des heure et tâches des enseignant ,secretaire et administion de uvci',
    details: 'Application météo pensée pour consulter rapidement les conditions actuelles et les prévisions. Le projet met l’accent sur une interface claire, une lecture rapide des données et une adaptation mobile.',
    image: '/images/projet1.png',
    techs: ['React', 'API Laravel'],
    features: ['application de gestion dess heures des enseignants : CAS DE L´UNIVERSITÉ VIRTUELLE DE CÔTE D´IVOIRE'],
    link: 'https://pct-frontend-7s4q.vercel.app/',
    badgeColor: '#7C3AED',
    bgColor: '#1a0f2e',
  },
  {
    id: 2,
    name: 'Post-it',
    category: 'projet de groupe',
    description: 'une application de gestion de notes connectée à une API externe.',
    details: ' Intégrer une interface épurée et moderne, mettant en avant la manipulation dynamique du DOM et la réactivité native de Vue.js (data binding, composants réutilisables)..',
    image: '/images/Projet2.png',
    techs: ['vueJS'],
    features: ['Gestion et utilisation une API externe'],
    link: '#',
    badgeColor: '#C026D3',
    bgColor: '#200d30',
  },
  {
    id: 3,
    name: 'Visualisation de données',
    category: 'Dashboard',
    description: 'Graphiques dynamiques, filtres et exports en temps réel.',
    details: 'Dashboard de visualisation pour suivre des indicateurs importants. L’objectif est de rendre les données faciles à comparer avec des filtres et des graphiques lisibles.',
    image: '/images/Projet3.png',
    techs: ['Python', 'Chart.js'],
    features: ['Graphiques dynamiques', 'Filtres par période', 'Export des données'],
    link: 'https://my-rotten-tomatoes-five.vercel.app/',
    badgeColor: '#9333EA',
    bgColor: '#1a1028',
  },
  {
    id: 4,
    name: 'Visualisation de données',
    category: 'Dashboard',
    description: 'Graphiques dynamiques, filtres et exports en temps réel.',
    details: 'Dashboard de visualisation pour suivre des indicateurs importants. L’objectif est de rendre les données faciles à comparer avec des filtres et des graphiques lisibles.',
    image: '',
    techs: ['Python', 'Chart.js'],
    features: ['Graphiques dynamiques', 'Filtres par période', 'Export des données'],
    link: '#',
    badgeColor: '#9333EA',
    bgColor: '#1a1028',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="projets" className="px-5 py-16 md:px-8 md:py-24" style={{ background: 'linear-gradient(135deg,#7C3AED,#C026D3,#EC4899)' }}>
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[11px] uppercase tracking-[3px]" style={{ color: 'rgba(255,255,255,0.7)' }}>Travaux</p>
            <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
              Projets <span style={{ color: '#fce7f3' }}>sélectionnés</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex min-h-[500px] flex-col overflow-hidden rounded-[14px] border"
                style={{ background: 'var(--card-bg)', borderColor: 'var(--border2)', transition: 'background 0.3s' }}
              >
                <div className="relative flex aspect-[16/10] min-h-[220px] items-center justify-center overflow-hidden p-3 md:min-h-[240px]" style={{ background: project.bgColor }}>
                  {project.image ? (
                    <img src={project.image} alt={`Aperçu du projet ${project.name}`} className="h-full w-full rounded-[10px] bg-white object-contain" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm" style={{ color: 'var(--text3)' }}>
                      Ajoute une capture du site avec le champ image
                    </div>
                  )}
                  <span
                    className="absolute right-3 top-3 rounded-lg px-2.5 py-1 text-[10px] font-medium text-white"
                    style={{ background: project.badgeColor }}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-wider" style={{ color: '#C026D3' }}>{project.category}</p>
                  <h3 className="mb-3 text-xl font-medium" style={{ color: 'var(--text)' }}>{project.name}</h3>
                  <p className="mb-5 text-sm leading-7" style={{ color: 'var(--text3)' }}>{project.description}</p>

                  <div className="mb-5">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[2px]" style={{ color: 'var(--text4)' }}>Langages utilisés</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map(t => (
                        <span key={t} className="rounded-md px-2 py-1 text-[11px]" style={{ background: 'var(--lv-bon-bg)', color: 'var(--lv-bon-c)' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {project.link && project.link !== '#' && (
                    <div className="mb-5 rounded-[10px] border px-3 py-2" style={{ borderColor: 'var(--border2)', background: 'var(--bg2)' }}>
                      <p className="mb-1 text-[10px] font-medium uppercase tracking-[2px]" style={{ color: 'var(--text4)' }}>Lien en ligne</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="block break-all text-[12px] leading-relaxed text-[#E879F9]"
                      >
                        {project.link}
                      </a>
                    </div>
                  )}

                  <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-left text-[12px] font-medium text-[#E879F9]"
                    >
                      Voir les détails
                    </button>
                    {project.link && project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full bg-gradient-to-br from-[#9333EA] to-[#C026D3] px-4 py-2 text-center text-[12px] font-medium text-white">
                        Version en ligne
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-5 py-8"
          style={{ background: 'rgba(0,0,0,0.72)' }}
          onClick={(event) => {
            if (event.currentTarget === event.target) setSelectedProject(null)
          }}
        >
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border" style={{ background: 'var(--card-bg)', borderColor: 'var(--border2)' }}>
            <div className="relative flex max-h-[60vh] min-h-[260px] items-center justify-center overflow-hidden p-4 md:min-h-[360px]" style={{ background: selectedProject.bgColor }}>
              {selectedProject.image ? (
                <img src={selectedProject.image} alt={`Aperçu du projet ${selectedProject.name}`} className="max-h-[56vh] w-full rounded-[12px] bg-white object-contain" />
              ) : (
                <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm" style={{ color: 'var(--text3)' }}>
                  Ajoute une capture du site avec le champ image
                </div>
              )}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-white"
                style={{ background: 'rgba(0,0,0,0.35)' }}
                aria-label="Fermer"
              >
                <i className="ti ti-x text-lg" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[3px]" style={{ color: selectedProject.badgeColor }}>{selectedProject.category}</p>
              <h3 className="mb-3 text-2xl font-medium" style={{ color: 'var(--text)' }}>{selectedProject.name}</h3>
              <p className="mb-6 text-sm leading-7" style={{ color: 'var(--text3)' }}>{selectedProject.details}</p>

              <div className="mb-6">
                <h4 className="mb-3 text-[12px] font-medium uppercase tracking-[2px]" style={{ color: 'var(--text4)' }}>Fonctionnalités</h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  {selectedProject.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text2)' }}>
                      <i className="ti ti-check text-[#E879F9]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-7 flex flex-wrap gap-2">
                {selectedProject.techs.map((tech) => (
                  <span key={tech} className="rounded-md px-2 py-1 text-[11px]" style={{ background: 'var(--lv-bon-bg)', color: 'var(--lv-bon-c)' }}>{tech}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedProject.link && selectedProject.link !== '#' && (
                  <a href={selectedProject.link} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-br from-[#9333EA] to-[#C026D3] px-5 py-3 text-[13px] font-medium text-white">
                    Ouvrir le projet
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border px-5 py-3 text-[13px] font-medium"
                  style={{ borderColor: 'var(--border2)', color: 'var(--text3)' }}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
