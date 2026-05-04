'use client';

import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning';
}

export default function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Delete',
  cancelText = 'Cancel',
  type = 'danger'
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onCancel}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-8 text-center">
          <div className={`
            w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6
            ${type === 'danger' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}
          `}>
            <AlertTriangle size={32} />
          </div>
          
          <h2 className="text-2xl font-black text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-500 leading-relaxed">{message}</p>
          
          <div className="flex gap-3 mt-8">
            <button 
              onClick={onCancel}
              className="flex-1 px-6 py-3.5 rounded-2xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all"
            >
              {cancelText}
            </button>
            <button 
              onClick={onConfirm}
              className={`
                flex-1 px-6 py-3.5 rounded-2xl font-bold text-white transition-all shadow-lg
                ${type === 'danger' ? 'bg-red-500 hover:bg-red-600 shadow-red-200' : 'bg-[#ff9900] hover:bg-black shadow-orange-200'}
              `}
            >
              {confirmText}
            </button>
          </div>
        </div>
        
        <button 
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
