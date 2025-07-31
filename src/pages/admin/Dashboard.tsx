import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Briefcase,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Star,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Clock
} from 'lucide-react';

interface DashboardStats {
  totalUsers: number;
  activeProviders: number;
  totalBookings: number;
  totalRevenue: number;
  averageRating: number;
  pendingApprovals: number;
}

interface RecentActivity {
  id: string;
  type: 'new_user' | 'new_booking' | 'new_review' | 'payment';
  description: string;
  timestamp: string;
  status?: 'success' | 'warning' | 'error';
}

const AdminDashboard: React.FC = () => {
  const [stats] = useState<DashboardStats>({
    totalUsers: 1250,
    activeProviders: 85,
    totalBookings: 3200,
    totalRevenue: 45000,
    averageRating: 4.7,
    pendingApprovals: 12
  });

  const [recentActivity] = useState<RecentActivity[]>([
    {
      id: '1',
      type: 'new_user',
      description: 'New provider registration: John Doe',
      timestamp: '2024-03-20 14:30',
      status: 'success'
    },
    {
      id: '2',
      type: 'new_booking',
              description: 'New booking #1234: Nettoyage Professionnel',
      timestamp: '2024-03-20 13:45',
      status: 'success'
    },
    {
      id: '3',
      type: 'new_review',
      description: 'New 5-star review from Alice Johnson',
      timestamp: '2024-03-20 12:15',
      status: 'success'
    },
    {
      id: '4',
      type: 'payment',
      description: 'Payment dispute reported for booking #1230',
      timestamp: '2024-03-20 11:30',
      status: 'warning'
    }
  ]);

  const getActivityIcon = (type: RecentActivity['type']) => {
    switch (type) {
      case 'new_user':
        return <Users className="w-5 h-5" />;
      case 'new_booking':
        return <Briefcase className="w-5 h-5" />;
      case 'new_review':
        return <Star className="w-5 h-5" />;
      case 'payment':
        return <DollarSign className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status?: RecentActivity['status']) => {
    switch (status) {
      case 'success':
        return 'text-green-600';
      case 'warning':
        return 'text-yellow-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              12%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Active Providers</h3>
            <Briefcase className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-gray-900">{stats.activeProviders}</p>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              8%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Bookings</h3>
            <Calendar className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-gray-900">{stats.totalBookings}</p>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              15%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Revenue</h3>
            <DollarSign className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              20%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Average Rating</h3>
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-gray-900">{stats.averageRating}/5</p>
            <span className="text-sm text-green-600 flex items-center">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              0.2
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Pending Approvals</h3>
            <AlertCircle className="w-6 h-6 text-red-600" />
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-gray-900">{stats.pendingApprovals}</p>
            <span className="text-sm text-red-600 flex items-center">
              <ArrowDownRight className="w-4 h-4 mr-1" />
              3
            </span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
          <Link to="/admin/users" className="text-blue-600 hover:text-blue-800">View All</Link>
        </div>

        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className={`p-2 rounded-full bg-white ${getStatusColor(activity.status)}`}>
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1">
                <p className="text-gray-800">{activity.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{activity.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 