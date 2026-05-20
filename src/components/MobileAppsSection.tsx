"use client";

import Image from "next/image";
import { Code, Smartphone, Laptop, UserCheck } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";

export default function MobileAppsSection() {
  return (
    <div className="space-y-24 lg:space-y-32 py-12 bg-[#F1F1F1]">
      {/* Section 1: Mobile App Designing */}
      <section className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side: Mobile App Image (Static container) */}
            <div className="w-full lg:w-1/2 relative flex justify-center">
              <div className="relative z-10 w-full max-w-[550px]">
                <Image 
                  src="/images/mobi.png" 
                  alt="Mobile App Designing" 
                  width={1200} 
                  height={1000} 
                  className="w-full h-auto drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Right Side: Content (Static container) */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-3">
                 <h2 className="text-[36px] sm:text-[42px] md:text-[50px] font-serif font-bold text-black leading-tight flex flex-col">
                   <TypewriterText text="Mobile App Designing" speed={50} />
                 </h2>
                 {/* <div className="h-1.5 w-20 bg-[#ff9900] rounded-full mt-4"></div> */}
              </div>

              <div className="space-y-4">
                <h5 className="text-xl md:text-2xl font-serif font-semibold text-gray-900 leading-snug">
                  Creating stunning designs & intelligent usability and create organizational efficiencies.
                </h5>
                <div className="text-base md:text-[16px] text-gray-700 leading-relaxed font-medium space-y-4">
                  <p>
                    Do you have any theme for your app that you need to begin to move to the next level, it is called an app design. An attractive app design definitely draws visitors and makes them your users, ultimately it becomes a niche in itself that leads other apps.
                  </p>
                  <p>
                    A well designed app with significant features does beyond the expectations. For this you need an extremely professional iPhone app development India service that offers you to choose from the several unique app designs that are adorable and work excellently at the all platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: All Platforms */}
      <section className="overflow-hidden bg-[#F1F1F1] py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            {/* Right Side: SEO/Platform Image (Static container) */}
            <div className="w-full lg:w-1/2 relative flex justify-center">
              <div className="relative z-10 w-full max-w-[500px]">
                <Image 
                  src="/images/seo01.png" 
                  alt="All Platforms Mobile Development" 
                  width={1000} 
                  height={1000} 
                  className="w-full h-auto drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Left Side: Content (Static container) */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-3">
                 <h2 className="text-[36px] sm:text-[42px] md:text-[50px] font-serif font-bold text-black leading-tight flex flex-col">
                   <TypewriterText text="All Platforms" speed={70} />
                 </h2>
                 {/* <div className="h-1.5 w-20 bg-[#ff9900] rounded-full mt-4"></div> */}
              </div>

              <div className="space-y-4 text-base md:text-[16px] text-gray-700 leading-relaxed font-medium">
                <p>
                  While choosing an app design, its significant performance on the all platforms is essential. An app working on only one platform is not a good choice therefore you must choose the adequate app development.
                </p>
                <p>
                  The mobile app design company can design and develop apps for single platform you can consider. The expert professionals are completely aware of performance, service and complications of every platform and can assure that your app is exclusive and outstanding on every gadget.
                </p>
                <p>
                  Adding every needed attribute, it is assured that your app is prepared to be launched and submitted on time. Although prior this, a significantly performed test run is that allows you to confirm how well these have been successful in obtaining your objectives.
                </p>
              </div>

              <div className="pt-4">
                <button className="bg-black text-white px-10 py-5 font-black uppercase tracking-tighter rounded-sm hover:bg-[#ff9900] hover:text-black transition-all shadow-2xl flex items-center gap-3 group active:scale-95 duration-200">
                  Build Your App
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: We Are Flexible */}
      <section className="py-24  overflow-hidden bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">We Are Flexible</h2>
            <div className="h-1.5 w-20 bg-[#ff9900] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "CODERS",
                description: "The benefit of choosing experienced, talented and skilled mobile app developers ensures the delivery of quality products at the competitive price. The flourishing work history of decades offers development of exclusively designed attractive mobile apps.",
                icon: <Code className="w-8 h-8 text-[#ff9900]" />
              },
              {
                title: "SPECIALIZED APP",
                description: "Get customized android app development India for customized app look with better option to develop an exclusive app for you and users than those traditional app designers and developers.",
                icon: <Smartphone className="w-8 h-8 text-[#ff9900]" />
              },
              {
                title: "DESIGN SERVICES",
                description: "Every factor is customized to ensure the complete uniqueness at all hooks and corners. The tailored and expertly designed app effectively generates revenues without compromising quality.",
                icon: <Laptop className="w-8 h-8 text-[#ff9900]" />
              },
              {
                title: "GET THE SOURCE CODE",
                description: "After accomplishing the task of app design, development and testing, it is launched and offered you to take its ownership. Keeping the source code makes it easier for you to enhance or improve your project at anytime.",
                icon: <UserCheck className="w-8 h-8 text-[#ff9900]" />
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gray-50 rounded-sm border-b-4 border-transparent hover:border-[#ff9900] hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center space-y-4"
              >
                <div className="p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tighter text-black uppercase">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
