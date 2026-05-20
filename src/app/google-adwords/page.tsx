"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  TrendingUp, 
  Target, 
  BarChart, 
  DollarSign, 
  CheckCircle,
  HelpCircle
} from "lucide-react";
import ServicePage from "@/components/ServicePage";
import ContactFormSection from "@/components/ContactFormSection";

// --- Hero Section ---
const GoogleAdwordsHero = () => {
  const features = [
    { icon: <Target className="text-[#FA7E09]" size={24} />, text: "Highly Target Keywords" },
    { icon: <TrendingUp className="text-[#FA7E09]" size={24} />, text: "Instant Quality Traffic" },
    { icon: <BarChart className="text-[#FA7E09]" size={24} />, text: "Detailed Analytics" },
    { icon: <DollarSign className="text-[#FA7E09]" size={24} />, text: "Maximum Campaign ROI" },
  ];

  return (
    <div className="bg-[#F1F1F1] pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Details */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">
                Google AdWords (PPC) Management Services
              </h1>
              <p className="text-lg font-semibold text-[#FA7E09]">
                Get instant leads, maximum exposure, and certified Google Ads experts.
              </p>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              Want to see your business at the very top of Google Search instantly? Our Google AdWords & Pay-Per-Click (PPC) optimization solutions place your brand directly in front of buyers actively seeking your products. We construct highly-focused campaigns that eliminate wasted ad spend and generate immediate phone calls and leads.
            </p>

            {/* Grid of features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[460px]">
              <Image 
                src="/cosmetic-surgery-digital-marketing/04.png" 
                alt="Google AdWords PPC Services Illustration" 
                width={600} 
                height={600} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Custom Parallax Feature Section ---
const ParallaxAdwordsSection = () => (
  <section 
    className="relative py-28 overflow-hidden bg-cover bg-center bg-fixed flex items-center justify-center"
    style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/bgimg.png')",
    }}
  >
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white relative z-10 space-y-8">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-white max-w-4xl mx-auto">
        Drive Highly Targeted Leads With Certified Google Partners
      </h2>
      <p className="text-lg sm:text-xl font-serif leading-relaxed max-w-5xl mx-auto">
        Flymedia Technology is an official Premier Google Partner. We construct search ads, visual display ads, remarketing funnels, and shopping campaigns that scale your sales immediately.
      </p>
    </div>
  </section>
);

// --- Core PPC Services ---
const CorePpcSection = () => {
  const cards = [
    {
      title: "Search Campaigns",
      desc: "Bid on high-intent buyer keywords and display your website at the top of Google search results for immediate traffic.",
      icon: <Target className="text-[#FA7E09]" size={28} />
    },
    {
      title: "Remarketing Funnels",
      desc: "Re-target individuals who visited your website but did not buy, converting them into brand buyers through persistent ad displays.",
      icon: <HelpCircle className="text-[#FA7E09]" size={28} />
    },
    {
      title: "Google Shopping Ads",
      desc: "Perfect for eCommerce brands. Showcase your products, prices, and reviews right inside search listings to drive orders.",
      icon: <CheckCircle className="text-[#FA7E09]" size={28} />
    },
    {
      title: "Ad Optimization",
      desc: "Continuous A/B testing of headlines, copy, ad extensions, and landing pages to ensure your cost-per-click stays low.",
      icon: <TrendingUp className="text-[#FA7E09]" size={28} />
    }
  ];

  return (
    <section className="py-20 bg-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
            Our Google Ads Strategy
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-medium">
            We focus on metrics that truly count: Conversions, Sales, and positive Return on Ad Spend (ROAS).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#EFEFEF] border border-gray-200 p-8 rounded-2xl flex flex-col items-center text-center space-y-6 hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Main Container ---
export default function GoogleAdwordsPage() {
  const pageSEO = {
    title: "Google AdWords (PPC) Management Services | Premier PPC Agency",
    h1: ["Google AdWords Management"],
    paragraphs: [
      "Supercharge your conversions with ROI-oriented Google Ads campaigns. Partner with Flymedia Technology to construct search, display, and remarketing Google Ad campaigns."
    ],
    folderName: "flymediatech.com_home",
    images: ["r02.png"]
  };

  return (
    <ServicePage {...pageSEO} bgClass="bg-white">
      <GoogleAdwordsHero />
      <ParallaxAdwordsSection />
      <CorePpcSection />
      <ContactFormSection />
    </ServicePage>
  );
}
