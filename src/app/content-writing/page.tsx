"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ContactFormSection from "@/components/ContactFormSection";

export default function ContentWritingServices() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] font-sans">
      {/* Hero Section */}
      <section className="relative pt-10  bg-transparent border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8 order-2 lg:order-1 relative z-10">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-semibold text-black leading-[1.1] tracking-tight">
                  Content Writing Services- Increase Roi From Your Website
                </h1>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Considering the challenges in the website promotion, content strategy is one of the main aspects that are valuable for your target audient to make them return on your website again and again. Therefore web content services India are prepared including the diversity of techniques. Conducting research on above hundreds of marketers, the pioneer content marketers use 65% of content and 25% curated content.
                </p>
                <p>
                  Content creation is a strong strategy for the success of any website. In the companies that have a controlled budget and staff, content development usually goes down or rendered to the marketers who already have full hands. Content marketing is not a part time work, to create a winning content strategy, you need expert web content writing team to publish regularly and keep engage your buyers and customers.
                </p>
              </div>

           
            </div>

            {/* Right: Image */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 rounded-[70%] transform scale-105" />
              <Image 
                src="/content-writing/BANE03.png" 
                alt="Content Writing Services in India" 
                width={800} 
                height={800} 
                className="relative z-10 w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.15)] object-contain"
                priority
              />
            </div>

          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FA7E09]/5 rounded-full blur-[150px] -z-10" />
      </section>

      {/* Main Content Details */}
      <section className=" bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 relative z-10 mt-6  text-lg text-gray-600 leading-relaxed font-medium pb-10">
            <p>
              Content creation is a strong strategy for the success of any website. In the companies that have a controlled budget and staff, content development usually goes down or rendered to the marketers who already have full hands. Content marketing is not a part time work, to create a winning content strategy, you need expert web content writing team to publish regularly and keep engage your buyers and customers.
            </p>
            <p>
              Hiring expert content writers for content development is a common option for companies with limited budget and resource. The latest studies state that more than 10% organizations choose freelancing services for receiving high quality and required content. If you are unable to meet your content requirements, content writing company is a popular option for companies with lack of sources.
            </p>
            <p>
              A successful content strategy drives <Link href="/our-services/seo-marketing-services" className="text-[#FA7E09] underline hover:text-black transition-colors">SEO</Link> and enhances engagement. The in-house services recruit writers on staff however the marketplaces can meet you with a writer who is correct for your specific project. Remember that the lines.
            </p>
            <p>
              A freelance content writing services provider offers custom content in the different formats, usually a full time writers to improve your web traffic and sales conversion. They offer landing pages, cast studies, analytical news articles, blogs, eBooks, whitepapers, interviews, white papers, web content, press releases and more. The custom content services like blog posting, authority articles and optimized content services can be received at the affordable price.
            </p>
            <p>
              Undoubtedly a strong, unique and relevant content makes your site to stand apart from the ocean of websites under same niche. Posting engaging and search engine friendly content helps in boosting our website’s rank effectively as well as bring your readers and customers back. Through SEO content writing services you receive a content that is prepared following the search engine guidelines to increase your site’s visibility among people and the content relevance ensures that you succeed in keeping your audience interested in your website. Above of all having reasonably priced writing services is like a cup of cake so you enjoy more profitability by increasing return on investment on your website.
            </p>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
}
