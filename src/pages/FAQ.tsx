import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Sparkles, Phone, Clock, CheckCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Quels sont vos délais d'intervention ?",
      answer: "Nous intervenons en moins de 2h en urgence et sous 24h pour les interventions programmées. Disponibilité 7j/7, 24h/24 pour les situations critiques."
    },
    {
      question: "Quels types de locaux nettoyez-vous ?",
      answer: "Nous nettoyons tous types d'espaces : bureaux, entrepôts, commerces, Airbnb, vitres, fin de chantier, événementiel. Solutions sur-mesure pour professionnels et particuliers."
    },
    {
      question: "Que signifie '3D Sentry Solutions' ?",
      answer: "3D = Désinfection, Désinsectisation, Dératisation. Sentry = Surveillance active et protection continue. Solutions = Capacité à résoudre tous types de problèmes."
    },
    {
      question: "Proposez-vous des contrats d'entretien ?",
      answer: "Oui, nous proposons des contrats annuels préventifs pour un entretien régulier et des interventions ponctuelles curatives selon vos besoins."
    },

    {
      question: "Quelles garanties offrez-vous ?",
      answer: "Résultats garantis 100%. Solutions radicales et durables. Équipe certifiée, matériel professionnel. Suivi qualité assuré."
    },
    {
      question: "Intervenez-vous en urgence ?",
      answer: "Oui, service SOS 24/7 disponible. Intervention rapide en cas d'urgence (infestation, contamination, etc.). Équipe d'astreinte."
    },
    {
      question: "Quels produits utilisez-vous ?",
      answer: "Produits professionnels certifiés, respectueux de l'environnement et de la santé. Matériel de dernière génération pour des résultats optimaux."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-transparent to-blue-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(6,182,212,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.06),transparent_40%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-cyan-200/50 text-cyan-700 rounded-full text-sm font-medium shadow-sm mb-6">
              <Shield className="w-4 h-4" />
              Support & Aide
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6">
              Questions <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Fréquentes</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Trouvez rapidement les réponses à vos questions sur nos services de nettoyage et 3D Sentry Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-cyan-200/50 text-center"
        >
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-gray-900 mb-4">
              Besoin d'aide supplémentaire ?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Notre équipe est disponible 24/7 pour répondre à toutes vos questions
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FAQ; 