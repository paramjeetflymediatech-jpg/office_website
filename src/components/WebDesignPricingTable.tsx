"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function WebDesignPricingTable() {
  const plans = ["Budget", "Starter", "Advanced", "Pro"];
  
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
      category: "Core Features",
      features: [
        { name: "Number of Pages", values: ["Upto 6 Pages", "Upto 12 Pages", "Upto 25 Pages", "80 Pages"] },
        { name: "Website design concepts", values: ["1", "2", "4", "7"] },
        { name: "Mobile friendly/Responsive Design", values: [true, true, true, true] },
        { name: "Content Changes", values: ["1", "1", "2", "2"] },
        { name: "Content Management System (CMS)", values: [false, true, true, true] },
        { name: "On Page SEO Features (SEO not included)", values: [false, true, true, true] },
        { name: "Google Analytics Implementation", values: [false, false, true, true] },
        { name: "Duration of Project", values: ["1 Week", "1 Week", "2-3 Week", "3-4 Week"], isBold: true },
      ]
    },
    {
      category: "Visual Features",
      features: [
        { name: "Slide Show", values: [true, true, true, true] },
        { name: "Lightbox Gallery", values: [true, true, true, true] },
        { name: "Interactive Map", values: [true, true, true, true] },
        { name: "Enquiry Form", values: [true, true, true, true] },
      ]
    },
    {
      category: "Social Media Features",
      features: [
        { name: "Facebook Page set-up", values: [true, true, true, true] },
        { name: "Twitter set-up", values: [true, true, true, true] },
        { name: "Google+ Page set-up", values: [true, true, true, true] },
        { name: "Linkedin Group Page", values: [true, true, true, true] },
      ]
    },
    {
      category: "Domain & Hosting",
      features: [
        { name: "Email Accounts", values: ["1", "2", "3", "5"] },
        { name: "Free .com Domain Name", values: [false, true, true, true] },
        { name: "12 Months Website Hosting", values: [true, true, true, true] },
      ]
    },
    {
      category: "Pricing",
      features: [
        { name: "Cost Per Month", values: ["Contact Us", "Contact Us", "Contact Us", "Contact Us"], isAction: true },
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
          className="min-w-[900px] border border-gray-300 rounded-lg bg-[#1A1A1A] shadow-2xl overflow-hidden"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-white text-black p-6  text-xl uppercase tracking-tighter border-b border-gray-300 w-[30%]">
                  Choose Your Plan
                </th>
                {plans.map((plan, i) => (
                  <th key={i} className="bg-white text-black p-6  text-xl uppercase tracking-tighter border-b border-l border-gray-300 text-center w-[17.5%]">
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingData.map((section, idx) => (
                <React.Fragment key={idx}>
                  {/* Category Header */}
                  {section.category !== "Core Features" && section.category !== "Pricing" && (
                    <tr className="bg-white">
                      <td colSpan={5} className="p-5 text-black font-bold text-lg  uppercase  border-b border-gray-700 shadow-inner">
                        {section.category}
                      </td>
                    </tr>
                  )}
                  
                  {/* Features */}
                  {section.features.map((feature, fIdx) => (
                    <tr key={fIdx} className="hover:bg-white/5 transition-colors duration-150 border-b border-gray-700 last:border-0">
                      <td className={`p-5 text-white/90 ${feature.isBold ? " text-white" : feature.isAction ? "font-bold text-lg" : "font-medium"}`}>
                        {feature.name}
                      </td>
                      {feature.values.map((v, vIdx) => (
                        <td key={vIdx} className="p-5 border-l border-gray-700 text-center">
                          {typeof v === "boolean" ? (
                            <div className="flex justify-center">
                              {v ? (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              )}
                            </div>
                          ) : feature.isAction ? (
                            <Link href="/contact-us" className="inline-block bg-[#ff9900] text-black font-black px-8 py-3 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-xl   text-xs">
                              {v}
                            </Link>
                          ) : (
                            <span className={`text-white/80 ${feature.isBold ? "text-white" : "font-semibold"} text-[14px]`}>{v}</span>
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
