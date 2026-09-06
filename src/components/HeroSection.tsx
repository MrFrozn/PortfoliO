import { useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const { displayed, done } = useTypewriter(
    'Welcome to my porfolio, hope you will enjoy it !',
    38,
    600
  );

  const handleCopyEmail = async () => {
    const email = 'maxencefontainegros@ik.me';
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browsers / iframe restrictions
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section
      id="home"
      className="relative z-10 h-screen w-full flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-10 px-5 sm:px-8 md:px-10 overflow-hidden animate-fade-in"
    >
      {/* Central / Upper Hero Content */}
      <div id="hero-content-container" className="max-w-3xl relative z-10 my-auto">
        {/* Big Letters Name replacing blurred intro text */}
        <h1
          id="hero-author-name"
          className="text-white font-medium tracking-tight mb-4 sm:mb-6 select-none"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 6.5vw, 68px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}
        >
          Maxence <span className="whitespace-nowrap">FONTAINE&nbsp;GROS</span>
        </h1>

        {/* Typewriter text */}
        <div className="min-h-[50px] sm:min-h-[70px]">
          <p
            id="hero-typewriter-text"
            className="text-white/90 text-[20px] sm:text-[26px] leading-[1.35] inline font-normal"
          >
            {displayed}
          </p>
          {!done && (
            <span
              id="typewriter-cursor"
              className="cursor-blink inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px]"
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      {/* Bottom Left Button: Reach me */}
      <div id="hero-bottom-bar" className="relative z-10 flex justify-start items-center">
        <button
          id="copy-email-pill"
          type="button"
          onClick={handleCopyEmail}
          title={copied ? 'Copied to clipboard!' : 'Click to copy email'}
          className="group flex items-center gap-3 border border-white text-white bg-transparent px-5 py-2.5 rounded-full text-[15px] sm:text-[16px] hover:bg-white hover:text-black transition-colors duration-200 whitespace-nowrap cursor-pointer relative backdrop-blur-xs"
        >
          <span className="underline underline-offset-2">
            Reach me : maxencefontainegros@ik.me
          </span>

          {/* Copy icon */}
          <svg
            className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-150 group-active:scale-90"
            width="14"
            height="14"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="1"
              y="3"
              width="7"
              height="8"
              stroke="currentColor"
              strokeWidth="1"
            />
            <rect
              x="4"
              y="1"
              width="7"
              height="8"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>

          {/* Subtle "Copied!" floating indicator */}
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[11px] bg-white text-black rounded font-medium shadow-lg pointer-events-none transition-opacity duration-200">
              Copied!
            </span>
          )}
        </button>
      </div>
    </section>
  );
}
