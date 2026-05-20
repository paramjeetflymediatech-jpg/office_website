"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Target, 
  Smartphone, 
  UserCheck, 
  BarChart3, 
  ClipboardList 
} from "lucide-react";
import ServicePage from "@/components/ServicePage";
import ContactFormSection from "@/components/ContactFormSection";

// --- Hero Section ---
const CosmeticHeroSection = () => {
  const heroFeatures = [
    { icon: <Users className="text-[#FA7E09]" size={24} />, text: "To find the audience" },
    { icon: <Target className="text-[#FA7E09]" size={24} />, text: "To attract the audience" },
    { icon: <Smartphone className="text-[#FA7E09]" size={24} />, text: "To engage the audience" },
    { icon: <UserCheck className="text-[#FA7E09]" size={24} />, text: "To acquire the audience" },
  ];

  return (
    <div className="bg-[#F1F1F1] pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content & Features */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 
                className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-black leading-[1.1] tracking-tight"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Cosmetic Surgery Digital Marketing, Cosmetic Surgery SEO Services
              </h1>
              <p className="text-base md:text-lg font-bold text-black pt-2">
                How are digital marketing solutions help cosmetic surgeons to attract patients?
              </p>
              <p className="text-base md:text-lg font-bold ">
                Cosmetic surgery gains benefit through marketing solutions for gaining user attention
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
              Cosmetic and aesthetic procedures have gained a huge customer base in this highly competitive world. The patients are looking for cosmetic surgery in which they get the best value for their money. To stay at the forefront of this competitive landscape, surgeons can promote their practices of <strong className="text-black">cosmetic Surgery SEO Services in India</strong>.
            </p>

            {/* Features Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {heroFeatures.map((item, idx) => (
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

          {/* Right: Illustration */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[460px]">
              <Image 
                src="/cosmetic-surgery-digital-marketing/04.png" 
                alt="Cosmetic Surgery SEO Services Illustration" 
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

// --- Transition Section ---
const TransitionSection = () => (
  <section className="bg-[#EFEFEF] py-12 border-t border-gray-100">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-5xl mx-auto">
        To get all these things done correctly, hire the professionals who offer you effective <strong className="text-black">Plastic surgery Digital Marketing in Punjab</strong>. With the <Link href="/" className="text-red-500 hover:underline">best digital marketing company</Link> on your side, continuously, you will have a new patient base and your practice will be noticed by everyone and your business will be on the top.
      </p>
    </div>
  </section>
);

// --- Website Improvement Section ---
const CosmeticImprovementSection = () => (
  <section className="py-20 bg-[#EFEFEF]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Dashboard Browser Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[500px]">
            <Image 
              src="/cosmetic-surgery-digital-marketing/MAIN.png" 
              alt="Improved look and functionality of the cosmetic surgery website" 
              width={600} 
              height={600} 
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Content Column */}
        <div className="lg:col-span-7 space-y-6">
          <h2 
            className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Improved look and functionality of the cosmetic surgery website
          </h2>

          <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-6 font-medium">
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

// --- SEO Boost Section ---
const CosmeticSeoBoostSection = () => {
  const seoCards = [
    {
      icon: <BarChart3 className="text-[#FA7E09]" size={28} />,
      text: "Creating relevant and important content on search items and queries for increasing authority."
    },
    {
      icon: <ClipboardList className="text-[#FA7E09]" size={28} />,
      text: "Listing the site, address, name, and phone number. These options help your business to have enhanced authority."
    },
    {
      icon: <Smartphone className="text-[#FA7E09]" size={28} />,
      text: "Increase your site responsiveness so that it can be used on different devices like smartphones, tablets, desktops, and any other device."
    },
    {
      icon: <UserCheck className="text-[#FA7E09]" size={28} />,
      text: "Increase the patient engagement on social media so that it increases the brand messaging and a better community is built."
    }
  ];

  return (
    <section className="py-24 bg-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 
            className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Boost your online presence surgery practice through SEO
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto">
            The website is the storefront, so therefore you must gain the attention of the patients for increasing sales and making your services reach them. SEO is the best way to increase attention, get relevant customers who are ready to avail the benefit of your services. This way the online visibility and presence are improved. Some of the things which need to be done are:
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {seoCards.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#EFEFEF] border border-gray-100 p-8 rounded-2xl flex flex-col items-center text-center space-y-6 hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center shadow-inner">
                {item.icon}
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Main Container ---
export default function CosmeticSurgeryMarketing() {
  const pageSEO = {
    title: "Cosmetic Surgery Digital Marketing, Cosmetic Surgery SEO Services | Flymedia Technology",
    h1: ["Cosmetic Surgery Digital Marketing"],
    paragraphs: [
      "We specialize in digital marketing and patient acquisition for cosmetic and plastic surgery clinics. Learn how cosmetic surgery SEO services drive high-intent patients to your practice."
    ],
    folderName: "flymediatech.com_home",
    images: ["r02.png"]
  };

  return (
    <ServicePage {...pageSEO} bgClass="bg-white">
      <CosmeticHeroSection />
      <TransitionSection />
      <CosmeticImprovementSection />
      <CosmeticSeoBoostSection />
      <ContactFormSection />
    </ServicePage>
  );
}
