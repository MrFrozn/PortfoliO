interface AboutSectionProps {
  cvUrl?: string;
}

export function AboutSection({ cvUrl = '/cv.pdf' }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="relative z-10 w-full min-h-screen flex flex-col justify-center py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden animate-fade-in bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg%20site2.png')",
      }}
    >
      {/* Subtle soft dark vignette overlay (0.15) to ensure pure text readability without altering the warm natural tones */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
        }}
      />

      {/* Main Two-Column Container - Left Intro, Right Resume Summary */}
      <div
        id="about-container"
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-start select-none"
      >
        {/* LEFT COLUMN: Main Intro & Interactive BTS SIO Link */}
        <div id="about-left-column" className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Section Subtitle */}
          <span className="text-xs sm:text-sm font-medium tracking-widest text-white/50 uppercase mb-3">
            Profile & Presentation
          </span>

          {/* Main Title */}
          <h2
            id="about-title"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 sm:mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.08,
            }}
          >
            About me
          </h2>

          {/* Bio text with interactive BTS SIO SISR link */}
          <p
            id="about-bio"
            className="text-white/85 text-lg sm:text-xl md:text-[21px] leading-relaxed font-normal mb-6 max-w-2xl"
          >
            I am a student in{' '}
            <a
              href="/bts-sio.html"
              id="bts-sio-link"
              title="Découvrir le BTS SIO"
              className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-4 decoration-white/60 hover:decoration-white hover:text-white transition-all duration-200 cursor-pointer group"
            >
              <span>BTS SIO SISR</span>
              <svg
                className="w-4 h-4 inline-block text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>{' '}
            (IT Systems & Networks), specializing in infrastructure solutions, system administration, networking, and cybersecurity.
          </p>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-2xl">
            Passionate about building resilient IT architectures, I actively combine academic theory with immersive practical experience through work-study programs and rigorous hands-on projects.
          </p>

          {/* Quick link button to view BTS SIO guide */}
          <a
            href="/bts-sio.html"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
          >
            <span>En savoir plus sur le diplôme BTS SIO & options</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* RIGHT COLUMN: Resume Summary & Download CV Button */}
        <div
          id="about-right-column"
          className="lg:col-span-5 flex flex-col items-start text-left pt-2 lg:pt-14"
        >
          {/* CV Summary Subheading */}
          <h3
            id="cv-summary-heading"
            className="text-white text-2xl sm:text-3xl font-semibold tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            CV Summary
          </h3>

          {/* Key Details List */}
          <div className="w-full space-y-4 mb-8 text-sm sm:text-base border-t border-b border-white/10 py-5">
            <div className="flex flex-row justify-between items-baseline gap-4">
              <span className="text-white/50 text-xs sm:text-sm uppercase tracking-wider font-medium">
                Formation
              </span>
              <span className="text-white font-medium text-right">
                BTS SIO SISR (Bac +2)
              </span>
            </div>

            <div className="flex flex-row justify-between items-baseline gap-4">
              <span className="text-white/50 text-xs sm:text-sm uppercase tracking-wider font-medium">
                Spécialisation
              </span>
              <span className="text-white/90 text-right">
                Infrastructures, Systèmes & Réseaux
              </span>
            </div>

            <div className="flex flex-row justify-between items-baseline gap-4">
              <span className="text-white/50 text-xs sm:text-sm uppercase tracking-wider font-medium">
                Compétences Clés
              </span>
              <span className="text-white/90 text-right">
                Linux, Windows Server, Cisco, Sécurité
              </span>
            </div>

            <div className="flex flex-row justify-between items-baseline gap-4">
              <span className="text-white/50 text-xs sm:text-sm uppercase tracking-wider font-medium">
                Statut
              </span>
              <span className="text-white/90 text-right">
                Alternance / Stage disponible
              </span>
            </div>

            <div className="flex flex-row justify-between items-baseline gap-4">
              <span className="text-white/50 text-xs sm:text-sm uppercase tracking-wider font-medium">
                Langues
              </span>
              <span className="text-white/90 text-right">
                Français (Natif), Anglais (Technique)
              </span>
            </div>
          </div>

          {/* Download CV Pill-Style Button */}
          <div className="w-full sm:w-auto">
            <a
              id="download-cv-btn"
              href={cvUrl}
              download="CV_Maxence_FONTAINE_GROS.pdf"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black text-base font-medium transition-all duration-200 hover:bg-neutral-200 active:scale-95 border border-white/20 shadow-xl cursor-pointer select-none"
            >
              <span>Download CV</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

