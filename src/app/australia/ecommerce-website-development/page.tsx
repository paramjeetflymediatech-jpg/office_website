"use client";

import React from "react";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export default function EcommerceWebsitePackages() {
  const plans = [
    { name: "BUDGET" },
    { name: "STARTER" },
    { name: "ADVANCED" },
    { name: "PRO" }
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
      category: "Core Features",
      features: [
        { name: "Number of Pages", values: ["Upto 25 Pages", "Upto 50 Pages", "Upto 100 Pages", "Unlimited"] },
        { name: "Website design concepts", values: ["1", "1", "2", "3"] },
        { name: "Content Changes", values: ["1", "1", "2", "5"] },
        { name: "Content Management System (CMS)", values: [true, true, true, true] },
        { name: "Number of Products", values: ["50", "100", "Unlimited", "Unlimited"] },
        { name: "Multiple payment Options", values: ["Only 1", "Upto 2", "Upto 3", "Upto 5"] },
        { name: "Analytics & Sales Reports", values: [false, true, true, true] },
        { name: "Full Order Management", values: ["Basic", true, true, true] },
        { name: "Shipping Management", values: [false, false, true, true] },
        { name: "Tax Management", values: [false, true, true, true] },
        { name: "Advanced Search Facility", values: [false, false, true, true] },
        { name: "Advance Filtering", values: [false, false, true, true] },
        { name: "Promotions & Discounts", values: [false, true, true, true] },
        { name: "Newsletter Signup", values: [false, false, true, true] },
        { name: "Blog", values: [false, false, true, true] },
        { name: "Zipcode Availability", values: [false, false, false, true] },
        { name: "Voucher Code", values: [false, false, false, true] },
        { name: "Quick View (Modal)", values: [false, false, false, true] },
        { name: "Cash on Delivery", values: [false, true, true, true] },
        { name: "Featured Products (Home Page)", values: [false, true, true, true] },
        { name: "Facebook Login", values: [false, true, true, true] },
        { name: "Credits System", values: [false, false, false, true] },
        { name: "Transaction Email API", values: [false, false, true, true] },
        { name: "SMS Integration", values: [false, false, true, true] },
        { name: "Visual Features: Slide show, Lightbox Gallery, Interactive map, Enquiry form", values: [true, true, true, true] },
        { name: "Social media: Facebook, Twitter, Google+, Linkedin Group page setup", values: [false, false, true, true] }
      ]
    },
    {
      category: "Domain, SEO & Hosting",
      features: [
        { name: "Email Accounts", values: [false, "2", "3", "5"] },
        { name: "Free .com Domain name", values: [true, true, true, true] },
        { name: "On Page SEO Features (SEO not included)", values: [true, true, true, true] },
        { name: "Google Analytics implementation", values: [true, true, true, true] },
        { name: "12 Months Website Hosting", values: [false, true, true, true] }
      ]
    },
    {
      category: "Support & Durations",
      features: [
        { name: "Duration of Project", values: ["2 Week", "3 Week", "3-4 Week", "5-6 Week"] },
        { name: "Training & Support", values: [false, true, true, true] },
        { name: "Support & Maintenance", values: ["1 Month", "3 Month", "6 Month", "1 Year"] }
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
      
      {/* 1. Page Header */}
      <section className="pt-16 pb-12 text-center max-w-7xl mx-auto px-6 space-y-4">
        <h1 
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl md:text-5xl font-serif font-bold text-black"
        >
          Ecommerce Website Development
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
                      {section.category !== "Core Features" && section.category !== "Pricing" && (
                        <tr className="bg-white">
                          <td colSpan={5} className="p-4 md:p-5 font-bold text-black text-xs md:text-sm uppercase tracking-wider border-b border-gray-300">
                            {section.category}
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
                                  {/* Custom handler for Full Order Management (Basic) */}
                                  {v === "Basic" ? (
                                    <span className="flex items-center justify-center gap-1.5">
                                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                      </svg>
                                      <span className="text-xs text-white/80">(Basic)</span>
                                    </span>
                                  ) : (
                                    v
                                  )}
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
