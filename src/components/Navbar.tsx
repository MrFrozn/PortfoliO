import React, { useState, useEffect, useRef } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);

  const navLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Parcours', href: '#experiences' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Épreuves BTS', href: '#exams' },
  ];

  // Scroll handler for navbar background blur and styling
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      const navbar = navbarRef.current || document.querySelector('nav');
      if (navbar) {
        if (scrolled) {
          navbar.classList.add('bg-[#382A22]/65', 'backdrop-blur-sm', 'md:backdrop-blur-xl', 'border-b', 'border-[#7A553A]/20', 'shadow-2xl');
          navbar.classList.remove('bg-transparent', 'border-transparent', 'py-4', 'sm:py-5');
          navbar.classList.add('py-3');
        } else {
          navbar.classList.remove('bg-[#382A22]/65', 'backdrop-blur-sm', 'md:backdrop-blur-xl', 'border-b', 'border-[#7A553A]/20', 'shadow-2xl', 'py-3');
          navbar.classList.add('bg-transparent', 'border-transparent', 'py-4', 'sm:py-5');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Back-to-top handler for logo (works regardless of inner logo or text modifications)
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.history.pushState) {
      window.history.pushState(null, '', '#home');
    }
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Vanilla JS link listener for mobile menu auto-close
  useEffect(() => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (!mobileMenu) return;

    const links = mobileMenu.querySelectorAll('a');
    const onLinkClick = () => {
      closeMobileMenu();
    };

    links.forEach((link) => {
      link.addEventListener('click', onLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', onLinkClick);
      });
    };
  }, []);

  return (
    <>
      <nav
        id="main-navbar"
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-[100] px-5 sm:px-8 flex flex-row justify-between items-center transition-all duration-300 ${
          isScrolled
            ? 'bg-[#382A22]/65 backdrop-blur-sm md:backdrop-blur-xl border-b border-[#7A553A]/20 shadow-2xl py-3'
            : 'bg-transparent border-b border-transparent py-4 sm:py-5'
        }`}
        aria-label="Main Navigation"
      >
        {/* Logo (left) - Clickable Back to Top */}
        <a
          id="navbar-logo"
          href="#home"
          onClick={handleScrollToTop}
          className="flex items-center gap-2 cursor-pointer select-none transition-opacity hover:opacity-80 group focus:outline-none"
          aria-label="Retour en haut"
          title="Retour en haut / Accueil"
        >
          <span
            className="text-[21px] sm:text-[26px] tracking-tight font-bold text-white font-heading"
          >
            Maxence®
          </span>
          <span
            className="text-[21px] sm:text-[26px] font-bold text-white leading-none opacity-90 transition-transform duration-300 group-hover:rotate-45"
            aria-hidden="true"
          >
            ✳︎
          </span>
        </a>

        {/* Desktop nav links (center, hidden below md) */}
        <div
          id="desktop-nav-links"
          className="hidden md:flex flex-row items-center gap-1 text-[17px] lg:text-[19px] xl:text-[21px] text-white"
          role="navigation"
          aria-label="Liens navigation"
        >
          {navLinks.map((link, index) => (
            <span key={link.label} className="inline-flex items-center">
              <a
                href={link.href}
                className="hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
              {index < navLinks.length - 1 && <span className="opacity-40">,&nbsp;</span>}
            </span>
          ))}
        </div>

        {/* Desktop CTA (right, hidden below md) */}
        <div className="hidden md:block">
          <a
            id="desktop-cta-link"
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A553A] hover:bg-[#8C6345] text-white text-sm lg:text-base font-medium transition-all duration-200 active:scale-95 shadow-md shadow-[#7A553A]/30 select-none"
          >
            <span>Me contacter</span>
          </a>
        </div>

        {/* Mobile hamburger (visible below md) */}
        <button
          id="mobile-hamburger-btn"
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-[105] cursor-pointer focus:outline-none relative"
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay with dedicated top padding and compact typography */}
      <div
        id="mobileMenu"
        className={`fixed inset-0 z-[95] bg-[#382A22]/95 backdrop-blur-2xl md:hidden flex flex-col justify-start items-start pt-20 pb-10 px-8 overflow-y-auto transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-3 w-full max-w-sm mt-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="text-xl font-medium text-white/90 hover:text-white py-2 px-3 -mx-3 rounded-xl hover:bg-white/10 transition-colors block cursor-pointer select-auto"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/15 mt-2">
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-[#7A553A] text-white font-medium text-center shadow-lg transition-opacity"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
