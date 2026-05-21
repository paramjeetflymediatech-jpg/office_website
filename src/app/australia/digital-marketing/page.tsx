"use client";

import React from "react";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export default function DigitalMarketingPackages() {
  const plans = [
    { name: "BASIC", desc: "(facebook only)" },
    { name: "VALUE", desc: "(any 2)" },
    { name: "STANDARD", desc: "(any 3)" },
    { name: "PREMIUM", desc: "(any 4)" }
  ];

  type FeatureValue = string | boolean;

  interface Feature {
    name: string;
    values: FeatureValue[];
    isAction?: boolean;
    isBold?: boolean;
  }

  interface PricingSection {
    category: string;
    features: Feature[];
  }

  const pricingData: PricingSection[] = [
    {
      category: "Social Media Networks – Facebook, Twitter, LinkedIn, Google+, Instagram, Pinterest, YouTube (Video content to be provided by client)",
      features: [
        { name: "Minimum Contract Duration", values: ["No Minimum Contract Period", "No Minimum Contract Period", "No Minimum Contract Period", "No Minimum Contract Period"] }
      ]
    },
    {
      category: "PROFILE MANAGEMENT",
      features: [
        { name: "Account Creation (If Needed)", values: [true, true, true, true] },
        { name: "Time-Optimized Updates", values: ["30/Month", "30/Month/Per Channel", "40/Month/Per Channel", "60/Month/Per Channel"] },
        { name: "Custom Facebook Tabs (If needed)", values: [false, true, true, true] },
        { name: "Custom Cover Photos (Includes all channels signed up for)", values: [false, true, true, true] },
        { name: "Event & Group Creation", values: [false, true, true, true] },
        { name: "Profile Reservation", values: [false, true, true, true] }
      ]
    },
    {
      category: "ACCOUNT MANAGEMENT",
      features: [
        { name: "Dedicated Account Representative", values: [true, true, true, true] },
        { name: "Marketing Strategy", values: [true, true, true, true] },
        { name: "Planning/Strategy Meetings", values: ["1 Meeting/Month", "2 Meetings/Month", "3 Meetings/Month", "As Needed"] },
        { name: "Content Calendar and Layout", values: [true, true, true, true] },
        { name: "Workflow Development & Escalation Processes", values: [true, true, true, true] },
        { name: "New Likes per month", values: ["50**", "100** (FB Only)", "200** (FB Only)", "500** (FB Only)"] }
      ]
    },
    {
      category: "MONITORING",
      features: [
        { name: "Keyword Monitoring", values: [false, false, true, true] },
        { name: "Brand Mentions & Monitoring", values: [false, false, true, true] }
      ]
    },
    {
      category: "Monthly Analytics & Metrics Report",
      features: [
        { name: "Keyword Monitoring", values: [true, true, true, true] }
      ]
    },
    {
      category: "**Followers cannot be guaranteed without any paid activity",
      features: [
        { name: "Cost Per Month", values: ["Contact Us", "Contact Us", "Contact Us", "Contact Us"], isAction: true }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans ">
      
      {/* 1. Page Header & Introduction */}
      <section className="pt-16 pb-12 text-center max-w-7xl mx-auto px-6 space-y-4">
        <h1 
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl md:text-5xl font-serif font-bold text-black">
            Digital Marketing   
        </h1>
      </section>

      {/* 2. Static Pricing Table Section */}
      <section className="pb-12">
        <div className="overflow-x-auto font-sans">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="min-w-[1000px] border border-gray-300 rounded-lg overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                
                {/* Table Header */}
                <thead>
                  <tr className="bg-white border-b border-gray-300">
                    <th className="text-black p-6 font-bold text-base md:text-lg uppercase tracking-tight w-[32%]">
                      SOCIAL MEDIA PACKAGES
                    </th>
                    {plans.map((plan, i) => (
                      <th key={i} className="text-black p-6 font-bold text-center w-[17%] border-l border-gray-300">
                        <div className="text-base font-bold uppercase">{plan.name}</div>
                        <div className="text-xs text-gray-500 font-medium normal-case italic mt-1">{plan.desc}</div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="bg-[#1A1A1A]">
                  {pricingData.map((section, idx) => (
                    <React.Fragment key={idx}>
                      
                      {/* Subheading/Category Row */}
                      <tr className="bg-white">
                        <td colSpan={5} className="p-4 md:p-5 font-bold text-black text-xs md:text-sm uppercase tracking-wider border-b border-gray-300">
                          {section.category}
                        </td>
                      </tr>
                      
                      {/* Features Row */}
                      {section.features.map((feature, fIdx) => (
                        <tr key={fIdx} className="hover:bg-white/5 transition-colors duration-150 border-b border-gray-300">
                          
                          {/* Feature Name */}
                          <td className="p-5 text-white font-medium text-[15px]">
                            {feature.name}
                          </td>

                          {/* Plan Values */}
                          {feature.values.map((v, vIdx) => (
                            <td key={vIdx} className="p-5 border-l border-gray-300 text-center relative group">
                              {typeof v === "boolean" ? (
                                <div className="flex justify-center">
                                  {v ? (
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                  ) : (
                                    <div className="w-6 h-6 rounded-full border-2 border-white/20 flex items-center justify-center">
                                      <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                                      </svg>
                                    </div>
                                  )}
                                </div>
                              ) : feature.isAction ? (
                                <div className="flex justify-center py-2">
                                  <Link href="/contact-us" className="inline-block bg-[#EC7317] text-white font-bold px-8 py-3 rounded-full hover:bg-black transition-all transform hover:scale-105 shadow-lg text-sm uppercase tracking-wide">
                                    {v}
                                  </Link>
                                </div>
                              ) : (
                                <span className="text-white font-medium text-[14px] leading-snug block max-w-[250px] mx-auto">
                                  {v}
                                </span>
                              )}
                            </td>
                          ))}

                        </tr>
                      ))}

                    </React.Fragment>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </section>
      <ContactFormSection />

    </main>
  );
}
