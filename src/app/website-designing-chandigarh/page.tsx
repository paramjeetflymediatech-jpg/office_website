"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Laptop, 
  Layers, 
  Search, 
  Smartphone, 
  CheckCircle,
  TrendingUp,
  Eye,
  ArrowRight,
  Code
} from "lucide-react";
import ServicePage from "@/components/ServicePage";
import ContactFormSection from "@/components/ContactFormSection";

// --- Hero Section ---
const WebDesignHero = () => {
  return (
    <div className="bg-white pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Details */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-serif font-semibold text-black leading-tight">
                Website Designing in Chandigarh | Website Design Cost
              </h1>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              Website Designing in Chandigarh, For any business you talk about, the <strong className="text-black">INTERNET</strong> is the driving factor for business success and here we are talking about the global platform. If you haven’t been using it to the fullest, then <strong className="text-black">‘TODAY’</strong> is the time to do that. Who knows taking your business in the online world through the professional expertise for Website Designing in Chandigarh can make you the <strong className="text-[#FA7E09]">“FIRST-CHOICE”</strong> among the customers.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[480px]">
              <Image 
                src="/web-designing/MAIN.png" 
                alt="Website Designing in Chandigarh | Website Design Cost" 
                width={600} 
                height={500} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Centered Core Highlights Section ---
const CoreHighlightsSection = () => {
  return (
    <section className="py-20 bg-[#F9F9F9] border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-center">
        
        {/* Block 1 */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
            Best Website Design & Development Company in Chandigarh
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-[#FA7E09] italic">
            Authenticity, Honesty, & Personal Voice – 3 Main Factors of the Online World
          </h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-medium">
            The <strong className="text-black">Flymedia Technology</strong> website designing team works on the aspect of boosting the business image on a large scale so that it helps the business to grow. If you have been in search of the best company to avail the service of the best website designing in Punjab, then Flymedia Technology is all set to make your dreams come into a reality.
          </p>
        </div>

        {/* Block 2 */}
        <div className="space-y-6 pt-8 border-t border-gray-200/50">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
            Get the website design that connects the user
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-medium">
            For a website owner, it only takes <strong className="text-[#FA7E09]">2.6 seconds</strong> to connect to your business. So, keeping it catchy and effective is important? The skillfulness of our website designing and development team will make your website leave an everlasting impression on your customer.
          </p>
        </div>

      </div>
    </section>
  );
};

// --- Legitimacy Section ---
const LegitimacySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px]">
              <Image 
                src="/web-designing/mobi.png" 
                alt="Make your brand legitimate through the robust web design" 
                width={500} 
                height={500} 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-[#FA7E09] px-3.5 py-1.5 rounded-full shadow-sm">
                Payment Gateway Integration
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
                Make your brand legitimate through the robust web design
              </h2>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              Have you heard about the idiom <strong className="text-black">‘The real McCoy’</strong>? It stands for a real thing or something legit. You know what, this is what the customers of the 21st century want. We are living in the digital world and stay connected with the users comes with a lot of challenges.
            </p>

            <div className="bg-[#FDF6ED] border-l-4 border-[#FA7E09] p-6 rounded-r-xl">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-semibold italic">
                “One of the statistics has shown that ‘Around 59% of the global population which accounts for 4.57 billion people are actively using the internet. Only if your business does the right thing will your brand be a 5-star brand in the market. Today, the customer makes the final call only after comparing the price, checking the reviews, other possible features, and possible offers. As a brand, if your website is curated with perfection and it has properly mentioned everything, your business will gain trust and boost the conversion rate.’ So, What’s the wait? Get the tailored-made and best of website designing services, today only.”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Features Checklist ---
const FeaturesGridSection = () => {
  const list1 = [
    "Countless website pages",
    "Image gallery",
    "Call button",
    "Unique content",
    "Payment gateway",
    "Tailored-made website design (Just tell what you want!)",
    "SEO friendly website",
    "Contact form"
  ];

  const list2 = [
    "Chat system",
    "Video section",
    "Testimonials",
    "Dynamic – 100%",
    "Blog",
    "Mobile responsive/ responsive website",
    "Much more"
  ];

  return (
    <section className="py-20 bg-[#F9F9F9] border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
            What makes our website designing service the best?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto font-medium">
            Ultimately it’s all about satisfaction and we have successfully managed to fulfill the website design needs for various businesses. Our website design service stand out from the rest because of:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Column 1 */}
          <ul className="space-y-4">
            {list1.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#FA7E09] mt-1 shrink-0">
                  <CheckCircle size={18} fill="orange" className="text-white" />
                </span>
                <span className="text-gray-700 text-sm md:text-base font-semibold">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Column 2 */}
          <ul className="space-y-4">
            {list2.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#FA7E09] mt-1 shrink-0">
                  <CheckCircle size={18} fill="orange" className="text-white" />
                </span>
                <span className="text-gray-700 text-sm md:text-base font-semibold">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

// --- Hiring Benefits Section ---
const BenefitsSection = () => {
  const benefits = [
    "Years of experience",
    "Friendly approach",
    "Proper research and analysis",
    "Honest and skillful team",
    "On-time and under your budget service",
    "We listen to you and then give you the best suggestion"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
            Why is it beneficial to hire a professional website designing company – Flymedia Technology?
          </h2>
          <span className="block w-16 h-1 bg-[#FA7E09] mx-auto rounded-full"></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-[#FA7E09]">{idx + 1}</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base font-semibold leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Business Growth Section ---
const BusinessGrowthSection = () => {
  return (
    <section className="py-20 bg-[#F9F9F9] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
              Grow your company and business – Best Website design
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              Your website is depicting what your business is about. It is right to say that, it is the sole of your business. This will be the point where you will be touching the customer and the conversion rate will get to the point where you wanted. One of the research has shown that <strong className="text-black">‘Best website design and seamless navigation impacts 94% of first-time visitors.’</strong> Not only that but your business credibility will boost with the website design by around 75%. Our website design is focused on boosting your:
            </p>

            {/* Three key focus points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="bg-white p-5 rounded-xl border border-gray-100 text-center space-y-3 shadow-sm">
                <Search className="text-[#FA7E09] mx-auto" size={24} />
                <span className="block text-xs md:text-sm font-bold text-gray-800 leading-snug">
                  Search engine ranking
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 text-center space-y-3 shadow-sm">
                <Eye className="text-[#FA7E09] mx-auto" size={24} />
                <span className="block text-xs md:text-sm font-bold text-gray-800 leading-snug">
                  Boost your online exposure
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 text-center space-y-3 shadow-sm">
                <TrendingUp className="text-[#FA7E09] mx-auto" size={24} />
                <span className="block text-xs md:text-sm font-bold text-gray-800 leading-snug">
                  Convert page visitors into paying customers
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px]">
              <Image 
                src="/web-designing/BRANDING.png" 
                alt="Grow your company and business - Best Website design" 
                width={500} 
                height={500} 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Development Services Grid ---
const DevServicesSection = () => {
  const services = [
    "WordPress Development Services",
    "Ecommerce Website Development Services",
    "CMS Development Services",
    "Website Designing Services",
    "PHP Web Development",
    "Customized Web Application",
    "Forum Development Services"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
            Not limited to website designing, get the best of website development services
          </h2>
          <span className="block w-16 h-1 bg-[#FA7E09] mx-auto rounded-full"></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                <Code className="text-[#FA7E09]" size={24} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-black leading-tight">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Concluding Paragraph & Map ---
const ConcludingSection = () => {
  return (
    <section className="py-20 bg-[#F9F9F9] border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black leading-tight">
            Flymedia Technology – Offering website design solutions to various business platforms
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-medium">
            Real-world functionality, seamless navigation, and attractive design are the key aspects of developing a website. Our professional team with their unparalleled services is ready to help you build the best website with the right design and all the perfect development needs. Get a hold of our website agency today to fulfill all your website designing requirements. Best solutions and options await you at a competitive price!
          </p>
        </div>

        {/* Embedded Iframe Map */}
        <div className="relative h-96 w-full max-w-4xl mx-auto overflow-hidden border border-gray-200 shadow-2xl rounded-2xl">
          <iframe
            src="https://maps.google.com/maps?q=FlyMedia%20Technology%20-%20Best%20Website%20Designing%20and%20Digital%20Marketing%20Company%20In%20Ludhiana&t=m&z=16&output=embed&iwloc=near"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-95"
          />
        </div>

      </div>
    </section>
  );
};

// --- Main Container ---
export default function WebsiteDesigningChandigarh() {
  const pageSEO = {
    title: "Website Designing in Chandigarh | Website Design Cost",
    h1: ["Website Designing Chandigarh"],
    paragraphs: [
      "Find professional website designing company in Chandigarh offering highly affordable website design cost and dynamic responsive web designs."
    ],
    folderName: "flymediatech.com_home",
    images: ["r02.png"]
  };

  return (
    <ServicePage {...pageSEO} bgClass="bg-white">
      <WebDesignHero />
      <CoreHighlightsSection />
      <LegitimacySection />
      <FeaturesGridSection />
      <BenefitsSection />
      <BusinessGrowthSection />
      <DevServicesSection />
      <ConcludingSection />
      <ContactFormSection />
    </ServicePage>
  );
}
