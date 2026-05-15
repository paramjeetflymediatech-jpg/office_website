'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { adminLogin } from '@/app/actions/auth';
import { Lock, User, AlertCircle, ArrowRight, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await adminLogin(formData);
    
    if (result?.error) {
      setError(result.error);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen relative bg-[#f9fafb] flex flex-col items-center justify-center p-4 overflow-hidden font-sans">
      
      {/* Decorative Premium Backing: Glowing Accents & Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-br from-[#ff9900]/10 via-[#ff9900]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-tr from-[#ff9900]/15 via-transparent to-transparent blur-[140px] pointer-events-none" />

      {/* Main Core Form Card Container */}
      <div className="w-full max-w-md relative z-10 space-y-8">
        
        {/* Floating Brand Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-5 bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100/50 mb-4 hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Fly Media Technology Logo"
              width={160}
              height={55}
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <h1 
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
          >
            Management Dashboard
          </h1>
          <p className="text-gray-500 font-semibold text-sm max-w-xs mx-auto">
            Please enter your administrative credentials to securely access your tools
          </p>
        </div>

        {/* Glassmorphic Form Card */}
        <div className="backdrop-blur-xl bg-white/75 border border-white/60 p-8 md:p-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] space-y-6">
          
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-red-50 text-red-600 p-4 rounded-2xl flex items-center gap-3 text-sm font-semibold border border-red-100/50 shadow-inner"
              >
                <AlertCircle size={20} className="shrink-0 text-red-500" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Field: Username */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-gray-500 uppercase tracking-widest ml-1">
                Username
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#ff9900] transition-colors duration-300">
                  <User size={18} />
                </div>
                <input
                  name="username"
                  type="text"
                  required
                  className="block w-full pl-11 pr-4 py-3.5 bg-white/80 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#ff9900]/10 focus:border-[#ff9900] focus:bg-white transition-all duration-300 outline-none text-gray-900 font-semibold"
                  placeholder="Enter username"
                />
              </div>
            </div>

            {/* Input Field: Password */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-gray-500 uppercase tracking-widest ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#ff9900] transition-colors duration-300">
                  <Lock size={18} />
                </div>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full pl-11 pr-12 py-3.5 bg-white/80 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#ff9900]/10 focus:border-[#ff9900] focus:bg-white transition-all duration-300 outline-none text-gray-900 font-semibold"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#ff9900] transition-colors duration-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Glowing Submission Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full relative overflow-hidden flex items-center justify-center gap-2 bg-black hover:bg-[#ff9900] text-white py-4 rounded-2xl font-bold transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#ff9900]/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Access Dashboard</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1 duration-300" />
                </>
              )}
            </button>

          </form>
        </div>

        {/* Security / Compliance Badging */}
        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck size={16} className="text-[#ff9900]" />
          <span>Flymedia Security Protocols Active</span>
        </div>

      </div>
    </div>
  );
}

