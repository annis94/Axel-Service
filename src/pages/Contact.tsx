import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Clock as ClockIcon, MessageCircle as MessageCircleIcon } from "lucide-react";

const contactInfo = [
  {
    icon: <PhoneIcon className="w-6 h-6 text-blue-600" />,
    title: "Téléphone",
          value: "+33 6 60 20 26 12",
    description: "Appelez-nous pour une réservation"
  },
  {
    icon: <MailIcon className="w-6 h-6 text-blue-600" />,
    title: "Email",
    value: "contact@axel-services.fr",
    description: "Envoyez-nous un message pour toute question"
  },
  {
    icon: <MapPinIcon className="w-6 h-6 text-blue-600" />,
    title: "Adresse",
    value: "Paris, France",
    description: "Nous intervenons dans toute la région parisienne"
  },
  {
    icon: <ClockIcon className="w-6 h-6 text-blue-600" />,
    title: "Horaires",
    value: "Lun-Ven: 8h-18h",
    description: "Sam: 9h-17h | Dim: Sur rendez-vous"
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous sommes là pour vous aider. Contactez-nous pour discuter de vos besoins 
              et réserver nos services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-blue-600 mb-2">
                    {info.value}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Pour toute demande, n'hésitez pas à nous contacter directement par téléphone ou WhatsApp.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200/50">
                <PhoneIcon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Par téléphone</h3>
                <p className="text-gray-600 mb-4">Appelez-nous directement pour une réservation</p>
                <Button 
                  size="lg" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white"
                  onClick={() => window.location.href = 'tel:0660202612'}
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Button>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200/50">
                <MessageCircleIcon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Par WhatsApp</h3>
                <p className="text-gray-600 mb-4">Envoyez-nous un message pour une réservation</p>
                <Button 
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => window.open('https://wa.me/33660202612?text=Bonjour, je souhaite réserver vos services', '_blank')}
                >
                  <MessageCircleIcon className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </div>
  );
} 