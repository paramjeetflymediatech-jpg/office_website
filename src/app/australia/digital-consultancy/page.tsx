"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Search,
  Users,
  Target,
  ArrowRight,
  ChevronsRight,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function DigitalConsultancy() {
  const strategyCards = [
    {
      title: "Mobile Marketing",
      desc: "Our fully dedicated mobile marketing team specializes in advertising and building connections over mobile devices. We configure tailored push notifications, instant messaging, and audience categorization to connect with customers instantly.",
      icon: <Smartphone size={24} className="text-black" />
    },
    {
      title: "Consumer Behaviors",
      desc: "Our specialized analytical team observes and tracks consumer behavior. By monitoring views, ratings, and customer feedback, we make data-driven decisions to optimize your business products and services for maximum conversions.",
      icon: <Users size={24} className="text-black" />
    },
    {
      title: "Search Visibility",
      desc: "Boost your website's search engine presence and make your business stand out from competitors. Gaining consistent authority and a highly profitable ROI is our focus, ensuring cost-effective growth for your enterprise.",
      icon: <Search size={24} className="text-black" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans">
      {/* 1. Hero Section */}
      <section className="relative py-10  overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#ff9900_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Titles & Descriptions */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-4xl md:text-6xl font-bold text-black leading-tight"
                >
                  Digital Marketing Consultancy SEO Consultants Sydney
                </h1>
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                Digital Marketing Consultancy Services
              </h2>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Gaining consistency and a profitable ROI is the main objective of our digital agency. If you are located in <span className="text-black font-semibold">Stanhope Gardens, Blacktown</span>, or anywhere across Sydney, our team of experts is here to ensure cost-effectiveness while keeping your business up to the mark.
                </p>
                <p>
                  A sound digital strategy focuses on gaining popularity, reducing overheads, maximizing efficiency, and connecting deeply with your target market. With the extensive usage of social media platforms and search engines like Google, placing your brand directly in front of active searchers is the absolute key to success.
                </p>
              </div>

              {/* <div className="pt-4">
                <Link
                  href="#get-started"
                  className="inline-flex items-center gap-2 text-black font-bold px-8 py-4 rounded-full shadow-lg shadow-[#ff9900]/20 hover:bg-black hover:text-[#ff9900] transition-colors duration-300"
                >
                  Explore Strategies <ArrowRight size={18} />
                </Link>
              </div> */}
            </div>

            {/* Right Column: High-fidelity concept image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-square max-w-[500px] rounded-[3rem] overflow-hidden e p-4">
                <Image
                  src="https://flymediatech.com/australia/wp-content/uploads/2024/03/bestr-it.png"
                  alt="SEO & Digital Marketing Concept"
                  fill
                  className="object-contain p-4"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
