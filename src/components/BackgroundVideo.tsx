import { useEffect, useRef } from 'react';

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Force video pause & properties for manual scrubbing
    video.preload = 'auto';
    video.muted = true;
    video.pause();

    // 2. Check for fine mouse pointers (desktop/laptop) - fallback gracefully on touch/mobile
    const isFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let targetProgress = 0;
    let currentProgress = 0;
    const lerpFactor = 0.12; // Easing reactivity
    let rafId: number | null = null;

    const hero = document.getElementById('home') || document.body;

    // Passive mouse position listener
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      if (rect.width > 0) {
        targetProgress = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      }
    };

    // 3. 60 FPS loop guarded against video.seeking
    function animateScrub() {
      currentProgress += (targetProgress - currentProgress) * lerpFactor;

      // CRITICAL FIX: Only update currentTime if video is NOT currently seeking
      if (video && video.duration && !video.seeking) {
        const targetTime = currentProgress * video.duration;
        if (Math.abs(video.currentTime - targetTime) > 0.02) {
          video.currentTime = targetTime;
        }
      }

      rafId = requestAnimationFrame(animateScrub);
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 4. Start loop once metadata is loaded
    if (video.readyState >= 1) {
      rafId = requestAnimationFrame(animateScrub);
    } else {
      video.addEventListener(
        'loadedmetadata',
        () => {
          rafId = requestAnimationFrame(animateScrub);
        },
        { once: true }
      );
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <video
      id="hero-background-video"
      ref={videoRef}
      src="/hero%20animation.mp4"
      muted
      playsInline
      preload="auto"
      className="fixed inset-0 z-0 w-full h-full object-cover opacity-60 pointer-events-none"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        objectFit: 'cover',
        objectPosition: '70% center',
      }}
    />
  );
}
