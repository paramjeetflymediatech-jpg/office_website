"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GoogleShoppingAdsAgency() {
  const expertises = [
    {
      title: "The power of specialization",
      desc: "is continually following the newest developments in digital ads. They are quick to change their strategy according to the changing online environment. This agency acts as a helpful partner that helps companies maximize the potential of display ads and accomplish their marketing objectives.",
      icon: (
        <svg className="w-8 h-8 text-[#EC7317]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      )
    },
    {
      title: "Customized strategies",
      desc: "Flymedia Technology understands one size does not fit all in digital marketing. When you engage with them, you can be sure that your e-commerce business will get a tailored approach. They begin with a thorough analysis of your product's target audience to attract your ads. It supports your business in market competition. This data-driven approach helps them craft a strategy that is unique to your business.",
      icon: (
        <svg className="w-8 h-8 text-[#EC7317]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Keyword research and optimization",
      desc: "Effective Google shopping ads campaigns must include thorough keyword research. Flymedia Technology uses its expertise to determine the most relevant and profitable keywords for your product's titles, descriptions and other crucial elements. They ensure that your advertising ranks higher and attracts the right audience",
      icon: (
        <svg className="w-8 h-8 text-[#EC7317]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Data-driven decision making",
      desc: "Flymedia Technology uses modern analytics tools to monitor the performance of Google shopping ads. Because data is king in digital marketing, this agency constantly gathers information on key metrics like click rates, conversion rates and return on ad spend.",
      icon: (
        <svg className="w-8 h-8 text-[#EC7317]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Continuous optimization",
      desc: "Flymedia Technology is skilled in keeping up with the dynamic world of Google shopping ads. They regularly make adjustments to your campaigns to achieve their best performance. It is used to increase click and conversation rates. This continuous optimization process also involves changing bidding tactics, perfecting ad creatives and doing a/b tests.",
      icon: (
        <svg className="w-8 h-8 text-[#EC7317]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Transparent reporting",
      desc: "Flymedia Technology provides their clients with regular basis information about Google shopping ads. These reports can help to where you need to improve to attract more visitors to buy your product. It .",
      icon: (
        <svg className="w-8 h-8 text-[#EC7317]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Unparalleled customer support",
      desc: "Flymedia Technology has an active team that is always ready and available to answer and guide you through the complexities of ads.",
      icon: (
        <svg className="w-8 h-8 text-[#EC7317]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  const whyChooses = [
    {
      title: "Cost effective",
      desc: "We work with you to maximize your spending power. To get the most of google shopping Ads, sydney based e-commerce business can get in touch with Flymedia Technology. They can help to achieve amazing success in the e-commerce sector because of their intensive specialization and data driven strategies. do not pass up the opportunity to work with Google Shopping Ads Experts Sydney. You can team up with Flymedia Technology and expand the reach of your online business."
    },
    {
      title: "Data-driven decision making",
      desc: "Flymedia Technology uses modern analytics tools to monitor the performance of Google shopping ads. Because data is king in digital marketing, this agency constantly gathers information on key metrics like click rates, conversion rates and return on ad spend."
    },
    {
      title: "Outstanding advertisement design",
      desc: "We make sure your ads look looks good to attract, so more people click on them"
    },
    {
      title: "Continuous monitoring",
      desc: "We constantly monitor your campaigns to ensure that they are succeeding"
    },
    {
      title: "Data driven approaches",
      desc: "We use data to optimize the performance of your campaigns"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F4] font-sans pb-24 text-[#333333]">
      
      {/* 1. Hero Section (Left-aligned Image on Desktop, First on Mobile) */}
      <section className="relative py-12 md:py-10 overflow-hidden bg-[#F4F4F4]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column (Left on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-square max-w-[480px]">
                <Image
                  src="https://flymediatech.com/australia/wp-content/uploads/2024/03/imgmenu025.png"
                  alt="Google Shopping Ads Agency Sydney"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Text Column (Right on Desktop, Second on Mobile) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-2">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight font-serif"
              >
                Google Shopping Ads Agency Sydney
              </h1>
              
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl md:text-2xl font-bold font-serif text-black"
              >
                Display Advertising Success Secrets: Flymedia Technology
              </h2>

              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Businesses are continuously looking for new ways to stand out and grab the attention of their target audience in today’s crowded digital world. Google’s shopping platform has become a powerful tool for e-commerce companies trying to expand their online presence and increase sales. A Google Shopping Ads Agency <strong>Stanhope Gardens, Blacktown</strong>, like Flymedia Technology, is essential in this aspect.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Commerce Game Changer Section (Alternating White Background) */}
      <section className=" py-16 border-t border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black font-serif leading-tight"
          >
            Google Shopping ads: a game changer for commerce
          </h2>

          <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
            <p>
              Google shopping ads are often referred to as Product Listing Ads. It is a visual advertisement that shows a product directly with the Google search result. These ads are made uniquely. So that more customers attract this product and they buy it. These ads offer information that includes product, quality, prices, description about the product and information so that customers easily understand about the product.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Expertise Grid Section (Alternating Light Off-White Background) */}
      <section className="bg-[#F4F4F4] py-16 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-black font-serif"
            >
              Our expertise in Google Shopping Ads
            </h2>
+          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertises.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left space-y-5 group"
              >
                {/* Icon Wrapper with Custom Glow */}
                <div className="p-3.5 bg-orange-50 rounded-xl group-hover:bg-[#EC7317]/10 transition-colors duration-300">
                  {item.icon}
                </div>

                <div className="space-y-3 flex-grow">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-bold text-black font-serif group-hover:text-[#EC7317] transition-colors duration-300"
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Section (Alternating White Background with Premium Top-Accent Cards) */}
      <section className=" py-16 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-black font-serif"
            >
              Why choose Flymedia Technology
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooses.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#F8F9FA] rounded-2xl p-8  shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left space-y-4"
              >
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-lg md:text-xl font-bold text-black font-serif leading-snug"
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
