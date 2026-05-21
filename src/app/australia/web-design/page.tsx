"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SEOMonitor from "@/components/SEOMonitor";
import {
  Laptop,
  Smartphone,
  ShoppingBag,
  Code,
  HeartHandshake,
  Search,
  Palette,
  ShieldCheck,
  ChevronRight,
  Clock,
  Sparkles
} from "lucide-react";
import AustraliaPortfolio from "@/components/AustraliaPortfolio";
import ContactFormSection from "@/components/ContactFormSection";

export default function WebDesignAustralia() {
  const designServices = [
    {
      title: "Responsive Web Design",
      desc: "Our websites are designed to look and perform flawlessly on any device—be it mobile, tablet, laptop, or desktop. We prioritize cross-device fluidity to ensure a perfect user experience everywhere.",
      icon: <Smartphone className="w-8 h-8 text-[#EC7317]" />
    },
    {
      title: "Custom UI/UX Design",
      desc: "We craft visually stunning, bespoke user interfaces (UI) and map out intuitive user experiences (UX) that make navigation a breeze, helping you engage visitors and guide them to convert.",
      icon: <Palette className="w-8 h-8 text-[#EC7317]" />
    },
    {
      title: "E-Commerce Website Development",
      desc: "Boost your retail presence with powerful, secure, and user-friendly online shops. We build robust e-commerce solutions with smooth checkouts and payment gateway integrations.",
      icon: <ShoppingBag className="w-8 h-8 text-[#EC7317]" />
    },
    {
      title: "WordPress & CMS Websites",
      desc: "Get absolute control over your content. We build beautiful, customized WordPress websites that allow you to easily update pages, blogs, and media without needing coding skills.",
      icon: <Laptop className="w-8 h-8 text-[#EC7317]" />
    },
    {
      title: "Website Redesigning",
      desc: "Give your outdated website a modern, luxury facelift. We optimize structure, speed, and aesthetics to align your site with the latest design standards and business objectives.",
      icon: <Sparkles className="w-8 h-8 text-[#EC7317]" />
    },
    {
      title: "Technical Support & Security",
      desc: "A great design requires seamless operation. We ensure your website remains secure, fast-loading, up-to-date, and completely protected from any digital vulnerabilities.",
      icon: <ShieldCheck className="w-8 h-8 text-[#EC7317]" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      desc: "We analyze your business, target audience, and competitors to formulate a strategic sitemap and structural design layout."
    },
    {
      step: "02",
      title: "UI/UX Mockups",
      desc: "We design beautiful, bespoke interactive layouts and prototypes for you to review and perfect before we write any code."
    },
    {
      step: "03",
      title: "Development & Integration",
      desc: "Our expert developers build your website using clean, search-engine-optimized, responsive code and integrate required features."
    },
    {
      step: "04",
      title: "Testing & Launch",
      desc: "We thoroughly audit performance, loading speed, and mobile responsiveness across multiple devices to ensure a flawless launch."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans">

      {/* 1. Hero Section (Sydney Website Designer & Branding) */}
      <section className="relative py-16 md:py-10 overflow-hidden bg-[#F1F1F1]">
        {/* Subtle decorative background grids */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Branding Image Illustration */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full aspect-square max-w-[460px] transform hover:scale-102 transition-transform duration-500 ease-out">
                <Image
                  src="/uploads/2024/03/BRANDING.png"
                  alt="Branding and Website Designing Services Sydney"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Right Column: Dynamic Content & Typography */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                {/* <span className="text-xs uppercase tracking-widest text-[#EC7317] font-bold">Flymedia Technology</span> */}
                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl md:text-4xl lg:text-[46px] font-extrabold text-black leading-tight font-serif"
                >
                  Website Designer in Sydney | Flymedia Technology
                </h1>
              </div>

              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl md:text-2xl font-bold text-black font-serif italic border-l-4 border-[#EC7317] pl-4"
              >
                Website Designing Services
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  Website Designing Agency Sydney, Engaging and attracting the users with an appropriate web page design could gather good communication and connection with the target audience, leading to ultimate sales generations.
                </p>
                <p>
                  There are no second chances when you want to make a first impression on the customers.
                </p>
                <p>
                  When your website is easy to understand and very user-friendly, then the customers tend to stay on your web page. Otherwise, they do not take a second enough to switch to another. Speed and easy accessibility should be improvised.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Card callout block */}
          <div className=" p-8 md:p-12  transition-all duration-300">
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Attract new and quality leads to your website by engaging with the best <strong className="text-black font-bold">website designing company in Sydney</strong>. Let us build you a platform that can empower your business and allow it to reach potential customers all around the world.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Open The Doors To Success */}
      <section className=" border-t border-b border-gray-200/40 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Column: Heading & Detailed Description */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black leading-tight font-serif"
              >
                Open The Doors To Success
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  A website is a door that allows your customers to visit your business whenever they want and wherever they want. The finest <strong className="text-black font-bold">website designer in Sydney</strong> can create an appealing and user-friendly website that will make your business stand at the peak of success.
                </p>
                <p>
                  A business is run by consumers. Therefore, a great user experience will only captivate more consumers, contributing to the growth and development of the business. Allow the world to know your business with your website and engage with your customers in the most exciting way.
                </p>
                <p>
                  With the help of the best <strong className="text-black font-bold">website designing company in Stanhope Gardens, Blacktown</strong>, create an exceptional user experience for the consumers and engage in a smooth and effective flow of communication that enhances the visibility of your business.
                </p>
              </div>
            </div>

            {/* Right Column: SEOMonitor Component */}
            <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-[500px]">
                <SEOMonitor />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Award-Winning Web Design Firms */}
      <section className="py-20 bg-[#F1F1F1] border-b border-gray-200/40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left side image/branding illustration */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full aspect-square max-w-[320px] transform hover:scale-105 transition-transform duration-500 ease-out">
                <Image
                  src="/uploads/2024/03/BRANDING.png"
                  alt="Award Winning Web Design Sydney"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right side strategic introduction */}
            <div className="lg:col-span-8 space-y-6">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black leading-tight font-serif"
              >
                Award-Winning Web Design Firms Sydney
              </h2>
              <div className="space-y-4 text-gray-700 text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  Website design firm: Every project is different in its own way. We specialise in taking advantage of opportunities and aiming to achieve your goals.
                </p>
                <p>
                  Creating a web page and designing it in a way that is user-friendly, easy to navigate, and guides the readers are the mottos of our company. We adhere to strict and crystal-clear terms and conditions that also make our clients clear of things.
                </p>
                <p>
                  Your website is the first impression of your business that the consumers experience while surfing through the internet to purchase products and services. The best <strong className="text-black font-bold">website designing company in Sydney</strong> aims to create an impression on the consumers that they will never forget and leverage it to turn the visitors into potential buyers. Our services offer nothing but utter satisfaction that will take your business to the heights of success by giving an output beyond your expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Three Premium Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Branding & Logo Design */}
            <div className=" rounded-3xl p-8 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:border-[#EC7317]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="p-3.5 bg-gray-50 rounded-2xl w-fit text-[#EC7317]">
                  <Palette className="w-8 h-8" />
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl lg:text-2xl font-bold text-black font-serif"
                >
                  Branding & Logo Design
                </h3>
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                  Let your customers know your business from its core by telling them who you are, what you do, and what benefits you offer to the customers by branding and creating an unforgettable logo design with the help of the best website design company in Sydney.
                </p>
              </div>
            </div>

            {/* Card 2: Graphic and UI Design */}
            <div className=" rounded-3xl p-8 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:border-[#EC7317]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="p-3.5 bg-gray-50 rounded-2xl w-fit text-[#EC7317]">
                  <Laptop className="w-8 h-8" />
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl lg:text-2xl font-bold text-black font-serif"
                >
                  Graphic and UI Design
                </h3>
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                  Visuals are the supreme way of communication that can create an impact that nothing can match. Combine visuals with creativity and with graphic and UI design and pave the way for your business to a bright and successful future.
                </p>
              </div>
            </div>

            {/* Card 3: Mobile Applications Design */}
            <div className=" rounded-3xl p-8 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:border-[#EC7317]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="p-3.5 bg-gray-50 rounded-2xl w-fit text-[#EC7317]">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl lg:text-2xl font-bold text-black font-serif"
                >
                  Mobile Applications Design
                </h3>
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                  Mobile applications offer convenience to consumers seeking to purchase a product or service. A user-friendly mobile application design can captivate consumers by making the buying process as easy as possible.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Choose The Best Website Designing Company */}
      <section className="  relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="text-center max-w-7xl mx-auto mb-16 space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-3xl lg:text-4xl font-bold text-black font-serif leading-tight"
            >
              Choose The Best Website Designing Company In Stanhope Gardens, Blacktown
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
              A website is a must for businesses to expand their horizons in the market and step foot in different areas of the industry with ease. We make it happen for you with our best <strong className="text-black font-bold">website designer in Sydney</strong> so your business can achieve heights of success beyond your expectations. Our website designing service brings a number of features to your plate, such as:
            </p>
          </div>

          {/* 4 Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Feature 1: Navigation */}
            <div className="bg-white rounded-3xl p-8 border  border-transparent hover:border-[#EC7317]/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                {/* <span className="text-2xl font-bold text-[#EC7317]">01</span> */}
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-lg lg:text-xl font-bold text-black font-serif"
                >
                  Navigation
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                  We create high-quality website designs with the help of our expert website designer in Sydney that are easy to understand and navigate the customers to the desired action without any hindrance. A website that can be easily used and allows customers to proceed with their actions without any confusion can contribute significantly to generating new leads.
                </p>
              </div>
            </div>

            {/* Feature 2: Visual Design */}
            <div className="bg-white rounded-3xl p-8 border border-transparent hover:border-[#EC7317]/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                {/* <span className="text-2xl font-bold text-[#EC7317]">02</span> */}
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-lg lg:text-xl font-bold text-black font-serif"
                >
                  Visual Design
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                  Visual orientation is the primary aspect of human communication, and it allows people to easily understand the purpose of any action. Therefore, website design puts more emphasis on graphics to make the website more appealing and boost online traffic.
                </p>
              </div>
            </div>

            {/* Feature 3: Web Friendly */}
            <div className="bg-white rounded-3xl p-8 border border-transparent hover:border-[#EC7317]/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                {/* <span className="text-2xl font-bold text-[#EC7317]">03</span> */}
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-lg lg:text-xl font-bold text-black font-serif"
                >
                  Web Friendly
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                  A website that is easy to use and can be accessed without putting in extra effort can leave all the websites behind that might have an appealing look. With the best website designing company in Stanhope Gardens, Blacktown, you not only get an attractive website with beautiful visuals but also a user-friendly interface, which generates leads and brings success.
                </p>
              </div>
            </div>

            {/* Feature 4: Interactive */}
            <div className="bg-white rounded-3xl p-8 border border-transparent hover:border-[#EC7317]/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                {/* <span className="text-2xl font-bold text-[#EC7317]">04</span> */}
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-lg lg:text-xl font-bold text-black font-serif"
                >
                  Interactive
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                  The more interactive the website is, the more leads will end up knocking on the door of your business to acquire your products and services. Website interaction leads to the conversion of visitors into potential customers by catching their attention and addressing all their concerns associated with the business.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      <AustraliaPortfolio />
      <ContactFormSection />

    </main>
  );
}
