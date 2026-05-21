"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export default function SearchEngineOptimization() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans ">
      
      {/* 1. Hero Section (Split Grid - Image Left, Content Right) */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-[#F1F1F1]">
        {/* Subtle radial grid pattern for premium visual consistency */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Rocket Illustration (appears first/left in desktop & mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/images/rocket.png"
                  alt="SEO Agency Sydney Australia Rocket Illustration"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Right Column: Titles & Paragraphs (appears second/right in desktop & mobile) */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-2">
              <div className="space-y-4">
                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-4xl md:text-5xl lg:text-[54px] font-bold text-black leading-[1.15] font-serif"
                >
                  SEO Agency Sydney, Australia | Flymedia Technology
                </h1>
              </div>

              <h2 
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold font-serif"
              >
                Search Engine Optimization Services
              </h2>

              <div className="space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  Would you like your company’s online portal to appear on the top of the first page in search engines? Here’s the solution for you.
                </p>
                <p>
                  Flymedia Technology, the leading Search Engine Optimization will make your brand acquire the apex spot in SERPs of Google, Bing, Yahoo, and other search engines.
                </p>
                <p>
                  SEO is pivotal today. It produces leads organically. The best solution for online promotion and awareness is nothing but the proper utilization of SEO techniques. Flymedia SEO company in Stanhope Gardens, Blacktown offers top-level Search Engine Optimization services. Our dedicated SEO experts Sydney develop and implement these techniques to ensure maximum leads and revenue for your business.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Why Should You Implement SEO Section (Image Right, Content Left) */}
      <section className="py-10 md:py-10 bg-[#F1F1F1] border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Content (appears second on mobile, first on desktop) */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <h2 
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black leading-tight font-serif"
              >
                Why Should You Implement SEO Marketing Strategies for Your Business?
              </h2>

              <div className="space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  In the current internet-driven era, everything is being transformed exponentially. The internet has changed the way we learn, sell, shop, think and other day-to-day activities. Consequently, it has impacted the business marketing world overwhelmingly.
                </p>
                <p>
                  Customers now more prefer to search the web before they make a purchase online or offline. Search engines like Google, Bing are reliable and most trustworthy sources to inquire about a specific product or service. That's why your brand needs to lie in a commanding position to be noticed by online searchers. This is where the role of SEO comes to the fore.
                </p>
              </div>
            </div>

            {/* Right Column: Growth Illustration (appears first on mobile, second on desktop) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-[500px]">
                <Image
                  src="/grow.png"
                  alt="Why Implement SEO Marketing Strategies"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SEO Statistics Panel */}
      <section className=" bg-[#F1F1F1]  ">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="bg-white  p-8 md:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 space-y-4 text-left">
            <h3 
              className="text-black text-base md:text-lg font-semibold font-sans leading-relaxed text-left"
            >
              Here’re some Search Engine Optimizations statistics that are enough to elaborate the whole scenario:
            </h3>

            <ul className="text-gray-700 text-sm md:text-base font-sans font-medium list-disc pl-5 leading-relaxed">
              <li>The SEO industry is expected to cross US$80 billion by the end of 2020.</li>
              <li>Further, SEO strategies can derive a 14.6% conversion rate if done properly.</li>
              <li>Around 93% of online investigations begin with a search engine.</li>
              <li>Similarly, 21% of internet users explore more than one of the search results.</li>
              <li>Google accounts for 74.75% of the total search engine market share.</li>
              <li>Moreover, Google entertains over 5.5 billion searches every day.</li>
              <li>Organic search fetches around 53.3% of all website traffic.</li>
              <li>Only 0.78% of users click on resultson the 2nd page of Google.</li>
            </ul>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left font-sans font-medium">
              As a business owner, you must be familiar with the direct benefits of SEO besides knowing these crucial statistics. Let’s find how SEO can help you grow your business and ultimate revenues.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 10 Sharp Benefits Section */}
      <section className="py-10 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-1">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-bold text-black font-serif leading-tight"
          >
            10 Sharp Benefits of Search Engine Optimization for Your Brand
          </h2>

          <div className="inline-block text-left rounded-2xl p-10  w-full">
            <ul className="space-y-2 text-gray-700 text-sm md:text-base font-sans font-medium list-disc pl-6">
              <li>Organic search is always the primary source of traffic for any website.</li>
              <li>SEO develops a brand's trust and credibility.</li>
              <li>Entirely, good SEO services also offer a better user experience.</li>
              <li>You will get more traffic, engagement and conversion through local SEO.</li>
              <li>Definitely, SEO impacts the buying behavior of customers.</li>
              <li>SEO helps you acquaint with and understand the web environment.</li>
              <li>Significantly, SEO is comparatively a cheaper marketing practice than others.</li>
              <li>Its effects last for a long-term.</li>
              <li>Search Engine Optimization Sydney is a quantifiable approach.</li>
              <li>Moreover, SEO fortifies your visitor base and brand authority.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Thoughtful Alternative Section (Single Premium White Card) */}
      <section className=" bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="bg-white  p-8 md:p-12  shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/60 ">
            
            {/* Part 1: Text Block */}
            <div className="space-y-6">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold text-black font-serif text-center"
              >
                How is FlyMedia Technology the Thoughtful Alternative for Your Brand?
              </h3>
              <p className="text-gray-700 text-[15px] md:text-base leading-relaxed font-sans font-medium">
                In an increasingly-connected era and a crowded business market, how can your brand get the appearance it needs? With Google bringing algorithm updates almost every day, SEO is getting more integrated and complicated. Now, it is not just about occupying the top position, but to sustain that position over a period. For this purpose, your brand needs professional assistance that can support your brand explores the new customer dimensions with a higher SERP ranking. FlyMedia Technology is the leading and prestigious brand in the digital marketing arena. When it comes to Search Engine Optimization services, we deliver advanced and industry-specific marketing solutions, regardless of business size, and industry.
              </p>
            </div>

            {/* Part 2: Bullet List Block */}
            <div className="space-y-4 pt-10 ">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold text-black font-serif text-center"
              >
                How is FlyMedia Technology the Thoughtful Alternative for Your Brand?
              </h3>
              <ul className="text-gray-700 text-[15px] md:text-base font-sans font-medium list-disc pl-6 leading-relaxed">
                <li>Professionally-experienced &amp; certified company</li>
                <li>A unique team of online marketing experts such as web developers, SEO analysts, PPC experts, app/software developers, video and content creators, and researchers</li>
                <li>Attractive prices</li>
                <li>Quality assurance</li>
                <li>On-time project delivery</li>
                <li>Excellent customer assistance</li>
                <li>Long-term customer relations</li>
                <li>All-encompassing digital marketing services</li>
                <li>100% customer satisfaction</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Process Section (6-Card Grid) */}
      <section className="py-10 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 max-w-5xl mx-auto ">
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-xl md:text-2xl font-bold text-black leading-snug font-serif"
            >
              How We Implement SEO Strategies for Brands?
            </h1>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-xl md:text-2xl font-bold text-black leading-snug font-serif"
            >
              Quality-rich and research-based marketing solutions make us the top-ranked search engine optimization. This is how our SEO specialists execute the whole SEO plan for your brand's specific needs.
            </h2>
          </div>

          {/* 6-Card Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 ">
            
            {/* Card 1: SEO Site Audit */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl lg:text-2xl font-bold text-[#EC7317] font-serif leading-snug"
                >
                  SEO Site Audit
                </h3>
                <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                  A site audit is a crucial component of any SEO strategy. We perform site audit by analyzing the website's current status, including technical, on-page & off-page aspects.
                </p>
              </div>
            </div>

            {/* Card 2: Keyword Research */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl lg:text-2xl font-bold text-[#EC7317] font-serif leading-snug"
                >
                  Keyword Research
                </h3>
                <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                  Identifying the right target keywords is pivotal. Keywords are most relevant to the business. Our experts also check search volume and competition while matching the keywords.
                </p>
              </div>
            </div>

            {/* Card 3: Technical & On-Page Optimization */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl lg:text-2xl font-bold text-[#EC7317] font-serif leading-snug"
                >
                  Technical &amp; On-Page Optimization
                </h3>
                <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                  Furthermore, our SEO marketers work on optimizing main SEO dimensions in target pages to improve page authority and user experience. It further helps rank higher on SERPs (Search Engine Results Pages).
                </p>
              </div>
            </div>

            {/* Card 4: SEO Copywriting */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl lg:text-2xl font-bold text-[#EC7317] font-serif leading-snug"
                >
                  SEO Copywriting
                </h3>
                <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                  Content is always critical for improving the relevance and engagement of your website. We create and publish the most relevant content that is able to entice your readership.
                </p>
              </div>
            </div>

            {/* Card 5: UI/UX Suggestions */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl lg:text-2xl font-bold text-[#EC7317] font-serif"
                >
                  UI/UX Suggestions
                </h3>
                <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                  Our SEO specialists provide user-friendly website layout and navigation. It improves loading time and mobile responsiveness and reduces the bounce rate.
                </p>
              </div>
            </div>

            {/* Card 6: Reporting */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 border border-gray-100 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl lg:text-2xl font-bold text-[#EC7317] font-serif"
                >
                  Reporting
                </h3>
                <p className="text-[#333333] text-[14px] lg:text-[15px] leading-relaxed font-sans">
                  Before we initiate the project, we monitor all SEO parameters status to create a baseline report for comparison in the future. Also, we share weekly SEO reports to analyze improvements or drawbacks.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <ContactFormSection />

    </main>
  );
}
