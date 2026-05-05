"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LogoPricingTable() {
  const plans = ["Basic", "Startup", "Professional"];
  
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
      category: "Features",
      features: [
        { name: "Logo Design Concepts", values: ["2", "5", "10"] },
        { name: "Revision Rounds", values: ["Up to 3 Revisions", "Up to 10 Revisions", "Up to 15 Revisions"] },
        { name: "Numbers of Professional Designers", values: ["1", "2", "2"] },
        { name: "Redraws", values: ["-", "1", "2"] },
        { name: "Business Card", values: [false, true, true] },
        { name: "Stationery design: Letter Head &Envelope", values: [false, false, "5"] },
        { name: "Dedicated Account Manager", values: [true, true, true] },
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
                  <th key={i} className="text-black p-6 font-bold text-xl text-center w-[20%] border-l border-gray-200">
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#1A1A1A]">
              {pricingData.map((section, idx) => (
                <React.Fragment key={idx}>
                  {/* Features */}
                  {section.features.map((feature, fIdx) => (
                    <tr key={fIdx} className="hover:bg-white/5 transition-colors duration-150 border-b border-gray-300">
                      <td className={`p-5 text-white ${feature.isBold ? "font-bold" : "font-medium text-[15px]"}`}>
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
                                <div className="w-6 h-6 rounded-full border-2 border-white/40 flex items-center justify-center">
                                  <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                            <span className="text-white font-medium text-[15px]">
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
