'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

type NotificationType = 'success' | 'error' | 'info';

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
}

interface NotificationContextType {
  showNotification: (type: NotificationType, message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = useCallback((type: NotificationType, message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications((prev) => [...prev, { id, type, message }]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5000);
  }, []);

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {/* Toast Container */}
      <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3 w-full max-w-sm pointer-events-none">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`
              pointer-events-auto flex items-center gap-4 p-4 rounded-2xl shadow-2xl backdrop-blur-xl border animate-in slide-in-from-right duration-500
              ${n.type === 'success' ? 'bg-green-50/90 border-green-200 text-green-800' : ''}
              ${n.type === 'error' ? 'bg-red-50/90 border-red-200 text-red-800' : ''}
              ${n.type === 'info' ? 'bg-blue-50/90 border-blue-200 text-blue-800' : ''}
            `}
          >
            <div className={`
              p-2 rounded-xl
              ${n.type === 'success' ? 'bg-green-100 text-green-600' : ''}
              ${n.type === 'error' ? 'bg-red-100 text-red-600' : ''}
              ${n.type === 'info' ? 'bg-blue-100 text-blue-600' : ''}
            `}>
              {n.type === 'success' && <CheckCircle2 size={20} />}
              {n.type === 'error' && <AlertCircle size={20} />}
              {n.type === 'info' && <Info size={20} />}
            </div>
            
            <p className="flex-1 font-bold text-sm leading-tight">{n.message}</p>
            
            <button 
              onClick={() => removeNotification(n.id)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}
