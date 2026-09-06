import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export function HeroSection() {
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const { displayed, done } = useTypewriter(
    'Glad you stopped in. Good taste tends to find us. Now, what are we building?',
    38,
    600
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPillsVisible(true);
    }, 400);

    return () => window.clearTimeout(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText('hello@mainframe.co');
      } else {
        // Fallback for older browsers / iframe restrictions
        const textArea = document.createElement('textarea');
        textArea.value = 'hello@mainframe.co';
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

  const handlePillClick = (label: string) => {
    const subjectMap: Record<string, string> = {
      'Pitch us an idea': 'Project Inquiry / Pitch',
      'Come work here': 'Job Inquiry / Application',
      'Send a brief hello': 'Hello from Mainframe',
      'See how we operate': 'Mainframe Operations & Process Inquiry',
    };
    const subject = subjectMap[label] || 'Mainframe Inquiry';
    window.location.href = `mailto:hello@mainframe.co?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <section
      id="hero-section"
      className="relative z-10 h-screen w-full flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden"
    >
      <div id="hero-content-container" className="max-w-2xl relative z-10">
        {/* 1. Blurred intro label */}
        <div
          id="hero-blurred-label"
          className="pointer-events-none select-none mb-6 text-white opacity-80"
          style={{
            fontSize: 'clamp(20px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
            filter: 'blur(4px)',
          }}
        >
          Hey there, meet A.R.I.A,
          <br />
          Mainframe's Adaptive Response Interface Agent
        </div>

        {/* 2. Typewriter text */}
        <div className="mb-8 min-h-[80px] sm:min-h-[100px]">
          <p
            id="hero-typewriter-text"
            className="text-white text-[20px] sm:text-[26px] leading-[1.35] inline"
            style={{
              fontWeight: 400,
            }}
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

        {/* 3. Action pill buttons */}
        <div
          id="hero-action-pills"
          className="flex flex-wrap gap-2"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* 4 White pill buttons */}
          {[
            'Pitch us an idea',
            'Come work here',
            'Send a brief hello',
            'See how we operate',
          ].map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => handlePillClick(label)}
              className="bg-white text-black px-5 py-2 rounded-full text-[15px] hover:bg-black hover:text-white border border-black/10 transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              {label}
            </button>
          ))}

          {/* 1 Outline pill button with copy icon */}
          <button
            id="copy-email-pill"
            type="button"
            onClick={handleCopyEmail}
            title={copied ? 'Copied to clipboard!' : 'Click to copy email'}
            className="group flex items-center gap-3 border border-white text-white bg-transparent px-5 py-2 rounded-full text-[15px] hover:bg-white hover:text-black transition-colors duration-200 whitespace-nowrap cursor-pointer relative"
          >
            <span className="underline underline-offset-2">
              Reach us: hello@mainframe.co
            </span>

            {/* Copy icon */}
            <svg
              className="w-3 h-3 flex-shrink-0 transition-transform duration-150 group-active:scale-90"
              width="12"
              height="12"
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
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] bg-white text-black rounded font-medium shadow-md pointer-events-none transition-opacity duration-200">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
