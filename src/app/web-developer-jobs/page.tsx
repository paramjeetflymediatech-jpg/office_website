'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  Code2,
  Globe,
  Network,
  Palette,
  FileVideo,
  TrendingUp,
  Lightbulb,
  MessageSquare,
  Eye,
  Wrench,
  CheckCircle,
  Briefcase,
  ChevronRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Laptop,
  ArrowUpRight
} from 'lucide-react';

export default function WebDeveloperJobsPage() {
  const duties = [
    {
      icon: <Users className="w-6 h-6 text-[#ff9900]" />,
      title: "Management Collaboration",
      desc: "Meeting with management to discuss all the website needs which include design, functionality, and website interface."
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#ff9900]" />,
      title: "Clean Coding",
      desc: "Write clean, semantic website code with the help of modern programming languages and framework standards."
    },
    {
      icon: <Globe className="w-6 h-6 text-[#ff9900]" />,
      title: "Full Navigation Testing",
      desc: "Create websites and check their complete functionality. From the interface design to the website navigation menus, everything must be perfect."
    },
    {
      icon: <Network className="w-6 h-6 text-[#ff9900]" />,
      title: "Cross-Functional Syncs",
      desc: "Work closely with other team members to identify and refine the exact information that needs to be displayed on the site."
    },
    {
      icon: <Palette className="w-6 h-6 text-[#ff9900]" />,
      title: "Graphic Asset Placement",
      desc: "Work alongside graphics designers to determine what type of visuals and layout assets are required for an elegant brand display."
    },
    {
      icon: <FileVideo className="w-6 h-6 text-[#ff9900]" />,
      title: "Rich Media Integration",
      desc: "Seamlessly integrate high-performance audio, premium graphics, and video elements into the website layout wherever needed."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#ff9900]" />,
      title: "Traffic & Performance Auditing",
      desc: "Check and monitor website traffic spikes, speed metrics, and overall page rendering performance across distinct networks."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#ff9900]" />,
      title: "Scalable Solutions",
      desc: "Suggest innovative technical solutions to make client and corporate projects highly feasible, secure, and scalable."
    }
  ];

  const qualities = [
    {
      number: "01",
      icon: <MessageSquare className="w-8 h-8 text-[#ff9900]" />,
      title: "Communication Skills",
      desc: "You need to work in a collaborative team environment, so you should know how to communicate with other digital designers, content creators, and marketing professionals efficiently to coordinate tasks properly."
    },
    {
      number: "02",
      icon: <Eye className="w-8 h-8 text-[#ff9900]" />,
      title: "Detail-Oriented Mindset",
      desc: "Details are extremely important. Focusing enough time to write code precisely is vital, as even a minor syntax error or misalignment can hamper user experience on live production builds."
    },
    {
      number: "03",
      icon: <Wrench className="w-8 h-8 text-[#ff9900]" />,
      title: "Problem Solving Ability",
      desc: "As a proficient developer and digital designer, it is crucial that you can read existing codebases, inspect and isolate errors, and deploy robust fixes to resolve critical bugs."
    }
  ];

  const environmentBenefits = [
    "Right kind of ambiance to work as a web developer and give your best every time.",
    "Flourish yourself in a way that you have ever thought of. While working in a team you will learn how professionals handle the task. And who knows one day you will be handling a team.",
    "Professional yet comfortable atmosphere to work in and enjoying your work."
  ];

  return (
    <main className="min-h-screen bg-[#F3F4F6] text-black overflow-hidden font-sans pb-16">

      {/* 1. Hero & Header Section */}
      <section className="relative pt-12 md:pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 order-last lg:order-first">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight leading-[1.1] text-gray-900">
              Job Offer: We Are Hiring Web Developer
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
              Are you someone who is always into creating intriguing designs? Does your mind always flow with creativity?
              Well! Learning the skills of a web developer under the professionals is the right fit for you. Grab the perfect
              opportunity to up flank your career and move in the right direction by sending your resume to Flymedia Technology.
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              There is no surprise why <strong className="text-gray-800">Web Developer Jobs In Ludhiana</strong> are gaining massive attention.
              Business owners are shifting to online platforms to promote their brands and increase their user base through optimized websites.
              Start today, and within a few months, you will be ruling the web as an expert developer.
            </p>

          </div>

          {/* Hero Right Media */}
          <div className="lg:col-span-5 relative group order-first lg:order-last">
            <div className="absolute inset-0 bg-[#ff9900]/5 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl p-4 overflow-hidden">
              <img
                src="https://flymediatech.com/wp-content/uploads/2024/04/webs-dei.png"
                alt="Best Website Design & Development Company"
                width={1000}
                height={600}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Move in the Direction Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Image Column (Left) */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute inset-0 bg-[#ff9900]/5 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden p-2">
              <img
                src="/bgimg.png"
                alt="Best Website Design & Development Company in Jalandhar"
                width={1000}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Column (Right) */}
          <div className="lg:col-span-6 space-y-6">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight leading-tight text-gray-900">
              Move in the direction of the growing popularity
            </h2>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 border-l-4 border-[#ff9900] pl-4 italic">
              Web developers are like artists
            </h3>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
              YES! It is true. Designing and creating a website is what the aim of a web developer is. While working on this role you will be responsible for:
            </p>

            {/* List with custom styling */}
            <ul className="space-y-3.5 pl-2">
              {[
                "Handling the site technical aspects",
                "Keep the website performance on top-level",
                "Keep the website speed right",
                "See how much traffic the site can handle"
              ].map((bullet, index) => (
                <li key={index} className="flex items-start gap-3.5 text-gray-700 font-medium">
                  <span className="w-6 h-6 bg-orange-100 border border-orange-200 rounded-full flex items-center justify-center text-[#ff9900] flex-shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-gray-850">{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-150 pt-6 font-medium">
              As a digital designer, you need to develop, create, and test the website on different layouts and also check its functioning. Most importantly it should be user-friendly which means easy to navigate.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Duties Section */}
      <section 
        className="relative w-full py-20 md:py-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/bgimg.png')" }}
      >
        {/* Dark High-contrast Overlay */}
        <div className="absolute inset-0 bg-black/75 z-0 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            
            {/* Header */}
            <div className="space-y-4 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-white leading-tight">
                What will be your duties as a web developer in Flymedia technology?
              </h2>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-gray-200">
                Skills we are looking for:
              </h4>
            </div>

            {/* Premium Double Chevron List */}
            <div className="flex justify-center">
              <ul className="space-y-4 max-w-3xl w-full">
                {[
                  "Meeting with management to discuss all the website needs which include, design, functionality, and website interface.",
                  "Write website code with the help of programming languages.",
                  "Create a website and check its functionality. From the interface to the website navigation menu needs to be right.",
                  "Work with other team members to know about what all information is needed on the site.",
                  "Work along with designers to determine what type of graphics are required.",
                  "Include the audio, graphics, and video to the website layout, wherever needed.",
                  "Check the website traffic",
                  "Suggest technical solutions to make the project feasible and scalable."
                ].map((duty, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-left"
                  >
                    <span className="shrink-0 text-[#ff9900] w-4 h-4 mt-1.5 flex items-center justify-center">
                      <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                      </svg>
                    </span>
                    <span className="text-white/90 text-sm sm:text-base leading-relaxed font-semibold">
                      {duty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Qualities Section */}
      <section className="py-16 md:py-20 bg-gray-100/70 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl space-y-8 pl-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-gray-900 leading-tight">
              What are the important qualities of a web developer?
            </h2>

            <ul className="space-y-6">
              {[
                {
                  title: "Communication skills",
                  desc: "You need to work in a team, so you should know how you have to communicate with other digital designers. So, you must coordinate with others properly."
                },
                {
                  title: "Detail-oriented",
                  desc: "Details are extremely important and what we meant is focusing on enough time to write the code precisely. Even a minor error can hamper the work."
                },
                {
                  title: "Ability to solve problems",
                  desc: "As a web developer and web designer, it is important that you can write code, check the errors, and fix the bugs."
                }
              ].map((quality, index) => (
                <li
                  key={index}
                  className="space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 text-base sm:text-lg font-bold">•</span>
                    <h4 className="text-base sm:text-lg font-extrabold text-gray-900 font-sans">
                      {quality.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-4 font-medium">
                     {quality.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Working at Flymedia Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Content Column (Left) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight leading-tight text-gray-900">
                  What is it like working as a web developer with Flymedia Technology?
                </h2>
              </div>

              <ul className="space-y-4 pl-2">
                {environmentBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3.5 text-gray-700 font-medium"
                  >
                    <span className="w-6 h-6 bg-orange-100 border border-orange-200 rounded-full flex items-center justify-center text-[#ff9900] flex-shrink-0 mt-0.5 shadow-sm">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-gray-750 text-sm sm:text-base leading-relaxed font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 border-t border-gray-100 pt-8 mt-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800">
                  Do you want to learn how to make the web work?
                </h3>
                <p className="text-gray-650 text-base sm:text-lg leading-relaxed font-medium">
                  Work with us and see the difference in your overall growth within no time. The best opportunity awaits you at – Flymedia Technology.
                </p>
              </div>
            </div>

            {/* Media Column (Right) */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-[#ff9900]/5 rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://flymediatech.com/wp-content/uploads/2024/03/entr.jpg"
                  alt="ENT Hospital Digital Marketing Agency in Ludhiana, Punjab, India"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
