"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Landmark, ClipboardList, TrendingUp, Compass, Award, ExternalLink } from "lucide-react";

export default function TechCompanyCaseStudy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#fcfdfd] text-[#2c3e50] min-h-screen font-sans selection:bg-[#FD8000] selection:text-black antialiased">

      {/* 1. Hero Section with Connected Tech Network Background */}
      <section className="relative min-h-[55vh] flex items-center justify-center py-20 px-4 sm:px-6 overflow-hidden">
        {/* Background Image from user */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sdfpojsdopj.png"
            alt="Technology Connected Nodes Background"
            fill
            className="object-cover object-center brightness-[0.75] contrast-[1.05]"
            priority
            unoptimized
          />
          {/* Subtle tech blue overlay to align text contrast perfectly */}
          <div className="absolute inset-0 bg-[#091524]/50 backdrop-blur-[0.5px]" />
        </div>

        <div className="max-w-4xl w-full mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/85 backdrop-blur-md rounded-2xl border border-white/25 p-8 sm:p-12 md:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
              Boosting Business Growth Of A Technology Company In Australia: A Fly Media Technology Case Study
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Details Section (White Background) */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Technology Company In Australia
            </h2>
            <div className="text-sm font-bold uppercase tracking-wider text-gray-500 flex items-center justify-center gap-1">
              <span>Location:</span> <span className="text-[#FD8000]">Australia</span>
            </div>
          </div>

          {/* 3 Icons Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left pt-6">

            {/* Box 1: Business Background */}
            <div className="space-y-4 group">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-2xl bg-[#FD8000]/15 flex items-center justify-center text-[#FD8000] group-hover:scale-110 transition-transform duration-300">
                  <Briefcase size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center md:text-left font-serif">
                Business Background
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                They are one of the best technological service providers in major cities of Australia, such as Melbourne, Brisbane, Sydney, and Perth. They provide all kinds of repair services, such as laptop, mobile, and computer repair. In addition, they also provide data recovery services.
              </p>
            </div>

            {/* Box 2: Market Competitor */}
            <div className="space-y-4 group">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-2xl bg-[#FD8000]/15 flex items-center justify-center text-[#FD8000] group-hover:scale-110 transition-transform duration-300">
                  <Landmark size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center md:text-left font-serif">
                Market Competitor
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                Their competitor is other technology companies that offer repair and data recovery services and have a well-established website with many backlinks.
              </p>
            </div>

            {/* Box 3: Project Goal */}
            <div className="space-y-4 group">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-2xl bg-[#FD8000]/15 flex items-center justify-center text-[#FD8000] group-hover:scale-110 transition-transform duration-300">
                  <ClipboardList size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center md:text-left font-serif">
                Project Goal
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                The company wanted to develop a website and increase its visibility through SEO services. Increase social media engagement and drive more loyal customers through PPC and Google Ads. They wanted high-quality graphics to increase organic reach, rank multiple keywords, increase reach and leads and create original, error-free and plagiarism-free content for web pages.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Strategy Section (Light Background) */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 tracking-tight">
              Strategy
            </h2>
          </div>

          {/* 6 Orange Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", text: "Dynamic, high-quality and responsive website development." },
              { num: "02", text: "Increase the ranking of multiple keywords." },
              { num: "03", text: "Increase social media engagement and reach using high-quality graphics." },
              { num: "04", text: "Run PPC and Google Ads campaigns." },
              { num: "05", text: "Original persuasive content creation for web pages." },
              { num: "06", text: "SEO strategies to increase leads, sales and organic reach." }
            ].map((strat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#FD8000] text-white rounded-2xl p-8 flex flex-col justify-between shadow-[0_10px_20px_rgba(255,153,0,0.15)] min-h-[160px]"
              >
                <div className="text-3xl font-mono font-black opacity-80 mb-3">
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

      {/* 4. Results Section (Blueprint on Left, Deep Navy Box on Right) */}
      <section 
        className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[600px] overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sopdfjopsd.png')" }}
      >

        {/* Left Side: Blueprint & Tech Network Visuals */}
        <div className="lg:col-span-6 bg-[#0a1420]/85 backdrop-blur-[2px] relative flex items-center justify-center p-8 overflow-hidden border-r border-white/5">
      
        </div>

        {/* Right Side: Deep Navy Box with Text */}
        <div className="lg:col-span-6 bg-[#050b14]/90 backdrop-blur-[2px] flex items-center justify-center p-8 sm:p-12 md:p-16">
          <div className="space-y-6 max-w-xl">
            <h3 className="text-3xl font-serif font-bold text-white border-l-4 border-[#FD8000] pl-4">
              Results:
            </h3>
            <h4 className="text-xl font-bold text-gray-200">
              After six months of the project, the results were:
            </h4>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-4">
              Responsive website development with easy to use interface and user-friendly experience. Social media reach and engagement significantly increased. High-quality graphics helped increase reach. Multiple keywords achieved the highest ranking. SEO strategies, PPC and Google Ads campaigns helped increase organic reach, sales, and leads. The client's return on investment escalated significantly.
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
              <div className="text-3xl sm:text-4xl font-mono font-bold">421</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-2 opacity-90">
                Average goal completion
              </div>
            </div>

            {/* Box 2: Black */}
            <div className="bg-black text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-mono font-bold">172%</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-2 opacity-90">
                Increase service transactions
              </div>
            </div>

            {/* Box 3: Grey */}
            <div className="bg-gray-500 text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-mono font-bold">+584.9%</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-2 opacity-90">
                Organic Sessions
              </div>
            </div>

            {/* Box 4: White/Border */}
            <div className="bg-white text-gray-900 border-2 border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-gray-700">92 keywords</div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-2">
                in the Top 10
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
                  Website can standard for business growth, and original content helps increase their ranking.
                </p>
              </div>

              {/* Learning 2: Black */}
              <div className="bg-black text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div className="text-2xl font-mono font-black opacity-85 mb-4">02</div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  PPC and Google Campaigns provide high return on investment.
                </p>
              </div>

              {/* Learning 3: Grey */}
              <div className="bg-gray-500 text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div className="text-2xl font-mono font-black opacity-85 mb-4">03</div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  Effective social media marketing can attract many potential clients and help in lead generation.
                </p>
              </div>

              {/* Learning 4: White with border */}
              <div className="bg-white text-gray-900 border-2 border-gray-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div className="text-2xl font-mono font-black text-gray-400 mb-4">04</div>
                <p className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                  SEO helps increase ranking, search and website visibility. Also, it offers long-term results if you work on it consistently.
                </p>
              </div>

            </div>

            {/* Right Side Image */}
            <div className="lg:col-span-5 relative overflow-hidden shadow-xl min-h-[350px] border border-gray-200 bg-gray-50 flex items-center justify-center">
              <Image
                src="/kdfsbhnsdfoi.png"
                alt="Technology Case Study Analysis"
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
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-[#FD8000] text-white hover:text-black font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md"
          >
            Back To Portfolio <ExternalLink size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
