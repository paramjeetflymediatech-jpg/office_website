"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Search,
  Code,
  Smartphone,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Target,
  Users,
  Award,
  Zap,
  Star
} from "lucide-react";

export default function EdmontonWebDesigningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Responsive Web Designing",
      desc: "Fully responsive layouts designed to deliver an optimal viewing experience across all mobile, tablet, and desktop devices in Edmonton.",
      icon: <Monitor size={24} className="text-[#ff9900]" />
    },
    {
      title: "Custom UI/UX Design",
      desc: "User-centric design solutions focused on branding, modern aesthetics, interactive micro-elements, and high conversion rates.",
      icon: <Star size={24} className="text-[#ff9900]" />
    },
    {
      title: "E-Commerce Solutions",
      desc: "High-performance online storefronts built with robust security, seamless checkout gateways, and optimized product architecture.",
      icon: <Zap size={24} className="text-[#ff9900]" />
    },
    {
      title: "SEO-Optimized Layouts",
      desc: "We build all websites search-engine ready from day one, guaranteeing rapid crawling, schema validation, and high indexation.",
      icon: <Search size={24} className="text-[#ff9900]" />
    }
  ];

  const benefits = [
    {
      title: "Strategic Digital Planning",
      desc: "Collaborative consulting to translate your business operations into high-performance web functions.",
      icon: <Target size={20} className="text-[#ff9900]" />
    },
    {
      title: "Expert Web Developers",
      desc: "Our industry-accredited designers and developers bring 13+ years of professional experience.",
      icon: <Users size={20} className="text-[#ff9900]" />
    },
    {
      title: "Unrivaled Client Retention",
      desc: "Our client satisfaction remains our absolute metric, backing our position as a leading digital agency.",
      icon: <Award size={20} className="text-[#ff9900]" />
    }
  ];

  const faqs = [
    {
      q: "Why should my Edmonton business invest in custom website designing?",
      a: "A custom-designed website sets you apart from your competitors in Edmonton by delivering unique branding, optimized user pathways, faster page speed, and better conversion rates than generic template themes."
    },
    {
      q: "Are your website designs fully mobile responsive?",
      a: "Yes, every single design is fully responsive and fluid, tested rigorously across various viewport dimensions to ensure flawless performance on iPhones, Androids, tablets, and desktop displays."
    },
    {
      q: "How long does it take to design and launch a website?",
      a: "Depending on scale and technical specifications, a standard website takes between 3 to 6 weeks. More complex e-commerce layouts or custom web portals may require additional engineering time."
    },
    {
      q: "Do you integrate SEO practices into web design?",
      a: "Absolutely. SEO is built directly into our design process. This includes semantic HTML layouts, image optimization, dynamic page speeds, metadata tags, and customized structured schema formats."
    }
  ];

  // Edmonton local business schema for maximum SEO indexing power
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebDesignCompany",
    "name": "Flymedia Technology Edmonton",
    "description": "Leading website designing and digital marketing company in Edmonton, Alberta, providing custom and responsive web development services.",
    "url": "https://flymediatech.com/canada/website-designing-company-in-edmonton/",
    "telephone": "+1-000-000-0000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.5461",
      "longitude": "-113.4938"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <main className="min-h-screen bg-[#EFEFEF] text-black">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* 1. Hero / Header Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-600 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#ff9900]" />
          Edmonton Web Design Specialists
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-black mb-6 leading-tight tracking-tight">
          Website Designing <br />
          Company in <span className="text-[#ff9900]">Edmonton</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed mb-10">
          Transform your digital interface with Flymedia Technology. We build high-speed, SEO-centric, and exceptionally stunning websites that capture leads.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact-us/"
            className="px-8 py-4 bg-[#ff9900] text-black font-extrabold rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg shadow-[#ff9900]/15 flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            Get Free Consultation
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/portfolio/"
            className="px-8 py-4 bg-white text-black font-extrabold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md text-sm uppercase tracking-wider"
          >
            Explore Portfolio
          </Link>
        </div>
      </section>

      {/* 2. Replicated Elementor Content/Image Container Block - SAME-TO-SAME */}
      <section className="max-w-7xl mx-auto mb-20 px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 rounded-2xl rotate-2 scale-102 bg-gray-50 opacity-40 transition-transform duration-300" />
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-50">
              <img
                loading="lazy"
                src="https://flymediatech.com/wp-content/uploads/2024/06/website-designing2.jpg"
                alt="Flymedia technology digital marketing illustration."
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Copytext */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-black leading-snug">
              Create a Stunning and Compelling Website For Your Business
            </h2>
            
            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Website Development and Design is imperative for any business that aims to excel in the current competitive digital era. We at Fly Media Technology can help you develop a stunning and compelling website for your business. A website is the first impression your client may have of you. Thus, it is crucial to develop it in a way that conveys your expertise, vision and enthusiasm to help them reach their goals.
              </p>
              <p>
                We can help you design such a website, and we are a leading <strong className="text-black">website designing company in Edmonton.</strong> So, if you want to develop a website that speaks for your business, contact us and elevate your business to new heights.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#ff9900] text-black font-extrabold px-8 py-3.5 rounded-xl hover:bg-black hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                Contact Us Today
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-black">
              Our Web Solutions
            </h2>
            <div className="w-16 h-1 bg-[#ff9900] mx-auto" />
            <p className="text-gray-500 font-medium text-lg">
              Fully customized strategies configured specifically for high ROI, organic leads, and scalability in Alberta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-[#EFEFEF] rounded-2xl p-8 hover:bg-white border border-transparent hover:border-gray-150 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ff9900] group-hover:text-black transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#ff9900] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Features / Why Partner With Us */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-black leading-tight">
              Why Partner With <span className="text-[#ff9900]">Flymedia Technology?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We focus on building powerful online strategies that turn regular traffic into dedicated clients. From responsive wireframes to complex database integrations, our products excel at every index.
            </p>
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black">{benefit.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-150">
              <div className="w-12 h-12 rounded-2xl bg-[#ff9900]/10 flex items-center justify-center text-[#ff9900]">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-black text-xl">Certified Standards</h3>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">100% Client Satisfaction</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed font-medium">
              <p>
                Our processes are built to ensure total transparency. We collaborate with you to capture your operational standards, designing custom wireframes before launching into the code phase.
              </p>
              <p>
                Whether it is a fast CMS integration or a fully headless React/NextJs deployment, our solutions stand for excellence across all criteria in Edmonton.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 text-black font-extrabold text-sm uppercase tracking-wider hover:text-[#ff9900] transition-colors"
              >
                Learn more about our process <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clean FAQ Accordion Section */}
      <section className="bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-black uppercase tracking-tight">
              FAQ
            </h2>
            <div className="w-16 h-1 bg-[#ff9900] mx-auto" />
            <p className="text-gray-500 font-medium">
              Frequently Asked Questions about our website design solutions in Edmonton.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#EFEFEF] rounded-2xl border border-transparent overflow-hidden hover:border-orange-100 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-gray-800 hover:text-[#ff9900] transition-colors focus:outline-none"
                  >
                    <span className="text-base md:text-lg leading-snug">{faq.q}</span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-white text-[#ff9900] flex items-center justify-center transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronRight size={18} />
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 text-gray-600 text-sm md:text-base leading-relaxed font-medium bg-white">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Lead Capturing CTA Section */}
      <section className="py-24 px-6 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff9900] rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed">
            Partner with the premier website designing company in Edmonton. Contact Flymedia Technology today and receive a fully tailored, zero-obligation technical web plan.
          </p>
          <div className="pt-4">
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#ff9900] text-black font-extrabold px-10 py-4.5 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-wider text-sm shadow-xl shadow-orange-500/10"
            >
              Get in Touch <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
