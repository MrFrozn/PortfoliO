import { useEffect, useRef } from 'react';

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Performance optimizations: preload and mute
    video.preload = 'auto';
    video.muted = true;

    // 2. Check for fine mouse pointers (desktop/laptop) - fallback gracefully on touch/mobile
    const isFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let targetProgress = 0;
    let currentProgress = 0;
    const lerpFactor = 0.08; // Easing smoothness (0.05 to 0.1 for silky smooth movement)
    let rafId: number | null = null;

    const hero = document.getElementById('home') || document.body;

    // Event listener ONLY computes and stores targetProgress normalized between 0 and 1
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      if (rect.width > 0) {
        targetProgress = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      }
    };

    // Continuous requestAnimationFrame loop with Linear Interpolation (LERP)
    function animateScrub() {
      // Smoothly transition currentProgress towards targetProgress
      currentProgress += (targetProgress - currentProgress) * lerpFactor;

      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        const targetTime = currentProgress * video.duration;
        // Only update video currentTime if difference is noticeable to avoid thread lock
        if (Math.abs(video.currentTime - targetTime) > 0.01) {
          video.currentTime = targetTime;
        }
      }

      rafId = requestAnimationFrame(animateScrub);
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animateScrub);

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
