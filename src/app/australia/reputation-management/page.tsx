"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export default function ReputationManagement() {
  return (
    <main className="min-h-screen bg-[#F4F4F4] font-sans text-[#333333]">

      {/* 1. Hero Section (Left-aligned Image on Desktop, First on Mobile) */}
      <section className="relative py-12 md:py-10 overflow-hidden bg-[#F4F4F4]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Image Column */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-square max-w-[480px]">
                <Image
                  src="/uploads/2024/03/insta-1.png"
                  alt="Online Reputation Management Services Sydney"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-2">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight font-serif"
              >
                Online Reputation Management Services Sydney, Australia | Flymedia Technology
              </h1>

              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl md:text-2xl font-bold font-serif text-black"
              >
                Reputation Management Agency Sydney
              </h2>

              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Online Reputation Management Services <strong>Stanhope Gardens, Blacktown</strong>, Gaining a brand image in such a way that defines dignity and integrity, is the motto of our company. More the reputation, better shall be the visibility on the online portals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Body Copy Paragraphs (Continuous Clean Layout) */}
      <section className="bg-[#F4F4F4] pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-7xl text-gray-700 text-[15px] sm:text-base leading-relaxed space-y-4">
            <p>
              The visibility is being increased post the branding of an online business. A reputation once created, can definitely automatically pull up sponsors and an audience that would help you rank to the top. Certain keywords can be used in order to drag the content or the web page to the top of a search engine. There are two types of branding, one is positive, while the other one is negative.
            </p>
            <p>
              We offer a technique called online social monitoring, so that a basic analysis could be made of the current online reputation your business has in the market. Every opportunity is sought for, as in where to limit your <Link href="/australia/pay-per-click" className="text-pink-600 underline hover:text-[#EC7317] transition-colors">advertising </Link>and where to boost. This ways such opportunities can be effectively utilized and sales leads can be acquired.
            </p>
            <p>
              Our large network of media contacts allows us to know the time and place for everything that you create as a brand in the online world. This way, every opportunity is utilized and all content is created with a discernible target audience in mind.
            </p>
            <p>
              A Reputation Management Agency Sydney Report is made which could be delivered to the business and they could sense the right way to advertise themselves hereafter. Some people deliberately try to create a negative reputation of your company. Keeping track of them and blocking them out of your list is another task to do. These can be competitors or someone who wants to get an adverse effect on your brand image.
            </p>
            <p>
              On evaluating all circumstances and objectives of the business, an appropriate Reputation Campaign is run though. All the above is based on the vision and resources available with the business.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Three-Card Visual Block Grid Section */}
      <section className="bg-[#F4F4F4] pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Online PR Management */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-6">
              <div className="w-full aspect-[4/3] relative flex items-center justify-center bg-transparent">
                <Image
                  src="/e01.png"
                  alt="Online PR Management"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-black font-serif">
                Online PR Management
              </h3>
            </div>

            {/* Card 2: Social Mentions Monitoring */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-6">
              <div className="w-full aspect-square relative flex items-center justify-center bg-transparent max-w-[240px] mx-auto">
                <Image
                  src="/MAIN.webp"
                  alt="Social Mentions Monitoring"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-black font-serif">
                Social Mentions Monitoring
              </h3>
            </div>

            {/* Card 3: Negative Content Filtering */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-6">
              <div className="w-full aspect-square relative flex items-center justify-center bg-transparent max-w-[240px] mx-auto">
                <Image
                  src="/digital.png"
                  alt="Negative Content Filtering"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold text-black font-serif">
                Negative Content Filtering
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormSection />

    </main>
  );
}
