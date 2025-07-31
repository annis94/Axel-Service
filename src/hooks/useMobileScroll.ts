import { useEffect, useRef } from 'react';

export const useMobileScroll = () => {
  const isMobile = useRef(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    // Détecter si c'est un appareil mobile
    const checkMobile = () => {
      isMobile.current = window.innerWidth <= 768;
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Optimiser le scroll sur mobile
    const handleScroll = () => {
      if (!isMobile.current) return;

      lastScrollY.current = window.scrollY;

      if (!ticking.current) {
        requestAnimationFrame(() => {
          // Ici on peut ajouter des optimisations spécifiques pour mobile
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Améliorer les performances de scroll sur mobile
    if (isMobile.current) {
      // Désactiver les animations complexes sur mobile
      document.documentElement.style.setProperty('--scroll-behavior', 'auto');
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.removeProperty('--scroll-behavior');
    };
  }, []);

  return {
    isMobile: isMobile.current,
    lastScrollY: lastScrollY.current
  };
}; 