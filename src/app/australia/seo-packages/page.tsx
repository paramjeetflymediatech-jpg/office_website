"use client";

import React from "react";
import SEOPricingTable from "@/components/SEOPricingTable";
import ContactFormSection from "@/components/ContactFormSection";


export default function SEOPackagesAustralia() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans ">
      
      {/* 1. Page Header & Introduction */}
      <section className="pt-16 pb-12 text-center max-w-7xl mx-auto px-6 space-y-4">
        <h1 
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl md:text-5xl font-serif font-bold text-black"
        >
          SEO Packages 
        </h1>
</section>

      {/* 2. Interactive Pricing Table */}
      <section className="pb-12">
        <SEOPricingTable />
      </section>

      <ContactFormSection />
    </main>
  );
}
