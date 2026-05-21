"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import ContactFormSection from "@/components/ContactFormSection";

// --- Hero / Hiring Section ---
const HiringHero = () => {
  return (
    <section className="bg-[#F1F1F1] pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-square max-w-[460px]">
              <Image
                src="/uploads/2024/03/imgmenu025.png"
                alt="We Are Hiring Illustration"
                fill
                className="object-contain"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Right Side Details */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-serif font-bold text-black leading-tight">
              We Are Hiring!
            </h1>
            <p className="text-gray-700 text-base md:text-[17px] leading-relaxed font-semibold">
              Google Adword Specialist in Ludhiana and Google Adwords Jobs in Punjab, We are requiring the candidates to fulfil the vacancies of the google Adword jobs in Ludhiana. We are desiring the google adword specialist who has undergone the google adword training course. This is the main thing which we look for in our candidates, as the course is designed by the industry experts who are accountable for running the sundry successful campaigns with Google Adwords since the last decade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Importance Section ---
const ImportanceSection = () => {
  return (
    <section className="py-16 bg-[#F1F1F1] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight max-w-5xl mx-auto">
          Importance Of The Google Adword Programme
        </h2>
        <p className="text-gray-700 text-base md:text-[17px] leading-relaxed max-w-6xl mx-auto font-semibold">
          Google AdWords is one of the greatest advertising programs which help you to expand your business by escalating the number of potential customers. If you have good knowledge and the skill in running google ads, then it becomes easy for you to show your ad based on the specific keywords or the targeted group of audience. The potential benefit of using google adword is that you can set your budget.
        </p>
        <div className="pt-6 space-y-3">
          <p className="text-xl md:text-2xl font-serif font-bold text-black max-w-4xl mx-auto leading-tight">
            Why Should You Apply For This Profile At Flymedia Technology?
          </p>
          <p className="text-[#EC7317] text-base md:text-lg font-bold uppercase tracking-wider">
            You will enjoy the following benefits at the flymedia technology:
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Salary & Ambience Section ---
const SalaryAmbienceSection = () => {
  return (
    <section className="py-16 bg-[#F1F1F1] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-[34px] font-serif font-bold text-black leading-tight">
                The Great Salary Package
              </h2>
              <p className="text-gray-700 text-base md:text-[17px] leading-relaxed font-semibold">
                Depending upon your skills and calibre, we are ready to pay a great salary package. But we demand your loyalty, passion and dedication to complete the projects with the ultimate precision, creativity and relevancy.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200/50">
              <h2 className="text-2xl md:text-3xl lg:text-[34px] font-serif font-bold text-black leading-tight">
                The Great Ambience
              </h2>
              <p className="text-gray-700 text-base md:text-[17px] leading-relaxed font-semibold">
                We promote a completely cordial work culture in which the employees attempt to accomplish the projects with teamwork. The positive vibes of work and the perks which you get after showing an improvement in your performance are all that an employee can want from the company.
              </p>
            </div>
          </div>

          {/* Right Column: Salatuy Coins Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-square max-w-[460px]">
              <Image
                src="/uploads/2024/03/salatuy-page.png"
                alt="Salary and Ambience Illustration"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FAQ / Accordion Section ---
const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      title: "The Growth Scope",
      content: "Throughout your work period at our company, you will not only be working in the designated sphere. Rather we aim at giving each of the employees multiple opportunities to grow in the other spheres of the same field as well."
    },
    {
      title: "Your Knowledge Gets Enhanced",
      content: "While working under the supervision of the seniors and the team leaders, you will get to learn a lot. This learning will prove to be quintessentially helpful for you when you will be promoted to the higher posts."
    },
    {
      title: "Work With The International Clients",
      content: "We have 70% of the clients who are of international origin. Here you get a great thing to mention in your experience when you will apply to Multinational Companies."
    },
    {
      title: "We Groom Your Work Ethics",
      content: "Work ethics are one of the essential pillars of any company. At flymedia technology, we make sure that we provide the perfect atmosphere that helps you to grow within the work ethical boundaries."
    },
    {
      title: "The Collective Efforts To Touch The Sky",
      content: "In our IT company, we believe that the positive efforts of every employee will help our company to grow and touch the sky. We want each of your employees to grow along with the company."
    },
    {
      title: "We Provide You Training As Well",
      content: "If you are fresher and still want to make your career in this field, then we shall be providing you with a whole lot of opportunities to get trained and work as the learnt executive to carry out the various responsibilities of the Google Adword executive."
    },
    {
      title: "How Do We Intend To Provide The Learning Of The Google Adword Course?",
      content: "Usually, we follow the curriculum for the google training course to infuse the learning in you. We intend to provide the advanced certificate to our apprentices by making them tough the heights after starting from the basic level."
    }
  ];

  return (
    <section className="py-16 bg-[#F1F1F1] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: FAQs Question Illustration */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-[460px]">
              <Image
                src="/uploads/2024/03/FAQS.png"
                alt="FAQs Illustration"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Right Column: Accordion Toggles */}
          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            <div className="space-y-4">
              {faqItems.map((item, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : idx)}
                      className="flex justify-between items-center w-full px-6 py-5 text-left font-serif font-bold text-base md:text-lg text-black hover:text-[#EC7317] transition-all duration-300 bg-white"
                    >
                      <span className="pr-4 leading-tight">{item.title}</span>
                      <span className="text-[#EC7317] shrink-0">
                        {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 bg-white border-t border-gray-50">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-semibold">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Container ---
export default function GoogleAdwordsPage() {
  const pageSEO = {
    title: "Google Adwords Specialist Jobs in Ludhiana & Punjab | Flymedia Technology",
    h1: ["Google AdWords Specialist Jobs in Punjab"],
    paragraphs: [
      "Fulfill your career aspirations at Flymedia Technology. Join our dedicated Google AdWords specialist team in Ludhiana and build robust Google Ad campaigns."
    ],
    folderName: "flymediatech.com_home",
    images: ["salatuy-page.png"]
  };

  return (
    <ServicePage {...pageSEO} bgClass="bg-[#F1F1F1]">
      <HiringHero />
      <ImportanceSection />
      <SalaryAmbienceSection />
      <AccordionSection />
      <ContactFormSection />
    </ServicePage>
  );
}
