"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, HelpCircle, Eye, Layers, Mail, Phone, MapPin } from "lucide-react";

export default function RefundPolicyPage() {
  const lastUpdated = "May 2026";

  const refundSections = [
    {
      icon: <AlertCircle className="w-6 h-6 text-[#ff9900]" />,
      title: "1. No-Refund Policy",
      content: (
        <p>
          Flymedia Technology does not provide any refund once the payment is made. All payments made to us are final.
        </p>
      )
    },
    {
      icon: <Layers className="w-6 h-6 text-[#ff9900]" />,
      title: "2. Covered Services",
      content: (
        <p>
          All payments made for services, packages, consultations, development work, marketing campaigns, designing, or any other digital service are non-refundable.
        </p>
      )
    },
    {
      icon: <Eye className="w-6 h-6 text-[#ff9900]" />,
      title: "3. Service Review Recommendation",
      content: (
        <p>
          Clients are requested to review all service details, package scopes, and project terms carefully before making payment. If you have questions about what is included, please clarify them with our team beforehand.
        </p>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3F4F6] px-4 py-12 md:py-20 font-sans text-gray-850">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <div className="inline-flex p-3 bg-orange-50 rounded-2xl text-[#ff9900] mb-2">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h1 id="refund-policy-page-heading" className="text-4xl md:text-6xl font-serif font-extrabold text-black tracking-tight leading-tight">
            Refund Policy
          </h1>
          <div className="w-20 h-1.5 bg-[#ff9900] mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4 font-medium">
            Please read our refund policies carefully before initiating any payments for Flymedia Technology services.
          </p>
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </section>

        {/* Policy Notice Box */}
        <section className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm leading-relaxed">
          <p className="text-base md:text-lg font-medium text-gray-700">
            This Refund Policy governs all payments processed for customized website designing, search engine optimization (SEO), digital marketing, and software development provided by Flymedia Technology.
          </p>
        </section>

        {/* Refund Policy Sections */}
        <section className="space-y-6">
          {refundSections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:border-orange-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                {sec.icon}
              </div>
              <div className="space-y-3 flex-grow">
                <h2 className="text-2xl font-bold text-gray-900">{sec.title}</h2>
                <div className="text-gray-655 leading-relaxed font-medium text-base md:text-[16.5px]">
                  {sec.content}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Contact/Support Info Section */}
        <section className="bg-gradient-to-br from-black to-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/5 space-y-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-[#ff9900]">Need Clarification Before Payment?</h2>
            <p className="text-gray-300 max-w-3xl leading-relaxed text-sm md:text-base font-medium">
              If you have any questions or concerns regarding our Refund Policy, package definitions, or scopes of work, please connect with us before proceeding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff9900]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email Us</p>
                <a href="mailto:anujguptaflymedia@gmail.com" className="text-sm font-bold text-white hover:text-[#ff9900] transition-colors">
                  anujguptaflymedia@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff9900]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Call Support</p>
                <a href="tel:+919888484310" className="text-sm font-bold text-white hover:text-[#ff9900] transition-colors">
                  +91-98884-84310
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff9900]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Head Office</p>
                <p className="text-sm font-bold text-gray-200">
                  Ludhiana, Punjab, India
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
