"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Link2,
  TrendingUp,
  Search,
  Share2,
  Globe,
  CheckCircle,
  Zap,
  ChevronRight,
  ShieldCheck,
  Award,
  Users
} from "lucide-react";

export default function OffPageSeoSydney() {
  const pillars = [
    {
      title: "Strategic Link Building",
      desc: "Acquire high-authority editorial links from trusted, industry-relevant sites to transfer link equity (link juice) and build search engine trust.",
      icon: <Link2 className="w-8 h-8 text-[#EC7317]" />
    },
    {
      title: "Social Media Promotion",
      desc: "Amplify your content's reach across digital communities to boost brand signals, drive engagement, and generate natural secondary backlink flows.",
      icon: <Share2 className="w-8 h-8 text-[#EC7317]" />
    },
    {
      title: "Premium Guest Postings",
      desc: "Publish valuable, authoritative articles on prominent digital portals to tap into established audiences and generate targeted referral traffic.",
      icon: <Globe className="w-8 h-8 text-[#EC7317]" />
    }
  ];

  const techniques = [
    {
      title: "Brand Mentions",
      desc: "Turn unlinked mentions of your business across the web into powerful, authority-passing backlinks with our customized outreach."
    },
    {
      title: "Broken Link Building",
      desc: "We locate broken links on relevant resource pages and pitch your high-quality content as the perfect, up-to-date replacement."
    },
    {
      title: "Competitor Backlink Analysis",
      desc: "Reverse-engineer the backlink profiles of your top organic competitors to discover high-yield opportunities and replicate their wins."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16">

      {/* 1. Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-[#F1F1F1]">
        {/* Radial grid pattern for premium visual styling */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Core Text */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="space-y-4">

                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-4xl md:text-5xl lg:text-[52px] font-bold text-black leading-[1.15] font-serif"
                >
                  Backlinks and Its Power in Off-Page SEO Strategies.
                </h1>
                <h2
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl md:text-2xl font-bold text-gray-800 font-serif"
                >
                  Off Page SEO Services in Stanhope Gardens, Blacktown, Sydney
                </h2>
              </div>

              <div className="space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  Off-page SEO is a strategy which is used outside your website to enhance its rankings. Link building,{" "}
                  <Link
                    href="/australia/social-media-marketing"
                    className="text-[#EC7317] underline hover:text-black font-semibold transition-colors duration-200"
                  >
                    social media promotions
                  </Link>{" "}
                  and guest postings are some of the best methods used in this strategy. Off Page SEOs help your website achieve credibility and authoritative status. It also increases the chances of your website’s visibility and organic traffic effectively.
                </p>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[500px]">
                <Image
                  src="/uploads/2024/03/mobi-1024x853.png"
                  alt="Backlinks and Off-Page SEO Power Illustration"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Why Do Owners Need Best Off-Page SEO Agency Australia? Section */}
      <section className="py-20 bg-[#F1F1F1] border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl lg:text-[42px] font-bold text-black font-serif leading-tight"
            >
              Why Do Owners Need Best Off-Page SEO Agency Australia?
            </h2>
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed font-sans font-medium">
              Websites benefit from off page SEO strategies effectively in the following ways:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-[#F1F1F1] rounded-2xl p-8 border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6 text-[#EC7317]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H10v-2h4v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-4 tracking-tight leading-snug">
                Enhance Your Rankings In Search Engines
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Off page SEOs prioritise in increasing your website’s authority and trustworthiness in front of search engines. Top-class backlinks from reputed websites can improve a site's search engine rankings. When these search engines see that other trusted sites get linked to your site, they are more likely to view your content as more valuable and relevant to its users.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F1F1F1] rounded-2xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6 text-[#EC7317] flex justify-center items-center">
                <span className="text-4xl font-black tracking-tighter leading-none">G</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-4 tracking-tight leading-snug">
                Increase your Organic Traffic
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Your website will experience a jump in organic traffic aka the non-paid and legit audience. When your website shows up on the first page of search results, more users will click on your links, resulting in a more fresh audience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F1F1F1] rounded-2xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6 text-[#EC7317]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-4 tracking-tight leading-snug">
                Improving Your Online Visibility
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Off-page SEO methods like link building, social media engagement, content promotion etc increases the online visibility of your website.This also encourages more people to discover your website and search more information about products and services you offer.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F1F1F1] rounded-2xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6 text-[#EC7317]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-4 tracking-tight leading-snug">
                Earn Trust and Credibility
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                You can effectively earn more trust and credibility for your website with these strategies. When reputed websites link to your content, they expect enhanced quality and reliability in your content..
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#F1F1F1] rounded-2xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6 text-[#EC7317]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-4 tracking-tight leading-snug">
                Attract Targeted Traffic
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Off page SEO strategies focus on attracting traffic from sources that are relevant to your segment or industry. You will draw the audience who are interested in your content, products or services.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#F1F1F1] rounded-2xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6 text-[#EC7317]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 8 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.83 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-4 tracking-tight leading-snug">
                Stay Competitive
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Off Page SEOs help you stay more competitive in online markets. You can outrank your competitors in a better way if they are not building backlinks actively.
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-[#F1F1F1] rounded-2xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6 text-[#EC7317]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-4 tracking-tight leading-snug">
                Enhance Your User Engagement
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                You can promote your content in social media and other mediums, which improves your user engagement. Engaged users will share your content more, comment on your posts and become loyal followers and customers.
              </p>
            </div>

            {/* Card 8 */}
            <div className="bg-[#F1F1F1] rounded-2xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6 text-[#EC7317]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-4 tracking-tight leading-snug">
                Local SEO Benefits
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Off Page SEOs can help local businesses by improving their search rankings locally. This is helpful for businesses that have a physical store and want to attract customers in their vicinity.
              </p>
            </div>

            {/* Card 9 */}
            <div className="bg-[#F1F1F1] rounded-2xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6 text-[#EC7317]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-4 tracking-tight leading-snug">
                Brand Awareness
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Best off-page SEO can help raise brand awareness effectively. When your website gets mentioned or linked to from other online sources, more people learn more about your brand and its services.
              </p>
            </div>

            {/* Card 10 */}
            <div className="bg-[#F1F1F1] rounded-2xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center col-span-1 md:col-span-2 lg:col-span-1">
              <div className="mb-6 text-[#EC7317]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-4 tracking-tight leading-snug">
                Long Term Advantages
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Off-page SEO strategies are often beneficial and get the best long term results. Top-quality backlinks and strong online presence can benefit your website for months and even years after you make initial efforts. So these are the benefits of off-page SEO strategies, for more information, you can visit our website and find the best details on these strategies that are essential for your online businesses and earn you huge profit.
              </p>
            </div>

          </div>
        </div>
      </section>


    </main>
  );
}
