"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import { Share2, Users, MessageSquareText, Video, Image as ImageIcon, HeartHandshake, Sparkles, Phone } from "lucide-react";

export default function SMOVancouverPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const smoSteps = [
    {
      number: "1",
      title: "Enhancing first impression",
      desc: "The professional team members of FlyMedia Technology clearly understand the importance of maintaining your brand’s profile on different social media platforms such as Facebook, Instagram and LinkedIn with the purpose of maximising your brand’s presence. Therefore, we make sure to thoroughly maintain your brand’s profile on different social media platforms with the aim of attracting more customers in an essential manner."
    },
    {
      number: "2",
      title: "Prioritising targeted audience",
      desc: "Our intellectual team members believe in finding the targeted audience according to the type of your brand, so that your brand gets more visibility and engagement. Instead of showing the same content to nearly everyone, we make sure to target the specific audience through demographics and geographics with the purpose of making your brand an effective and the only solution for the targeted audience."
    },
    {
      number: "3",
      title: "Consistent engagement",
      desc: "One of the prominent components of SMO includes the active engagement on different social media platforms with the aim of listening to your customers’ feedback, whether positive or negative, in order to build credibility among the customers. Our SMO experts in Vancouver are proficient enough in handling the comment section by honestly replying to the customers’ comments with the purpose of fostering trust among the customers."
    },
    {
      number: "4",
      title: "Altering strategy for different platforms",
      desc: "Our professional team members make sure to thoroughly use the specific SMO strategy according to the specific social media platform with the purpose of increasing customer engagement, along with optimising your social media presence in an essential manner. Our SMO experts have a deeper understanding of the comprehensive use of Instagram reels for your brand’s services, thus turning the viewers into your customers. Along with this, Facebook is basically used for developing a community that can significantly help in driving customers’ attention to your brand’s products."
    }
  ];

  const mindfulApproaches = [
    {
      title: "Prioritises short-form video",
      desc: "In order to drive the customer’s attention in an organic manner, our professional team members focus on making short-form videos, which are spreading rapidly in today’s modern world. Therefore, our professionals prioritise reels through Instagram for your brand’s services, thus reflecting the effectiveness of our SMO strategy.",
      icon: <Video className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Utilise User-Generated Content",
      desc: "This is one of the best SMO strategies, basically used for leveraging the photos and stories of your brand. This can significantly help in establishing credibility among the customers, thus making the strong impact of our SMO strategy essential.",
      icon: <ImageIcon className="w-10 h-10 text-[#ff9900]" />
    },
    {
      title: "Includes responsiveness",
      desc: "Our professional team members believe in driving the customer’s trust and attention through the feedback; therefore, we make sure to thoroughly reply to all the negative and positive comments on your brand’s services. As a result of this, customers would start developing their reliability and trust in your brand’s services in an effective manner.",
      icon: <HeartHandshake className="w-10 h-10 text-[#ff9900]" />
    }
  ];

  const faqs = [
    {
      question: "After how much time should I be able to see the results of SMO?",
      answer: "Through consistent effort in improving the SMO of your brand, you would be able to view the results after three months in an essential manner."
    },
    {
      question: "Does SMO help in improving SEO as well?",
      answer: "Yes, SMO can significantly help in improving the SEO of your brand by making your content visible to more customers and increasing your digital presence in an effective manner."
    },
    {
      question: "Is there any difference between SMO and SMM?",
      answer: "Yes, there is a significant difference between SMO and SMM, as SMO helps in boosting your social media presence through reels and building other communities. However, SMM includes paid ads that can significantly help in making your business reachable to customers."
    },
    {
      question: "How does SMO help in increasing traffic on LinkedIn?",
      answer: "SMO includes the creation of content in a consistent manner with the aim of finding the targeted audience in an essential manner. Through direct messages, your brand can achieve visibility within a short span of time."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans pb-16 text-black">

      {/* 2. Core Content Section */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column (Desktop) / Second (Mobile): Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Comprehensive Strategy Towards Increasing Your Sales
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  At FlyMedia Technology, the best <strong className="text-black font-semibold">SMO agency in Vancouver</strong> has experts with proficient knowledge of boosting the social media presence of your brand through different social media platforms. The new innovative strategies in Social Media Optimisation not only involve posting, but also go beyond that, due to which your brand’s products become the hot topic in the town. Our intellectual team members have innovative and strategic ideas regarding refining your content and profile in a certain manner that provides precise and effective results eventually. As a result of this, you can witness the drastic change in your brand’s reach, along with the number of customers, thus reflecting the positive impact of strategically implemented SMO strategies. Our professional team members ensure effective and complete guidance on increasing your number of customers by thoroughly improving your brand’s profile and refining content in a certain manner.
                </p>
              </div>
            </div>

            {/* Right Column (Desktop) / First (Mobile): Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2026/05/webs-dei-4.png"
                  alt="SMO Agency in Vancouver offering expert social media optimization services to boost your online presence."
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Turns Passive Viewers To Active Customers */}
      <section className="py-16 md:py-10 ">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Turns Passive Viewers To Active Customers
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              The professionals of FlyMedia Technology have a deep understanding of the type of content that viewers actually want to engage with. Therefore, we make sure to prepare or refine your brand’s content in a specific manner so that it looks engaging and shareable, thus preventing the viewers from browsing. Instead of this, they’ll engage with your brand’s services, thus increasing your engagement numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smoSteps.map((item, index) => (
              <div
                key={index}
                className="bg-[#414141] rounded-2xl p-8 hover:border-[#ff9900]/40 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-4">
                  <div className="text-4xl font-black text-[#ff9900]">
                    {item.number}
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-bold text-white font-serif"
                  >
                    {item.title}
                  </h3>
                  <p className="text-white text-xs sm:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mindful Approach For Empowering A Brand’s Image */}
      <section className="py-16 md:py-10 ">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Mindful Approach For Empowering A Brand’s Image
            </h2>
            <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
              Our skilled team members have precise knowledge regarding different SMO strategies that can significantly help in boosting your brand’s image through comprehensively refining the content and captions. Our professionals ensure to blend the SMO strategies with SEO in order to drive more customer attention, thus speeding up the growth of your specific business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mindfulApproaches.map((box, index) => (
              <div
                key={index}
                className="rounded-3xl p-8 shadow-sm hover:border-[#ff9900]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border border-gray-100"
              >
                <div className="space-y-5">
                  <div className="p-3.5 bg-gray-50 rounded-2xl w-fit">
                    {box.icon}
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-bold text-black font-serif"
                  >
                    {box.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {box.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dominate The Feed With SMO Experts Of FlyMedia Technology */}
      <section className="py-16 md:py-10  ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column (Desktop) / First (Mobile): Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-1">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden ">
                <Image
                  src="https://flymediatech.com/wp-content/uploads/2026/05/webs-dei-5.png"
                  alt="Digital marketing team managing social media optimization in Vancouver."
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column (Desktop) / Second (Mobile): Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Dominate The Feed With SMO Experts Of FlyMedia Technology
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Our professional team members have moved away from random posting, which has shown wonderful results in terms of brand visibility and customer engagement. Due to our more than 13 years of experience in the SMO field, we utilise modern technologies and clearly understand the latest trends to specifically align them with your brand’s services. As a result of this, your brand can witness a sharp rise in customer engagement, along with its brand’s visibility over social media platforms. Our efficiency in handling different social media platforms with precision, along with providing clear communication regarding our services, makes us the best <strong className="text-black font-semibold">SMO agency in Vancouver</strong>.
                </p>
                <p>
                  Through the latest technologies, such as using AI for reels, we make sure to attract more customers in an organic manner, thus reflecting our strong commitment towards high-quality results.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQs Accordion */}
      <section className="py-16 md:py-10 ">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              FAQs
            </h2>
          </div>

          <div className="border-t border-[#ff9900]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-[#ff9900]">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-base sm:text-lg text-black leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-[#ff9900] shrink-0">
                      {isOpen ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                          <path d="M8 20l8-8 8 8z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                          <path d="M12 8l8 8-8 8z" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-8 text-gray-700 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
