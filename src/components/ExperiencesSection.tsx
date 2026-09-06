import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { GraduationCap, Briefcase, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: string;
  category: 'education' | 'experience';
  badge: string;
  title: string;
  period: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  skills: string[];
  externalUrl: string;
  externalLabel: string;
}

const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'bts-sio',
    category: 'education',
    badge: 'Bac +2 • En cours',
    title: 'BTS - SIO SISR',
    period: '2024 - 2026',
    subtitle: 'AFTEC Rennes',
    shortDesc: 'Spécialisation en Solutions d’Infrastructure, Systèmes, Réseaux et Sécurité informatique.',
    fullDesc:
      'Formation supérieure spécialisée dans l’administration d’infrastructures informatiques, le déploiement d’architectures réseaux résilientes, la virtualisation de serveurs et la mise en œuvre de politiques de cybersécurité en entreprise. Apprentissage approfondi des environnements Windows Server, Linux (Debian, Ubuntu), switching/routing Cisco, firewalling et gestion de parcs informatiques.',
    skills: ['Windows Server', 'Linux Admin', 'Réseaux & VLANs', 'Cybersécurité', 'Virtualisation'],
    externalUrl: 'https://www.aftec.fr/',
    externalLabel: "Site de l'école ↗",
  },
  {
    id: 'bac-sti2d',
    category: 'education',
    badge: 'Baccalauréat Technologique',
    title: 'Bac STI2D option SIN',
    period: '2024',
    subtitle: 'Lycée Joliot Curie - Rennes',
    shortDesc: "Sciences et Technologies de l'Industrie et du Développement Durable (Systèmes d'Information et Numérique).",
    fullDesc:
      "Acquisition des fondamentaux de l'informatique, de l'algorithmique, des réseaux locaux, du traitement des données et des architectures matérielles. Conception et développement de projets techniques intégrés associant électronique, programmation et communication réseau.",
    skills: ['Systèmes Numériques', 'Bases Réseau', 'Algorithmique', 'Projets Techniques'],
    externalUrl: 'https://www.lyceejoliotcurie-rennes.fr/',
    externalLabel: "Site du lycée ↗",
  },
  {
    id: 'tech-support',
    category: 'experience',
    badge: 'Alternance • 2 ans',
    title: 'Technicien Support',
    period: '2024 - 2026',
    subtitle: 'Work-study / Alternance',
    shortDesc: 'Technicien support IT, maintenance des équipements réseau et assistance aux utilisateurs.',
    fullDesc:
      'Prise en charge des incidents informatiques de niveaux 1 et 2, déploiement et masterisation de postes de travail, gestion des comptes utilisateurs Active Directory / Microsoft 365, supervision des liaisons réseaux et maintenance préventive du matériel informatique.',
    skills: ['Support N1/N2', 'Active Directory', 'Déploiement Postes', 'Helpdesk', 'Ticketing'],
    externalUrl: 'https://www.linkedin.com',
    externalLabel: "Site de l'entreprise ↗",
  },
  {
    id: 'stagiaire',
    category: 'experience',
    badge: 'Stage Professionnel',
    title: 'Stagiaire Découverte',
    period: '2020',
    subtitle: 'Discovery Internship',
    shortDesc: 'Découverte des environnements informatiques professionnels et de l’administration de systèmes.',
    fullDesc:
      'Immersion au sein d’un service informatique en entreprise. Observation de l’organisation d’une infrastructure réseau, participation au diagnostic de pannes matérielles, câblage réseau et sensibilisation aux bonnes pratiques de sécurité informatique.',
    skills: ['Découverte SI', 'Diagnostic Matériel', 'Câblage & Brassage', 'Bonnes Pratiques'],
    externalUrl: 'https://www.linkedin.com',
    externalLabel: "Site de l'entreprise ↗",
  },
];

export function ExperiencesSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedIndex = selectedId
    ? EXPERIENCES_DATA.findIndex((item) => item.id === selectedId)
    : -1;
  const currentItem = selectedIndex >= 0 ? EXPERIENCES_DATA[selectedIndex] : null;

  const handleOpenModal = (id: string) => {
    setSelectedId(id);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedId(null);
    document.body.style.overflow = '';
  };

  const handlePrev = () => {
    if (selectedIndex < 0) return;
    const newIndex = (selectedIndex - 1 + EXPERIENCES_DATA.length) % EXPERIENCES_DATA.length;
    setSelectedId(EXPERIENCES_DATA[newIndex].id);
  };

  const handleNext = () => {
    if (selectedIndex < 0) return;
    const newIndex = (selectedIndex + 1) % EXPERIENCES_DATA.length;
    setSelectedId(EXPERIENCES_DATA[newIndex].id);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedId) return;
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, selectedIndex]);

  const educationItems = EXPERIENCES_DATA.filter((i) => i.category === 'education');
  const experienceItems = EXPERIENCES_DATA.filter((i) => i.category === 'experience');

  return (
    <section
      id="experiences"
      className="relative z-10 w-full min-h-screen py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-16 bg-transparent text-white overflow-hidden animate-fade-in select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 text-left">
          <span className="text-xs sm:text-sm font-medium tracking-widest text-white/50 uppercase mb-3 block">
            Parcours & Expérience
          </span>
          <h2
            id="experiences-title"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-[1.08]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Experiences
          </h2>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
            Découvrez mon cheminement académique et mes expériences pratiques dans les systèmes, réseaux et infrastructures informatiques.
          </p>
        </div>

        {/* 2-Column Parallel Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* COLUMN 1: Education (Formation) */}
          <div id="education-column" className="flex flex-col">
            <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white shadow-inner">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Education <span className="text-white/40 text-lg font-normal">/ Formation</span>
              </h3>
            </div>

            <div className="space-y-6 sm:space-y-8 relative pl-3 sm:pl-4 border-l-2 border-white/10">
              {educationItems.map((item) => (
                <article
                  key={item.id}
                  id={`card-${item.id}`}
                  className="relative group ml-4 sm:ml-6 rounded-3xl bg-black/25 backdrop-blur-md border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:border-white/25 hover:bg-black/35 shadow-xl flex flex-col justify-between"
                >
                  {/* Timeline Node Point */}
                  <span className="absolute -left-[27px] sm:-left-[35px] top-8 w-3.5 h-3.5 rounded-full bg-white border-4 border-black/80 shadow-md group-hover:scale-125 transition-transform duration-200" />

                  <div>
                    {/* Top Row: Badge & Period */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-medium tracking-wide">
                        {item.badge}
                      </span>
                      <span className="text-xs sm:text-sm text-white/50 font-mono">
                        {item.period}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h4
                      className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-white/70 font-medium mb-4">
                      {item.subtitle}
                    </p>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-normal">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Action Pill-button with data-id */}
                  <div className="pt-2">
                    <button
                      type="button"
                      data-id={item.id}
                      onClick={() => handleOpenModal(item.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium transition-all duration-200 hover:bg-neutral-200 active:scale-95 border border-white/20 shadow-md cursor-pointer select-none"
                    >
                      <span>En savoir plus...</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Experience (Expérience) */}
          <div id="experience-column" className="flex flex-col">
            <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white shadow-inner">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Experience <span className="text-white/40 text-lg font-normal">/ Expérience</span>
              </h3>
            </div>

            <div className="space-y-6 sm:space-y-8 relative pl-3 sm:pl-4 border-l-2 border-white/10">
              {experienceItems.map((item) => (
                <article
                  key={item.id}
                  id={`card-${item.id}`}
                  className="relative group ml-4 sm:ml-6 rounded-3xl bg-black/25 backdrop-blur-md border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:border-white/25 hover:bg-black/35 shadow-xl flex flex-col justify-between"
                >
                  {/* Timeline Node Point */}
                  <span className="absolute -left-[27px] sm:-left-[35px] top-8 w-3.5 h-3.5 rounded-full bg-white border-4 border-black/80 shadow-md group-hover:scale-125 transition-transform duration-200" />

                  <div>
                    {/* Top Row: Badge & Period */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-medium tracking-wide">
                        {item.badge}
                      </span>
                      <span className="text-xs sm:text-sm text-white/50 font-mono">
                        {item.period}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h4
                      className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-white/70 font-medium mb-4">
                      {item.subtitle}
                    </p>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-normal">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Action Pill-button with data-id */}
                  <div className="pt-2">
                    <button
                      type="button"
                      data-id={item.id}
                      onClick={() => handleOpenModal(item.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium transition-all duration-200 hover:bg-neutral-200 active:scale-95 border border-white/20 shadow-md cursor-pointer select-none"
                    >
                      <span>En savoir plus...</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* INTERACTIVE MODAL POPUP (#parcoursModal) - Rendered at Portal / Document Body Root */}
      {currentItem && typeof document !== 'undefined' && createPortal(
        <div
          id="parcoursModal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          className="fixed inset-0 z-[9999] w-screen h-screen bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-hidden animate-fade-in"
          style={{ top: 0, left: 0, position: 'fixed' }}
          onClick={handleCloseModal}
        >
          {/* Modal Container Card with Glassmorphism */}
          <div
            id="modalCard"
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-neutral-900/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl my-auto text-left select-text"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button at top-right */}
            <button
              id="closeModalBtn"
              type="button"
              aria-label="Fermer la fenêtre modale"
              onClick={handleCloseModal}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Badge & Period */}
            <div className="flex items-center gap-3 mb-4 pr-12">
              <span className="px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider">
                {currentItem.badge}
              </span>
              <span className="text-sm text-white/50 font-mono">
                {currentItem.period}
              </span>
            </div>

            {/* Dynamic Modal Title */}
            <h3
              id="modalTitle"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {currentItem.title}
            </h3>

            {/* Subtitle / Institution */}
            <p className="text-base sm:text-lg text-white/70 font-medium mb-6">
              {currentItem.subtitle}
            </p>

            {/* Dynamic Detailed Description */}
            <div className="mb-6 space-y-3">
              <h5 className="text-xs uppercase tracking-wider text-white/40 font-semibold">
                Description détaillée
              </h5>
              <p
                id="modalDescription"
                className="text-white/85 text-base sm:text-lg leading-relaxed font-normal"
              >
                {currentItem.fullDesc}
              </p>
            </div>

            {/* Key Skills Chips */}
            <div className="mb-8">
              <h5 className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-2.5">
                Compétences associées
              </h5>
              <div className="flex flex-wrap gap-2">
                {currentItem.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Controls: Navigation & External Link */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Previous / Next Arrows */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  id="prevModalBtn"
                  type="button"
                  onClick={handlePrev}
                  title="Élément précédent"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-white/40 px-1 font-mono">
                  {selectedIndex + 1} / {EXPERIENCES_DATA.length}
                </span>
                <button
                  id="nextModalBtn"
                  type="button"
                  onClick={handleNext}
                  title="Élément suivant"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* External Link Pill-Button */}
              <a
                id="modalLink"
                href={currentItem.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all active:scale-95 shadow-md cursor-pointer select-none"
              >
                <span>{currentItem.externalLabel}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
