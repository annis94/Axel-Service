import React from "react";
import { Award, ThumbsUp, FileCheck, Euro, Users } from "lucide-react";

const advantages = [
  { icon: <Users className="w-8 h-8 text-blue-600" />, title: "Intervenants qualifiés", desc: "Des intervenants en CDI, formés et qualifiés." },
  { icon: <FileCheck className="w-8 h-8 text-blue-600" />, title: "Simplicité administrative", desc: "O engagement, O démarche administrative : la simplicité avant tout." },
  { icon: <ThumbsUp className="w-8 h-8 text-blue-600" />, title: "Garantie satisfaction", desc: "Garantie satisfait, refait ou remboursé." },
  { icon: <Euro className="w-8 h-8 text-blue-600" />, title: "50% de crédit d'impôt", desc: "50% de crédit d'impôt ou avance immédiate." },
  { icon: <Award className="w-8 h-8 text-blue-600" />, title: "Expérience", desc: "À vos côtés depuis 1996, près de 600 agences en France." },
];

const Advantages: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10 text-center">Pourquoi choisir Axel Services ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {advantages.map((adv, idx) => (
          <div key={idx} className="bg-blue-50 rounded-2xl shadow p-6 flex flex-col items-center text-center">
            <div className="mb-4">{adv.icon}</div>
            <h3 className="font-bold text-lg mb-2 text-blue-900">{adv.title}</h3>
            <p className="text-gray-700 text-sm">{adv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Advantages; 