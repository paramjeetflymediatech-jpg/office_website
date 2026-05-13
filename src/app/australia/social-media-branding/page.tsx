"use client";

import React from "react";
import Link from "next/link";

export default function SocialMediaBrandingPackages() {
  const plans = [
    { name: "Social Lite" },
    { name: "Facebook Kit" },
    { name: "Social Elite" },
    { name: "Social MegaPack" }
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
      category: "Branding Assets & Setup",
      features: [
        { name: "Facebook Cover", values: [true, true, true, true] },
        { name: "Facebook Welcome Landing Page", values: [false, true, false, true] },
        { name: "Twitter Banner", values: [true, false, true, true] },
        { name: "YouTube Channel Design", values: [false, false, true, true] },
        { name: "Google+ Branding", values: [true, false, true, true] },
        { name: "LinkedIn Group setup", values: [false, false, true, true] },
        { name: "Pinterest Account", values: [false, false, false, true] },
        { name: "PLUS – FREE Avatar Creation", values: [true, true, true, true] }
      ]
    },
    {
      category: "Website Integration & Strategy",
      features: [
        { name: "Link your social media accounts to your website", values: [true, true, true, true] },
        { name: "Add social media icons to your website and link these to your social media profiles", values: [true, true, true, true] },
        { name: "Set-up, design and develop your online marketing strategy as per your package account.", values: [false, false, true, true] }
      ]
    },
    {
      category: "Pricing Plan",
      features: [
        { name: "Cost Per Month", values: ["Contact Us", "Contact Us", "Contact Us", "Contact Us"], isAction: true }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-24">
      
      {/* 1. Page Header */}
      <section className="pt-16 pb-12 text-center max-w-7xl mx-auto px-6 space-y-4">
        <h1 
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl md:text-5xl font-serif font-bold text-black"
        >
          Social Media Branding
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
                      CHOOSE YOUR PLAN
                    </th>
                    {plans.map((plan, i) => (
                      <th key={i} className="text-black p-6 font-bold text-center w-[17%] border-l border-gray-300">
                        <div className="text-base font-bold uppercase">{plan.name}</div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="bg-[#1A1A1A]">
                  {pricingData.map((section, idx) => (
                    <React.Fragment key={idx}>
                      
                      {/* Subheading/Category Row */}
                      {section.category !== "Branding Assets & Setup" && section.category !== "Pricing Plan" && (
                        <tr className="bg-white">
                          <td colSpan={5} className="p-4 md:p-5 font-bold text-black text-xs md:text-sm uppercase tracking-wider border-b border-gray-300">
                            {section.category}
                          </td>
                        </tr>
                      )}

                      {section.category === "Pricing Plan" && (
                        <tr className="bg-white">
                          <td colSpan={5} className="p-4 md:p-5 font-bold text-black text-xs md:text-sm uppercase tracking-wider border-b border-gray-300">
                            Branding Pricing
                          </td>
                        </tr>
                      )}
                      
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

    </main>
  );
}
