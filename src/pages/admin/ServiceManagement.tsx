import React, { useState } from 'react';
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Clock,
  DollarSign,
  Users,
  Star,
  Tag,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  basePrice: number;
  duration: number; // in minutes
  status: 'active' | 'inactive' | 'pending';
  popularity: number;
  rating: number;
  tags: string[];
  requirements: string[];
}

const ServiceManagement: React.FC = () => {
  const [services] = useState<Service[]>([
    {
      id: '1',
              name: 'Nettoyage Complet',
        description: 'Service de nettoyage complet pour votre maison',
      category: 'Residential',
      basePrice: 150,
      duration: 180,
      status: 'active',
      popularity: 95,
      rating: 4.8,
      tags: ['deep-clean', 'residential', 'premium'],
      requirements: ['Cleaning supplies', 'Vacuum cleaner', 'Mop']
    },
    {
      id: '2',
              name: 'Nettoyage Bureau',
        description: 'Service de nettoyage professionnel pour espaces de bureau',
      category: 'Commercial',
      basePrice: 200,
      duration: 240,
      status: 'active',
      popularity: 85,
      rating: 4.6,
      tags: ['commercial', 'office', 'professional'],
      requirements: ['Commercial cleaning supplies', 'Floor polisher']
    },
    {
      id: '3',
              name: 'Nettoyage Déménagement',
        description: 'Service de nettoyage complet pour nouvelles maisons',
      category: 'Residential',
      basePrice: 180,
      duration: 240,
      status: 'pending',
      popularity: 75,
      rating: 4.7,
      tags: ['move-in', 'residential', 'deep-clean'],
      requirements: ['Heavy-duty cleaning supplies', 'Ladder']
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'Residential' | 'Commercial'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive' | 'pending'>('all');

  const filteredServices = services.filter(service => {
    const matchesSearch = 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || service.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: Service['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Service Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          Add New Service
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as 'all' | 'Residential' | 'Commercial')}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as Service['status'] | 'all')}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                  <p className="text-sm text-gray-500">{service.category}</p>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{service.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">${service.basePrice}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{service.duration} min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{service.popularity}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{service.rating}/5</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-3 flex justify-end gap-2">
              <button className="text-blue-600 hover:text-blue-900">
                <Edit className="w-5 h-5" />
              </button>
              <button className="text-red-600 hover:text-red-900">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceManagement; 