"use client";

import React from "react";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, Mail, MapPin, Phone, HelpCircle } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "May 2026";

  const policySections = [
    {
      icon: <Eye className="w-6 h-6 text-[#ff9900]" />,
      title: "1. Information We Collect",
      content: (
        <div className="space-y-3">
          <p>
            We collect personal information that you voluntarily provide to us when you fill out forms, request quotes, apply for jobs, or communicate with us. This information may include:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Name, email address, phone number, and physical address.</li>
            <li>Business details, website URL, and digital marketing requirements.</li>
            <li>Resumes, employment history, and portfolios when applying for career opportunities.</li>
          </ul>
          <p>
            We also automatically collect certain technical data when you visit our website, including your IP address, browser type, operating system, and details about your browsing patterns via cookies and analytics tools.
          </p>
        </div>
      )
    },
    {
      icon: <FileText className="w-6 h-6 text-[#ff9900]" />,
      title: "2. How We Use Your Information",
      content: (
        <div className="space-y-3">
          <p>
            Fly Media Technology utilizes the collected data for various professional and operational purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>To formulate customized SEO, web design, development, and PPC packages.</li>
            <li>To deliver, monitor, and optimize our digital marketing services.</li>
            <li>To manage client accounts, process inquiries, and provide responsive 24/7 customer support.</li>
            <li>To analyze site performance, detect issues, and enhance the overall user experience of our website.</li>
            <li>To send periodic updates, newsletters, and marketing materials that align with your business growth.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Lock className="w-6 h-6 text-[#ff9900]" />,
      title: "3. Data Protection and Security",
      content: (
        <p>
          We employ robust administrative, technical, and physical security measures to safeguard your personal data from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or computer storage is 100% secure, and we cannot guarantee absolute data security.
        </p>
      )
    },
    {
      icon: <Shield className="w-6 h-6 text-[#ff9900]" />,
      title: "4. Third-Party Sharing and Disclosures",
      content: (
        <p>
          We do not sell, trade, or rent your personal identification information to third parties. We may share general compiled demographic information not linked to any personal identification regarding visitors and users with our trusted business partners, affiliate agencies, and advertisers for the purposes outlined above. We may also engage third-party service providers to help us run our operations (e.g. website analytics, payment gateway integrations) under strict confidentiality agreements.
        </p>
      )
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-[#ff9900]" />,
      title: "5. Cookies and Tracking Technologies",
      content: (
        <p>
          Our website uses cookies to enhance user convenience and track traffic trends. Cookies are small data files placed on your device. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the website may not function properly.
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
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-black tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <div className="w-20 h-1.5 bg-[#ff9900] mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4 font-medium">
            Your privacy is our priority. Read below to understand how we collect, protect, and handle your data at Fly Media Technology.
          </p>
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </section>

        {/* Legal Notice Box */}
        <section className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm leading-relaxed">
          <p className="text-base md:text-lg font-medium text-gray-700">
            Fly Media Technology ("us", "we", or "our") operates the website{" "}
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
            <h2 className="text-3xl font-serif font-bold text-[#ff9900]">6. Contact Our Privacy Officer</h2>
            <p className="text-gray-300 max-w-3xl leading-relaxed text-sm md:text-base font-medium">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with Fly Media Technology, please contact our support team. We will review your request and get back to you promptly.
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
