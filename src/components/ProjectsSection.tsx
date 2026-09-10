import { ExternalLink, ArrowRight, FolderKanban, Sparkles } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  coverImage: string;
  tags: string[];
  detailUrl: string;
  statsLabel?: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'portfolio',
    title: 'Portfolio BTS SIO SISR',
    category: 'Personnel & Professionnel',
    summary:
      'Conception et développement complet de mon portfolio d’étudiant en BTS SIO SISR. Architecture responsive, animations interactives, design glassmorphism soigné et documentation technique détaillée pour les épreuves.',
    // User can place custom cover images in /public/projets/portfolio/cover portfolio.png
    coverImage: '/projets/portfolio/cover_portfolio.png',
    tags: ['Web Design', 'Tailwind CSS', 'UI/UX', 'JS', 'AI'],
    detailUrl: './projets/portfolio/portfolio.html',
    statsLabel: 'Projet Phare 2025 - 2026',
  },
  {
    id: 'holazyv',
    title: 'HoLazyV',
    category: 'Branding & E-Commerce',
    summary:
      'Création globale d’une identité de marque et d’une boutique en ligne. Direction artistique complète, conception de logo vectoriel, effets visuels et ergonomie d’achat e-commerce.',
    // User can place custom cover images in /public/projets/holazyv/cover_holazyv.png
    coverImage: '/projets/holazyv/cover_holazyv.png',
    tags: ['Branding', 'Graphic Design', 'Online Store', 'UI/UX'],
    detailUrl: './projets/holazyv/holazyv.html',
    statsLabel: 'E-commerce & Brand Concept',
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-16 bg-transparent text-white overflow-hidden animate-fade-in select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 text-white/50 text-xs sm:text-sm font-mono uppercase tracking-widest mb-3">
              <FolderKanban className="w-4 h-4 text-white/70" />
              <span>Réalisations & Projets</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Projets <span className="text-white/40 text-xl sm:text-2xl md:text-3xl font-normal">/ Projects</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed">
            Découvrez une sélection de projets majeurs réalisés dans le cadre de mes études en BTS SIO SISR et de mes travaux personnels.
          </p>
        </div>

        {/* 2-Column Responsive Centered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              className="group relative z-10 rounded-3xl bg-neutral-900/80 backdrop-blur-sm md:backdrop-blur-md border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/25 hover:bg-neutral-900/90 flex flex-col justify-between"
            >
              {/* Cover Image Container with fixed aspect ratio to prevent CLS */}
              <div className="relative w-full aspect-video h-56 sm:h-64 md:h-72 overflow-hidden bg-black/40 border-b border-white/10">
                <img
                  src={project.coverImage}
                  alt={`Aperçu du projet ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={360}
                  className="w-full h-full object-cover object-center aspect-video transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized abstract background if user hasn't dropped the image file yet
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add(
                        'flex',
                        'items-center',
                        'justify-center',
                        'bg-gradient-to-br',
                        project.id === 'portfolio' ? 'from-amber-950/40' : 'from-indigo-950/40',
                        'to-neutral-950/90'
                      );
                      const fallbackDiv = document.createElement('div');
                      fallbackDiv.className = 'text-center p-6 space-y-2';
                      fallbackDiv.innerHTML = `
                        <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/15 text-white mb-2">
                          <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                        </div>
                        <p class="text-xs uppercase tracking-wider text-white/50 font-mono font-medium">${project.title}</p>
                        <p class="text-xs text-white/40 font-mono">Image: ${project.coverImage}</p>
                      `;
                      target.parentElement.appendChild(fallbackDiv);
                    }
                  }}
                />

                {/* Subtle dark gradient overlay for depth and tag legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent pointer-events-none" />

                {/* Category Badge & Status */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-xs md:backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold tracking-wide">
                    {project.category}
                  </span>
                  {project.statsLabel && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs md:backdrop-blur-md border border-white/15 text-white/80 text-xs font-mono">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      {project.statsLabel}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
                <div className="space-y-4">
                  {/* Title */}
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    id={`btn-discover-${project.id}`}
                    href={project.detailUrl}
                    className="relative z-20 pointer-events-auto inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all duration-200 active:scale-95 shadow-md group/btn cursor-pointer select-none"
                  >
                    <span>Découvrir le projet</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </a>

                  <a
                    href={project.detailUrl}
                    className="relative z-20 pointer-events-auto cursor-pointer text-xs text-white/40 hover:text-white transition-colors font-mono flex items-center gap-1"
                    title="Ouvrir la page du projet"
                  >
                    <span>Détails</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
