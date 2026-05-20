"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Activity, 
  Users, 
  TrendingUp, 
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle
} from "lucide-react";
import ServicePage from "@/components/ServicePage";
import ContactSection from "@/components/ContactSection";
import ContactFormSection from "@/components/ContactFormSection";

// --- Components ---

const GastricHeroSection = () => (
  <div className="bg-[#F1F1F1] py-12 lg:py-20 relative overflow-hidden">
    {/* Decorative blur backgrounds */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff9900]/5 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image Column: Loaded FIRST in mobile stack for "image first after that content" */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          {/* Main dimensional visual container */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Base Layer Image (Main Doctor/Analytics Illustration) */}
            <div className="relative w-full h-full overflow-hidden z-20">
              <Image 
                src="/Untitled-1.png" 
                alt="Bariatric Bypass Surgery Marketing Services" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Column: Loaded SECOND in mobile stack */}
        <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-black leading-tight">
            Bariatric Gastric Bypass Surgery Marketing Services
          </h1>
          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
            <p className="font-bold text-black border-l-4 border-[#ff9900] pl-4 italic">
              How to build up an effective strategy for weight loss marketing services?
            </p>
            <p>
              It is because of the advent of many professions, the demand for{" "}
              <Link href="/social-media-optimization" className="text-[#ff9900] font-semibold hover:underline">
                digital marketing
              </Link>{" "}
              in each of them is increasing at a considerable rate. Bariatric Gastric Bypass Surgery Digital Marketing Services in Ludhiana, Punjab are the most sought services in today’s world. It is because of the drastic change in the lifestyle which also includes the incorporation of unhealthy eating habits. People are more cautious about their emergence and to experience the rapid results, they rely on gastric bypass surgeries.
            </p>
            <p>
              As a result, many agencies today are offering Bariatric Gastric Bypass Surgery Digital Marketing Services in Ludhiana, Punjab. It includes every industry as this is the only way to approach their potential customers in the right way and at the right time.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const GastricDifficultySection = () => (
  <div className="bg-[#F1F1F1] py-16 lg:py-24 relative overflow-hidden border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column (Image Stack): Loaded FIRST in mobile stack for "image first after that content" */}
        <div className="w-full lg:w-1/2 order-1 lg:order-1">
          {/* Main dimensional visual container */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Base Image: main-man.png */}
            <div className="relative w-full h-full overflow-hidden z-20">
              <Image 
                src="/main-man.png" 
                alt="Bariatric Surgery Strategy Difficulty" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column (Content Copy): Loaded SECOND in mobile stack */}
        <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-2">
          {/* Block 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black leading-tight">
              Why is it so difficult to develop a strategy for bariatric services?
            </h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                It is very difficult in the case of bariatric surgery marketing to develop a highly efficient strategy or plan. It is because of the influence of the media through their scary stories that are enough to make the gap between potential customers and the service providers.
              </p>
              <p>
                Moreover, one of the main causes is also associated with the HMO which is considerably low paying along with the Medicaid cases. These things themselves are enough to cause an inappropriate perspective for the quality of bariatric services.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black leading-tight">
              What is the most customary aspect of the strategy of bariatric surgeries that have been used a lot?
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Surgeons do an effort to reach out to potential customers by posting “Before and After” Pictures. Nowadays, people who are looking for an ideal weight-loss surgeon have a customary viewpoint. They think that an ideal surgeon will not fake by posting and making banners and hoardings of “Before-After Pictures.” It is because of their experience of encountering the unqualified and skill-deprived surgeons who were able to make them reach them by laying this customary trap.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const GastricVideoSection = () => (
  <div className="relative py-20 overflow-hidden bg-black text-white">
    {/* Background Video Element */}
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <video 
        className="w-full h-full object-cover opacity-40 pointer-events-none" 
        autoPlay 
        muted 
        playsInline 
        loop 
        src="https://flymediatech.com/wp-content/uploads/2024/03/4785844_Shape_Blast_Explosion_1280x7201.mp4"
      />
      {/* Dark overlay to ensure incredible contrast for text */}
      <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 relative z-10 text-center space-y-12">

      {/* Block 1 */}

      <div className="space-y-2">
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
          Why is it so difficult to develop a strategy for bariatric services?
        </h2>
        <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-2 max-w-7xl mx-auto">
          <p>
            It is very difficult in the case of bariatric surgery marketing to develop a highly efficient strategy or plan. It is because of the influence of the media through their scary stories that are enough to make the gap between potential customers and the service providers.
          </p>
          <p>
            Moreover, one of the main causes is also associated with the HMO which is considerably low paying along with the Medicaid cases. These things themselves are enough to cause an inappropriate perspective for the quality of bariatric services.
          </p>
        </div>
      </div>


      {/* Block 2 */}
      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl lg:text-2xl font-serif font-bold text-white leading-tight">
          What is the most customary aspect of the strategy of bariatric surgeries that have been used a lot?
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-7xl mx-auto">
          Surgeons do an effort to reach out to potential customers by posting “Before and After” Pictures. Nowadays, people who are looking for an ideal weight-loss surgeon have a customary viewpoint. They think that an ideal surgeon will not fake by posting and making banners and hoardings of “Before-After Pictures.” It is because of their experience of encountering the unqualified and skill-deprived surgeons who were able to make them reach them by laying this customary trap.
        </p>
      </div>
    </div>
  </div>
);

const GastricStrategySection = () => (
  <div className="bg-[#F1F1F1] py-16 lg:py-24 relative overflow-hidden border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
      
      {/* Upper part: Flex layout for Image and Active/Passive Strategy */}
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column (Image Column): Loaded FIRST in mobile stack for "image first after that content" */}
        <div className="w-full lg:w-1/2 order-1 lg:order-1">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Base Image: imgmenu025.png */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden z-20">
              <Image 
                src="/imgmenu025.png" 
                alt="Bariatric Marketing Strategy" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column (Text Copy): Loaded SECOND in mobile stack */}
        <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-2">
          {/* Block 1 */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black leading-tight">
              How to develop an ideal online marketing strategy to drive considerable traffic?
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-semibold">
              For bringing about the best marketing services, one should take into account focusing on active and passive marketing strategies.
            </p>
          </div>

          {/* Block 2 */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-black leading-tight">
              What is the implication of active marketing services?
            </h3>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-3">
              <p>
                Active marketing services include building good relations with the physicians.
              </p>
              <p>
                Corroborate to build cordial relations only with those who are customary to drive more traffic of patients who sought the consultation for encountering the best bariatric surgeon.
              </p>
              <p>
                For this, you should focus on expanding your network with reputed physicians, specialists, and expert doctors.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-black leading-tight">
              What is the connotation of passive marketing strategies?
            </h3>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed">
              <p className="mb-3">Passive marketing strategies can be summed by including:</p>
              <ul className="list-disc list-inside pl-2">
                <li>The effective techniques for Search Engine Optimization</li>
                <li>
                  <Link href="/pay-per-click-ppc" className="text-[#ff9900] font-semibold hover:underline">
                    Pay per click
                  </Link>{" "}
                  Campaign
                </li>
                <li>Online reputation management</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Lower part: Combined Reputation Management and Final Thoughts in one box */}
      <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-lg space-y-8">
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-black leading-tight text-center">
            How to manage online reputation?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center">
            Online reputation can be managed by publishing the reviews of your customers on your websites and social media platforms. You can also make visual content which is inviting the attention of those who are seeking a company with good reviews.
          </p>
        </div>

        <div className=" space-y-3">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-black leading-tight text-center">
            Final Thoughts
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center">
            Carrying out everything according to an ideal bariatric marketing strategy is not a cup of tea. The patients who are searching for a good hospital or clinic for bariatric surgeries in India are the ones who leave no social media channel unvisited. So good SEO accompanied with effective social media handling is what can help you in driving potential traffic.
          </p>
        </div>
      </div>

    </div>
  </div>
);

// --- Main Page ---

export default function GastricBypassMarketing() {
  const data = {
    title: "Bariatric & Gastric Bypass Surgery Marketing Services | Flymedia Technology",
    h1: ["Bariatric & Gastric Bypass Surgery Marketing Services"],
    paragraphs: [
      "We specialize in digital marketing for gastric bypass surgery clinics and surgeons. Our data-driven strategies help you reach potential patients searching for weight loss solutions.",
      "From targeted SEO to engaging social media campaigns, we help you build trust and authority in the bariatric surgery field, ensuring high-quality lead generation."
    ],
    folderName: "flymediatech.com_home",
    images: ["r02.png"]
  };

  return (
    <ServicePage {...data} bgClass="bg-white">
      <GastricHeroSection />
      <GastricDifficultySection />
      <GastricVideoSection />
      <GastricStrategySection />
      <ContactFormSection />
    </ServicePage>
  );
}
