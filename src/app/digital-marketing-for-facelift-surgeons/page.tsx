"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicePage from "@/components/ServicePage";
import ContactFormSection from "@/components/ContactFormSection";

// --- Section 1: Hero Section ---
const FaceliftHeroSection = () => (
  <div className="bg-[#F1F1F1] pt-12 pb-16 md:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-[46px] font-serif font-bold text-black leading-tight">
            Digital Marketing For Facelift Surgeons in India
          </h1>
          <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
            Facelift Marketing has never been a cup of tea for{" "}
            <span className="text-[#ff5262] font-semibold">digital marketing</span> and{" "}
            <span className="text-[#ff5262] font-semibold">search engine optimisation agencies in Punjab</span>.
            The potential user is not at all convinced to take services from the particular client until he is convinced
            with the points of importance of rendering the specific services. Let us get to know the indispensable points
            of what is the indispensability of digital marketing services so that the potential user could reach the service provider.
          </p>
        </div>

        {/* Right Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-square">
            <Image 
              src="/digital copy.png" 
              alt="Facelift Surgeons Digital Marketing" 
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

// --- Section 2: Online Search ---
const OnlineSearchSection = () => (
  <div className="bg-[#F1F1F1] py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Graphic */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-[420px] aspect-square">
            <Image 
              src="/plastic-surgery-digital-marketing/online-serch.png" 
              alt="Online Search" 
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl md:text-[40px] font-serif font-bold text-black leading-tight">
            Online Search
          </h2>
          <div className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium space-y-5">
            <p>
              The user who is willing to undergo facelift surgery will first and foremost carry out a thorough research on the search engine. He will gather information for only that aspect for which he is in doubt whether he should undergo the procedure or not.
            </p>
            <p>
              The importance of online search does not only lie in the fact that the user will take information from variegated sources but if your content page is the one which has helped the user to get out of his doubts and firmly determine whether he should or should not take up the procedure, you will be benefited.
            </p>
            <p>
              If the user has determined that he would take treatment, he would approach you. But if decides not to take up the treatment, then he would surely refer your name to his or her acquaintances who are looking for the same services.
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

// --- Section 3: Significant in Branding ---
const SignificantBrandingSection = () => (
  <div className="bg-[#F1F1F1] py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl md:text-[40px] font-serif font-bold text-black leading-tight">
            Significant in branding
          </h2>
          <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
            Digital marketing services are not only essential from fetching the potential user point of view. It is rather indispensable for branding perspective itself. Until you build up a good reputation in the market, you would not be able to gain a good sum of profitable amounts. Besides, branding will help you to build good relations and networks with the specialists or doctors who would refer the patient to take treatment from you.
          </p>
        </div>

        {/* Right Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-square">
            <Image 
              src="/plastic-surgery-digital-marketing/BRANDING.png" 
              alt="Significant in branding" 
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
);

// --- Section 4: Referral Insights ---
const ReferralSection = () => (
  <div className="bg-[#F1F1F1] py-16 pb-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-[34px] font-serif font-bold text-black leading-snug text-center">
        Do you know? 60% of the potential customers, clients and patients are encountered based on the referrals.
      </h2>

      {/* Sub sections */}
      <div className="space-y-8 text-left">
        
        {/* Sub section 1 */}
        <div className="space-y-3">
          <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wider">
            Ranking on Google
          </h3>
          <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
            As discussed above, a patient who is in need will always want to take treatment from the best doctor. He can only pick out the best doctor by checking the rankings on google. No matter, how quality, upgraded and advanced procedures you are using, unless you have not built an online reputation and rank high on google, your services are of no use to anyone because the users at this day and age quintessentially believing in taking services from the one who is having good online presence and reputation.
          </p>
        </div>

        {/* Sub section 2 */}
        <div className="space-y-3">
          <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wider">
            Social Media driven era
          </h3>
          <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-medium">
            This era is social media-driven and unless you are not posting anything on{" "}
            <span className="text-[#ff5262] font-semibold">social media</span>, you would not be going to build a
            relationship with any of the patients. Because patients always believe to take treatment from the clinic
            on whose website good reviews and testimonials are lying.
          </p>
        </div>

      </div>

    </div>
  </div>
);

// --- Main Container ---
export default function FaceliftMarketing() {
  const metaData = {
    title: "Facelift Surgeons Digital Marketing, Facelift SEO Services | Flymedia Technology",
    h1: ["Facelift Surgeons", "Marketing"],
    paragraphs: [
      "Our digital marketing for facelift surgeons focuses on elegance, precision, and trust. We help you reach individuals looking for facial rejuvenation procedures through sophisticated online campaigns."
    ],
    folderName: "flymediatech.com_home",
    images: ["r02.png"]
  };

  return (
    <ServicePage {...metaData} bgClass="bg-[#F1F1F1]">
      <FaceliftHeroSection />
      <OnlineSearchSection />
      <SignificantBrandingSection />
      <ReferralSection />
      <ContactFormSection />
    </ServicePage>
  );
}
