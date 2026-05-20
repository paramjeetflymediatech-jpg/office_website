"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import { Smartphone, Code2, Palette, Cpu, Compass, PenTool, CheckCircle2, Rocket, Phone } from "lucide-react";

export default function MobileAppVancouverPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const appServices = [
    {
      number: "1",
      title: "Mobile app development",
      desc: "We build native iOS and Android applications and cross-platform applications. Our apps are designed to be fast, secure and user-centric to enhance retention.",
      subpoints: [
        { title: "iOS app development", text: "We provide engaging interfaces which are especially designed for Apple devices as a growing agency of Iphone app development in Vancouver." },
        { title: "Android app development", text: "For the Android app development in Vancouver, feature-rich apps which are most compatible with the OS version are designed." },
        { title: "Cross-platform app", text: "These are highly performant at lower costs as they reach all the users simultaneously." }
      ]
    },
    {
      number: "2",
      title: "Custom Web app development",
      desc: "Our web developers create robust web applications designed to simplify complex workflows, including SaaS products and enterprise systems. The technologies we use for this include Node.js, React, Angular and Python."
    },
    {
      number: "3",
      title: "UI/UX design and prototyping",
      desc: "Our user-centric design approach ensures that your app is intuitive and engaging. We bring your vision to life through wireframes and interactive prototypes, focusing on increasing user retention."
    },
    {
      number: "4",
      title: "AI and AI-powered development",
      desc: "As a part of the evolving Vancouver tech scene, we specialise in AI and machine learning integration. We help businesses automate processes and personalise experiences with NLPs, chatbots and advanced data analytics."
    }
  ];

  const processSteps = [
    {
      title: "Discovery and strategy",
      desc: "We start by understanding your goals, user journey and market trends to build a strategic roadmap. This strategy is most helpful in building the foundation of a trending business.",
      icon: <Compass className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Design and prototyping",
      desc: "We create beautiful, user-friendly interfaces that properly align with your website to give it a perfect visual appeal that suits the website. It enhances the user experience with your website.",
      icon: <PenTool className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Agile development",
      desc: "We code and test in sprints, ensuring the smooth functionality of the website at each and every step.",
      icon: <CheckCircle2 className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Launch and maintenance",
      desc: "After the development of the mobile app, we deploy the application to the Play Store and App Store and provide ongoing app maintenance.",
      icon: <Rocket className="w-10 h-10 text-[#ff9900]" />
    }
  ];

  const faqs = [
    {
      question: "Do you build apps for both iOS and Android?",
      answer: "Yes, we build robust applications for both iOS and Android devices. We specialise in cross-platform development to build high-performance apps for both iOS and Android simultaneously, which is more cost-effective and efficient."
    },
    {
      question: "How long does the app development process take?",
      answer: "Usually, the average duration for app development ranges from three to six months from ideation to launch. A minimum viable product can be delivered faster, within four to eight weeks, to help you test the market."
    },
    {
      question: "Will I own the source code of the app?",
      answer: "Yes, absolutely. Once the project is completed and final payments are made, we transfer full intellectual property rights and source code ownership to you."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16 text-black">

      {/* 2. Core Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column (Desktop) / Second (Mobile): Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Flymedia Technology - Vancouver App development company, Custom mobiles and Web solutions
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Welcome to Flymedia Technology, a leading agency of <strong className="text-black font-semibold">mobile app development in Vancouver</strong>. We turn complex business ideas into high-performance digital products. We turn complex business ideas into intuitive, high-performance digital products. It is situated in one of Canada’s most vibrant tech hubs. We are specialised in transforming your vision into a digital reality for all the small startups to large-scale industries.
                </p>
                <p>
                  Is your business ready for the next level? In a fast-paced market, a robust app has become a necessity for any business. We create bespoke Android, iOS and cross-platform applications designed for exceptional user experience and maximum functionality. Our Vancouver-based team ensures that your digital presence is secure and successful from initial strategy to post-launch support.
                </p>
              </div>
            </div>

            {/* Right Column (Desktop) / First (Mobile): Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2026/05/webs-dei-8.png"
                  alt="Mobile app development process with coding and design tools in Vancouver."
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

      {/* 3. Our Services */}
      <section className="py-16 md:py-20 ">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Our Services
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              We deliver state-of-the-art mobile and web engineering solutions designed to scale your enterprise operations and wow your target audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appServices.map((item, index) => (
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

                  {item.subpoints && (
                    <div className="space-y-3 pt-2 border-t border-white/10">
                      {item.subpoints.map((sub, sIdx) => (
                        <div key={sIdx} className="text-white text-xs sm:text-sm space-y-1">
                          <strong className="text-[#ff9900] font-semibold block">{sub.title}:</strong>
                          <p className="text-gray-300 leading-normal">{sub.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our process: Simple and Seamless */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Our Process: Simple and Seamless
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              We adhere to an agile, transparent development lifecycle ensuring your digital product is delivered on time, within budget, and built to flawless quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((box, index) => (
              <div
                key={index}
                className=" rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-5"
              >
                <div className="p-4 bg-gray-50 rounded-2xl">
                  {box.icon}
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-bold text-black font-serif"
                >
                  {box.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Why behind choosing Flymedia Technology for Mobile App Development */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column (Desktop) / First (Mobile): Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2026/05/webs-dei-9.png"
                  alt="Team developing mobile app on large smartphone with app icons, in Vancouver."
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
                The Why behind choosing Flymedia Technology for Mobile App Development
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  In the fast-paced digital technology, your application is one of the strongest assets for your business, rather than just a piece of code. You bring the idea to us, and we transform that into a craft to build the future of your business. At Flymedia Technology, we not only build the apps, but we also provide them the capability to scale according to the business needs, providing an intuitive and secure digital experience that turns users into loyal customers.
                </p>
                <p>
                  Whether you are a promising Vancouver startup or an established enterprise looking to innovate, our team is ready to turn your vision into a local success story. By connecting with us, you can start building your project today for a better future.
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
