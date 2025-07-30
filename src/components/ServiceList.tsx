import React from "react";

interface ServiceListProps {
  services: string[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => (
  <ul className="space-y-2 mt-6 mb-8">
    {services.map((service, idx) => (
      <li key={idx}>
        <a
          href="#services"
          className="flex items-center justify-between text-lg md:text-xl text-white hover:underline group"
        >
          <span>{service}</span>
          <span className="ml-2 text-white group-hover:text-blue-200">&gt;</span>
        </a>
      </li>
    ))}
  </ul>
);

export default ServiceList; 