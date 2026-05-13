"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-[#F1F1F1]">
        {/* Radial grid pattern for luxury visual styling */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Title & Intro */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#EC7317] font-bold">Premium Digital Craftsmanship</span>
                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-4xl md:text-5xl lg:text-[54px] font-bold text-black leading-[1.15] font-serif"
                >
                  Web Designing Company Sydney, Australia | Flymedia
                </h1>
              </div>

              <h2 
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold text-black font-serif"
              >
                Stunning & High-Performance Web Solutions
              </h2>

              <div className="space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  In the modern marketplace, your website is your digital storefront. It is the primary reflection of your brand's trust, authority, and professionalism. First impressions happen within seconds, and our mission is to make those seconds count.
                </p>
                <p>
                  At Flymedia Technology Australia, we build breathtaking, responsive, and performance-optimized websites tailored to your unique business goals in Stanhope Gardens, Blacktown, and across wider Sydney. We seamlessly merge creative UI/UX artistry with high-speed performance code to turn casual visitors into loyal customers.
                </p>
              </div>
              
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="bg-[#EC7317] hover:bg-black text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-3 transition-colors duration-300 shadow-lg text-sm md:text-base"
                >
                  Get A Free Quote
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="https://flymediatech.com/australia/wp-content/uploads/2024/03/bestr-it.png"
                  alt="Web Design Australia Premium Showcase"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Importance of Professional Web Design */}
      <section className="py-16 bg-white border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[500px]">
                <Image
                  src="/grow.png"
                  alt="Website Design Impact on Brand Growth"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Strategic Content */}
            <div className="lg:col-span-7 space-y-8">
              <h2 
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black leading-tight font-serif"
              >
                Why Professional Web Design is Crucial for Your Success
              </h2>

              <div className="space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  A great website is not just a collection of pretty pictures; it is a vital business asset. With over 90% of customers utilizing online searches before deciding on a local service, your design must speak volumes about your quality.
                </p>
                <p>
                  We focus on three main pillars: **Speed, Security, and Conversion**. A website that loads within 2 seconds reduces bounce rates significantly, while an intuitive UI layout naturally guides the user toward booking a call or making a purchase. Whether you are a startup or an established enterprise, we build search-engine-ready structures that propel your brand to the top of Google results.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Services Grid */}
      <section className="py-16 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-black font-serif"
            >
              Our Core Web Design Services
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We provide complete end-to-end design and development packages to transform your online identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 border border-gray-100/50 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="p-3 bg-gray-50 rounded-xl w-fit">
                    {service.icon}
                  </div>
                  <h3 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl lg:text-2xl font-bold text-black font-serif"
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] lg:text-[15px] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Design Process */}
      <section className="py-16 bg-white border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-black font-serif"
            >
              Our Seamless Web Design Process
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              From the initial brainstorm to the final launch, we keep your feedback centered in our journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative space-y-4">
                <span className="text-5xl font-black text-[#EC7317]/15 block font-serif">
                  {step.step}
                </span>
                <h3 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-lg lg:text-xl font-bold text-black font-serif"
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Direct CTA Banner */}
      <section className="py-16 bg-black text-white relative overflow-hidden rounded-[2.5rem] max-w-7xl mx-auto my-12 px-8 text-center shadow-2xl">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-bold font-serif leading-tight"
          >
            Ready to Build Your Premium Digital Presence?
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium">
            Let's construct a beautiful, bespoke website that captures your brand's essence and generates massive leads for your business. Get in touch with our expert design team today!
          </p>
          <div>
            <Link
              href="/contact-us"
              className="bg-[#EC7317] hover:bg-white hover:text-black text-white font-bold px-10 py-4 rounded-full inline-flex items-center gap-3 transition-all duration-300 shadow-xl text-sm md:text-base"
            >
              Contact Us Now
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
