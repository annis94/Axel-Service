import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Home as HomeIcon, 
  Sparkle, 
  Shield, 
  Zap, 
  Target, 
  Clock, 
  ArrowRight,
  Phone,
  CheckCircle,
  Star,
  Users
} from 'lucide-react';

const Services = () => {
  const cleaningServices = [
    { 
      title: "Nettoyage des locaux professionnels", 
      icon: <Building2 className="w-8 h-8 text-cyan-600" />, 
      desc: "Bureaux, entrepôts, commerces",
      features: ["Nettoyage quotidien", "Nettoyage de fin de semaine", "Nettoyage de fin de mois"]
    },
    { 
      title: "Nettoyage Airbnb", 
      icon: <HomeIcon className="w-8 h-8 text-cyan-600" />, 
      desc: "Préparation et fin de séjour",
      features: ["Nettoyage complet", "Changement de linge", "Vérification des équipements"]
    },
    { 
      title: "Nettoyage vitre", 
      icon: <Sparkle className="w-8 h-8 text-cyan-600" />, 
      desc: "Intérieur et extérieur",
      features: ["Vitres intérieures", "Vitres extérieures", "Baies vitrées"]
    },
    { 
      title: "Nettoyage fin de chantier", 
      icon: <Building2 className="w-8 h-8 text-cyan-600" />, 
      desc: "Remise en état complète",
      features: ["Nettoyage des poussières", "Nettoyage des traces", "Remise en état"]
    },
    { 
      title: "Nettoyage bureau", 
      icon: <Building2 className="w-8 h-8 text-cyan-600" />, 
      desc: "Environnements de travail",
      features: ["Bureaux individuels", "Salles de réunion", "Espaces communs"]
    },
    { 
      title: "Nettoyage événementiel", 
      icon: <Shield className="w-8 h-8 text-cyan-600" />, 
      desc: "Avant et après événements",
      features: ["Préparation des lieux", "Nettoyage post-événement", "Remise en état"]
    }
  ];

  const sentryServices = [
    { 
      title: "Désinfection", 
      icon: <Zap className="w-8 h-8 text-emerald-600" />, 
      desc: "Élimination des bactéries et virus",
      features: ["Traitement complet", "Produits certifiés", "Résultats garantis"]
    },
    { 
      title: "Désinsectisation", 
      icon: <Target className="w-8 h-8 text-emerald-600" />, 
      desc: "Traitement contre les insectes",
      features: ["Diagnostic complet", "Traitement ciblé", "Suivi post-traitement"]
    },
    { 
      title: "Dératisation", 
      icon: <Clock className="w-8 h-8 text-emerald-600" />, 
      desc: "Élimination des rongeurs",
      features: ["Inspection des lieux", "Mise en place de pièges", "Traitement préventif"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-emerald-600 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Nos <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Solutions complètes et professionnelles pour tous vos besoins de nettoyage et de traitement 3D
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Nettoyage Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 lg:mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                Nettoyage <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Professionnel</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Solutions complètes pour tous types d'espaces et d'environnements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cleaningServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Sentry Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 lg:mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                3D <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Sentry Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expertise complète en désinfection, désinsectisation et dératisation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sentryServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 lg:p-16 text-white"
          >
            <h3 className="text-3xl lg:text-4xl font-black mb-6">
              Prêt à nous faire confiance ?
            </h3>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour un devis personnalisé et une intervention rapide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-cyan-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Nous contacter
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300"
                onClick={() => window.location.href = 'tel:0660202612'}
              >
                <Phone className="mr-2 w-5 h-5" />
                06 60 20 26 12
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 