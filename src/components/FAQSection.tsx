"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Where is Flymedia Technology located and do you serve clients internationally?",
    answer: "Flymedia Technology is located in Ludhiana, Punjab, India providing digital marketing services for fourteen years without lagging behind. Yes, we do serve clients internationally as well with firm commitments."
  },
  {
    question: "What is the average time to see SEO results with Flymedia Technology?",
    answer: "You can see the positive results regarding SEO ranking in an average time between six to twelve months. At Flymedia Technology, we are determined to provide the desirable SEO results within a few months and make your business known to the world."
  },
  {
    question: "Do you work with startups, small businesses, and large enterprises alike?",
    answer: "Yes, we cater to businesses of all sizes, from early-stage startups to established large-scale enterprises, tailoring our strategies to meet specific growth goals."
  },
  {
    question: "Do you offer local SEO for small businesses in India, UK, Canada, or Australia?",
    answer: "Absolutely. We specialize in local SEO strategies that help businesses dominate their local search results across various international markets including the UK, Canada, and Australia."
  },
  {
    question: "What types of websites do you build — corporate, e-commerce, custom portals?",
    answer: "We build all types of websites including professional corporate sites, high-converting e-commerce platforms, and complex custom web portals tailored to your functional needs."
  },
  {
    question: "How do you measure and report marketing campaign performance?",
    answer: "We use advanced analytics tools to track KPIs like traffic, conversion rates, and ROI. You receive detailed monthly reports with transparent insights into your campaign's performance."
  },
  {
    question: "Do you create WordPress and WooCommerce websites?",
    answer: "Yes, we are experts in WordPress development and WooCommerce integration, creating fast, secure, and SEO-friendly sites that are easy for you to manage."
  },
  {
    question: "Do you build custom WooCommerce or Shopify stores?",
    answer: "We specialize in both WooCommerce and Shopify, providing custom design and development services to create unique online shopping experiences for your customers."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base font-medium">
            Striving for quality, the best digital marketing company in Ludhiana ensures an effective flow of communication by addressing all the concerns of the clients associated with their digital success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index} 
              className="border border-[#fdf0e1] rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                  openIndex === index ? "bg-[#fdf0e1]" : "bg-white hover:bg-[#fdf0e1]/30"
                }`}
              >
                <span className="text-[15px] md:text-[16px] font-bold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 bg-[#fdf0e1] text-gray-700 text-sm md:text-base leading-relaxed border-t border-white/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
