"use client";

import React from "react";
import Image from "next/image";

const searchHacks = [
  {
    title: "High Visibility",
    desc: "These ads prominently appear on the top of your search pages when you click keywords on your search engines. This placement ensures proper and much needed visibility of your website in front of the audience searching for the services you offer.",
    icon: (
      <div className="text-5xl font-extrabold text-[#EC7317] font-sans">#</div>
    )
  },
  {
    title: "Accurate Reach",
    desc: "You can get your targeted audience precisely who are looking for your services and products. This increases the chances of conversion of your target audience.",
    icon: (
      <svg className="w-12 h-12 text-[#EC7317]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Faster Results",
    desc: "Search ads can help you achieve faster results as compared to other digital platforms that need more time for results. You will get your organic traffic and potential customers once your campaign is set up.",
    icon: (
      <svg className="w-12 h-12 text-[#EC7317]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Cost Effective",
    desc: "You can control your cost with this method. When someone clicks on your ad, then only you need to pay. You can set a target for the same, which will help you control your budget in a better way. Search advertisements are useful for online businesses in the ways mentioned below.",
    icon: (
      <div className="text-5xl font-extrabold text-[#EC7317] font-sans">#</div>
    )
  },
  {
    title: "Keyword Targets",
    desc: "Advertisers choose particular keywords relevant to their products and services. The ads are triggered and displayed on your screen when you search those specific keywords.",
    icon: (
      <svg className="w-12 h-12 text-[#EC7317]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Ad placements",
    desc: "These ads are placed tactically on these search engine result pages, which ensure high visibility to the users who are exploring the internet for the products and services related to the keywords.",
    icon: (
      <svg className="w-12 h-12 text-[#EC7317]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Customization of Ads",
    desc: "You can make your ads more appealing and informative by customising your ad copy, headlines or extensions. This will help you showcase your unique selling point(USP) and promote your product effectively.",
    icon: (
      <svg className="w-12 h-12 text-[#EC7317]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Proper Analytics",
    desc: "You get to measure your results through proper data analysis, which will also help you take more data based decisions to further improve your products and services.",
    icon: (
      <svg className="w-12 h-12 text-[#EC7317]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    title: "You Can Scale Your Ads Accordingly",
    desc: "You can decide the amount of advertising your products according to your budgets and objectives.",
    icon: (
      <div className="text-5xl font-extrabold text-[#EC7317] font-sans">G</div>
    )
  },
  {
    title: "Edge in Competition",
    desc: "With relevant keywords and optimised ad campaigns, you can outdo your competitors in the segment and search engine and have an edge in competition.",
    icon: (
      <svg className="w-12 h-12 text-[#EC7317]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Brand Exposure",
    desc: "You can still increase your brands credibility even if your audience doesn’t click into your website. They can see your business which is more relevant to the services they want.",
    icon: (
      <svg className="w-12 h-12 text-[#EC7317]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a3 3 0 100-6 3 3 0 000 6zm5 6v-1a3 3 0 00-3-3h-4a3 3 0 00-3 3v1" />
      </svg>
    )
  }
];

export default function PaidSearchAgency() {
  return (
    <main className="min-h-screen bg-[#F4F4F4] font-sans pb-24 text-[#333333]">

      {/* 1. Hero Section (Left-aligned Image on Desktop, First on Mobile) */}
      <section className="relative py-12 md:py-10 overflow-hidden bg-[#F4F4F4]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Image Column */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-square max-w-[480px]">
                <Image
                  src="/images/mobi.png"
                  alt="Paid Search Agency Stanhope Gardens, Blacktown, Sydney"
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
                Paid Search Agency Stanhope Gardens, Blacktown, Sydney
              </h1>

              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl md:text-2xl font-bold font-serif text-black"
              >
                The Best Search Advertisement Hacks To Stay On Top Of Search Results
              </h2>

              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Search advertising is an effective form of advertising appearing on the search engine results after a user clicks certain keywords on the search engines like google and yahoo. These advertisements are found with labels such as “sponsored” or “ads” Search ads are important for many online businesses in the following ways: .
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Hacks Flat Grid Section (Pure White Background) */}
      <section className="bg-white py-16 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          {/* Header block */}
          <div className="max-w-3xl space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-black font-serif"
            >
              The Best Search Advertisement Hacks To Stay On Top Of Search Results
            </h2>
          </div>

          {/* Cards Grid with Premium Hover States */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {searchHacks.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-orange-200/50 transition-all duration-300 flex flex-col justify-between space-y-4 text-left"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 flex items-center justify-start text-[#EC7317]">
                    {item.icon}
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl md:text-2xl font-bold text-[#EC7317] font-serif"
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Summary Section (Continuous White Background) */}
      <section className=" border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Text Column (Left on Desktop, Second on Mobile) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-left">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black font-serif"
              >
                Summary
              </h2>

              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  search advertisements are a powerful tool for online businesses to connect with their audience. This helps them achieve targeted audience conversion precisely with instant results. Search engines are also a very affordable way to enhance your business presence online with a target audience. It enhances their chances to become loyal customers if your strategy is powerful enough. This strategy only drives a relevant audience towards you, which is beneficial for your conversion rates for a more successful and trustworthy business. You can help your business thrive with effective ad campaigns and be the best in your competition with this strategy.
                </p>
              </div>
            </div>

            {/* Image Column (Right on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-[480px]">
                <Image
                  src="/uploads/2024/03/insta02.png"
                  alt="Search Advertising Summary"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
