"use client";

import React from "react";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import ContactFormSection from "@/components/ContactFormSection";

// --- Section 1: Hero Section ---
const OrthoHeroSection = () => (
  <div className="bg-[#F1F1F1] py-16 lg:py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Graphic */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-[420px] aspect-square">
            <Image 
              src="https://flymediatech.com/wp-content/uploads/2024/03/ORTHO.png" 
              alt="Orthopedic Digital Marketing Services" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Text Details */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <h1 className="text-4xl md:text-5xl lg:text-[46px] font-serif font-bold text-black leading-tight">
            Important tactics for building up effective Orthopedic online marketing strategy
          </h1>

          <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
            One must be wondering about what an orthopedic doctor specializes in. Then the answer to this question is the one who is a specialist in the treatment of bones and muscles, he is known as the orthopedic specialist. Obviously, if it is the matter of bones and muscles, then one would look up to somebody who could help in lessening their pain and helping them in the faster recovery. The question arises, how would one come up with the best doctor? Then this needs an effective <strong className="text-black font-bold">orthopedic online marketing in India</strong>.
          </p>
        </div>

      </div>
    </div>
  </div>
);

// --- Section 2: Columns (Focus on Visibility & Build up Positive Feedback) ---
const OrthoTacticsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Column: Focus on Visibility */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-black border-b border-gray-100 pb-3">
            Focus on visibility
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <ChevronsRight className="text-[#ff9900] shrink-0 mt-1" size={20} />
              <span className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
                The first and foremost important point which one needs to take good care of is focusing on enhancing visibility. Visibility is something that makes your patients aware that somebody is there who is trained and specializes in the particular field. It makes them count on you. In most cases, when people do not want to take references from family members, relatives, or friends. In those cases, they pick to rely on somebody who has achieved the purpose of maintaining enhanced visibility.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronsRight className="text-[#ff9900] shrink-0 mt-1" size={20} />
              <span className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
                The next thing which is highly responsible for making your online presence efficient and significant is search engine optimization. If one is focusing on good SEO Tactics, the chances will be high that the users will encounter the presence of your company whichever platform he uses.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronsRight className="text-[#ff9900] shrink-0 mt-1" size={20} />
              <span className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
                It is a known fact that along with the strong digitalization in the Covid-19 Period, many people are highly relying on Social media. So regular posting on social media and websites will help you to achieve the motive of a strong online presence.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Build up Positive Feedback */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-black border-b border-gray-100 pb-3">
            Build up positive feedback
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <ChevronsRight className="text-[#ff9900] shrink-0 mt-1" size={20} />
              <span className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
                No matter how many good SEO tactics and tools you are using, everything will be in vain if you do not have the required skills. Obviously, the job of an SEO company and digital marketing company is to make your online presence better, enhanced, and effective. They would help you in the motive of making the patients rely on you. The patients will be definitely convinced in taking treatment and services from you. But after they have taken consultation sessions from you. It is an orthopedic doctor’s responsibility to make him go in the full satisfying and gratifying condition.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronsRight className="text-[#ff9900] shrink-0 mt-1" size={20} />
              <span className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
                For that, there is a requirement for highly effective software. There should be software that would be very helpful in collecting feedback from your patients. If there would be more credits of authenticity on your webpage then the patients will no doubt be highly fetched in getting services from you.
              </span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
);

// --- Section 3: Final Thoughts ---
const OrthoFinalThoughtsSection = () => (
  <div className="bg-[#F1F1F1] py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200/60 space-y-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-black leading-snug">
          Final Thoughts
        </h2>
        <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
          Along with the above-written tips and tactics, one should try to maintain healthy and cordial relations with the physicians and doctors. This would help you to get the opportunity to serve more patients. Do not compromise in providing your patients good facilities and treatment options.
        </p>
      </div>
    </div>
  </div>
);

// --- Main Container ---
export default function OrthopedicHospitalMarketing() {
  const metaData = {
    title: "Orthopedic Hospital Digital Marketing, Orthopedic SEO Services | Flymedia Technology",
    h1: ["Orthopedic Hospital", "Marketing"],
    paragraphs: [
      "Flymedia Technology provides specialized digital marketing for orthopedic hospitals and clinics. We help you reach patients searching for joint replacement, sports medicine, and specialized bone care."
    ],
    folderName: "flymediatech.com_home",
    images: ["ORTHO.png"]
  };

  return (
    <ServicePage {...metaData} bgClass="bg-[#F1F1F1]">
      <OrthoHeroSection />
      <OrthoTacticsSection />
      <OrthoFinalThoughtsSection />
      <ContactFormSection />
    </ServicePage>
  );
}
