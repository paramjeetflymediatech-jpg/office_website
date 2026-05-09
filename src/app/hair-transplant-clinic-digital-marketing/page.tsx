"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BarChart3, ClipboardList, Smartphone, UserCheck } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import ContactSection from "@/components/ContactSection";

// --- Hero Section ---
const HairHeroSection = () => (
  <div className="bg-[#F1F1F1] py-16 lg:py-24 relative overflow-hidden">
    {/* Background Decorative Blur Blobs */}
    <div className="absolute top-10 left-10 w-72 h-72 bg-[#ff9900]/10 rounded-full blur-3xl -z-0"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff9900]/5 rounded-full blur-3xl -z-0"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Text Details */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-black text-black leading-tight tracking-tight">
            Hair Transplant Clinic Digital Marketing & SEO Services
          </h1>

          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            How do digital marketing solutions help hair restoration clinics attract more patients? Hair transplant procedures require an incredibly visual, trust-driven online approach. Our tailored SEO services ensure your clinic gains the peerless reputation and high search visibility it deserves.
          </p>

          <div className="flex flex-wrap gap-4 pt-4"> 
          </div>
        </div>

        {/* Right: Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px]">
            <div className="p-6 overflow-hidden transition-all duration-300">
              <Image 
                src="/hair-transplant-clinic-digital-marketing/r08.png" 
                alt="Hair Transplant Marketing Concept" 
                width={500} 
                height={500} 
                className="w-full h-auto rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

// --- Improvement / Visual Trust Section (Image first on mobile view!) ---
const HairImprovementSection = () => (
  <section className="py-20 bg-[#F1F1F1]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Image Column (order-1 makes it first in mobile view) */}
        <div className="lg:col-span-5 order-1 flex justify-center">
          <div className="relative w-full overflow-hidden">
            <Image 
              src="/hair-transplant-clinic-digital-marketing/r08.png" 
              alt="Hair Clinic Experience" 
              width={1000} 
              height={1000} 
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Content Column (order-2 makes it second in mobile view) */}
        <div className="lg:col-span-7 order-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-black leading-tight tracking-tight">
            Improved look and functionality of the hair transplant website
          </h2>

          <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-6">
            <p className="font-semibold text-black">
              No patient books a hair transplant procedure by pure chance. They thoroughly research surgical results, before-and-after galleries, and clinic credentials before reaching out.
            </p>
            <p>
              When high-intent patients click on your link, what inspires them to book a consultation? This is where your website needs to leave an immediate, professional first impression and offer clear, reassuring patient education.
            </p>
            <p>
              Our experienced web development team builds high-speed, modern websites optimized for mobile responsiveness and ease-of-navigation. By integrating interactive scalp assessment features and secure consultation schedules, we turn browser traffic into clinical inquiries.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// --- SEO Boost / Presence Checklist Section ---
const HairSeoBoostSection = () => {
  const seoItems = [
    {
      icon: <BarChart3 size={24} className="text-[#ff9900]" />,
      desc: "Creating relevant and important content on hair restoration queries and scalp treatment guides."
    },
    {
      icon: <ClipboardList size={24} className="text-[#ff9900]" />,
      desc: "Optimizing Google Maps listings, physical clinic address, patient reviews, and case study galleries."
    },
    {
      icon: <Smartphone size={24} className="text-[#ff9900]" />,
      desc: "Enhancing mobile loading speeds so patients can browse treatment galleries easily on any smartphone."
    },
    {
      icon: <UserCheck size={24} className="text-[#ff9900]" />,
      desc: "Publishing patient testimonial videos across social media channels to establish deep community trust."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header content block */}
        <div className="max-w-4xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif font-black text-black leading-tight tracking-tight">
            Boost your online presence hair transplant practice through SEO
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Your clinic website acts as your clinical storefront. High-fidelity search engine optimization ensures that when local patients seek follicular unit extraction (FUE) or clinical hair restoration, your clinic ranks at the absolute top of their search page.
          </p>
        </div>

        {/* 4 checklist cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {seoItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#F1F1F1] border border-gray-150 p-6 rounded-2xl space-y-4 flex flex-col justify-start hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                {item.icon}
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-semibold">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Content & Punjab Marketing Section ---
const HairContentSection = () => (
  <section className="py-12 bg-[#F1F1F1]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Ending Block Container */}
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-150">
        <p className="leading-relaxed text-gray-700 text-base md:text-lg font-medium">
          To get all these things done correctly, hire the professionals who offer you effective <strong className="text-black font-extrabold">Hair Transplant Clinic Digital Marketing in Punjab</strong>. With the <Link href="https://flymediatech.com/" className="text-[#ff9900] font-bold hover:underline">best digital marketing company</Link> on your side, continuously, you will have a new patient base, your practice will be noticed by everyone, and your business will be on the top.
        </p>
      </div>
    </div>
  </section>
);

// --- Main Container ---
export default function HairTransplantMarketing() {
  const metaData = {
    title: "Hair Transplant Clinic Digital Marketing, Hair Restoration SEO Services | Flymedia Technology",
    h1: ["Hair Transplant", "Marketing"],
    paragraphs: [
      "We provide comprehensive digital marketing solutions for hair transplant clinics. Our strategies are designed to showcase your expertise and results to individuals seeking hair restoration."
    ],
    folderName: "flymediatech.com_home",
    images: ["r08.png"]
  };

  return (
    <ServicePage {...metaData} bgClass="bg-white">
      <HairHeroSection />
      <HairImprovementSection />
      <HairSeoBoostSection />
      <HairContentSection />
      <div id="contact">
        <ContactSection />
      </div>
    </ServicePage>
  );
}
