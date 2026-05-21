"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Target, Users, TrendingUp, HeartPulse } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactFormSection from "@/components/ContactFormSection";

export default function DigitalMarketingRehabCenter() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const imageX = useTransform(scrollYProgress, [0, 0.5], [0, 30]);

  return (
    <div className="min-h-screen bg-[#EFEFEF] font-sans">
      {/* Hero Section */}
      <section className="relative pt-20 bg-transparent border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-semibold text-black leading-[1.1] tracking-tight">
                  Digital Marketing For <br /> De-Addiction Hospital
                </h1>
              </div>

              <div className="space-y-6 text-gray-600">
                <p className="text-xl md:text-2xl leading-relaxed font-bold text-black">
                  What are the important SEO tips for a good digital marketing strategy?
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                  Digital Marketing Services For de addiction or Rehab centre. As we know, in this era where youth is getting addicted to various intoxicating products and alcohol, the need for a rehab centre is increasing day by day. Here the role of a rehab centre comes into existence.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                  But the challenge that arises in the way of rehab centres is to get their page on the top so that they can get the opportunity to provide their services to the maximum youth. We offer tailored digital strategies to help your center reach those who need your help the most.
                </p>
              </div>

              {/* <div className="pt-8 flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest hover:bg-[#ff9900] transition-all duration-500 shadow-2xl shadow-black/20 flex items-center gap-3 group">
                  Consult Experts
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div> */}
            </div>

            {/* Right: Image with Parallax */}
            <motion.div
              style={{ y: imageY, x: imageX }}
              className="relative aspect-square flex items-center justify-center order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-[#ff9900]/10 rounded-full blur-[120px] animate-pulse" />
              <Image
                src="/digital-marketing-de-addiction-rehab-center/REHAB.png"
                alt="Digital Marketing Services For De Addiction or Rehab Centre"
                width={800}
                height={800}
                className="relative z-10 w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.15)] object-contain"
                priority
              />
            </motion.div>

          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff9900]/5 rounded-full blur-[150px] -z-10" />
      </section>

      {/* Parallax Content Section */}
      <section
        className="relative py-28 overflow-hidden bg-cover bg-center bg-fixed flex items-center justify-center mt-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/IIMG01.png')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white relative z-10 space-y-8">
          <p className="text-lg sm:text-xl md:text-2xl font-serif leading-relaxed max-w-5xl mx-auto">
            For this, it calls the need for effective digital marketing services for the de-addiction hospital in India. SEO & Digital marketing for rehab centres in Ludhiana, Punjab becomes a necessity because, in the absence of a good rehab centre, the addicted patient would not be able to relive the life he used to live before he gets addicted to something.
          </p>


          <p className="text-lg sm:text-xl md:text-2xl font-serif leading-relaxed max-w-5xl mx-auto">
            Following are some of the quintessential tips and techniques for building up an effective strategy for digital marketing of rehab centres:
          </p>
        </div>
      </section>

      {/* Alternating Content Sections */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

          {/* Keyword Research Block (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Left */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-[#ff9900]/10 rounded-[70%] transform  scale-105" />
              <Image
                src="/digital-marketing-de-addiction-rehab-center/content.png"
                alt="Keyword research for de-addiction rehab center"
                width={800}
                height={800}
                className="relative z-10 w-full h-auto rounded-[32px]"
              />
            </div>

            {/* Text Right */}
            <div className="space-y-8 order-1 lg:order-2 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif font-semibold text-black leading-tight">
                  Keyword Research
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  For good and result-oriented <Link href="/our-services/seo-marketing-services" className="text-[#ff9900] underline hover:text-black transition-colors">search engine optimization</Link>, there is a need to get everything in perfect order. Even the keywords should not be paid negligible attention. One should bear in mind that the inclusion of relevant and most searched keywords will only help them in getting the best results.
                </p>
                <p>
                  For example: If you are running a de-addiction rehab centre, the keyword list should include the following keywords:
                </p>

                <ul className="space-y-4 pt-2 list-disc pl-5">
                  {[
                    "Rehab centres near me",
                    "Best rehab centre in my area",
                    "What are the services provided by the rehab centre?",
                    "What is the rehab centre?"
                  ].map((item, index) => (
                    <li key={index} className="text-black font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link href="/contact-us">
                  <button className="px-8 py-4 bg-[#FA7E09] text-white rounded-full font-black tracking-widest hover:bg-[#FA7E09] transition-all duration-500 shadow-xl shadow-black/10 flex items-center gap-3 group">
                    Contact Us
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Content Creation Block (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Left */}
            <div className="space-y-8 order-1 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif font-semibold text-black leading-tight">
                  Content Creation
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Content creation is something that helps in building the faith of clients in your services. If you build up faith that the patients who take services from your rehab centre are likely to get de-addicted and live a normal life all over again. You can reach potential customers by:
                </p>

                <ul className="space-y-4 pt-2 list-disc pl-5">
                  {[
                    "Making conversational video with the previous patients who have been de-addicted by taking help from you",
                    "You can create visual graphics so that people will come to know what kind of services you are providing",
                    "You can create a blog post. Those who are researching to get a good rehab centre will once in a while encounter reading your blog posts."
                  ].map((item, index) => (
                    <li key={index} className="text-black font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Right */}
            <div className="relative order-2">
              <div className="absolute inset-0  rounded-[40px] transform  scale-105" />
              <Image
                src="/digital-marketing-de-addiction-rehab-center/keywords.png"
                alt="Content creation for rehab center"
                width={800}
                height={800}
                className="relative z-10 w-full h-auto rounded-[32px]"
              />
            </div>
          </div>

          {/* Link Building Block */}
          <div className="max-w-4xl mx-auto space-y-8 pt-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-black leading-tight">
                Link Building
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                Link building is crucial to make your web page reach the top. If your website is linked to those websites that have the emergence of high traffic on their page, then your website will also get to experience some of the potential traffic.
              </p>
              <p>
                <strong className="text-black">For example</strong>, those who are searching for the disadvantages of consuming alcohol daily, if they encounter the link of your website on their post, you will be more probable to be visited by those who are looking to get rid of alcohol.
              </p>
              <p>
                It is indispensable to build up links with the relevant sites. If yours is a rehab centre and you are posting something regarding your rehab centre on a blog post which has information about the basics of C++ programming, then do these two things relate to each other?
              </p>
            </div>
          </div>

        </div>
      </section>

      <ContactFormSection />
    </div>
  );
}
