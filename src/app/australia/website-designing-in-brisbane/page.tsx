"use client";

import React from "react";
import Image from "next/image";
import SEOMonitor from "@/components/SEOMonitor";
import AustraliaPortfolio from "@/components/AustraliaPortfolio";

export default function WebsiteDesignBrisbane() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16">
      
      {/* 1. Hero Section (Image Left, Content Right) */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: mobi illustration (renders top on mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/web-designing/mobi.png"
                  alt="Professional Website Designing Brisbane Main Illustration"
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
                Ways to Maintain a Professional Website for Your Business
              </h1>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                With the ever-increasing advent of technology and the widespread availability of the Internet, consumers have turned to online resources as time progresses. Gone are the days when one would trust the words of a few people; now, they can have access to reviews in the thousands. It has become ever so imperative to be present online, to engage with one’s existing audience, to find new people and to have leads. Now, more than ever, it is important to have a business website. However, it can be daunting to understand the complexities of website designing and upkeep on your own, particularly when one has to run a business, too. Hiring the services of a website development company in Brisbane could help in such a situation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Open The Doors To Success Section (Content Left, Image Right) */}
      <section className="py-12 md:py-16 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Success Content */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl font-bold text-black font-serif"
              >
                Open The Doors To Success
              </h2>
              <div className="space-y-6 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                <p>
                  Often, people who have maintained blogs online are under the assumption that they can build, develop and maintain a website for their business, too. However, making certain that one's abilities match the requirements of running a professional website for one’s own business might not be in everyone’s skill set. There are a number of resources, advanced tools, and analytics that can be analyzed thoroughly. Maintaining a website for professional businesses can be a whole different ball game. In order to even design a seamless website, one needs to make sure that they are doing things in the correct manner.
                </p>
                <p className="italic text-gray-700 font-sans">
                  A visitor needs to find the website appealing in order to stay as long as possible. The design of the website should be aesthetic but should not end up slowing it down. It is paramount that one takes care of all of these things before launching the website publicly. A website designing agency in Brisbane can help you understand where and how you can improve the operations of your website.
                </p>
              </div>
            </div>

            {/* Right Column: Dynamic SEOMonitor Component */}
            <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[460px]">
                <SEOMonitor />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Branding Steps List Section (Image Left, List Right) */}
      <section className="py-12 md:py-16 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: BRANDING Image */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-[4/3] max-w-[460px]">
                <Image
                  src="/web-designing/BRANDING.png"
                  alt="Branding Steps Illustration"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Steps List Content */}
            <div className="lg:col-span-7 space-y-6 order-2">
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                Having a website not only gives your business credibility but also provides an opportunity to grow your business. There are ways one can establish a business website by regularly engaging in the following steps:
              </p>
              <ul className="text-gray-700 text-[15px] md:text-base font-sans font-medium list-disc pl-5 leading-relaxed">
                <li>launch a website that highlights your business</li>
                <li>Post SEO-friendly content regularly</li>
                <li>Maintain an "About Us" page in order to upkeep the credibility of the company</li>
                <li>Include various reviews and testimonials from your existing customer base</li>
                <li>offer the services and products online, if possible</li>
                <li>Make sure that the data collected is safeguarded</li>
                <li>Promote your website through other social media platforms</li>
                <li>regularly update your website</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Highlight Business Services Column */}
      <section className="py-10 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl font-bold text-black font-serif text-left"
          >
            Highlight Business Services or Products
          </h2>
          <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
            A business website requires you to be able to highlight any and all services or products that your business might have to offer. It is important to remember that one showcases the deals, products, and services one wants to highlight in front of the audience. The products should be displayed properly with a thorough description detailing the qualities and uses of the products. Any visitor can be transformed into a customer if the website is appealing enough.
          </p>
        </div>
      </section>

      {/* 5. SEO Friendly Content Column */}
      <section className="py-10 bg-[#F1F1F1] border-t border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl md:text-3xl font-bold text-black font-serif text-left"
          >
            SEO - Friendly Content
          </h2>
          <div className="space-y-4 text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
            <p>
              By engaging in SEO (Search Engine Optimization) keywords, on their website, one can make certain that their website ranks organically ahead of others in the results. No one looks past the first page of search engine results; therefore, in order to get and maintain more and more visitors on one’s professional website – it is vital to be ranked ahead of the competition.
            </p>
            <p>
              By using the SEO-friendly keywords, one can also ensure that the people who are really in need of your services or products are able to find and locate your website. This method allows one to target customers who already want to avail and use the products and services.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Brisbane Service Highlights Grid (6 Cards) */}
      <section className="py-12 bg-[#F1F1F1] border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between space-y-4">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#EC7317] font-serif"
              >
                Establishing an Online Store
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                If the services or products offered by your business can be delivered or sent in any capacity to the customer through the means of online transactions, it is highly recommended that one establishes an online store. A website designing company in Brisbane would recommend adding a bookings system wherein one can make online bookings for the services or products that cannot be rendered at the consumer’s place. For example, a dentist can take their appointments online via their website, by adding a page wherein the potential customer can fill in their details and book an appointment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between space-y-4">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#EC7317] font-serif"
              >
                "About Us" Section
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                In order to maintain the credibility of your business, a website development agency in Brisbane would recommend adding an "About Us" section on one’s professional website. Having this section allows your returning as well as new customers to see the faces/stories behind your business. By detailing one’s journey, one enables the customer to connect with one's story on a human, empathetic level.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between space-y-4">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#EC7317] font-serif"
              >
                Reviews and Testimonials
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                Including various reviews and testimonials can be incredibly helpful to any customers who are in doubt about getting a specific service or product. Just like the About Us section, adding reviews and testimonials for the customers allows your business to be a reliable and credible business. It showcases the fact that despite availing the services online, the business actually delivers on its products and services. In the ever-increasing expanse of online stores, allowing the provision of reviews and testimonials only ends up helping you in the long run.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between space-y-4">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#EC7317] font-serif"
              >
                Data Protection is Vital
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                As a business owner who has collected data of their customers online, data protection is a consumer's responsibility. It is vital to safeguard the collected data at all costs. Any breach whatsoever can lead to a lawsuit. Additionally, a data breach can severely impact the customer's trust in the company and have a lasting impact on the business's reputation.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between space-y-4">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#EC7317] font-serif"
              >
                Promoting the Website
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                Once you have launched the website, it is imperative that you promote it to your customers through your established communication channels. Be it a newsletter, an Instagram or a Facebook post, it is important to let the running consumer base know that the business has an operational website now. Also, be sure to include the website link wherever possible.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-200/50 flex flex-col justify-between space-y-4">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#EC7317] font-serif"
              >
                Updating Regularly
              </h3>
              <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed font-sans font-medium flex-grow">
                No matter how good the website is, it will not be able to sustain itself in the rankings if one does not update it regularly. One can regularly update the website through the means of offering deals, different products, and services. If that cannot happen, one can start posting blogs on their website in order to keep the consumers engaged in the website.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Conclusion Section (Split Grid, Content Left, Image Right) */}
      <section className="py-12 md:py-16 bg-[#F1F1F1]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: online-serch illustration (renders first on mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full aspect-[4/3] max-w-[460px]">
                <Image
                  src="/web-designing/online-serch.png"
                  alt="Website Design Brisbane Conclusion Illustration"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Conclusion Content */}
            <div className="lg:col-span-7 space-y-6 order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black font-serif"
              >
                Conclusion
              </h2>
              <p className="text-[#333333] text-[15px] md:text-base leading-relaxed font-sans font-medium">
                Having a business website is becoming necessary and vital with the increasing advent of technology and the Internet. However, it is a different situation altogether wherein one has to maintain and troubleshoot various challenges that come in the way of running a business website. One needs to make certain that the website is user-friendly and brings new visitors on a regular basis.
              </p>
            </div>

          </div>
        </div>
      </section>

      <AustraliaPortfolio/>

    </main>
  );
}
