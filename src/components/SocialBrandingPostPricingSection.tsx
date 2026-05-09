"use client";

import React from "react";
import { CheckCircle2, Compass, Share2, HelpCircle, FileCheck2, Fingerprint } from "lucide-react";

export default function SocialBrandingPostPricingSection() {
  const pillars = [
    {
      title: "Visual Hierarchy",
      desc: "Establishing immediate visual anchors. We design banners and posts that guide the user's eyes naturally from headers to primary CTAs.",
      icon: <Compass size={24} className="text-[#ff9900]" />
    },
    {
      title: "Harmonized Palette",
      desc: "Applying structured HSL color schemes. We ensure background tones, accent elements, and overlays are mathematically consistent.",
      icon: <Fingerprint size={24} className="text-[#ff9900]" />
    },
    {
      title: "Typography Standards",
      desc: "Modern font families optimized for digital viewing. We define strict sizing hierarchies for titles, captions, and body layouts.",
      icon: <FileCheck2 size={24} className="text-[#ff9900]" />
    },
    {
      title: "Scale & Grid Alignment",
      desc: "Designing using proportion scales. Banners and graphic components map flawlessly onto any custom viewport grid.",
      icon: <Share2 size={24} className="text-[#ff9900]" />
    }
  ];

  return (
    <div className="space-y-20 py-16">
      
      {/* Section 1: Platform & Industry Matching Matrix */}
      <div className="space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff9900]">
            Strategic Alignment
          </span>
          <h3 className="text-2xl md:text-4xl font-serif font-black text-black">
            Platform Selection & Industry Matching
          </h3>
          <div className="h-1.5 w-16 bg-black rounded-full"></div>
          <p className="text-gray-600 text-lg font-medium max-w-4xl">
            Not all channels serve the same market intent. We audit your audience and match your corporate assets to the specific networks that yield the highest conversion returns.
          </p>
        </div>

        {/* Matching Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
            <h4 className="font-bold text-black text-lg">B2B & Enterprise</h4>
            <div className="p-3 bg-gray-50 border-l-4 border-[#ff9900] rounded-r-xl">
              <h5 className="font-bold text-sm text-black flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ff9900]" /> LinkedIn
              </h5>
              <p className="text-xs text-gray-500 mt-1">Focus on professional banners, corporate carousels, and whitepaper headers.</p>
            </div>
          </div>

          <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
            <h4 className="font-bold text-black text-lg">Direct to Consumer (D2C)</h4>
            <div className="p-3 bg-gray-50 border-l-4 border-[#ff9900] rounded-r-xl">
              <h5 className="font-bold text-sm text-black flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ff9900]" /> Instagram & FB
              </h5>
              <p className="text-xs text-gray-500 mt-1">Focus on vibrant graphic posts, modern stories templates, and grid aesthetics.</p>
            </div>
          </div>

          <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
            <h4 className="font-bold text-black text-lg">Local & Healthcare</h4>
            <div className="p-3 bg-gray-50 border-l-4 border-[#ff9900] rounded-r-xl">
              <h5 className="font-bold text-sm text-black flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ff9900]" /> Facebook & GMB
              </h5>
              <p className="text-xs text-gray-500 mt-1">Focus on informational infographics, reviews highlights, and business profiles.</p>
            </div>
          </div>

          <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm space-y-4">
            <h4 className="font-bold text-black text-lg">Tech, Media & Edu</h4>
            <div className="p-3 bg-gray-50 border-l-4 border-[#ff9900] rounded-r-xl">
              <h5 className="font-bold text-sm text-black flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ff9900]" /> YouTube & X
              </h5>
              <p className="text-xs text-gray-500 mt-1">Focus on high-click thumbnails, channel layouts, and real-time news graphics.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Pillars of Cohesion */}
      <div className="bg-black text-white p-8 md:p-12 rounded-[32px] border border-white/5 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff9900]">
            System Foundations
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-black tracking-tight uppercase">
            The Pillars of Branding Cohesion
          </h3>
          <p className="text-gray-400 text-base md:text-lg">
            We operate on strict design guidelines to ensure your company graphics feel integrated, premium, and unified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-[#121212] border border-white/10 p-6 rounded-2xl space-y-4"
            >
              <div className="p-3 bg-white/5 rounded-xl inline-block text-[#ff9900]">
                {pillar.icon}
              </div>
              <h4 className="font-bold text-white text-lg">
                {pillar.title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
