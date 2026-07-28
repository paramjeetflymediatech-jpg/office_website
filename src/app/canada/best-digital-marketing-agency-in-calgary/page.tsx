"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import ContactFormSection from "@/components/ContactFormSection";
import { Search, Target, Share2, PenTool, Award, ShieldCheck, Zap, BarChart3, ChevronRight } from "lucide-react";

export default function BestDigitalMarketingCalgaryPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const servicesList = [
    {
      title: "Best SEO Agency in Calgary",
      desc: "SEO is the key to online visibility. The best SEO agency in Calgary helps to improve the ranking of websites on search engines to make it easier for customers to find your business. The services under SEO are technical SEO audits, on-page optimisation, content creation, performance monitoring and many additional services. Effective SEO increases your online authority and generates long-term traffic.",
      icon: <Search className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Best PPC Agency in Calgary",
      desc: "Another solution under digital marketing is pay-per-click (PPC) advertising, which delivers visibility on an immediate basis by placing the business in front of customers who are actively searching for your services and products. There are numerous benefits of PPC, including higher conversion rates, measurable results, flexible budgeting and instant website traffic. The best PPC agency in Calgary will offer strategic advertising campaigns that help to maximise the returns on investment while minimising the waste of ad spend.",
      icon: <Target className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Social Media Marketing Agency in Calgary",
      desc: "One of the most interesting solutions of digital marketing is called social media marketing. All the social media platforms provide a great opportunity to connect with customers and increase awareness about your brand. As a leading social media marketing agency in Calgary, we help to develop engaging campaigns across different platforms like Instagram, Facebook, LinkedIn, YouTube, and other social media platforms.",
      icon: <Share2 className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  const contentMarketingPoints = [
    {
      title: "Blog & Article Writing",
      desc: "Establish industry authority and drive organic traffic through informative, SEO-optimized blog posts written to answer your users' exact search queries."
    },
    {
      title: "Email Marketing",
      desc: "Connect directly with your customers, nurture potential leads, and increase your conversion and retention rates using personalized email campaigns."
    },
    {
      title: "Video & Media Marketing",
      desc: "Build strong engagement on social platforms and websites using creative video assets, graphics, and visual layouts designed to captivate your audience."
    }
  ];

  const chooseUsPoints = [
    {
      title: "Experienced Marketers",
      desc: "Our professionals stay updated with changing patterns of trends, algorithms, and industry best practices to manage your business internally.",
      icon: <Award className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Data-Driven Decisions",
      desc: "We leverage precise data and analytics to monitor performance continually and make informed marketing adjustments that avoid wasteful experiments.",
      icon: <BarChart3 className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Cost-Efficient Customized Solutions",
      desc: "We build strategies custom-tailored on the basis of your goals, budget considerations, industry requirements, and target audience behavior.",
      icon: <Zap className="w-10 h-10 text-[#ff9900]" />
    }
  ];

  const faqList = [
    {
      q: "What services are provided by your agency?",
      a: "Our agency provides services related to SEO, PPC, social media marketing and content marketing."
    },
    {
      q: "How is SEO beneficial for better results?",
      a: "SEO is beneficial for better results as it improves the ranking of websites and helps to increase your online authority."
    },
    {
      q: "How is social media marketing beneficial for the growth of the business?",
      a: "With social marketing, the awareness about the brand should be increased among the customers, and they get attracted towards your services and products."
    },
    {
      q: "Does digital marketing help all sizes of businesses or not?",
      a: "Yes, digital marketing helps businesses of all sizes, whether it's a startup or a small business."
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
              Grow Your Business With Our{" "}
              <span className="text-[#ff9900] relative inline-block">
                Expert Digital Marketing Strategies
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
                In today's competitive market, businesses need something new to succeed. They need targeted market campaigns with a strong digital presence and a strategy that generates sales and leads.
              </p>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Partnership with the <strong className="text-black font-semibold">best digital marketing agency in Calgary</strong> helps your business achieve specific goals. Whether you are running a startup or small business, our <strong className="text-[#ff9900] font-semibold">"FLYMEDIA TECHNOLOGY"</strong> provides customised solutions to increase the visibility of your brand and attract customers towards it.
              </p>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Consumers are dependent on online platforms to deliver their products and services. Digital marketing is very helpful for the business to reach the targeted audiences, generate qualified leads, improve engagement with customers and boost revenue and sales. Working with us ensures your business is up to date with the latest technology, market trends and proven strategies.
              </p>
            </div>

            {/* Right Column: Image Illustration */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[480px] transform hover:scale-[1.02] transition-transform duration-500 ease-out overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/uploads/2024/05/Use-The-Right-Strategies-To-Conquer-The-Digital-Market.jpg"
                  alt="Grow Your Calgary Business - Flymedia Technology"
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

      {/* 3. Services Section (H2 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Top-Rated Services Provided By FlyMedia Technology
            </h2>
            <p className="text-gray-600 text-[15px] sm:text-base">
              The professional agencies offer a huge range of services which are designed to help businesses achieve their goals and grow exceptionally well in the market.
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

      {/* 4. Content Marketing Section (H3 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[480px] transform hover:scale-[1.02] transition-transform duration-500 ease-out overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/uploads/2024/05/digitalmarketing850.jpg"
                  alt="Content Marketing Authority - Flymedia Technology"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Heading & Card List */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black leading-tight"
              >
                Content Marketing Helps To Build Authority
              </h3>

              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                The content of the best quality is important to retain and attract customers. Content marketing with professionals helps to build the trust and position of your brand as the leader of the industry.
              </p>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                The services that come under content marketing are blog writing, email marketing, content creation for the website, video marketing and many more. Not only does compelling content improve the performance of SEO, but you also have to encourage the visitors to take action.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {contentMarketingPoints.map((point, index) => (
                  <div key={index} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-black text-[15px] mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#ff9900] rounded-full shrink-0" />
                      {point.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section (H4 Heading) */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h4
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Choose Us To Achieve Long-Term Success
            </h4>
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
              We provide cost-efficient solutions so that businesses can avoid trial-and-error marketing efforts and go for the best digital marketing solutions to achieve better results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chooseUsPoints.map((point, index) => (
              <div
                key={index}
                className="bg-[#414141] rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-5"
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

          <div className="text-center pt-4">
            <Link
              href="/canada/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff9900] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 active:scale-95 shadow-lg"
            >
              Partner With Us Today <ChevronRight size={16} />
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
