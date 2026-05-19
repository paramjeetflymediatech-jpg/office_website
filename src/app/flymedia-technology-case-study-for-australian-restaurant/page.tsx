"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Store, ClipboardList, TrendingUp, Compass, Award, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";

export default function RestaurantCaseStudy() {
  React.useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    return () => {
      if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <main className="bg-[#fcfdfd] text-[#2c3e50] min-h-screen font-sans selection:bg-[#ff9900] selection:text-black antialiased">

      {/* 1. Hero Section with Gourmet Dining Background and Bottom Mountains Divider */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-32 px-4 sm:px-6 overflow-hidden">
        {/* Background Cover Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio/1.avif"
            alt="Gourmet Dining Experience Background"
            fill
            className="object-cover object-center brightness-[0.6] contrast-[1.05]"
            priority
            unoptimized
          />
          {/* Dark backdrop to align text contrast perfectly */}
          <div className="absolute inset-0 bg-[#091524]/40 backdrop-blur-[0.5px]" />
        </div>

        <div className="max-w-4xl w-full mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-transparent text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              Flymedia Technology Case Study For Restaurants Based in Australia
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Details Section (White Background) */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Indian Restaurants In Australia
            </h2>
            <div className="text-sm font-bold uppercase tracking-wider text-gray-500 flex items-center justify-center gap-1">
              <span>Location:</span> <span className="text-[#ff9900]">Australia</span>
            </div>
          </div>

          {/* 3 Icons Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left pt-6">

            {/* Box 1: Business Background */}
            <div className="space-y-4 group">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-2xl bg-[#ff9900]/15 flex items-center justify-center text-[#ff9900] group-hover:scale-110 transition-transform duration-300">
                  <Briefcase size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center md:text-left font-serif">
                Business Background
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                These Indian restaurants are among the leading restaurants in Australia. They provide a wide range of Indian Cuisines and are established in major cities in Australia, such as Brisbane, Melbourne, and Sydney.
              </p>
            </div>

            {/* Box 2: Market Competitor */}
            <div className="space-y-4 group">
              <div className="flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-2xl bg-[#ff9900]/15 flex items-center justify-center text-[#ff9900] group-hover:scale-110 transition-transform duration-300">
                  <Store size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center md:text-left font-serif">
                Market Competitor
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center md:text-left">
                Their competitors are other Indian restaurants in the city with well-established websites and multiple high-quality backlinks.
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
                Restaurant owners reached out to Fly Media Technology and wanted our digital marketing services, which include website development, SEO, SMO, PPC, Content Writing, Google Ads and Graphic design services. The clients wanted to get a higher ranking for multiple keywords and increase their lead generation.
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

          {/* 5 Orange Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", text: "Develop a dynamic and responsive user-friendly website." },
              { num: "02", text: "Achieve the highest ranking for 100+ keywords." },
              { num: "03", text: "Generate SEO-friendly, original and optimised content for easy website crawling." },
              { num: "04", text: "Run PPC, SMO and Google Word campaigns to increase lead generation." },
              { num: "05", text: "Create high-quality graphic designs to increase user engagement." }
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

      {/* 4. Results Section (Parallax Background) */}
      <section
        className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[500px] overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/FIOSDHIODFSFKOF.png')" }}
      >

        {/* Left Side: Glowing Visual Overlay */}
        <div className="lg:col-span-5  backdrop-blur-[2px] relative flex items-center justify-center p-8 border-r border-white/5">
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,#1e40af,transparent_70%)] opacity-80" /> */}

        </div>

        {/* Right Side: Deep Navy Text Content */}
        <div className="lg:col-span-7 bg-[#050b14]/90 backdrop-blur-[2px] flex items-center justify-center p-8 sm:p-12 md:p-16">
          <div className="space-y-6 max-w-2xl">
            <h3 className="text-3xl font-serif font-bold text-white border-l-4 border-[#ff9900] pl-4">
              Results:
            </h3>
            <h4 className="text-xl font-bold text-gray-200">
              After six months of the project, the results were:
            </h4>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
              Engaging and dynamic website with SEO-optimised and original content. Highest ranking achieved for 100+ keywords. A significant increase in sales, organic search, lead generation and user engagement from SEO and digital marketing campaigns.
            </p>
          </div>
        </div>

      </section>

      {/* 5. Google Analytics Before/After Analysis */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            {/* Before Metrics Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-200/60 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-gray-500/10 border border-gray-500/25 px-4 py-1.5 rounded-full text-gray-600 font-bold uppercase text-xs tracking-wider">
                  Before
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">Google Analytics Home</h3>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Users</span>
                  <div className="text-3xl font-mono font-bold text-gray-800">2.4 K</div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Sessions</span>
                  <div className="text-3xl font-mono font-bold text-gray-800">3.3 K</div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Bounce Rate</span>
                  <div className="text-3xl font-mono font-bold text-red-500">52.64 %</div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Session Duration</span>
                  <div className="text-3xl font-mono font-bold text-gray-800">3m</div>
                </div>
              </div>
            </motion.div>

            {/* After Metrics Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#091524] text-white rounded-3xl p-8 border border-white/5 shadow-2xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#ff9900,transparent_75%)] opacity-10" />

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#ff9900]/10 border border-[#ff9900]/30 px-4 py-1.5 rounded-full text-[#ff9900] font-bold uppercase text-xs tracking-wider">
                  After
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Google Analytics Home</h3>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8 relative z-10">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff9900]">Users</span>
                  <div className="text-3xl font-mono font-bold text-[#ff9900] flex items-center gap-1">
                    43 K <span className="text-xs text-green-400 font-bold font-sans">▲</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff9900]">Sessions</span>
                  <div className="text-3xl font-mono font-bold text-white">65 K</div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Bounce Rate</span>
                  <div className="text-3xl font-mono font-bold text-green-400">50.92 %</div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Session Duration</span>
                  <div className="text-3xl font-mono font-bold text-white">3m</div>
                </div>
              </div>
            </motion.div>

            {/* Traffic Image Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100 p-4 flex items-center justify-center min-h-[300px]"
            >
              <div className="relative w-full h-full min-h-[280px]">
                <Image
                  src="/pasted-image-0.webp"
                  alt="Website Traffic Growth Chart"
                  fill
                  className="object-contain rounded-2xl"
                  unoptimized
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. Learnings Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Learnings: Major learnings from the project:
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left 4 Boxes Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Learning 1: Orange */}
              <div className="bg-[#ff9900] text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div className="text-2xl font-mono font-black opacity-85 mb-4">01</div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  Website development is crucial for sustainable growth, both online and offline.
                </p>
              </div>

              {/* Learning 2: Black */}
              <div className="bg-black text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div className="text-2xl font-mono font-black opacity-85 mb-4">02</div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  An effective SEO campaign can help the business greatly in attracting potential loyal clients.
                </p>
              </div>

              {/* Learning 3: Grey */}
              <div className="bg-gray-500 text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div className="text-2xl font-mono font-black opacity-85 mb-4">03</div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  SEO-optimised and original content can boost business visibility and credibility.
                </p>
              </div>

              {/* Learning 4: White with border */}
              <div className="bg-white text-gray-900 border-2 border-gray-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div className="text-2xl font-mono font-black text-gray-400 mb-4">04</div>
                <p className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                  High-quality graphic designs help increase brand recognition and boost brand awareness.
                </p>
              </div>

            </div>

            {/* Right Side Image */}
            <div className="lg:col-span-5 relative overflow-hidden shadow-xl min-h-[350px] border border-gray-200 bg-gray-50 flex items-center justify-center">
              <Image
                src="/portfolio/1.avif"
                alt="Delicious gourmet cuisine table"
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
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-[#ff9900] text-white hover:text-black font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md"
          >
            Back To Portfolio <ExternalLink size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
