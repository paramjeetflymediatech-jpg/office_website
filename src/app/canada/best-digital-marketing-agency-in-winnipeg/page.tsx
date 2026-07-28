"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import ContactFormSection from "@/components/ContactFormSection";
import { Search, Target, Share2, Award, Users, ChevronRight } from "lucide-react";

export default function BestDigitalMarketingWinnipegPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqList = [
    {
      q: "Which services are provided by your agency?",
      a: "Our agency provides you with the PPC, SEO and content creation services."
    },
    {
      q: "How much time does SEO take for the results?",
      a: "SEO may take several months to deliver results, depending on the condition of the website and the competition."
    },
    {
      q: "How can social media marketing increase sales?",
      a: "Effective advertising campaigns through social media marketing can increase awareness about brands, which contributes to an increase in sales."
    },
    {
      q: "How could small businesses benefit from digital marketing?",
      a: "Small businesses could benefit from digital marketing as it provides effective opportunities to attract customers and grow their brand."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans text-black">
      {/* 1. Hero Title Banner (H1 Heading) */}
      <section 
        className="relative w-full h-[260px] sm:h-[340px] bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/fgodsfgjsdo.webp')`
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 px-8 py-6 rounded-xl shadow-2xl inline-block max-w-4xl">
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight font-serif leading-tight"
            >
              Lead Your Business Towards Success With{" "}
              <span className="text-[#ff9900] relative inline-block">
                Digital Marketing Strategies
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#ff9900]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Intro Section (H1 Content) */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Today, the online presence of your business is mandatory. Whether you are running a local business or a company, digital marketing plays an ideal role in attracting customers and increasing revenue and awareness about your brand.
              </p>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Partnership with the <strong className="text-black font-semibold">best digital marketing agency in Winnipeg</strong> helps your business to compete in the market and achieve its goals. <strong className="text-[#ff9900] font-semibold">FLYMEDIA TECHNOLOGY</strong>, as a professional agency, combines data-driven insights and innovative strategies and gives creative solutions to connect the business with the targeted audience. The services of digital marketing and content marketing, to SEO and PPC advertising, help to generate the maximum return on investment and growth of your business.
              </p>
            </div>

            {/* Right Column: Image Illustration */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[480px] transform hover:scale-[1.02] transition-transform duration-500 ease-out overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/uploads/2024/05/Use-The-Right-Strategies-To-Conquer-The-Digital-Market.jpg"
                  alt="Lead Your Business Towards Success - Flymedia Technology"
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

      {/* 3. Importance Section (H2 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[480px] transform hover:scale-[1.02] transition-transform duration-500 ease-out overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/uploads/2024/05/digitalmarketing850.jpg"
                  alt="Importance Of Digital Marketing For Your Business - Flymedia Technology"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Heading & Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black leading-tight"
              >
                Importance Of Digital Marketing For Your Business
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Today's generation is dependent on the internet when searching for valuable products and services. If your business is not visible on any of the online platforms, then you are missing the opportunity to reach customers with their potential needs.
                </p>
                <p>
                  With digital marketing, you can increase the online visibility, improve engagement with the customers, build the credibility of the brand and boost conversions and sales of your business. Working with us ensures that all your marketing efforts are targeted, strategic and result-oriented.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Services Section (H3 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Some Additional Digital Marketing Services
            </h3>
            <p className="text-gray-600 text-[15px] sm:text-base">
              As a leading digital marketing and social marketing agency in Winnipeg, we offer a range of services so that your business can meet the unique needs of customers across the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* SEO Service */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-orange-50 rounded-xl w-fit">
                  <Search className="w-8 h-8 text-[#ff9900]" />
                </div>
                <h4
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl sm:text-2xl font-serif font-bold text-black"
                >
                  Best SEO Agency in Winnipeg
                </h4>
                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                  SEO is one of the effective solutions to improve search engine rankings. Our team develops customized strategies related to SEO that help your website appear when customers search for your services and products. The SEO services provided by us are on-page optimization, keyword research and analysis, content optimization, technical SEO improvements and many more services.
                </p>
                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                  The <strong className="text-black font-semibold">best SEO agency in Winnipeg</strong>, with experienced marketers, is focusing on growth for the long term by helping businesses achieve higher visibility on various search engines like GOOGLE.
                </p>
              </div>
            </div>

            {/* PPC Service */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-3 bg-orange-50 rounded-xl w-fit">
                  <Target className="w-8 h-8 text-[#ff9900]" />
                </div>
                <h4
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl sm:text-2xl font-serif font-bold text-black"
                >
                  Best PPC Agency in Winnipeg
                </h4>
                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                  We also provide Pay Per Click (PPC) services, which provide visibility on an immediate basis and allow businesses to target those customers who are searching for the services of your business. The benefits of PPC are highly targeted audience reach, increased lead generation and flexible budgeting options.
                </p>
                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                  The <strong className="text-black font-semibold">best PPC agency in Winnipeg</strong> creates optimized campaigns for advertising that help to maximize the clicks and returns while minimizing unnecessary investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section (H4 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h4
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black leading-tight"
              >
                Why Choose FLYMEDIA TECHNOLOGY For Your Business Growth?
              </h4>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Every business requires strategic planning and expertise for optimization. The skilled team of our company manages every aspect to ensure maximum performance. The advantages of management from professionals are keyword optimization, AD copy creation, budget management and continuous performance monitoring of your business.
                </p>
                <p>
                  Our agency ensures that your advertising budget delivers the best results with sustainable growth. Every business is unique, with its own unique goals and challenges. We develop customized marketing strategies on the basis of the industry, competition, target audience and objectives for growth. We are here to give you a proper roadmap if you are searching to increase search rankings and social media engagement for the success of your business.
                </p>
              </div>
            </div>

            {/* Right Column: Visual highlights (modern grids) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-orange-50 rounded-lg text-[#ff9900] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-black text-lg mb-1">Expert Professionals</h5>
                  <p className="text-gray-600 text-sm">Experienced specialists handling keyword search, analytics, and strategy mapping.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-orange-50 rounded-lg text-[#ff9900] shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-black text-lg mb-1">Tailored Solutions</h5>
                  <p className="text-gray-600 text-sm">We build direct campaigns that align with your industry domain and distinct target market.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Guidance Section (H5 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#414141] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h5
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-tight"
          >
            Guidance From Our Experts To Grow Your Business
          </h5>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-300 text-[15px] sm:text-base leading-relaxed">
            <p>
              Expert guidance on digital and social media marketing for your business will be valuable for you. Trust in us and choose us so that businesses can gain success with advanced marketing strategies and innovative technologies for better results.
            </p>
            <p>
              With us, your business can achieve success in the long term with our SEO, PPC and other digital marketing services. Investment in digital marketing is one of the important investments, along with other investments, for the great success of your business.
            </p>
          </div>
          <div className="pt-4">
            <Link
              href="/canada/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff9900] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-600 active:scale-95 shadow-lg"
            >
              Get Free Expert Consultation <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Dynamic Portfolio Section */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black"
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

      {/* 8. Frequently Asked Questions (FAQ) Accordion */}
      <section className="py-16 md:py-20 bg-[#F1F1F1] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-4xl font-serif font-bold text-black tracking-wide"
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
                    className="w-full py-4 text-left flex items-center justify-between gap-4 font-bold text-black hover:text-[#ff9900] transition-colors focus:outline-none"
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
