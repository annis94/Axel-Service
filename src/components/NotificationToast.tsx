import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

interface NotificationToastProps {
  notification: Notification | null;
  onClose: (id: string) => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ 
  notification, 
  onClose 
}) => {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: Info
  };

  const colors = {
    success: {
      bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
      border: 'border-green-200',
      icon: 'text-green-500',
      text: 'text-green-800'
    },
    error: {
      bg: 'bg-gradient-to-r from-red-500 to-pink-600',
      border: 'border-red-200',
      icon: 'text-red-500',
      text: 'text-red-800'
    },
    warning: {
      bg: 'bg-gradient-to-r from-yellow-500 to-orange-600',
      border: 'border-yellow-200',
      icon: 'text-yellow-500',
      text: 'text-yellow-800'
    },
    info: {
      bg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      border: 'border-blue-200',
      icon: 'text-blue-500',
      text: 'text-blue-800'
    }
  };

  const Icon = notification ? icons[notification.type] : CheckCircle;
  const colorScheme = notification ? colors[notification.type] : colors.success;

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30 
          }}
          className="fixed top-20 right-4 z-50 max-w-sm w-full"
        >
          <div className={`relative overflow-hidden rounded-2xl shadow-2xl border ${colorScheme.border} bg-white backdrop-blur-sm`}>
            {/* Background gradient */}
            <div className={`absolute inset-0 ${colorScheme.bg} opacity-10`} />
            
            {/* Content */}
            <div className="relative p-4">
              <div className="flex items-start space-x-3">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 500 }}
                  className={`flex-shrink-0 w-8 h-8 ${colorScheme.icon} bg-white rounded-full flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <motion.h4
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`text-sm font-bold ${colorScheme.text}`}
                  >
                    {notification.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-gray-600 mt-1"
                  >
                    {notification.message}
                  </motion.p>
                </div>

                {/* Close button */}
                <motion.button
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 500 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onClose(notification.id)}
                  className="flex-shrink-0 w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Progress bar */}
            {notification.duration && (
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ 
                  duration: notification.duration / 1000,
                  ease: "linear"
                }}
                className={`h-1 ${colorScheme.bg} origin-left`}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationToast; 