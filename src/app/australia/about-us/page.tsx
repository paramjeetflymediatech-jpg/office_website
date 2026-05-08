"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Target,
  BarChart3,
  MessageSquare,
  Clock,
  ChevronRight,
  Award,
  Settings,
  Users,
  Monitor,
  Search,
  Smartphone,
  Share2,
  FileText,
  UserCheck,
  Briefcase
} from "lucide-react";

export default function AustraliaAboutUs() {
  const [activeTab, setActiveTab] = useState("E-Commerce");

  const portfolioTabs = [
    "Restaurent", "Technology", "Car Rental", "Car Detailing", "Real Estate", "Finance", "Industries", "E-Commerce"
  ];

  const services = [
    {
      title: "Digital Consultancy",
      desc: "Fly Media offers digital consultancy to clients. We first understand your requirements and formulate strategic plans to accomplish these objectives using digital marketing components. These include web designing and development, branding, reputation management, amplifying business presence, content marketing, social media marketing and many more.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/04/i01.jpg",
      icon: <UserCheck size={24} />,
      link: "/australia/digital-consultancy"
    },
    {
      title: "Pay Per Click (PPC) Advertising",
      desc: "We help use Pay-Per-Click campaigns to ensure your ads reach the target audience at the right time. In addition, we also help in maximising your ROI through our data-driven PPC campaigns.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/04/img02.jpg",
      icon: <Monitor size={24} />,
      link: "/australia/ppc"
    },
    {
      title: "Content Marketing",
      desc: "In the current era, content is the key and when used correctly, it can significantly elevate your digital presence. We help curate compelling and captivating content that resonates with your audience and use content marketing strategies to help it reach the target audience.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/04/img04.jpg",
      icon: <FileText size={24} />,
      link: "/australia/content-marketing-strategy"
    },
    {
      title: "Social Media Marketing",
      desc: "This includes improving your presence on social media by using social media platforms for brand awareness generating leads and conversions by engaging and connecting with the audience. As the best digital marketing agency, we will help formulate effective social media marketing strategies to attain your objectives.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/04/img06.jpg",
      icon: <Share2 size={24} />,
      link: "/australia/social-media-marketing"
    },
    {
      title: "Mobile App Marketing",
      desc: "Most people spend their time on their smartphones; you can leverage benefits from this using our effective mobile app marketing services. We offer SMS marketing, Mobile advertising, Mobile SEO, Push notifications, social media marketing and more.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/03/IIMG01.jpg",
      icon: <Smartphone size={24} />,
      link: "/australia/mobile-marketing"
    },
    {
      title: "Search Engine Optimisation (SEO)",
      desc: "SEO helps businesses increase their visibility and drive organic traffic. With the help of our strategic SEO services, improve the ranking of your business on search engines and help get more clients to your website.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/04/im08.jpg",
      icon: <Search size={24} />,
      link: "/australia/search-engine-optimization"
    }
  ];

  return (
    <main className="min-h-screen bg-[#D0D0D0]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden">
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold text-black mb-6"
            >
              About <span className="relative inline-block">
                Us
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#ff9900]/30 rounded-full" />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-600 font-medium"
            >
              Turn Your Digital Dreams Into Reality With Fly Media Technology
            </motion.p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full">
          <video
            src="/dropdown-icons/ROCKET-FLY.mp4"
            autoPlay
            loop
            muted
            className="object-contain object-bottom w-full h-full opacity-60"
          />
        </div>
      </section>

      {/* 2. Founding Partner Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Fly Media Technology: Your Trusted Partner For Digital Success
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Fly Media Technology was founded by <span className="text-black font-bold">Dr. Anuj Gupta</span>, a Digital Marketing Expert (Google Adword Certified). He founded Fly Media with the aim of helping companies connect with their audience in the digital age. With a wealth of experience of over 12 years in the industry, he is committed to delivering digital excellence and success to his clients.
              </p>
              <p>
                At Fly Media Technology, we are on a journey to empower each of our clients, big or small, to thrive in the digital landscape. We have grown into the <span className="text-black font-bold">best digital marketing agency in Sydney</span> since our humble beginnings. Our success is built on a foundation of transparency, innovation, and dedication to help our clients achieve digital success.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0  -z-10" />
            <div className="relative p-4  overflow-hidden aspect-square ">
              <Image
                src="https://flymediatech.com/australia/wp-content/uploads/2024/03/Anujgupta.png"
                alt="Dr. Anuj Gupta"
                fill
                className="object-cover   duration-700"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Global Leadership section (Mr. Bala) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute bg-[#ff9900]  -z-10" />
            <div className="relative bg-white p-4  overflow-hidden aspect-square">
              <Image
                src="https://flymediatech.com/australia/wp-content/uploads/2024/07/BALAYA.jpg"
                alt="Mr. Bala"
                fill
                className="object-cover "
                unoptimized
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Mr. Bala: A Global Technology Enabler Providing Tailored Solutions Across Diverse Domains
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                With extensive experience in the software industry across multiple countries, Bala is a technology enabler who specializes in providing solutions for complex problems. Bala’s expertise lies in advising clients on best software practices and digital marketing strategies, with a proven track record of delivering consistent results.
              </p>
              <p>
                Bala offers tailored solutions for any type of business, specializing in right-shore resourcing for businesses of any budget and for any type of technology. His expertise spans various domains, including retail, wholesale, e-commerce, marketplaces, real estate, online education, and more.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Brand Success & Services Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Brand Success Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-black"
            >
              Let Us Pave The Way To Your Brand's Success
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Committed to providing remarkable service to clients, the best digital marketing agency in Sydney is here to bring your vision to life and shape your digital destiny. With years of experience and expertise in <Link href="/australia/digital-consultancy" className="text-[#ff9900] font-bold underline">digital marketing</Link>, we have helped countless clients realise the full potential of their business and attain the summit of success.
            </motion.p>
          </div>

          {/* Services Promo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white space-y-4">
                  <div className="w-14 h-14 bg-[#ff9900] rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-[#ff9900] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-4 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.desc}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#ff9900] font-bold text-sm uppercase tracking-widest pt-2 group-hover:gap-4 transition-all"
                  >
                    Click here <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Portfolio Section (New as requested) */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-black mb-12"
          >
            Portfolio
          </motion.h2>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 overflow-x-auto pb-4">
            {portfolioTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all whitespace-nowrap ${activeTab === tab
                    ? "bg-[#ff9900] text-black shadow-lg shadow-[#ff9900]/20"
                    : "bg-white text-gray-500 hover:text-black"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden group relative"
                >
                  <div className="absolute inset-0 bg-[#ff9900]/10 group-hover:bg-[#ff9900]/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-gray-300 group-hover:text-[#ff9900] transition-colors">
                      <Briefcase size={64} strokeWidth={1} />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-black font-bold text-sm bg-white/90 backdrop-blur-sm py-2 rounded-full shadow-lg">
                      {activeTab} Project {i + 1}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
              Why Choose <span className="text-[#ff9900]">Flymedia Sydney?</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Proven Track Record",
                  desc: "We consistently deliver tangible results that help businesses thrive in the digital age.",
                  icon: <BarChart3 size={24} />
                },
                {
                  title: "Customised Solutions",
                  desc: "Every business is unique. We tailor our packages to meet your specific goals and budget.",
                  icon: <Settings size={24} />
                },
                {
                  title: "Experience and Expertise",
                  desc: "Our team consists of industry veterans who are passionate about staying ahead of trends.",
                  icon: <Users size={24} />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-[#ff9900] text-black rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/scrap/Archive/flymediatech.com_home/assets/images/image_1.png"
              alt="Digital Growth"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 7. 24/7 Availability Section (Video Background) */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://flymediatech.com/australia/wp-content/uploads/2024/03/4785844_Shape_Blast_Explosion_1280x7201.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight"
          >
            24/ 7 Availability
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            We offer round-the-clock availability and provide prompt response to client queries ensuring uninterrupted support for clients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-4 bg-[#ff9900] text-black font-bold px-12 py-5 rounded-full hover:bg-white transition-all shadow-2xl group"
            >
              Contact Us
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
