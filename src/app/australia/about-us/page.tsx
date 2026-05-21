"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getPortfolioItems } from "@/app/actions/portfolio";
import { motion, AnimatePresence } from "framer-motion";
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
  Briefcase,
  X
} from "lucide-react";

export default function AustraliaAboutUs() {
  const [activeTab, setActiveTab] = useState("Car Detailing");
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const [portfolioTabs, setPortfolioTabs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const dbData = await getPortfolioItems();

        // Filter DB items for Australia About Us
        const targetedDbItems = dbData
          .filter((item: any) => (item.location || "").toLowerCase() === "australia-about")
          .map((item: any) => ({
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            category: item.category || "General",
          }));

        let finalItems = targetedDbItems;

        // If DB has no items uploaded for Australia, use the beautiful default fallback images
        if (finalItems.length === 0) {
          finalItems = [
            { id: "au-1", title: "Meat Mechanics", imageUrl: "/uploads/2024/05/meat-mechanics.png", category: "Restaurent" },
            { id: "au-2", title: "Lakeview Dental", imageUrl: "/uploads/2024/05/lakeview.png", category: "Technology" },
            { id: "au-3", title: "Grand Indian Cuisine", imageUrl: "/uploads/2024/05/grand-indian-cuisine.png", category: "Restaurent" },
            { id: "au-4", title: "Grand Bukhara", imageUrl: "/uploads/2024/05/grand-bukhara.png", category: "Restaurent" },
            { id: "au-5", title: "Cholas Restaurant", imageUrl: "/uploads/2024/05/cholas-2.png", category: "Restaurent" },
            { id: "au-6", title: "Binge Café", imageUrl: "/uploads/2024/05/binge.png", category: "Restaurent" },
            { id: "au-7", title: "Asees Indian Restaurant", imageUrl: "/uploads/2024/05/asees-1.png", category: "Restaurent" },
            { id: "au-8", title: "TGP Portal", imageUrl: "/uploads/2024/05/TGP-1.png", category: "Car Rental" },
            { id: "au-9", title: "Sylvania Retailers", imageUrl: "/uploads/2024/05/sylvania-1.png", category: "Real Estate" },
            { id: "au-10", title: "Pizza Shed", imageUrl: "/uploads/2024/05/pizza-shed-2.png", category: "Restaurent" },
            { id: "au-11", title: "NTH Consulting", imageUrl: "/uploads/2024/05/nth-1.png", category: "Car Detailing" },
            { id: "au-12", title: "Yes Nurse", imageUrl: "/uploads/2024/05/yes-nurse.png", category: "Technology" },
            { id: "au-13", title: "Singh Finance", imageUrl: "/uploads/2024/05/singh-finance.png", category: "Finance" },
            { id: "au-14", title: "NES Electrical", imageUrl: "/uploads/2024/05/NES-electrical.png", category: "Industries" },
            { id: "au-15", title: "Mom & Dad Healthcare", imageUrl: "/uploads/2024/05/mom-and-dad.png", category: "E-Commerce" },
            { id: "au-16", title: "MIG Enterprises", imageUrl: "/uploads/2024/05/MIG-enterprises.png", category: "Industries" },
            { id: "au-17", title: "AB Logistics", imageUrl: "/uploads/2024/05/AB-1.png", category: "E-Commerce" },
          ];
        }

        setPortfolioItems(finalItems);

        // Dynamically compute unique categories from database/fallback list
        const uniqueCategories = Array.from(new Set(finalItems.map((item: any) => item.category)))
          .filter(Boolean)
          .sort((a: any, b: any) => a.localeCompare(b));

        if (uniqueCategories.length > 0) {
          setPortfolioTabs(uniqueCategories);
          setActiveTab(uniqueCategories[0]);
        }
      } catch (err) {
        console.error("Error loading portfolio items:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Filter current activeTab items (normalize match casing e.g. Restaurant vs Restaurent)
  const filteredCurrentItems = portfolioItems.filter((item) => {
    const itemCat = item.category.toLowerCase();
    const tabCat = activeTab.toLowerCase();

    // Support spelling variation: Restaurent / Restaurant
    if (tabCat === "restaurent" || tabCat === "restaurant") {
      return itemCat === "restaurent" || itemCat === "restaurant";
    }
    return itemCat === tabCat;
  });



  const services = [
    {
      title: "Digital Consultancy",
      desc: "Fly Media offers digital consultancy to clients. We first understand your requirements and formulate strategic plans to accomplish these objectives using digital marketing components. These include web designing and development, branding, reputation management, amplifying business presence, content marketing, social media marketing and many more.",
      image: "/uploads/2024/04/i01.jpg",
      icon: <UserCheck size={24} />,
      link: "/australia/digital-consultancy"
    },
    {
      title: "Pay Per Click (PPC) Advertising",
      desc: "We help use Pay-Per-Click campaigns to ensure your ads reach the target audience at the right time. In addition, we also help in maximising your ROI through our data-driven PPC campaigns.",
      image: "/uploads/2024/04/img02.jpg",
      icon: <Monitor size={24} />,
      link: "/australia/ppc"
    },
    {
      title: "Content Marketing",
      desc: "In the current era, content is the key and when used correctly, it can significantly elevate your digital presence. We help curate compelling and captivating content that resonates with your audience and use content marketing strategies to help it reach the target audience.",
      image: "/uploads/2024/04/img04.jpg",
      icon: <FileText size={24} />,
      link: "/australia/content-marketing-strategy"
    },
    {
      title: "Social Media Marketing",
      desc: "This includes improving your presence on social media by using social media platforms for brand awareness generating leads and conversions by engaging and connecting with the audience. As the best digital marketing agency, we will help formulate effective social media marketing strategies to attain your objectives.",
      image: "/uploads/2024/04/img06.jpg",
      icon: <Share2 size={24} />,
      link: "/australia/social-media-marketing"
    },
    {
      title: "Mobile App Marketing",
      desc: "Most people spend their time on their smartphones; you can leverage benefits from this using our effective mobile app marketing services. We offer SMS marketing, Mobile advertising, Mobile SEO, Push notifications, social media marketing and more.",
      image: "/uploads/2024/03/IIMG01.jpg",
      icon: <Smartphone size={24} />,
      link: "/australia/mobile-marketing"
    },
    {
      title: "Search Engine Optimisation (SEO)",
      desc: "SEO helps businesses increase their visibility and drive organic traffic. With the help of our strategic SEO services, improve the ranking of your business on search engines and help get more clients to your website.",
      image: "/uploads/2024/04/im08.jpg",
      icon: <Search size={24} />,
      link: "/australia/search-engine-optimization"
    }
  ];

  const whyChooseUsData = [
    {
      title: "Proven Track Record",
      desc: "Fly media has helped many startups and professionals elevate their online presence in the digital landscape. Our work speaks for itself. We have a proven track record of delivering digital success to multiple businesses across the globe. Our strong portfolio is a testament to our dedication and enthusiasm to help other companies create their online presence. So, join the best digital marketing agency in Sydney and embark on your journey to digital success.",
      image: "/uploads/2024/04/i01.jpg",
      icon: <Target size={24} className="text-white" />
    },
    {
      title: "Customised Solutions and Packages",
      desc: "We understand that every person and business has different requirements, needs and goals. What works for one company may or may not work for you. Hence, we offer customised solutions and packages to cater to all your digital marketing needs. Let us know about your specific goals and objectives, and we will curate a bespoke solution tailored to your unique needs.",
      image: "/uploads/2024/04/img02.jpg",
      icon: <Monitor size={24} className="text-white" />
    },
    {
      title: "Experience and Expertise",
      desc: "Fly Media Technology has over 12 years of experience in the industry. We understand the know-how of the digital marketing field and the qualities required to stand out from the rest. Elevate your digital presence with Fly Media, the best digital marketing company.",
      image: "/uploads/2024/04/img04.jpg",
      icon: <Award size={24} className="text-white" />
    },
    {
      title: "Dedicated Team",
      desc: "Another reason to choose Fly Media Technology is our dedicated team. Our team is our asset. We have professional team members who are experts and skilled in their respective fields. With their experience and ability to think out of the box, we help our clients achieve their digital marketing goals.",
      image: "/uploads/2024/04/img06.jpg",
      icon: <Users size={24} className="text-white" />
    },
    {
      title: "Continuous Improvement",
      desc: "As change is the only constant and there is always a scope for improvement, we regularly evolve, learn and elevate our skills to stay in the forefront of the digital marketing realm. It helps us tackle and withstand the challenges of the fast-paced digital marketing world.",
      image: "/uploads/2024/03/IIMG01.jpg",
      icon: <BarChart3 size={24} className="text-white" />
    },
    {
      title: "Prioritise Client Satisfaction",
      desc: "We aim to deliver optimum client satisfaction and ensure that we consider your goals, objectives, requirements, opinions and feedback. We understand the importance of communication and provide complete transparency in every project step. This sets us apart from others and is one of the reasons which help satisfy our clients.",
      image: "/uploads/2024/04/im08.jpg",
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
            <div className="absolute inset-0 -z-10" />
            <div className="relative p-4 overflow-hidden aspect-square ">
              <Image
                src="/uploads/2024/03/Anujgupta.png"
                alt="Dr. Anuj Gupta"
                fill
                className="object-cover duration-700"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Leadership section (Mr. Bala) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute bg-[#ff9900] -z-10" />
            <div className="relative bg-white p-4 overflow-hidden aspect-square">
              <Image
                src="/uploads/2024/07/BALAYA.jpg"
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
            <source src="/uploads/2024/03/4785844_Shape_Blast_Explosion_1280x7201.mp4" type="video/mp4" />
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
              <span className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                Contact Us
                <ChevronsRight size={20} />
              </span>

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
      {/* 5. Same-To-Same Elementor / ElementsKit Simple Tab Portfolio Section */}
      <section className="py-24 px-4 overflow-hidden bg-[#FA7E09] elementor-element elementor-element-cf08276 e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-parent e-lazyloaded" data-id="cf08276" data-element_type="container">
        {/* ElementsKit Custom Style Block */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .elementkit-tab-nav {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            list-style: none;
            padding: 0;
            gap: 0.5rem;
            margin-bottom: 3.5rem;
          }
          .elementkit-nav-item {
            margin-bottom: 0.25rem;
          }
          .elementkit-nav-link {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            font-size: 0.85rem;
            font-weight: 700;
            color: #ffffff;
            background-color: #000000;
            border-radius: 4px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            text-transform: capitalize;
            text-decoration: none;
          }
          .elementkit-nav-link:hover {
            background-color: #ff9900;
            color: #000000;
          }
          .elementkit-nav-link.active-tab {
            background-color: #ff9900;
            color: #000000;
            box-shadow: 0 10px 15px -3px rgba(255, 153, 0, 0.2), 0 4px 6px -2px rgba(255, 153, 0, 0.1);
          }
          .elementor-heading-title {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            font-weight: 800;
            color: #000000;
            margin-bottom: 2rem;
          }
          /* Premium Webpage Auto-Scroll Hover Effect */
          .scroll-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            transition: object-position 5s ease-in-out;
          }
          .scroll-container:hover .scroll-img {
            object-position: bottom;
          }
        `}} />

        <div className="max-w-7xl mx-auto text-center e-con-inner bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-2xl">
          <div className="elementor-element elementor-element-5090cac e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no e-con e-child" data-id="5090cac" data-element_type="container">

            {/* Elementor Heading Widget */}
            <div className="elementor-element elementor-element-21f4937 elementor-widget elementor-widget-heading" data-id="21f4937" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-default">Portfolio</h1>
              </div>
            </div>

            {/* ElementsKit Simple Tab Widget */}
            <div className="elementor-element elementor-element-686ee43 elementor-widget elementor-widget-elementskit-simple-tab" data-id="686ee43" data-element_type="widget" data-widget_type="elementskit-simple-tab.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="elementkit-tab-wraper elementskit-fitcontent-tab">

                    {/* ElementsKit Simple Tab Navigation List */}
                    <ul className="nav nav-tabs elementkit-tab-nav">
                      {portfolioTabs.map((tab, idx) => (
                        <li key={tab} className={`elementkit-nav-item elementor-repeater-item-${idx}`}>
                          <a
                            onClick={() => setActiveTab(tab)}
                            className={`elementkit-nav-link left-pos ${activeTab === tab ? "active-tab" : ""
                              }`}
                          >
                            <span className="elementskit-tab-title"> {tab}</span>
                          </a>
                        </li>
                      ))}
                    </ul>

                    {/* ElementsKit Tab Panes Content Container */}
                    {loading ? (
                      <div className="flex items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-[#ff9900]/20 border-t-[#ff9900] rounded-full animate-spin" />
                      </div>
                    ) : filteredCurrentItems.length > 0 ? (
                      <div className="tab-content elementkit-tab-content">
                        <div className="tab-pane elementkit-tab-pane active show" role="tabpanel">
                          <div className="animated fadeIn grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                            {filteredCurrentItems.map((item) => (
                              <div
                                key={item.id}
                                onClick={() => setSelectedImage(item.imageUrl)}
                                className="scroll-container group relative aspect-[3/4] bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                              >
                                {/* Image Frame with Auto-Scrolling on Hover */}
                                <div className="relative w-full h-full overflow-hidden bg-[#FBFBFB]">
                                  <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="scroll-img"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    unoptimized
                                  />
                                </div>

                                {/* Hover Glass Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-16 bg-white rounded-[2rem] border border-dashed border-gray-100">
                        <Search size={32} className="mx-auto text-gray-300 mb-3" />
                        <h4 className="text-gray-900 font-bold text-lg">No Projects Found</h4>
                        <p className="text-gray-400 text-sm">We are currently updating our portfolio for {activeTab}. Check back soon!</p>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Slideshow Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/15 p-3 rounded-full hover:bg-white/20 transition-all shadow-md"
            >
              <X size={24} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full h-full flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-full max-w-5xl h-full max-h-[85vh] pointer-events-auto">
                <Image
                  src={selectedImage}
                  alt="Enlarged Portfolio View"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
