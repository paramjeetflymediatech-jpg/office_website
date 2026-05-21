"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export default function SocialMediaMarketing() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans">
      {/* Hero Section */}
      <section className="relative py-10 md:py-10 overflow-hidden bg-[#F1F1F1]">
        {/* Subtle grid pattern for premium visual styling */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          {/* Top section: Two-column grid, ordered to show the image first on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Titles & Introductory Paragraphs (order-2 on mobile, order-1 on desktop) */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-4xl md:text-5xl lg:text-[54px] font-bold text-black leading-[1.15] font-serif"
                >
                  Social Media Agency in Sydney
                </h1>
              </div>

              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold text-black font-serif animate-fade-in"
              >
                Social Media Marketing Services
              </h2>

              <div className="space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans">
                <p className="font-semibold text-black text-base md:text-lg">
                  Social Media Marketing Agency Stanhope Gardens, Blacktown, An effective social strategy can help you grow your business, maintain your social presence and engage with the audience.
                </p>
                <p
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl md:text-2xl font-bold text-[#EC7317] font-serif leading-snug"
                >
                  Magnify Your Business Reach Using the Social Media Potential
                </p>
                <p>
                  Now is the time to dive into the ever-growing ocean of Social Media Marketing (SMM) in Sydney.
                  Businesses of all sizes and industries are concluding tremendous results with social media.
                  Social Media is a crucial organ of online marketing parasol. It uses the power of social
                  media networks to develop brand awareness, engage new &amp; existing customers, and stimulate
                  conversation for your business.
                </p>
              </div>
            </div>

            {/* Right Column: High-fidelity illustration (order-1 on mobile, order-2 on desktop) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3.3] max-w-[540px]">
                <Image
                  src="/uploads/2024/03/mobi-1024x853.png"
                  alt="Social Media Agency in Sydney & SMM Services"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>

          {/* Bottom Section: Full-width Paragraphs 4, 5 & 6 */}
          <div className="mt-12 lg:mt-16 space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans w-full max-w-full">
            <p>
              Further, social Media can solve diverse marketing problems starting from launching a
              product/service to bringing quality leads and improving sales. As an expert social media
              marketing agency, we at FlyMedia have tried and tested techniques of using social media
              channels. These technologies help you achieve good results to meet your business goals.
            </p>
            <p>
              As an experienced entity in the domain, FlyMedia Technology ensures that your brand gets
              online visibility, especially across social media platforms like{" "}
              <Link
                href="/australia/facebook-marketing-sydney"
                className="text-[#EC7317] underline hover:text-black font-semibold transition-colors duration-200"
              >
                Facebook
              </Link>
              , YouTube, Instagram, Twitter, LinkedIn, Tiktok.
            </p>
            <p>
              Our social media campaigns are particularly tailored to your business goal. Likewise, we
              help our esteemed clients to determine which social media channels are most helpful to create
              brand recognition and are mostly used by their customers.
            </p>
          </div>

          {/* Social Media Core Services Bullet List: Replicated Verbatim from User Image */}
          <div className=" pt-10">
            <ul className="space-y-4 text-[#333333] text-[15px] md:text-base leading-relaxed list-disc pl-6 md:pl-8 font-sans">

              <li className="pl-2">
                <strong>Brand Monitoring:</strong> We can help you improve and track the reputation of your business and find out how people perceive your brand.
              </li>

              <li className="pl-2">
                <strong>Social Media Contests:</strong> Facebook, Twitter or Pinterest content can increase your traffic in a short period of time. Our experts can help you determine the most suitable type of content and platform for your brand.
              </li>

              <li className="pl-2">
                <strong>Social Media Management:</strong> Our team of social media experts can manage your accounts on your behalf and engage with your audience.
              </li>

              <li className="pl-2">
                <strong>Setup &amp; Custom Profile Design:</strong> We create and customize Social media profiles with quality content and aesthetics that resonates with your brand and audience.
              </li>

            </ul>
          </div>

          {/* Section 2: What Makes FlyMedia Technology the Best Social Media Marketing Company? */}
          <div className="mt-20 lg:mt-24 border-t border-gray-300/40 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column: Title & Verbatim Paragraphs (order-2 on mobile, order-1 on desktop) */}
              <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                <h2
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl md:text-4xl font-bold text-black leading-tight font-serif"
                >
                  What Makes FlyMedia Technology the Best Social Media Marketing Company?
                </h2>

                <div className="space-y-4 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans">
                  <p>
                    FlyMedia Technology is the leading and fastest-growing SMM company.
                    Since its inception, the company has developed an overwhelmingly and
                    result-oriented process to let your business gain new skies in the
                    social media arena. The following are some keynotes that position us
                    at the apex:
                  </p>
                  <p>
                    FlyMedia Technology involves a highly-skilled and proficient team of
                    social media marketers, content creators and promoters.
                  </p>
                  <p>
                    Further, the company contains vast industry experience to handle your
                    social media marketing campaigns professionally. We are a certified
                    online marketing agency to give you full safety and trust across all departments.
                  </p>
                  <p>
                    FlyMedia Technology utilizes ultra-advanced and trending social media
                    promotion techniques. It helps publish your brand across new dimensions
                    for reach expansion.
                  </p>
                  <p>
                    In terms of pricing, FlyMedia has a quite fair price model for its
                    priceless clients. High-quality services are offered at the lowest
                    possible rates.
                  </p>
                  <p>
                    Quality services are our priority at FlyMedia. It may take some extra
                    time but we never compromise on this front.
                  </p>
                  <p>
                    Most significantly, FlyMedia Technology offers a wide spectrum of
                    all-encompassing online marketing services. It incorporates SEO, PPC,
                    SMM, SEM, Video Marketing, Mobile Marketing, Web Design &amp; Development,
                    and many others.
                  </p>
                </div>
              </div>

              {/* Right Column: Facebook Marketing Illustration (order-1 on mobile, order-2 on desktop) */}
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3.3] max-w-[540px]">
                  <Image
                    src="/uploads/2024/04/facebook.png"
                    alt="Facebook Marketing Sydney & Best SMM Company"
                    fill
                    className="object-contain"
                    unoptimized
                    priority
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Section 3: Social Media Marketing Process We Follow at FlyMedia Technology */}
          <div className="mt-20 lg:mt-24 border-t border-gray-300/40 pt-16">
            <div className="space-y-4">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black leading-tight font-serif"
              >
                Social Media Marketing Process We Follow at FlyMedia Technology
              </h2>
              <h4 className="text-[#555555] font-sans text-[15px] md:text-base font-medium max-w-7xl text-center leading-relaxed">
                Before you step ahead, it’s imperative to have a look at our social media marketing strategies we implement for our clients:
              </h4>
            </div>

            {/* 8-Step Process Grid (Flex wrap container to center the bottom 2 cards) */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">

              {/* Step 1: Research & Planning */}
              <div className="w-full sm:w-[350px] lg:w-[370px] flex-grow lg:flex-grow-0 flex flex-col justify-center text-center bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100/60">
                <div className="space-y-4">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl lg:text-[22px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Research &amp; Planning
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    Research is truly the first and vital step in any marketing strategy. Our passionate team reserves approx. three hours every week to figure out how your social media appearance should look like.
                  </p>
                </div>
              </div>

              {/* Step 2: Creating Engaging Content */}
              <div className="w-full sm:w-[350px] lg:w-[370px] flex-grow lg:flex-grow-0 flex flex-col justify-center text-center bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100/60">
                <div className="space-y-4">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl lg:text-[22px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Creating Engaging Content
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    After finishing with the research phase, the second step is creating relevant content for regular postings. Prime activities included in this phase are writing blog posts and articles, creating infographics, images, videos etc. which are shared on social media to drive traffic to your website.
                  </p>
                </div>
              </div>

              {/* Step 3: Content Curation */}
              <div className="w-full sm:w-[350px] lg:w-[370px] flex-grow lg:flex-grow-0 flex flex-col justify-center text-center bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100/60">
                <div className="space-y-4">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl lg:text-[22px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Content Curation
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    Creating pertinent blog posts isn’t enough. Curating content regularly is also an important aspect of SMM strategy. FlyMedia social media experts strive to search the web for insightful and inspiring content to share. It is an integral action when it comes to engaging your audience and keeping them intact.
                  </p>
                </div>
              </div>

              {/* Step 4: Sharing Content */}
              <div className="w-full sm:w-[350px] lg:w-[370px] flex-grow lg:flex-grow-0 flex flex-col justify-center text-center bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100/60">
                <div className="space-y-4">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl lg:text-[22px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Sharing Content
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    Sharing is caring. Once we’ve planned, created and curated the content stuff, it’s time to share everything across different social media channels. We know that each social media channel such as Facebook, Instagram, YouTube Twitter, LinkedIn etc. has its own tone and style. It allows us to share content in a unique way to reach the maximum audience.
                  </p>
                </div>
              </div>

              {/* Step 5: Run Social Media Campaigns */}
              <div className="w-full sm:w-[350px] lg:w-[370px] flex-grow lg:flex-grow-0 flex flex-col justify-center text-center bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100/60">
                <div className="space-y-4">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl lg:text-[22px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Run Social Media Campaigns
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    Developing and running unique social media campaigns fall further. It is inevitable beyond the basic social media sharing and engagement. Relevant and targeted SMM campaigns enable you to improve lead generation, brand awareness, and website traffic.
                  </p>
                </div>
              </div>

              {/* Step 6: Social Engagement */}
              <div className="w-full sm:w-[350px] lg:w-[370px] flex-grow lg:flex-grow-0 flex flex-col justify-center text-center bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100/60">
                <div className="space-y-4">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl lg:text-[22px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Social Engagement
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    In this step, FlyMedia primarily focuses on Keywords and Hashtags. Identifying and developing the right keywords and Hashtags is pivotal to the campaign’s success. Hashtags play a significant role in the social media marketing process. We target the right hashtag to cover the right kind of audience for your brand.
                  </p>
                </div>
              </div>

              {/* Step 7: Result Monitoring and Analytics */}
              <div className="w-full sm:w-[350px] lg:w-[370px] flex-grow lg:flex-grow-0 flex flex-col justify-center text-center bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100/60">
                <div className="space-y-4">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl lg:text-[22px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Result Monitoring and Analytics
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    It is great to monitor whether the desired results are obtained or not. No SMM strategy is complete without analytics. Our social media marketing team spends at least 3.5 hours every week to review your social analytics. Moreover, we analyze where the audience was most active and which content is generating more leads.
                  </p>
                </div>
              </div>

              {/* Step 8: Dealing Unexpected Contingencies */}
              <div className="w-full sm:w-[350px] lg:w-[370px] flex-grow lg:flex-grow-0 flex flex-col justify-center text-center bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100/60">
                <div className="space-y-4">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl lg:text-[22px] font-bold text-[#EC7317] font-serif leading-snug"
                  >
                    Dealing Unexpected Contingencies
                  </h3>
                  <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                    Furthermore, FlyMedia Technology is always prepared to deal with unpleasant contingencies. There’re no speculations for when the unexpected happens. Our SMM team is ready in case they need to conduct extra research, solve problems and post unscheduled content to improve results.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      <ContactFormSection />

    </main>
  );
}
