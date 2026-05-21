"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function OnPageSeoSydney() {
  const strategyPoints = [
    {
      title: "Enhanced optimisation of keywords",
      desc: "On-page SEO incorporates relevant keywords into your website content, meta tags, urls and headings. With this optimization, search engines are able to understand your content’s relevance to specific search queries.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#EC7317]" fill="currentColor" viewBox="0 0 64 64">
          <path d="m62 4h-60a1 1 0 0 0 -1 1v54a1 1 0 0 0 1 1h60a1 1 0 0 0 1-1v-54a1 1 0 0 0 -1-1zm-1 2v10h-58v-10zm-58 14v-2h8v2zm10-2h8v2h-8zm10 0h8v2h-8zm10 0h8a2 2 0 0 1 -2 2h-6zm-30 40v-36h36a4 4 0 0 0 4-4h18v40z" fill="#EC7317" opacity="0.15"></path>
          <path d="m8 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" fill="#EC7317"></path>
          <path d="m16 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" fill="#EC7317"></path>
          <path d="m56 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" fill="#EC7317"></path>
          <path d="m24 14h24a3 3 0 0 0 0-6h-24a3 3 0 0 0 0 6zm0-4h24a1 1 0 0 1 0 2h-24a1 1 0 0 1 0-2z" fill="#EC7317"></path>
          <path d="m52 22a6.948 6.948 0 0 0 -6.92 8h-10.08v-5a1 1 0 0 0 -1-1h-28a1 1 0 0 0 -1 1v24a1 1 0 0 0 1 1h21v5a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-19.685a6.994 6.994 0 0 0 -3-13.315zm-19 4v4h-5a1 1 0 0 0 -1 1v1h-20v-6zm-26 22v-14h20v14zm22 6v-14h24v14zm24-16h-24v-6h16.685a6.907 6.907 0 0 0 7.315 3.92zm-1-4a5 5 0 1 1 5-5 5.006 5.006 0 0 1 -5 5z" fill="#EC7317"></path>
          <path d="m53.293 26.293-1.293 1.293-1.293-1.293-1.414 1.414 1.293 1.293-1.293 1.293 1.414 1.414 1.293-1.293 1.293 1.293 1.414-1.414-1.293-1.293 1.293-1.293z" fill="#EC7317"></path>
          <path d="m9 28h2v2h-2zm4 0h2v2h-2zm18 6h2v2h-2zm4 0h2v2h-2zm-26 2h16v2h-16zm0 4h16v2h-16zm0 4h12v2h-12zm14 0h2v2h-2zm8-2h20v2h-20zm0 4h20v2h-20zm0 4h16v2h-16zm18 0h2v2h-2z" fill="#EC7317"></path>
        </svg>
      )
    },
    {
      title: "Improved User Experience",
      desc: "An optimised website enhances the user experience significantly. It will help you navigate clearly, load pages at faster rates. It enhances the website’s mobile responsiveness and provides well-structured content to the users.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12 text-[#EC7317]" viewBox="0 0 488 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
      )
    },
    {
      title: "Top-Quality Content",
      desc: "On-page SEO promotes top quality content creation which is informative and engaging for the audience. Customers get attracted to quality content. They are encouraged to spend more time on your website, which enhances the chances of promotion and backlinks.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12 text-[#EC7317]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z" />
        </svg>
      )
    },
    {
      title: "Meta Descriptions and Title Tags",
      desc: "You can attract your users to click at your links with title tags and meta description, that looks compelling. It helps you enhance your rankings with the best Click-through rates(CTR).",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12 text-[#EC7317]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z" />
        </svg>
      )
    },
    {
      title: "Internal Linking",
      desc: "This process involves linking to other relevant pages in your website. With this practice you can distribute link equity throughout your site. With this process, search engines can crawl and index your content easily.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12 text-[#EC7317]" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M118.3 238.4c3.5-12.5 6.9-33.6 13.2-33.6 8.3 1.8 9.6 23.4 18.6 36.6 4.6-23.5 5.3-85.1 14.1-86.7 9-.7 19.7 66.5 22 77.5 9.9 4.1 48.9 6.6 48.9 6.6 1.9 7.3-24 7.6-40 7.8-4.6 14.8-5.4 27.7-11.4 28-4.7.2-8.2-28.8-17.5-49.6l-9.4 65.5c-4.4 13-15.5-22.5-21.9-39.3-3.3-.1-62.4-1.6-47.6-7.8l31-5zM228 448c21.2 0 21.2-32 0-32H92c-21.2 0-21.2 32 0 32h136zm-24 64c21.2 0 21.2-32 0-32h-88c-21.2 0-21.2 32 0 32h88zm34.2-141.5c3.2-18.9 5.2-36.4 11.9-48.8 7.9-14.7 16.1-28.1 24-41 24.6-40.4 45.9-75.2 45.9-125.5C320 69.6 248.2 0 160 0S0 69.6 0 155.2c0 50.2 21.3 85.1 45.9 125.5 7.9 12.9 16 26.3 24 41 6.7 12.5 8.7 29.8 11.9 48.9 3.5 21 36.1 15.7 32.6-5.1-3.6-21.7-5.6-40.7-15.3-58.6C66.5 246.5 33 211.3 33 155.2 33 87.3 90 32 160 32s127 55.3 127 123.2c0 56.1-33.5 91.3-66.1 151.6-9.7 18-11.7 37.4-15.3 58.6-3.4 20.6 29 26.4 32.6 5.1z" />
        </svg>
      )
    },
    {
      title: "Link Building",
      desc: "Build backlinks from authoritative websites in your industry that are of high-quality. You can do so by posting as a guest, reaching out to further audiences and marketing your content effectively.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12 text-[#EC7317]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
        </svg>
      )
    },
    {
      title: "Header Tags",
      desc: "Proper utility of header tags organises your content for your readers. It also signals to search engines the hierarchy and relevance of your content.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12 text-[#EC7317]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z" />
        </svg>
      )
    },
    {
      title: "Regularly Updated Content",
      desc: "You can maintain and improve your search rankings by updating your content regularly with new information or insights. Search engines can also identify your website’s activity and relevance with fresh content.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12 text-[#EC7317]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M192 480c39.5 0 76.2-11.8 106.8-32.2H85.3C115.8 468.2 152.5 480 192 480zm-89.1-193.1v-12.4H0v12.4H102.9zm20.5 57H8.5c2.6 8.5 5.8 16.8 9.6 24.8h138.3c-12.9-5.7-24.1-14.2-33-24.8zm-17.7-34.7H1.3c.9 7.6 2.2 15 3.9 22.3h109.7c-4-6.9-7.2-14.4-9.2-22.3zm-2.8-69.3H0v17.3H102.9zm0-173.2H0v4.9H102.9zm0-34.7H0v2.5H102.9zm0 69.3H0v7.4H102.9zm0 104H0v14.8H102.9zm0-69.3H0v9.9H102.9zm0 34.6H0V183H102.9zm166.2 160.9h109.7c1.8-7.3 3.1-14.7 3.9-22.3H278.3c-2.1 7.9-5.2 15.4-9.2 22.3zm12-185.7H384V136H281.1zm0 37.2H384v-12.4H281.1zm0-74.3H384v-7.4H281.1zm0-76.7v2.5H384V32zm-203 410.9h227.7c11.8-8.7 22.7-18.6 32.2-29.7H44.9c9.6 11 21.4 21 33.2 29.7zm203-371.3H384v-4.9H281.1zm0 148.5H384v-14.8H281.1z" />
        </svg>
      )
    },
    {
      title: "Credibility and Trust building",
      desc: "You can earn more trust and credibility by optimising your site well enough for your users and search engines. It also improves your organic traffic and rankings pretty well.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12 text-[#EC7317]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z" />
        </svg>
      )
    },
    {
      title: "Competitive Benefits",
      desc: "You can have an edge over other competitors in the market if you implement effective On-Page SEO practices.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12 text-[#EC7317]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16">

      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-[#F1F1F1]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.01]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/uploads/2024/03/rocket.png"
                  alt="On-Page SEO Rocket"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[28px] font-bold text-black leading-tight font-serif"
              >
                How On-Page SEO Enhances The Visibility of Your Website
              </h1>

              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-lg md:text-xl font-bold  font-serif"
              >
                On-Page SEO
              </h2>

              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                This is a process which is useful in enhancing parts of your website to ensure their high rankings on search engines. It also helps in enhancing your website’s visibility in search engines. In this process, things like on-page content, title tags, links and other things are updated to make your website more relevant. On-page SEO helps search engines to check the relevance of the website. If the search engines find your content useful and relevant to the user, your website will be made more visible by these search engines. People providing the best <strong>On Page SEO Optimization Services in Stanhope Gardens, Blacktown</strong> shed light on some of the benefits of On-Page SEO for a website:
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Why Do Websites Need This Strategy? Grid */}
      <section className="py-12 border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-start mb-12">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl md:text-3xl lg:text-[28px] font-bold text-black font-serif"
            >
              Why Do Websites Need This Strategy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategyPoints.map((item, idx) => (
              <div
                key={idx}
                className=" rounded-2xl p-8 border border-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-6"
              >
                <div className="p-4 bg-[#F1F1F1] rounded-full w-fit">
                  {item.icon}
                </div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-lg md:text-xl font-bold text-black font-serif"
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

      {/* 3. Concluding Summary Card */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className=" p-8 md:p-10  space-y-6">
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              Hence, these are the best On-page{" "}
              <Link
                href="/australia/search-engine-optimization"
                className="text-[#EC7317] underline hover:text-black font-semibold transition-colors"
              >
                SEO
              </Link>{" "}
              methods that can help you enhance your visibility and website rankings. These methods can help you get the desired conversion rates and business expansion very effectively. SEO companies specializing in <strong>On-Page SEO Services Sydney</strong> have got the best results by using these methods. They have helped the website owners run and expand their businesses effectively without spending much money. That makes On-page SEO the best strategy.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
