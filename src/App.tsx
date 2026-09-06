import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { SkillsSection } from './components/SkillsSection';

export default function App() {
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
    </main>
  );
}


