"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Car, Calendar, ClipboardList, TrendingUp, Compass, Award, ExternalLink, ShieldCheck } from "lucide-react";

export default function CarRentalsCaseStudy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#fcfdfd] text-[#2c3e50] min-h-screen font-sans selection:bg-[#ff9900] selection:text-black antialiased">

      {/* 1. Hero Section with Luxury Car Background */}
      <section className="relative min-h-[55vh] flex items-center justify-center py-20 px-4 sm:px-6 overflow-hidden">
        {/* Background Cover Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gfdgdfgfgsdgsdfg.png"
            alt="Premium Car Rental Fleet Background"
            fill
            className="object-cover object-center brightness-[0.7] contrast-[1.05]"
            priority
            unoptimized
          />
          {/* Subtle dark backdrop filter to align text contrast perfectly */}
          {/* <div className="absolute inset-0 bg-[#091524]/50 backdrop-blur-[0.5px]" /> */}
        </div>

        <div className="max-w-4xl w-full mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 backdrop-blur-md rounded-2xl border border-white/25 p-8 sm:p-12 md:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >
            {/* <span className="text-[#ff9900] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 block">
              Digital Transformation Case Study
            </span> */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
              Transformative Car Rentals Digital Journey With Fly Media Technology's Digital Marketing Techniques
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Details Section (White Background) */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Car Rentals Digital Domination
            </h2>
            <div className="text-sm font-bold uppercase tracking-wider text-gray-500 flex items-center justify-center gap-1">
              <span>Markets Covered:</span> <span className="text-[#ff9900]">Australia & Canada</span>
            </div>
          </div>

          {/* 3 Icons Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left pt-6">

            {/* Box 1: Business Background */}
            <div className="space-y-4 group">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-2xl bg-[#ff9900]/15 flex items-center justify-center text-[#ff9900] group-hover:scale-110 transition-transform duration-300">
                  <Car size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center md:text-left font-serif">
                Business Background
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                These are some of the best car rentals in Australia and provide a wide range of rental services in major cities in Australia. These cities include Sydney, Brisbane, Perth, Adelaide, Hobart, and Melbourne.
              </p>
            </div>

            {/* Box 2: Market Competitor */}
            <div className="space-y-4 group">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-2xl bg-[#ff9900]/15 flex items-center justify-center text-[#ff9900] group-hover:scale-110 transition-transform duration-300">
                  <Calendar size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center md:text-left font-serif">
                Market Competitor
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                Their competitors are other car rental service providers serving in major Australian cities with high-performance websites and multiple inbound links.
              </p>
            </div>

            {/* Box 3: Project Goal */}
            <div className="space-y-4 group">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-2xl bg-[#ff9900]/15 flex items-center justify-center text-[#ff9900] group-hover:scale-110 transition-transform duration-300">
                  <ClipboardList size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center md:text-left font-serif">
                Project Goal
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                Car rental owners wanted to establish their online presence, improve visibility, rank multiple keywords, reach a wider audience, social media marketing, SEO services, Google Adwords, PPC campaigns and graphic designing services to engage the audience, drive sales and increase their online presence. To achieve these goals, the owners contacted Fly Media Technology for an array of digital marketing services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Strategy Section (Light Background) */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Strategy
            </h2>
          </div>

          {/* 6 Orange Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", text: "Development of a user-friendly and optimised website." },
              { num: "02", text: "Rank multiple keywords in SERPs." },
              { num: "03", text: "Generate engaging content for social media marketing." },
              { num: "04", text: "SEO strategies to drive organic search, sales, and reach." },
              { num: "05", text: "Compelling graphic designing for websites and social media." },
              { num: "06", text: "Run PPC and Google Ads campaigns." }
            ].map((strat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#FD8000] text-white rounded-2xl p-8 flex flex-col justify-between shadow-[0_10px_20px_rgba(255,153,0,0.15)] min-h-[160px]"
              >
                <div className="text-3xl font-mono font-bold opacity-80 mb-3">
                  {strat.num}
                </div>
                <p className="text-base font-semibold leading-snug">
                  {strat.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Results Section (Blueprint Parallax Background) */}
      <section 
        className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[600px] overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/oifhdiof.png')" }}
      >

        {/* Left Side: Tech Booking Graphics */}
        <div className="lg:col-span-6  backdrop-blur-[2px] relative flex items-center justify-center p-8 overflow-hidden border-r border-white/5">         
         
        </div>
        {/* Right Side: Deep Navy Box with Text */}
        <div className="lg:col-span-6 bg-[#050b14]/90 backdrop-blur-[2px] flex items-center justify-center p-8 sm:p-12 md:p-16">
          <div className="space-y-6 max-w-xl">
            <h3 className="text-3xl font-serif font-bold text-white border-l-4 border-[#ff9900] pl-4">
              Results:
            </h3>
            <h4 className="text-xl font-bold text-gray-200">
              After six months of the project, the results were:
            </h4>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-4">
              Development of a user-friendly website with SEO-optimised content and compelling design. Top ranks achieved for multiple keywords. Social media engagement significantly increased with engaging content and high-quality graphics. Visibility, sales, organic search and leads increase with effective SEO strategies and campaigns. Successful outcomes from PPC and Google Ads campaigns. The car rental owners achieved a greater audience reach and successfully increased their visibility and sales.
            </p>
          </div>
        </div>

      </section>

      {/* 5. Results Metrics Strip */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Box 1: Orange */}
            <div className="bg-[#FD8000] text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-mono font-bold">11:70 ROI</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-2 opacity-90">
               On Paid Media
              </div>
            </div>

            {/* Box 2: Black */}
            <div className="bg-black text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-mono font-bold">+210%</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-2 opacity-90">
                increase on-site conversions
              </div>
            </div>

            {/* Box 3: Grey */}
            <div className="bg-gray-500 text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-mono font-bold">+485.4%</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-2 opacity-90">
Organic Sessions 
</div>
            </div>

            {/* Box 4: White/Border */}
            <div className="bg-white text-gray-900 border-2 border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-gray-700">Top 10</div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-2">
                For 50+ Keywords
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Learnings Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Learnings: Our major learnings from the project are:
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left 4 Boxes Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Learning 1: Orange */}
              <div className="bg-[#FD8000] text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div className="text-2xl font-mono font-black opacity-85 mb-4">01</div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  Website development is crucial for increasing visibility and building client trust.
                </p>
              </div>

              {/* Learning 2: Black */}
              <div className="bg-black text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div className="text-2xl font-mono font-black opacity-85 mb-4">02</div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  Effective PPC and Google Ads campaigns can help increase brand recognition cost-effectively. 
                </p>
              </div>

              {/* Learning 3: Grey */}
              <div className="bg-[#8D8D8D] text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div className="text-2xl font-mono font-black opacity-85 mb-4">03</div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  SEO campaigns help provide long-term results and create a strong network of backlinks, which helps improve ranking.
                </p>
              </div>

              {/* Learning 4: White with border */}
              <div className="bg-white text-gray-900 border-2 border-gray-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div className="text-2xl font-mono font-black text-gray-400 mb-4">04</div>
                <p className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                  Engaging content and high-quality graphics are necessary for effective social media marketing. 
                </p>
              </div>

            </div>

            {/* Right Side Image */}
            <div className="lg:col-span-5 relative overflow-hidden shadow-xl min-h-[350px] border border-gray-200 bg-gray-50 flex items-center justify-center">
              <Image
                src="/portfolio/2.avif"
                alt="Premium Car Fleet Showcase"
                fill
                className="object-cover object-center"
                priority
                unoptimized
              />
            </div>

          </div>
        </div>
      </section>

      {/* Footer link to go back to portfolio */}
      {/* <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-[#ff9900] text-white hover:text-black font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md"
          >
            Back To Portfolio <ExternalLink size={16} />
          </Link>
        </div>
      </section> */}

    </main>
  );
}
