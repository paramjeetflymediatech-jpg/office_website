"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import { Laptop, Smartphone, Palette, Zap, Phone } from "lucide-react";

export default function CanadaWebDesignPage() {
  const designPillars = [
    {
      title: "Custom UI/UX Excellence",
      desc: "We craft bespoke user interfaces that visually engage visitors and map intuitive user journeys to guide them seamlessly toward conversion.",
      icon: <Palette className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Flawless Responsiveness",
      desc: "Your website will adapt beautifully to mobile phones, tablets, and desktops, ensuring a perfect browsing experience across all screen sizes.",
      icon: <Smartphone className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Speed & Performance Optimization",
      desc: "We build lightweight, lightning-fast web pages optimized for core web vitals to keep bounce rates minimal and search engines happy.",
      icon: <Zap className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Robust CMS Architecture",
      desc: "Empower your team with flexible content management platforms that allow effortless updates to text, imagery, and products.",
      icon: <Laptop className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16 text-black">

      {/* 1. Hero Title Banner */}
      <section className="relative w-full h-[220px] sm:h-[280px] bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/sdlhfds.webp')`
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 px-8 py-5 rounded-xl shadow-2xl inline-block">
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-serif"
            >
              Web Designing in{" "}
              <span className="text-[#ff9900] relative inline-block">
                Canada
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#ff9900]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Core Content Section (Design The Digital Success Of Your Business) */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="/uploads/2024/05/lifdshiofhdns.jpg"
                  alt="Web Designing"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Right Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Design The Digital Success Of Your Business
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Build a smooth and attractive user experience on your website with the company for the best <strong className="text-black font-semibold">web designing Surrey</strong> and convert visitors into potential buyers.
                </p>
                <p>
                  A website is a digital door to your business for the users to explore your products and services in the best possible way. The user experience of the business highly matters as it leaves a great impression on the users and compels them to stay hooked to the website. The more the users spend time on your website, the more their chances of becoming your potential customers are, and this is what the company for the best <strong className="text-black font-semibold">web designing Canada</strong> aims for.
                </p>
              </div>
            </div>

          </div>

          <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed w-full">
            <p>
              We provide a trustworthy and credible service to our customers by putting great effort into every single operation associated with web designing for your business. Your website is a path for customers to reach your business, and we ensure that it is clear and easily accessible with an experience that the customers will never forget and want more.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Creating An Excellent Experience */}
      <section className="py-16 md:py-10 ">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Creating An Excellent Experience
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Your website should have all the information associated with your business and clearly present the purpose of your business. Therefore, we dig deep into the history of your business to create an incredible design for your website that anyone would fall in love with. The best company for <strong className="text-black font-semibold">web designing British Columbia</strong> ensures to include all the elements in the website to let the people know of your existence as well as the products and services you offer.
                </p>
                <p>
                  Users generally opt for a website that is easily accessible and fulfils all their needs and requirements in one place. Your business has everything that it takes to be a success, but what you require is a source for the customers to reach you, and the best company for <strong className="text-black font-semibold">web designing Surrey</strong> is here for that.
                </p>
              </div>
            </div>

            {/* Right Column: Image Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full aspect-[4/5] max-w-[460px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="/uploads/2024/05/gdfgdfgs.png"
                  alt="Creating An Excellent Experience - Web Designing"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

          </div>

          <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed w-full pt-4">
            <p>
              An old and boring website with a few features will reduce the interest of the user. Therefore, it’s essential to make the website impressive and everything that the user is looking for.
            </p>
            <p>
              With the best company for <strong className="text-black font-semibold">web designing Canada,</strong> create an unforgettable experience for your website and attract new leads every day.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Craft An Invincible Online Presence */}
      <section className="py-16 md:py-10 ">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full aspect-[1/1] max-w-[460px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="/uploads/2024/05/fsdfasdfsda.png"
                  alt="Craft An Invincible Online Presence - Web Designing"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Craft An Invincible Online Presence
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  A website allows you to create an unbeatable online presence. It takes the right approach and in-depth research of your business to create a website that efficiently conveys your message to the customers. A good website with a great user experience and impressive features will never let you down.
                </p>
                <p>
                  The best company for <strong className="text-black font-semibold">web designing Surrey</strong> makes website operation easy and accessible. We craft a design that guides the users for a call to action and helps them acquire the products and services of your business without putting in any effort.
                </p>
                <p>
                  A hassle-free website experience helps to captivate the minds of users and turn them into permanent potential customers.
                </p>
              </div>
            </div>

          </div>

          <div className="space-y-6 text-gray-700 text-[15px] sm:text-base leading-relaxed w-full pt-4">
            <p>
              Our professional website designers strive for creativity and innovation to separate your business from your competitors and make you stand out. We ensure that we offer a high standard of service while maintaining trust and integrity. Our remarkable results are evidence of our hard work and dedication towards taking your business to the peak of success.
            </p>
            <p>
              Partner with the best company for web designing Surrey and create millions of first good impressions and turn them into potential buyers. With great knowledge and skills attained throughout the years of experience in the digital market, we will create an outstanding website for you that will fit your business needs and requirements perfectly.
            </p>
            <p>
              Contact the best company for <strong className="text-black font-semibold">web designing Canada</strong> today and get closer to your success.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
