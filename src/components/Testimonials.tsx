import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating?: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => (
  <section className="py-16 bg-[#f8fafc]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10 text-center">La satisfaction de nos clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="flex mb-3">
              {[...Array(t.rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">"{t.text}"</p>
            <p className="font-semibold text-blue-800">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 