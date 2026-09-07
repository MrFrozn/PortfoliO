import { useEffect, useRef } from 'react';

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let prevX: number | null = null;
    let targetTime = 0;
    let isSeeking = false;
    const SENSITIVITY = 0.8;

    const isTouchOrMobile = () => {
      return (
        window.innerWidth < 768 ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchOrMobile()) return;
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;

      const currentX = e.clientX;
      if (prevX === null) {
        prevX = currentX;
        return;
      }

      const delta = currentX - prevX;
      prevX = currentX;

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      targetTime = Math.max(0, Math.min(video.duration, targetTime + timeOffset));

      if (!isSeeking) {
        isSeeking = true;
        video.currentTime = targetTime;
      }
    };

    const handleSeeked = () => {
      if (Math.abs(video.currentTime - targetTime) > 0.01) {
        video.currentTime = targetTime;
      } else {
        isSeeking = false;
      }
    };

    const handleMouseLeave = () => {
      prevX = null;
    };

    const handleLoadedMetadata = () => {
      targetTime = video.currentTime || 0;
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('seeked', handleSeeked);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
