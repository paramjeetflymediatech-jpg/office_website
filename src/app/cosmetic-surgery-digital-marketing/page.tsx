"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BarChart3, ClipboardList, Smartphone, UserCheck } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import ContactSection from "@/components/ContactSection";

// --- Hero Section ---
const CosmeticHeroSection = () => (
  <div className="bg-[#F1F1F1] py-16 lg:py-24 relative overflow-hidden">
    {/* Background Decorative Blur Blobs */}
    <div className="absolute top-10 left-10 w-72 h-72 bg-[#ff9900]/10 rounded-full blur-3xl -z-0"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff9900]/5 rounded-full blur-3xl -z-0"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Text Details */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-black text-black leading-tight tracking-tight">
            Cosmetic Surgery Digital Marketing & SEO Services
          </h1>

          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            How do digital marketing solutions help cosmetic surgeons attract more patients? Aesthetic and plastic procedures require a highly trust-driven approach. Our tailored cosmetic surgery SEO services ensure your clinic gains the elite reputation and exposure it deserves.
          </p>

          <div className="flex flex-wrap gap-4 pt-4"> 
          </div>
        </div>

        {/* Right: Interactive Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px]">
            {/* Soft backdrop element */}
            <div className="absolute -inset-2 rounded-[40px] blur-2xl -z-10 "></div>
            
            <div className=" p-6 overflow-hidden transition-all duration-300">
              <Image 
                src="/cosmetic-surgery-digital-marketing/04.png" 
                alt="Cosmetic Surgery Marketing Concept" 
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

// --- Website Improvement Section (Image first on mobile!) ---
const CosmeticImprovementSection = () => (
  <section className="py-20 bg-[#F1F1F1]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Image Column (order-1 makes it first in mobile view) */}
        <div className="lg:col-span-5 order-1 flex justify-center">
          <div className="relative w-full overflow-hidden">
            <Image 
              src="/cosmetic-surgery-digital-marketing/MAIN.png" 
              alt="Best CMS For Website Designing" 
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
            Improved look and functionality of the cosmetic surgery website
          </h2>

          <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-6">
            <p className="font-semibold text-black">
              None of your patients will stumble upon your website by chance. While looking for the cosmetic provider they find you and click on your website to find more about you.
            </p>
            <p>
              But, once they click, What makes them stay on your website? This is where your website needs to leave the best first impression and give them all the information they are looking for.
            </p>
            <p>
              Our team not only ensures the digital marketing is done correctly but we have an able team of website developers who gives you an impressive-looking website. In that case, the design, format, latest web technology, and ease-of-navigation will be done accurately. The website is improved which leads to a higher conversion rate.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// --- SEO Boost / Presence Section ---
const CosmeticSeoBoostSection = () => {
  const seoItems = [
    {
      icon: <BarChart3 size={24} className="text-[#ff9900]" />,
      desc: "Creating relevant and important content on search items and queries for increasing authority."
    },
    {
      icon: <ClipboardList size={24} className="text-[#ff9900]" />,
      desc: "Listing the site, address, name, and phone number. These options help your business to have enhanced authority."
    },
    {
      icon: <Smartphone size={24} className="text-[#ff9900]" />,
      desc: "Increase your site responsiveness so that it can be used on different devices like smartphones, tablets, desktops, and any other device."
    },
    {
      icon: <UserCheck size={24} className="text-[#ff9900]" />,
      desc: "Increase the patient engagement on social media so that it increases the brand messaging and a better community is built."
    }
  ];

  return (
    <section className="py-20 bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header content block */}
        <div className="max-w-4xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif font-black  text-black leading-tight tracking-tight">
            Boost your online presence surgery practice through SEO
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            The website is the storefront, so therefore you must gain the attention of the patients for increasing sales and making your services reach them. SEO is the best way to increase attention, get relevant customers who are ready to avail the benefit of your services. This way the online visibility and presence are improved. Some of the things which need to be done are:
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
const CosmeticContentSection = () => (
  <section className="py-12 bg-[#F1F1F1]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Ending Block Container */}
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-150">
        <p className="leading-relaxed text-gray-700 text-base md:text-lg font-medium">
          To get all these things done correctly, hire the professionals who offer you effective <strong className="text-black font-extrabold">Plastic surgery Digital Marketing in Punjab</strong>. With the <Link href="https://flymediatech.com/" className="text-[#ff9900] font-bold hover:underline">best digital marketing company</Link> on your side, continuously, you will have a new patient base and your practice will be noticed by everyone and your business will be on the top.
        </p>
      </div>
    </div>
  </section>
);

// --- Main Container ---
export default function CosmeticSurgeryMarketing() {
  const metaData = {
    title: "Cosmetic Surgery Digital Marketing, Cosmetic Surgery SEO Services | Flymedia Technology",
    h1: ["Cosmetic Surgery Digital Marketing"],
    paragraphs: [
      "We specialize in digital marketing and patient acquisition for cosmetic and plastic surgery clinics. Learn how cosmetic surgery SEO services drive high-intent patients to your practice."
    ],
    folderName: "flymediatech.com_home",
    images: ["r02.png"]
  };

  return (
    <ServicePage {...metaData} bgClass="bg-white">
      <CosmeticHeroSection />
      <CosmeticImprovementSection />
      <CosmeticSeoBoostSection />
      <CosmeticContentSection />
      <div id="contact">
        <ContactSection />
      </div>
    </ServicePage>
  );
}
