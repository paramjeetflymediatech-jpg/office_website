"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicePage from "@/components/ServicePage";
import ContactFormSection from "@/components/ContactFormSection";

// --- Section 1: Hero Section ---
const HairHeroSection = () => (
  <div className="bg-[#F1F1F1] py-16 lg:py-10 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Text Details */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-[46px] font-serif font-bold text-black leading-tight">
            How to boost your hair restoration practice with an enhanced online presence?
          </h1>

          <div className="space-y-4">
            <span className="text-[#ff9900] font-bold text-base md:text-[17px] tracking-wide block uppercase">
              Brush up your hair restoration marketing to convert patients
            </span>
            <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
              Get more Hair transplant leads with Hair transplant Digital marketing in India, To stay at the forefront in professionals or personal life, it is important to have the best strategy. Being a business owner, there is a different kind of pressure to stay ahead of everyone and being noticed by everyone. Therefore, the business needs to have an updated hair transplant marketing in India.
            </p>
          </div>
        </div>

        {/* Right: Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-square">
            <Image 
              src="https://flymediatech.com/wp-content/uploads/2024/04/NEW.png" 
              alt="Digital Marketing For Hair Transplant Clinics in India" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  </div>
);

// --- Section 2: Dark horizontal banner ---
const HairDarkBannerSection = () => (
  <div className="bg-[#181818] py-16 text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <p className="text-white text-sm md:text-base leading-relaxed font-medium">
        No doubt, it is everyone’s personal decision whether they want to get the hair transplant treatment. Patients often compare hair transplant with non-surgical options, to understand how it can be beneficial.
      </p>
      <p className="text-white/95 text-sm md:text-base leading-relaxed font-medium">
        If you own a hair restoration business, then it is important that at every stage of your business you are attracting patients. You need to strategize carefully and take the right decision which benefits your clinic or hospital. This is what calls out for the hair restoration marketing strategy which helps you to grab the attention of the patients, no matter where they are present. You need to help them to understand the treatment and how it is the preferred choice of hair restoration.
      </p>
    </div>
  </div>
);

// --- Section 3: Exemplary marketing solution ---
const HairExemplarySection = () => (
  <div className="bg-[#F1F1F1] py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Graphic */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-[420px] aspect-square">
            <Image 
              src="https://flymediatech.com/wp-content/uploads/2024/03/IIMG02.png" 
              alt="Best Digital Marketing Company in Punjab" 
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl md:text-[40px] font-serif font-bold text-black leading-tight">
            Exemplary marketing solution to surpass your competitors
          </h2>
          <div className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium space-y-5">
            <p>
              To stay on the top you need to be different but better. Ensure that your business is using a superior marketing strategy so that your search engine ranking is the highest.
            </p>
            <p>
              Having a marketing expert by your side will take all your stress away as they assist you to take the right steps. They help you to target the local and demographic searches in Google and other search engines.
            </p>
            <p>
              The marketing team will evaluate the competitors, focus on{" "}
              <Link href="/our-services/seo-marketing-services" className="text-[#ff9900] hover:underline font-semibold">
                SEO
              </Link>
              , and target the apt keywords. With the experts, you will gain the attention of those clients who need the hair restoration service in your area. The years of experience and training have helped us to provide ‘to the point’ hair transplant marketing tactics be it social media advertising and paid searches. Therefore, you will be in the mind of your prospective patients all the time.
            </p>
          </div>
          <div className="pt-2">
            <Link 
              href="/contact-us"
              className="inline-block bg-[#ff9900] hover:bg-[#FA7E09] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-150"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  </div>
);

// --- Section 4: Outperform your hair restoration ---
const HairOutperformSection = () => (
  <div className="bg-[#F1F1F1] py-16 border-t border-gray-200/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Content */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl md:text-[40px] font-serif font-bold text-black leading-tight">
            Outperform your hair restoration service for enlarging your online existence
          </h2>
          <ul className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium space-y-5 list-disc pl-5">
            <li>
              Getting search engine visibility is the first step towards a beneficial hair restoration marketing plan. After that, you need to have conversion-focused hair restoration and best hair transplant marketing to increase the patient base and make your practice aware on a larger scale.
            </li>
            <li>
              To do this, we provide your business with a lead-driven marketing plan which leads to increased brand awareness, Increases ROI, helps the user to have the best information, and having a content-rich landing page that helps to convert.
            </li>
            <li>
              The content needs to be planned with a proper strategy and the website should have all the necessary information. The audience should be able to reach you in case of an emergency. The team will also help you modify the content on different digital platforms so that the search ranking is improved and the client base should be loyal.
            </li>
          </ul>
        </div>

        {/* Right: Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-square">
            <Image 
              src="https://flymediatech.com/wp-content/uploads/2024/03/imga-haior.png" 
              alt="Digital Marketing For Hair Transplant Clinics in India" 
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
);

// --- Section 5: Orange backdrop Section ---
const HairOrangeBannerSection = () => (
  <div className="bg-[#FA7E09] py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-square bg-[#FA7E09]">
            <Image 
              src="https://flymediatech.com/wp-content/uploads/2024/04/hair01.png" 
              alt="Digital Marketing For Hair Transplant Clinics in India" 
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl md:text-[40px] font-serif font-bold text-white leading-tight">
            How to boost your hair restoration practice with an enhanced online presence?
          </h2>
          <div className="space-y-4">
            <span className="text-white font-bold text-base md:text-[17px] tracking-wide block uppercase underline">
              Brush up your hair restoration marketing to convert patients
            </span>
            <div className="text-white/95 text-sm md:text-[15px] leading-relaxed font-medium space-y-5">
              <p>
                Get more Hair transplant leads with Hair transplant Digital marketing in India, To stay at the forefront in professionals or personal life, it is important to have the best strategy. Being a business owner, there is a different kind of pressure to stay ahead of everyone and being noticed by everyone. Therefore, the business needs to have an updated hair transplant marketing in India.
              </p>
              <p>
                No doubt, it is everyone’s personal decision whether they want to get the hair transplant treatment. Patients often compare hair transplant with non-surgical options, to understand how it can be beneficial.
              </p>
              <p>
                If you own a hair restoration business, then it is important that at every stage of your business you are attracting patients. You need to strategize carefully and take the right decision which benefits your clinic or hospital. This is what calls out for the hair restoration marketing strategy which helps you to grab the attention of the patients, no matter where they are present. You need to help them to understand the treatment and how it is the preferred choice of hair restoration.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

// --- Section 6: Control your online prominence ---
const HairOnlineProminenceSection = () => (
  <div className="bg-[#F1F1F1] py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200/60 space-y-6">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-black leading-snug">
          Control your online prominence to build an outstanding brand image!
        </h2>
        <ul className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium space-y-5 list-disc pl-5">
          <li>
            For brand building and consistent business growth, it is important to work out the entire situation. Proper management is the key to reach out to the audience on a global platform.
          </li>
          <li>
            If you have established an online presence then you are going to attract more patients and the first impression will be the best. It is important to include the data trends and industry analysis so that the hair restoration marketing strategy is improved. The focus is put on getting accurate customer reviews regarding the services you provide them. But Why? There might be some patients who want to impact your online reputation negatively which neither we want nor you.
          </li>
          <li>
            The professionals believe that online reputation needs to provide the real picture of how the patient felt and how the surgery helped him. To do so, it is important to use the time & tested techniques of online marketing. For the increased online reputation it is important to take into consideration everything.
          </li>
        </ul>
        <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-semibold pt-2 border-t border-gray-100">
          In that case, the internal automated system can be used to check the review generation, solve the patient issues, and help the site to get on the top of search engines.
        </p>
      </div>
    </div>
  </div>
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
    images: ["NEW.png"]
  };

  return (
    <ServicePage {...metaData} bgClass="bg-[#F1F1F1]">
      <HairHeroSection />
      <HairDarkBannerSection />
      <HairExemplarySection />
      <HairOutperformSection />
      <HairOrangeBannerSection />
      <HairOnlineProminenceSection />
      <ContactFormSection />
    </ServicePage>
  );
}
