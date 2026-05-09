"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, Users, Target, TrendingUp, MessageSquare } from "lucide-react";
import SocialMediaPricingTable from "@/components/SocialMediaPricingTable";

export default function SocialMediaOptimization() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans selection:bg-[#ff9900]/30">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-[#EFEFEF] border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Rocket Image */}
            <div className="relative aspect-square flex items-center justify-center order-2 lg:order-1">
              <div className="absolute inset-0 rounded-full blur-[120px] animate-pulse" />
              <Image 
                src="/social-media-optimization/rocket.png" 
                alt="Best SMO Company" 
                width={500} 
                height={500} 
                className="relative z-10 drop-shadow-[0_50px_100px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-serif font-black text-black leading-[1.1] tracking-tight">
                  Best SMO & Digital Marketing Company
                </h1>
              </div>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                  North India’s best Digital Marketing Company in Ludhiana, Punjab: Award winning Flymedia Technology captures the right combination of digital marketing skills to be the best SMO social media marketing company in Ludhiana. We possess the result-driven mechanism for brands to cultivate the maximum conversions via specific social media marketing strategies.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                  When it comes to promoting brands online, social media channels erupt as one of the best online marketing tools. Accordingly, Flymedia Technology utilizes the trending authorities for your business to create connections, and increase sales and website traffic.
                </p>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest hover:bg-[#ff9900] transition-all duration-500 shadow-2xl shadow-black/20 flex items-center gap-3 group">
                  Start Optimizing
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white text-black border-2 border-black/5 rounded-full font-black uppercase tracking-widest hover:border-[#ff9900] transition-all duration-500 flex items-center gap-3">
                  Our Portfolio
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#ff9900]/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] -z-10" />
      </section>

      {/* Quick Stats / Trust Section */}
      <section className="py-12 bg-white relative z-20 -mt-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Users", value: "2.5M+", icon: Users },
              { label: "Conversions", value: "85%", icon: Target },
              { label: "Engagement", value: "300%", icon: TrendingUp },
              { label: "Client Support", value: "24/7", icon: MessageSquare },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-[32px] transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-[#ff9900]/10 flex items-center justify-center mb-4 text-[#ff9900]">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-black text-black mb-1">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialMediaPricingTable />
    </div>
  );
}
