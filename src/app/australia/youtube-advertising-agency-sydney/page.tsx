"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function YoutubeAdvertisingAgency() {
  const expertCards = [
    {
      title: "in-Depth Knowledge",
      desc: "With years of experience in YouTube advertising, Flymedia Technology’s experts understand the platform inside out. They know what works and what doesn’t."
    },
    {
      title: "Tailored Strategies",
      desc: "Flymedia Technology created customized YouTube advertising strategies for each client. They understand that a one-size-fits-all approach doesn’t work in digital marketing."
    },
    {
      title: "High-Quality Content",
      desc: "In the world of YouTube, content is king. Flymedia Technology ensures that your ads are not just seen but leave a lasting impression."
    },
    {
      title: "Advanced Analytics",
      desc: "They provide detailed insights and analytics to track the performance of your YouTube advertising campaigns, allowing for continuous improvement."
    }
  ];

  const superchargeCards = [
    {
      title: "Comprehensive Strategy",
      desc: "Flymedia Technology begins by understanding your business and goals. They then craft a YouTube advertising strategy that aligns with your objectives, whether it’s brand awareness, lead generation, or sales."
    },
    {
      title: "Creative Excellence",
      desc: "Creating captivating video content is at the heart of YouTube advertising. Flymedia Technology’s team of experts knows how to create videos that resonate with your target audience, increasing engagement and conversion rates."
    },
    {
      title: "Precise Targeting",
      desc: "They harness the power of YouTube’s targeting options to ensure your ads reach the right audience, at the right time, and on the right devices."
    },
    {
      title: "Budget Optimizations",
      desc: "With their cost-effective approach, Flymedia Technology maximizes the value of your advertising budget, ensuring you get the best results for your investment."
    },
    {
      title: "Performance Tracking",
      desc: "Continuous monitoring and analysis of your ad campaigns allow for real-time adjustments, maximizing your ROI."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F4] font-sans pb-24 text-[#333333]">
      
      {/* 1. Hero Section */}
      <section className="relative py-12 md:py-10 overflow-hidden bg-[#F4F4F4]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-square max-w-[480px]">
                <Image
                  src="https://flymediatech.com/australia/wp-content/uploads/2024/04/yuoutube.png"
                  alt="Youtube Advertising Agency Sydney"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-2">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight font-serif"
              >
                Youtube Advertising Agency Sydney
              </h1>
              
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl md:text-2xl font-bold font-serif text-black"
              >
                Unleashing the Power of YouTube Advertising With Flymedia Technology
              </h2>

              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  In today’s digital age, where video content reigns supreme, YouTube has emerged as a powerhouse platform for advertisers. If you are in Sydney and looking to tap into the potential of Youtube advertising, you have come to the right place. Flymedia Technology, a leading <strong>Youtube Advertising Agency Sydney</strong>, is here to be your guiding light.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Why YouTube Advertising Matters Section (Alternating White Background) */}
      <section className=" py-16 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          {/* Header block */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-black font-serif"
            >
              Why YouTube Advertising Matters
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              In today’s digital age, billions of users spend hours on YouTube every day. This makes it a goldmine for businesses looking to promote their products or services. YouTube advertising offers several key advantages.
            </p>
          </div>

          {/* Alternating Subsections */}
          <div className="space-y-16">
            
            {/* Grid 1: Vast Reach & Engagement + Likes Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                
                <div className="space-y-3">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl md:text-2xl font-bold text-black font-serif"
                  >
                    Vast Reach
                  </h3>
                  <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
                    YouTube has a massive and diverse audience.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl md:text-2xl font-bold text-black font-serif"
                  >
                    Engagement
                  </h3>
                  <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
                    Video content is engaging, and YouTube allows for various ad formats, including skippable ads, non-skippable ads, and more, giving advertisers the flexibility to create compelling content.
                  </p>
                </div>

              </div>
              
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full aspect-square max-w-[400px]">
                  <Image
                    src="https://flymediatech.com/australia/wp-content/uploads/2024/04/likes.png"
                    alt="Why YouTube Advertising Matters - Reach & Engagement"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Grid 2: nnew013 Image + Targeting & Cost-Effective */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="relative w-full aspect-square max-w-[400px]">
                  <Image
                    src="https://flymediatech.com/australia/wp-content/uploads/2024/04/nnew013.png"
                    alt="Why YouTube Advertising Matters - Targeting & Cost-Effective"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
                
                <div className="space-y-3">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl md:text-2xl font-bold text-black font-serif"
                  >
                    Targeting
                  </h3>
                  <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
                    YouTube’s targeting options are incredibly precise, allowing you to reach your ideal audience based on demographics, interests, and even specific video placements.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl md:text-2xl font-bold text-black font-serif"
                  >
                    Cost-Effective
                  </h3>
                  <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
                    You have control over your budget, and you only pay when someone interacts with your ad, such as by clicking or watching 30 seconds or more.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Meet the Experts Section (Alternating Light Off-White Background) */}
      <section className="bg-[#F4F4F4] py-16 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          {/* Header block */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-black font-serif"
            >
              Meet Flymedia Technology: Your YouTube Marketing Experts
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              Flymedia Technology is not your typical digital marketing agency. They specialize in YouTube advertising, making them one of the most sought-after <strong>YouTube Marketing experts in Stanhope Gardens, Blacktown</strong>. What sets them apart?
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertCards.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-lg md:text-xl font-bold text-black font-serif"
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Supercharge & Final Thoughts Section (Continuous Off-white Background) */}
      <section className="bg-[#F4F4F4] py-16 border-t border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 space-y-8 text-left">
          
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-[32px] font-bold text-black font-serif leading-tight"
          >
            How Flymedia Technology Can Supercharge Your YouTube Advertising
          </h2>
          
          <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
            Are you wondering how exactly Flymedia Technology can make a difference in your YouTube advertising journey? Let’s explore their services and the benefits they bring to the table;
          </p>

          {/* List items without any cards or borders */}
          <div className="space-y-8 pt-4">
            {superchargeCards.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl md:text-2xl font-bold text-black font-serif"
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Final Thoughts Block */}
          <div className="space-y-4 pt-8">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black font-serif leading-tight"
            >
              Final Thoughts
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              n the competitive landscape of Youtube advertising, having a partner like Flymedia Technology can be the game-changer your business needs. With their expertise, personalized strategies, and a track record of successful campaigns, you are in good hands. If you are looking to unlock the full potential of YouTube advertising for your business, reach out to Flymedia Technology today. Don’t miss out on the YouTube advertising revolution. Get started with Flymedia Technology, your YouTube Marketing experts.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
