import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tests', href: '#tests' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className="fixed top-0 left-0 w-full z-50 px-5 sm:px-8 py-4 sm:py-5 flex row justify-between items-center"
      >
        {/* Logo (left) */}
        <div id="navbar-logo" className="flex items-center gap-3">
          <span
            className="text-[21px] sm:text-[26px] tracking-tight font-medium text-white select-none"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mainframe®
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-white select-none leading-none opacity-90"
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </div>

        {/* Desktop nav links (center, hidden below md) */}
        <nav
          id="desktop-nav-links"
          className="hidden md:flex flex-row items-center gap-1 text-[18px] lg:text-[21px] xl:text-[23px] text-white"
          aria-label="Main Navigation"
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
        </nav>

        {/* Desktop CTA (right, hidden below md) */}
        <div className="hidden md:block">
          <a
            id="desktop-cta-link"
            href="#contact"
            className="text-[23px] text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger (visible below md) */}
        <button
          id="mobile-hamburger-btn"
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-50 cursor-pointer focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
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
      </header>

      {/* Mobile overlay (z-index: 40, above hero z-10 so hero text is completely covered and links are fully clickable) */}
      <div
        id="mobile-overlay-menu"
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-center items-start px-8 gap-8 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity py-2 w-full block cursor-pointer select-auto"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="text-[32px] font-medium text-white underline underline-offset-4 hover:opacity-60 transition-opacity mt-4 py-2 w-full block cursor-pointer select-auto"
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
