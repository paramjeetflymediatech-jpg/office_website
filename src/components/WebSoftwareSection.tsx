"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";

export default function WebSoftwareSection() {
  const benefits = [
    "Saves time as you always get to use the latest version.",
    "Saves you from long downloading.",
    "Saves you money as you do not have to buy new CDs or programs"
  ];

  return (
    <div className="">
      {/* Section 1: Hero & Benefits */}
      <section className="overflow-hidden bg-[#E9E9E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side: Content (Static container) */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                 <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-serif font-bold text-black leading-tight">
                   Web Based Software’s Provide You Many Benefits Like:
                 </h2>
                 <div className="h-1.5 w-24 bg-[#ff9900] rounded-full"></div>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all border-l-4 border-[#ff9900]"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#ff9900] flex-shrink-0 mt-0.5" />
                    <span className="text-lg font-medium text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Image (Static container) */}
            <div className="w-full lg:w-1/2 relative flex justify-center">
              <div className="relative z-10 w-full max-w-[500px]">
                <Image 
                  src="/images/online-serch.png" 
                  alt="Web Based Software Benefits" 
                  width={1000} 
                  height={1000} 
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What is Web Software? */}
      <section className="py-24 bg-[#E9E9E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-200/50 max-w-4xl mx-auto space-y-6">
            <p className="text-[16px] md:text-[18px] text-gray-800 leading-relaxed font-sans">
              Software used on the internet via a web browser is web software’s. For such software’s you do not require any CDs and neither do you have to download any software from the net. If you are thinking this is a new technology well, be amazed because most of you have almost used them. <strong className="text-black font-black">Yahoo Mail, Gmail, Twitter, Face book and Hotline</strong> are some of the most widely used web based software’s.
            </p>
            <p className="text-[16px] md:text-[18px] text-gray-800 leading-relaxed font-sans">
              With <strong className="text-black font-black">Web Based Software Development Services</strong> you get software’s that do not require to be installed or maintained. They can be used on any device with net connection and they provide data storage and most of all important they are secure for your data even, personal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
