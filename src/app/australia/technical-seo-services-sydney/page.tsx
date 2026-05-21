"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Shield, RefreshCw, Cpu, CheckCircle } from "lucide-react";
import ContactFormSection from "@/components/ContactFormSection";

export default function TechnicalSeoSydney() {
  const whySeoMatters = [
    {
      title: "Website Performance",
      desc: "A technically optimized website is faster and more user-friendly, which not only pleases visitors but also Google’s algorithms. Page speed, mobile responsiveness, and smooth navigation are all critical factors."
    },
    {
      title: "Indexation",
      desc: "If search engines can’t crawl and index your website correctly, your content would not appear in search results. Technical SEO ensures that every page you want to rank is accessible to search engines."
    },
    {
      title: "Structured Data",
      desc: "This helps search engines understand your content better and present it more effectively in search results. It can lead to rich snippets, knowledge graphs, and other eye-catching enhancements that drive traffic."
    },
    {
      title: "Security",
      desc: "Websites that prioritize security receive a boost in rankings. Technical SEO includes measures to protect your site from cyber threats, which is crucial for both SEO and user trust."
    },
    {
      title: "Mobile Optimization",
      desc: "With the majority of internet users on mobile devices, Google prioritizes mobile-first indexing. A technically sound site ensures seamless mobile experiences."
    }
  ];

  const whyWeStandOut = [
    {
      title: "Experience and Expertise",
      desc: "We bring a wealth of experience in optimizing websites across various industries. Our team consists of SEO experts who stay up-to-date with the ever-evolving search engine algorithms."
    },
    {
      title: "Keyword Research and Optimization",
      desc: "We perform extensive keyword research to identify the terms your target audience is searching for. Then, we optimize your content and site structure accordingly."
    },
    {
      title: "Content Optimization",
      desc: "Quality content is king. We help you create and optimize content that not only ranks well but also resonates with your audience."
    },
    {
      title: "Local SEO Expertise",
      desc: "If you are a local business, we excel at local SEO strategies, ensuring that you appear in local search results when potential customers are looking for businesses like you."
    }
  ];

  const benefits = [
    "Improved rankings",
    "Enhanced user experience",
    "Increased visibility",
    "Better ROI",
    "Everlasting success"
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans ">

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[5/3] max-w-[500px]">
                <Image
                  src="/uploads/2024/04/grow-1.png"
                  alt="Grow illustration"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black leading-tight font-serif"
              >
                Technical SEO Services Stanhope Gardens, Blacktown, Sydney
              </h1>

              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-lg md:text-xl font-bold text-[#EC7317] font-serif"
              >
                Elevate Your Online Presence With Technical SEO Services
              </h2>

              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                In today’s digital world, a robust online presence is non-negotiable for businesses looking to grow. However, it’s not just about having a website; it’s about ensuring that your website ranks well on search engines, attracting organic traffic and potential customers. This is where Technical SEO Services Stanhope Gardens, Blacktown comes into play, and in Sydney, Flymedia Technology is your go-to technical{" "}
                <Link
                  href="/australia/search-engine-optimization"
                  className="text-[#EC7317] underline hover:text-black font-semibold transition-colors"
                >
                  SEO agency
                </Link>.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. What Is Technical SEO */}
      <section className="py-12  border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black font-serif"
              >
                What Is Technical SEO And Why Does It Matter?
              </h2>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Technical SEO is the foundation of your website’s search engine optimization efforts. It focuses on the backend aspects of your site, optimizing elements that affect search engine visibility, crawling, and indexing. In simple terms, technical SEO ensures that search engines like Google can find, access, and understand your website, ultimately improving your rankings.
              </p>
            </div>

            {/* Right Column: WordPress Gear Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-square max-w-[340px]">
                <Image
                  src="/uploads/2024/03/wordpre01.png"
                  alt="WordPress logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Technical SEO Matters Card Container */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white  p-8 md:p-12 border border-gray-300 shadow-[0_15px_40px_rgba(0,0,0,0.015)] space-y-10">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl font-bold text-black font-serif  pb-6"
            >
              Why Technical SEO Matters:
            </h2>

            <div className="space-y-8">
              {whySeoMatters.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-base font-black text-black uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Flymedia Technology Stands Out */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl lg:text-[32px] font-bold text-black font-serif leading-tight"
            >
              Why Flymedia Technology Stands Out As a Technical SEO Agency
            </h2>
            <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed  mx-auto text-start">
              Flymedia Technology is a leading Technical SEO Agency Sydney, and when it comes to technical SEO services, here’s why we stand out;
            </p>
          </div>

          <div className="space-y-10 pt-4">
            {whyWeStandOut.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-lg md:text-xl font-bold text-black font-serif"
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed  mx-auto text-start">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Benefits of Technical SEO Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white  p-8 md:p-10 border border-gray-300 shadow-[0_15px_40px_rgba(0,0,0,0.015)] space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl font-bold text-black font-serif"
            >
              The Benefits of Technical SEO Services
            </h2>
            <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
              Investing in technical SEO services, especially with Flymedia Technology, offers numerous advantages for your business;
            </p>
            <ul className="space-y-2 pt-2">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 text-[14px] sm:text-[15px] font-medium">
                  <span className="w-2 h-2 rounded-full bg-black" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ContactFormSection />

    </main>
  );
}
