import { useEffect, useRef } from 'react';

export const useHomeScroll = () => {
  const isMobile = useRef(false);
  const scrollEnabled = useRef(true);

  useEffect(() => {
    // Détecter si c'est un appareil mobile
    const checkMobile = () => {
      isMobile.current = window.innerWidth <= 768;
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Optimiser le scroll sur mobile
    const handleTouchStart = () => {
      if (!isMobile.current) return;
      scrollEnabled.current = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMobile.current) return;
      
      // Permettre le scroll naturel
      if (scrollEnabled.current) {
        return;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isMobile.current) return;
      
      // Permettre le scroll naturel
      scrollEnabled.current = true;
    };

    // Ajouter les événements pour mobile
    if (isMobile.current) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
      document.addEventListener('wheel', handleWheel, { passive: true });
    }

    // Améliorer les performances de scroll sur mobile
    if (isMobile.current) {
      // Désactiver les animations complexes sur mobile
      document.documentElement.style.setProperty('--scroll-behavior', 'auto');
      
      // Optimiser les performances
      const style = document.createElement('style');
      style.textContent = `
        @media (max-width: 768px) {
          .motion-section {
            transform: none !important;
            will-change: auto !important;
          }
          
          * {
            animation-duration: 0.1s !important;
            transition-duration: 0.1s !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      
      if (isMobile.current) {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('wheel', handleWheel);
      }
      
      document.documentElement.style.removeProperty('--scroll-behavior');
    };
  }, []);

  return {
    isMobile: isMobile.current,
    scrollEnabled: scrollEnabled.current
  };
}; 