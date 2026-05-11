"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, CheckCircle2, Star, Clock, Award } from "lucide-react";
import SEOMonitor from "@/components/SEOMonitor";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const PortfolioSlider = () => {
  const images = ["/web-designing/img01.png", "/web-designing/img02.png", "/web-designing/img03.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={images[index]} 
            alt={`Portfolio ${index + 1}`} 
            fill 
            className="object-cover" 
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function WebDesigningPage() {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const stats = [
    { label: "CREATIVE DESIGNS", value: "4200+", icon: "/web-designing/r01.png" },
    { label: "AWARDS WINNING", value: "250+", icon: "/web-designing/r02.png" },
    { label: "YEARS EXPERIENCE", value: "12+", icon: "/web-designing/r03.png" },
  ];

  const services = [
    {
      title: "eCommerce Websites",
      desc: "We are aimed to design the best eCommerce websites for your business idea which not only attracts more and more customers towards your products and also gives them an un-beatable experience.",
      icon: "/web-designing/icn01-1.png"
    },
    {
      title: "Custom Websites and Applications",
      desc: "We provide more efficiency for your web site, more customized possibilities, and up customized applications to assist you operate your organization on the internet.",
      icon: "/web-designing/setting.png"
    },
    {
      title: "Discussion Forums",
      desc: "We offer excellent discussion discussion board on your own internet site that could engage your web site guests inside discussion, permit them to write subject areas, replies, entail these people inside on-line discussions.",
      icon: "/web-designing/chat.png"
    },
    {
      title: "Web Portals",
      desc: "We design quiet user-friendly and diverse portals related to any business idea, existing or new.",
      icon: "/web-designing/globe.png"
    },
    {
      title: "Flash Websites",
      desc: "Along with great design, we create a fully flash made website with cool animations and interactive navigation.",
      icon: "/web-designing/flash.png"
    }
  ];

  const faqs = [
    { 
      q: "How a premium web design is beneficial?", 
      a: "Your website looks and feels, functionality, and navigation leave a direct impact on the business. So, having the best website design is imperative to engage more customers. At Flymedia, we do not believe in one-size-fits-all and we prefer to use the different development platforms. We design your website to increase the overall brand identity and which can target the specific audience. Our website designers and marketing team will work with you from the start to increase the customer base for your business." 
    },
    { 
      q: "How long do website designing and building take?", 
      a: "The website designing and delivery of the final product depends on the website size and complexity. Simple information websites take less time but complex websites like E-commerce websites take time. Including solid website testing is vital and testing for the complex website takes more time. Our experienced team will do everything on time and bring your website to life." 
    },
    { 
      q: "Why is it important to have mobile responsive website ?", 
      a: "Most of the people prefer to open the website on the mobile device. With the internet, everything has become better. Traditional websites cannot fit the smaller screen size and this makes it difficult to read the text. Everything on the website will be difficult to locate and use. This is why having a mobile-friendly website is essential and it will give the user the best experience. The mobile responsive website design enables the website to get resized according to the device being used. Our team will help you make the best website which will help your business to have an increased online presence." 
    },
    { 
      q: "Why is it vital to have online marketing strategy?", 
      a: "The online marketing strategy will include activities for online content, social media, and online advertising. We provide a full digital marketing service and we make sure your business has the best online marketing strategy. Our talented and experienced team provides you in-depth knowledge of which website design suits your site the best and to get the possible returns from the online marketing investment you will make. For years, we have helped different businesses to have the best online presence with the latest marketing strategies." 
    },
    { 
      q: "What is CMS?", 
      a: "CMS stands for the Content management system. With CMS, it becomes easy to make changes to images, text, and blog posts. With more technical knowledge, our website developer can make changes to pages and website layout easily. The use of CMS is going to save you a lot of money and increase business efficiency. If you are planning to make changes to the website daily CMS is the best choice. For the eCommerce website, the products need to be updated regularly and for that Joomla is the best choice. Joomla provider friendly interface and it is flexible. Our team is trained and experienced, to use the latest technology and methods. We ensure you once you get in touch with our team we will make the best website design which will help your business to stay on the top." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans selection:bg-[#ff9900]/30">
      {/* Page Header / Hero Section - Two Column Layout */}
      <section className="relative pb-20 bg-[#EFEFEF] border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Animated Image */}
            <motion.div 
              style={{ x: translateX }}
              className="relative aspect-square lg:h-[600px] flex items-center justify-center order-2 lg:order-1"
            >
              <Image 
                src="/web-designing/BRANDING.png" 
                alt="Branding" 
                width={800} 
                height={800} 
                className="object-contain"
                priority 
              />
            </motion.div>

            {/* Right: Content */}
            <div className="space-y-6 order-1 lg:order-2 text-left">
              <h1 className="text-4xl md:text-6xl lg:text-5xl font-serif font-black text-black leading-[1.1] tracking-tight">
                Best Website Designer in Ludhiana, Punjab
              </h1>
              
              <div className="prose prose-lg text-gray-600 font-medium">
                <p>
                  Best Website Designing in Ludhiana, Here at Flymedia Technology we offer remarkable and quality <span className="text-[#ff9900] font-bold">web designing in India</span> at the best and cheapest prices. At our Website Designing department, we have a team of experienced web designers who have minimum 12+ years of professional experience and who are aware of trendy designing. Our web designers are completely well-planned in whatever they do in designing a website or mobile app. They are filled with a high standard of innovation and creativity.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                 <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-[#ff9900] transition-all transform hover:scale-105 shadow-xl shadow-black/10">
                   Get Started
                 </button>
                 <button className="border-2 border-black text-black px-10 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all">
                   View Work
                 </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Icon Box Section (Second Section) */}
      <section className="py-12 bg-[#EFEFEF] border border-gray-100 overflow-hidden relative z-20 -mt-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
               {/* Box 1: Website Designing */}
               <div className="group flex flex-col items-center text-center p-10 bg-[#EFEFEF] rounded-[32px] border border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-[#FA7E09] flex items-center justify-center mb-8  shadow-black/10">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-white" viewBox="0 0 512 512">
                        <path d="m416.34375 111.632812-24.34375-24.34375-24.34375 24.34375-11.3125-11.3125 35.65625-35.65625 35.65625 35.65625zm0 0"></path>
                        <path d="m384 79.976562h16v88h-16zm0 0"></path>
                        <path d="m432 271.976562h-16v-34.402343c60.359375-12.320313 101.585938-68.34375 95.390625-129.636719-6.191406-61.289062-57.785156-107.9375-119.390625-107.9375s-113.199219 46.648438-119.390625 107.9375c-6.195313 61.292969 35.03125 117.316406 95.390625 129.636719v34.402343h-16v224h-32v-256h-80v256h-32v-192h-80v192h-32v-112h-80v112h-16v16h512v-16h-80zm-352 224h-48v-96h48zm112 0h-48v-176h48zm112 0h-48v-240h48zm-16-376c0-55.507812 43.589844-101.230468 99.035156-103.878906 55.441406-2.652344 103.195313 38.707032 108.492188 93.957032 5.292968 55.253906-33.734375 104.929687-88.671875 112.855468l-6.855469.984375v48.082031h-16v-48.082031l-6.855469-.984375c-51.0625-7.582031-88.933593-51.3125-89.144531-102.933594zm128 376h-48v-208h48zm0 0"></path>
                        <path d="m480 119.976562c0-48.601562-39.398438-88-88-88s-88 39.398438-88 88c0 48.601563 39.398438 88 88 88 48.578125-.058593 87.941406-39.421874 88-88zm-160 0c0-39.765624 32.234375-72 72-72s72 32.234376 72 72c0 39.761719-32.234375 72-72 72-39.746094-.046874-71.957031-32.253906-72-72zm0 0"></path>
                     </svg>
                  </div>
                  <h3 className="text-xl font-serif font-black text-black mb-4">Website Designing</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    We have worked on 4200+ projects ranging from websites for high profile businesses and telecoms to small business websites for start ups also.
                  </p>
               </div>

               {/* Box 2: Award Winning */}
               <div className="group flex flex-col items-center text-center p-10 bg-[#EFEFEF] rounded-[32px] border border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-[#FA7E09] flex items-center justify-center mb-8  shadow-black/10">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-white" viewBox="0 0 512 512">
                        <path d="m416.34375 111.632812-24.34375-24.34375-24.34375 24.34375-11.3125-11.3125 35.65625-35.65625 35.65625 35.65625zm0 0"></path>
                        <path d="m384 79.976562h16v88h-16zm0 0"></path>
                        <path d="m432 271.976562h-16v-34.402343c60.359375-12.320313 101.585938-68.34375 95.390625-129.636719-6.191406-61.289062-57.785156-107.9375-119.390625-107.9375s-113.199219 46.648438-119.390625 107.9375c-6.195313 61.292969 35.03125 117.316406 95.390625 129.636719v34.402343h-16v224h-32v-256h-80v256h-32v-192h-80v192h-32v-112h-80v112h-16v16h512v-16h-80zm-352 224h-48v-96h48zm112 0h-48v-176h48zm112 0h-48v-240h48zm-16-376c0-55.507812 43.589844-101.230468 99.035156-103.878906 55.441406-2.652344 103.195313 38.707032 108.492188 93.957032 5.292968 55.253906-33.734375 104.929687-88.671875 112.855468l-6.855469.984375v48.082031h-16v-48.082031l-6.855469-.984375c-51.0625-7.582031-88.933593-51.3125-89.144531-102.933594zm128 376h-48v-208h48zm0 0"></path>
                        <path d="m480 119.976562c0-48.601562-39.398438-88-88-88s-88 39.398438-88 88c0 48.601563 39.398438 88 88 88 48.578125-.058593 87.941406-39.421874 88-88zm-160 0c0-39.765624 32.234375-72 72-72s72 32.234376 72 72c0 39.761719-32.234375 72-72 72-39.746094-.046874-71.957031-32.253906-72-72zm0 0"></path>
                     </svg>
                  </div>
                  <h3 className="text-xl font-serif font-black text-black mb-4  transition-colors">Award Winning</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Our designs always leave an WOW imprint on our clients mind and soul and thus we used to be maintain prestige in this industry.
                  </p>
               </div>

               {/* Box 3: Services */}
               <div className="group flex flex-col items-center text-center p-10 bg-[#EFEFEF] rounded-[32px] border border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-[#FA7E09] flex items-center justify-center mb-8  shadow-black/10">
                     <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" className="w-10 h-10 fill-white" viewBox="0 0 64 64" data-name="Layer 3">
                        <path d="m62 4h-60a1 1 0 0 0 -1 1v54a1 1 0 0 0 1 1h60a1 1 0 0 0 1-1v-54a1 1 0 0 0 -1-1zm-1 2v10h-58v-10zm-58 14v-2h8v2zm10-2h8v2h-8zm10 0h8v2h-8zm10 0h8a2 2 0 0 1 -2 2h-6zm-30 40v-36h36a4 4 0 0 0 4-4h18v40z"></path>
                        <path d="m8 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
                        <path d="m16 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
                        <path d="m56 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
                        <path d="m24 14h24a3 3 0 0 0 0-6h-24a3 3 0 0 0 0 6zm0-4h24a1 1 0 0 1 0 2h-24a1 1 0 0 1 0-2z"></path>
                        <path d="m52 22a6.948 6.948 0 0 0 -6.92 8h-10.08v-5a1 1 0 0 0 -1-1h-28a1 1 0 0 0 -1 1v24a1 1 0 0 0 1 1h21v5a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-19.685a6.994 6.994 0 0 0 -3-13.315zm-19 4v4h-5a1 1 0 0 0 -1 1v1h-20v-6zm-26 22v-14h20v14zm22 6v-14h24v14zm24-16h-24v-6h16.685a6.907 6.907 0 0 0 7.315 3.92zm-1-4a5 5 0 1 1 5-5 5.006 5.006 0 0 1 -5 5z"></path>
                        <path d="m53.293 26.293-1.293 1.293-1.293-1.293-1.414 1.414 1.293 1.293-1.293 1.293 1.414 1.414 1.293-1.293 1.293 1.293 1.414-1.414-1.293-1.293 1.293-1.293z"></path>
                        <path d="m9 28h2v2h-2z"></path>
                        <path d="m13 28h2v2h-2z"></path>
                        <path d="m31 34h2v2h-2z"></path>
                        <path d="m35 34h2v2h-2z"></path>
                        <path d="m9 36h16v2h-16z"></path>
                        <path d="m9 40h16v2h-16z"></path>
                        <path d="m9 44h12v2h-12z"></path>
                        <path d="m23 44h2v2h-2z"></path>
                        <path d="m31 42h20v2h-20z"></path>
                        <path d="m31 46h20v2h-20z"></path>
                        <path d="m31 50h16v2h-16z"></path>
                        <path d="m49 50h2v2h-2z"></path>
                     </svg>
                  </div>
                  <h3 className="text-xl font-serif font-black text-black mb-4  transition-colors">Services</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    We have firm grip over the technology to work on both Websites and Mobile Apps. Our creative base in designing flows through all technologies in both.
                  </p>
               </div>

            </div>
         </div>
      </section>

      {/* Main Content Area - Full Width Design */}
      <section className="py-24 bg-[#EFEFEF] border border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-32">
            
            {/* Intro Section with Laptop Carousel (Third Section) - Perfected Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  {/* <div className="inline-block px-4 py-1 bg-[#ff9900]/10 rounded-full">
                     <span className="text-[#ff9900] text-[10px] font-black uppercase tracking-widest">Web Design Excellence</span>
                  </div> */}
                  <h2 className="text-3xl md:text-3xl lg:text-4xl font-serif font-black text-black leading-tight">
                    Our Creative Designs Will Put-in Life Into Your Website
                  </h2>
                  <div className="prose prose-lg text-gray-600 max-w-none">
                    <p className="leading-relaxed font-medium">
                      Website designing is a very important base step in starting a successful project. A website is an outline of the services and products that your brand offers and if these services are displayed beautifully and creativity wise in a well-designed manner then it guarantees you leads and compels the website visitor to explore your product and services more and more.
                    </p>
                    <p className="leading-relaxed">
                      We at Flymedia Technology, based in Ludhiana, Punjab work towards providing everything perfectly for creating a good online business setup. And in the end, comes the content which should be good enough to provide accurate knowledge and reviews.
                    </p>
                  </div>
                  <div className="pt-6">
                     <Link href="/portfolio" className="group inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-[#ff9900] transition-all transform hover:scale-105">
                        VIEW OUR PORTFOLIO
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                           <ChevronRight size={18} />
                        </div>
                     </Link>
                  </div>
               </div>

               {/* Monitor Display */}
               <div className="relative">
                  <SEOMonitor />
               </div>
            </div>

            {/* Service Cards Grid (Fourth Section) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {services.map((s, i) => (
                 <div key={i} className="flex flex-col items-center text-center gap-8 p-12 rounded-[40px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                    <div className="w-24 h-24 flex items-center justify-center shrink-0">
                       <Image src={s.icon} alt={s.title} width={80} height={80} className="object-contain" />
                    </div>
                    <div className="space-y-4">
                       <h4 className="font-serif font-black text-2xl text-black">{s.title}</h4>
                       <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">{s.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* Responsive Benefits Section (Fifth Section) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               
               <div className="space-y-10 order-2 lg:order-1">
                  <h2 className="text-3xl md:text-4xl font-serif font-black text-black leading-tight">
                    What do you get from a responsive designed website?
                  </h2>
                  
                  <div className="space-y-2">
                    {[
                      { t: "The Structure", d: "The structure provides a persistent and easily understandable site for the audience." },
                      { t: "Page", d: "Provides to the point information" },
                      { t: "Navigation", d: "Most of the online users will barely stay half a minute on any website so your website has to be less clustered and info to the point." },
                      { t: "Content", d: "Only text is not going to work for any website. In this modern era not only graphics but, videos and info graphics are as important." },
                      { t: "Traffic", d: "Better known as the viewer. You should be well versed with the requirement of your audience." },
                      { t: "Purpose", d: "Site designed especially for your customers catering to their needs making sure correct information reaches them." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                         <div className="w-8 h-8 rounded-full bg-[#ff9900]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff9900] transition-colors duration-300">
                            <ChevronRight size={16} className="text-[#ff9900] group-hover:text-black transition-colors" />
                         </div>
                         <div className="space-y-1">
                            <h4 className="font-black text-black uppercase tracking-tight text-sm group-hover:text-[#ff9900] transition-colors">{item.t}</h4>
                            <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">{item.d}</p>
                         </div>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Right Side: Parallax Mobile Image */}
               <div className="relative order-1 lg:order-2">
                  <motion.div
                    style={{ y: useTransform(scrollYProgress, [0.4, 0.8], [0, -50]), x: useTransform(scrollYProgress, [0.4, 0.8], [0, -30]) }}
                    className="relative z-10"
                  >
                     <Image 
                        src="/web-designing/mobi.png" 
                        alt="Responsive Design" 
                        width={1200} 
                        height={1000} 
                        className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.12)]" 
                     />
                  </motion.div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#ff9900]/5 rounded-full blur-[120px] -z-10" />
               </div>

            </div>

            {/* Responsive Demand Section (Sixth Section) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               
               {/* Left Side: Parallax Search Image */}
               <div className="relative">
                  <motion.div
                    style={{ x: useTransform(scrollYProgress, [0.6, 1], [-100, 0]) }}
                    className="relative z-10"
                  >
                     <Image 
                        src="/web-designing/online-serch.png" 
                        alt="Search Strategy" 
                        width={1000} 
                        height={1000} 
                        className="w-full h-auto" 
                     />
                  </motion.div>
               </div>

               <div className="space-y-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-black text-black leading-tight">
                    A responsive website is the demand of the future, after all with a responsive designed website you get:
                  </h2>
                  
                  <div className="space-y-2">
                    {[
                      "Responsive web designing gives a better display on all devices.",
                      "You get to reach all potential clients.",
                      "Your website traffic will increase while the bounce rates will reduce.",
                      "No matter what device (desktop, notebook, smart phone or tablet) user uses, your site will run smoothly.",
                      "Decrease your cost for having to get sites built for various devices, plus",
                      "By 2015 there will be estimated 788 million internet users."
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#ff9900] transition-all">
                            <ChevronRight size={14} className="text-[#ff9900] group-hover:text-black" />
                         </div>
                         <p className="text-gray-600 font-bold uppercase tracking-tight text-xs group-hover:text-black transition-colors">{item}</p>
                      </div>
                    ))}
                  </div>
               </div>

            </div>

            {/* Final Overview & Recommendation Section (Seventh Section) */}
            <div className="space-y-12 max-w-7xl mx-auto py-12">
               <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p className="leading-relaxed font-medium">
                    No doubt responsive web designing is the future of internet. The aim of responsive web designing services is to provide an advanced website be it for a healthcare, financial service, industry or a selling site.
                  </p>
                  <p className="leading-relaxed">
                    A site has to be able to load fast and provide cross browser compatibility that will be mobile responsive and friendly to the search engine. A responsive designed website helps in attaining a better online outlook and these sites are easily to be viewed on any mobile device as well.
                  </p>
                  <p className="leading-relaxed">
                    One cannot comprehend that development and designing goes side by side and be it a mobile device or the PC a soft running site is the preference of all. With the help of a responsive web design provider you can get your site to be compatible for all devices, even your existing sites.
                  </p>
               </div>

               <div className="space-y-6">
                  <h2 className="text-3xl md:text-5xl font-serif font-black text-black">Recommendation</h2>
                  <div className="bg-[#ff9900]/5 border-l-4 border-[#ff9900] p-10 rounded-2xl">
                    <p className="text-gray-700 text-lg font-bold leading-relaxed italic">
                      "Mobile is definitely the near future and as a service provider it is vital for you to be able to cater to all the internet users be desktop, smart phone or tablet users. Your website is not just a website but, your services mirror. The more a site is viewable, the more traffic you will get."
                    </p>
                  </div>
               </div>
            </div>
             {/* FAQ Section - High Fidelity "Same to Same" Design */}
             <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center">
                   <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-black tracking-tight">Frequently Asked Questions (FAQs)</h2>
                </div>
                
                <div className="space-y-4">
                   {faqs.map((faq, i) => (
                     <details key={i} className="group bg-[#EFEFEF] rounded-2xl border-b-2 border-[#ff9900] overflow-hidden transition-all duration-300 shadow-sm">
                         <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none hover:bg-gray-200/40 transition-colors">
                            <span className="font-sans font-bold text-sm sm:text-base md:text-lg text-gray-900 pr-8">
                               {faq.q}
                            </span>
                            <div className="shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300 group-open:rotate-90">
                               <svg className="w-3 h-3 text-[#ff9900] fill-current" viewBox="0 0 192 512">
                                  <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
                               </svg>
                            </div>
                         </summary>
                         <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-gray-200/80 text-gray-600 font-medium text-xs sm:text-sm md:text-base leading-relaxed">
                               {faq.a}
                            </div>
                         </div>
                     </details>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

