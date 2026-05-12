"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MobileMarketing() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans">
      {/* Hero & Intro Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-[#F1F1F1]">
        {/* Subtle radial grid pattern for premium visual consistency */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Top section: Two-column grid, ordered to show the image first on desktop & mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Mobile App Marketing Illustration (appears first/left in both desktop & mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-[4/3.3] max-w-[540px]">
                <Image
                  src="https://flymediatech.com/australia/wp-content/uploads/2024/03/mobi.png"
                  alt="Mobile App Marketing Agency Sydney"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Right Column: Titles & First 2 Paragraphs (appears second/right in both desktop & mobile) */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-2">
              <div className="space-y-4">
                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-4xl md:text-5xl lg:text-[54px] font-bold text-black leading-[1.15] font-serif"
                >
                  Mobile App Marketing Agency Sydney, Australia
                </h1>
              </div>

              <h2 
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold text-[#EC7317] font-serif"
              >
                Mobile App Marketing Services
              </h2>

              <div className="space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans">
                <p>
                  We are experienced in the field of{" "}
                  <Link 
                    href="/australia/web-development" 
                    className="text-[#e25c5c] underline hover:text-[#c23c3c] font-semibold transition-colors duration-200"
                  >
                    web development services
                  </Link>{" "}
                  and assist your client to touch their highest potentials by enrolling their businesses on the web and generating sales.
                </p>
                <p>
                  Marketing over the desktops of our audience has now been an old-fashioned technique. 
                  The focus now has restrained to mobile phones. These mobile phones are owned by almost 
                  all of the people on this globe because it forms the basics of communication these days. 
                  Thus, focusing on mobile App marketing in Stanhope Gardens, Blacktown is the need of the 
                  hour. It reaches beyond any standard banner advertisement.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Section: Full-width Paragraphs 3, 4 & 5 */}
          <div className="mt-12 lg:mt-16 space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans w-full max-w-full">
            <p>
              Making a personal connection with your audience is the objective of mobile marketing. 
              The best mobile marketing campaigns aim at getting to know the interests of people on 
              their personal cell phones according to their browsing history and aiming to sell products 
              to them. This survey does not need to understand the age, gender, location and other 
              sort of points to identity search results.
            </p>
            <p>
              An app marketing company tries to push their advertisements to blink more on their target 
              audiences’ mobile phones. We strategize your profile, reach your target audience, campaign 
              and promote your products and services and route the customers to the payments and delivery 
              portals. This comes under the mobile app marketing strategies.
            </p>
            <p className="font-semibold text-black">
              Go mobile and use our techniques to flourish your business perspectives across the globe!
            </p>
          </div>

          {/* Section 2: Amazing Mobile Marketing Services */}
          <div className="mt-20 lg:mt-24 border-t border-gray-300/40 pt-16 text-center">
            <div className="space-y-2">
              <span className="tracking-widest text-lg md:text-xl font-bold font-sans  block">
                Our Services
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black leading-tight font-serif"
              >
                Amazing Mobile Marketing Services
              </h2>
            </div>

            {/* 3-Card Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              
              {/* Card 1: Mobile First Design */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100/60 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-xl bg-[#EC7317]/10 flex items-center justify-center text-[#EC7317]">
                    <svg aria-hidden="true" className="w-6 h-6 fill-current" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-xl lg:text-2xl font-bold text-[#EC7317] font-serif"
                    >
                      Mobile First Design
                    </h3>
                    <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                      Creating a mobile app promotion website, in a way that brings in viewers and is user friendly, with the apt security systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Accurate Targeting Customer Support */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100/60 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-xl bg-[#EC7317]/10 flex items-center justify-center text-[#EC7317]">
                    <svg aria-hidden="true" className="w-6 h-6 fill-current" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-xl lg:text-2xl font-bold text-[#EC7317] font-serif"
                    >
                      Accurate Targeting Customer Support
                    </h3>
                    <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                      Targeting the right audience for your sales generation is important.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: SMS Campaigns */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100/60 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-xl bg-[#EC7317]/10 flex items-center justify-center text-[#EC7317]">
                    <svg aria-hidden="true" className="w-6 h-6 fill-current" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-xl lg:text-2xl font-bold text-[#EC7317] font-serif"
                    >
                      SMS Campaigns
                    </h3>
                    <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                      The Mobile App Marketing services in Sydney to be used to promote and spread out the upcoming business, into the industry.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
