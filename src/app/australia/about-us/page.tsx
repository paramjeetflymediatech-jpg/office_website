"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Target,
  BarChart3,
  MessageSquare,
  Clock,
  ChevronRight,
  ChevronsRight,
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

  const whyChooseUsData = [
    {
      title: "Proven Track Record",
      desc: "Fly media has helped many startups and professionals elevate their online presence in the digital landscape. Our work speaks for itself. We have a proven track record of delivering digital success to multiple businesses across the globe. Our strong portfolio is a testament to our dedication and enthusiasm to help other companies create their online presence. So, join the best digital marketing agency in Sydney and embark on your journey to digital success.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/04/i01.jpg",
      icon: <Target size={24} className="text-white" />
    },
    {
      title: "Customised Solutions and Packages",
      desc: "We understand that every person and business has different requirements, needs and goals. What works for one company may or may not work for you. Hence, we offer customised solutions and packages to cater to all your digital marketing needs. Let us know about your specific goals and objectives, and we will curate a bespoke solution tailored to your unique needs.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/04/img02.jpg",
      icon: <Monitor size={24} className="text-white" />
    },
    {
      title: "Experience and Expertise",
      desc: "Fly Media Technology has over 12 years of experience in the industry. We understand the know-how of the digital marketing field and the qualities required to stand out from the rest. Elevate your digital presence with Fly Media, the best digital marketing company.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/04/img04.jpg",
      icon: <Award size={24} className="text-white" />
    },
    {
      title: "Dedicated Team",
      desc: "Another reason to choose Fly Media Technology is our dedicated team. Our team is our asset. We have professional team members who are experts and skilled in their respective fields. With their experience and ability to think out of the box, we help our clients achieve their digital marketing goals.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/04/img06.jpg",
      icon: <Users size={24} className="text-white" />
    },
    {
      title: "Continuous Improvement",
      desc: "As change is the only constant and there is always a scope for improvement, we regularly evolve, learn and elevate our skills to stay in the forefront of the digital marketing realm. It helps us tackle and withstand the challenges of the fast-paced digital marketing world.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/03/IIMG01.jpg",
      icon: <BarChart3 size={24} className="text-white" />
    },
    {
      title: "Prioritise Client Satisfaction",
      desc: "We aim to deliver optimum client satisfaction and ensure that we consider your goals, objectives, requirements, opinions and feedback. We understand the importance of communication and provide complete transparency in every project step. This sets us apart from others and is one of the reasons which help satisfy our clients.",
      image: "https://flymediatech.com/australia/wp-content/uploads/2024/04/im08.jpg",
      icon: <UserCheck size={24} className="text-white" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#D0D0D0]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden">
        <div className="pt-12 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-6xl md:text-8xl font-bold text-black mb-6"
            >
              About <span className="relative inline-block">
                Us
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff9900]"></div>
              </span>
            </h1>
            <p
              className="text-xl md:text-4xl font-serif text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Turn Your Digital Dreams Into Reality With Fly Media Technology
            </p>
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

   

      {/* Video Reel Section - Contained */}
      <section className="bg-white relative overflow-hidden mt-10 lg:mt-0 max-w-7xl mx-auto group">
        <video
          src="/scrap/Archive/flymediatech.com_home/assets/videos/video_0.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
      </section>

      {/* 2. Founding Partner Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
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
          </div>

          <div className="relative">
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
          </div>
        </div>
      </section>


      {/* 3. Global Leadership section (Mr. Bala) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
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
          </div>

          <div className="space-y-8 order-1 lg:order-2">
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
          </div>
        </div>
      </section>

      {/* 4. Brand Success & Services Section */}
      <section className="py-24 px-4 overflow-hidden bg-[#F3F3F3]">
        <div className="max-w-7xl mx-auto">
          {/* Brand Success Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Let Us Pave The Way To Your Brand's Success
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Committed to providing remarkable service to clients, the best digital marketing agency in Sydney is here to bring your vision to life and shape your digital destiny. With years of experience and expertise in <Link href="/australia/digital-consultancy" className="text-[#ff9900] font-bold underline">digital marketing</Link>, we have helped countless clients realise the full potential of their business and attain the summit of success.
            </p>
          </div>

          {/* Services Promo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative h-[400px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white transition-all duration-500"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end space-y-3 z-10">
                  <div className="w-14 h-14 bg-[#ff9900] text-white rounded-xl flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight text-black group-hover:text-[#ff9900] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed group-hover:text-white transition-colors duration-500">
                    {service.desc}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-black group-hover:text-[#ff9900] font-bold text-sm uppercase tracking-widest pt-2 group-hover:gap-4 transition-all duration-500"
                  >
                    Click here <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 {/* 7. 24/7 Availability Section (Video Background) */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
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
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            24/ 7 Availability
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto leading-relaxed">
            We offer round-the-clock availability and provide prompt response to client queries ensuring uninterrupted support for clients.
          </p>
          <div>
            <Link
              href="/contact-us"
              className="relative inline-flex items-center justify-center bg-[#ff9900] text-black font-bold px-12 py-5 rounded-full overflow-hidden shadow-2xl group transition-all duration-300 hover:bg-white active:scale-95"
            >
              {/* Slide-out Initial Content */}
              <span className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                Contact Us
                <ChevronsRight size={20} />
              </span>

              {/* Slide-in Hover Content (Go) */}
              <span className="absolute inset-0 flex items-center justify-center gap-2 translate-x-[-100%] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-black">
                Go <ChevronsRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      
      {/* 4.5 Why Choose Fly Media Technology Section */}
      <section className="py-24 px-4 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-bold text-black"
            >
              Why Choose Fly Media Technology?
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                className="group relative h-[400px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white transition-all duration-500"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end space-y-3 z-10">
                  <div className="w-12 h-12 bg-[#ff9900] rounded-xl flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight text-black group-hover:text-[#ff9900] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Portfolio Section (New as requested) */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-black mb-12">
            Portfolio
          </h2>

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          </div>
        </div>
      </section>
      
    </main>
  );
}
