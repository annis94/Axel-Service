import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Target, Users, Award, Clock, CheckCircle, Phone, MapPin, Mail } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-cyan-600" />,
      title: "Professionnalisme",
      description: "Équipe qualifiée et matériel professionnel pour des résultats optimaux"
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      title: "Excellence",
      description: "Exigence de qualité dans chaque intervention et service"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Réactivité",
      description: "Intervention rapide et disponibilité 24/7 pour vos urgences"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Fiabilité",
      description: "Engagement total et résultats garantis pour votre satisfaction"
    }
  ];



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
              Notre Histoire
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6">
              À propos de <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">3D Sentry</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins de nettoyage professionnel et de traitement 3D. 
              Solutions radicales, résultats garantis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-6">
            Ce que nous <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">faisons</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions complètes de nettoyage professionnel et de traitement 3D
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Nettoyage Professionnel */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <Sparkles className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nettoyage Professionnel</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Solutions complètes pour tous types d'espaces :
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Bureaux et environnements de travail</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Entrepôts et commerces</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Nettoyage Airbnb et fin de séjour</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Nettoyage vitres intérieur et extérieur</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Fin de chantier et remise en état</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Nettoyage événementiel</span>
              </li>
            </ul>
          </motion.div>

          {/* 3D Sentry Solutions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3D Sentry Solutions</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Protection et traitement spécialisés :
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span><strong>Désinfection</strong> - Élimination des bactéries et virus</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span><strong>Désinsectisation</strong> - Traitement contre les insectes</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span><strong>Dératisation</strong> - Élimination des rongeurs</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Intervention ponctuelle curative</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Contrats annuels préventifs</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Solutions radicales et durables</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 rounded-2xl lg:rounded-3xl p-8 lg:p-12 border border-cyan-200/50 shadow-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Offrir des solutions radicales, durables et adaptées à chaque situation, 
                pour restaurer la tranquillité de nos clients. Nous nous engageons à 
                fournir un service professionnel de qualité, disponible 24/7.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-6">
            Nos <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Valeurs</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Les principes qui guident chacune de nos interventions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>



      {/* Contact CTA */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-cyan-200/50 text-center"
        >
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-gray-900 mb-4">
              Prêt à nous faire confiance ?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Contactez-nous pour discuter de vos besoins et obtenir une solution personnalisée
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

export default About; 