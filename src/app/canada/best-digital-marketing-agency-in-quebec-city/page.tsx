"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import ContactFormSection from "@/components/ContactFormSection";
import { Search, Target, Share2, Award, ShieldCheck, Zap, BarChart3, ChevronRight } from "lucide-react";

export default function BestDigitalMarketingQuebecCityPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const servicesList = [
    {
      title: "Pay-per-click excellence",
      desc: "Need immediate traction? Our paid advertising experts craft hyper-targeted campaigns that capture high-intent leads. Recognised as the best PPC agency in Quebec City, we manage your advertising budget efficiently to deliver a superior return on investment. We build, monitor and optimise your paid campaigns to drive immediate, measurable traffic and convert clicks into paying customers.",
      icon: <Target className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Organic search supremacy",
      desc: "Organic visibility is the underlying foundation of sustainable growth. As the best SEO agency in Quebec City, we employ advanced on-page SEO optimisation, authoritative link building, and targeted content development to secure top rankings on major search engines like Google.",
      icon: <Search className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Best digital marketing agency in Quebec City",
      desc: "Experience a holistic approach to your brand’s growth. As the best digital marketing agency in Quebec City, we integrate comprehensive marketing research, social media management, and cutting-edge digital solutions to keep you ahead of the competition.",
      icon: <Share2 className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  const commitmentPoints = [
    {
      title: "Data-driven analytics",
      desc: "Every move we make is tracked. We provide comprehensive, transparent reporting so you always know exactly what is moving the needle for your revenue.",
      icon: <BarChart3 className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Custom strategies",
      desc: "We don't use any generic templates. We conduct in-depth research into your business to align our solutions with how your customers make purchasing decisions.",
      icon: <ShieldCheck className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Full funnel Management",
      desc: "From the moment a user finds your brand to the final conversion, we manage the entire digital journey to guarantee the best possible ROI.",
      icon: <Zap className="w-10 h-10 text-[#ff9900]" />
    }
  ];

  const faqList = [
    {
      q: "What makes your agency the best digital marketing agency in Quebec City?",
      a: "We combine industry-leading expertise, data-driven analytics and deep knowledge of user behavior to deliver cost-effective, scalable marketing solutions tailored to your business needs."
    },
    {
      q: "Why should I hire you as the best PPC agency in Quebec City?",
      a: "Paid advertising requires constant monitoring. Our team optimises your budding strategies and targeting metrics to ensure you only pay for high-intent clicks, ultimately maximising your return on ad spend."
    },
    {
      q: "How do we get started with your solutions?",
      a: "You can book a technical consultation with our team by visiting the contact us page. We will review your infrastructure and recommend the best services for your business."
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
              Dominate your industry with FlyMedia Technology,{" "}
              <span className="text-[#ff9900] relative inline-block">
                Quebec City’s Top marketing expert.
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#ff9900]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed font-medium">
                Are you ready to skyrocket your online presence and attract high-quality local leads?
              </p>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                As the <strong className="text-black font-semibold">best digital marketing agency in Quebec City</strong>, we craft data-driven strategies tailored to your unique business goals. Whether you need to dominate local search rankings, execute high-converting ad campaigns or completely transform your digital footprint, our dedicated team of professionals ensures your brand stays ahead of the competition.
              </p>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                The most essential part for growth is partnering with the right local expert, as we guarantee tailored, data-driven solutions for your unique industry needs.
              </p>
            </div>

            {/* Right Column: Image Illustration */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[480px] transform hover:scale-[1.02] transition-transform duration-500 ease-out overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/uploads/2024/05/Use-The-Right-Strategies-To-Conquer-The-Digital-Market.jpg"
                  alt="Quebec City's Top Marketing Expert - Flymedia Technology"
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

      {/* 3. Niche Solutions Section (H2 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Tailored solutions for every niche
            </h2>
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
              Our technical expertise and cutting-edge technologies deliver tangible growth across multiple highly specialised sectors. We don't just use one-size-fits-all tactics because we know that every business has different needs, which is why we build a custom-tailored marketing ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:border-[#ff9900]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-orange-50 rounded-2xl w-fit">
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

      {/* 4. Commitment Section (H2 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Our commitment to your growth
            </h2>
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
              We understand the unique cultural nuances and bilingual requirements of the Quebec market. By blending user-focused design with targeted marketing channels, we bring your business closer to its exact target market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitmentPoints.map((point, index) => (
              <div
                key={index}
                className="bg-[#414141] rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-5 text-white"
              >
                <div className="p-4 bg-gray-700/50 rounded-2xl">
                  {point.icon}
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-lg sm:text-xl font-bold text-white font-serif"
                >
                  {point.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Success Section (H2 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[480px] transform hover:scale-[1.02] transition-transform duration-500 ease-out overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/uploads/2024/05/digitalmarketing850.jpg"
                  alt="Quebec Digital Success Future - Flymedia Technology"
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
                FlyMedia Technology: Charting the future of your digital success
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Navigating the ever-evolving digital landscape requires more than just basic marketing tactics; it requires a comprehensive, future-proof strategy. At our core, we believe that true digital innovation goes beyond temporary traffic spikes. By aligning cutting-edge technology with the battle-tested digital strategies, we empower businesses to future-proof their operations and sustain long-term revenue growth.
                </p>
                <p>
                  Our data-driven approach means every decision is backed by solid analytics and marketing intelligence, allowing us to pivot and adapt to market shifts in real time. Partnering with industry experts transforms your online challenges into unparalleled opportunities. We are fully committed to building on past successes and innovating as the tech environment evolves.
                </p>
                <p>
                  Together, we can build a robust digital ecosystem that not only digitally reaches but also engages your targeted audience, which encourages lasting customer loyalty and transforms your digital presence into your most valuable asset. Contact us today to begin your journey toward market leadership.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/canada/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff9900] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 active:scale-95 shadow-lg"
                >
                  Contact Us Today <ChevronRight size={16} />
                </Link>
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
