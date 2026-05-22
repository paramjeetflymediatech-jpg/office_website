import React from 'react';
import Image from 'next/image';
import SummerTrainingForm from '@/components/SummerTrainingForm';

export default function SummerTrainingApplyPage() {
  return (
    <div className="font-sans min-h-screen bg-[#F1F1F1] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
        
        {/* Left Side - Image & Text */}
        <div className="lg:w-5/12 relative hidden lg:block bg-gradient-to-br from-pink-600 via-purple-700 to-purple-900">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <img 
              src="/summer-training-students.png" 
              alt="Students learning IT" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          
          <div className="relative z-10 p-12 h-full flex flex-col justify-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight drop-shadow-lg">
              Start Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9900] to-yellow-300">
                IT Journey
              </span>
            </h2>
            <p className="text-lg font-medium text-pink-100 mb-8 max-w-sm drop-shadow-md leading-relaxed">
              Join Flymedia Technology's 30-Day Summer Training Program. Learn from industry experts, work on live projects, and get job-ready.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-pink-50 font-medium">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                100% Practical Training
              </div>
              <div className="flex items-center gap-3 text-pink-50 font-medium">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                Live Projects
              </div>
              <div className="flex items-center gap-3 text-pink-50 font-medium">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                Certification Included
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-7/12 p-6 sm:p-10 lg:p-12 bg-white">
          <SummerTrainingForm />
        </div>

      </div>
    </div>
  );
}
