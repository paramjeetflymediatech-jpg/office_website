"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import ContactFormSection from "@/components/ContactFormSection";
import { Search, Target, Share2, PenTool, BarChart3, ShieldCheck, Zap } from "lucide-react";

export default function BestDigitalMarketingMontrealPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const servicesList = [
    {
      title: "Best SEO Agency in Montreal",
      desc: "Visibility is a clear indicator of success as it guides the foundation for it. As the best SEO agency in Montreal, we move beyond simple keyword stuffing. We focus on technical SEO, high-quality content creation and local search authority to ensure that your business appears when customers are ready to buy. We are experts at local SEO to dominate Google Maps, on-page and off-page optimisation to enhance website structure, and content strategy for high conversions.",
      icon: <Search className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Best PPC Agency in Montreal",
      desc: "Need fast results? Our expert PPC management team creates high-conversion campaigns. As the best PPC agency in Montreal, we specialise in managing ad spend across Google Ads and social media to maximise your return on investment. Our services cover planning display and social ads strategy, in-depth keyword research for high-intent search terms, and landing page optimisation to capture leads.",
      icon: <Target className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Comprehensive Digital Strategy",
      desc: "Beyond SEO and PPC, we offer a full suite of digital marketing solutions to elevate your brand. This includes social media management to build community and brand loyalty, fast, responsive web design and development, and reputation management to boost trust in your Google business profile.",
      icon: <Share2 className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  const chooseUsPoints = [
    {
      title: "Quebec Bilingual Expertise",
      desc: "Our team understands the unique bilingual market of Quebec, offering a blend of creativity and data-driven insights tailored to speak perfectly to both English and French-speaking audiences.",
      icon: <ShieldCheck className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "ROI-Driven Campaigns",
      desc: "We focus on result-oriented campaigns that drive measurable growth. From local heating companies in Montreal to national brands, we target campaigns that directly improve your bottom line.",
      icon: <BarChart3 className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Transparency & Reporting",
      desc: "We prioritize complete transparency. We provide detailed reporting and real-time insights so you can see exactly how your investment is growing your business.",
      icon: <Zap className="w-10 h-10 text-[#ff9900]" />
    }
  ];

  const faqList = [
    {
      q: "How long does it take to see results from SEO?",
      a: "SEO is a long-term strategy and requires patience to see the visible growth. The basic improvements become visible within three months, but the significant organic growth usually happens within six to twelve months."
    },
    {
      q: "Can you help local businesses get more leads?",
      a: "Yes, we specialise in local marketing as we will dominate the Google Maps and local search results for the company."
    },
    {
      q: "Do you provide services in both French and English?",
      a: "Absolutely. We understand that effective communication in Montreal requires a strong control of both languages, and we ensure that your marketing campaigns speak perfectly to both audiences."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans text-black">
      {/* 1. Hero Title Banner */}
      <section className="relative w-full h-[220px] sm:h-[280px] bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/fgodsfgjsdo.webp')`
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 px-8 py-5 rounded-xl shadow-2xl inline-block">
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-serif"
            >
              Best Digital Marketing Agency in{" "}
              <span className="text-[#ff9900] relative inline-block">
                Montreal
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#ff9900]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Core Content Section (Flymedia technology: Top digital marketing agency in Montreal) */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Flymedia technology: Top digital marketing agency in Montreal
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Welcome to our Montreal-based digital marketing hub, Flymedia Technology, the best digital marketing agency in Montreal. We specialise in accelerating local business growth through tailored SEO, PPC and content strategies. Whether you are a local heating company in Montreal looking to dominate local search or growing a brand aiming for national visibility, our expert team drives measurable ROI.
                </p>
                <p>
                  As the best SEO agency in Montreal, our aim is that your business ranks higher and converts better. We provide our customers with the perfect partnership that will lead to leveraging cutting-edge technology and local market expertise to outperform your competition.
                </p>
              </div>
            </div>

            {/* Right Column: Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-2">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/uploads/2024/05/Use-The-Right-Strategies-To-Conquer-The-Digital-Market.jpg"
                  alt="Top Digital Marketing Agency in Montreal - Flymedia Technology"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Why choose us? Montreal trusted digital experts
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              In the continuous hustle and bustle of the market, standing out requires more than just a website; it requires a strategic partner. We are recognised as the best digital marketing agency in Montreal because we focus on ROI driven campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chooseUsPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-5"
              >
                <div className="p-4 bg-gray-50 rounded-2xl">
                  {point.icon}
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-bold text-black font-serif"
                >
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Services Section */}
      <section className="py-16 md:py-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Our Core Services
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              We focus on technical optimization, targeted pay-per-click strategies, and custom digital campaigns to deliver impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#ff9900]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-2xl w-fit">
                    {service.icon}
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-bold text-black font-serif"
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Unlock growth Section (Unlock unprecedented Growth: Partner with Flymedia Technology) */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#414141] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden rounded-2xl shadow-lg border border-white/10">
                <Image
                  src="/uploads/2024/05/digitalmarketing850.jpg"
                  alt="Dominate Montreal market with Flymedia Technology"
                  fill
                  className="object-cover brightness-90"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[40px] font-serif font-bold text-white leading-tight"
              >
                Unlock unprecedented Growth: Partner with Flymedia Technology
              </h2>

              <div className="space-y-4 text-gray-300 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Don't let your competition take your market share. In the bustling, bilingual business landscape of Montreal, relying on outdated marketing techniques is a formula for stagnation. Our agency combines local expertise with global marketing standards to grow your business forward.
                </p>
                <p>
                  As the premier choice, we offer a unique blend of creativity and analytical precision, ensuring every dollar you invest delivers maximum returns. Our proven previous records show that we don't just increase clicks, we increase revenue. By hiring the best digital marketing agency in Montreal, you are choosing to work with experts dedicated to your long-term success. Ready to dominate your industry? Contact us today for a free audit.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Dynamic Portfolio Section */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Our Dynamic Canada Portfolio
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              Explore our successful projects built across major Canadian cities, driving visibility and growth.
            </p>
          </div>
          <LocationPortfolio location="canada" />
        </div>
      </section>

      {/* 7. Frequently Asked Questions (FAQ) Accordion */}
      <section className="py-16 md:py-20 bg-[#F1F1F1] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl font-serif font-bold text-black tracking-wide"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="border-t border-[#ff9900]">
            {faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-[#ff9900] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 text-left flex items-center justify-between gap-4 font-bold text-black hover:text-[#ff9900] transition-colors"
                  >
                    <span className="text-base sm:text-[17px] font-bold text-black">{faq.q}</span>
                    <span className="text-[#ff9900] ml-4 flex-shrink-0">
                      {isOpen ? (
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path>
                        </svg>
                      ) : (
                        <svg className="w-2.5 h-3.5 fill-current" viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                        </svg>
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-5 pr-8 text-gray-700 text-sm sm:text-[15px] leading-relaxed">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactFormSection />

      {/* Dynamic FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqList.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }, null, 2),
        }}
      />
    </main>
  );
}
