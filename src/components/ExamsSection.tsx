import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import { Award, ArrowUpRight, FileSpreadsheet, Layers, CheckCircle2, Lock, X } from 'lucide-react';

export function ExamsSection() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleE6Click = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToastMessage("Le dossier d'épreuve E6 est actuellement en cours de préparation selon les consignes académiques.");
    
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);
  return (
    <section
      id="exams"
      className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-16 bg-transparent text-white overflow-hidden animate-fade-in select-none scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 text-white/50 text-xs sm:text-sm font-mono uppercase tracking-widest mb-3">
              <Award className="w-4 h-4 text-white/70" />
              <span>Certification & Diplôme</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Épreuves BTS <span className="text-white/40 text-xl sm:text-2xl md:text-3xl font-normal">/ Exams</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base mt-2 font-medium">
              Portefeuille de compétences professionnelles
            </p>
          </div>
          <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed">
            Accès aux dossiers officiels, fiches de situations professionnelles et grilles d’évaluation du référentiel BTS SIO option SISR.
          </p>
        </div>

        {/* Glassmorphism Centered Container */}
        <div
          id="exams-card-container"
          className="relative rounded-3xl bg-neutral-900/80 backdrop-blur-sm md:backdrop-blur-md border border-white/10 p-8 sm:p-12 md:p-14 shadow-2xl overflow-hidden"
        >
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
            {/* Badges / Header pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-mono uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-amber-300" />
              <span>BTS SIO SISR · Session 2026</span>
            </div>

            {/* Central Heading */}
            <div className="space-y-3">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Dossiers d'Épreuves Pratiques & Orales
              </h3>
              <p className="text-white/75 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Consultez les supports préparatoires, fiches d'activités techniques et documentations d’architecture nécessaires pour le passage des épreuves terminales.
              </p>
            </div>

            {/* 2 Prominent Pill-Style Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full pt-2">
              {/* Button 1: Épreuve E5 (#7A553A warm accent brown) */}
              <a
                id="btn-epreuve-e5"
                href="e5.html"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto rounded-full bg-[#7A553A] hover:bg-[#8C6345] text-white text-base font-semibold transition-all duration-300 active:scale-95 shadow-[0_0_25px_rgba(122,85,58,0.35)] hover:shadow-[0_0_35px_rgba(122,85,58,0.55)] cursor-pointer select-none"
              >
                <span>Accéder à l'épreuve E5</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Button 2: Épreuve E6 (Work in Progress / Coming Soon State) */}
              <button
                id="btn-epreuve-e6"
                type="button"
                onClick={handleE6Click}
                className="group relative inline-flex items-center justify-center gap-2.5 bg-[#382A22]/40 border border-[#7A553A]/20 text-white/60 cursor-not-allowed opacity-80 rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-all duration-300 hover:border-[#7A553A]/40 hover:text-white/80 active:scale-95 shadow-md backdrop-blur-sm md:backdrop-blur-md select-none"
                title="Dossier en cours de préparation"
              >
                <span>Épreuve E6 (Dossier en cours) 🔒</span>
              </button>
            </div>

            {/* Explanatory Text & Matrix Reference */}
            <div className="pt-6 border-t border-white/10 w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2 p-5 rounded-2xl bg-black/20 border border-white/5">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-mono uppercase tracking-wider font-semibold">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Épreuve E5 (Conception & Maintenance)</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Support de l'épreuve portant sur la conception, l'intégration et l'administration des solutions d'infrastructure réseau et serveurs (SISR). Regroupe les fiches descriptives d'activités pratiques.
                </p>
              </div>

              <div className="space-y-2 p-5 rounded-2xl bg-black/20 border border-white/5">
                <div className="flex items-center gap-2 text-blue-300 text-xs font-mono uppercase tracking-wider font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Épreuve E6 (Cybersécurité & Évolution)</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Support d'évaluation dédié au maintien de la cybersécurité du système informatique, gestion des incidents, supervision de parc et veille technologique approfondie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Toast Notification for E6 */}
      {toastMessage && (
        <div
          id="toast-e6-react"
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-[9999] max-w-md p-4 rounded-2xl bg-[#382A22]/95 border border-[#7A553A]/50 text-white shadow-2xl backdrop-blur-xl flex items-start gap-3 animate-fade-in transition-all duration-300"
        >
          <div className="p-1.5 rounded-full bg-[#7A553A]/40 text-amber-300 shrink-0 mt-0.5">
            <Lock className="w-4 h-4" />
          </div>
          <div className="flex-1 text-xs sm:text-sm text-white/90 leading-snug pt-0.5">
            {toastMessage}
          </div>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="text-white/50 hover:text-white p-1 transition-colors rounded-lg hover:bg-white/10 shrink-0"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
}
