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
      {/* 2. Headline & Pricing Table */}
      <section id="pricing-table" className="py-20 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-bold text-black mb-4 font-serif"
          >
            Logo Design 
          </h2>
                  </div>

        {/* Premium Table Component */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="min-w-[850px] bg-white  overflow-hidden shadow-2xl border border-gray-200">
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


    </main>
  );
}
