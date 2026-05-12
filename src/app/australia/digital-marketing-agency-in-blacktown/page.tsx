"use client";

import React from "react";
import Image from "next/image";
import SEOMonitor from "@/components/SEOMonitor";
import AustraliaPortfolio from "@/components/AustraliaPortfolio";

export default function DigitalMarketingBlacktown() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16">

      {/* 1. Hero Section (Split Grid, Image Left, Content Right) */}
      <section className="relative py-6 md:py-10 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: mobi illustration (renders first on mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/web-designing/mobi.png"
                  alt="Digital Marketing Agency Blacktown Hero"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 order-2">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black leading-tight font-serif"
              >
                Digital Marketing Agency Blacktown
              </h1>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                In our current world, it is more important than ever to have the right digital marketing strategy. In order for your business to thrive, you need to invest in a proper digital marketing plan in a thorough and essential manner. With the help of a leading <span className="font-bold">digital marketing agency in Blacktown</span>, FlyMedia Technology, you can make sure that your business thrives in an extensive and reliable manner.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Why is Digital Marketing Important Section (Content Left, SEOMonitor Right) */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50 ">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold text-black font-serif"
              >
                Why is Digital Marketing Important?
              </h2>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                In our ever-growing reliance on digital media, it has become more critical than ever to have a marketing strategy that is capable of tackling the social media giants in your business’s favour. In order to thoroughly make sure that you are able to grow and prosper your business, with the right <span className="font-bold">SEO agency in Blacktown</span>, you can thoroughly and actively make sure that you are able to enhance everything in your favour.
              </p>
            </div>

            {/* Right Column: SEOMonitor Display */}
            <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[460px]">
                <SEOMonitor />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Offered by FlyMedia Technology */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">

          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-black font-serif"
            >
              Services Offered by FlyMedia Technology
            </h2>
            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-sans font-medium">
              By choosing FlyMedia Technology, you are opting for your business’s future. With us, you can gain access to any of these services in a comprehensive capacity.
            </p>
          </div>

          {/* Row 1: 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: SEO */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(236,115,23,0.08)] transition-all duration-300">
              <div>
                <h3 className="font-bold text-[#EC7317] text-xl mb-4">SEO (Search Engine Optimisation)</h3>
                <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium">
                  With the help of effective search engine optimisation, you can ensure that your website is ranked ahead in the search results. With the help of a leading <span className="font-bold">SEO agency in Blacktown</span>, you can do that with the help of our team, you can make certain that you are able to thoroughly enhance the presence of your social media websites.
                </p>
              </div>
            </div>

            {/* Card 2: SMO */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(236,115,23,0.08)] transition-all duration-300">
              <div>
                <h3 className="font-bold text-[#EC7317] text-xl mb-4">SMO (Social Media Optimisation)</h3>
                <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium">
                  If you are looking for a way to enhance your presence on social media, you can opt for our social media optimisation services. Our team makes certain that the content for your business profiles works in your favor. We work to engage the algorithms in our favour rather than against us. You can easily have a community of people who will support your every endeavour no matter which industry you work in.
                </p>
              </div>
            </div>

            {/* Card 3: Website Designing */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(236,115,23,0.08)] transition-all duration-300">
              <div>
                <h3 className="font-bold text-[#EC7317] text-xl mb-4">Website Designing</h3>
                <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium">
                  If you are looking to enhance your website, you can consult our <span className="font-bold">website designing agency in Blacktown</span> to improve the appearance of your website. If your business does not have a website, it can thoroughly be a problematic way to operate your business. Explore the option to build a website for your business.
                </p>
              </div>
            </div>

          </div>

          {/* Row 2: Centered 2-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Card 4: Google AdWords */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(236,115,23,0.08)] transition-all duration-300">
              <div>
                <h3 className="font-bold text-[#EC7317] text-xl mb-4">Google AdWords</h3>
                <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium">
                  If you want to run advertisements on Google, you can do so via our service, Google AdWords. We make sure that you are able to do so with FlyMedia Technology.
                </p>
              </div>
            </div>

            {/* Card 5: Meta Ads */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(236,115,23,0.08)] transition-all duration-300">
              <div>
                <h3 className="font-bold text-[#EC7317] text-xl mb-4">Meta Ads</h3>
                <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium">
                  If you want to convert your social media posts into advertisements, you can do so via Meta Ads. With us, you can leave the stress of running advertisements on our team.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Choose Section (Split Grid, Image Left, Content Right) */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: online-serch illustration */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-[4/3] max-w-[460px]">
                <Image
                  src="/web-designing/online-serch.png"
                  alt="Choose FlyMedia Technology Illustration"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 space-y-6 order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-black font-serif"
              >
                Choose FlyMedia Technology for All Your Digital Marketing Needs!
              </h2>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                In order to make sure that your business is able to thrive thoroughly, you need to hire the services of FlyMedia Technology! Our thoroughly experienced and trained team makes sure to enhance the scope of your business and bring more customers to your business avenue. From SEO-friendly content to ensuring that you are able to thoroughly and actively have a dynamic website, there are several things you can access with our services. For the betterment of your business’s future, choose FlyMedia Technology and our team today!
              </p>
            </div>

          </div>
        </div>
      </section>
<AustraliaPortfolio />
    </main>
  );
}
