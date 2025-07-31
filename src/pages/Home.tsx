import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, Shield, Users, CalendarCheck, ArrowRight, Star, Zap, Target, Award, Clock, Sparkles, Building2, Home as HomeIcon, Sparkle, ChevronRight, Play } from "lucide-react";

const accent = "text-cyan-400";

const cleaningServices = [
  { title: "Nettoyage des locaux professionnels", icon: <Building2 className="w-5 h-5 text-cyan-600" />, desc: "Bureaux, entrepôts, commerces" },
  { title: "Nettoyage Airbnb", icon: <HomeIcon className="w-5 h-5 text-cyan-600" />, desc: "Préparation et fin de séjour" },
  { title: "Nettoyage vitre", icon: <Sparkle className="w-5 h-5 text-cyan-600" />, desc: "Intérieur et extérieur" },
  { title: "Nettoyage fin de chantier", icon: <Building2 className="w-5 h-5 text-cyan-600" />, desc: "Remise en état complète" },
  { title: "Nettoyage bureau", icon: <Building2 className="w-5 h-5 text-cyan-600" />, desc: "Environnements de travail" },
  { title: "Nettoyage événementiel", icon: <Sparkles className="w-5 h-5 text-cyan-600" />, desc: "Avant et après événements" }
];

const sentryServices = [
  { title: "Intervention ponctuelle curative", icon: <Zap className="w-5 h-5 text-emerald-600" />, desc: "ou contrat annuel préventif" },

  { title: "Solution radicale & durable", icon: <Target className="w-5 h-5 text-emerald-600" />, desc: "Résultats garantis" },
  { title: "Disponibilité 7/7", icon: <Clock className="w-5 h-5 text-emerald-600" />, desc: "Intervention rapide" },
  { title: "Professionnel", icon: <Building2 className="w-5 h-5 text-emerald-600" />, desc: "Dératisation, désinsectisation, désinfection" },
  { title: "Particulier", icon: <HomeIcon className="w-5 h-5 text-emerald-600" />, desc: "Solutions adaptées pour la tranquillité" }
];

const stats = [
  { number: "24/7", label: "Disponibilité", icon: <CalendarCheck className="w-5 h-5" /> },
  { number: "Pro", label: "Équipe certifiée", icon: <Shield className="w-5 h-5" /> },
  { number: "Rapide", label: "Intervention", icon: <Zap className="w-5 h-5" /> },
  { number: "100%", label: "Résultats garantis", icon: <Target className="w-5 h-5" /> }
];

const advantages = [
  { 
    icon: <Zap className="w-6 h-6 text-cyan-500" />, 
    title: "Intervention Express", 
    desc: "Disponibilité 7j/7, intervention en moins de 2h",
    color: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&crop=center"
  },
  { 
    icon: <Shield className="w-6 h-6 text-emerald-500" />, 
    title: "Expertise 3D Complète", 
    desc: "Désinfection, Désinsectisation, Dératisation",
    color: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop&crop=center"
  },
  { 
    icon: <Users className="w-6 h-6 text-purple-500" />, 
    title: "Pro & Particulier", 
    desc: "Solutions sur-mesure pour tous types de clients",
    color: "from-purple-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center"
  },
  { 
    icon: <Phone className="w-6 h-6 text-orange-500" />, 
        title: "Service Premium",
    desc: "Équipe certifiée, matériel professionnel, suivi qualité",
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center"
  },
  { 
    icon: <CheckCircle className="w-6 h-6 text-green-500" />, 
    title: "Résultat Garanti", 
    desc: "Solutions radicales et durables, satisfaction assurée",
    color: "from-green-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&crop=center"
  },
  { 
    icon: <Star className="w-6 h-6 text-yellow-500" />, 
        title: "Expertise Certifiée",
    desc: "Équipe qualifiée, matériel professionnel, suivi qualité",
    color: "from-yellow-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop&crop=center"
  }
];

export default function Home() {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const advantagesRef = useRef(null);
  const aboutRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const servicesY = useTransform(scrollY, [200, 600], [100, 0]);
  const statsY = useTransform(scrollY, [400, 800], [100, 0]);
  const advantagesY = useTransform(scrollY, [600, 1000], [100, 0]);
  const aboutY = useTransform(scrollY, [800, 1200], [100, 0]);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isAdvantagesInView = useInView(advantagesRef, { once: true, margin: "-100px" });
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 min-h-screen w-full overflow-x-hidden">
      {/* Hero Section - Optimisé */}
      <motion.section 
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-8"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          setMousePosition({ x, y });
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Background Patterns Sophistiqués */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-transparent to-blue-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(6,182,212,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.06),transparent_40%)]" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 pt-12 lg:pt-16">
          {/* Content Left - Optimisé */}
          <motion.div 
            initial={{ x: -60, opacity: 0 }}
            animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 max-w-2xl lg:max-w-none"
          >
            {/* Badge Premium */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm border border-cyan-200/50 text-cyan-700 rounded-full text-xs sm:text-sm font-medium shadow-sm mb-6"
            >
              <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" />
              Disponibilité 7j/7 • Intervention rapide
            </motion.div>
            
            {/* Titre Principal - Optimisé */}
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black leading-[0.9] text-gray-900 tracking-tight mb-4"
            >
              <span className="block">Nettoyage</span>
              <span className="block">professionnel</span>
              <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                & 3D Sentry
              </span>
              <span className="block">Solutions</span>
            </motion.h1>
            
            {/* Description - Optimisée */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              Expertise complète en nettoyage et traitement 3D. 
              <span className="font-semibold text-gray-800"> Solutions radicales, résultats garantis.</span>
            </motion.p>
            
            {/* Boutons - Optimisés */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link to="/contact">
                <Button className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-0">
                  Nous contacter
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-2 border-gray-300 hover:border-cyan-500 text-gray-700 font-semibold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 hover:bg-cyan-50/50 bg-white/80 backdrop-blur-sm">
                  Nos services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image Right - Optimisée */}
          <motion.div 
            initial={{ x: 60, opacity: 0, scale: 0.9 }}
            animate={isHeroInView ? { x: 0, opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl blur-2xl" />
              
              {/* Image Container */}
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl border border-gray-100/50">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&crop=center"
                  alt="Nettoyage professionnel 3D Sentry Solutions"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              
              {/* Floating Elements - Responsive */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-lg flex items-center justify-center">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center">
                <Sparkle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section - Optimisé */}
      <motion.section 
        ref={statsRef}
        style={{ y: statsY }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isStatsInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={isStatsInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl sm:rounded-3xl text-cyan-600 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{stat.number}</div>
              <div className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Services Section - Optimisé */}
      <motion.section 
        ref={servicesRef}
        style={{ y: servicesY }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-8 lg:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6">
            Nos <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Solutions complètes et professionnelles pour tous vos besoins de nettoyage et de traitement
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isServicesInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Nettoyage */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={isServicesInView ? { scale: 1, opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl border border-gray-100 p-6 lg:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8">
                <div className="p-4 lg:p-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl lg:rounded-3xl text-white text-2xl lg:text-3xl shadow-xl">
                  🧹
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-gray-900">Nettoyage professionnel</h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Solutions complètes pour tous types d'espaces</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cleaningServices.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1 * idx }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-cyan-100 rounded-xl text-cyan-600">
                        {service.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-base flex-1">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3D Sentry */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={isServicesInView ? { scale: 1, opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl border border-gray-100 p-6 lg:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8">
                <div className="p-4 lg:p-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl lg:rounded-3xl text-white text-2xl lg:text-3xl shadow-xl">
                  🛡️
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-gray-900">3D Sentry Solutions</h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Protection et traitement spécialisés</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sentryServices.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1 * idx }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
                        {service.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-base flex-1">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Advantages Section - Optimisé */}
      <motion.section 
        ref={advantagesRef}
        style={{ y: advantagesY }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isAdvantagesInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-8 lg:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6">
            Pourquoi nous <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">choisir</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Notre expertise et notre engagement font la différence
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isAdvantagesInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={isAdvantagesInView ? { scale: 1, opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl border border-gray-100"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-2xl lg:rounded-t-3xl">
                <img
                  src={adv.image}
                  alt={adv.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${adv.color} opacity-20`} />
              </div>
              <div className="p-6 lg:p-8">
                <div className={`absolute inset-0 bg-gradient-to-br ${adv.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="mb-4 lg:mb-6">
                    {adv.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-3 lg:mb-4">{adv.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">{adv.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* About Section - Optimisé */}
      <motion.section 
        ref={aboutRef}
        style={{ y: aboutY }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isAboutInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 rounded-2xl lg:rounded-3xl p-8 lg:p-12 border border-cyan-200/50 shadow-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black mb-8 lg:mb-12 text-center text-gray-900">
              La signification de <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">3D Sentry Solutions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isAboutInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-4 lg:space-y-6"
              >
                <div className="text-3xl lg:text-4xl font-display font-black text-cyan-600">3D</div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Fait référence aux trois grands domaines de notre métier : 
                  <span className="font-bold text-gray-900"> Désinfection, Désinsectisation, Dératisation</span>, 
                  soulignant une expertise complète.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isAboutInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4 lg:space-y-6"
              >
                <div className="text-3xl lg:text-4xl font-display font-black text-cyan-600">Sentry</div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Évoque une <span className="font-bold text-gray-900">surveillance active</span> et une 
                  <span className="font-bold text-gray-900"> protection continue</span>, montrant que nous 
                  sommes une entreprise proactive.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isAboutInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-4 lg:space-y-6"
              >
                <div className="text-3xl lg:text-4xl font-display font-black text-cyan-600">Solutions</div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Met l'accent sur notre capacité à <span className="font-bold text-gray-900">résoudre des problèmes</span>, 
                  ce qui est rassurant et orienté client.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isAboutInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 lg:mt-16 p-6 lg:p-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl lg:rounded-3xl border border-cyan-200/50 shadow-lg"
            >
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                <span className="font-bold text-gray-900">Notre mission :</span> offrir des solutions radicales, 
                durables et adaptées à chaque situation, pour restaurer la tranquillité de nos clients.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
} 