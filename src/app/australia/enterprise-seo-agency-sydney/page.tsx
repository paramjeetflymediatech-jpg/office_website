"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export default function EnterpriseSeoSydney() {
  const criticalFactors = [
    {
      title: "Enhanced Visibility",
      desc: "With the ever-expanding online landscape, ensuring your enterprise stands out among the competition is paramount. Enterprise SEO boosts your rankings, making you more visible to your target audience.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z" />
        </svg>
      )
    },
    {
      title: "Brand Authority",
      desc: "Effective SEO builds trust and authority. When your enterprise consistently appears at the top of search results, consumers perceive you as a credible and industry-leading brand.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
        </svg>
      )
    },
    {
      title: "Traffic and Conversions",
      desc: "Higher rankings translate to increased organic traffic. Quality traffic, in turn, leads to more conversions, whether they are sales, sign-ups, or other valuable actions.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288{/*  */}c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" />
        </svg>
      )
    },
    {
      title: "Data Driven insights",
      desc: "Enterprises SEO services provide in-depth analytics and data–driven insights, allowing you to refine your digital marketing strategy continuously.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z" />
        </svg>
      )
    },
    {
      title: "Global Reach",
      desc: "If your enterprise operates on a global scale, SEO helps you reach and engage with a diverse audience in various regions.",
      icon: (
        <svg aria-hidden="true" className="w-10 h-10 text-[#EC7317]" fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z" />
        </svg>
      )
    }
  ];

  const flymediaStrengths = [
    {
      title: "Tailored Strategies",
      desc: "We recognize that every enterprise is unique, and a one-size-fits-all approach doesn’t cut it. Our enterprise SEO strategies are meticulously tailored to align with your specific business goals, industry nuances, and target audience."
    },
    {
      title: "Technical prowess",
      desc: "Our team consists of technical wizards who excel in optimizing complex websites and ecommerce platforms. From site architecture to mobile optimization, we ensure your digital assets are search-engine-friendly from the ground up."
    },
    {
      title: "Content Excellence",
      desc: "Compelling content is the heart of SEO success. Our content creators are skilled in producing high-quality, relevant, and engaging content that not only attracts visitors but also converts them into customers."
    },
    {
      title: "Advanced Analytics",
      desc: "Our enterprise SEO services are data-driven. We use advanced analytics tools to track the impact of our strategies that allow us to refine and optimize your digital presence."
    },
    {
      title: "Scalability",
      desc: "Whether you are a growing enterprise or a well-established corporation, our strategies are designed to scale with your business."
    },
    {
      title: "Proven results",
      desc: "Our track record speaks for itself. We have helped numerous enterprises across various industries achieve and maintain top rankings, leading to increased traffic, conversions, and revenue."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans">

      {/* Hero Section */}
      <section className="relative py-12 md:py-10 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Image Column (Right on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[6/5] max-w-[480px]">
                <Image
                  src="/uploads/2024/03/bestr-it.png"
                  alt="Enterprise SEO Agency Sydney"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Text Column (Left on Desktop, Second on Mobile) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-6xl font-bold text-black leading-tight font-serif"
              >
                Enterprise SEO Agency Sydney
              </h1>

              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-lg md:text-2xl font-bold text-black font-serif"
              >
                Elevate Your Digital Presence with Flymedia Technology
              </h2>

              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Maintaining a strong online presence is essential for success. When it comes to optimizing your enterprise’s visibility on the web, you need a trusted partner that understands the complexities of modern SEO. Flymedia Technology, your premier <strong>Enterprise SEO Agency Stanhope Gardens, Blacktown</strong>, is here to take your brand to new heights with top tier enterprise SEO services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. The Power of Enterprise SEO */}
      <section className="py-12 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl lg:text-[28px] font-bold text-black font-serif "
            >
              The Power of Enterprise SEO
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed ">
              Enterprise SEO goes beyond the basics of{" "}
              <Link
                href="/australia/search-engine-optimization"
                className="text-[#EC7317] underline hover:text-black font-semibold transition-colors"
              >
                search engine optimization
              </Link>
              . It is a comprehensive strategy tailored to large organizations and corporations with diverse online assets. It is about optimizing websites, e-commerce platforms, mobile apps, and content across multiple channels to ensure maximum visibility and engagement.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why is Enterprise SEO Critical? (Icon box card format grid) */}
      <section className="py-12 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-start mb-10">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-black font-serif text-center"
            >
              Why is Enterprise SEO Critical?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {criticalFactors.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-5 items-start text-start"
              >
                {/* SVG Icon */}
                <div className="text-[#EC7317] flex justify-start items-center ">
                  {item.icon}
                </div>

                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl md:text-2xl font-bold text-[#EC7317] font-serif"
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Flymedia for Enterprise SEO (Vertical Text Stack List) */}
      <section className="py-12 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-start mb-12 space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-black font-serif text-center"
            >
              Why Choose Flymedia Technology?
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed text-justify">
              At Flymedia Technology, we understand that enterprise-level SEO requires a unique approach. Our specialized team of experts possesses the knowledge, skills and experience to tackle the challenges of SEO at scale.
            </p>
            <p className="text-gray-900 font-semibold text-[15px] sm:text-base text-center">
              Here’s why we are the preferred choice for enterprise SEO services:
            </p>
          </div>

          {/* Grid of Strengths Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flymediaStrengths.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4 items-start text-start"
              >
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl md:text-2xl font-bold text-[#EC7317] font-serif"
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Flymedia Technology Difference */}
      <section className=" border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Image Column (Left on Desktop, First on Mobile) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-square max-w-[420px]">
                <Image
                  src="/uploads/2024/03/IIMG02.png"
                  alt="digital marketing company"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Text Column (Right on Desktop, Second on Mobile) */}
            <div className="lg:col-span-7 space-y-6">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-black font-serif"
              >
                The Flymedia Technology Difference
              </h2>

              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                With Flymedia Technology as your trusted enterprise SEO agency, you are not just a client; you are a partner in your success. Our unwavering commitment to delivering results, our dedication to ethical practices, and our passion for staying at the forefront of SEO innovation set us apart. Elevate your enterprise’s online presence and drive unparalleled growth with Flymedia Technology. Contact us today to schedule a consultation and discover how our <strong>Enterprise SEO Services Australia</strong> can transform your digital landscape.
              </p>

              <p className="text-black font-extrabold text-lg tracking-wide">
                Invest in excellence. Invest in Flymedia Technology.
              </p>
            </div>

          </div>
        </div>
      </section>
      <ContactFormSection />

    </main>
  );
}
