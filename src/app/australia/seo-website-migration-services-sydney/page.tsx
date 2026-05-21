"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export default function WebsiteMigrationSydney() {
  const whyChooseUsPoints = [
    {
      title: "Customized Website Migration Strategies",
      desc: "Every website migration is unique, and one-size-fits-all approaches simply won’t suffice. We tailor our migration strategies to meet your specific needs, whether you are moving to a new domain, redesigning your website, or changing your hosting provider, our consultants meticulously plan each migration to ensure minimal disruptions and maximum efficiency."
    },
    {
      title: "Transparent Communication",
      desc: "Communication is the foundation of a successful migration. We keep you informed at every stage, providing regular updates in progress, challenges, and solutions."
    },
    {
      title: "Comprehensive Pre-Migration Audit",
      desc: "Before embarking on any migration, we conduct a thorough pre-migration audit to identify potential issues. This audit helps us develop a comprehensive migration plan and address any existing SEO concerns."
    },
    {
      title: "Performance Optimization",
      desc: "Website speed and performance are essential for user experience and SEO. We optimize your website during migration to ensure faster load times, minimal downtime, and a smooth transition for both visitors and search engines."
    }
  ];

  const migrationProcess = [
    {
      title: "Consultation and Planning",
      desc: "We begin with an in-depth consultation to understand your goals, challenges, and specific requirements. Based on this, we develop a customized migration plan that aligns with your objectives."
    },
    {
      title: "Migration Execution",
      desc: "With the plan in place, our team of experts executes the migration meticulously. We take care of all technical aspects, ensuring a seamless transition."
    },
    {
      title: "SEO Optimization",
      desc: "Our SEO experts work on optimizing your website’s structure, content, and technical elements during the migration. We also ensure that all redirects and canonical tags are correctly set up."
    },
    {
      title: "Testing and Quality Assurance",
      desc: "Before going live, we rigorously test the migrated website to ensure all functionalities work correctly. This includes checking for broken links, page speed, and overall user experience."
    },
    {
      title: "Post Migration Support",
      desc: "Our team is available to assist you with any questions or concerns that may arise post-migration."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans ">

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[28px] font-bold text-black leading-tight font-serif"
              >
                SEO Website Migration Services Sydney
              </h1>

              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-lg md:text-xl font-bold text-black font-serif"
              >
                Flymedia Technology: Your Trusted Partner for SEO Website Migration Services
              </h2>

              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                In today’s digital landscape, your website is your digital storefront, and its performance directly impacts your online success. When it comes to <strong>SEO Website Migration Services</strong>, entrusting your migration to a reliable partner is crucial. Enter Flymedia Technology, your go-to <strong>Website Migration Consulting Agency in Stanhope Gardens, Blacktown</strong>, specializing in seamless and SEO optimized website migrations.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[460px]">
                <Image
                  src="/uploads/2024/03/web-des.png"
                  alt="SEO Website Migration Services illustration"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. The Significance of Website Migration */}
      <section className="py-12 border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Mobile Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[460px]">
                <Image
                  src="/uploads/2024/03/mobi-1024x853.png"
                  alt="Mobile phone illustration"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl lg:text-[28px] font-bold text-black font-serif"
              >
                The Significance of Website Migration
              </h2>

              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Website migration, a process of transferring a website from one host, domain, or platform to another. A well executed migration is essential for maintaining or even improving your search engine rankings, user experience, and overall online presence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Flymedia Technology */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">

            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[32px] font-bold text-black font-serif"
              >
                Why Choose Flymedia Technology?
              </h2>

              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-lg md:text-xl font-bold text-black font-serif"
              >
                Expertise in SEO Website Migration Services
              </h3>

              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                At Flymedia Technology, we understand that your website visibility on search engines is paramount, our seasoned SEO experts ensure that your website migration is carried out with meticulous attention to SEO best practices. Our goal is not just to prevent traffic loss but to enhance your{" "}
                <Link
                  href="/australia/search-engine-optimization"
                  className="text-[#EC7317] underline hover:text-black font-semibold transition-colors"
                >
                  SEO
                </Link>{" "}
                strategy for better rankings.
              </p>
            </div>

            {/* Right Column: Best IT Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[460px]">
                <Image
                  src="/uploads/2024/03/bestr-it-1024x853.png"
                  alt="Best IT illustration"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

          </div>

          {/* Vertical list of Why Choose Us Sub-points (No Cards, No Grid) */}
          <div className="space-y-8 mt-12 max-w-7xl">
            {whyChooseUsPoints.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <h4
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl md:text-2xl font-bold text-black font-serif"
                >
                  {item.title}
                </h4>
                <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. The Flymedia Technology Migration Process */}
      <section className="py-12 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-start mb-12 space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl lg:text-[28px] font-bold text-black font-serif"
            >
              The Flymedia Technology Migration Process
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              Our website migration process is a well-oiled machine designed to provide you with a hassle-free experience and the best results.
            </p>
          </div>

          {/* Vertical list of Migration Process steps (No Cards, No Grid) */}
          <div className="space-y-8 mt-12 max-w-7xl">
            {migrationProcess.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl md:text-2xl font-bold text-black font-serif"
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactFormSection />

    </main>
  );
}
