"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ChevronRight } from "lucide-react";
import LocationPortfolio from "@/components/LocationPortfolio";

export default function CanadaPortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20 font-sans text-black">
      {/* Premium Hero Banner Section */}
      <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/portfolio/bannerimg.avif"
            alt="Canada Portfolio Banner"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-gray-50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 space-y-5">
          <div className="inline-block bg-[#ff9900]/10 border border-[#ff9900]/30 px-4 py-1.5 rounded-full text-[#ff9900] font-bold tracking-[0.25em] uppercase text-xs">
            Canadian Excellence
          </div>
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight"
          >
            Our Work in <span className="text-[#ff9900]">Canada</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Explore our curated portfolio of high-converting web applications, mobile apps, and search optimization triumphs engineered for Canadian enterprises.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 min-h-[500px]">
          <LocationPortfolio location="canada" />
        </div>
      </div>

      {/* Case Studies Section */}
      <section className="max-w-7xl mx-auto px-6 mt-24 border-t border-gray-200/60 pt-16">
        <div className="text-center mb-12 space-y-3 max-w-2xl mx-auto">
          <span className="text-[#ff9900] font-bold tracking-widest uppercase text-xs sm:text-sm">
            Success Stories
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-4xl font-serif font-bold text-black"
          >
            Featured Digital Case Studies
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Discover the strategic blueprint and exceptional outcomes behind our digital marketing transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Restaurant Website Design & Development",
              desc: "Flymedia Technology case study for high-performance hospitality web solutions.",
              image: "/portfolio/1.avif",
              link: "/portfolio/flymedia-technology-case-study-for-australian-restaurant/"
            },
            {
              title: "Transformative Car Rentals Digital Journey",
              desc: "Accelerating reservation volume and search visibility through customized digital marketing techniques.",
              image: "/portfolio/2.avif",
              link: "/portfolio/fly-media-technology-case-study-for-car-rentals/"
            },
            {
              title: "Boosting Enterprise Digital Growth",
              desc: "Strategic search domination and UI/UX modernization for technology service providers.",
              image: "/portfolio/3.avif",
              link: "/portfolio/fly-media-technology-case-study-for-a-technology-company/"
            }
          ].map((study, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#ff9900] transition-colors"
                  >
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {study.desc}
                  </p>
                </div>

                <Link href={study.link} target="_blank" className="pt-2 inline-block">
                  <button className="flex items-center gap-2 text-sm font-bold text-black group/btn hover:text-[#ff9900] transition-colors">
                    Read Full Story
                    <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center group-hover/btn:bg-[#ff9900] transition-colors">
                      <ChevronRight size={12} />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Callout */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="bg-[#111111] rounded-3xl p-10 sm:p-14 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff9900]/10 via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-tight"
            >
              Inspired by Our Canadian Success Stories?
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Partner with Flymedia Technology to build a breathtaking website, native mobile application, or high-ROI digital campaign tailored to your goals.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff9900] px-8 py-4 text-sm font-bold text-black transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg uppercase tracking-wider"
              >
                Start Your Project
              </Link>
              <Link
                href="tel:+919888484310"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-black active:scale-95 uppercase tracking-wider backdrop-blur-sm"
              >
                <Phone size={16} />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
