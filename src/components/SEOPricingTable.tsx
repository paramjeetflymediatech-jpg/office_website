"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SEOPricingTable() {
  const plans = ["Starter", "Bronze", "Silver"];
  
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
      category: "Campaign Set -up",
      features: [
        { name: "Campaign Set -up", values: ["Any 1 Network Account Set -up (Google Adwords, Microsoft Adcenter, Facebook)", "Any 2 Network Account Set -up (Google Adwords, Microsoft Adcenter, Facebook)", "All Network Account Set -up (Google Adwords, Microsoft Adcenter, Facebook)"] },
        { name: "Keyword Research & Selection", values: [true, true, true] },
        { name: "Keyword Mapping", values: [true, true, true] },
        { name: "Ad Group Creations", values: ["Up to 5", "Up to 10", "Up to 15"] },
        { name: "Text Ads", values: [true, true, true] },
        { name: "Banner Ads", values: ["1", "3", "5"] },
        { name: "Landing Page Selection", values: [true, true, true] },
        { name: "GEO Targeting Setup", values: [true, true, true] },
        { name: "Setup Conversion Code", values: [true, true, true] },
        { name: "Ad Scheduling", values: [true, true, true] },
        { name: "Manual Bidding", values: [false, true, true] },
        { name: "Ad Copy Creation", values: [false, true, true] },
      ]
    },
    {
      category: "Campaign Management",
      features: [
        { name: "Competitor Analysis", values: [false, true, true] },
        { name: "Keyword Optimization", values: [true, true, true] },
        { name: "Ad Copy Optimization", values: [true, true, true] },
        { name: "Keyword Bid Optimization", values: [true, true, true] },
        { name: "Landing Page Optimization Consultation", values: [true, true, true] },
        { name: "Landing page design", values: [false, false, true] },
        { name: "CTR Analysis", values: [false, true, true] },
        { name: "A/B Testing", values: [false, false, true] },
        { name: "Keyword Refinements (if required)", values: [true, true, true] },
        { name: "Bid Refinements (if required)", values: [true, true, true] },
        { name: "ROI Analysis", values: [false, true, true] },
      ]
    },
    {
      category: "Analytics Setup",
      features: [
        { name: "Google Analytics Setup", values: ["Basic", "Basic", "Advanced"] },
        { name: "Google Adwords Conversion Setup", values: [false, true, true] },
      ]
    },
    {
      category: "Reporting and Support",
      features: [
        { name: "Weekly Reports", values: [true, true, true] },
        { name: "Monthly Reports", values: [true, true, true] },
        { name: "Advanced Reports", values: [false, true, true] },
        { name: "Support", values: ["Email and chat", "Email and chat", "Email, Chat and Phone"] },
      ]
    },
    {
      category: "Pricing",
      features: [
        { name: "Cost Per Month", values: ["Contact Us", "Contact Us", "Contact Us"], isAction: true },
      ]
    }
  ];

  return (
    <div className="overflow-x-auto font-sans">
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="min-w-[900px] border border-gray-300 rounded-lg overflow-hidden shadow-2xl"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-300">
                <th className="text-black p-6 font-bold text-lg uppercase tracking-tight w-[40%]">
                  CHOOSE YOUR PLAN
                </th>
                {plans.map((plan, i) => (
                  <th key={i} className="text-black p-6 font-bold text-xl text-center w-[20%] border-l border-gray-300">
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#1A1A1A]">
              {pricingData.map((section, idx) => (
                <React.Fragment key={idx}>
                  {/* Category Header */}
                  {section.category !== "Campaign Set -up" && section.category !== "Pricing" && (
                    <tr className="bg-white">
                      <td colSpan={4} className="p-4 md:p-5 font-bold text-black text-sm uppercase tracking-wider border-b border-gray-300">
                        {section.category}
                      </td>
                    </tr>
                  )}
                  {section.category === "Pricing" && (
                    <tr className="bg-white">
                      <td colSpan={4} className="p-4 md:p-5 font-bold text-black text-sm uppercase tracking-wider border-b border-gray-300">
                        SEO Pricing
                      </td>
                    </tr>
                  )}
                  
                  {/* Features */}
                  {section.features.map((feature, fIdx) => (
                    <tr key={fIdx} className="hover:bg-white/5 transition-colors duration-150 border-b border-gray-300">
                      <td className={`p-5 text-white ${feature.isBold ? "font-bold text-white" : "font-medium text-[15px]"}`}>
                        {feature.name}
                      </td>
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
                              <Link href="/contact-us" className="inline-block bg-[#ff9900] text-white font-bold px-8 py-3 rounded-full hover:bg-black transition-all transform hover:scale-105 shadow-lg text-sm uppercase tracking-wide">
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
        </motion.div>
      </div>
    </div>
  );
}
