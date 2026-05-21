"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export default function DigitalConsultancy() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans">
      {/* Hero Section */}
      <section className="relative py-10 md:py-10 overflow-hidden bg-[#F1F1F1]">
        {/* Subtle grid pattern for premium visual styling */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          {/* Top section: Two-column grid, ordered to show the image first on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Titles & First 2 Paragraphs (order-2 on mobile, order-1 on desktop) */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-4xl md:text-5xl lg:text-[54px] font-bold text-black leading-[1.15] font-serif"
                >
                  Digital Marketing<br className="hidden md:inline" /> Consultancy & SEO<br className="hidden md:inline" /> Consultants Sydney
                </h1>
              </div>

              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold text-black font-serif"
              >
                Digital Marketing Consultancy Services
              </h2>

              <div className="space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans">
                <p>
                  Digital Marketing Consultants Stanhope Gardens, Blacktown, Gaining
                  consistency and a profitable ROI is the aim of our digital agency. Cost
                  effectiveness and keeping your business up to the mark, is our sure-shot
                  game.
                </p>
                <p>
                  A digital strategy that focuses on gaining popularity, reducing costs, being
                  efficient and effective and connecting better with your audience, is the best
                  strategy ever. With the various social media platforms being used extensively
                  and the Google search engine in particular, it will be beneficial to use such
                  ways to advertise your business there.
                </p>
              </div>
            </div>

            {/* Right Column: High-fidelity illustration (order-1 on mobile, order-2 on desktop) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[540px]">
                <Image
                  src="/uploads/2024/03/bestr-it.png"
                  alt="Digital Marketing Consultancy & SEO Consultants Sydney"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>

          {/* Bottom Section: Full-width Paragraphs 3, 4 & 5 */}
          <div className="mt-12 lg:mt-16 space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans w-full max-w-full">
            <p>
              Every single person on this earth now is owning a mobile phone. Browsing on the
              internet is simply so cheap and easy to understand. The SEO and Digital
              Marketing Consultancy Services in Sydney becomes mandatory to boost online sale
              and business. Thus, showcasing our business products and services in such a
              widely used platform, is the ultimate goal.
            </p>
            <p>
              <Link
                href="/social-media-optimization"
                className="text-[#e25c5c] underline hover:text-[#c23c3c] font-semibold transition-colors duration-200"
              >
                Mobile marketing
              </Link>{" "}
              team is what we separately possess that is fully dedicated to advertising and
              making connections over the phones via the internet. Sending push-up messages,
              notifications and checking out and classifying the interest of the public, can
              make the businesses, focus on its target audience more quickly.
            </p>
            <p>
              A special team has been dedicated to observe consumer behaviors. Tracking the
              views and rating and feedbacks of the viewers, a final decision can be taken on
              how to improvise better on our business products and services. Make your website
              more visible on the search engines and get them noticed!
            </p>
          </div>

        </div>
      </section>

      <ContactFormSection />

    </main>
  );
}
