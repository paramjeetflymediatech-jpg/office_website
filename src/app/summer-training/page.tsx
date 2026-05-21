import React from 'react';
import Image from 'next/image';
import { 
  Megaphone, Code, Video, PenTool, MonitorPlay, 
  MapPin, Clock, Layout, MousePointerClick, 
  Users, Award, Phone, Star, Download 
} from 'lucide-react';
import ContactFormSection from '@/components/ContactFormSection';

export default function SummerTrainingLandingPage() {
  return (
    <div className="font-sans min-h-screen bg-[#F1F1F1]">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center border-b border-gray-50">
        <div className="flex items-center gap-2">
          {/* Logo representation */}
          <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#FA7E09]">
            Flymedia Technology
          </span>
        </div>
        <div className="bg-pink-600 text-white px-5 py-2 rounded-l-full font-extrabold shadow-md hidden sm:block">
          14+ Years of Excellence
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 lg:flex lg:gap-16">
        
        {/* Left Content Area */}
        <div className="lg:w-2/3 space-y-12">
          
          {/* Main Titles */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 leading-tight tracking-tight">
              Summer Training 2026
              <span className="block text-3xl md:text-5xl text-gray-900 mt-2">
                at Flymedia Technology
              </span>
            </h1>
            <p className="text-xl text-gray-700 font-medium max-w-2xl leading-relaxed mt-4">
              Kickstart your career with practical industry training from a leading digital marketing agency!
            </p>
          </div>

          {/* Banner Tag */}
          <div className="inline-block bg-pink-600 text-white px-8 py-3.5 rounded-lg font-bold text-xl md:text-2xl shadow-xl transform -skew-x-6 hover:-translate-y-1 transition-transform">
            <div className="transform skew-x-6 flex items-center gap-3">
              <Clock size={28} />
              30 Days Summer Training Program
            </div>
          </div>

          {/* Courses Offered */}
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="h-px bg-purple-200 flex-1"></div>
              <h2 className="text-2xl font-extrabold text-purple-900 uppercase tracking-widest">Courses Offered</h2>
              <div className="h-px bg-purple-200 flex-1"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Megaphone, label: 'Digital Marketing' },
                { icon: Code, label: 'Web Development' },
                { icon: Video, label: 'Video Editing' },
                { icon: PenTool, label: 'Graphic Designing' },
              ].map((course, idx) => (
                <div key={idx} className="bg-white border-2 border-purple-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-purple-600 transition-all shadow-sm hover:shadow-xl cursor-pointer group">
                  <div className="bg-purple-50 p-4 rounded-xl group-hover:bg-purple-600 transition-colors">
                    <course.icon size={36} className="text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-gray-800 text-lg leading-tight">{course.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logistics Details */}
          <div className="flex flex-col md:flex-row gap-6 justify-between bg-white border border-gray-200 p-6 rounded-2xl shadow-lg relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex items-center gap-4">
              <div className="bg-pink-100 p-3.5 rounded-xl"><MonitorPlay className="text-pink-600" size={28} /></div>
              <div>
                <p className="text-sm text-pink-600 font-extrabold uppercase tracking-wide">Mode:</p>
                <p className="font-bold text-gray-900 text-lg">Online & Offline Both</p>
              </div>
            </div>
            <div className="hidden md:block w-px bg-gray-200"></div>
            <div className="flex items-center gap-4">
              <div className="bg-pink-100 p-3.5 rounded-xl"><MapPin className="text-pink-600" size={28} /></div>
              <div>
                <p className="text-sm text-pink-600 font-extrabold uppercase tracking-wide">Location:</p>
                <p className="font-bold text-gray-900 text-lg">Ludhiana</p>
              </div>
            </div>
            <div className="hidden md:block w-px bg-gray-200"></div>
            <div className="flex items-center gap-4">
              <div className="bg-pink-100 p-3.5 rounded-xl"><Clock className="text-pink-600" size={28} /></div>
              <div>
                <p className="text-sm text-pink-600 font-extrabold uppercase tracking-wide">Timing:</p>
                <p className="font-bold text-gray-900 text-lg">2 Hours Daily | 5 Days a Week</p>
              </div>
            </div>
          </div>

          {/* Center Callout */}
          <div className="text-center pt-2">
            <span className="inline-block bg-purple-800 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg">
              Training Available at Minimal Fees
            </span>
          </div>

          {/* Benefits */}
          <div className="space-y-8 pt-4">
            <div className="flex items-center gap-6">
              <div className="h-px bg-purple-200 flex-1"></div>
              <h2 className="text-2xl font-extrabold text-purple-900 uppercase tracking-widest">Benefits</h2>
              <div className="h-px bg-purple-200 flex-1"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Layout, label: 'Live Projects' },
                { icon: MousePointerClick, label: 'Hands-on Experience' },
                { icon: Users, label: 'Industry Exposure' },
                { icon: Award, label: 'Certificate After Completion' },
              ].map((benefit, idx) => (
                <div key={idx} className="flex flex-col items-center justify-start text-center gap-4 group">
                  <div className="text-pink-600 bg-pink-50 p-5 rounded-2xl group-hover:scale-110 transition-transform">
                    <benefit.icon size={48} strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-base text-gray-800">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Content Area */}
        <div className="lg:w-1/3 mt-16 lg:mt-0 space-y-10">
          
          {/* Main Visual Image / Student Representation */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-purple-800 aspect-[4/5] shadow-2xl flex items-center justify-center p-8">
            {/* Dotted texture overlay pattern */}
            <div className="absolute inset-0 opacity-30" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
            </div>
            
            {/* Inner Content to replace the specific girl image */}
            <div className="text-center text-white relative z-10 space-y-6">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto backdrop-blur-md flex items-center justify-center border-4 border-white/30 shadow-xl">
                <Users size={64} className="text-white drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-3xl font-black drop-shadow-md">Transform Your Career</h3>
                <p className="font-medium text-pink-100 text-lg mt-3 drop-shadow-sm">
                  Join our comprehensive program and get job-ready in 30 days.
                </p>
              </div>
            </div>
          </div>

          {/* Limited Seats Highlight Box */}
          <div className="bg-white border-2 border-dashed border-pink-400 rounded-3xl p-8 text-center relative shadow-xl">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <Star size={18} className="fill-current" />
            </div>
            <p className="text-gray-700 font-medium text-lg leading-relaxed mb-4 mt-2">
              Learn from industry experts and gain real-time practical experience to boost your career.
            </p>
            <p className="text-2xl font-black text-pink-600">
              Limited Seats Available!
            </p>
          </div>

          {/* Trainer Info & CTA Button */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden shrink-0 border-2 border-gray-200 shadow-inner flex items-center justify-center text-gray-400">
                {/* Fallback to icon if the image does not exist, otherwise use Image component */}
                <Users size={32} />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-gray-900">Anuj Gupta</h4>
                <p className="text-sm font-medium text-gray-600 leading-snug mt-1">
                  Digital Marketing Expert<br/>
                  <span className="text-xs font-bold text-gray-500">(Google Adword Certified)</span>
                </p>
              </div>
            </div>
            
            <a href="tel:+919888484310" className="w-full flex items-center justify-center gap-3 bg-pink-600 text-white py-5 rounded-2xl font-black text-2xl hover:bg-pink-700 transition-all shadow-[0_8px_30px_rgba(216,27,96,0.4)] hover:shadow-[0_12px_40px_rgba(216,27,96,0.6)] transform hover:-translate-y-1">
              <Phone size={28} className="fill-current" />
              Call Now to Apply
            </a>
          </div>

        </div>
      </main>
      
  

      {/* Footer styled exactly like the bottom banner */}
      <footer className="bg-purple-900 text-white pt-8 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="tel:+919888484310" className="text-3xl md:text-4xl font-extrabold tracking-tight hover:text-pink-300 transition-colors drop-shadow-md">
            +91-98884-84310
          </a>
          
          <a href="https://www.flymediatech.com" className="text-xl md:text-2xl font-medium tracking-wide hover:text-pink-300 transition-colors">
            www.flymediatech.com
          </a>
          
          <a 
            href="/downloads/summer-training-brochure.pdf" 
            download 
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl backdrop-blur-md transition-all border border-white/30 shadow-lg hover:shadow-xl"
            title="Download Brochure"
          >
            <Download size={24} />
            <span className="font-bold text-lg">Download Brochure</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
