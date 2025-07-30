import React, { useState } from 'react';
import {
  DollarSign,
  CreditCard,
  Wallet,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  Download,
  Filter,
  Search,
  Calendar,
  User,
  Briefcase,
  Clock
} from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  time: string;
  amount: number;
  type: 'booking' | 'withdrawal' | 'refund';
  status: 'completed' | 'pending' | 'failed';
  clientName: string;
  providerName: string;
  service: string;
  paymentMethod: string;
  description: string;
}

interface PaymentStats {
  totalRevenue: number;
  pendingWithdrawals: number;
  completedWithdrawals: number;
  failedTransactions: number;
  averageTransactionAmount: number;
  monthlyGrowth: number;
}

const PaymentManagement: React.FC = () => {
  const [stats] = useState<PaymentStats>({
    totalRevenue: 25000,
    pendingWithdrawals: 3500,
    completedWithdrawals: 15000,
    failedTransactions: 500,
    averageTransactionAmount: 150,
    monthlyGrowth: 12.5
  });

  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      date: '2024-03-20',
      time: '09:00',
      amount: 150,
      type: 'booking',
      status: 'completed',
      clientName: 'John Doe',
      providerName: 'Jane Smith',
              service: 'Nettoyage Complet',
      paymentMethod: 'Credit Card',
              description: 'Payment for Nettoyage Complet service'
    },
    {
      id: '2',
      date: '2024-03-20',
      time: '14:00',
      amount: 200,
      type: 'withdrawal',
      status: 'pending',
      clientName: 'Alice Johnson',
      providerName: 'Mike Wilson',
              service: 'Nettoyage Bureau',
      paymentMethod: 'Bank Transfer',
      description: 'Provider withdrawal request'
    },
    {
      id: '3',
      date: '2024-03-21',
      time: '10:00',
      amount: 180,
      type: 'refund',
      status: 'failed',
      clientName: 'Bob Brown',
      providerName: 'Sarah Davis',
              service: 'Nettoyage Déménagement',
      paymentMethod: 'Credit Card',
      description: 'Refund for cancelled service'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'booking' | 'withdrawal' | 'refund'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'pending' | 'failed'>('all');
  const [dateFilter, setDateFilter] = useState('');

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = 
      transaction.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.providerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.service.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === 'all' || transaction.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || transaction.status === statusFilter;
    const matchesDate = !dateFilter || transaction.date === dateFilter;

    return matchesSearch && matchesType && matchesStatus && matchesDate;
  });

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4" />;
      case 'failed':
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getTypeIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'booking':
        return <CreditCard className="w-4 h-4" />;
      case 'withdrawal':
        return <Wallet className="w-4 h-4" />;
      case 'refund':
        return <DollarSign className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Payment Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Download className="w-5 h-5" />
          Export Transactions
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Revenue</h3>
            <DollarSign className="w-6 h-6 text-green-500" />
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900">${stats.totalRevenue}</span>
            <span className="ml-2 text-sm text-green-600 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              {stats.monthlyGrowth}%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Pending Withdrawals</h3>
            <Wallet className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900">${stats.pendingWithdrawals}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Average Transaction</h3>
            <CreditCard className="w-6 h-6 text-blue-500" />
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900">${stats.averageTransactionAmount}</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as Transaction['type'] | 'all')}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Types</option>
            <option value="booking">Bookings</option>
            <option value="withdrawal">Withdrawals</option>
            <option value="refund">Refunds</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as Transaction['status'] | 'all')}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>

          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                        {getTypeIcon(transaction.type)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {transaction.description}
                        </div>
                        <div className="text-sm text-gray-500">
                          {transaction.service}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      ${transaction.amount}
                    </div>
                    <div className="text-sm text-gray-500">
                      {transaction.clientName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {transaction.providerName}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {transaction.date}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {transaction.time}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      {transaction.paymentMethod}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {getStatusIcon(transaction.status)}
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      {transaction.status === 'pending' && (
                        <>
                          <button className="text-green-600 hover:text-green-900">
                            <CheckCircle className="w-5 h-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <XCircle className="w-5 h-5" />
                          </button>
                        </>
                      )}
                      {transaction.status === 'completed' && (
                        <button className="text-blue-600 hover:text-blue-900">
                          <Download className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentManagement; 