import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

export default function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white select-none">
      {/* Background Video controlled by mouse scrub */}
      <BackgroundVideo />

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Hero Section */}
      <HeroSection />
    </main>
  );
}

