"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function WebDesigningJalandhar() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const workflowSteps = [
    {
      num: "1",
      title: "Create an outstanding design process",
      desc: "The foremost and most important one is to prepare a detailed outline process. Our Website designing professional prepares the layout to go through the further steps."
    },
    {
      num: "2",
      title: "Deep content research",
      desc: "Side by side, an expert team checks the necessary content required to cater to the customer’s demand."
    },
    {
      num: "3",
      title: "Responsive design",
      desc: "We create strategic planning to create a responsive design to allow you to use it on different platforms, and your customers can easily access it."
    },
    {
      num: "4",
      title: "Proper website navigation",
      desc: "We know the importance of website navigation flow, and that is how we build the Website."
    },
    {
      num: "5",
      title: "Valuable plugin integration",
      desc: "Depending on which plugins are available in the market and important ones, our professionals will add the same."
    },
    {
      num: "6",
      title: "Website form creation",
      desc: "Connecting user and business – Depending on the Website, the professionals will create the form."
    },
    {
      num: "7",
      title: "TEST! TEST! TEST!",
      desc: "Until we don’t thoroughly check the Website, we do not deliver to you. Every functionality of the Website is restricted."
    },
    {
      num: "8",
      title: "Delivering",
      desc: "Now! It’s time to deliver you to a website to help you cater to your customer’s demands and increase your ROI."
    }
  ];

  const whyChooseUs = [
    {
      reason: "Reason 1: User-centric approach",
      desc: "Flymedia Technology works to promote your business by all possible means. Our company only offers services that are tailor-made to promote your business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" className="w-12 h-12" viewBox="0 0 64 64" fill="currentColor">
          <path d="m62 4h-60a1 1 0 0 0 -1 1v54a1 1 0 0 0 1 1h60a1 1 0 0 0 1-1v-54a1 1 0 0 0 -1-1zm-1 2v10h-58v-10zm-58 14v-2h8v2zm10-2h8v2h-8zm10 0h8v2h-8zm10 0h8a2 2 0 0 1 -2 2h-6zm-30 40v-36h36a4 4 0 0 0 4-4h18v40z"></path>
          <path d="m8 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
          <path d="m16 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
          <path d="m56 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
          <path d="m24 14h24a3 3 0 0 0 0-6h-24a3 3 0 0 0 0 6zm0-4h24a1 1 0 0 1 0 2h-24a1 1 0 0 1 0-2z"></path>
          <path d="m52 22a6.948 6.948 0 0 0 -6.92 8h-10.08v-5a1 1 0 0 0 -1-1h-28a1 1 0 0 0 -1 1v24a1 1 0 0 0 1 1h21v5a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-19.685a6.994 6.994 0 0 0 -3-13.315zm-19 4v4h-5a1 1 0 0 0 -1 1v1h-20v-6zm-26 22v-14h20v14zm22 6v-14h24v14zm24-16h-24v-6h16.685a6.907 6.907 0 0 0 7.315 3.92zm-1-4a5 5 0 1 1 5-5 5.006 5.006 0 0 1 -5 5z"></path>
          <path d="m53.293 26.293-1.293 1.293-1.293-1.293-1.414 1.414 1.293 1.293-1.293 1.293 1.414 1.414 1.293-1.293 1.293 1.293 1.414-1.414-1.293-1.293 1.293-1.293z"></path>
          <path d="m9 28h2v2h-2z"></path>
          <path d="m13 28h2v2h-2z"></path>
          <path d="m31 34h2v2h-2z"></path>
          <path d="m35 34h2v2h-2z"></path>
          <path d="m9 36h16v2h-16z"></path>
          <path d="m9 40h16v2h-16z"></path>
          <path d="m9 44h12v2h-12z"></path>
          <path d="m23 44h2v2h-2z"></path>
          <path d="m31 42h20v2h-20z"></path>
          <path d="m31 46h20v2h-20z"></path>
          <path d="m31 50h16v2h-16z"></path>
          <path d="m49 50h2v2h-2z"></path>
        </svg>
      )
    },
    {
      reason: "Reason 2: Google certified partner company",
      desc: "Flymedia Technology, with its continuous efforts to use the latest Google online management tools and latest marketing methods, got the badge of ‘Google certified company.’",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12" viewBox="0 0 488 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
        </svg>
      )
    },
    {
      reason: "Reason 3: Partnership to help you",
      desc: "The Flymedia Technology expert team is here to assist you better. We put in the same effort every time, no matter which projects.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"></path>
        </svg>
      )
    },
    {
      reason: "Reason 4: Years of Excellence",
      desc: "Flymedia Technology expert team genes are made only to bring excellence to your business website.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"></path>
        </svg>
      )
    },
    {
      reason: "Reason 5: Effectiveness at every step of the journey",
      desc: "For every business ultimate goal is to boost ROI, and our effective Website designing tactics are here to fulfill the same for you.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M118.3 238.4c3.5-12.5 6.9-33.6 13.2-33.6 8.3 1.8 9.6 23.4 18.6 36.6 4.6-23.5 5.3-85.1 14.1-86.7 9-.7 19.7 66.5 22 77.5 9.9 4.1 48.9 6.6 48.9 6.6 1.9 7.3-24 7.6-40 7.8-4.6 14.8-5.4 27.7-11.4 28-4.7.2-8.2-28.8-17.5-49.6l-9.4 65.5c-4.4 13-15.5-22.5-21.9-39.3-3.3-.1-62.4-1.6-47.6-7.8l31-5zM228 448c21.2 0 21.2-32 0-32H92c-21.2 0-21.2 32 0 32h136zm-24 64c21.2 0 21.2-32 0-32h-88c-21.2 0-21.2 32 0 32h88zm34.2-141.5c3.2-18.9 5.2-36.4 11.9-48.8 7.9-14.7 16.1-28.1 24-41 24.6-40.4 45.9-75.2 45.9-125.5C320 69.6 248.2 0 160 0S0 69.6 0 155.2c0 50.2 21.3 85.1 45.9 125.5 7.9 12.9 16 26.3 24 41 6.7 12.5 8.7 29.8 11.9 48.9 3.5 21 36.1 15.7 32.6-5.1-3.6-21.7-5.6-40.7-15.3-58.6C66.5 246.5 33 211.3 33 155.2 33 87.3 90 32 160 32s127 55.3 127 123.2c0 56.1-33.5 91.3-66.1 151.6-9.7 18-11.7 37.4-15.3 58.6-3.4 20.6 29 26.4 32.6 5.1z"></path>
        </svg>
      )
    },
    {
      reason: "Reason 6: Increased visibility",
      desc: "Website designing combines different factors like homepage, service page, contact page, landing page, graphic, video content, and responsive design. Our expert website designing team in Jalandhar is here to bring effectiveness and create a leading website.",
      icon: (
        <svg aria-hidden="true" className="w-12 h-12" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
        </svg>
      )
    }
  ];

  const faqs = [
    {
      q: "How much does it take to design the Website?",
      a: "Determining the exact time frame is challenging. Every Website is different from one another. As some might require complex features to achieve desired results, it might take some extra time, and the client gives effort & all the information we need on time like some images, text, or bio."
    },
    {
      q: "How much does website designing cost?",
      a: "The cost of the Website depends on the complexity and features. You can discuss the same with our team. And we will give the necessary quote to you."
    },
    {
      q: "Do you redesign the existing Website?",
      a: "YES! We will create your business website with the best functionality depending on the latest technology."
    }
  ];

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-black overflow-hidden font-sans pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative py-12 md:py-16 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Text & Verbatim Content) - Order last on mobile, first on desktop */}
            <div className="lg:col-span-7 space-y-6 order-last lg:order-first">
              
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-gray-900 leading-[1.15]">
                  Best Web Designing Company <br className="hidden md:inline" /> in Jalandhar
                </h1>
              </div>

              <div className="space-y-6 text-gray-800 text-sm sm:text-base leading-relaxed font-semibold">
                <p>
                  The online world is a treasure trove of wonderful things. And that wonder allows businesses to win the customer’s hearts through an imaginative and alluring online marketing world. The prime element for the online business is to have a business website that represents:
                </p>

                {/* Grid of Two Icon Boxes (Replicating Same-to-Same SVG icons and content) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                  {/* Icon Box 1 */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-16 h-16 flex items-center justify-center text-[#ff9900]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 512 512" fill="currentColor">
                        <path d="m416.34375 111.632812-24.34375-24.34375-24.34375 24.34375-11.3125-11.3125 35.65625-35.65625 35.65625 35.65625zm0 0"></path>
                        <path d="m384 79.976562h16v88h-16zm0 0"></path>
                        <path d="m432 271.976562h-16v-34.402343c60.359375-12.320313 101.585938-68.34375 95.390625-129.636719-6.191406-61.289062-57.785156-107.9375-119.390625-107.9375s-113.199219 46.648438-119.390625 107.9375c-6.195313 61.292969 35.03125 117.316406 95.390625 129.636719v34.402343h-16v224h-32v-256h-80v256h-32v-192h-80v192h-32v-112h-80v112h-16v16h512v-16h-80zm-352 224h-48v-96h48zm112 0h-48v-176h48zm112 0h-48v-240h48zm-16-376c0-55.507812 43.589844-101.230468 99.035156-103.878906 55.441406-2.652344 103.195313 38.707032 108.492188 93.957032 5.292968 55.253906-33.734375 104.929687-88.671875 112.855468l-6.855469.984375v48.082031h-16v-48.082031l-6.855469-.984375c-51.0625-7.582031-88.933593-51.3125-89.144531-102.933594zm128 376h-48v-208h48zm0 0"></path>
                        <path d="m480 119.976562c0-48.601562-39.398438-88-88-88s-88 39.398438-88 88c0 48.601563 39.398438 88 88 88 48.578125-.058593 87.941406-39.421874 88-88zm-160 0c0-39.765624 32.234375-72 72-72s72 32.234376 72 72c0 39.761719-32.234375 72-72 72-39.746094-.046874-71.957031-32.253906-72-72zm0 0"></path>
                        <path d="m115.128906 271.976562h56.183594l68.6875-68.6875v20.6875h16v-48h-48v16h20.6875l-64 64h-55.816406l-106.304688 98.125 10.867188 11.746094zm0 0"></path>
                        <path d="m464 271.976562h48v16h-48zm0 0"></path>
                        <path d="m464 303.976562h48v16h-48zm0 0"></path>
                        <path d="m464 335.976562h48v16h-48zm0 0"></path>
                        <path d="m464 367.976562h48v16h-48zm0 0"></path>
                        <path d="m464 399.976562h48v16h-48zm0 0"></path>
                        <path d="m464 431.976562h48v16h-48zm0 0"></path>
                        <path d="m464 463.976562h48v16h-48zm0 0"></path>
                      </svg>
                    </div>
                    <h3 className="text-gray-900 font-extrabold text-sm sm:text-base leading-snug max-w-[240px]">
                      Business importance in the market
                    </h3>
                  </div>

                  {/* Icon Box 2 */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-16 h-16 flex items-center justify-center text-[#ff9900]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 64 64" fill="currentColor">
                        <path d="m62 4h-60a1 1 0 0 0 -1 1v54a1 1 0 0 0 1 1h60a1 1 0 0 0 1-1v-54a1 1 0 0 0 -1-1zm-1 2v10h-58v-10zm-58 14v-2h8v2zm10-2h8v2h-8zm10 0h8v2h-8zm10 0h8a2 2 0 0 1 -2 2h-6zm-30 40v-36h36a4 4 0 0 0 4-4h18v40z"></path>
                        <path d="m8 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
                        <path d="m16 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
                        <path d="m56 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path>
                        <path d="m24 14h24a3 3 0 0 0 0-6h-24a3 3 0 0 0 0 6zm0-4h24a1 1 0 0 1 0 2h-24a1 1 0 0 1 0-2z"></path>
                        <path d="m52 22a6.948 6.948 0 0 0 -6.92 8h-10.08v-5a1 1 0 0 0 -1-1h-28a1 1 0 0 0 -1 1v24a1 1 0 0 0 1 1h21v5a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-19.685a6.994 6.994 0 0 0 -3-13.315zm-19 4v4h-5a1 1 0 0 0 -1 1v1h-20v-6zm-26 22v-14h20v14zm22 6v-14h24v14zm24-16h-24v-6h16.685a6.907 6.907 0 0 0 7.315 3.92zm-1-4a5 5 0 1 1 5-5 5.006 5.006 0 0 1 -5 5z"></path>
                        <path d="m53.293 26.293-1.293 1.293-1.293-1.293-1.414 1.414 1.293 1.293-1.293 1.293 1.414 1.414 1.293-1.293 1.293 1.293 1.414-1.414-1.293-1.293 1.293-1.293z"></path>
                        <path d="m9 28h2v2h-2z"></path>
                        <path d="m13 28h2v2h-2z"></path>
                        <path d="m31 34h2v2h-2z"></path>
                        <path d="m35 34h2v2h-2z"></path>
                        <path d="m9 36h16v2h-16z"></path>
                        <path d="m9 40h16v2h-16z"></path>
                        <path d="m9 44h12v2h-12z"></path>
                        <path d="m23 44h2v2h-2z"></path>
                        <path d="m31 42h20v2h-20z"></path>
                        <path d="m31 46h20v2h-20z"></path>
                        <path d="m31 50h16v2h-16z"></path>
                        <path d="m49 50h2v2h-2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-gray-900 font-extrabold text-sm sm:text-base leading-snug max-w-[240px]">
                      How do customers get benefits from their service and products?
                    </h3>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column (Hero Graphic) - Order first on mobile, last on desktop */}
            <div className="lg:col-span-5 relative order-first lg:order-last flex justify-center">
              <img
                src="https://flymediatech.com/wp-content/uploads/2024/03/mobi-1024x853.png"
                alt="Mobile Apps Development Company In Ludhiana, Punjab"
                width={800}
                height={666}
                className="w-full h-auto object-contain max-w-lg lg:max-w-none"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Professional Website Designing Intro Section */}
      <section className="relative py-12 bg-[#EFEFEF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
            If you have been searching for professional <Link href="/our-services/web-designing/" className="text-[#ff9900] font-bold hover:underline">Website Designing</Link> for all this while but are not able to have a result-driven website, You have landed at the right place! (Indeed! No one should underestimate the power of online search and marketing)
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            <strong>Flymedia Technology:</strong> One of the <strong>best Website designing company in Jalandhar</strong> brings you the most seamless, creative, innovative, and mobile-friendly approach to generate organic traffic on your Website. Our experienced and enthusiastic website designing team is well-versed with the latest and up-to-date software to allow your business website to grip customers’ attention right away. Every website page and design is done to the ‘T’ and the modern-day online marketing rules.
          </p>
        </div>
      </section>

      {/* 3. Fully Optimized Website Design Section */}
      <section className="relative py-12 md:py-16 bg-[#EFEFEF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-gray-900 leading-tight">
            Fully Optimized Website Design: Helps your business shine away
          </h2>
          
          <div className="text-gray-800 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              For every business, it’s about being on the top of search engines. And for that, the linchpin needs to be stalwart so that your other competitors don’t surpass you easily. With the expertise of Flymedia Technology <strong>Website Designing in Jalandhar,</strong> the focus is not just on creating a simple design, but it requires several steps like:
            </p>

            <ul className="space-y-2 font-bold text-gray-900 pl-6 list-disc">
              <li>Making the right order</li>
              <li>Adding value to the Website</li>
              <li>Illuminate everything</li>
              <li>Simplifying the approach</li>
              <li>Clarify everything</li>
              <li>Changing</li>
              <li>Adding bits of amusement to the Website</li>
            </ul>

            <p className="pt-2">
              And that is why for a fully optimized website design in Jalandhar, you have to only trust the expertise of a professional website designing team.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Online Business Website Description Section */}
      <section className="relative py-12 md:py-16 bg-[#EFEFEF] ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-gray-900 leading-tight">
            Online Business Website: Gateway to increase business presence
          </h2>
          
          <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed">
            <p>
              The highly competitive world allows each one of us to be on our toes all the time. For a layman to understand and practice the online marketing world is not like a five-finger exercise (routine task).
            </p>
            <p>
              And that is why to target the specific audience in the market; you need website design services. The website design allows the digital presence effortlessly felt by the customers from around the globe. A perfectly-created website design not just eases the customer’s way to access service but promotes the business’s reputation and presence in the market. So, it’s time to take leverage of the website designing and help your website business flourish towards the fruitful path of SUCCESS. The best website designing company is here to make a unique identity for your growing business.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Workflow / Create an Outstanding Design Process Section */}
      <section className="relative py-12 md:py-16 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-gray-900 leading-tight">
              Flymedia Technology: Workflow of Website designing team in Jalandhar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-[#414141] p-6 rounded-2xl relative pt-12 space-y-3 shadow-sm border-b-2 border-[#ff9900] "
              >
                {/* Large Number Badge */}
                <div className="absolute top-0 left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-[#F06C1E] text-white font-extrabold flex items-center justify-center text-lg shadow-md">
                  {step.num}
                </div>
                
                <h3 className="text-lg font-extrabold font-sans text-gray-200">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-semibold text-white">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="relative py-12 md:py-16 bg-[#EFEFEF] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-gray-900 leading-tight">
              Choose our Website Designing Company: Time To Turn Dreams Into Reality
            </h2>
            <p className="text-gray-800 text-sm sm:text-base font-semibold">
              Flymedia Technology team of <strong>Website Designing in Jalandhar</strong> stands apart from the rest because of our values:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, idx) => (
              <div 
                key={idx}
                className="bg-[#EFEFEF]/60 p-6 rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
              >
                <div className="w-12 h-12 flex items-center justify-center text-[#ff9900] mx-auto">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 font-sans text-center">
                  {reason.reason}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium text-center">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Let's Grow Together Section */}
      <section className="relative py-12 md:py-16 bg-[#EFEFEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Grow Image) - Natural top ordering on mobile */}
            <div className="lg:col-span-5 flex justify-center order-first lg:order-first">
              <img
                src="/bgimg.png"
                alt="Best Website Design & Development Company in Jalandhar"
                width={1000}
                height={600}
                className="w-full h-auto object-contain max-w-lg lg:max-w-none"
              />
            </div>

            {/* Right Column (Verbatim Text) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-gray-900 leading-tight">
                Let’s grow together in the Online World!
              </h2>

              <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed font-semibold">
                <p>
                  In every area, ‘GROWTH’ is pivotal to success and experience. And that is what we stand by. If your business grows, it’s our growth and, most importantly, the most considerable pride. Our in-house professional team brings you a one-stop destination for other services like website development, SEO (marketing services), web-based software, google AdWords, content writing, payment gateway integration, SMO services, etc.
                </p>

                <p>
                  So, let’s grow together. Put in your trust for all your Website designing needs on our company Flymedia Technology Website Designing in Jalandhar and see its difference. Get hold of our team to get your business website.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQs Section */}
      <section className="relative py-12 md:py-16 bg-[#EFEFEF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-wide">
              FAQs
            </h2>
          </div>

          <div className="space-y-8 text-black text-sm sm:text-[15px] leading-relaxed max-w-5xl mx-auto">
            <div className="space-y-2">
              <p className="font-extrabold text-gray-900">
                How much does it take to design the Website?
              </p>
              <p className="text-gray-800 font-medium">
                Determining the exact time frame is challenging. Every Website is different from one another. As some might require complex features to achieve desired results, it might take some extra time, and the client gives effort &amp; all the information we need on time like some images, text, or bio.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-extrabold text-gray-900">
                How much does website designing cost?
              </p>
              <p className="text-gray-800 font-medium">
                The cost of the Website depends on the complexity and features. You can discuss the same with our team. And we will give the necessary quote to you.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-extrabold text-gray-900">
                Do you redesign the existing Website?
              </p>
              <p className="text-gray-800 font-medium">
                YES! We will create your business website with the best functionality depending on the latest technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }, null, 2),
        }}
      />
    </div>
  );
}
