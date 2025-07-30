import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useNotification, Notification } from '../../contexts/NotificationContext';
import './NotificationToast.css';

interface NotificationToastProps {
  notification: Notification;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ notification }) => {
  const { removeNotification } = useNotification();

  useEffect(() => {
    if (notification.duration) {
      const timer = setTimeout(() => {
        removeNotification(notification.id);
      }, notification.duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification, removeNotification]);

  const handleClose = () => {
    removeNotification(notification.id);
  };

  return (
    <div className={`notification-toast notification-${notification.type} slide-in`}>
      <div className="notification-icon">
        {notification.type === 'success' && '✓'}
        {notification.type === 'error' && '✕'}
        {notification.type === 'warning' && '⚠'}
        {notification.type === 'info' && 'ℹ'}
      </div>
      <div className="notification-content">
        <p>{notification.message}</p>
      </div>
      <button className="notification-close" onClick={handleClose}>
        <X size={16} />
      </button>
    </div>
  );
};

export default NotificationToast;