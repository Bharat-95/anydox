'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation'; // For route change detection

const Page = () => {
  const videoRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const video = videoRef.current;

    // Detect user interaction once anywhere on site
    const onFirstInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener('click', onFirstInteraction);
    };
    window.addEventListener('click', onFirstInteraction);

    // Pause video when tab not visible
    const onVisibilityChange = () => {
      if (!video) return;
      if (document.visibilityState === 'hidden') {
        video.pause();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('click', onFirstInteraction);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  // Pause on route change
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
  }, [pathname]);

  // Scroll into view play/pause logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasInteracted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && document.visibilityState === 'visible') {
          video.play().catch((err) => {
            console.warn('Autoplay with sound failed:', err);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [hasInteracted]);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <video
        ref={videoRef}
        playsInline
        // removed loop, added preload metadata for better control
        preload="metadata"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
      >
        <source src="/Hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default Page;
