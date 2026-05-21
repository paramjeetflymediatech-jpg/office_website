"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LocalSeoSydney() {
  const benefitCards = [
    {
      title: "Increase online Visibility",
      desc: "Our Experts have the ability to increase your online visibility so that more individuals can visit your website. This means you will be able to grab attention or more potential clients. Well, this can be done by using Google or other social media platforms.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Excellent Customer Support",
      desc: "Customer support is our main priority, because of which our managers are always available to serve you well. They are also available to communicate with you during your working hours so that they can give you the best solution as per your requirements.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Your business on Google Map",
      desc: "Everyone wants to see or list their business on Google map. We are here to do this for you so that you can connect your business with the correct NAP. This is the most important way to grow your business and make it visible to others.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Performance tracking",
      desc: "We also offer you the service to track the performance of SEO. Our experts have specialization to make weekly as well as monthly reports for you so that you can track the performance of your website. We also provide you information on what is coming.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Local Lead Generation",
      desc: "There are a plethora of ways, which help you to generate certain leads for your company as well as a website with the help of various advertisements include scrolling, click, timed, and so on. If you want to get more leads, then you can seek help from our professionals.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F4] font-sans pb-24 text-[#333333]">

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-[#F4F4F4]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Image Column (Left on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-[4/3] max-w-[480px]">
                <Image
                  src="/uploads/2024/04/seo.png"
                  alt="Local SEO Services Sydney"
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
                Local SEO Services Sydney | Flymedia Technology
              </h1>

              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl md:text-2xl font-bold text-[#EC7317] font-serif"
              >
                Local SEO Agency Sydney
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Local SEO Company <strong>Stanhope Gardens, Blacktown</strong>, We as a local SEO company represent your business on the web, better than you expect.
                </p>
                <p>
                  Local search engine optimization service is one of the most trusted and result-oriented strategies to promote your business in your local area. According to the studies, people usually search for nearby services so that they can visit the store within a few hours. This type of local search engine optimization is additionally known as <strong>Local Business SEO</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Detailed Experience & Service Offerings (Alternating White Background, 2-Column Desktop Grid) */}
      <section className=" py-16 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">

            {/* Left Column */}
            <div className="space-y-6 text-gray-700 text-[15px] sm:text-base leading-relaxed">
              <p>
                Local{" "}
                <Link
                  href="/australia/search-engine-optimization"
                  className="text-[#EC7317] underline hover:text-black font-semibold transition-colors"
                >
                  search engine optimization
                </Link>{" "}
                service is one of the most trusted and result-oriented strategies to promote your business in your local area. According to the studies, people usually search for nearby services so that they can visit the store within a few hours. This type of local search engine optimization is additionally known as <strong>Local Business SEO</strong>.
              </p>
              <p>
                Our <strong>Local SEO Experts Sydney</strong> has over <strong>12+ years of experience</strong> in promoting and optimizing websites using the right local techniques. We as local SEO agency optimize as well as submit the website with the help of local listing websites include Local Classified, Yellow Pages, Google Local Listing, Justdial, Yelp, and Bing Local Submission.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6 text-gray-700 text-[15px] sm:text-base leading-relaxed">
              <p>
                Local SEO marketing is one of the most effective ways to promote your business. To promote or optimize your website for local search, you need to seek help from a local SEO company. Our main target is to introduce various small businesses to the big market of locally searched products as well as marketing opportunities that are provided by the search engines. We aim to keep you always up to date.
              </p>
              <p>
                As an SEO local, we offer several services include Google Map Listing, Bing Map Listing, Business Listing, Local Classified, Location Content, and Local Directories. So, if you are struggling to choose the best SEO company, then just visit us once.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Benefits of Choosing Our Local SEO Services (Alternating Gray Background, 3-Column Card Grid Layout) */}
      <section className="py-16 border-t border-gray-200/50 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          <div className="text-center">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black font-serif"
            >
              Benefits of choosing our local SEO services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {benefitCards.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-5 items-start text-start"
              >
                {/* Custom Orange Icon */}
                <div className="text-[#EC7317] flex justify-start items-center">
                  {item.icon}
                </div>

                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl md:text-2xl font-bold text-black font-serif"
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
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
