import React from "react";
import { MapPin, Phone, Calendar } from "lucide-react";

const actions = [
  {
    icon: <MapPin className="w-6 h-6" />, color: "bg-emerald-400", href: "#localisation", label: "Trouver une agence"
  },
  {
    icon: <Phone className="w-6 h-6" />, color: "bg-orange-300", href: "tel:+33123456789", label: "Appeler"
  },
  {
    icon: <Calendar className="w-6 h-6" />, color: "bg-yellow-300", href: "#rendezvous", label: "Prendre rendez-vous"
  }
];

const FloatingActions: React.FC = () => (
  <div className="fixed right-6 top-1/3 z-50 flex flex-col gap-4">
    {actions.map((action, idx) => (
      <a
        key={idx}
        href={action.href}
        aria-label={action.label}
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg ${action.color} hover:scale-110 transition-transform`}
        target={action.href.startsWith('http') ? '_blank' : undefined}
        rel="noopener noreferrer"
      >
        {action.icon}
      </a>
    ))}
  </div>
);

export default FloatingActions; 