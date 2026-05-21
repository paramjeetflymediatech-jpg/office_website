"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ContactFormSection from "@/components/ContactFormSection";

export default function PlasticSurgeryDigitalMarketing() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] font-sans">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-transparent  border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8 order-2 lg:order-1 relative z-10">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-semibold text-black leading-[1.1] tracking-tight">
                  How is digital marketing the best option to promote plastic surgeon services?
                </h1>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Flymedia technology has been offering comprehensive services to the plastic surgery marketing solutions in Punjab. Our plastic surgery digital marketing services in Ludhiana tactics have attracted potential patients in improving their professional reputations.
                </p>
                <p>
                  It is important to understand that Plastic Surgery SEO Services in India are the need of the hour to stay in the forefront against the competitors.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/contact-us">
                  <button className="px-8 py-4 bg-[#FA7E09] text-white rounded-full font-black tracking-widest hover:bg-[#FA7E09] transition-all duration-500 shadow-xl shadow-black/10 flex items-center gap-3 group">
                    Contact Us
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0  rounded-[70%] transform scale-105" />
              <Image 
                src="/plastic-surgery-digital-marketing/BRANDING.png" 
                alt="Plastic Surgery Digital Marketing Services" 
                width={1000} 
                height={1000} 
                className="relative z-10 w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.15)] object-contain"
                priority
              />
            </div>

          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FA7E09]/5 rounded-full blur-[150px] -z-10" />
      </section>

      {/* Services Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Left */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0  rounded-[40px] transform  scale-105" />
              <Image
                src="/plastic-surgery-digital-marketing/cometic.png"
                alt="Digital marketing services for cosmetic and plastic surgeons"
                width={1000}
                height={1000}
                className="relative z-10 w-full h-auto rounded-[32px]"
              />
            </div>

            {/* Text Right */}
            <div className="space-y-8 order-1 lg:order-2 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif font-semibold text-black leading-tight">
                  Digital marketing services for cosmetic and plastic surgeons
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Cosmetic and plastic surgeons look for a steady number to increase their revenue. The surgeon’s online presence makes a lot of difference in the mind of the patient and while they want to choose. Boosting your online presence is determined through different factors in which the efforts and attention. This is what calls out for effective online marketing tactics.
                </p>
                <p>
                  Our team provides top-rated and latest marketing solutions to new your patient count through online presence. The marketing strategy is aimed to improve the following things:
                </p>

                <ul className="space-y-4 pt-2 list-disc pl-5">
                  {[
                    "Stellar online reputation",
                    "Robust internet presence",
                    "Loyal and satisfied loyal patient base"
                  ].map((item, index) => (
                    <li key={index} className="text-black font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

 <section
        className="relative py-10 overflow-hidden bg-cover bg-center bg-fixed flex items-center justify-center mt-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/bgimg.png')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white relative z-10 space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white leading-tight">
SEO tactics to gain user attention
          </h2>
          <p className="text-lg sm:text-xl md:text-xl font-serif leading-relaxed max-w-5xl mx-auto">
Your target customers are those who need your service. Through Search engine optimization (SEO) you can reach the potential patients for the practice you are offering. With our team, your services will reach everyone who looks for the specific service.

          </p>

          <p className="text-lg sm:text-xl md:text-xl font-serif leading-relaxed max-w-5xl mx-auto">
Our SEO campaign is executed and created to enhance the patient traffic on your website and help them to avail themselves the same. This is going to make your website rank higher in search engines and the website is optimized.
          </p>
        </div>
      </section>


          {/* Block 2: Reputation Management (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Left */}
            <div className="space-y-8 order-1 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif font-semibold text-black leading-tight">
                  Stay on the forefront by focusing on reputation management
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Plastic surgery is considered an elective method which means you are getting the opportunity to select the best surgeon. When the patient finds the surgeon, they ensure that they find the best. This is where they check the online reviews to be sure that they have made the right choice.
                </p>
                <p>
                  With the management software, the online reviews are managed. We effectively manage the patient reviews to ensure that your website has a positive response. You are also able to address their concerns and issues with ease.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div className="relative order-2">
              <div className="absolute inset-0 rounded-[40px] transform scale-105" />
              <Image
                src="/plastic-surgery-digital-marketing/online-serch.png"
                alt="Reputation Management"
                width={1000}
                height={1000}
                className="relative z-10 w-full h-auto rounded-[32px]"
              />
            </div>
          </div>

          {/* Block 3: Social Media Marketing (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Left */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 rounded-[40px] transform  scale-105" />
              <Image
                src="/plastic-surgery-digital-marketing/insta02.png"
                alt="Social Media Marketing"
                width={1000}
                height={1000}
                className="relative z-10 w-full h-auto rounded-[32px]"
              />
            </div>

            {/* Text Right */}
            <div className="space-y-8 order-1 lg:order-2 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif font-semibold text-black leading-tight">
                  Social Media Marketing
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Social media is important in all regards. It allows you the platform to show the world about the practice and how satisfied the patients are with your services. Moreover, you also get the leverage to interact with the patients and they get the chance to clear their doubts. Social media is the touchpoint to promote your services like anything. The experts will craft a marketing strategy and it aims to boost patient engagement and your practice visibility.
                </p>
              </div>
            </div>
          </div>

          {/* Block 4: Final Thoughts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif font-semibold text-black leading-tight">
                  Final thoughts
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Digital marketing has changed the way business is promoted and its reach among individuals. When a person wants to get the surgeon’s services, they initially check the internet. If they are not able to find you, you are likely at a loss. Use the online world to showcase your services.
                </p>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>

        </div>
      </section>

      <ContactFormSection />
    </div>
  );
}
