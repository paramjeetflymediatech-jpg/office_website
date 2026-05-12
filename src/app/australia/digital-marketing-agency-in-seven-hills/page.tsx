"use client";

import React from "react";
import Image from "next/image";
import SEOMonitor from "@/components/SEOMonitor";
import AustraliaPortfolio from "@/components/AustraliaPortfolio";

export default function DigitalMarketingSevenHills() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans">
      
      {/* 1. Hero Section (Split Grid, Image Left, Content Right) */}
      <section className="relative py-6 md:py-10 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: MAIN illustration (renders first on mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/web-designing/MAIN.png"
                  alt="For Your Business Future Illustration"
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
                For Your Business' Future – FlyMedia Technology
              </h1>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                If you have a business you are looking to expand, you need to ensure that you are capable of investing in high-quality, accurate, and functioning digital marketing services. One might assume that they can easily explore the possibility of exposure on their own. However, it can be a difficult thing to manage alongside running a full-scale business. With the help of the best <span className="font-bold">digital marketing agency in Seven Hills</span>, you can easily make sure that you are able to enhance the scope of possibilities for your business adventures. With FlyMedia, you do not have to worry about anything – our expert team happily takes care of everything!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Why is Digital Marketing Important Section (Content Left, SEOMonitor Right) */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50">
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
                In the current economic market, no matter your business, the competition is egregious. The consumer always has several options – if you have a business, you need to give your customers a reason to choose you. With the help of digital marketing services, you can easily ensure that your business becomes visible to an enlarged customer base, which further enhances your business in a thorough manner. With the help of services such as SEO, SMO, Google AdWords, Meta Ads, and website designing options, you can easily explore the possibility of improving your sales and building a loyal customer base without much hassle.
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

      {/* 3. Explore Our Expansive SEO Services Section */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 space-y-6 text-center">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl font-bold text-black font-serif "
          >
            Explore Our Expansive SEO Services!
          </h2>
          <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
            As the top-ranked SEO agency in Seven Hills, with FlyMedia Technology, you can explore our search engine optimisation services. With this service, you can explore the possibility of ensuring that your website is visible to everyone who is searching for your particular services and products. With seamless keyword insertions and personalised content created specifically for your business – you can easily target the right audience and improve traffic on your website. With FlyMedia Technology, you can ensure that your possibilities are endless. Our SEO experts make sure to employ Google-friendly options to generate the right traffic for your website, which in turn can enhance the scope of your business.
          </p>
        </div>
      </section>

      {/* 4. Build a Website for Your Store Front Today! (Split Grid, Image Left, Content Right) */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: bestr-it illustration */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/images/bestr-it.png"
                  alt="Build a Website for Your Store Front Today Illustration"
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
                Build a Website for Your Store Front Today!
              </h2>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                As the leading <span className="font-bold">website designing agency in Seven Hills</span>, we also offer the possibility of creating a business-friendly website for your products and services in a comprehensive manner. With a user-centric website, you can rest assured that your customers, old and new alike, can understand the extent of your services and become connected to your business. Having a website also adds credibility to your business venture in a thorough fashion. One might not think that they can do much with this website. However, not only can you increase visibility with the correct SEO strategies, but you can also sell your products or services without any hassle.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Bottom Unified Call to Action Section */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 space-y-6 text-left">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl font-bold  font-serif"
          >
            Choose FlyMedia Technology for All Your Digital Marketing Needs!
          </h2>
          <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
            Surviving in the digital world without proper marketing techniques can prove to be a difficult thing to manage. You might think that you can manage the marketing aspect of your business on your own, but we know and understand the effort and intricacies required of the same. With the help of FlyMedia Technology, you can easily make sure to enhance the scope of possibilities for your business, without any worries whatsoever. FlyMedia Technology is here for all your digital marketing needs!
          </p>
        </div>
      </section>
<AustraliaPortfolio />
    </main>
  );
}
