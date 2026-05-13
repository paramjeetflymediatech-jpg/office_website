"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X, Shield, Star, Zap, Award, CheckCircle, HelpCircle } from "lucide-react";

export default function LogoDesignSydney() {
  const plans = ["Basic", "Startup", "Professional"];

  const features = [
    { name: "Logo Design Concepts", values: ["2", "5", "10"] },
    { name: "Revision Rounds", values: ["Up to 3 Revisions", "Up to 10 Revisions", "Up to 15 Revisions"] },
    { name: "Numbers of Professional Designers", values: ["1", "2", "2"] },
    { name: "Redraws", values: ["-", "1", "2"] },
    { name: "Business Card", values: [false, true, true] },
    { name: "Stationery design: Letter Head & Envelope", values: [false, false, "5"] },
    { name: "Dedicated Account Manager", values: [true, true, true] },
    { name: "Cost Per Month", values: ["Contact Us", "Contact Us", "Contact Us"], isAction: true },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] font-sans pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-xs uppercase tracking-widest text-[#ff9900] font-extrabold bg-[#ff9900]/10 px-4 py-2 rounded-full">
                Brand Identity Specialists Sydney
              </span>
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-5xl md:text-6xl lg:text-[64px] font-bold text-black leading-[1.1] font-serif"
              >
                Premium Logo Design Sydney | Flymedia
              </h1>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                Elevate your brand in the competitive Australian marketplace. We craft breathtaking, custom vector logos that express your business's values, build immediate trust, and set your company apart from competitors across Sydney and Australia.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="bg-[#ff9900] hover:bg-black text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-3"
                >
                  Request A Quote
                  <Zap size={18} />
                </Link>
                <a
                  href="#pricing-table"
                  className="bg-black hover:bg-[#ff9900] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl inline-flex items-center gap-3"
                >
                  View Packages
                </a>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-square max-w-[440px] bg-gradient-to-tr from-[#ff9900]/10 to-transparent p-6 rounded-[2rem] border border-gray-100">
                <Image
                  src="/dropdown-icons/logo-design.webp"
                  alt="Sydney Creative Logo Design Process"
                  fill
                  className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Headline & Pricing Table */}
      <section id="pricing-table" className="py-20 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-bold text-black mb-4 font-serif"
          >
            Logo Design Packages Australia
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto font-medium">
            Discover our competitive pricing models crafted to suit Australian startups, growing brands, and professional corporations looking for a custom branding identity.
          </p>
          <div className="h-1 w-20 bg-[#ff9900] rounded-full mx-auto mt-6"></div>
        </div>

        {/* Premium Table Component */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="min-w-[850px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white border-b border-gray-200">
                  <th className="text-black font-extrabold text-sm md:text-base uppercase tracking-wider p-6 w-[40%] font-sans">
                    CHOOSE YOUR PLAN
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan}
                      className="text-black font-extrabold text-lg md:text-xl text-center p-6 w-[20%] border-l border-gray-100 font-sans"
                    >
                      {plan}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-[#151515]">
                {features.map((feature, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-800 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-5 font-bold text-[15px] text-white">
                      {feature.name}
                    </td>
                    {feature.values.map((val, valIdx) => (
                      <td
                        key={valIdx}
                        className="p-5 border-l border-gray-800 text-center text-sm font-semibold text-white"
                      >
                        {typeof val === "boolean" ? (
                          <div className="flex justify-center">
                            {val ? (
                              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-md">
                                <Check size={16} className="text-[#151515] stroke-[3]" />
                              </div>
                            ) : (
                              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                                <X size={14} className="text-white/40 stroke-[3]" />
                              </div>
                            )}
                          </div>
                        ) : feature.isAction ? (
                          <div className="flex justify-center">
                            <Link
                              href="/contact-us"
                              className="bg-[#ff9900] hover:bg-white hover:text-black text-white font-extrabold px-6 py-2.5 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
                            >
                              {val}
                            </Link>
                          </div>
                        ) : (
                          <span className={val === "-" ? "text-white/30" : "text-white font-semibold"}>
                            {val}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Creative Services & Core Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-black font-serif"
            >
              Why Australian Brands Trust Flymedia
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We combine deep brand intelligence, graphic mastery, and detailed research to produce exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#F5F5F7] border border-gray-100 space-y-4 hover:shadow-lg transition-all">
              <div className="p-3 bg-[#ff9900]/10 text-[#ff9900] rounded-xl w-fit">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-black font-sans">Premium Artistry</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We do not use templates or generic icons. Every design is built from scratch to represent your authentic values.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F5F5F7] border border-gray-100 space-y-4 hover:shadow-lg transition-all">
              <div className="p-3 bg-[#ff9900]/10 text-[#ff9900] rounded-xl w-fit">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-black font-sans">100% Vector Files</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Receive clean print-ready vector source files (AI, EPS, PDF, SVG) that scale perfectly from business cards to huge signage.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F5F5F7] border border-gray-100 space-y-4 hover:shadow-lg transition-all">
              <div className="p-3 bg-[#ff9900]/10 text-[#ff9900] rounded-xl w-fit">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-black font-sans">Full Copyrights</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                You gain 100% ownership and absolute copyrights of the finalized design. Use it freely across all mediums in Australia and globally.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
