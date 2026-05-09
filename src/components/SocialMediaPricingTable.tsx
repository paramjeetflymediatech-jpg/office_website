"use client";

import React from "react";
import Link from "next/link";

const plans = [
  {
    name: "BASIC",
    subtitle: "(facebook only)",
    features: {
      contract: "No Minimum Contract Period",
      creation: true,
      updates: "30/Month",
      tabs: false,
      covers: false,
      events: false,
      reservation: false,
      rep: true,
      strategy: true,
      meetings: "1 Meeting/Month",
      calendar: true,
      workflow: true,
      likes: "50**",
      keyword: false,
      brand: false,
      analytics: true,
    },
    ctaLink: "/contact-us",
  },
  {
    name: "VALUE",
    subtitle: "(any 2)",
    features: {
      contract: "No Minimum Contract Period",
      creation: true,
      updates: "30/Month/Per Channel",
      tabs: true,
      covers: true,
      events: true,
      reservation: true,
      rep: true,
      strategy: true,
      meetings: "2 Meetings/Month",
      calendar: true,
      workflow: true,
      likes: "100** (FB Only)",
      keyword: false,
      brand: false,
      analytics: true,
    },
    ctaLink: "/contact-us",
  },
  {
    name: "STANDARD",
    subtitle: "(any 3)",
    features: {
      contract: "No Minimum Contract Period",
      creation: true,
      updates: "40/Month/Per Channel",
      tabs: true,
      covers: true,
      events: true,
      reservation: true,
      rep: true,
      strategy: true,
      meetings: "3 Meetings/Month",
      calendar: true,
      workflow: true,
      likes: "200** (FB Only)",
      keyword: true,
      brand: true,
      analytics: true,
    },
    ctaLink: "/contact-us",
  },
  {
    name: "PREMIUM",
    subtitle: "(any 4)",
    features: {
      contract: "No Minimum Contract Period",
      creation: true,
      updates: "60/Month/Per Channel",
      tabs: true,
      covers: true,
      events: true,
      reservation: true,
      rep: true,
      strategy: true,
      meetings: "As Needed",
      calendar: true,
      workflow: true,
      likes: "500** (FB Only)",
      keyword: true,
      brand: true,
      analytics: true,
    },
    ctaLink: "/contact-us",
  },
];

const featureGroups = [
  {
    title: "General",
    rows: [
      { label: "Minimum Contract Duration", key: "contract" },
    ],
  },
  {
    title: "PROFILE MANAGEMENT",
    rows: [
      { label: "Account Creation (If Needed)", key: "creation" },
      { label: "Time-Optimized Updates", key: "updates" },
      { label: "Custom Facebook Tabs (If needed)", key: "tabs" },
      { label: "Custom Cover Photos", key: "covers" },
      { label: "Event & Group Creation", key: "events" },
      { label: "Profile Reservation", key: "reservation" },
    ],
  },
  {
    title: "ACCOUNT MANAGEMENT",
    rows: [
      { label: "Dedicated Account Representative", key: "rep" },
      { label: "Marketing Strategy", key: "strategy" },
      { label: "Planning/Strategy Meetings", key: "meetings" },
      { label: "Content Calendar and Layout", key: "calendar" },
      { label: "Workflow Development", key: "workflow" },
      { label: "New Likes per month", key: "likes" },
    ],
  },
  {
    title: "MONITORING",
    rows: [
      { label: "Keyword Monitoring", key: "keyword" },
      { label: "Brand Mentions & Monitoring", key: "brand" },
    ],
  },
  {
    title: "REPORTS",
    rows: [
      { label: "Monthly Analytics & Metrics Report", key: "analytics" },
    ],
  },
];

export default function SocialMediaPricingTable() {
  return (
    <div className="py-20 bg-white font-sans">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-4 uppercase tracking-tight">
          Social Media Packages
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto uppercase tracking-widest text-[10px] font-bold">
          Social Media Networks – Facebook, Twitter, LinkedIn, Instagram, Pinterest, YouTube
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto pb-10">
          <div className="min-w-[900px] border border-gray-300 rounded-lg overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white border-b border-gray-300">
                  <th className="text-black p-6 font-bold text-lg uppercase tracking-tight w-[28%] font-serif">
                    CHOOSE YOUR PLAN
                  </th>
                  {plans.map((plan, i) => (
                    <th key={i} className="text-black p-6 font-bold text-center w-[18%] border-l border-gray-300 font-serif">
                      <div className="flex flex-col gap-1">
                        <span className="text-xl font-bold uppercase tracking-tight leading-tight">{plan.name}</span>
                        <span className="text-[10px] font-medium opacity-80 uppercase tracking-widest italic">{plan.subtitle}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-[#1A1A1A]">
                {featureGroups.map((group, groupIdx) => (
                  <React.Fragment key={groupIdx}>
                    <tr className="bg-white">
                      <td colSpan={5} className="p-4 md:p-5 font-bold text-black text-xs sm:text-sm uppercase tracking-wider border-b border-gray-300 font-serif">
                        {group.title}
                      </td>
                    </tr>
                    {group.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className="hover:bg-white/5 transition-colors duration-150 border-b border-gray-300">
                        <td className="p-5 text-white font-medium text-[14px]">
                          {row.label}
                        </td>
                        {plans.map((plan) => {
                          const val = (plan.features as any)[row.key];
                          return (
                            <td key={plan.name} className="p-5 border-l border-gray-300 text-center relative group">
                              {typeof val === 'boolean' ? (
                                <div className="flex justify-center">
                                  {val ? (
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
                              ) : (
                                <span className="text-white font-medium text-[13px] sm:text-[14px] leading-snug block max-w-[200px] mx-auto">
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
                
                {/* Cost Per Month / Pricing Action Row */}
                <tr className="bg-white border-t border-gray-300">
                  <td colSpan={5} className="p-4 md:p-5 font-bold text-black text-xs sm:text-sm uppercase tracking-wider border-b border-gray-300 font-serif">
                    Pricing
                  </td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors duration-150 border-b border-gray-300">
                  <td className="p-5 text-white font-bold text-[14px]">
                    Cost Per Month
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="p-5 border-l border-gray-300 text-center">
                      <div className="flex justify-center py-2">
                        <Link 
                          href={plan.ctaLink}
                          className="inline-block bg-[#ff9900] text-white font-bold px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105 shadow-lg text-xs uppercase tracking-wide"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-[11px] text-gray-400 italic mt-4 text-center">
          **Followers cannot be guaranteed without any paid activity
        </p>
      </div>
    </div>
  );
}
