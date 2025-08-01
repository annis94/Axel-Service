import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { smoothScrollTo } from '@/utils/mobileOptimization';

const FloatingCTA = () => {
  const { scrollY } = useScroll();
  
  // État pour contrôler l'affichage du bouton Scroll to Top
  const [showButton, setShowButton] = useState(false);
  
  // Effet de parallaxe inversé - les boutons montent quand on scrolle
  const y = useTransform(scrollY, [0, 500], [0, -300]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);
  
  // Écouter les changements de scrollY pour afficher/masquer le bouton
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowButton(latest > 500);
  });

  const scrollToTop = () => {
    smoothScrollTo(0, 500);
  };

  const handleCall = () => {
    window.location.href = 'tel:0660202612';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/33660202612?text=Bonjour, je souhaite réserver vos services', '_blank');
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-[9999] space-y-4 floating-buttons" 
      style={{ y, rotate }}
    >
      
      {/* Bouton WhatsApp */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group relative"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
          1
        </div>
      </motion.button>

      {/* Bouton Téléphone */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCall}
        className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group"
      >
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </motion.button>

      {/* Bouton Scroll to Top */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-800 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group"
          >
            <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FloatingCTA; 