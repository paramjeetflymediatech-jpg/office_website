"use client";

import React from "react";
import Image from "next/image";
import SEOMonitor from "@/components/SEOMonitor";
import AustraliaPortfolio from "@/components/AustraliaPortfolio";
import ContactFormSection from "@/components/ContactFormSection";

export default function DigitalMarketingMelbourne() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans ">
      
      {/* 1. Hero Section (Image Left, Content Right) */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: mobi illustration (renders first on mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/web-designing/mobi.png"
                  alt="Best Digital Marketing Agency in Melbourne Hero"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 order-2">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black leading-tight font-serif"
              >
                Digitise Your Market with the Best Digital Marketing Agency in Melbourne
              </h1>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                The digital market is ruling the world due to the abundant opportunities it provides businesses to incorporate the essential elements of inevitable growth and development, fostering great heights of success. However, to step up the ladder of success, one requires well-crafted strategies and planning to represent the business as transparently as possible and convey its true mission to the people.
              </p>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                Flymedia Technology is one of the leading providers of digital marketing services, our aim is to create a seamless pathway for businesses to reach target audiences, establish a solid connection and achieve remarkable results. With our expertise in the field of digital marketing we find perfect solutions to the issues hindering your business to perform its best and attract new leads.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. What is Digital Marketing Section (Content Left, SEOMonitor Right) */}
      <section className="py-12 md:py-16 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold text-black font-serif"
              >
                What is Digital Marketing?
              </h2>
              <div className="space-y-4 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  Digital marketing typically refers to marketing your business in the digital market or the online platforms to efficiently reach your target audience all around the world. Digital marketing allows the business to expand their market on various online platforms with various tools and techniques to present your brand along with endless opportunities.
                </p>
                <p>
                  Digital marketing is the online campaigns appearing on a computer, phone, tablet, laptop or other device, to promote the products and services of a business and create brand image among the audience. Digital marketing can take place in various forms, such as videos, display ads, search engine marketing, paid social ads and social media posts.
                </p>
                <p>
                  The best <span className="font-bold">digital marketing agency in Melbourne</span> comprehends distinctive needs and requirements of every business depending upon its nature and operation, creating an efficient strategy that fosters long-term benefits.
                </p>
              </div>
            </div>

            {/* Right Column: SEOMonitor Display */}
            <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[460px]">
                <SEOMonitor />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why is Digital Marketing Important Section */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 space-y-6 text-left">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl font-bold text-black font-serif"
          >
            Why is Digital Marketing Important?
          </h2>
          <div className="space-y-4 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
            <p>
              One of the primary reasons the business industry is transitioning to the digital platform is its ability to reach a large audience across the globe in the shortest time span. With more than half of the world active on various online platforms every day, businesses have the opportunity to form connections with their target audience, increase website traffic and drive growth and development.
            </p>
            <p>
              The accessibility power of digital marketing allows businesses to reach their target audience through several forms of communication such as texts, visuals, audios, graphics.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Digital Marketing Services (3-Card Grid) */}
      <section className="py-12 md:py-16 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
          
          <div className="text-left max-w-5xl space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-black font-serif"
            >
              Flymedia Technology: Our Digital Marketing Services
            </h2>
            <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
              Digital marketing is a phenomenon that incorporates the operation of various methods and techniques to enhance the visibility of your business and raise awareness about your products and services, forming a resilient brand image. The best <span className="font-bold">digital marketing agency in Melbourne</span> provides a number of services in the field of digital marketing, such as:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: SEO */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between">
              <h3 className="font-bold text-[#EC7317] text-xl mb-4">SEO</h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                Search engine optimization, also popularly known as SEO, is one of the primary elements of digital marketing. It contributes to the enhancement of the business's visibility by identifying the issues that are hindering its way. The best SEO agency Melbourne, digs deep into the issues using various advanced SEO tools, offering outstanding services and remarkable results. The experts at Flymedia Technology ensure that you have a well-designed strategy to increase the visibility of your business, helping it reach the top ranking on search engine results.
              </p>
            </div>

            {/* Card 2: SMO */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between">
              <h3 className="font-bold text-[#EC7317] text-xl mb-4">SMO</h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                SMO refers to social media optimization, which involves the use of various social media platforms to enhance the visibility of your business and raise awareness about your product and services. Social media optimization provides various tools specifically for businesses to help them reach their specific audience. With different forms of interaction such as text, display, audio, videos, and graphics, the business can remain relevant and direct for the customers to capture their interest. Social media optimization allows businesses to reach the customers on a more personal level. This is where the best SMO agency Melbourne steps into to ensure high engagement values and form a strong personal brand.
              </p>
            </div>

            {/* Card 3: Google Adwords */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between">
              <h3 className="font-bold text-[#EC7317] text-xl mb-4">Google Adwords</h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                Flymedia Technology prides itself on being a premier partner of Google Adwords. In the last 13 years, the best Google Adwords agency Melbourne, has ensured 100+ Google Adwords across search engines. Google Adwords is one of the most popular platforms for promoting your business across various search engines. Search engines are the prime medium for users to access any information, product or service which makes it a great platform for business to build brand awareness.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Benefits of Digital Marketing Section (Unified Card Container) */}
      <section className=" bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#FFFFFF] rounded-2xl p-8 md:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 space-y-6">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl font-bold text-[#EC7317] font-serif"
            >
              Benefits of Digital Marketing
            </h2>
            <p className="text-gray-700 text-[15px] md:text-base leading-relaxed font-sans font-medium">
              Flymedia Technology is one of the leading providers of trustworthy and reliable services of digital marketing. We help your business expand its horizon and reach the target audience with streamlined but effective measures. With the best <span className="font-bold">digital marketing agency in Melbourne</span>, you get to experience a number of benefits, such as:
            </p>
            
            <ul className="text-gray-700 text-[14px] md:text-[15px] font-sans font-medium list-disc pl-5 leading-relaxed space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <li>Global reach</li>
              <li>Cost-efficiency</li>
              <li>Measurable results</li>
              <li>Effective targeting</li>
              <li>Increased engagement</li>
              <li>Flexibility</li>
              <li>Improved conversion rate</li>
              <li>Social currency</li>
              <li>Greater ROI</li>
            </ul>

            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-sans font-medium pt-4 border-t border-gray-100">
              Nothing could be better than having a professional digital marketing agency in Melbourne to navigate your business through the digital map directly to your customers. Digital marketing enables your business to access a vast and diverse audience, form meaningful connections and build a strong brand image in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Section (Split Grid, Image Left, Content Right) */}
      <section className="py-12 md:py-16 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: online-serch illustration */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-[4/3] max-w-[460px]">
                <Image
                  src="/web-designing/online-serch.png"
                  alt="Why Choose Flymedia Technology Illustration"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 space-y-6 order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black font-serif"
              >
                Why Choose Flymedia Technology?
              </h2>
              <div className="space-y-4 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  Hymedia Technology is on the mission to drive growth and development for all the businesses, whether small or big. Our years of experience have equipped us with in-depth knowledge and impeccable skills. These assets help us to create efficient strategies for your business with the incorporation of creativity and innovation.
                </p>
                <p>
                  Our urge to offer outstanding services makes us the best <span className="font-bold">digital marketing agency in Melbourne</span>. Working on the foundation of trust, reliability and integrity, we ensure to pave a streamlined pathway for you where you can seamlessly reach your customers, enhance visibility and drive growth and development.
                </p>
                <p>
                  We believe in forming unbreakable bonds for your business with our advanced strategies and utmost care towards creating an outstanding user experience.
                </p>
                <p>
                  With our digital marketing services, be assured of great opportunities and tides of success coming your way. Flymedia Technology stands with you at every step of your journey. Whether you are a business start-up or an established brand, we know how to get you to the peaks of success.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
<AustraliaPortfolio/>
<ContactFormSection />
    </main>
  );
}
