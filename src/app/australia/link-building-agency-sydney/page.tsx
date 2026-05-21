"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Settings,
  MapPin,
  LineChart,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  Globe,
  MessageSquare,
  UserCheck,
  Search,
  CheckCircle,
  HelpCircle,
  Activity,
  ThumbsUp
} from "lucide-react";
import ContactFormSection from "@/components/ContactFormSection";

export default function LinkBuildingSydney() {
  const whyChooseUs = [
    {
      title: "Proven Expertise",
      desc: "Flymedia Technology boasts a team of seasoned SEO professionals with a deep understanding of the ever-evolving digital landscape. They have a proven track record of successfully boosting website rankings through strategic link building.",
      icon: <Award className="w-8 h-8 text-[#EC7317]" />
    },
    {
      title: "Customized Strategies",
      desc: "No two businesses are alike, and neither should be their SEO strategies. Flymedia Technology crafts tailor-made link building strategies to suit the unique needs and goals of each client.",
      icon: <Settings className="w-8 h-8 text-[#EC7317]" />
    },
    {
      title: "Local Insight",
      desc: "Being based in Stanhope Gardens, Blacktown, Flymedia Technology has a deep understanding of the local market dynamics and can implement strategies that resonate with Sydney audience.",
      icon: <MapPin className="w-8 h-8 text-[#EC7317]" />
    },
    {
      title: "Transparent Reporting",
      desc: "Transparency is a cornerstone of Flymedia Technology’s approach. They provide regular reports detailing the progress of your link building campaign, so you are always in the loop.",
      icon: <LineChart className="w-8 h-8 text-[#EC7317]" />
    },
    {
      title: "Ethical Practices",
      desc: "Flymedia Technology strictly adheres to ethical link building practices endorsed by search engines. They focus on acquiring high-quality relevant backlinks that stand the test of time.",
      icon: <ShieldCheck className="w-8 h-8 text-[#EC7317]" />
    }
  ];

  const services = [
    {
      num: "1",
      title: "Guest Posting",
      desc: "Flymedia Technology identifies authoritative websites in your niche and secures guest posting opportunities. This not only earns you valuable backlinks but also positions your brand as an industry expert."
    },
    {
      num: "2",
      title: "Content Marketing",
      desc: "The agency creates high-quality, shareable content that naturally attracts backlinks. Their content marketing strategies help you build a strong online presence."
    },
    {
      num: "3",
      title: "Outreach & Relationship Building",
      desc: "Building relationships with other websites is crucial in the world of link building. Flymedia Technology excels at outreach, convincing relevant sites to link to your content."
    },
    {
      num: "4",
      title: "Competitor Analysis",
      desc: "Understanding your competitors’ backlink profile is key to staying ahead. Flymedia Technology conducts in-depth competitor analysis to identify opportunities and outperform your rivals."
    },
    {
      num: "5",
      title: "Local SEO Integration",
      desc: "For businesses targeting local audiences, Flymedia Technology’s local SEO strategies help you rank higher in local search results, driving more foot traffic to your physical store."
    }
  ];

  const impactPoints = [
    {
      title: "Improved Search Rankings",
      desc: "As authoritative backlinks accumulate, your website's search engine rankings rise, increasing its visibility to potential customers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#EC7317]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" />
        </svg>
      )
    },
    {
      title: "Increased Organic Traffic",
      desc: "Higher rankings result in more organic traffic to your website, leading to more qualified leads and potential conversions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#EC7317]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Enhanced Credibility",
      desc: "Quality Backlinks from trusted sources build your website’s credibility and authority in your industry.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#EC7317]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans ">

      {/* 1. Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-[#F1F1F1]">
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
                  Link Building Agency Sydney
                </h1>
                <h2
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl md:text-2xl font-bold text-gray-800 font-serif leading-relaxed"
                >
                  Elevate Your Online Presence With Flymedia Technology: A Trusted Link Building Agency
                </h2>
              </div>

              <div className="space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  In today’s digital landscape, a strong online presence is paramount for business success. However, achieving high visibility in search engine rankings requires a strategic approach. This is where Flymedia Technology, a leading Link Building Agency Sydney, steps in. With its top-notch link building services, Flymedia Technology can help your business rise above the competition.
                </p>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[500px]">
                <Image
                  src="/uploads/2024/03/mobi-1024x853.png"
                  alt="Sydney Premium Link Building Services Illustration"
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

      {/* 2. The Power of Link Building in SEO */}
      <section className="py-10  border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl lg:text-[28px] font-bold text-black leading-tight font-serif"
          >
            The Power of Link Building in SEO
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-medium">
            <Link
              href="/australia/search-engine-optimization"
              className="text-[#EC7317] underline hover:text-black font-semibold transition-colors"
            >
              Search engine optimization
            </Link> (SEO) is all about enhancing your website’s visibility on search engines like Google. One crucial aspect of SEO is link building, a technique that involves acquiring high-quality backlinks from reputable websites to your own. These backlinks act as votes in the search engines, signaling that your website is credible and authoritative.
          </p>
        </div>
      </section>

      {/* 3. Why Choose Flymedia Technology as Your Link Building Partner? */}
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-start  max-w-4xl mx-auto mb-16">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl lg:text-[28px] font-bold text-black font-serif"
            >
              Why Choose Flymedia Technology as Your Link Building Partner?
            </h2>
          </div>

          {/* Row 1: 3 Centered Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center min-h-[220px]">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[#EC7317] text-2xl font-bold mb-4 font-serif"
              >
                Proven Expertise
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed">
                Flymedia Technology boasts a team of seasoned SEO professionals with a deep understanding of the ever-evolving digital landscape. They have a proven track record of successfully boosting website rankings through strategic link building.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center min-h-[220px]">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[#EC7317] text-2xl font-bold mb-4 font-serif"
              >
                Customized strategies
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed">
                No two businesses are alike , and neither should be their SEO strategies. Flymedia Technology crafts tailor-made link building strategies to suit the unique needs and goals of each client.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center min-h-[220px]">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[#EC7317] text-2xl font-bold mb-4 font-serif"
              >
                Local Insight
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed">
                Being based in Stanhope Gardens, Blacktown, Flymedia Technology has a deep understanding of the local market dynamics and can implement strategies that resonate with Sydney audience.
              </p>
            </div>

          </div>

          {/* Row 2: 2 Centered Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[800px] mx-auto mt-8">

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center min-h-[220px]">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[#EC7317] text-2xl font-bold mb-4 font-serif"
              >
                Transparent Reporting
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed">
                Transparency is a cornerstone of Flymedia Technology’s approach. They provide regular reports detailing the progress of your link building campaign, so you are always in the loop.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center min-h-[220px]">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[#EC7317] text-2xl font-bold mb-4 font-serif"
              >
                Ethical Practices
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed">
                Flymedia Technology strictly adheres to ethical link building practices endorsed by search engines. They focus on acquiring high-quality relevant backlinks that stand the test of time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Link Building Services at Flymedia Technology */}
      <section className="py-10 bg-[#F1F1F1] border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl lg:text-[28px] font-bold text-black font-serif"
            >
              Link Building Services at Flymedia Technology
            </h2>
          </div>

          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-center">

            {/* Card 1 */}
            <div className="relative bg-[#333333] rounded-2xl pt-12 pb-8 px-6 text-center text-white flex flex-col justify-center min-h-[220px] shadow-lg">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#EC7317] rounded-full border-4 border-[#F1F1F1] flex items-center justify-center text-white font-bold text-2xl shadow-md">
                1
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold mb-4 font-serif text-white"
              >
                Guest Posting
              </h3>
              <p className="text-[#cccccc] text-[14px] leading-relaxed">
                Flymedia Technology identifies authoritative websites in your niche and secure guest posting opportunities. This not only earns you valuable backlinks but also positions your brand as an industry expert.e.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-[#333333] rounded-2xl pt-12 pb-8 px-6 text-center text-white flex flex-col justify-center min-h-[220px] shadow-lg">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#EC7317] rounded-full border-4 border-[#F1F1F1] flex items-center justify-center text-white font-bold text-2xl shadow-md">
                2
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold mb-4 font-serif text-white"
              >
                Content Marketing
              </h3>
              <p className="text-[#cccccc] text-[14px] leading-relaxed">
                The agency creates high-quality, shearable content that naturally attracts backlinks. Their content marketing strategies help you build a strong online presence.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative bg-[#333333] rounded-2xl pt-12 pb-8 px-6 text-center text-white flex flex-col justify-center min-h-[220px] shadow-lg">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#EC7317] rounded-full border-4 border-[#F1F1F1] flex items-center justify-center text-white font-bold text-2xl shadow-md">
                3
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold mb-4 font-serif text-white"
              >
                Outreach and Relationship Building
              </h3>
              <p className="text-[#cccccc] text-[14px] leading-relaxed">
                Building relationships with other websites is crucial in the world of link building. Flymedia Technology excels at outreach, convincing relevant sites to link to your content.
              </p>
            </div>

          </div>

          {/* Row 2: 2 centered cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 max-w-[800px] mx-auto mt-16">

            {/* Card 4 */}
            <div className="relative bg-[#333333] rounded-2xl pt-12 pb-8 px-6 text-center text-white flex flex-col justify-center min-h-[220px] shadow-lg">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#EC7317] rounded-full border-4 border-[#F1F1F1] flex items-center justify-center text-white font-bold text-2xl shadow-md">
                4
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold mb-4 font-serif text-white"
              >
                Competitor Analysis
              </h3>
              <p className="text-[#cccccc] text-[14px] leading-relaxed">
                Understanding your competitors’ backlink profile is key to staying ahead. Flymedia Technology conducts in-depth competitor analysis to identify opportunities and outperform your rivals.
              </p>
            </div>

            {/* Card 5 */}
            <div className="relative bg-[#333333] rounded-2xl pt-12 pb-8 px-6 text-center text-white flex flex-col justify-center min-h-[220px] shadow-lg">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#EC7317] rounded-full border-4 border-[#F1F1F1] flex items-center justify-center text-white font-bold text-2xl shadow-md">
                5
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold mb-4 font-serif text-white"
              >
                Local SEO
              </h3>
              <p className="text-[#cccccc] text-[14px] leading-relaxed">
                For businesses targeting local audiences, Flymedia Technology’s{" "}
                <Link
                  href="/australia/local-seo"
                  className="text-[#EC7317] underline hover:text-white font-semibold transition-colors"
                >
                  local SEO
                </Link>{" "}
                strategies help you rank higher in local search results, driving more foot traffic to your physical store.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. The Impact of Effective Link Building */}
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl lg:text-[42px] font-bold text-black font-serif"
            >
              The Impact of Effective Link Building
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className=" rounded-3xl p-8 text-center flex flex-col items-center space-y-6 border border-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#EC7317] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="currentColor" viewBox="0 0 64 64">
                  <path d="m62 4h-60a1 1 0 0 0 -1 1v54a1 1 0 0 0 1 1h60a1 1 0 0 0 1-1v-54a1 1 0 0 0 -1-1zm-1 2v10h-58v-10zm-58 14v-2h8v2zm10-2h8v2h-8zm10 0h8v2h-8zm10 0h8a2 2 0 0 1 -2 2h-6zm-30 40v-36h36a4 4 0 0 0 4-4h18v40z" fill="#EC7317" opacity="0.15"></path>
                  <path d="m52 22a6.948 6.948 0 0 0 -6.92 8h-10.08v-5a1 1 0 0 0 -1-1h-28a1 1 0 0 0 -1 1v24a1 1 0 0 0 1 1h21v5a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-19.685a6.994 6.994 0 0 0 -3-13.315zm-19 4v4h-5a1 1 0 0 0 -1 1v1h-20v-6zm-26 22v-14h20v14zm22 6v-14h24v14zm24-16h-24v-6h16.685a6.907 6.907 0 0 0 7.315 3.92zm-1-4a5 5 0 1 1 5-5 5.006 5.006 0 0 1 -5 5z" fill="#EC7317"></path>
                </svg>
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-black font-serif"
              >
                Improved Search Rankings
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed">
                As authoritative backlinks accumulate, your website's search engine rankings rise, increasing its visibility to potential customers.
              </p>
            </div>

            {/* Card 2 */}
            <div className=" rounded-3xl p-8 text-center flex flex-col items-center space-y-6 border border-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#EC7317] flex justify-center items-center h-12">
                <span className="text-5xl font-black tracking-tighter leading-none">G</span>
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-black font-serif"
              >
                Increased Organic Traffic
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed">
                Higher rankings result in more organic traffic to your website, leading to more qualified leads and potential conversions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl p-8 text-center flex flex-col items-center space-y-6 border border-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-[#EC7317] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="currentColor" viewBox="0 0 640 512">
                  <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z" fill="#EC7317" />
                </svg>
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-black font-serif"
              >
                Enhanced Credibility
              </h3>
              <p className="text-gray-700 text-[14px] md:text-[15px] leading-relaxed">
                Quality backlinks from trusted sources build your website’s credibility and authority in your industry.
              </p>
            </div>

          </div>
        </div>
      </section>
      <ContactFormSection />

    </main>
  );
}

