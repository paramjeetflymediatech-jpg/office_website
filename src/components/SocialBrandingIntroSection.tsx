"use client";

import React from "react";
import { ShieldCheck, Palette, Layers, Award } from "lucide-react";

// Inline, highly precise vector SVGs for the social media platforms
const FacebookIcon = () => (
  <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.522 3.5 12 3.5 12 3.5s-7.522 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.478 20.5 12 20.5 12 20.5s7.522 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function SocialBrandingIntroSection() {
  return (
    <div className="space-y-16 py-12">
      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Copywriting & Pillars */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff9900]">
              Brand Consistency
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-black leading-tight">
              Design That Commands Authority Across All Platforms
            </h2>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              In a digital landscape filled with endless noise, a fragmented brand identity is easily forgotten. Our Social Media Branding packages unify your visual communication, establishing a premium, consistent presence that drives organic trust and customer retention.
            </p>
          </div>

          {/* Pillars List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-gray-100 rounded-lg text-black shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-black text-base">Trust & Authority</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Professional covers, consistent logos, and verified-standard visuals project reliable corporate standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2 bg-gray-100 rounded-lg text-black shrink-0">
                <Palette size={20} />
              </div>
              <div>
                <h4 className="font-bold text-black text-base">Harmonized Palette</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Custom-tailored HSL colors matching your primary company theme across all channel assets.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2 bg-gray-100 rounded-lg text-black shrink-0">
                <Layers size={20} />
              </div>
              <div>
                <h4 className="font-bold text-black text-base">Responsive Scale</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Optimized for mobile headers, desktop layouts, and profile thumbnails without clipping or distortion.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2 bg-gray-100 rounded-lg text-black shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-bold text-black text-base">Creative Dominance</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Bold typography guidelines and layouts that draw eyeballs and build memory structures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pure CSS Dashboard Grid Card Mockup (Completely Static) */}
        <div className="lg:col-span-5 bg-white border border-gray-150 p-8 rounded-[32px] shadow-sm space-y-6">
          <h3 className="font-serif font-bold text-lg text-black">Unified Asset Matrices</h3>
          
          <div className="space-y-4">
            {/* Facebook Card */}
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <FacebookIcon />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-black">Facebook Business Suite</h4>
                  <p className="text-xs text-gray-400">Header cover & Avatar guidelines</p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded">Active</span>
            </div>

            {/* LinkedIn Card */}
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <LinkedinIcon />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-black">LinkedIn Corporate Pack</h4>
                  <p className="text-xs text-gray-400">Premium banner & Post systems</p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded">Active</span>
            </div>

            {/* YouTube Card */}
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <YoutubeIcon />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-black">YouTube Channel Kit</h4>
                  <p className="text-xs text-gray-400">High-impact art & Video watermarks</p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded">Active</span>
            </div>

            {/* Twitter/X Card */}
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <TwitterIcon />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-black">Twitter / X Profile Pack</h4>
                  <p className="text-xs text-gray-400">Streamlined headers & Icon grids</p>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded">Active</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
