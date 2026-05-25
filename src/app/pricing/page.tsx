"use client";

import React from "react";
import Link from "next/link";
import { IndianRupee, Layers, Send, Mail, Phone, MapPin, Shield } from "lucide-react";

export default function PricingPage() {
  const lastUpdated = "May 2026";

  const pricingSections = [
    {
      icon: <IndianRupee className="w-6 h-6 text-[#ff9900]" />,
      title: "Flexible & Result-Driven Pricing",
      content: (
        <p>
          At Flymedia Technology, our pricing is designed to offer flexible and result-driven solutions for businesses of different sizes. Our packages start from <strong>₹10,000</strong>, depending on the type of service, project requirements, features, design complexity, and overall scope of work.
        </p>
      )
    },
    {
      icon: <Layers className="w-6 h-6 text-[#ff9900]" />,
      title: "Customized Solutions for Every Need",
      content: (
        <div className="space-y-3">
          <p>
            We provide customized pricing for services such as website development, digital marketing, SEO, social media marketing, graphic designing, app development, branding, and other IT solutions. Final pricing may vary after understanding the client’s requirements in detail.
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "Website Development",
              "Digital Marketing",
              "SEO Services",
              "Social Media Marketing",
              "Graphic Designing",
              "App Development",
              "Branding",
              "IT Solutions"
            ].map((service, i) => (
              <span key={i} className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-orange-50 text-[#ff9900] text-xs font-semibold border border-orange-100">
                {service}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      icon: <Send className="w-6 h-6 text-[#ff9900]" />,
      title: "Get an Accurate Quotation",
      content: (
        <p>
          For an accurate quotation, clients are encouraged to contact our team and discuss their project needs. We will sit down with you to understand your goals, timeline, and exact scope to offer you the best rates.
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
            <IndianRupee className="w-10 h-10" />
          </div>
          <h1 id="pricing-page-heading" className="text-4xl md:text-6xl font-serif font-extrabold text-black tracking-tight leading-tight">
            Our Pricing Policy
          </h1>
          <div className="w-20 h-1.5 bg-[#ff9900] mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4 font-medium">
            Transparent, flexible, and value-driven packages starting from ₹10,000 at Flymedia Technology.
          </p>
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </section>

        {/* Introduction Box */}
        <section className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm leading-relaxed">
          <p className="text-base md:text-lg font-medium text-gray-700">
            Flymedia Technology believes in tailoring pricing models based on the project scale, features, design complexity, and specific demands. This ensures that you only pay for what your business actually needs to succeed in the digital sphere.
          </p>
        </section>

        {/* Pricing Sections */}
        <section className="space-y-6">
          {pricingSections.map((sec, idx) => (
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
            <h2 className="text-3xl font-serif font-bold text-[#ff9900]">Discuss Your Project Requirements</h2>
            <p className="text-gray-300 max-w-3xl leading-relaxed text-sm md:text-base font-medium">
              Want a customized quotation for your next project? Get in touch with our tech and marketing representatives. We're here to help you scope and scale efficiently.
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
