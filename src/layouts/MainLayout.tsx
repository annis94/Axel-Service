import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import ScrollProgress from '@/components/ScrollProgress';
import { useMobileScroll } from '@/hooks/useMobileScroll';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Utiliser le hook pour optimiser le scroll sur mobile
  useMobileScroll();

  return (
    <div className="min-h-screen bg-background">
      {/* Barre de progression de scroll */}
      <ScrollProgress />

      {/* Navbar Sophistiquée */}
      <Navbar />

      {/* Main content avec padding-top pour la navbar fixe */}
      <main className="pt-16 lg:pt-20 scroll-smooth-mobile">
        {children}
      </main>

      {/* Footer Sophistiqué */}
      <Footer />

      {/* CTA Flottant */}
      <FloatingCTA />
    </div>
  );
};

export default MainLayout; 