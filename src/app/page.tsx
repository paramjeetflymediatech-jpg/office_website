"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ReviewsSection from "@/components/ReviewsSection";
import SEOMonitor from "@/components/SEOMonitor";
import ClientsSlider from "@/components/ClientsSlider";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import ServicesGrid from "@/components/ServicesGrid";
import TypewriterText from "@/components/TypewriterText";

const SLIDING_TEXTS = ["Generate More Leads", "Generate More Revenue"];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Mouse Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % SLIDING_TEXTS.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#f1f1f1] font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex  items-center pt-24 lg:pt-0 px-4 sm:px-6 lg:px-24 overflow-hidden">
        {/* Decorative Background Patterns */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Authentic Grayscale Butterfly Pattern */}
          <div className="absolute inset-0 opacity-[0.05] lg:opacity-[0.08] scale-110 pointer-events-none">
            <Image
              src="/image.png"
              alt="Background Pattern"
              fill
              className="object-cover object-left"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 bg-img['/image.png'] lg:grid-cols-2 md:grid-cols-2 items-center relative z-10 w-full gap-12 lg:gap-0">
          {/* Left Content */}
          <div className=" text-center lg:text-left flex flex-col items-center lg:items-start order-2 md:order-1">
            <h2 className="text-[#FA7E09] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight flex justify-center lg:justify-start min-h-[1.2em]">
              <TypewriterText key={textIndex} text={SLIDING_TEXTS[textIndex]} speed={70} />
            </h2>
            <h1 className="text-[32px] md:text-[42px] font-bold text-[#000] leading-tight md:leading-[56px] max-w-3xl mt-2" style={{ fontFamily: '"Playfair Display", Sans-serif' }}>
              With Your Trusted Partner For Result-Oriented Digital Marketing Solutions
            </h1>
            <p className="text-gray-700 font-medium max-w-lg leading-relaxed pt-2 text-[16px]">
              Make your business reach new heights of digital success through our comprehensive range of digital marketing solutions. From Social Media Marketing, SEO, and Content Writing to Website Design, Graphic design and a lot more, we cover all your digital marketing needs. Contact Us Today!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-4 w-full sm:w-auto">
              <Link href="/about-us" className="group flex items-center justify-center gap-2 text-[#FA7E09] font-bold text-lg hover:text-black transition-colors w-full sm:w-auto">
                About Us
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/contact-us" className="bg-[#FA7E09] text-white font-bold px-8 sm:px-10 py-4 rounded-full flex items-center justify-center gap-3 text-lg shadow-xl shadow-[#ff9900]/20 hover:bg-[#FF9A3B] transition-all hover:scale-105 w-full sm:w-auto">
                Contact Us
                <div className="flex gap-0.5">
                  <ChevronRight className="w-4 h-4" />
                  <ChevronRight className="w-4 h-4 -ml-2" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative h-[300px] sm:h-[450px] lg:h-[473px] flex items-center justify-center order-1 lg:order-2 w-full [perspective:1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full h-full lg:transform lg:translate-x-10  lg:scale-125"
            >
              <Image
                src="/butrterfly.png"
                alt="Monarch Butterfly"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Reel Section - Contained */}
      <section className="bg-white relative overflow-hidden mt-10 lg:mt-0 max-w-7xl mx-auto">
        <video
          src="/scrap/Archive/flymediatech.com_home/assets/videos/video_0.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
      </section>

      <ServicesGrid />

      <ClientsSlider />

      <ReviewsSection />


      {/* SEO Services Section */}
      <section className="bg-[#fdf0e1] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

            {/* Left: Monitor Display */}
            <div className="relative order-1 lg:order-1">
              <SEOMonitor />
            </div>

            {/* Right: Content */}
            <div className="space-y-8 order-2 lg:order-2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold leading-[1.1] text-black flex flex-col items-center lg:items-start">
                <span className="text-[#ff9900]">
                  <TypewriterText text="Increased Reach" speed={80} />
                </span>
                <span>On Your Website</span>
                <span>With Our Reliable</span>
                <span>SEO Services</span>
              </h2>
              <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                With an aim to help your business break through barriers and achieve excellence in digital marketing, the best website designing company in India empowers your business to communicate efficiently to the world and surpass the limits of your imagination by fueling your growth engine and elevating your power.
              </p>
              <div className="pt-4 flex justify-center lg:justify-start">
                <Link
                  href="/contact-us"
                  className="bg-[#ff9900] text-white font-bold px-10 py-4 rounded-full flex items-center gap-3 text-lg shadow-xl shadow-[#ff9900]/20 hover:bg-black transition-all hover:scale-105"
                >
                  Contact Us
                  <div className="flex gap-0.5">
                    <ChevronRight className="w-5 h-5" />
                    <ChevronRight className="w-5 h-5 -ml-3" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustriesSection />


      <FAQSection />
    </main>
  );
}
