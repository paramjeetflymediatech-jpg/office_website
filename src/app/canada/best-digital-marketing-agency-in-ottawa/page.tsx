"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import ContactFormSection from "@/components/ContactFormSection";
import { Search, Target, Award, Users, ShieldCheck, Zap, BarChart3, ChevronRight } from "lucide-react";

export default function BestDigitalMarketingOttawaPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyChooseUsPoints = [
    {
      title: "Prompt services",
      desc: "When clients call, FlyMedia Technology is on the move to ensure that each client receives their services promptly. Our teams ensure to start working on task projects for clients as soon as they receive them and work within the timeline because every client is of great priority.",
      icon: <Zap className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "An array of services",
      desc: "FlyMedia Technology sets up structures that meet the needs of businesses to thrive in the digital space. Clients can easily have access to various services such as website designing, SEO optimization, marketing strategies, content marketing, Google AdWords, and so much more. These strategies are there to help your business thrive and stand out in the business space.",
      icon: <Award className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Access to experts",
      desc: "We have a pool of experts who are skilled and experienced in digital marketing. For the services you require, FlyMedia Technology has the expert for it. They deal with various intricacies of digital marketing and are able to help a range of companies in different industries, which makes us a reliable agency to help your business thrive in the digital space.",
      icon: <Users className="w-10 h-10 text-[#ff9900]" />
    }
  ];

  const faqList = [
    {
      q: "What does content marketing involve?",
      a: "This strategy requires creating content such as blogs, videos and infographics with the aim of reaching out to targeted audiences, creating engagement and driving customers."
    },
    {
      q: "What are the best digital marketing channels to invest in?",
      a: "Your business can gain visibility on different platforms such as social media platforms, search platforms, email marketing and affiliate marketing as well."
    },
    {
      q: "How do I know that the strategies are providing results?",
      a: "You can acknowledge that the strategies are producing results by evaluating the site visitation, increased ROI, increased engagement, increased lead generation and increased lead conversion."
    },
    {
      q: "Which platforms are effective for PPC?",
      a: "It can be used on various platforms such as Google Ads, Facebook, Instagram, or Microsoft Ads."
    },
    {
      q: "How do you determine that the ad appears on the platform?",
      a: "We are able to determine if we have a high rank, which is achieved by having the best bidding and the highest quality score."
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
              FlyMedia Technology - Offering You{" "}
              <span className="text-[#ff9900] relative inline-block">
                Result Based Digital Marketing Services
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
                Your business vision is our priority at FlyMedia Technology as the <strong className="text-black font-semibold">best digital marketing agency in Ottawa</strong>. We established this company with the aim of providing unmatched services to businesses that have a vision of growth in the digital space. With the best team in place, a comprehensive set of services and the skills, we endeavor to place your business at the top in the digital world.
              </p>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Growing a business requires a strategic and skillful approach to ensure that your business stands out among the competition and is relatable to the targeted customers. We are there to make that happen for your business. For many years, we have been providing digital marketing solutions to various clients and have propelled their businesses to their targeted expectations.
              </p>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Are you looking for SEO services, social media growth, marketing strategies, Logos and brand designs, content marketing and meta ads? FlyMedia Technology provides all these services and so much more. Our satisfaction is in witnessing our clients' businesses excel in the digital space, increasing their profits and customers.
              </p>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Our services are all provided in a customized structure, our teams ensure to understand our clients' vision and their requirements so that we create strategies that work specifically for the clients in their industry, in the medical, car rentals, technology, steel, heating and many other industries.
              </p>
            </div>

            {/* Right Column: Image Illustration */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[480px] transform hover:scale-[1.02] transition-transform duration-500 ease-out overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/uploads/2024/05/Use-The-Right-Strategies-To-Conquer-The-Digital-Market.jpg"
                  alt="Best Digital Marketing Agency in Ottawa - Flymedia Technology"
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

      {/* 3. PPC Section (H2 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[480px] transform hover:scale-[1.02] transition-transform duration-500 ease-out overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/uploads/2024/05/digitalmarketing850.jpg"
                  alt="Effective PPC Agents - Flymedia Technology"
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
                Have Access To Effective PPC Agents At FlyMedia Technology
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  One of the effective ways of gaining brand visibility is investing in PPC, which is Pay-Per-Click. This strategy is where business owners pay for a spot for their ad that has an automated play on different digital platforms. Users are able to know about the company that is providing the services that they need, which makes it easy to get in touch with the business, as they can simply click on the ad, which leads them to the website.
                </p>
                <p>
                  The strategy is fast and effective, allowing the targeted audience to get to know the brand's services in a short space of time. Fly Media Technology is the <strong className="text-black font-semibold">best PPC agency in Ottawa</strong>, providing you with effective results from the strategy. We ensure that your brand's visibility increases. We ensure that your brand is acknowledged on different platforms and the targeted audience has easy access to your website.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SEO Section (H3 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black leading-tight"
              >
                FlyMedia Technology Offering Clients Result-Based SEO Strategies
              </h3>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  FlyMedia Technology teams are experts at Search Engine Optimization strategies, making us the <strong className="text-black font-semibold">best SEO agency in Ottawa</strong>. Our experts cracked the complexities of utilizing SEO to improve brand and site visibility.
                </p>
                <p>
                  We are able to achieve this by guiding clients in creating content that is relevant to the users, ensuring that the content is consistently up to date and easily utilized with the algorithm on different platforms. Utilizing SEO for your business is an effective way of ensuring that your business stays relevant in a competitive zone, increases in visibility and gains prominence. Our teams are skilled to ensure that the service functions in favour of your business to excel in the digital space.
                </p>
              </div>
            </div>

            {/* Right Column: Visual Callout Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#414141] text-white rounded-3xl p-8 border border-white/10 shadow-xl space-y-6 max-w-[400px]">
                <div className="p-3 bg-orange-50/10 rounded-xl w-fit text-[#ff9900]">
                  <Search className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl leading-tight">Dominate Search Rankings</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tailored SEO implementation focusing on high-intent terms such as "Heating Company In Ottawa" to drive targeted organic visibility.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Here Is Why You Can Work With Us
            </h2>
            <p className="text-gray-600 text-[15px] sm:text-base">
              Establish a direct partnership with skilled professionals dedicated to driving digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-5"
              >
                <div className="p-4 bg-orange-50 rounded-2xl">
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

          <div className="text-center pt-4">
            <Link
              href="/canada/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff9900] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 active:scale-95 shadow-lg"
            >
              Get Started with Experts <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Dynamic Portfolio Section */}
      <section className="py-16 md:py-20 border-b border-gray-100">
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

      {/* 7. Frequently Asked Questions (FAQ) Accordion */}
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
