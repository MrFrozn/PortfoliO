import { useEffect } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExamsSection } from './components/ExamsSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }

    const handleHashChange = () => {
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Background Video controlled by mouse scrub */}
      <BackgroundVideo />

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Hero Section */}
      <HeroSection />

      {/* About Me Section directly below Hero */}
      <AboutSection />

      {/* Experiences & Path Section */}
      <ExperiencesSection />

      {/* Skills & Certifications Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* BTS Exams Section */}
      <ExamsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}


