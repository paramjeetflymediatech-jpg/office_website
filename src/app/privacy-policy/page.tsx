"use client";

import React from "react";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, Mail, MapPin, Phone, CheckCircle } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "May 2026";

  const policySections = [
    {
      icon: <Eye className="w-6 h-6 text-[#ff9900]" />,
      title: "1. Information Collection & Usage",
      content: (
        <p>
          At Flymedia Technology, we respect your privacy and are committed to protecting your personal and business information. Any details shared with us, including name, phone number, email address, business information, website details, login credentials, or project-related data, are used only for communication, project development, support, and service delivery.
        </p>
      )
    },
    {
      icon: <FileText className="w-6 h-6 text-[#ff9900]" />,
      title: "2. Information Sharing & Disclosure",
      content: (
        <p>
          We do not sell, rent, or share your personal information with any third party for marketing purposes. However, certain information may be shared with trusted service providers only when required to complete a project or provide a requested service.
        </p>
      )
    },
    {
      icon: <Lock className="w-6 h-6 text-[#ff9900]" />,
      title: "3. Data Security",
      content: (
        <p>
          We take reasonable security measures to protect your data from unauthorized access, misuse, or disclosure. However, no online method of data transmission or storage is completely secure, so we cannot guarantee absolute security.
        </p>
      )
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#ff9900]" />,
      title: "4. Consent and Agreement",
      content: (
        <p>
          By using our website or services, you agree to the collection and use of information as described in this Privacy Policy.
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
            <Shield className="w-10 h-10" />
          </div>
          <h1 id="privacy-policy-heading" className="text-4xl md:text-6xl font-serif font-extrabold text-black tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <div className="w-20 h-1.5 bg-[#ff9900] mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4 font-medium">
            Your privacy is our priority. Read below to understand how we collect, protect, and handle your data at Flymedia Technology.
          </p>
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </section>

        {/* Legal Notice Box */}
        <section className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm leading-relaxed">
          <p className="text-base md:text-lg font-medium text-gray-700">
            Flymedia Technology ("us", "we", or "our") operates the website{" "}
            <Link href="/" className="text-[#ff9900] font-bold hover:underline">
              flymediatech.com
            </Link>{" "}
            and provides customized IT solutions, web development, website designing, and search engine optimization services. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and service suite.
          </p>
        </section>

        {/* Policy Sections */}
        <section className="space-y-6">
          {policySections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:border-orange-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                {sec.icon}
              </div>
              <div className="space-y-3 flex-grow">
                <h2 className="text-2xl font-bold text-gray-900">{sec.title}</h2>
                <div className="text-gray-650 leading-relaxed font-medium text-base md:text-[16.5px]">
                  {sec.content}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Contact/Support Info Section */}
        <section className="bg-gradient-to-br from-black to-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/5 space-y-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-[#ff9900]">5. Contact Our Privacy Officer</h2>
            <p className="text-gray-300 max-w-3xl leading-relaxed text-sm md:text-base font-medium">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with Flymedia Technology, please contact our support team. We will review your request and get back to you promptly.
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
