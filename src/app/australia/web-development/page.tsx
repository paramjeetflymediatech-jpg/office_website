"use client";

import React from "react";
import Image from "next/image";

export default function WebDevelopment() {
  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-24 text-[#333333]">
      
      {/* 1. Hero Section (Text Left, Image Right on Desktop) */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column (Right on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[1.2] max-w-[500px]">
                <Image
                  src="/images/bestr-it.png"
                  alt="Website Development Sydney"
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
                Best Web Developers for Website Development Sydney, Australia
              </h1>
              
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl md:text-2xl font-bold font-serif text-black"
              >
                Web Development Services by Flymedia Technology
              </h2>

              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed space-y-4">
                <p>
                  Website Development Company <strong>Stanhope Gardens, Blacktown</strong>, We are experienced in the field of web development services and assist your client to touch their highest potentials by enrolling their businesses on the web and generating sales.
                </p>
                <p>
                  We begin our services with coding and range it to developing a full website for our clients by our UI developer.
                </p>
                <p>
                  We get them ranked higher in the search engines and advertise their products and services in the most effective way so that it becomes easier for them to reach their sales targets resultantly.
                </p>
                <p>
                  The services that we provide our clients with are ecommerce web site development, CMS management system, Full Stack Development, Front-end Development, Website Maintenance and altogether a complete full-fledged website to enhance your online clientage.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Cross-platform Testing Section (Image Left, Text Right on Desktop - Off-White Background) */}
      <section className="bg-[#F1F1F1] py-16 md:py-10 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column (Left on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-square max-w-[480px]">
                <Image
                  src="/IIMG02.png"
                  alt="Cross-platform and responsive web development"
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
                Cross-platform and responsive web development
              </h2>
              
              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Testing of the software so developed, is done both, from the point of view of the administrator and the user. This testing done before the project is launched into the market.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Secured Testing Environment Section (Text Left, Image Right on Desktop - White Background) */}
      <section className="bg-[#F1F1F1] py-16 md:py-10 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column (Right on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[1.2] max-w-[500px]">
                <Image
                  src="/images/bestr-it.png"
                  alt="Secured testing environment for your web project"
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
                Secured testing environment for your web project
              </h2>
              
              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  The testing environment in which the sample testing is run, is also made secure so that there are no leakages while testing the model itself. The backend developer and the front-end developer make sure of this.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Amazing Web Development Services Section (Off-White Background - Flat List Grid) */}
      <section className="bg-[#F1F1F1] py-16 md:py-20 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          {/* Section Centered Header */}
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <span 
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-sm font-semibold tracking-wide text-gray-500 font-serif italic"
            >
              Our Services
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-black font-serif"
            >
              Amazing Web Development Services
            </h2>
          </div>

          {/* Flat 2-Column Grid with perfectly round images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 pt-8">
            {webServices.map((service, idx) => (
              <div 
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-6 text-left"
              >
                {/* Perfectly Round Logo Icon */}
                <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Service Text details */}
                <div className="space-y-2">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-lg sm:text-xl font-bold text-black uppercase font-serif tracking-wide"
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}

const webServices = [
  {
    title: "E-commerce Solutions",
    desc: "To enhance the online business experience and delivery of services, we provide the best e-commerce solutions and the facility of a shopping cart, etc to your website.",
    img: "https://flymediatech.com/australia/wp-content/uploads/2024/03/yii.jpg"
  },
  {
    title: "CMS, WordPress, Drupal",
    desc: "CMS stands for content management systems. It means providing for an effective content over the website so as to attract the viewers and make them stay on your page. WordPress and Drupal also help us do the same.",
    img: "https://flymediatech.com/australia/wp-content/uploads/2024/03/cake-php.jpg"
  },
  {
    title: "Intranets/ Extranets",
    desc: "Integration of point sharing and knowledge management is enabled.",
    img: "https://flymediatech.com/australia/wp-content/uploads/2024/03/open-cart.jpg"
  },
  {
    title: "Facebook Applications",
    desc: "We lead in advertising your business products and services on Facebook like applications and generate sales out of there.",
    img: "https://flymediatech.com/australia/wp-content/uploads/2024/03/wordpress.jpg"
  },
  {
    title: "Email Marketing Solutions",
    desc: "Using email in the most effective manner, sending notifications and offer messages, can be aimed at via email marketing services.",
    img: "https://flymediatech.com/australia/wp-content/uploads/2024/03/magento.jpg"
  },
  {
    title: "PHP and JS Development",
    desc: "Software development technologies are made available in accordance with the latest updated technologies.",
    img: "https://flymediatech.com/australia/wp-content/uploads/2024/03/joomla.jpg"
  }
];
