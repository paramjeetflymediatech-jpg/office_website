"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PPCPricingTable() {
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
      category: "Keywords",
      features: [
        { name: "Number of keywords to be optimized", values: ["10", "20", "40", "80"] }
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
        { name: "Detailed SEO Plan", values: [true, true, true, true] },
      ]
    },
    {
      category: "SEO Compatibility Check",
      features: [
        { name: "Broken Links Check", values: [true, true, true, true] },
        { name: "Page Size Check", values: [false, false, true, true] },
        { name: "W3C Validation Check*", values: [false, false, true, true] },
        { name: "Browser Compatibility Check", values: [false, false, false, true] },
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
        { name: "XML and TXT Sitemap Generation", values: [true, true, true, true] },
      ]
    },
    {
      category: "Off-Page Optimization and Link Building",
      features: [
        { name: "Social Bookmarking", values: [true, true, true, true] },
        { name: "Article Submission", values: [true, true, true, true] },
        { name: "Article Social Bookmarking", values: [true, true, true, true] },
        { name: "Press Release Submission**", values: [true, true, true, true] },
        { name: "Classifieds Submissions", values: [true, true, true, true] },
      ]
    },
    {
      category: "SEO Content Creation",
      features: [
        { name: "Article Writing", values: [true, true, true, true] },
        { name: "Press Release Writing", values: [false, false, true, true] },
        { name: "Review Writing", values: [false, false, false, false] },
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
        { name: "Bing Places Listing", values: [false, true, true, true] },
      ]
    },
    {
      category: "Blog Optimization",
      features: [
        { name: "Blog Creation", values: [false, true, true, true] },
        { name: "Blog Writing#", values: [false, false, true, true] },
        { name: "Blog Directory Submission", values: [false, true, true, true] },
        { name: "Blog RSS Submission", values: [false, true, true, true] },
      ]
    },
    {
      category: "Social Media Optimization",
      features: [
        { name: "Facebook Fan Page Creation", values: [true, true, true, true] },
        { name: "Facebook Regular Updates", values: [false, false, false, true] },
        { name: "Facebook TimeLine Design", values: [false, true, true, true] },
        { name: "Facebook Fan Page Like Integration", values: [true, true, true, true] },
        { name: "Twitter Page Creation", values: [true, true, true, true] },
        { name: "Twitter Regular Updates", values: [false, false, false, true] },
        { name: "Twitter Background Design", values: [false, true, true, true] },
        { name: "Twitter Follow Button Integration", values: [true, true, true, true] },
        { name: "Google+ Page Creation", values: [true, true, true, true] },
        { name: "Google+ Regular Updates", values: [false, false, false, true] },
        { name: "Google + Button Integration", values: [true, true, true, true] },
        { name: "LinkedIn Profile Creation", values: [true, true, true, true] },
        { name: "LinkedIn Company Page Creation", values: [false, false, true, true] },
        { name: "LinkedIn Regular Updates", values: [false, false, false, true] },
        { name: "Photo Sharing", values: [false, false, true, true] },
        { name: "Web 2.0 Profile Creation", values: [false, true, true, true] },
      ]
    },
    {
      category: "Video Promotion",
      features: [
        { name: "YouTube Channel Creation", values: [false, true, true, true] },
        { name: "YouTube - Custom background design and CSS", values: [false, true, true, true] },
        { name: "Video Submission to Other Video Websites", values: [false, false, true, true] },
      ]
    },
    {
      category: "Website Usability & Conversion",
      features: [
        { name: "Existing Website Designing Consultation", values: [true, true, true, true] },
        { name: "Landing Page Analysis", values: [true, true, true, true] },
        { name: "Enquiry Page Analysis", values: [true, true, true, true] },
        { name: "Enquiry Page Modification Suggestions", values: [true, true, true, true] },
        { name: "Mobile Compatibility Suggestions", values: [false, false, true, true] },
      ]
    },
    {
      category: "Reporting",
      features: [
        { name: "Traffic Log Analysis", values: [true, true, true, true] },
        { name: "Keywords Ranking Report", values: [true, true, true, true] },
        { name: "Monthly Progress Reports", values: [true, true, true, true] },
        { name: "Customer Support (Email, Chat)", values: [true, true, true, true] },
        { name: "Project Manager", values: [true, true, true, true] },
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
          className="min-w-[900px] border border-gray-300 rounded-lg overflow-hidden shadow-2xl"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-300">
                <th className="text-black p-6 font-bold text-lg uppercase tracking-tight w-[35%]">
                  Features
                </th>
                {plans.map((plan, i) => (
                  <th key={i} className="text-black p-6 font-bold text-xl text-center w-[16.25%] border-l border-gray-300">
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#1A1A1A]">
              {pricingData.map((section, idx) => (
                <React.Fragment key={idx}>
                  {/* Category Header */}
                  {section.category !== "Keywords" && section.category !== "Pricing" && (
                    <tr className="bg-white">
                      <td colSpan={5} className="p-4 md:p-5 font-bold text-black text-sm uppercase tracking-wider border-b border-gray-300">
                        {section.category}
                      </td>
                    </tr>
                  )}
                  {section.category === "Pricing" && (
                    <tr className="bg-white">
                      <td colSpan={5} className="p-4 md:p-5 font-bold text-black text-sm uppercase tracking-wider border-b border-gray-300">
                        PPC Pricing
                      </td>
                    </tr>
                  )}
                  
                  {/* Features */}
                  {section.features.map((feature, fIdx) => (
                    <tr key={fIdx} className="hover:bg-white/5 transition-colors duration-150 border-b border-gray-300">
                      <td className={`p-5 text-white ${feature.isAction ? "font-bold text-white" : "font-medium text-[15px]"}`}>
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
