"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ContactFormSection from "@/components/ContactFormSection";

export default function IvfClinicDigitalMarketing() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] font-sans">
      {/* Hero Section */}
      <section className="relative bg-transparent border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8 order-2 lg:order-1 relative z-10">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-semibold text-black leading-[1.1] tracking-tight">
                  What does the effective fertility online marketing strategy include?
                </h1>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Digital Marketing For <a href="https://sofathospital.com/ivf-treatment/" target="_blank" rel="noopener noreferrer" className="text-[#FA7E09] underline hover:text-black transition-colors">IVF Clinic & Hospitals in India</a>, As we know, in today’s era if somebody has to look for fertility specialists, they would take the help of the internet. So the fertility centers need to build up a proper fertility marketing strategy so that the couples are influenced to visit the centers.
                </p>
              </div>

            </div>

            {/* Right: Image */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 rounded-[70%] transform scale-105" />
              <Image 
                src="/ivf-clinic-digital-marketing-india/IVF01.png" 
                alt="Digital Marketing For IVF Clinics in India" 
                width={1000} 
                height={1000} 
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

      {/* Main Content Blocks */}
      <section className=" bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* Block 1: Website Design (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Left */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 rounded-[40px] transform scale-105" />
              <Image
                src="/ivf-clinic-digital-marketing-india/IVF02.png"
                alt="Website Designing and Online Reputation"
                width={1000}
                height={1000}
                className="relative z-10 w-full h-auto rounded-[32px]"
              />
            </div>

            {/* Text Right */}
            <div className="space-y-8 order-1 lg:order-2 relative z-10">
              <div className="space-y-4">
                <h2 className="text-xl md:text-3xl font-serif font-semibold text-black leading-tight">
                  The major thing which you need to pay good attention to is developing and designing a website which should be:
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <ul className="space-y-1 list-disc pl-5">
                  {[
                    "Custom-made",
                    "Easy-to-Use"
                  ].map((item, index) => (
                    <li key={index} className="text-black font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>

                <p><strong className="text-black">Your website should have:</strong></p>

                <ul className="space-y-1 list-disc pl-5">
                  {[
                    "Custom Design",
                    "Device Responsive Design",
                    "Quick access to site accomplishment and performance report",
                    "Compliant to HIPAA and ADA"
                  ].map((item, index) => (
                    <li key={index} className="text-black font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>

                <p>
                  <strong className="text-black">Online reputation: </strong>It is recommended that you should maintain a good online reputation. It should include positive feedback from the patients. Your reputation should be built based on the charge of fair prices. It could be accomplished with relevant software that would help you to generate reviews and collect patients' feedback in one place.
                </p>
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

          {/* Block 2: Measurable Results & Telepathic (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Left */}
            <div className="space-y-8 order-1 relative z-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-3xl font-serif font-semibold text-black leading-tight">
                  Real and Measurable results:
                </h2>
              </div>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  The fertility marketing strategy should help to accomplish real and measurable results. There should be a proper <Link href="/our-services/seo-marketing-services" className="text-[#FA7E09] underline hover:text-black transition-colors">SEO</Link> team that should entirely monitor and analyze the following:
                </p>

                <ul className="space-y-1 pt-1 list-disc pl-5">
                  {[
                    "Online Presence",
                    "Patient Satisfaction",
                    "Performance and results of the advertisement",
                    "Monthly reports",
                    "Insights"
                  ].map((item, index) => (
                    <li key={index} className="text-black font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>

                <p>
                  <strong className="text-black">Telepathic capabilities: </strong>Nowadays, owing to the busy lifestyle and routine patients are more prone to deliberate with the doctor who provides the telepathic capabilities. So whatever fertility marketing strategy you are opting for, it is very important to incorporate the telepathic capabilities anyway. It would increase your traffic by approximately 20 to 30 percent.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div className="relative order-2">
              <div className="absolute inset-0 rounded-[40px] transform scale-105" />
              <Image
                src="/ivf-clinic-digital-marketing-india/imagwe-01.png"
                alt="Measurable SEO results and telepathic capabilities"
                width={1000}
                height={1000}
                className="relative z-10 w-full h-auto rounded-[32px]"
              />
            </div>
          </div>

          {/* Block 3: Visual Content & Consistency (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start bg-[#FA7E09] px-12 py-16">
            {/* Text Left */}
            <div className="space-y-8 order-1 relative z-10">
              <div className="space-y-6 text-base text-white leading-relaxed font-medium">
                <p>
                  <b>Visual Content:&nbsp;</b>You should create more and more visual content. Visual content will facilitate your user to take a deep interest in your services.
                </p>
                <p>
                  You can create videos regarding frequently asked questions.
                </p>
                <p>
                  You can create videos regarding how your patients felt after taking treatment from you. Videos describing the procedure which is usually undertaken comes up with good results.
                </p>
                
                <p>
                  <b>Be consistent:&nbsp;</b>Do not lose consistency in marketing. If you are posting content or blog regularly then your appreciators may build up faith in you naturally. But if you become irregular then it will reduce traffic on your website. Moreover, it will cause a considerable effect on the reference as well.
                </p>
                
                <p>
                  <b>Build a close relationship:&nbsp;</b>It is highly advised to give each of your visitor’s considerable attention. Help them clear their doubts. Do not leave any of the comments unattended.
                </p>
                
                <p>
                  <b>Important buttons:&nbsp;</b>You should not forget to incorporate important buttons on the front page. Important buttons like ‘Book an Appointment’ and ‘Call Us” should not be placed somewhere the visitor finds difficult to see.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div className="relative order-2">
              <div className="absolute inset-0 rounded-[40px] transform scale-105" />
              <Image
                src="/ivf-clinic-digital-marketing-india/FAQS.png"
                alt="FAQs and Visual Content"
                width={400}
                height={512}
                className="relative z-10 w-full max-w-sm mx-auto h-auto rounded-[32px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Final Section: Social Media Marketing & Final Thoughts */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 relative z-10 bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black leading-tight text-center mb-8">
              Social Media Marketing:
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium text-center">
              <p>
                <Link href="/social-media-optimization" className="text-[#FA7E09] underline hover:text-black transition-colors">Social media</Link> plays a quintessential role. As we know many of the visitors who visit your websites have somewhere seen a post of yours or a video on some social media platform. From there, they have inculcated interest to visit your website. And by seeing your website, they have convinced themselves to book an appointment with you.
              </p>
              
              <div className="pt-8">
                <p className="text-xl text-black font-semibold mb-4">
                  Final Thoughts
                </p>
                <p>
                  Fertility treatment strategy differs from agency to agency. It does not matter which strategy you are opting for. The matter of concern is whether you are using updated tools and tactics. It is relevant to mention here that you should research the strategies of your competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
}
