import { Mail, Linkedin, MapPin, Phone, ArrowUp } from 'lucide-react';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="relative z-10 w-full bg-neutral-950/90 backdrop-blur-sm md:backdrop-blur-xl border-t border-white/10 text-white select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pt-16 sm:pt-20 pb-12">
        {/* Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-white/10">
          {/* Column 1: About & Branding (col-span-5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Maxence®
              </span>
              <span className="text-2xl sm:text-3xl text-white opacity-80 leading-none">
                ✳︎
              </span>
            </div>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-sm">
              Étudiant en BTS SIO (option SISR — Solutions d'Infrastructure, Systèmes et Réseaux). Passionné par l’architecture réseau, l'automatisation et l'administration système.
            </p>

            {/* Social Pill-Icon Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-social-email"
                href="mailto:maxencefontainegros@ik.me"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-200 active:scale-95 shadow-sm"
                aria-label="Envoyer un email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                id="footer-social-linkedin"
                href="https://www.linkedin.com/in/maxence-fontaine-gros/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-200 active:scale-95 shadow-sm"
                aria-label="Profil LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links / Liens Rapides (col-span-4) */}
          <div className="md:col-span-4 space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 font-semibold">
              Liens Rapides
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm sm:text-base text-white/75">
              <li>
                <a href="#home" className="hover:text-white hover:underline transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-white hover:underline transition-colors">
                  Parcours
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white hover:underline transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white hover:underline transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#exams" className="hover:text-white hover:underline transition-colors">
                  Épreuves BTS
                </a>
              </li>
              <li>
                <a href="e5.html" className="hover:text-white hover:underline transition-colors">
                  Portfolio E5
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="mentionslegales.html" className="hover:text-white hover:underline transition-colors">
                  Mentions Légales
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (col-span-3) */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 font-semibold">
              Contact
            </h3>
            <ul className="space-y-4 text-sm sm:text-base text-white/75">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-white/50 shrink-0 mt-1" />
                <a
                  href="mailto:maxencefontainegros@ik.me"
                  className="hover:text-white hover:underline transition-colors break-all"
                >
                  maxencefontainegros@ik.me
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/50 shrink-0" />
                <span className="text-white/60 font-mono text-sm">+33 (0)6 •• •• •• ••</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/50 shrink-0 mt-1" />
                <span> Sainte-Foy-lès-Lyon, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/50 font-mono">
          <p>© 2026 Maxence FONTAINE GROS. Tous droits réservés.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
