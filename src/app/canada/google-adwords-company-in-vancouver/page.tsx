"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import { Search, BarChart3, Phone, MousePointerClick, RefreshCw, Target } from "lucide-react";

export default function GoogleAdwordsVancouverPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const ppcPillars = [
    {
      title: "Search & Display Campaigns",
      desc: "Manage high-intent Google Search ads and visually engaging Display ads across premium networks to capture your exact target audience.",
      icon: <Target className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Bid & Keyword Management",
      desc: "Perform continuous monitoring, rigorous keyword refinement, and real-time bid adjustments to drastically lower your cost-per-click.",
      icon: <Search className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Landing Page Optimization",
      desc: "Design and rigorously test tailored, high-converting landing pages engineered to turn Vancouver ad clicks into loyal paying customers.",
      icon: <MousePointerClick className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Strategic Remarketing",
      desc: "Deploy highly targeted remarketing campaigns across YouTube and display networks to re-engage previous site visitors and reduce customer acquisition costs.",
      icon: <RefreshCw className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  const specialistReasons = [
    {
      number: "1",
      title: "Google Ads certified specialist",
      desc: "Our team has great knowledge about handling Google Ads, Microsoft Advertising, and social media ad platforms."
    },
    {
      number: "2",
      title: "Cost-efficient operations",
      desc: "By utilising our specialised PPC services from India, Vancouver businesses can enjoy professional, 24/7 managed campaigns at a fraction of local Vancouver agency costs."
    },
    {
      number: "3",
      title: "Proven results",
      desc: "We have successfully helped a great number of businesses to decrease their cost per lead while increasing the conversion rates."
    }
  ];

  const faqs = [
    {
      question: "How much does PPC management in Vancouver cost?",
      answer: "We offer transparent pricing models tailored to your budget. Our services include monthly management fees based on ad spend, ensuring you know exactly where your investment goes."
    },
    {
      question: "When can I expect to see results from Google Ads?",
      answer: "PPC campaigns can start generating traffic immediately after going live. However, it usually takes two to four weeks to gather enough data for optimisations, along with consistent improvements for sixty to ninety days."
    },
    {
      question: "Do you manage campaigns on platforms other than Google?",
      answer: "Yes. As a comprehensive digital marketing agency, we handle Microsoft advertising, Meta ads and LinkedIn ads to ensure maximum reach."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16 text-black">

      {/* 2. Core Content Section (Vancouver Tech and Digital Agency) */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column (Desktop) / Second (Mobile): Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Vancouver Tech and Digital Agency
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Looking for top-tier <strong className="text-black font-semibold">PPC management in Vancouver</strong>? Our Vancouver-based tech team provides expert Google Adwords management, high-converting PPC campaigns and ROI driven marketing to help Vancouver businesses scale fast. We are a premier <strong className="text-black font-semibold">Google AdWords company in Vancouver</strong>. We allow your business to get immediate leads, lower your cost-per-click and maximise ROI with expert PPC management in Vancouver.
                </p>

                <h3 className="text-xl font-bold text-black pt-2 font-serif">
                  Services overview
                </h3>
                <p>
                  We elevate your Vancouver business with strategic PPC. As a trusted digital partner, we offer tailored search engine marketing services that put your business at the top of Google.
                </p>

                <ul className="space-y-2.5 pt-2 text-gray-700 list-disc pl-5">
                  <li>
                    We are a certified Google AdWords company in Vancouver, managing search, display and YouTube ads.
                  </li>
                  <li>
                    We perform continuous monitoring, keyword refinement and bid adjustments.
                  </li>
                  <li>
                    We do proper landing page optimisation, which is designed to turn Vancouver clicks into loyal customers.
                  </li>
                  <li>
                    We offer remarketing campaigns to re-engage visitors and reduce purchasing costs.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column (Desktop) / First (Mobile): Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="/uploads/2026/05/webs-dei-10.png"
                  alt="Team of digital marketers working together on SEO and PPC campaigns in a modern office setting."
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

      {/* 3. Why partner with our Vancouver-based PPC specialist? */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Why partner with our Vancouver-based PPC specialist?
            </h2>
            <div className="space-y-3 text-gray-700 text-[15px] sm:text-base leading-relaxed">
              <p>
                Vancouver is a competitive market where a generic approach to paid advertising leads to wasted ad spend. Flymedia technology brings professional PPC management in Vancouver that moves beyond vanity standards. We focus strictly on conversion-driven marketing, connecting you with ready-to-buy customers at the precise moment they are searching for your services.
              </p>
              <p className="font-medium text-black">
                Our core strengths include:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialistReasons.map((item, index) => (
              <div
                key={index}
                className="bg-[#414141] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#ff9900]/40 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="text-4xl font-black text-[#ff9900]">
                    {item.number}
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl text-white font-bold font-serif"
                  >
                    {item.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Connect with Flymedia technology, know the difference. */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column (Desktop) / First (Mobile): Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden ">
                <Image
                  src="/uploads/2024/04/grow.png"
                  alt="Best Website Design & Development Company in Jalandhar"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column (Desktop) / Second (Mobile): Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Connect with Flymedia technology, know the difference.
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Flymedia Technology is not just a tech company; it is your growing solution. In an era where digital presence dictates market success, partnering with a forward-thinking IT business is paramount. By choosing us, you are not only getting the service providers, but you are also choosing a dedicated team in Vancouver that is committed to expanding your area even in the competitive international market. Our expertise as a Google Adwords company in Vancouver means we bring high-level data-driven strategies to your doorstep.
                </p>
                <p>
                  Our tailored PPC management in Vancouver ensures that your ad spend is optimised for maximum conversion, not just clicks. Whether you need an engaging website, robust software development or a search engine marketing campaign that dominates the first page of Google. We understand that Vancouver’s business environment is highly competitive, and to stand out in this, it requires a perfect blend of creativity and technical analytical skills.
                </p>
                <p>
                  Flymedia technology delivers measurable results to you, 24/7 support and transparent reporting. Let us turn your digital ambition into profitable realities. By this, you can elevate your business, maximise your ROI and stay ahead of the competition. Contact Flymedia technology today, and let’s craft a success story together.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQs Accordion */}
      <section className="py-16 md:py-10 ">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              FAQs
            </h2>
          </div>

          <div className="border-t border-[#ff9900]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-[#ff9900]">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-base sm:text-lg text-black leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-[#ff9900] shrink-0">
                      {isOpen ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                          <path d="M8 20l8-8 8 8z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                          <path d="M12 8l8 8-8 8z" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-8 text-gray-700 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }, null, 2),
        }}
      />
    </main>
  );
}
