"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocationPortfolio from "@/components/LocationPortfolio";
import { Search, PenTool, Layout, DollarSign, Palette, Share2, Phone, ChevronDown } from "lucide-react";
import ContactFormSection from "@/components/ContactFormSection";

export default function EdmontonDigitalMarketingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const servicesList = [
    {
      title: "SEO",
      desc: "Search Engine Optimization is a paramount digital marketing element that helps improve your website ranking, strengthen your website and more. It includes not just improving website rank but also improving the quality, credibility, and performance of the website. Get our SEO services to make your website rank high on Google.",
      icon: <Search className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Content Writing",
      desc: "Content is another integral as well as essential part of digital marketing. The quality of content must be good, original, and free from errors and grammatical mistakes. It must be persuading and compelling to attract clients and to compel them to take action. We, the best digital marketing agency in Edmonton, have the best content writing team that can write persuasive and compelling content to help boost your business.",
      icon: <PenTool className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Website Designing",
      desc: "Websites are the face of business and speak a lot about you and your company. It also shows your authenticity, capability and trustworthiness. Hence, website designing should be done in a way that leaves a positive impression on the clients. Fly Media Technology provides the best website design services that are bound to provide results.",
      icon: <Layout className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Paid Marketing",
      desc: "We help businesses by planning and implementing paid marketing campaigns. Our campaigns are designed in a way that helps provide result-oriented outcomes that will help you achieve your marketing goals. Also, it can be customized and localized to suit your business needs and attract relevant and targeted audiences.",
      icon: <DollarSign className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Graphic Designing",
      desc: "Your brand image, logo, brochure, and more are the first impressions your customers have of you. Thus, it is crucial to design your logo, brochure, business cards, visit cards and more in a way that leaves a lasting impact on your client. We can help you design such catchy and compelling graphics.",
      icon: <Palette className="w-8 h-8 text-[#ff9900]" />
    },
    {
      title: "Social Media Marketing",
      desc: "In the current era, social media platforms are one of the best ways to reach customers. We can plan social media campaigns that provide result-oriented outcomes and increase your leads and conversion rates.",
      icon: <Share2 className="w-8 h-8 text-[#ff9900]" />
    }
  ];

  const faqList = [
    {
      q: "Can you provide local SEO service?",
      a: "Absolutely, we can target strategic locations to boost your visibility in your desired area. Our SEO experts will design the right keywords and strategies so that your business gains the right traffic, leads and sales."
    },
    {
      q: "Why do you charge a monthly fee for SEO service?",
      a: "It is because SEO needs to be modified and regulated frequently. It is a long-term service. We put continuous efforts like link building, keyword research and others on a regular basis to maintain the desired results."
    },
    {
      q: "How is PPC different from SEO?",
      a: "PPC refers to pay-per-click, which is an instant service that aims to bring immediate sales with paid search visibility. PPC is beneficial for short-term campaigns. On the other hand, SEO builds long-term traffic through strategic techniques that take months but give better ROI with time."
    },
    {
      q: "What should you expect from SEO services?",
      a: "If you are dealing with a reputable agency for SEO, you should expect these non-negotiable outcomes. It includes increased visitors, enhanced online visibility with organic traffic, a boost in sales and updated client relationship management tools."
    },
    {
      q: "How is the White Hat method important?",
      a: "The white hat method is an essential technique in SEO because it builds trust and prevents costly penalties by adhering to search engine guidelines. It protects your brand’s image with qualitative content instead of manipulative claims."
    },
    {
      q: "Do I really need SEO services for my business?",
      a: "Well, at the present time, the search engines are loaded with a vast network of websites and businesses. The possibility for Google and your target audience to see your website is very low if you do not use SEO. So, if you want to see positive results for your website, connect with the best agency for SEO service in Edmonton."
    },
    {
      q: "Why do I see my competitor's website ranking higher than mine?",
      a: "Because they are ahead of you in SEO strategies, don’t worry, we can help you by upgrading your website visibility. We can rebuild your site structure, do better linking, and enhance keywords to make your content relevant and qualitative and most importantly, visible."
    },
    {
      q: "What is the cost of the SEO service?",
      a: "The cost of SEO service can vary depending on the agency you choose, as some charge based on the keywords and others based on project or monthly retainers. Although site size, the company’s competitiveness and the agencies’ expertise also matter. The average cost for keywords can start from $200 per month and can go up to $750 per month in Alberta."
    },
    {
      q: "When does the result become visible?",
      a: "SEO is a long-term process, but it gives you sustainable and organic visibility. Good things take time, so do the results. You need to wait for at least four to six months to find notable changes in your website. There are other things that add value to your website, like content writing, link building, content syndication and more. Therefore, SEO results take time to appear."
    },
    {
      q: "How to identify the best agency for SEO in Canada?",
      a: "You should consult multiple services and agencies to have a better understanding and market exposure. You should ask them about what elements they are working on, their guarantee on ROI, where they are based, what techniques they use, what is their take on your present website, do check their own website and even more. If they have any hidden costs, it is a red flag because they need to be transparent so that you remain doubt-free."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F1F1F1] font-sans text-black">

      {/* 1. Hero Title Banner */}
      <section className="relative w-full h-[220px] sm:h-[280px] bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/fgodsfgjsdo.webp')`
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 px-8 py-5 rounded-xl shadow-2xl inline-block">
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-serif"
            >
              Digital Marketing Agency in{" "}
              <span className="text-[#ff9900] relative inline-block">
                Edmonton
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#ff9900]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Fly Media Technology: The Best Marketing Company In Alberta */}
      <section className="py-16 md:py-20 border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Image Illustration */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden ">
                <Image
                  src="/uploads/2024/06/digitalmarkkgg.jpg"
                  alt="Smartphone with digital marketing and technology icons, representing mobile app development and digital solutions."
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Right Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Fly Media Technology: The Best Marketing Company In Alberta
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  If you are looking for the best marketing company, look no further than Fly Media Technology. We provide you with the best digital marketing services, such as SEO, Content writing, email marketing and more. With our experience and expertise, we can help your business grow in the digital landscape. Besides, our innovative thinking, vision and creative team can help you achieve new heights.
                </p>
                <p>
                  We can provide you with comprehensive and bespoke digital marketing services that are carefully planned by our experienced and exceptional team and will help you achieve result-oriented outcomes. We can help you meet your business goals and objectives. So, contact us today to excel and grow your business in the digital landscape.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Strengthen Your Online Presence With Our Top Notch Services */}
      <section className="py-16 md:py-20 border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Heading & Paragraph Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-black leading-tight"
              >
                Strengthen Your Online Presence With Our Top Notch Services
              </h2>

              <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Having an online presence in the current world is extremely important and has also become an indispensable part of businesses. We, the best digital marketing company in Edmonton, can help you strengthen and boost your online presence through our extensive digital marketing services.
                </p>
                <p>
                  Digital marketing has become important, especially for businesses that aim to expand online. Since the online market is competitive, you need to ace your game and play your cards right to achieve your desired goals. Here, Fly Media Technology can help you. We understand how digital marketing works, what factors must be considered, what should and shouldn’t be done to grow online, and more. Hence, we can provide you with better and top-notch services to strengthen your online presence and help you achieve your business goals and objectives.
                </p>
              </div>
            </div>

            {/* Right Column: Second Image Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full aspect-[5/3] max-w-[560px] transform hover:scale-102 transition-transform duration-500 ease-out overflow-hidden   ">
                <Image
                  src="/uploads/2024/06/digitalmarkgg.jpg"
                  alt="Social media icons floating around smartphone on workspace with coffee and stationery; digital marketing concept."
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Our Digital Marketing Services */}
      <section className="bg-[#F1F1F1] py-16 md:py-20 border-b border-gray-200/40">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-serif font-bold text-black"
            >
              Our Digital Marketing Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At Fly Media Technology, the best digital marketing agency in Edmonton, we provide comprehensive digital marketing services that include many aspects of digital marketing. Our services include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#ff9900]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="p-3.5 bg-gray-50 rounded-2xl w-fit text-[#ff9900]">
                    {service.icon}
                  </div>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-bold text-black font-serif"
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How Can Fly Media Technology Help You? */}
      <section className="p border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 space-y-6 text-center">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-serif font-bold text-black"
          >
            How Can Fly Media Technology Help You?
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed max-w-4xl mx-auto">
            We can help you achieve your dreams with the help of our expertise and experience. Fly Media Technology is the best marketing company in Alberta. We have been in this business for more than 12 years and have gained a wealth of experience. Our innovation, creativity, exceptional teams, methodologies and passion for helping businesses excel digitally make us the best choice for your digital marketing journey. So, what are you waiting for? We have helped several clients across the globe and from different industries and fields; we can help you, too! Contact our team to know more about our services and start your digital marketing journey with us.
          </p>
        </div>
      </section>

      {/* 6. Frequently Asked Questions (FAQ) Accordion */}
      <section className="py-16 md:py-20 bg-[#F1F1F1]">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl font-serif font-bold text-black tracking-wide"
            >
              FAQ
            </h2>
          </div>

          <div className="border-t border-[#ff9900]">
            {faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-[#ff9900] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 text-left flex items-center justify-between gap-4 font-bold text-black hover:text-[#ff9900] transition-colors"
                  >
                    <span className="text-base sm:text-[17px] font-bold text-black">{faq.q}</span>
                    <span className="text-[#ff9900] ml-4 flex-shrink-0">
                      {isOpen ? (
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path>
                        </svg>
                      ) : (
                        <svg className="w-2.5 h-3.5 fill-current" viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                        </svg>
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-5 pr-8 text-gray-700 text-sm sm:text-[15px] leading-relaxed">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>


<ContactFormSection/>
      {/* Dynamic FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqList.map((faq) => ({
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
    </main>
  );
}
