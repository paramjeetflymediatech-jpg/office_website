"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContentMarketingStrategy() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans">
      {/* Hero Section */}
      <section className="relative py-10 md:py-10 overflow-hidden bg-[#F1F1F1]">
        {/* Subtle grid pattern for premium visual styling */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Top section: Two-column grid, ordered to show the image first on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Titles & First 2 Paragraphs (order-2 on mobile, order-1 on desktop) */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-4xl md:text-5xl lg:text-[54px] font-bold text-black leading-[1.15] font-serif"
                >
                  Content Marketing Agency Sydney
                </h1>
              </div>

              <h2 
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold text-black font-serif"
              >
                Content Marketing Agency Stanhope Gardens, Blacktown
              </h2>

              <div className="space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans">
                <p>
                  Content Marketing Agency Stanhope Gardens, Blacktown, Great content is the
                  best way to attract your target audience. That’s how{" "}
                  <Link 
                    href="/australia/digital-consultancy" 
                    className="text-[#e25c5c] underline hover:text-[#c23c3c] font-semibold transition-colors duration-200"
                  >
                    digital marketing
                  </Link>{" "}
                  begins with it. If you want your website to rank well, then your content
                  must be crisp and readily understandable to its viewers. Including visuals
                  in your content can make it more attractive. Video content marketing could
                  cater to this.
                </p>
                <p>
                  A business can either in-house content marketing part or even outsource it
                  to the content writing companies. Any content which drives in more references,
                  coverage and recognition should be the correct one to publicize.
                </p>
              </div>
            </div>

            {/* Right Column: High-fidelity illustration (order-1 on mobile, order-2 on desktop) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[540px]">
                <Image
                  src="https://flymediatech.com/australia/wp-content/uploads/2024/04/BANE03.png"
                  alt="Content Marketing Agency Sydney & Best Content Writers Sydney"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>

          {/* Bottom Section: Full-width Paragraphs 3, 4 & 5 */}
          <div className="mt-12 lg:mt-16 space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans w-full max-w-full">
            <p>
              To create valuable content, the best of SEOs, designing and development skills
              are put in together and add up value to your business
            </p>
            <p>
              Content does not only mean huge pieces of content, but micro content can also
              work wonders if the content is crisp and accurate. A content needs to be
              persuasive and informative. Best Content writers Sydney can make words sell in
              a jiff.
            </p>
            <p>
              This is the only marketing strategy for every client. Businesses get paid for
              every click. Here comes the role of SEO content marketing , where the search
              engine optimizes its results with respect to certain keywords.
            </p>
          </div>

          {/* Cards Grid Section: Replicated Verbatim from User Screenshot */}
          <div className="mt-20 lg:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1: Industry News */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl lg:text-[26px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Industry News
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    Updating is very important that apply to your content as well. This keeps the
                    readers connected and they are keen to observe and stay on the page. Such kind of
                    content marketing services plays a primary role.
                  </p>
                </div>
              </div>

              {/* Card 2: Case Studies */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl lg:text-[26px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Case Studies
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    A content marketing plan is necessary to introduce. A summarized form of what your
                    business has been doing, how you are working and the outcomes you have
                    achieved till now, can channelize ways to indulge in your business
                  </p>
                </div>
              </div>

              {/* Card 3: Strategic Marketing Content Sydney */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl lg:text-[26px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Strategic Marketing Content Sydney
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    Strategic Marketing Content, adds up to the way of connecting with your audience.
                    A simple yet attractive content can draw the attention of the readers and publicize
                    your product. A content strategy agency can be of your help. This comes under
                    digital content strategy.
                  </p>
                </div>
              </div>

              {/* Card 4: Interviews Writing */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl lg:text-[26px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Interviews Writing
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    Expert knowledge by the dignitaries of your industry can establish a mark on the
                    credibility of your business.
                  </p>
                </div>
              </div>

              {/* Card 5: Press Releases */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl lg:text-[26px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Press Releases
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    Doing press releases and showcasing your work can brand your business.
                  </p>
                </div>
              </div>

              {/* Card 6: White Papers */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl lg:text-[26px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    White Papers
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    Getting organic subscribers is the need of the hour. Getting genuine customers who
                    like your information would be the greatest jump for your business.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
