'use client';

import React, { useState } from 'react';
import { triggerSync } from './actions';

export default function SetupPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSetup = async () => {
    setStatus('loading');
    try {
      const result = await triggerSync();
      if (result.success) {
        setStatus('success');
        setMessage('Database synchronized successfully!');
      } else {
        setStatus('error');
        setMessage(result.error || 'Failed to sync database.');
      }
    } catch (e: any) {
      setStatus('error');
      setMessage(e.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl border border-gray-100 shadow-xl text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Database Setup</h1>
      <p className="text-gray-500 mb-8">This will create the necessary tables in your MySQL database using Sequelize.</p>

      {status === 'idle' && (
        <button
          onClick={handleSetup}
          className="w-full bg-[#ff9900] text-white font-bold py-3 rounded-lg hover:bg-black transition-all"
        >
          Initialize Database
        </button>
      )}

      {status === 'loading' && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-orange-100 border-t-[#ff9900] rounded-full animate-spin" />
          <p className="text-gray-600 font-medium">Synchronizing models...</p>
        </div>
      )}

      {status === 'success' && (
        <div className="space-y-4">
          <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-green-600 font-bold text-lg">{message}</p>
          <a href="/admin" className="block w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-black transition-all">
            Go to Admin Panel
          </a>
        </div>
      )}

      {status === 'error' && (
        <div className="space-y-4">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="text-red-600 font-bold">{message}</p>
          <button
            onClick={() => setStatus('idle')}
            className="w-full bg-gray-100 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-200 transition-all"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
