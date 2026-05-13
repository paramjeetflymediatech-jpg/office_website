"use client";

import React from "react";
import Image from "next/image";

export default function GoogleDisplayAdvertisingAgency() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-24 text-[#333333]">
      
      {/* 1. Hero Section (Text Left, Image Right on Desktop - bg-[#F1F1F1]) */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column (Right on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-[480px]">
                <Image
                  src="https://flymediatech.com/australia/wp-content/uploads/2024/03/newpng.png"
                  alt="Google Display Advertising Agency"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Text Column (Left on Desktop, Second on Mobile) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-left">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight font-serif"
              >
                Google Display Advertising Agency
              </h1>
              
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl md:text-2xl font-bold font-serif text-black"
              >
                Display Advertising Success Secrets: Flymedia Technology
              </h2>

              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed space-y-4">
                <p>
                  Advertising has been involved outside traditional channels in the contemporary digital era. Display ads have become an essential strategy for connecting with target customers. In this situation, google display advertising agencies considerably aid businesses like Flymedia Technology in creating and managing. Fruitful display ad campaigns, especially in <strong>Stanhope Gardens, Blacktown</strong> and other parts of Australia. Flymedia Technology is a significant participant in the computer industry. It has used the potential of display ads to significantly expand its brand awareness and reach in Sydney and Australia. They have used top-tier ad creative services to achieve their advertising goals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Collaborative Partner Section (Image Left, Text Right - Includes Button and Google Badge Below It) */}
      <section className="bg-[#F1F1F1]  border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column (Left on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-square max-w-[480px]">
                <Image
                  src="/IIMG02.png"
                  alt="Google Display advertising agency: the collaborative partner"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Text Column (Right on Desktop, Second on Mobile) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-2 text-left">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black font-serif"
              >
                Google Display advertising agency: the collaborative partner
              </h2>
              
              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed space-y-4">
                <p>
                  Google Display Ads is a dependable partner for businesses wishing to grow in the world of digital advertising. These companies help to make good ads so that the audience easily understands what is in ads. This company helps to maintain ads. They use a big online network to show their ads so that it is easily delivered to people. The partnership relies on agency expertise. They are knowledgeable in the finer points of online ads, such as audience targeting and placements. Businesses like Flymedia Technology can make the most of their advertising spend because of this knowledge.
                </p>
              </div>

              {/* Action and Badge Stack */}
              <div className="space-y-6 pt-2">
                <div>
                  <a 
                    href="/australia/contact"
                    className="inline-block bg-[#EC7317] hover:bg-[#d66210] text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-sm uppercase tracking-wider"
                  >
                    Contact Us
                  </a>
                </div>

                {/* Google Partner Badge (Renders directly under the contact button) */}
                <div className="flex justify-start">
                  <a 
                    href="https://www.google.com/partners/agency?id=6034178446"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-40 aspect-[634/607]"
                  >
                    <Image
                      src="https://flymediatech.com/australia/wp-content/uploads/2024/03/PremierBadge-1.png"
                      alt="Google Partner Premier Badge"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Ad Creative Services in Sydney (Full Width / No Image Row - bg-[#F1F1F1]) */}
      <section className="bg-[#F1F1F1] py-16 md:py-10 border-t border-gray-200/50">
        <div className="max-w-5xl mx-auto px-6 text-left space-y-6">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-bold text-black font-serif"
          >
            Ad Creative Services in Sydney
          </h2>
          
          <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
            <p>
              makes ads memorable and approachable. These creative services are to produce ads that attract viewers, generate powerful emotions and, most importantly, inspire them to take action. and leave a lasting impression. They use methods like catchy slogans, outstanding images and relatable content.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Display Ads Services across Australia Section (Text Left, Image Right - bg-[#F1F1F1]) */}
      <section className="bg-[#F1F1F1]  border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column (Right on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-square max-w-[480px]">
                <Image
                  src="https://flymediatech.com/australia/wp-content/uploads/2024/03/imagwe-01.png"
                  alt="Display ads services across Australia: extending the reach"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Text Column (Left on Desktop, Second on Mobile) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-left">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black font-serif"
              >
                Display ads services across Australia: extending the reach
              </h2>
              
              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Advertising has been involved outside traditional channels in the contemporary digital era. Display ads have become an essential strategy for connecting with target customers. In this situation, google display advertising agencies considerably aid businesses like Flymedia Technology in creating and managing. Fruitful display ad campaigns, especially in Sydney and other parts of Australia. Flymedia Technology is a significant participant in the computer industry. It has used the potential of display ads to significantly expand its brand awareness and reach in Sydney and Australia. They have used top-tier ad creative services to achieve their advertising goals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. The flymedia technology success story (Image Left, Text Right - bg-[#F1F1F1]) */}
      <section className="bg-[#F1F1F1]  border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column (Left on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-square max-w-[440px]">
                <Image
                  src="/SWHAD-768x768.webp"
                  alt="The flymedia technology success story G logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Text Column (Right on Desktop, Second on Mobile) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-2 text-left">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-black font-serif"
              >
                The flymedia technology success story
              </h2>
              
              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Flymedia's success is largely due to its skillful use of display ads. They work along with google adwords agencies to reach more people. With the help of Sydney's innovative ads professionals, their ads are made cool and creative. They make use of expertise in display ads to reach people all around Australia. Businesses can really benefit from display ads because they collaborate with google display ads agencies, Stanhope Gardens, Blacktown-based creative ads professionals and Australian display ads experts. Flymedia technology has been successful in gaining visibility in the digital age. It is all about expanding your audience.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
