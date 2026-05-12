"use client";

import React from "react";
import Image from "next/image";
import SEOMonitor from "@/components/SEOMonitor";
import AustraliaPortfolio from "@/components/AustraliaPortfolio";

export default function DigitalMarketingQuakersHill() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16">
      
      {/* 1. Hero Section (Split Grid, Image Left, Content Right) */}
      <section className="relative py-6 md:py-10 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: BRANDING illustration (renders first on mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/web-designing/BRANDING.png"
                  alt="Enhance Your Business Online Presence Illustration"
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
                Enhance Your Business' Online Presence with FlyMedia!
              </h1>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                In today’s competitive environment, it is imperative to ensure that you are taking all the steps necessary to enhance the state of your business. With the help of FlyMedia Technology, the leading <span className="font-bold">digital marketing agency in Quakers Hill</span>, you can easily do that now! Our team thoroughly ensures to employ SEO, SMO, Google AdWords, Meta Ads, and Website designing services to make sure that your business thoroughly and actively thrives! Ensure that your business reaches new heights of success with the help of our algorithm-friendly marketing solutions today!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Employ Tried and Tested SEO Tactics with Our Experts Section */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold text-black font-serif"
              >
                Employ Tried and Tested SEO Tactics with Our Experts!
              </h2>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                Our team of SEO experts ensures that they are using every tactic in the playbook of SEO to enhance the visibility of your website. From researching accurate SEO-friendly keywords to ensuring that they are inserted in the content in a seamless fashion – FlyMedia is your one-stop solution for all your digital marketing needs. With the best <span className="font-bold">SEO agency in Quakers Hill</span> at your service, you can rest assured that your website ranks higher in search results, therefore launching your business unlike ever before!
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

      {/* 3. Why Does Your Business Need Digital Marketing Section */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-6 text-center">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl font-bold text-black font-serif"
          >
            Why Does Your Business Need Digital Marketing?
          </h2>
          <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
            If you have recently started your business venture, you might naively believe that you do not need digital marketing services of any kind. However, it is vital to note that digital marketing is more important than ever in this competitive day and age. Even if you are only looking for organic traffic, with the barrage of options, it can be difficult for your website to be recommended to organic audiences without the scope of digital marketing. With the help of our experts, you can narrow down your niche audience and target them with your content and media strategies. Explore the services of FlyMedia Technology to have the best digital marketing package at your service!
          </p>
        </div>
      </section>

      {/* 4. Build an Online Storefront Section (Split Grid, Image Left, Content Right) */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: mobi illustration */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/web-designing/mobi.png"
                  alt="Build an Online Storefront Illustration"
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
                Build an Online Storefront for Your Business with Our Website Designing Services!
              </h2>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                If your business does not have an online storefront, it can be a missed opportunity overall. One needs to ensure that they are capable of exploring the option to build a website and enhance your business's reach. With the help of our expert <span className="font-bold">website designing agency in Quakers Hill</span>, you can make sure to develop your website and establish an online storefront. Even if you only offer services, you can establish a way for your customers to book an appointment and make the entire process seamless!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Bottom Unified Call to Action Section */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-6 text-left">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl font-bold font-serif"
          >
            FlyMedia Technology – Improve the Exposure of Your Business with Us!
          </h2>
          <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
            Running a business on your own is enough of a responsibility – you should not have to worry about the marketing side! With the help of FlyMedia Technology, you can make sure that you are able to enhance your business and the scope of possibility thoroughly. Digital marketing is the need of the hour, and you can explore our services for the best results. Employ the best digital marketing agency in Quakers Hill to expand the horizon for your business today!
          </p>
        </div>
      </section>
<AustraliaPortfolio />
    </main>
  );
}
