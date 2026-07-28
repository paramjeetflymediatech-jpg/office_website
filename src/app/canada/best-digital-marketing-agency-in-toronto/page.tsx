"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import ContactFormSection from "@/components/ContactFormSection";
import { Search, Target, Share2, PenTool, BarChart3, ShieldCheck, Zap } from "lucide-react";

export default function BestDigitalMarketingTorontoPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const marketingPillars = [
    {
      title: "Organic Content through SEO",
      desc: "Preferring the use of strategic keywords in your website content is our topmost priority for attracting the number of viewers. Through Search Engine Optimisation, your website content would appear at the top of the search results, allowing viewers to get engaged with your website. Other agencies just focus on adding the keywords; however, we prioritise focusing on the main purpose of the content to give a suitable answer to the viewer, thus making us the best SEO agency in Toronto.",
      icon: <Search className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Better Visibility through PPC",
      desc: "Pay-per-click advertising has been the hot topic in town. This includes the display of your brand’s ad with the purpose of creating brand awareness. One of the best things about such a digital marketing strategy is that there’s no need to pay overly for your specific ad, and it can be done within your manageable budget. Managing your brand’s ads in an affordable budget is the major green flag, making us the best PPC agency in Toronto.",
      icon: <Target className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Drive Sales through Social Media Marketing",
      desc: "One of the best steps through which you can rapidly grow your business is social media marketing. Wondering how? Let us handle your social media accounts of specific brands with the purpose of creating engaging posts and finding the target audience for better engagement. Through data analytics, we find out which is the most used social media platform in order to target the audience strategically for creating a buzz around them regarding your brand’s services. Being consistent in daily posting and understanding the behaviour of viewers makes us the leading social media marketing agency in Toronto.",
      icon: <Share2 className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Long-term Loyalty through Content Marketing",
      desc: "Our digital experts are well-trained in catering to interactive content through blogs, videos and podcasts for increasing the engagement rate with customers. We make sure to add useful information in the blogs so that your customers will feel connected and build their trust in your brand’s services.",
      icon: <PenTool className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  const strategyBoxes = [
    {
      title: "We prefer a \"problem-solving\" approach",
      desc: "For us, every click matters; therefore, we prioritise providing an accurate solution to your customers through content marketing strategies. Through interactive blogs and videos, we address the customer’s pain point in a strategic manner and provide them with an effective solution regarding how your brand's services can be the best voice for them.",
      icon: <ShieldCheck className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "We depend on real-time analytics",
      desc: "After implementing specific digital marketing strategies, we make sure to prioritise using the specific tools to analyse the specific results. Through such a comprehensive approach, we can get a precise idea of the working of your strategies and alter them if necessary.",
      icon: <BarChart3 className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "We are adaptive to market trends",
      desc: "Our digital experts are intellectual enough to stay connected with the latest market trends. This can significantly result in deriving positive results in terms of rapid business growth. By being flexible to the latest market trends, your brand can become recognisable with an increasing customer engagement.",
      icon: <Zap className="w-10 h-10 text-[#ff9900]" />
    }
  ];

  const faqList = [



    
    {
      q: "Can I manage implementing digital marketing strategies on my own?",
      a: "This totally depends on your expertise and skill. If you are proficient in understanding and implementing different digital marketing strategies, then growing your business on your own can be the best choice. However, a lack of digital marketing strategies often indicates the need to engage with professionals."
    },
    {
      q: "Does a web developer take more than one month to finish a website?",
      a: "Yes, a web developer takes more than one month to finish one website, including all the layouts and content that is required by your business."
    },
    {
      q: "Can I choose a digital marketing agency for SEO only?",
      a: "Yes, if you are interested in improving the SEO of your website, then digital experts can help you with that."
    },
    {
      q: "Do professionals post daily to maintain SMM results?",
      a: "No, the professionals make sure to be consistent rather than posting on a daily basis. Posting two to three times a week is a positive consistency which is necessary for improving your SMM results."
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
                Toronto
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#ff9900]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Core Content Section (Make Your Business Stand Out With Our Digital Experts) */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Make Your Business Stand Out With Our Digital Experts
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Are you struggling with lower business growth? Probably, it would be lacking some effective digital marketing strategies prevalent in today’s world for rapid business growth. If you are unfamiliar with new digital marketing strategies, then the professionals of FlyMedia Technology, the best digital marketing agency in Toronto, can help you.
                </p>
                <p>
                  Establishing and launching your business are not the only factors for gaining popularity; in fact, attracting viewers and addressing the pain point hold utmost importance. This is what the experts of FlyMedia Technology truly understand while crafting different digital marketing strategies for your specific business. From handling social media accounts to strategising the content for your website, we become your best and most reliable supporter in each crucial step.
                </p>
              </div>
            </div>

            {/* Right Column: Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-2">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/uploads/2024/05/digitalmarketing850.jpg"
                  alt="Best digital marketing services by FlyMedia Technology in Toronto"
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

      {/* 3. Services List Section (Still Chasing Leads? Let Your Customers Find You) */}
      <section className="py-16 md:py-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Still Chasing Leads? Let Your Customers Find You
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              Are you still stuck in following old marketing strategies for growing your business? If yes, then you might be lowering your business growth instead. Modern digital marketing strategies allow you to attract viewers and make them realise that your specific brand’s services are the only solutions they have been searching for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#ff9900]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-2xl w-fit">
                    {pillar.icon}
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-bold text-black font-serif"
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategies Section (Data-Driven Marketing Strategies With Our Experts) */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Data-Driven Marketing Strategies With Our Experts
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              Our digital marketing experts make sure to thoroughly understand your different business goals and target audience in order to manage your business growth. With the professionals of FlyMedia Technology, you can get appropriate guidance regarding managing the leads and attracting the customers, thus increasing the visibility and sales for your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategyBoxes.map((box, index) => (
              <div
                key={index}
                className="bg-[#414141] rounded-2xl p-8 border border-gray-100/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-5"
              >
                <div className="p-4 bg-white/10 rounded-2xl">
                  {box.icon}
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-bold text-white font-serif"
                >
                  {box.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dynamic Portfolio Section */}
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
              Take a look at the success stories we have designed and built across Canada. We deliver digital success with every campaign.
            </p>
          </div>
          <LocationPortfolio location="canada" />
        </div>
      </section>

      {/* 6. Frequently Asked Questions (FAQ) Accordion */}
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
