"use client";

import React, { useState } from "react";
import ServicePage from "@/components/ServicePage";
import SEOPricingTable from "@/components/SEOPricingTable";
import ContactFormSection from "@/components/ContactFormSection";

const SEO_FAQS = [
  {
    question: "Do I need SEO for my Website?",
    answer: "Yes, you need SEO for your Website. SEO strategies ensure that your Website is visible on search platforms, which hinders potential clients from locating your services. The SEO strategy helps your Website to gain credibility and trust and makes it competitive."
  },
  {
    question: "How can I get SEO services?",
    answer: "In order to get SEO services, first analyze your business goals, such as increasing sales, gaining rankings, and improving local traffic, then get in touch with the best SEO services in Ludhiana for the experts to start working on your business."
  },
  {
    question: "What is SEO all about?",
    answer: "Search Engine Optimization is a strategy that optimizes site structure, technical elements and the content to improve visibility on search engines such as Google. It helps to create relevant content, it helps to build credibility and authority, improves site performance and helps to generate traffic."
  },
  {
    question: "How does SEO operate?",
    answer: "SEO operates using a number of strategies; it focuses on working on the core pillars of SEO, which are: On-page SEO, which works on creating relevant content, technical SEO by ensuring that the Website is fast, it is mobile-friendly and secure and Off-page SEO, which works on creating backlinks which act as votes to boost the brand’s presence."
  },
  {
    question: "How long does it take to start seeing results after applying an SEO strategy?",
    answer: "Initial results may start to show after 1 month or 6 months, and significant progress can be seen in 12 months. This is dependent on competition, site age and consistency in applying effort."
  },
  {
    question: "What is the connection between SEO and the Google algorithm?",
    answer: "SEO ensures that your Website has relevant content and that Google’s algorithm can be used for the user. Hence, your content can only be visible if Google’s algorithm finds the Website competent, trustworthy and relevant for the user."
  },
  {
    question: "How can I find keywords?",
    answer: "Finding keywords requires analyzing main or common topics, using tools such as Google autocomplete and Google trends and also analyzing the competitors to find specific long-tail phrases."
  },
  {
    question: "What are the strategies used in SEO?",
    answer: "SEO utilizes various strategies to ensure visibility, such as targeting keywords, building authoritative backlinks, creating high-quality content, optimizing site structure for speed and mobile usability and utilizing schema markup."
  },
  {
    question: "What is a sitemap all about?",
    answer: "A sitemap is a list of important pages that act as a road map for search engines to effectively discover, crawl, and index content. The types of sitemaps include: XML sitemap, HTML sitemap."
  },
  {
    question: "How can I increase online visibility for my business?",
    answer: "In order to increase visibility for your business, ensure to optimize your Website with SEO strategies, claim your Google Business Profile for local searches, create consistent blog content, engage on social media platforms and utilize paid Ads. These strategies can be done by experts in digital marketing services in Ludhiana."
  },
  {
    question: "How much will it cost me to set up SEO for my business?",
    answer: "It generally costs around Rs. 7,000 to Rs. 60,000 per month to set up the best SEO services in Sydney, which is dependent on the competition and business size."
  },
  {
    question: "How much does it cost to have a business website?",
    answer: "Having a website can cost around Rs. 20,000 to Rs. 5,00,000, which is dependent on the complexity of the Website."
  },
  {
    question: "What are the factors to consider when choosing SEO services?",
    answer: "When planning on getting the best SEO services in Ludhiana, opt for agencies that offer explicit strategies; they should have proven results, case studies, and analyze them with your goals."
  }
];

export default function SEOPackages() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const data = {
    title: "SEO Packages India | Flymedia Technology",
    h1: ["SEO Services"],
    paragraphs: [
      "Dominate search engine rankings with our proven SEO packages. We deliver targeted strategies to increase your visibility, drive organic traffic, and boost your business growth.",
    ],
    images: [],
    folderName: "flymediatech.com__seo-packages-india"
  };

  // Structured data schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SEO_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <ServicePage {...data} bgClass="bg-[#F1F1F1]">
      <div className="pt-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
          SEO Packages
        </h1>
        <div className="h-1.5 w-24 bg-[#ff9900] rounded-full mx-auto"></div>
      </div>
      
      <div className="pb-24">
        <SEOPricingTable />
      </div>

      {/* FAQ Section */}
      <section className="bg-[#F1F1F1] py-20 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
              FAQ
            </h2>
            <div className="h-1 w-16 bg-[#ff9900] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            {SEO_FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="mb-2 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-all bg-[#F1F1F1] border-b-2 border-[#FA7E09] rounded-[10px] min-h-[90px] hover:bg-gray-150 transition-colors duration-150"
                >
                  <span className="text-[16px] md:text-[18px] font-semibold text-black pr-4 leading-tight">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-bold text-black shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 bg-white text-gray-750 text-[14px] md:text-[15px] leading-relaxed border border-gray-200 rounded-[5px] shadow-sm">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 2) }}
      />
    </ServicePage>
  );
}
