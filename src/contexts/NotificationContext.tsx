import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  sendSMS: (phoneNumber: string, message: string) => Promise<void>;
  sendEmail: (email: string, subject: string, body: string) => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  addNotification: () => {},
  removeNotification: () => {},
  sendSMS: async () => {},
  sendEmail: async () => {},
});

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  useEffect(() => {
    // Auto-remove notifications after their duration
    const timers = notifications.map(notification => {
      if (notification.duration) {
        return setTimeout(() => {
          removeNotification(notification.id);
        }, notification.duration);
      }
      return undefined;
    });

    return () => {
      timers.forEach(timer => {
        if (timer) clearTimeout(timer);
      });
    };
  }, [notifications, removeNotification]);

  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const duration = notification.duration || 5000; // Default duration 5 seconds
    
    setNotifications(prev => [
      ...prev,
      { ...notification, id, duration },
    ]);
  }, []);

  // Simulated SMS notification service
  const sendSMS = async (phoneNumber: string, message: string) => {
    try {
      // This would be an actual API call to an SMS service in a real app
      console.log(`Sending SMS to ${phoneNumber}: ${message}`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add success notification
      addNotification({
        type: 'success',
        message: `SMS notification sent to ${phoneNumber}`,
      });
      
      return Promise.resolve();
    } catch (error) {
      console.error('Failed to send SMS:', error);
      
      // Add error notification
      addNotification({
        type: 'error',
        message: 'Failed to send SMS notification',
      });
      
      return Promise.reject(error);
    }
  };

  // Simulated email notification service
  const sendEmail = async (email: string, subject: string, body: string) => {
    try {
      // This would be an actual API call to an email service in a real app
      console.log(`Sending email to ${email} with subject: ${subject}`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add success notification
      addNotification({
        type: 'success',
        message: `Email sent to ${email}`,
      });
      
      return Promise.resolve();
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Add error notification
      addNotification({
        type: 'error',
        message: 'Failed to send email',
      });
      
      return Promise.reject(error);
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        sendSMS,
        sendEmail,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};