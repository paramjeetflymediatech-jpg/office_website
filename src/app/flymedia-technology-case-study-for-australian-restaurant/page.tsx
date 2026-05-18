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

        {/* Elementor Shape Divider (Mountains) at Bottom of Hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg
            className="relative block w-full h-[40px] md:h-[75px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="fill-white"
              style={{ opacity: 0.33 }}
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            />
            <path
              className="fill-white"
              style={{ opacity: 0.66 }}
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            />
            <path
              className="fill-white"
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            />
          </svg>
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
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 tracking-tight">
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

      {/* 4. Results Section (Parallax Background) */}
      <section 
        className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[500px] overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sopdfjopsd.png')" }}
      >

        {/* Left Side: Glowing Visual Overlay */}
        <div className="lg:col-span-5 bg-[#0a1420]/80 backdrop-blur-[2px] relative flex items-center justify-center p-8 border-r border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,#1e40af,transparent_70%)] opacity-80" />
          
          <div className="relative z-10 text-center space-y-4 max-w-sm">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#ff9900]/10 flex items-center justify-center text-[#ff9900] border border-[#ff9900]/20">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-2xl font-serif font-black text-white">
              Sustained Organic Growth
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Achieving Page 1 Google visibility and Map Pack prominence to connect hungry Australian dining searches directly to the dining table.
            </p>
          </div>
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
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-3">
            <span className="text-[#ff9900] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
              Google Analytics Home Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Traffic & Engagement Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Before Metrics Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-200/60 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-gray-500/10 border border-gray-500/25 px-4 py-1.5 rounded-full text-gray-600 font-bold uppercase text-xs tracking-wider">
                  Baseline State
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900">Before Project Launch</h3>
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
                  Post-Launch Results
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">After 6 Months</h3>
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

          </div>

          {/* Interactive Custom SVG Line & Bar Chart representing Website Traffic */}
          <div className="bg-gray-50 border border-gray-200/60 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto shadow-sm">
            <h4 className="text-lg font-serif font-bold text-gray-800 text-center mb-8 flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              1. Website Traffic Growth (Users Trend)
            </h4>

            {/* Custom Interactive SVG Chart */}
            <div className="w-full aspect-[16/9] min-h-[220px]">
              <svg viewBox="0 0 700 350" className="w-full h-full font-sans">
                {/* Horizontal Grid lines */}
                <line x1="50" y1="50" x2="650" y2="50" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
                <line x1="50" y1="110" x2="650" y2="110" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
                <line x1="50" y1="170" x2="650" y2="170" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
                <line x1="50" y1="230" x2="650" y2="230" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
                <line x1="50" y1="290" x2="650" y2="290" stroke="#d1d5db" strokeWidth="1.5" />

                {/* Y Axis Labels */}
                <text x="40" y="55" fill="#6b7280" fontSize="11" textAnchor="end">50K</text>
                <text x="40" y="115" fill="#6b7280" fontSize="11" textAnchor="end">37K</text>
                <text x="40" y="175" fill="#6b7280" fontSize="11" textAnchor="end">25K</text>
                <text x="40" y="235" fill="#6b7280" fontSize="11" textAnchor="end">12K</text>
                <text x="40" y="295" fill="#6b7280" fontSize="11" textAnchor="end">0</text>

                {/* Data Points Configuration: [X, Height, BarLabel, DataText] */}
                {/* November */}
                <rect x="90" y="278" width="45" height="12" rx="4" fill="#3b82f6" opacity="0.65" />
                <text x="112" y="265" fill="#1e3a8a" fontSize="11" fontWeight="bold" textAnchor="middle">2.4K</text>
                
                {/* December */}
                <rect x="180" y="248" width="45" height="42" rx="4" fill="#3b82f6" opacity="0.75" />
                <text x="202" y="235" fill="#1e3a8a" fontSize="11" fontWeight="bold" textAnchor="middle">8.5K</text>

                {/* January */}
                <rect x="270" y="210" width="45" height="80" rx="4" fill="#3b82f6" opacity="0.8" />
                <text x="292" y="195" fill="#1e3a8a" fontSize="11" fontWeight="bold" textAnchor="middle">16K</text>

                {/* February */}
                <rect x="360" y="155" width="45" height="135" rx="4" fill="#3b82f6" opacity="0.85" />
                <text x="382" y="140" fill="#1e3a8a" fontSize="11" fontWeight="bold" textAnchor="middle">27K</text>

                {/* March */}
                <rect x="450" y="108" width="45" height="182" rx="4" fill="#3b82f6" opacity="0.9" />
                <text x="472" y="93" fill="#1e3a8a" fontSize="11" fontWeight="bold" textAnchor="middle">38K</text>

                {/* April */}
                <rect x="540" y="80" width="45" height="210" rx="4" fill="#ff9900" />
                <text x="562" y="65" fill="#ea580c" fontSize="11" fontWeight="bold" textAnchor="middle">43K</text>

                {/* Connecting Trend Line */}
                <path d="M 112 278 L 202 248 L 292 210 L 382 155 L 472 108 L 562 80" fill="none" stroke="#2563eb" strokeWidth="3" />
                <circle cx="112" cy="278" r="4.5" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                <circle cx="202" cy="248" r="4.5" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                <circle cx="292" cy="210" r="4.5" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                <circle cx="382" cy="155" r="4.5" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                <circle cx="472" cy="108" r="4.5" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                <circle cx="562" cy="80" r="5" fill="#ffffff" stroke="#ff9900" strokeWidth="3" />

                {/* X Axis Labels */}
                <text x="112" y="320" fill="#4b5563" fontSize="11" fontWeight="bold" textAnchor="middle">November</text>
                <text x="202" y="320" fill="#4b5563" fontSize="11" fontWeight="bold" textAnchor="middle">December</text>
                <text x="292" y="320" fill="#4b5563" fontSize="11" fontWeight="bold" textAnchor="middle">January</text>
                <text x="382" y="320" fill="#4b5563" fontSize="11" fontWeight="bold" textAnchor="middle">February</text>
                <text x="472" y="320" fill="#4b5563" fontSize="11" fontWeight="bold" textAnchor="middle">March</text>
                <text x="562" y="320" fill="#ff9900" fontSize="11" fontWeight="black" textAnchor="middle">April</text>

                {/* Subtext */}
                <text x="350" y="342" fill="#9ca3af" fontSize="10" fontStyle="italic" textAnchor="middle">6 Months Marketing Traffic Growth Chart</text>
              </svg>
            </div>
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
