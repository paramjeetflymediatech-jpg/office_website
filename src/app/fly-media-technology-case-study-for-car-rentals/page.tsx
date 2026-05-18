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
            src="/portfolio/2.avif"
            alt="Premium Car Rental Fleet Background"
            fill
            className="object-cover object-center brightness-[0.7] contrast-[1.05]"
            priority
            unoptimized
          />
          {/* Subtle dark backdrop filter to align text contrast perfectly */}
          <div className="absolute inset-0 bg-[#091524]/50 backdrop-blur-[0.5px]" />
        </div>

        <div className="max-w-4xl w-full mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/85 backdrop-blur-md rounded-2xl border border-white/25 p-8 sm:p-12 md:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >
            <span className="text-[#ff9900] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 block">
              Digital Transformation Case Study
            </span>
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
                The client is an emerging independent car rental company operating a diverse fleet of economy, SUV, and luxury passenger vehicles across major airport terminals and tourist hubs in Australia and Canada. Seeking to break free from high aggregator commissions, they partnered with us to establish an authentic direct-to-consumer digital channel.
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
                The vehicle rental sector is heavily dominated by multi-billion dollar multinational conglomerates and online aggregator portals. These competitors command massive advertising budgets and rely on extensive historical backlink profiles to dominate organic travel keywords.
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
                The objective was to deploy a seamless, ultra-fast online booking interface that minimizes drop-offs, optimize local search rankings for high-value keywords (e.g. airport car rentals), and run precise, high-intent Google PPC search ads that lower direct acquisition costs while establishing long-term organic authority.
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
              Our Digital Road Map
            </h2>
          </div>

          {/* 6 Orange Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", text: "Dynamic, high-quality, and responsive car rental booking engine development." },
              { num: "02", text: "Optimize local airport search engine rankings for major hubs." },
              { num: "03", text: "Drive high-intent direct bookings using tailored digital marketing strategies." },
              { num: "04", text: "Launch targeted PPC and Google Ads campaigns for instant reservation volume." },
              { num: "05", text: "Create high-converting vehicle guide content to elevate organic trust." },
              { num: "06", text: "Deploy technical SEO to scale long-term booking margins." }
            ].map((strat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#ff9900] text-white rounded-2xl p-8 flex flex-col justify-between shadow-[0_10px_20px_rgba(255,153,0,0.15)] min-h-[160px]"
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

      {/* 4. Results Section (Blueprint Parallax Background) */}
      <section 
        className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[600px] overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sopdfjopsd.png')" }}
      >

        {/* Left Side: Tech Booking Graphics */}
        <div className="lg:col-span-6 bg-[#0a1420]/85 backdrop-blur-[2px] relative flex items-center justify-center p-8 overflow-hidden border-r border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,#1e40af,transparent_70%)] opacity-80" />

          {/* Connected Grid Lines */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, #ff9900 1px, transparent 1px), linear-gradient(to bottom, #ff9900 1px, transparent 1px)`,
              backgroundSize: "45px 45px"
            }}
          />
          <div className="absolute w-72 h-72 rounded-full border-4 border-[#ff9900]/20 animate-spin duration-20000" />
          <div className="absolute w-96 h-96 rounded-full border border-blue-500/10 animate-reverse-spin" />

          <div className="relative z-10 text-center space-y-4 max-w-md">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#ff9900]/10 flex items-center justify-center text-[#ff9900] border border-[#ff9900]/20">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-2xl font-serif font-black text-white">
              Accelerating Conversion Mechanics
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frictionless 3-step checkout paths combined with smart location-based search models to convert lookers into booked vehicle keys.
            </p>
          </div>
        </div>

        {/* Right Side: Deep Navy Box with Text */}
        <div className="lg:col-span-6 bg-[#050b14]/90 backdrop-blur-[2px] flex items-center justify-center p-8 sm:p-12 md:p-16">
          <div className="space-y-6 max-w-xl">
            <h3 className="text-3xl font-serif font-bold text-white border-l-4 border-[#ff9900] pl-4">
              Results:
            </h3>
            <h4 className="text-xl font-bold text-gray-200">
              After six months of collaboration, the results were stellar:
            </h4>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-4">
              A blazing-fast, 3-step intuitive reservation interface that dramatically lowered cart abandonment. Direct online booking transactions surged, while cost-per-acquisition plummeted. Local SEO strategies alongside hyper-targeted PPC campaigns successfully positioned the client on Page 1 for high-value airport pickup searches, resulting in massive scaling of the client's direct ROI.
            </p>
          </div>
        </div>

      </section>

      {/* 5. Results Metrics Strip */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Box 1: Orange */}
            <div className="bg-[#ff9900] text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-mono font-bold">528+</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-2 opacity-90">
                Average Weekly Bookings
              </div>
            </div>

            {/* Box 2: Black */}
            <div className="bg-black text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-mono font-bold">+210%</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-2 opacity-90">
                Airport Rental Transactions
              </div>
            </div>

            {/* Box 3: Grey */}
            <div className="bg-gray-500 text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-mono font-bold">+485.4%</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-2 opacity-90">
                Organic Search Traffic
              </div>
            </div>

            {/* Box 4: White/Border */}
            <div className="bg-white text-gray-900 border-2 border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-gray-700">148 keywords</div>
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
              <div className="bg-[#ff9900] text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div className="text-2xl font-mono font-black opacity-85 mb-4">01</div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  A high-performance booking UX is critical for reducing abandonment and capturing immediate tourist bookings.
                </p>
              </div>

              {/* Learning 2: Black */}
              <div className="bg-black text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div className="text-2xl font-mono font-black opacity-85 mb-4">02</div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  Localized SEO landers targeting airports and vacation hotspots offer consistent, zero-cost high-intent leads.
                </p>
              </div>

              {/* Learning 3: Grey */}
              <div className="bg-gray-500 text-white p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div className="text-2xl font-mono font-black opacity-85 mb-4">03</div>
                <p className="text-sm sm:text-base font-semibold leading-snug">
                  Laser-focused PPC campaigns capture high-intent users during critical decision-making stages.
                </p>
              </div>

              {/* Learning 4: White with border */}
              <div className="bg-white text-gray-900 border-2 border-gray-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div className="text-2xl font-mono font-black text-gray-400 mb-4">04</div>
                <p className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                  Continuous mobile responsiveness and lightning-fast loading speeds directly correlate with lower reservation drop-offs.
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
