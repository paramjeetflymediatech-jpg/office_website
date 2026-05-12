"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Trophy, HelpCircle, PhoneCall } from "lucide-react";

export default function AustraliaPPCAndSEOPackages() {
  const plans = ["Starter", "Bronze", "Silver", "Gold"];
  
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
      category: "",
      features: [
        { name: "Number of keywords to be optimized", values: ["10", "20", "40", "80"], isBold: true }
      ]
    },
    {
      category: "Website Audit",
      features: [
        { name: "Search Engine Friendly Analysis", values: [true, true, true, true] },
        { name: "Link Popularity Analysis", values: [true, true, true, true] },
        { name: "Keywords Research and Analysis", values: [true, true, true, true] },
        { name: "Duplicate content analysis", values: [true, true, true, true] },
        { name: "Website Structure analysis", values: [false, true, true, true] },
        { name: "Competitor Analysis", values: [false, false, true, true] },
        { name: "Detailed SEO Plan", values: [true, true, true, true] }
      ]
    },
    {
      category: "SEO Compatibility Check",
      features: [
        { name: "Broken Links Check", values: [true, true, true, true] },
        { name: "Page Size Check", values: [false, false, true, true] },
        { name: "W3C Validation Check*", values: [false, false, true, true] },
        { name: "Browser Compatibility Check", values: [false, false, false, true] }
      ]
    },
    {
      category: "On-Page Optimization",
      features: [
        { name: "URL Mapping", values: [true, true, true, true] },
        { name: "URL Rewriting", values: [false, false, true, true] },
        { name: "Title Tag Optimization", values: ["Up to 10 pages", "Up to 20 pages", "Up to 40 pages", "Up to 80 pages"] },
        { name: "Meta Tags Optimization", values: [true, true, true, true] },
        { name: "Keyword Density, Proximity & Prominence Check", values: [true, true, true, true] },
        { name: "Anchor Text Optimization", values: [false, true, true, true] },
        { name: "Alt Tag Optimization", values: [false, true, true, true] },
        { name: "Custom 404 error page setup", values: [false, false, true, true] },
        { name: "Google Analytic Account Setup", values: [true, true, true, true] },
        { name: "Webmaster Tools (Google/Bing)Account Set Up", values: [true, true, true, true] },
        { name: "SEO Header Tag Optimization", values: [true, true, true, true] },
        { name: "Exiting Content Optimization", values: [true, true, true, true] },
        { name: "New Page Creation (If Required)", values: ["Up to 3", "Up to 5", "Up to 10", "Up to 15"] },
        { name: "URL Canonicalization Check", values: [true, true, true, true] },
        { name: "Robots.Txt Optimization", values: [true, true, true, true] },
        { name: "XML and TXT Sitemap Generation", values: [true, true, true, true] }
      ]
    },
    {
      category: "Off-Page Optimization and Link Building",
      features: [
        { name: "Social Bookmarking", values: [true, true, true, true] },
        { name: "Article Submission", values: [true, true, true, true] },
        { name: "Article Social Bookmarking", values: [true, true, true, true] },
        { name: "Press Release Submission**", values: [true, true, true, true] },
        { name: "Classifieds Submissions", values: [true, true, true, true] }
      ]
    },
    {
      category: "SEO Content Creation",
      features: [
        { name: "Article Writing", values: [true, true, true, true] },
        { name: "Press Release Writing", values: [false, false, true, true] },
        { name: "Review Writing", values: [false, false, false, false] }
      ]
    },
    {
      category: "Local Search Website Optimization",
      features: [
        { name: "Local Search Engine Submission", values: [true, true, true, true] },
        { name: "Updating local listing Pages", values: [false, false, true, true] },
        { name: "GEO Tagging", values: [false, true, true, true] },
        { name: "Google Business Listing", values: [false, true, true, true] },
        { name: "Yahoo Basic Business Listing", values: [false, true, true, true] },
        { name: "Bing Places Listing", values: [false, true, true, true] }
      ]
    },
    {
      category: "Blog Optimization",
      features: [
        { name: "Blog Creation", values: [false, true, true, true] },
        { name: "Blog Writing#", values: [false, false, true, true] },
        { name: "Blog Directory Submission", values: [false, true, true, true] },
        { name: "Blog RSS Submission", values: [false, true, true, true] }
      ]
    },
    {
      category: "Social Media Optimization",
      features: [
        { name: "Facebook Fan Page Creation", values: [true, true, true, true] },
        { name: "Regular Updates", values: [false, false, false, true] },
        { name: "Facebook TimeLine Design", values: [false, true, true, true] },
        { name: "Facebook Fan Page Like Integration", values: [true, true, true, true] },
        { name: "Twitter Page Creation", values: [true, true, true, true] },
        { name: "Regular Updates", values: [false, false, false, true] },
        { name: "Twitter Background Design", values: [false, true, true, true] },
        { name: "Twitter Follow Button Integration", values: [true, true, true, true] },
        { name: "Google+ Page Creation", values: [true, true, true, true] },
        { name: "Regular Updates", values: [false, false, false, true] },
        { name: "Google + Button Integration", values: [true, true, true, true] },
        { name: "LinkedIn Profile Creation", values: [true, true, true, true] },
        { name: "LinkedIn Company Page Creation", values: [false, false, true, true] },
        { name: "Regular Updates", values: [false, false, false, true] },
        { name: "Photo Sharing", values: [false, false, true, true] },
        { name: "Web 2.0 Profile Creation", values: [false, true, true, true] }
      ]
    },
    {
      category: "Video Promotion",
      features: [
        { name: "YouTube Channel Creation", values: [false, true, true, true] },
        { name: "YouTube - Custom background design and CSS", values: [false, true, true, true] },
        { name: "Video Submission to Other Video Websites", values: [false, false, true, true] }
      ]
    },
    {
      category: "Website Usability & Conversion",
      features: [
        { name: "Existing Website Designing Consultation", values: [true, true, true, true] },
        { name: "Landing Page Analysis", values: [true, true, true, true] },
        { name: "Enquiry Page Analysis", values: [true, true, true, true] },
        { name: "Enquiry Page Modification Suggestions", values: [true, true, true, true] },
        { name: "Mobile Compatibility Suggestions", values: [false, false, true, true] }
      ]
    },
    {
      category: "Reporting",
      features: [
        { name: "Traffic Log Analysis", values: [true, true, true, true] },
        { name: "Keywords Ranking Report", values: [true, true, true, true] },
        { name: "Monthly Progress Reports", values: [true, true, true, true] },
        { name: "Customer Support (Email, Chat)", values: [true, true, true, true] },
        { name: "Project Manager", values: [true, true, true, true] }
      ]
    },
    {
      category: "SEO Pricing",
      features: [
        { name: "Cost Per Month", values: ["Contact Us", "Contact Us", "Contact Us", "Contact Us"], isAction: true }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans">
      {/* Hero Header Section */}
      <section className="relative pt-12 pb-16 overflow-hidden bg-[#F1F1F1]">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight font-serif"
            >
              PPC Packages
            </h1>
            {/* <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Find the perfect digital growth blueprint for your brand. Replicated verbatim from our Elementor system and restyled under a sleek luxury dark theme with distinct visual plan highlights.
            </p> */}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Mobile swipe helper text */}
          <div className="block lg:hidden text-center text-xs text-gray-500 font-semibold mb-4 animate-pulse uppercase tracking-widest">
            Swipe left/right to view plans ➔
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-2xl border border-gray-300">
            <div className="min-w-[1000px]">
              <table className="w-full text-left border-collapse">
                
                {/* Header Row */}
                <thead>
                  <tr className="bg-white border-b border-gray-300">
                    <th className="text-black p-6 font-bold text-base uppercase tracking-wider w-[36%] font-sans">
                      Keywords
                    </th>
                    {plans.map((plan, i) => {
                      let planColors = "text-black";
                      let planBadge = null;

                      if (plan === "Starter") {
                        planColors = "text-black";
                      } else if (plan === "Bronze") {
                        planColors = "text-black";
                      } else if (plan === "Silver") {
                        planColors = "text-black";
                      } else if (plan === "Gold") {
                        planColors = "text-black";
                      }

                      return (
                        <th 
                          key={i} 
                          className="text-black p-6 font-extrabold text-xl text-center w-[16%] border-l border-gray-300 relative bg-gray-50/50"
                        >
                          {planBadge}
                          <span className={`${planColors} block uppercase tracking-tight`}>
                            {plan}
                          </span>
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="bg-[#1A1A1A]">
                  {pricingData.map((section, idx) => (
                    <React.Fragment key={idx}>
                      
                      {/* Section Category Header */}
                      <tr className="bg-white/95 border-b border-gray-300">
                        <td 
                          colSpan={5} 
                          className="p-5 font-extrabold text-black text-sm uppercase tracking-wider border-b border-gray-300 font-sans"
                        >
                          {section.category}
                        </td>
                      </tr>
                      
                      {/* Section Features */}
                      {section.features.map((feature, fIdx) => (
                        <tr 
                          key={fIdx} 
                          className="hover:bg-white/5 transition-colors duration-150 border-b border-gray-800"
                        >
                          <td className={`p-4 pl-6 text-gray-200 border-r border-gray-800 text-[14px] ${feature.isBold ? "font-bold text-white text-[15px]" : "font-medium"}`}>
                            {feature.name}
                          </td>
                          {feature.values.map((val, vIdx) => {
                            const isGoldColumn = plans[vIdx] === "Gold";

                            return (
                              <td 
                                key={vIdx} 
                                className={`p-4 border-l border-gray-800 text-center relative ${isGoldColumn ? "bg-white/[0.015]" : ""}`}
                              >
                                {typeof val === "boolean" ? (
                                  <div className="flex justify-center">
                                    {val ? (
                                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                      </div>
                                    ) : (
                                      <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                      </div>
                                    )}
                                  </div>
                                ) : feature.isAction ? (
                                  <div className="flex justify-center py-1">
                                    <Link 
                                      href="/contact-us" 
                                      className="inline-block bg-[#ff9900] text-black font-extrabold px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-md text-xs uppercase tracking-wider"
                                    >
                                      {val}
                                    </Link>
                                  </div>
                                ) : (
                                  <span className="text-gray-300 font-bold text-xs sm:text-sm leading-snug">
                                    {val}
                                  </span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>

              </table>
            </div>
          </div>

          {/* Bottom Notes / Disclaimers */}
          {/* <div className="mt-8 bg-white border border-gray-300 p-6 rounded-2xl space-y-2 text-xs md:text-sm text-gray-600 leading-relaxed font-sans shadow-sm">
            <p className="font-bold text-black flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#ff9900]" /> Package Disclaimers & Notes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>* W3C Validation check conforms strictly to the standard W3C validator markup guidelines.</li>
              <li>** Press release submission is subject to client approval and content availability from our writing teams.</li>
              <li># Blog writing includes keyword optimization and full design compatibility adjustments.</li>
            </ul>
          </div> */}

        </div>
      </section>

      {/* CTA Bottom Section */}
      {/* <section className="bg-black py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#ff9900]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-tight leading-tight">
            Need a Bespoke Campaign Strategy?
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our teams are ready to craft a tailor-made strategy aligned with your unique business goals. Connect with our Sydney-certified consultants to jumpstart your ROI today.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact-us" 
              className="inline-flex items-center gap-2 bg-[#ff9900] text-black hover:bg-white hover:text-black font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-widest shadow-xl transition-all duration-300 hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" /> Get in Touch with Us
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}
