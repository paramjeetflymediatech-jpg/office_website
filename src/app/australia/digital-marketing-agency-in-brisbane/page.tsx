"use client";

import React from "react";
import Image from "next/image";
import SEOMonitor from "@/components/SEOMonitor";
import AustraliaPortfolio from "@/components/AustraliaPortfolio";

export default function DigitalMarketingBrisbane() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16">
      
      {/* 1. Hero Section (Image Left, Content Right) */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: webdesingg-4 illustration (renders first on mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/webdesingg-4.png"
                  alt="Digital Marketing Agency in Brisbane Hero Illustration"
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
                Digital Marketing Agency in Brisbane
              </h1>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                With the widespread availability of the Internet, smartphones and social media access, more and more people are turning their eyes to online avenues. Everyone has one website or another they go to in order to unwind after a long day. Numerous businesses have also joined the online stratosphere to get more eyes on their business. However, running a business and making certain that it is available to numerous people can be difficult to manage by yourself. This is where one could employ the help of a <span className="font-bold">digital marketing agency in Brisbane</span>, such as FlyMedia Technology.
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
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                Firstly, it is important to understand exactly what digital marketing is. In the basic terms, digital marketing is essentially an advertisement for any service or product, but the medium, however, is digital. Unlike traditional marketing realms, digital marketing requires you to stay updated with various trends, changes in the algorithms, and how a variety of online platforms work and operate. It can be difficult to manage everything by yourself – you also have a business to run, which is why we recommend taking on the services of a <span className="font-bold">digital marketing agency in Brisbane</span>.
              </p>
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
      <section className="py-12 md:py-16 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 space-y-6 text-left">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl font-bold text-black font-serif"
          >
            Why is Digital Marketing Important?
          </h2>
          <div className="space-y-4 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
            <p>
              People often think their business can thrive without digital marketing – while that might be the case for some, it does not work out for most people. In order for a business to thrive, it is important to have as many people as feasible and digital marketing can provide that luxury. Especially if one has a proper search engine optimization strategy – if not, you can come to our <span className="font-bold">SEO agency in Brisbane</span> to optimise your content in the best possible manner.
            </p>
            <p>
              There are a number of reasons why digital marketing is important, some of these reasons are as follows:
            </p>
            <p>
              The accessibility power of digital marketing allows businesses to reach their target audience through several forms of communication such as texts, visuals, audios, graphics.
            </p>
          </div>

          <ul className="text-gray-700 text-[15px] md:text-base font-sans font-medium list-disc pl-5 leading-relaxed space-y-2">
            <li>Better return on investment.</li>
            <li>Engage and grow your loyal customers.</li>
            <li>Target the ideal consumer for your business.</li>
            <li>Much more cost-effective than traditional methods of marketing.</li>
            <li>It generates genuine leads, which can be transformed into conversions.</li>
            <li>It helps to personalize the customer experience.</li>
            <li>Digital marketing also allows brand identity and coherency to flourish.</li>
            <li>You can easily analyse the performance of a specific campaign.</li>
          </ul>
        </div>
      </section>

      {/* 4. Various Ways Section */}
      <section className="py-10 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl font-bold text-black font-serif text-left"
          >
            Various Ways to Engage in Digital Marketing
          </h2>
          <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
            There is not a single way to engage with digital marketing, it is a wide, complex and complicated web of options. You can pick and choose different kinds of services depending on your requirements and business models.
          </p>
        </div>
      </section>

      {/* 5. Custom 5-Card Highlights Grid */}
      <section className="py-12 bg-[#F1F1F1] border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between space-y-4">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#EC7317] font-serif"
              >
                Search Engine Optimization (On and Off Page)
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                With the help of an SEO agency in Brisbane, you can request a search engine optimization content strategy. Having SEO-friendly content is inherently important for the visibility of your website and social media content. Therefore, by having an agency handle this aspect can be extremely useful. At FlyMedia Technology, we assist in providing the best possible SEO-friendly content.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between space-y-4">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#EC7317] font-serif"
              >
                Google Adwords
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                Developed by Google, Adwords is a system that allows various business owners to grow their business and reach their target audience through various search engines and partner sites. It is essentially a paid way to target the customer. It can be a complicated process apart from the initial setup, therefore, as the leading experts of Google Adwords agency in Brisbane, we can provide guidance and help. Social media optimization allows businesses to reach their customers on a more personal level. This is where the best SMO agency in Brisbane steps into to ensure high engagement values and form a strong personal brand.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between space-y-4">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#EC7317] font-serif"
              >
                SMO (Facebook and Instagram)
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                Just like SEO, SMO is essentially Social Media Optimization, wherein any profile is supposed to perform before it is adequately seen. Different social media tools is its advantage. However, social media platforms require you to post frequently, and the content creation part can take a lot of time and energy, unfortunately. However, at FlyMedia Technology, an SMO agency in Brisbane, you can expect premium-quality content for your business profiles. We can post content on your behalf, and you do not have to worry about anything at all.
              </p>
            </div>

          </div>

          {/* Bottom Row: 2 Cards (Centered beautifully on desktop) */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            
            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between space-y-4 w-full md:w-[calc(50%-16px)] lg:w-[370px]">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#EC7317] font-serif"
              >
                Meta Paid Ads
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                In the same vein as Google Adwords, Meta Paid Ads also allow various profiles to advertise their business as much as they want to. Paid ads generally bypass the natural progression of growth so one can decide the reach that they want to have with any specific ad – one can also target people in various areas as well as with different interests. With FlyMedia's digital marketing services, you can also request Meta Paid Ads and we can launch them on your behalf.
              </p>
            </div>

            {/* Card 5 (List Layout inside) */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between space-y-4 w-full md:w-[calc(50%-16px)] lg:w-[770px]">
              <div className="space-y-4">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-bold text-[#EC7317] font-serif"
                >
                  What to Look for in a Digital Marketing Agency?
                </h3>
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-sans font-semibold">
                  As we find and explore the digital marketing landscape, you are bound to come across various digital marketing firms. However, it is incredibly easy to overwhelm yourself in the process. It is important to know what one should look for when deciding on an agency. Some of the things one needs to keep in mind are as follows:
                </p>
                <ul className="text-gray-700 text-xs md:text-sm font-sans font-medium list-disc pl-5 leading-relaxed space-y-2">
                  <li>It is important to have similar values of the projects.</li>
                  <li>It is imperative to have an open channel of communication with the agency.</li>
                  <li>This decision should be made based on the results and success of the company's past success.</li>
                  <li>You should see whether the company is capable of handling different requests.</li>
                  <li>If they only excel in a single thing like SEO, they might not be the best option for SMO. You need to find an SMO agency in Brisbane that can help analyze a variety of issues and provide a number of services.</li>
                  <li>Experience is also important when selecting a digital marketing agency for your business.</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Reasons to Opt Section (Split Grid, Image Left, Content Right) */}
      <section className="py-12 md:py-16 bg-[#F1F1F1] border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: online-serch illustration */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-[4/3] max-w-[460px]">
                <Image
                  src="/web-designing/online-serch.png"
                  alt="Reasons to Choose FlyMedia Technology Illustration"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Reasons Content */}
            <div className="lg:col-span-7 space-y-6 order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black font-serif"
              >
                Reasons to Opt for FlyMedia Technology
              </h2>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                Not only do we provide the best digital marketing solutions for your business, but we are also a leading <span className="font-bold">Google Adwords agency in Brisbane</span>. There are a number of reasons to choose FlyMedia as your desired digital marketing agency:
              </p>
              
              <ul className="text-gray-700 text-[14px] md:text-[15px] font-sans font-medium list-disc pl-5 leading-relaxed space-y-3">
                <li><span className="font-bold text-black">Experience:</span> With over a decade of experience, we are well-equipped to handle any situation or request.</li>
                <li><span className="font-bold text-black">Art of Collaboration:</span> We truly understand that digital marketing requires the art of collaboration. With our team of experts, we sit down with the clients to have a clear understanding of what they want to do with their profiles. At FlyMedia Technology, you will be able to transform your visions into a reality for your business.</li>
                <li><span className="font-bold text-black">Specialised Teams:</span> With our people with varying specialised skill sets, you can ask for any quality of graphics and writing – from Canva to Digital Creation, we have experts in every field.</li>
                <li><span className="font-bold text-black">Your Input Matters to Us:</span> At the heart of every single project is the input the client provides.</li>
                <li><span className="font-bold text-black">Keeping Updated:</span> At FlyMedia Technology, we understand that the online landscape constantly changes. Trends come in, trends go; technologies come in, technologies go. However, we constantly update our knowledge back to make certain that we can provide the best possible service to all our clients.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Other Services Section (Split Grid, Image Left, Content Right) */}
      <section className="py-12 md:py-16 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Right Column: mobi illustration (desktop right, mobile top) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[460px]">
                <Image
                  src="/web-designing/mobi.png"
                  alt="Other Services Offered Illustration"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Left Column: Services Content (desktop left, mobile bottom) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black font-serif"
              >
                Other Services Offered by FlyMedia Technology
              </h2>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                FlyMedia does not limit itself to just digital marketing. We offer a number of other services alongside digital marketing. By opting for FlyMedia Technology, you can have an answer to all your digital needs with us. Some of the services we offer are as follows:
              </p>
              
              <ul className="text-gray-700 text-[14px] md:text-[15px] font-sans font-medium list-disc pl-5 leading-relaxed space-y-2">
                <li>Web Designing</li>
                <li>Digital Marketing</li>
                <li>Development of Mobile Apps</li>
                <li>SEO-Marketing Services</li>
                <li>Website based Softwares</li>
                <li>Payment Gateway Integration</li>
                <li>Website Development</li>
                <li>Google Adwords (PPC)</li>
                <li>Content Writing</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <AustraliaPortfolio />

    </main>
  );
}
