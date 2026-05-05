"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X } from "lucide-react";

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
    highlight: true,
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
    <div className="py-20 bg-white">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif font-black uppercase tracking-tighter mb-4"
        >
          Social Media <span className="text-[#ff9900]">Packages</span>
        </motion.h2>
        <p className="text-gray-500 max-w-3xl mx-auto uppercase tracking-widest text-[10px] font-bold">
          Social Media Networks – Facebook, Twitter, LinkedIn, Instagram, Pinterest, YouTube
        </p>
        <div className="h-1 w-24 bg-[#ff9900] mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Table */}
        <div className="hidden xl:block overflow-x-auto pb-10">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-xs font-black uppercase tracking-tighter bg-gray-50 border-b-2 border-gray-100 w-[250px] font-serif">Features</th>
                {plans.map((plan) => (
                  <th key={plan.name} className={`p-6 text-center border-b-2 ${plan.highlight ? 'bg-[#ff9900] text-black border-[#ff9900]' : 'bg-black text-white border-black'}`}>
                    <div className="flex flex-col gap-1 font-serif">
                      <span className="text-2xl font-black uppercase tracking-tight">{plan.name}</span>
                      <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest italic">{plan.subtitle}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureGroups.map((group, groupIdx) => (
                <React.Fragment key={groupIdx}>
                  <tr className="bg-gray-100/50">
                    <td colSpan={5} className="p-3 text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 border-b border-gray-200">
                      {group.title}
                    </td>
                  </tr>
                  {group.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="group hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-gray-700 border-b border-gray-100 uppercase tracking-tighter text-[10px] leading-tight">
                        {row.label}
                      </td>
                      {plans.map((plan) => {
                        const val = (plan.features as any)[row.key];
                        return (
                          <td key={plan.name} className="p-4 text-center border-b border-gray-100">
                            {typeof val === 'boolean' ? (
                              val ? (
                                <Check className="w-4 h-4 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-4 h-4 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-[10px] font-bold text-gray-900">{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
              <tr>
                <td className="p-4 border-b border-gray-100">
                  <span className="text-[9px] text-gray-400 italic">**Followers cannot be guaranteed without paid activity</span>
                </td>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-6 text-center border-b border-gray-100">
                    <Link 
                      href={plan.ctaLink}
                      className={`inline-block w-full max-w-[140px] py-3 text-[10px] font-black uppercase tracking-tighter rounded-sm transition-all ${
                        plan.highlight 
                          ? 'bg-black text-white hover:bg-[#ff9900] hover:text-black shadow-xl' 
                          : 'bg-[#ff9900] text-black hover:bg-black hover:text-white shadow-lg'
                      }`}
                    >
                      Contact Us
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Card View */}
        <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-sm overflow-hidden border ${plan.highlight ? 'border-[#ff9900] shadow-2xl relative z-10' : 'border-gray-200 shadow-xl'}`}
            >
              <div className={`p-6 text-center ${plan.highlight ? 'bg-[#ff9900] text-black' : 'bg-black text-white'}`}>
                <h3 className="text-2xl font-black uppercase tracking-tight">{plan.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-1">{plan.subtitle}</p>
              </div>
              <div className="bg-white p-6 space-y-6">
                {featureGroups.map((group, groupIdx) => (
                  <div key={groupIdx} className="space-y-3">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-1">{group.title}</h4>
                    {group.rows.map((row, rowIdx) => {
                      const val = (plan.features as any)[row.key];
                      return (
                        <div key={rowIdx} className="flex justify-between items-center text-[10px]">
                          <span className="font-bold text-gray-500 uppercase tracking-tighter pr-4">{row.label}</span>
                          <span className="font-bold text-gray-900 text-right shrink-0">
                            {typeof val === 'boolean' ? (
                              val ? <Check className="w-4 h-4 text-green-500 ml-auto" /> : <X className="w-4 h-4 text-red-500 ml-auto" />
                            ) : val}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
                <div className="pt-6 border-t border-gray-100">
                  <Link 
                    href={plan.ctaLink}
                    className={`block w-full text-center py-4 font-black uppercase tracking-tighter rounded-sm transition-all ${
                      plan.highlight ? 'bg-black text-white' : 'bg-[#ff9900] text-black'
                    }`}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
