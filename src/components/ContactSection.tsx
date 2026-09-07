import { Mail, Linkedin, ArrowUpRight, MessageSquareQuote, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-16 bg-transparent text-white overflow-hidden animate-fade-in select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 text-white/50 text-xs sm:text-sm font-mono uppercase tracking-widest mb-3">
              <Send className="w-4 h-4 text-white/70" />
              <span>Prise de contact</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Me Contacter <span className="text-white/40 text-xl sm:text-2xl md:text-3xl font-normal">/ Get in touch</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base mt-2 font-medium">
              An inquiry or a networking opportunity? Reach out directly.
            </p>
          </div>
          <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed">
            Disponible pour échanger sur des opportunités professionnelles, projets d’infrastructure ou questions relatives à mon parcours.
          </p>
        </div>

        {/* Centered Layout with 2 Wide Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Email */}
          <a
            id="contact-card-email"
            href="mailto:maxencefontainegros@ik.me"
            className="group relative rounded-3xl bg-neutral-900/80 backdrop-blur-sm md:backdrop-blur-md border border-white/10 p-8 sm:p-10 shadow-2xl transition-all duration-300 hover:border-white/25 hover:bg-neutral-900/90 flex flex-col justify-between cursor-pointer select-none"
          >
            <div>
              {/* Header Icon + Action Arrow */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300 shadow-inner">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/15 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Card Titles */}
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                Messagerie Directe
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3 tracking-tight group-hover:text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Email
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                Envoyez-moi un message pour toute demande d'information, proposition de stage, alternance ou collaboration technique.
              </p>
            </div>

            {/* Email Address Display Pill */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm sm:text-base font-mono text-white/90 group-hover:text-white transition-colors truncate">
                maxencefontainegros@ik.me
              </span>
              <span className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold group-hover:bg-neutral-200 transition-colors">
                Écrire
              </span>
            </div>
          </a>

          {/* Card 2: LinkedIn */}
          <a
            id="contact-card-linkedin"
            href="https://www.linkedin.com/in/maxence-fontaine-gros/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl bg-neutral-900/80 backdrop-blur-sm md:backdrop-blur-md border border-white/10 p-8 sm:p-10 shadow-2xl transition-all duration-300 hover:border-white/25 hover:bg-neutral-900/90 flex flex-col justify-between cursor-pointer select-none"
          >
            <div>
              {/* Header Icon + Action Arrow */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300 shadow-inner">
                  <Linkedin className="w-7 h-7" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/15 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Card Titles */}
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                Réseau Professionnel
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3 tracking-tight group-hover:text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                LinkedIn
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                Retrouvez mon parcours actualisé, mes publications de veille technologique et connectons-nous sur mon profil professionnel.
              </p>
            </div>

            {/* LinkedIn Handle Display Pill */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm sm:text-base font-mono text-white/90 group-hover:text-white transition-colors truncate">
                linkedin.com/in/maxence-fontaine-gros
              </span>
              <span className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold group-hover:bg-neutral-200 transition-colors">
                Connecter ↗
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
