"use client";

import React from "react";
import Image from "next/image";
import SEOMonitor from "@/components/SEOMonitor";
import AustraliaPortfolio from "@/components/AustraliaPortfolio";

export default function WebsiteDesignMelbourne() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16">
      
      {/* 1. Hero Section (Image Left, Content Right) */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: mobi illustration (renders first on mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/web-designing/mobi.png"
                  alt="Website Designing Services Melbourne Hero"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 order-2">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[40px] font-bold text-black leading-tight font-serif"
              >
                Unleash Your True Potential With FlyMedia Technologies' Website Designing Services
              </h1>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                There is no greater pleasure than reaching your business goals with the right website development company by your side. No doubt, the ever-changing business world and tough competition can certainly hinder your business plans. But not anymore! FlyMedia Technologies, the leading <span className="font-bold">website development company in Melbourne</span>, is offering effective solutions to empower your business globally and reach new heights of success.
              </p>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                With 13 years of experience in the digital space, we have successfully delivered 4200+ projects, be it e-commerce or custom website development. Our in-house team of experienced and highly calibre web developers are well-equipped with new technologies to boost your business online. We also have experienced mobile app developers that offer you responsive and functional applications for Android and iPhone.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Services Section (Content Left, SEOMonitor Right) */}
      <section className="py-12 md:py-16 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Services list content */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-black font-serif"
              >
                FlyMedia Technologies: Our Website Development Services
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-black text-[17px] md:text-lg">1. eCommerce websites</h3>
                  <p className="text-[#333333] text-[14px] md:text-[15px] leading-relaxed font-medium mt-1">
                    Our team of skilled and professional web developers can create B2B and B2C websites. They are proficient in creating fully-responsive eCommerce websites for various platforms like laptops, desktops, tablets, etc. Indulging in our service will benefit you with unexpected business growth.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black text-[17px] md:text-lg">2. Custom websites and applications</h3>
                  <p className="text-[#333333] text-[14px] md:text-[15px] leading-relaxed font-medium mt-1">
                    Crafting your website and applications customized with the help of the best <span className="font-bold">website designing company in Melbourne</span> will lead you on the path to success. We offer featured websites and applications while keeping in mind your vision and thoughts. This way, your business can get a new identity on the web.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black text-[17px] md:text-lg">3. Discussion forums</h3>
                  <p className="text-[#333333] text-[14px] md:text-[15px] leading-relaxed font-medium mt-1">
                    FlyMedia Technologies also offers amazing discussion forums on your website. They are effective in engaging your guests to indulge in inside discussions. Plus, it offers them a chance to write replies, subject areas, and get into online discussions.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black text-[17px] md:text-lg">4. Flash websites</h3>
                  <p className="text-[#333333] text-[14px] md:text-[15px] leading-relaxed font-medium mt-1">
                    Not many web designing companies deal in flash websites. But we do. We ensure that with impressive and updated website design, you get to enjoy flash websites with eye-catching animations as well as the latest navigation.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black text-[17px] md:text-lg">5. Web portals</h3>
                  <p className="text-[#333333] text-[14px] md:text-[15px] leading-relaxed font-medium mt-1">
                    Our in-house team of developers design user-friendly and unique web portals. They can be custom-made and related to any unique business idea. You can either start working with us with an already existing idea or new one.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: SEOMonitor Display */}
            <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[460px]">
                <SEOMonitor />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Benefits of Hiring Section (6-Card Grid) */}
      <section className="py-12 md:py-16 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-black font-serif"
            >
              Benefits of Hiring Our Web Development Services
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium">
              As the leading <span className="font-bold text-black">website-development company in Melbourne</span>, we ensure that you get to experience the best benefits of our web designing and development services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <h3 className="font-bold text-black text-lg mb-3">Web Compatibility</h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                The web-developed designs by FlyMedia Technologies are compatible with every web browser, platform or device. We make sure to design highly responsive web applications and websites that are completely user-friendly. This even boosts your rank on various search engines.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <h3 className="font-bold text-black text-lg mb-3">Blog integration</h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                Our team of developers and experts integrates a blog that can allow customers to know everything related to your services and products. This is also effective in the SEO of websites and applications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <h3 className="font-bold text-black text-lg mb-3">Great loading speed</h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                Our in-house expert team of developers design websites and apps with fast loading times. This is effective in boosting the user engagement. Plus, our codes are bug-free as well as light which offers fast loading speed.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <h3 className="font-bold text-black text-lg mb-3">Simple navigation</h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                Simple navigation is the key to a successful website. At FlyMedia Technologies, we build websites with simple to use navigation. It helps in enhancing user experience while boosting the site usability.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <h3 className="font-bold text-black text-lg mb-3">Product and content visuality</h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                Our team of developers creates websites to boost the product and content visuality. This can further lead to boosted product sales and services along with high revenue. Ultimately, it even improves the conversion rates.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#FFFFFF] p-8 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <h3 className="font-bold text-black text-lg mb-3">Usable forms</h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                Forms are effective in interacting with users on the site. FlyMedia Technologies and its developers make sure to build those forms are simple to fill by customers and grab the information to strengthen the client base.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Why Choose Section (Split Grid, Image Left, List Right) */}
      <section className="py-12 md:py-16 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: online-serch illustration */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-[4/3] max-w-[460px]">
                <Image
                  src="/web-designing/online-serch.png"
                  alt="Why Choose FlyMedia Technology Illustration"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Reasons Content */}
            <div className="lg:col-span-7 space-y-6 order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black font-serif"
              >
                Why Choose Flymedia Technologies?
              </h2>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                Joining hands with our website development and <span className="font-bold">website designing company in Melbourne</span> can lead you to the right path without wandering here and there.
              </p>
              
              <ul className="text-gray-700 text-[14px] md:text-[15px] font-sans font-medium list-disc pl-5 leading-relaxed space-y-3">
                <li>We have been in the digital space for 13 years with an in-house team of skilled and professional developers.</li>
                <li>FlyMedia Technologies has worked on 4200+ projects, be it high or small-profile business websites.</li>
                <li>Our team of website developers work on websites and mobile apps and offer tailored solutions for your company or brand's growth.</li>
                <li>Our website designs are fresh, new, and reliable. They hold the ability to leave a positive mark on the minds and hearts of users.</li>
                <li>We are goal and result-focused and strive to offer phenomenal results.</li>
                <li>We offer other services as well, like content writing, digital marketing, payment gateway integration, and much more.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
<AustraliaPortfolio />
    </main>
  );
}
