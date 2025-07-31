// Utilitaires pour optimiser les performances sur mobile

export const isMobile = (): boolean => {
  return window.innerWidth <= 768;
};

export const isTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const optimizeForMobile = (): void => {
  if (!isMobile()) return;

  // Réduire les animations sur mobile
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      * {
        animation-duration: 0.2s !important;
        transition-duration: 0.2s !important;
      }
      
      .fixed {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
    }
  `;
  document.head.appendChild(style);
};

export const disableScrollOnMenuOpen = (isOpen: boolean): void => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  } else {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }
};

export const smoothScrollTo = (target: number, duration: number = 300): void => {
  if (!isMobile()) {
    window.scrollTo({ top: target, behavior: 'smooth' });
    return;
  }

  // Implémentation manuelle pour mobile
  const start = window.pageYOffset;
  const distance = target - start;
  const startTime = performance.now();

  const easeInOutQuad = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}; 